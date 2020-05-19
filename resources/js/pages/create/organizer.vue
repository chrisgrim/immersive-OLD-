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
                @mouseover="editButton=true" 
                v-if="approved" 
                class="field">
                    <p class="name">{{organizer.name}}</p>
                    <button class="editTitle" v-if="editButton" @click.prevent="modal = true">Edit</button>
                </div>
                <div v-else class="field">
                    <label>Organization name</label>
                    <input 
                    type="text" 
                    placeholder=" " 
                    name="name"
                    :class="{ active: active == 'name','error': $v.organizer.name.$error }"
                    @input="$v.organizer.name.$touch"
                    @click="toggle('name')"
                    @blur="active = null"
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
                    :class="{ active: active == 'description','error': $v.organizer.description.$error }"
                    @input="$v.organizer.description.$touch"
                    @click="active = 'description'"
                    @blur="active = null" 
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
                    :class="{ active: active == 'website','error': $v.organizer.website.$error }"
                    @input="$v.organizer.website.$touch"
                    @click="toggle('website')"
                    @blur="active = null" 
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
                    @click="active = 'email'"
                    :class="{ active: active == 'email' }"
                    @blur="active = null" 
                    placeholder=" "
                    />
                </div>
                <div class="field">
                    <label>Twitter handle (optional)</label>
                    <input 
                    type="text" 
                    v-model="organizer.twitterHandle" 
                    name="twitterHandle"
                    @click="active = 'twitter'"
                    :class="{ active: active == 'twitter' }"
                    @blur="active = null" 
                    placeholder=" "
                    />
                </div>
                <div class="field">
                    <label>Facebook handle (optional)</label>
                    <input 
                    type="text" 
                    v-model="organizer.facebookHandle" 
                    name="facebookHandle"
                    @click="active = 'facebook'"
                    :class="{ active: active == 'facebook' }"
                    @blur="active = null" 
                    placeholder=" "
                    />
                </div>
                <div class="field">
                    <label>Instagram handle (optional)</label>
                    <input 
                    type="text" 
                    v-model="organizer.instagramHandle" 
                    name="instagramHandle"
                    @click="active = 'instagram'"
                    :class="{ active: active == 'instagram' }"
                    @blur="active = null" 
                    placeholder=" "
                    />
                </div>
            </div>
        </section>
        <section class="event-enter-organization-image">
            <div class="add-organzation-image">          
                <div class="add-organzation-image_loader">
                    <label class="" :style="displayImage">
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
                        </div>
                        <CubeSpinner :loading="isLoading"></CubeSpinner>
                    </label>
                    <div>
                        <div v-if="$v.imageFile.$error" class="validation-error">
                            <p class="error" v-if="!$v.imageFile.fileSize">The Image is too large</p>
                            <p class="error" v-if="!$v.imageFile.fileType">The Image needs to be a JPG, PNG or GIF</p>
                            <p class="error" v-if="!$v.imageFile.imageSize">The image needs to be at least 400 x 400</p>
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
                <button class="btn del" @click="onResubmit()">Change Anyways</button>
            </div>
        </modal>
        <div class="create-button__in-nav">
            <button :disabled="disabled" class="create" @click.prevent="onSubmit"> Save Organizer </button>
            <button v-if="this.loadorganizer" class="create" @click.prevent="goBack"> Back </button>
            
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
import formValidationMixin from '../../mixins/form-validation-mixin'

export default {
    mixins: [formValidationMixin],
    
    props: ['user', 'loadorganizer'],

    components: { ImageUpload, Multiselect, CubeSpinner },

    computed: {
        hasImage() {
            return this.organizer.largeImagePath || this.imageFile.src ? true : false;
        },
        displayImage() {
            return `backgroundImage: url('${this.imageFile.src ? this.imageFile.src : (this.loadorganizer ? '/storage/' + this.loadorganizer.largeImagePath : '')}')`
        },

        endPoint() {
            return this.loadorganizer ? `/organizer/${this.loadorganizer.slug}/patch` : '/organizer';
        },


    },
    
    data() {
        return {
            organizer: this.loadorganizer ? this.loadorganizer : this.initializeOrganizerObject(),
            active: '',
            serverErrors: [],
            isLoading: false,
            imageFile: '',
            disabled: false,
            approved: this.loadorganizer ? true : false,
            editButton: false,
            modal: false,
            reSubmit: false,
            formData: new FormData(),
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

        toggle(value) {
            this.active = value;
            this.serverErrors = [];
        },

        onResubmit() {
            this.resubmit = 'resubmit';
            this.approved = false;
            this.modal = false;
        },


        onImageUpload(image) {
            this.imageFile = image; 
            this.$v.imageFile.$touch();
            if (this.$v.imageFile.$invalid) { return false };
            this.formData.append('imagePath', this.imageFile.file);
        },

        onSubmit() {

            if (this.checkVuelidate()) { return false };
            this.appendData()
            axios.post(this.endPoint, this.formData)
            .then(res => { 
                this.loadorganizer ? location.reload() : this.onFinishOrganizer('/create-event/edit');
            })
            .catch(err => {
                this.onErrors(err);
            });
        },

        appendData() {
            this.imageFile ? this.isLoading = true : '';
            this.formData.append('slug', this.slugify(this.organizer.name));
            for (var field in this.organizer) {
                this.formData.append(field, this.organizer[field]);
            }
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
        imageFile: {
            fileSize() { 
                return this.imageFile ? this.imageFile.file.size < 20971520 : true 
            },
            fileType() {
                return this.imageFile ? ['image/jpeg','image/png','image/gif'].includes(this.imageFile.file.type) : true
            },
            imageSize() {
                return this.imageFile ? this.imageFile.width > 400 && this.imageFile.height > 400 :  true
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