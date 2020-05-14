<template>
<div>
    <vue-alert 
    v-if="serverErrors.length" 
    message="serverErrors">      
    </vue-alert>
    <div class="event-create__organizer container grid">
        <section class="event-enter-organization">
            <div class="floating-form">
                <div 
                @mouseover="showEdit=true" 
                v-if="approved" 
                class="field">
                    <p class="name">{{organizer.name}}</p>
                    <button class="editTitle" v-if="showEdit" @click.prevent="showModal">Edit</button>
                </div>
                <div v-else class="field">
                    <label>Organization name</label>
                    <input 
                    type="text" 
                    placeholder=" " 
                    name="name"
                    :class="{ active: isActive == 'name','error': $v.organizer.name.$error }"
                    @input="$v.organizer.name.$touch"
                    @click="toggle('name')"
                    @blur="isActive = null"
                    v-model="organizer.name"
                    />
                    <div v-if="$v.organizer.name.$error" class="validation-error">
                        <p class="error" v-if="!$v.organizer.name.required">The Name is required</p>
                        <p class="error" v-if="!$v.organizer.name.serverFailed">The Name needs to be unique</p>
                    </div>
                </div>
                <div class="field">
                    <label>Organization description</label>
                    <textarea 
                    type="text"
                    name="description" 
                    v-model="organizer.description" 
                    placeholder=" "
                    :class="{ active: isActive == 'description','error': $v.organizer.description.$error }"
                    @input="$v.organizer.description.$touch"
                    @click="isActive = 'description'"
                    @blur="isActive = null" 
                    rows="8">
                    </textarea>
                    <div v-if="$v.organizer.description.$error" class="validation-error">
                        <p class="error" v-if="!$v.organizer.description.required">The Description is required</p>
                    </div>
                </div>
                <div class="field">
                    <label>Your organization website (recommended)</label>
                    <input 
                    type="url" 
                    v-model="organizer.website" 
                    name="website"
                    :class="{ active: isActive == 'website','error': $v.organizer.website.$error }"
                    @input="$v.organizer.website.$touch"
                    @click="toggle('website')"
                    @blur="isActive = null" 
                    placeholder=" "
                    />
                    <div v-if="$v.organizer.website.$error" class="validation-error">
                        <p class="error" v-if="!$v.organizer.website.url">Must be a Url (Needs http://)</p>
                        <p class="error" v-if="!$v.organizer.website.notWorking">The Url doesn't seem to be working</p>
                    </div>
                </div>
                <div class="field">
                    <label>Your organization email (optional)</label>
                    <input 
                    type="text" 
                    v-model="organizer.email" 
                    name="email"
                    @click="isActive = 'email'"
                    :class="{ active: isActive == 'email' }"
                    @blur="isActive = null" 
                    placeholder=" "
                    />
                </div>
                <div class="field">
                    <label>Twitter handle (optional)</label>
                    <input 
                    type="text" 
                    v-model="organizer.twitterHandle" 
                    name="twitterHandle"
                    @click="isActive = 'twitter'"
                    :class="{ active: isActive == 'twitter' }"
                    @blur="isActive = null" 
                    placeholder=" "
                    />
                </div>
                <div class="field">
                    <label>Facebook handle (optional)</label>
                    <input 
                    type="text" 
                    v-model="organizer.facebookHandle" 
                    name="facebookHandle"
                    @click="isActive = 'facebook'"
                    :class="{ active: isActive == 'facebook' }"
                    @blur="isActive = null" 
                    placeholder=" "
                    />
                </div>
                <div class="field">
                    <label>Instagram handle (optional)</label>
                    <input 
                    type="text" 
                    v-model="organizer.instagramHandle" 
                    name="instagramHandle"
                    @click="isActive = 'instagram'"
                    :class="{ active: isActive == 'instagram' }"
                    @blur="isActive = null" 
                    placeholder=" "
                    />
                </div>
            </div>
        </section>
        <section class="event-enter-organization-image">
            <div class="add-organzation-image">          
                <div class="add-organzation-image_loader">
                    <label class="" :style="backgroundImage">
                        <div class="add-organzation-image__card" :class="{ over: hasImage, load: isLoading }">
                            <div class="add-organzation-image__dotted">
                                <div class="add-organzation-image__text">
                                    <div v-if="!isLoading">
                                        <svg class="b" height="32" width="32" viewBox="0 0 24 24" aria-label="Add an image or video" role="img"><path d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"></path></svg>
                                    </div>
                                     <div>
                                        <div v-if="!hasImage">
                                            <h4>If you have an organization image <br>click here to Upload</h4>
                                            <p>Please make image at least 400 x 400</p>
                                            <p>Image needs to be under 20 mb</p>
                                            <p>Please make sure logo is centered</p>
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
                            <p class="error" v-if="!$v.finalImage.fileSize">The Image is too large</p>
                            <p class="error" v-if="!$v.finalImage.fileType">The Image needs to be a JPG, PNG or GIF</p>
                            <p class="error" v-if="!$v.finalImage.imageSize">The image needs to be at least 400 x 400</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <modal v-if="modal" @close="modal = false">
            <div slot="header">
                <div class="circle del">
                    <p>?</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Changing the name?</h3>
                <p>Changing the organization name will break any links you have sent out. This is not advised.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click="onApply()">Change Anyways</button>
            </div>
        </modal>
        <div class="create-button__in-nav">
            <button v-if="this.loadorganizer" class="create" @click.prevent="updateOrganizer"> Update Organizer </button>
            <button v-if="this.loadorganizer" class="create" @click.prevent="goBack"> Back </button>
            <button v-else="this.loadorganizer" class="create" @click.prevent="createOrganizer"> Save Organizer </button>
        </div>
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
        user: { type: Object },
        loadorganizer: { type:Object }
    },

    computed: {
        hasImage() {
            return this.organizer.largeImagePath || this.imageSrc ? true : false;
        },
        backgroundImage() {
            return `backgroundImage: url('${this.imageSrc ? this.imageSrc : (this.loadorganizer ? '/storage/' + this.loadorganizer.largeImagePath : '')}')`
        }
    },
    
    data() {
        return {
            defaultImage: '/storage/website-files/upload-icon.png',
            organizer: this.loadorganizer ? this.loadorganizer : this.initializeOrganizerObject(),
            isActive: '',
            serverErrors: [],
            isLoading: false,
            finalImage: '',
            imageSrc: '',
            isLoading: false,
            approved: this.loadorganizer ? true : false,
            showEdit: false,
            modal: false,

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
        toggle(value) {
            this.isActive = value;
            this.serverErrors = [];
        },

        showModal() {
            this.modal = true;
        },

        onApply() {
            this.reapply = 'reapply';
            this.approved = false;
            this.modal = false;
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
        createOrganizer() {
            this.onVerify()

            const params = new FormData();
            for (var field in this.organizer) {
                params.append(field, this.organizer[field]);
            }
            params.append('imagePath', this.finalImage);
            params.append('slug', this.slugify(this.organizer.name));

            axios.post('/organizer', params)
            .then(response => { 
                window.location.href = '/create-event/edit';
            })
            .catch(errors => {
                this.onErrors(errors);
            });
        },

        updateOrganizer() {
            this.onVerify()

            const params = new FormData();

            let slug = this.slugify(this.organizer.name)
            params.append('id', this.organizer.id);
            params.append('name', this.organizer.name);
            params.append('description', this.organizer.description);
            params.append('website', this.organizer.website);
            this.organizer.email ? params.append('email', this.organizer.email) : '';
            this.organizer.twitterHandle ? params.append('twitterHandle', this.organizer.twitterHandle) : '';
            this.organizer.facebookHandle ? params.append('facebookHandle', this.organizer.facebookHandle) : '';
            this.organizer.instagramHandle ? params.append('instagramHandle', this.organizer.instagramHandle) :'';
            params.append('slug', slug);
            this.finalImage ? params.append('imagePath', this.finalImage) : '';

            axios.post(`/organizer/${this.loadorganizer.slug}/patch`, params)
            .then(response => { 
                window.location.href = `/organizer/${slug}/edit`;
            })
            .catch(errors => {
                this.onErrors(errors);
            });
        },

        onErrors(errors) {
            errors.response.data.message.length ? this.serverErrors = {broken: 'Url is broken'} : '';
            errors.response.data.errors ? this.serverErrors = errors.response.data.errors : '';
            this.isLoading = false;
            this.dis = false;
        },

        goBack() {
            window.location.href = '/create-event/edit';
        },


        onVerify() {
            this.$v.$touch(); 
            if (this.$v.$invalid) { return false };
            this.finalImage ? this.isLoading = true : '';
            this.dis = true;
        },

        //checks to see if passed variable is in the server errors
        hasServerError(field) {
            return (field && _.has(this, 'serverErrors.' + field) && !_.isEmpty(this.serverErrors[field]));
        },

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
    },

    validations: {
        finalImage: {
            // exists() {
            //     return this.finalImage || this.organizer.imagePath ? true : false
            // },
            fileSize() { 
                return this.finalImage ? this.finalImage.size < 20971520 : true 
            },
            fileType() {
                return this.finalImage ? ['image/jpeg','image/png','image/gif'].includes(this.finalImage.type) : true
            },
            imageSize() {
                return this.finalImage ? this.finalImage.width > 400 && this.finalImage.height > 400 :  true
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
                // required,
                url,
                // serverFailed : function(){ return !this.hasServerError('website'); },
                notWorking : function(){ return !this.hasServerError('broken'); },
            },
        },
    },
};
</script>