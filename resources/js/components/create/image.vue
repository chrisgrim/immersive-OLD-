<template>
<div>
    <div class="organization-form">
        <h2> Add a cover image</h2>
    </div>
    <div>
        <p>Choose an image that best shows off your event</p>
    </div>
        
    <div class="image-upload-field">
        <label class="image-upload-label">Event image</label>
        <label 
        class="image-upload-wrapper"
        :class="{ imageloaded: eventImage }"
        :style="{ backgroundImage: `url('${eventImage ? eventImage : ''}')` }">
            <span class="image-upload-layover">
                <div class="text-center">{{ eventImage ? 'edit' : '+' }}</div>
            </span>
            <image-upload @loaded="onImageUpload"></image-upload>
        </label>
        <input 
        type="hidden" 
        name="eventImagePath" 
        v-model="eventImage"
        @input="$v.eventImage.$touch()"
        />

         <div v-if="$v.eventImage.$error" class="validation-error">
            <p class="error" v-if="!$v.eventImage.required">The Image is required</p>
             <p class="error" v-if="!$v.eventImage.file_size_validation">Image size is too large</p>
        </div>

    </div>
    <div>
        <button class="create" @click.prevent="createImage()"> 
            Save and Continue 
        </button>
    </div>
</div>

</template>

<script>
import _ from 'lodash';
import ImageUpload from '../layouts/image-upload.vue'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

// const file_size_validation = (value, vm) =>  {
//   if (!value) {
//     return false;
//   }
//   let file = value;
//   return (file.size < 91456)
// };


export default {
    components: { 
        ImageUpload,
    },
    
    props: {
        event: { type: Object }
    },
    
    data() {
        return {
            eventImage: this.event.largeImagePath ? `/storage/${this.event.largeImagePath}` : '',
            defaultImage: '/storage/website-files/upload.png',
            eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
        };
    },

    methods: {

        async onImageUpload(image) {
            
            //This adds the image to the page so the user can see
            this.eventImage = image.src;
            //This adds the image as a file so it can be uploaded to the database
            this.event.largeImagePath = image.file;

        },

        async createImage() {

            //checks if all the validatoon rules have been followed and returns false if they haven't
            if (this.$v.$invalid) { return false }
            //create a new empty Form Data
            let data = new FormData();

            // add the image to the form data and name it image
            data.append('image', this.event.largeImagePath);

            //post the image to laravel with image data attached
            axios.post(`${this.eventUrl}/images`, data)
            .then(response => {
                console.log('worked');
            })
            .catch(errorResponse => {
                // show if there are server side validation errors
                this.validationErrors = errorResponse.response.data.errors
                console.log(errorResponse.response.data.errors)
            });
        },
    },

    validations: {
        eventImage: {
            required,
            
        },
    },
    
};
</script>