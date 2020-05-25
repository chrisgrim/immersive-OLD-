<template>
<div class="event-create__image">
    <section class="field">
        <h2 style="text-align:center">Upload Image</h2>
        <div class="event-create-image">          
            <div class="image-loader">
                <label class="image-loader__label" :style="displayImage">
                    <div class="image-loader__label-body" :class="{ over: hasImage, load: loading }">
                        <div class="box">
                            <div class="in">
                                <div v-if="!loading">
                                    <svg class="b" height="32" width="32" viewBox="0 0 24 24" aria-label="Add an image or video" role="img"><path d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"></path></svg>
                                </div>
                                 <div>
                                    <p v-if="!hasImage">Click here to upload image<br>Must be at least 800 x 450 and under 20mb</p>
                                    <p v-if="hasImage">Change Image</p>
                                </div>
                            </div>
                        </div>
                        <image-upload @loaded="onImageUpload"></image-upload>
                        <CubeSpinner :loading="loading"></CubeSpinner>
                    </div>
                </label>
                <div>
                    <div v-if="$v.imageFile.$error" class="validation-error">
                        <p class="error" v-if="!$v.imageFile.required">The image is required</p>
                        <p class="error" v-if="!$v.imageFile.fileSize">The image file size is too large</p>
                        <p class="error" v-if="!$v.imageFile.fileType">The image needs to be a JPG, PNG or GIF</p>
                        <p class="error" v-if="!$v.imageFile.imageRatio">The image needs to be at least 800 x 450</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="event-create__submit-button">
        <button :disabled="disabled" @click.prevent="onBackInitial()" class="nav-back-button"> Save and Exit </button>
    </div>
    <div class="create-button__back">
        <button :disabled="disabled" class="create" @click.prevent="onBack('advisories')"> Back </button>
    </div>
    <div class="create-button__forward">
        <button :disabled="disableUntilUploaded" v-if="readyToSubmit" class="create" @click.prevent="onForward('review')"> Final Review </button>
    </div>

</div>

</template>

<script>

    import formValidationMixin from '../../mixins/form-validation-mixin'
    import { required } from 'vuelidate/lib/validators'
    import CubeSpinner  from '../layouts/loading.vue'
    


    export default {

        mixins: [formValidationMixin],

        components: { CubeSpinner },
        
        props: ['event'],

        computed: {
            hasImage() {
                return this.image || this.imageFile.src ? true : false;
            },

            displayImage() {
                return `backgroundImage: url('${this.imageFile.src && !this.$v.imageFile.$error ? this.imageFile.src : this.image}')`
            },

            endpoint() {
                return `/create-event/${this.event.slug}/images`
            },

        },

        
        data() {
            return {
                image: this.event.largeImagePath ? `/storage/${this.event.largeImagePath}` : '',
                loading: false,
                disabled: false,
                readyToSubmit: false,
                imageFile: '',
                formData: new FormData(),
                disableUntilUploaded: this.event.largeImagePath ? false : true,
            };
        },

        methods: {

            onImageUpload(image) {
                this.imageFile = image; 
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false; };
                this.onSubmit();
            },

            onSubmit() {
                this.onToggle();
                this.formData.append('image', this.imageFile.file);
                console.log(this.imageFile.file);
                axios.post(this.endpoint, this.formData)
                .then(res => {
                    this.disableUntilUploaded = false;
                    this.onToggle();
                })
                .catch(err => { this.onErrors(err) });
            },

            onToggle() {
                this.loading = !this.loading;
                this.disabled = !this.disabled;
            },

            checkSubmissionStatus() {
                this.event.status !== 'p' &&
                this.event.status !== 'e' &&
                this.event.organizer_id && 
                this.event.name && 
                (this.event.location_latlon || !this.event.hasLocation) && 
                this.event.category_id &&
                this.event.show_times &&
                this.event.description &&
                this.event.advisories_id
                ? this.readyToSubmit = true : false;
            },

        },

        created() {
            this.checkSubmissionStatus();
        },

        validations: {
            imageFile: {
                required,
                fileSize() { 
                    return this.imageFile ? this.imageFile.file.size < 20971520 : true 
                },
                fileType() {
                    return this.imageFile ? ['image/jpeg','image/png','image/gif'].includes(this.imageFile.file.type) : true
                },
                imageRatio() {
                    return this.imageFile ? this.imageFile.width > 800 && this.imageFile.height > 450 : true 
                }
            },
        },
    };
</script>