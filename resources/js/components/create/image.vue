<template>
<div>
    <div class="create-title">
        <h2> Add a cover image</h2>
        <p>Choose an image that best shows off your event</p>
    </div>
    <div class="image-upload-field" v-if="!imageSrc">
        <label 
        class="image-upload-wrapper"
        :class="{ imageloaded: eventImage }"
        :style="{ backgroundImage: `url('${eventImage ? eventImage : ''}')` }">
            <span class="image-upload-layover">
                <div class="text-center"> + </div>
            </span>
            <image-upload @loaded="onImageUpload"></image-upload>
        </label>
    </div>
    <div class="p-3 bg-white shadow rounded-lg creat-field">
        <!-- Cropper container -->
        <div v-if="this.imageSrc" style="width: 32%; display: inline-block;" class="my-3 d-flex align-items-center justify-content-center mx-auto">
            <vue-cropper 
            class="mr-2 w-50" 
            ref='cropper' 
            :guides="true"
            :aspectRatio="16 / 9"
            :initialAspectRatio="16 / 9"
            :zoomable="false"
            preview=".preview"
            :src="imageSrc">
            </vue-cropper>
        </div>
        <div v-if="this.imageSrc" class="preview" />
        <div v-if="this.tooSmall" class="validation-error">
            <p class="error" v-if="this.tooSmall">The image needs to be at least 1200 x 800</p>
        </div>
    <div>
        <button class="create" @click.prevent="createImage()"> 
            Save and Continue 
        </button>
    </div>
        <button v-if="event.largeImagePath" class="create" @click.prevent="submitEvent()"> 
            Submit Event
        </button>
    </div>
</div>

</template>

<script>
import _ from 'lodash';
import ImageUpload from '../layouts/image-upload.vue'
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import { required, minLength, maxLength } from 'vuelidate/lib/validators'


export default {
    components: { 
        ImageUpload,VueCropper
    },
    
    props: {
        event: { type: Object }
    },
    
    data() {
        return {
            eventImage: this.event.largeImagePath ? `/storage/${this.event.largeImagePath}` : '',
            defaultImage: '/storage/website-files/upload.png',
            eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
            finalImage: '',
            imageSrc: '',
            tooSmall: '',
        };
    },

    methods: {

        //This adds the image to the page so the user can see
        //Then adds the image as a file so it can be uploaded to the database
        async onImageUpload(image) {
            image.width < 1200 || image.height < 800 ? this.tooSmall = true : this.assignImage(image);
        },

        async assignImage(image) {
            this.imageSrc = image.src;
            this.finalImage = image.file;
            this.tooSmall = false
        },


        //checks if all the validatoon rules have been followed and returns false if they haven't. Then create form data named data and append the image.
        async createImage() {
            // this.$v.$touch(); 
            // if (this.$v.$invalid) { return false };
                let data = {
                    image: this.$refs.cropper.getCroppedCanvas().toDataURL('image/jpeg', 1.0)
                };
            
                axios.post(`${this.eventUrl}/images`, data)
                .then(response => {
                    window.location.reload();
                })
                .catch(errorResponse => { this.validationErrors = errorResponse.response.data.errors });
        },

        submitEvent() {
            this.event.organizer_id && 
            this.event.name && 
            this.event.location_latlon && 
            this.event.category_id &&
            this.event.show_times &&
            this.event.description &&
            this.event.expectation_id &&
            this.event.largeImagePath
            ? window.location.href = `${this.eventUrl}/thankyou` : console.log('not done');
        }

    },

    validations: {
        eventImage: {
            required,
            // fileSize() { return this.finalImage ? this.finalImage.size < 2097152 : true },
        },
    },
    
};
</script>