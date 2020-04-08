<template>
<div class="image">
    <div class="section">
        <h2 style="text-align:center">Upload Image</h2>
        <div class="img">          
            <div class="loader">
                <label 
                class=""
                :style="{ backgroundImage: `url('${imageSrc ? imageSrc : eventImage}')` }">
                    <div 
                    class="dash"
                    :class="{ over: hasImage, load: isLoading }">
                        <div 
                        class="box">
                            <div class="in">
                                <div v-if="!isLoading">
                                    <svg class="b" height="32" width="32" viewBox="0 0 24 24" aria-label="Add an image or video" role="img"><path d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"></path></svg>
                                </div>
                                 <div>
                                    <p v-if="!hasImage">Click here to upload image<br>Must be at least 1280 x 800 and under 20mb</p>
                                    <p v-if="hasImage">Change Image</p>
                                </div>
                            </div>
                        </div>
                        <image-upload @loaded="onImageUpload"></image-upload>
                        <CubeSpinner :loading="isLoading"></CubeSpinner>
                    </div>
                </label>
                <div>
                    <div v-if="$v.finalImage.$error" class="validation-error">
                        <p class="error" v-if="!$v.finalImage.required">The image is required</p>
                        <p class="error" v-if="!$v.finalImage.fileSize">The image file size is too large</p>
                        <p class="error" v-if="!$v.finalImage.fileType">The image needs to be a JPG, PNG or GIF</p>
                        <p class="error" v-if="!$v.finalImage.imageRatio">The image needs to be at least 800 x 400</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div class="inNav">
        <button :disabled="dis" class="create" @click.prevent="goBack()"> Back </button>
        <button :disabled="disImage" v-if="readyToSubmit" class="create" @click.prevent="submitReview()"> Final Review </button>
    </div>
</div>

</template>

<script>
import { required } from 'vuelidate/lib/validators'
import CubeSpinner  from '../layouts/loading.vue'


export default {
    components: { 
        CubeSpinner
    },
    
    props: {
        event: { type: Object }
    },

    computed: {
        hasImage() {
            return this.eventImage || this.imageSrc ? true : false;
        }
    },

    
    data() {
        return {
            eventImage: this.event.largeImagePath ? `/storage/${this.event.largeImagePath}` : '',
            defaultImage: '/storage/website-files/upload-icon.png',
            eventUrl:`/create-event/${this.event.slug}`,
            finalImage: '',
            imageSrc: '',
            isLoading: false,
            readyToSubmit: false,
            isModalVisible: false,
            dis: false,
            disImage: this.event.largeImagePath ? false : true,
        };
    },

    methods: {

        //This adds the image to the page so the user can see
        //Then adds the image as a file so it can be uploaded to the database
        onImageUpload(image) {
            this.finalImage = image.file;
            this.finalImage.width = image.width;
            this.finalImage.height = image.height;
            this.$v.$touch(); 
            if (this.$v.$invalid) { return false };
            this.imageSrc = image.src;
            this.addImage(image);
        },


        addImage(image) {
            this.isLoading = true;
            this.dis = true;
            let data = new FormData();
            data.append('image', this.finalImage);
            axios.post(`${this.eventUrl}/images`, data)
            .then(response => {
                this.isLoading = false;
                this.dis = false;
                this.disImage = false;
                this.event.status == 'p' ? this.readyToSubmit = false : this.readyToSubmit = true;
            })
            .catch(errorResponse => { 
                this.validationErrors = errorResponse.response.data.errors; this.dis = false; });
        },

        showModal(event) {
            this.isModalVisible = true;
        },

        closeModal() {
            this.isModalVisible = false;
        },

        submitReview() {
            window.location.href = `${this.eventUrl}/review`;
        },

        readySubmit() {
            this.event.status !== 'p' &&
            this.event.organizer_id && 
            this.event.name && 
            (this.event.location_latlon || !this.event.hasLocation) && 
            this.event.category_id &&
            this.event.show_times &&
            this.event.description &&
            this.event.advisories_id
            ? this.readyToSubmit = true : false;
        },

        goBack() {
            window.location.href = `${this.eventUrl}/advisories`;
        },


    },

    created() {
        this.readySubmit();
    },

    validations: {
        finalImage: {
            required,
            fileSize() { 
                return this.finalImage ? this.finalImage.size < 20971520 : true 
            },
            fileType() {
                return this.finalImage ? ['image/jpeg','image/png','image/gif'].includes(this.finalImage.type) : true
            },
            imageRatio() {
                return this.finalImage ? this.finalImage.width > 800 && this.finalImage.height > 400 : true 
            }
        },
    },
    
};
</script>