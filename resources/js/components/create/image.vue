<template>
<div class="image">
    <div class="section">
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
                                    <p v-if="!hasImage">Click here to upload image<br>Must be at least 1280 x 800 and under 2mb</p>
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
                        <p class="error" v-if="!$v.finalImage.required">The Image is required</p>
                        <p class="error" v-if="!$v.finalImage.fileSize">The Image is too large</p>
                        <p class="error" v-if="!$v.finalImage.fileType">Needs to be a Jpg, Png or Gif</p>
                        <p class="error" v-if="!$v.finalImage.imageRatio">Needs to be at least 1200 x 800</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    <div class="inNav">
        <button :disabled="dis" class="create" @click.prevent="goBack()"> Back </button>
        <button :disabled="dis" v-if="readyToSubmit" class="create" @click.prevent="showModal(event)"> Submit Event </button>
    </div>
    <modal v-show="isModalVisible" @close="closeModal">
        <div slot="header">
            <div class="circle sub">
                <p>&#10003;</p>
            </div>
        </div>
        <div slot="body"> 
            <h3>Is Everything Correct?</h3>
            <p>Events take 1-2 days to be reviewed</p>
        </div>
        <div slot="footer">
            <button class="btn sub" @click="submitEvent()">Submit</button>
        </div>
    </modal>
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
                this.readyToSubmit = true;
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

        submitEvent() {
            this.dis = true;
            window.location.href = `${this.eventUrl}/thankyou`;
        },

        readySubmit() {
            this.event.organizer_id && 
            this.event.name && 
            this.event.location_latlon && 
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
                return this.finalImage ? this.finalImage.size < 2097152 : true 
            },
            fileType() {
                return this.finalImage ? ['image/jpeg','image/png','image/gif'].includes(this.finalImage.type) : true
            },
            imageRatio() {
                return this.finalImage ? this.finalImage.width > 1280 && this.finalImage.height > 800 : true 
            }
        },
    },
    
};
</script>