<template>
<div class="image">
    <div class="section">
        <div class="img">
            <div v-if="imageSrc">
                <label>
                    <div>
                        Change Image
                    </div>
                    <image-upload @loaded="changeImage"></image-upload>
                </label>
                
            </div>
            
            <div class="image-upload-field" v-if="!imageSrc">
                <label 
                class="image-upload-wrapper"
                :class="{ imageloaded: eventImage }"
                :style="{ backgroundImage: `url('${eventImage ? eventImage : defaultImage}')` }">
                    <span class="image-upload-layover">
                        <div class="text-center"> + </div>
                    </span>
                    <image-upload @loaded="onImageUpload"></image-upload>
                </label>
            </div>
            <div>
                <!-- Cropper container -->
                <div v-if="this.image">
                    <vue-cropper 
                    class="mr-2 w-50" 
                    ref='cropper' 
                    :guides="true"
                    :aspectRatio="16 / 9"
                    :initialAspectRatio="16 / 9"
                    :zoomable="false"
                    preview=".preview"
                    :src="image">
                    </vue-cropper>
                </div>
                <div v-if="this.tooSmall" class="validation-error">
                    <p class="error" v-if="this.tooSmall">The image needs to be at least 1200 x 800</p>
                    <p class="error" v-if="this.tooSmall">The image needs to be at least 1200 x 800</p>
                </div>
                <div v-if="$v.imageSrc.$error" class="validation-error">
                    <p class="error" v-if="!$v.imageSrc.required">The Image is required</p>
                </div>
            </div>
            <div>
                <button v-if="readyToSubmit" class="create" @click.prevent="submitEvent()"> Submit Event </button>
                <button v-if="!readyToSubmit" class="create" @click.prevent="createImage()"> Add Image </button>
            </div>
        </div>
        <div class="pre">
            <div v-if="this.imageSrc" class="prev-box" :class="this.onsub" :style="'height:'+ heightcalc + 'px;'">
                <div class="preview" :style="'height:'+ heightcalc + 'px;'"/>
                <CubeSpinner :loading="isLoading"></CubeSpinner>
            </div>
        </div>
        
    </div>
    <div class="inNav">
        <button :disabled="dis" class="create" @click.prevent="goBack()"> Back </button>
        <button :disabled="dis" v-if="!readyToSubmit" class="create" @click.prevent="createImage()"> Add Image </button>
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
import _ from 'lodash';
import ImageUpload from '../layouts/image-upload.vue'
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
import { required, minLength, maxLength } from 'vuelidate/lib/validators'
import CubeSpinner  from '../layouts/loading.vue'


export default {
    components: { 
        ImageUpload, VueCropper, CubeSpinner
    },
    
    props: {
        event: { type: Object }
    },

    computed: {
        image() {
            return this.imageSrc
        },
        heightcalc() {
            return this.width / 2 * (9 / 16);
        }
    },

    
    data() {
        return {
            eventImage: this.event.largeImagePath ? `/storage/${this.event.largeImagePath}` : '',
            defaultImage: '/storage/website-files/upload-icon.png',
            eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
            finalImage: '',
            imageSrc: '',
            tooSmall: '',
            isLoading: false,
            readyToSubmit: false,
            dis: false,
            onsub: '',
            width: '',
            isModalVisible: false,
        };
    },

    methods: {

        //This adds the image to the page so the user can see
        //Then adds the image as a file so it can be uploaded to the database
        onImageUpload(image) {
            image.width < 1280 || image.height < 720 ? this.tooSmall = true : this.assignImage(image);
        },

        assignImage(image) {
            console.log(image);
            this.imageSrc = image.src;
            this.finalImage = image.file;
            this.tooSmall = false;
        },

        changeImage(image) {
            this.imageSrc = '';
            image.width < 1280 || image.height < 720 ? this.tooSmall = true : this.updateImage(image);
        },

        updateImage(image) {
            this.assignImage(image);
        },

        showModal(event) {
            this.isModalVisible = true;
        },

        closeModal() {
            this.isModalVisible = false;
        },

        //checks if all the validatoon rules have been followed and returns false if they haven't. Then create form data named data and append the image.
        async createImage() {
            this.$v.$touch(); 
            if (this.$v.$invalid) { return false };
            this.dis = true;
            this.isLoading = true;
            let data = {
                image: this.$refs.cropper.getCroppedCanvas().toDataURL('image/jpeg', 1.0)
            };
            
            axios.post(`${this.eventUrl}/images`, data)
            .then(response => {
                window.location.reload();
            })
            .catch(errorResponse => { this.validationErrors = errorResponse.response.data.errors; this.dis = false; });
        },

        submitEvent() {
            this.$v.$touch(); 
            if (this.$v.$invalid) { return false };
            this.onsub = 'sub';
            this.dis = true;
            this.isLoading = true;
            let data = {
                image: this.$refs.cropper.getCroppedCanvas().toDataURL('image/jpeg', 1.0)
            };

            axios.post(`${this.eventUrl}/images`, data)
            .then(response => {
                window.location.href = `${this.eventUrl}/thankyou`;
            })
            .catch(errorResponse => { this.validationErrors = errorResponse.response.data.errors });
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

        handleResize() {
            this.width = window.innerWidth;
        },
    },

    mounted() {
        this.readySubmit();
    },

     created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize();
    },

    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },

    validations: {
        imageSrc: {
            required,
            // fileSize() { return this.finalImage ? this.finalImage.size < 2097152 : true },
        },
    },
    
};
</script>