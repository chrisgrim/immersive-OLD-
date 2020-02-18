<template>
<div class="organizer">
    <div class="section">
        <div class="text">
            <div class="floating-form">
                <div class="field">
                    <label>Organization name</label>
                    <input 
                    type="text" 
                    placeholder=" " 
                    name="name"
                    :class="{ active: nameActive,'error': $v.organizer.name.$error }"
                    @input="$v.organizer.name.$touch"
                    @click="toggleName()"
                    @blur="nameActive = false"
                    v-model="organizer.name"
                    />
                    <div v-if="$v.organizer.name.$error" class="validation-error">
                        <p class="error" v-if="!$v.organizer.name.required">The Name is required</p>
                        <p class="error" v-if="!$v.organizer.name.serverFailed">The Name needs to be unique</p>
                    </div>
                </div>
                <div class="field">
                    <label>Organization Description</label>
                    <textarea 
                    type="text"
                    name="description" 
                    v-model="organizer.description" 
                    placeholder=" "
                    :class="{ active: descriptionActive,'error': $v.organizer.description.$error }"
                    @input="$v.organizer.description.$touch"
                    @click="descriptionActive = true"
                    @blur="descriptionActive = false" 
                    rows="8">
                    </textarea>
                    <div v-if="$v.organizer.description.$error" class="validation-error">
                        <p class="error" v-if="!$v.organizer.description.required">The Description is required</p>
                    </div>
                </div>
                <div class="field">
                    <label>Your Organization Website</label>
                    <input 
                    type="url" 
                    v-model="organizer.website" 
                    name="website"
                    :class="{ active: websiteActive,'error': $v.organizer.website.$error }"
                    @input="$v.organizer.website.$touch"
                    @click="toggleWebsite()"
                    @blur="websiteActive = false" 
                    placeholder=" "
                    />
                    <div v-if="$v.organizer.website.$error" class="validation-error">
                        <p class="error" v-if="!$v.organizer.website.url">Must be a Url (Needs http://)</p>
                        <p class="error" v-if="!$v.organizer.website.required">The Website is required</p>
                        <p class="error" v-if="!$v.organizer.website.serverFailed">The Website needs to be unique</p>
                    </div>
                </div>
                <div class="field">
                    <label>Your Organization Email (optional)</label>
                    <input 
                    type="text" 
                    v-model="organizer.email" 
                    name="email"
                    :class="{ active: websiteActive }"
                    @blur="websiteActive = false" 
                    placeholder=" "
                    />
                </div>
                <div class="field">
                    <label>Twitter handle (optional)</label>
                    <input 
                    type="text" 
                    v-model="organizer.twitterHandle" 
                    name="twitterHandle" 
                    placeholder=" "
                    />
                </div>
                <div class="field">
                    <label>Facebook handle (optional)</label>
                    <input 
                    type="text" 
                    v-model="organizer.facebookHandle" 
                    name="facebookHandle" 
                    placeholder=" "
                    />
                </div>
                <div class="field">
                    <label>Instagram handle (optional)</label>
                    <input 
                    type="text" 
                    v-model="organizer.instagramHandle" 
                    name="instagramHandle" 
                    placeholder=" "
                    />
                </div>
            </div>
        </div>
        <div class="image">
            <div class="img">          
                <div class="loader">
                    <label 
                    class=""
                    :style="{ backgroundImage: `url('${imageSrc ? imageSrc : organizerImage}')` }">
                        <div 
                        class="dash"
                        :class="{ over: hasImage, load: isLoading }"
                        >
                            <div 
                            class="box"
                            >
                                <div class="in">
                                    <div v-if="!isLoading">
                                        <svg class="b" height="32" width="32" viewBox="0 0 24 24" aria-label="Add an image or video" role="img"><path d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"></path></svg>
                                    </div>
                                     <div>
                                        <div v-if="!hasImage">
                                            <p>Click here to upload image</p>
                                            <p>Please make image at least 800 x 800</p>
                                            <p>Image needs to be under 2 mb</p>
                                        </div>
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
                            <p class="error" v-if="!$v.finalImage.imageSize">The image needs to be at least 1280 x 720</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="inNav">
        <button class="create" @click.prevent="createOrganizer"> Save and Create First Event </button>
    </div>
</div>

</template>

<script>
import _ from 'lodash'
import ImageUpload from '../layouts/image-upload.vue'
import Multiselect from 'vue-multiselect'
import CubeSpinner  from '../layouts/loading.vue'
import { required, minLength, maxLength, url } from 'vuelidate/lib/validators'

export default {
    components: { ImageUpload, Multiselect, CubeSpinner },
    
    props: {
        user: { type: Object }
    },

    computed: {
        slug() {
            return this.slugify(this.organizer.name)
        },
        userOwnsOrganization() {
            return this.organizer && (this.searchModel.user_id == this.user.id) ? true : false;
        },
        hasImage() {
            return this.organizerImage || this.imageSrc ? true : false;
        }
    },
    
    data() {
        return {
            searchModel: '',
            tempOrganizer: '',
            organizationImageModel: '',
            organizerImage: '',
            defaultImage: '/storage/website-files/upload-icon.png',
            showSearchField: _.isEmpty(this.searchOptions) ? false : true,
            showFormFields: false,
            organizer: this.initializeOrganizerObject(),
            searchOptions: [this.initializeOrganizerObject()],
            eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
            nameActive: false,
            descriptionActive: false,
            websiteActive: false,
            emailActive: false,
            serverErrors: [],
            isLoading: false,
            finalImage: '',
            imageSrc: '',
            isLoading: false,
            readyToSubmit: false

        };
    },

    methods: {

        //on page load creates an empty organizer object
        initializeOrganizerObject() {
            return {
                id: '',
                name: '',
                description: '',
                website: '',
                email: '',
                imagePath: '',
                twitterHandle: '',
                facebookHandle: '',
                instagramHandle: '',
                user_id:''
            }
        },

        // makes the name field class active and clears any vuelidate server errors 
        toggleName() {
            this.nameActive = true;
            this.serverErrors = [];
        },

        // makes the organizer website field class active and clears any vuelidate server errors 
        toggleWebsite() {
            this.websiteActive = true;
            this.serverErrors = [];
        },

        //creates a slug that is sent to be checked by database
        slugify (text, ampersand = 'and') {
            const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ'
            const b = 'aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh'
            const p = new RegExp(a.split('').join('|'), 'g')

            return text.toString().toLowerCase()
                .replace(/[\s_]+/g, '-')
                .replace(p, c =>
                  b.charAt(a.indexOf(c)))
                .replace(/&/g, `-${ampersand}-`)
                .replace(/[^\w-]+/g, '')
                .replace(/--+/g, '-')
                .replace(/^-+|-+$/g, '')
        },

        //checks to see if passed variable is in the server errors
        hasServerError(field) {
            return (field && _.has(this, 'serverErrors.' + field) && !_.isEmpty(this.serverErrors[field]));
        },

        // adds image to the page so user can see it
        //adds file to organizer object for upl
        onImageUpload(image) {
            this.finalImage = image.file;
            this.finalImage.width = image.width;
            this.finalImage.height = image.height;
            this.$v.finalImage.$touch();
            console.log(this.finalImage);
            if (this.$v.finalImage.$invalid) { return false };
            this.imageSrc = image.src;
        },

        //checks if validation passes
        //creates a new Form data called params
        //creates a headers variable with correct info
        // adds the organizer fields to formdata
        //adds the slug to the form data
        // submits to database. If statement is for new organizer or if updating organizer
        async createOrganizer() {
            this.$v.$touch(); 
            if (this.$v.$invalid) { return false };
            this.isLoading = true;
            this.dis = true;

            const params = new FormData();
            for (var field in this.organizer) {
                params.append(field, this.organizer[field]);
            }
            params.append('imagePath', this.finalImage);
            params.append('slug', this.slug);

             axios.post('/organizer', params)
            .then(response => { 
                window.location.href = '/create-event/edit';
            })
            .catch(error => {         
                this.serverErrors = error.response.data.errors;  
            });
        },
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
            imageSize() {
                return this.finalImage ? this.finalImage.width > 800 && this.finalImage.height > 800 :  true
            }
        },
        organizer: {
            description: {
               required,
               maxLength: maxLength(10000)
            },
            name: {
               required,
               serverFailed : function(){ return !this.hasServerError('name'); },
            },
            website: {
                required,
                url,
                serverFailed : function(){ return !this.hasServerError('website'); },
            },
        },
    },
};
</script>