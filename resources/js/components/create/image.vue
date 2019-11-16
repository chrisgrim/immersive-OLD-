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
             <p class="error" v-if="!$v.eventImage.fileSize">Image size is too large</p>
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
            finalImage: '',
        };
    },

    methods: {

        //This adds the image to the page so the user can see
        //Then adds the image as a file so it can be uploaded to the database
        async onImageUpload(image) {
            this.eventImage = image.src;
            this.finalImage = image.file;
            this.createImage();
        },

        //checks if all the validatoon rules have been followed and returns false if they haven't. Then create form data named data and append the image.
        async createImage() {
            console.log(this.finalImage.size);
            this.$v.$touch(); 
            if (this.$v.$invalid) { return false };
            
            let data = new FormData();
            data.append('image', this.finalImage);
            axios.post(`${this.eventUrl}/images`, data)
            .then(response => {
                console.log('worked');
            })
            .catch(errorResponse => { this.validationErrors = errorResponse.response.data.errors });
        },
    },

    validations: {
        eventImage: {
            required,
            fileSize() { return this.finalImage ? this.finalImage.size < 2097152 : true },
            
        },
    },
    
};
</script>