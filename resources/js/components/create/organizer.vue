<template>
<div>
    
    <div class="organization-form">

        <multiselect 
        v-model="searchModel" 
        v-show="showSearchField" 
        id="ajax" 
        label="name" 
        track-by="name" 
        placeholder="Type to search" 
        open-direction="bottom"
        :allow-empty="false"
        deselectLabel=''
        :options="searchOptions" 
        :searchable="true" 
        :loading="isLoading" 
        :options-limit="30" 
        :limit="5"  
        :show-no-results="false" 
        @search-change="asyncFind" 
        @select="onOrganizerSelect"
        />
            <template 
            slot="option" 
            slot-scope="props">
                <img 
                class="option__image" 
                :src="props.option.imagePath ? `/storage/${props.option.imagePath}` : defaultImage"
                alt="defaultImage">
                <div class="option__desc">
                    <span class="option__title">{{ props.option.name }}</span>
                    <span class="option__small">{{ props.option.description }}</span>
                </div>
            </template>
        </multiselect>
    </div>
   
    
        
    <div v-show="showFormFields">
        <div class="image-upload-field">

            <label class="image-upload-label">Company logo/image</label>
            <label
            class="image-upload-wrapper"
            :style="{ backgroundImage: `url('${organizationImageModel ? organizationImageModel : defaultImage}')` }" >
                <span class="image-upload-layover">
                    <div class="text-center">{{ organizationImageModel ? 'Change' : 'Upload' }}</div>
                </span>
                <image-upload @loaded="onImageUpload"></image-upload>
            </label>
            <input 
            type="hidden" 
            name="organizationImagePath"
            v-model="organizationImageModel"
            @input="$v.organizationImageModel.$touch()"
            />
            
            <div v-if="$v.organizationImageModel.$error" class="validation-error">
                <p class="error" v-if="!$v.organizationImageModel.required">The Name is required</p>
            </div>

        </div>
        <div class="floating-form">
            
            <div class="create-field">

                <label>Enter Production Company name</label>
                <input 
                type="text" 
                class="create-input" 
                placeholder=" " 
                name="name"
                :class="{ active: nameActive,'error': $v.organizer.name.$error }"
                @input="$v.organizer.name.$touch"
                @click="toggleName()"
                @blur="nameActive = false"
                v-model="organizer.name"/>
                
                <div v-if="$v.organizer.name.$error" class="validation-error">
                    <p class="error" v-if="!$v.organizer.name.required">The Name is required</p>
                    <p class="error" v-if="!$v.organizer.name.serverFailed">The Name needs to be unique</p>
                </div>

            </div>
            <div class="create-field">

                <label>Description of Production Company</label>
                <textarea 
                type="text" 
                class="create-input area"  
                name="description" 
                v-model="organizer.description" 
                placeholder=" "
                :class="{ active: descriptionActive,'error': $v.organizer.description.$error }"
                @input="$v.organizer.description.$touch"
                @click="descriptionActive = true"
                @blur="descriptionActive = false" 
                rows="8"></textarea>
                
                <div v-if="$v.organizer.description.$error" class="validation-error">
                    <p class="error" v-if="!$v.organizer.description.required">The Description is required</p>
                </div>

            </div>
            <div class="create-field">

                <label>Enter Production Website</label>
                <input 
                class="create-input" 
                type="url" 
                v-model="organizer.website" 
                name="website"
                :class="{ active: websiteActive,'error': $v.organizer.website.$error }"
                @input="$v.organizer.website.$touch"
                @click="toggleWebsite()"
                @blur="websiteActive = false" 
                placeholder=" ">

                <div v-if="$v.organizer.website.$error" class="validation-error">
                    <p class="error" v-if="!$v.organizer.website.required">The Website is required</p>
                    <p class="error" v-if="!$v.organizer.website.serverFailed">The Website needs to be unique</p>
                </div>
                
            </div>
            <div class="create-field">

                <label>enter twitter handle</label>
                <input 
                type="text" 
                class="create-input" 
                v-model="organizer.twitterHandle" 
                name="twitterHandle" 
                placeholder=" ">
                
            </div>
            <div class="create-field">

                <label>enter facebook handle</label>
                <input 
                type="text" 
                class="create-input" 
                v-model="organizer.facebookHandle" 
                name="facebookHandle" 
                placeholder=" ">

            </div>
            <div class="create-field">

                <label>enter instagram handle</label>
                <input 
                type="text" 
                class="create-input" 
                v-model="organizer.instagramHandle" 
                name="instagramHandle" 
                placeholder=" ">

            </div>
        </div>
    </div>
    <div>
        <button 
        :disabled="$v.$invalid" 
        class="create" 
        @click.prevent="createOrganizer"> Save and Continue </button>
    </div>
</div>

</template>

<script>
import _ from 'lodash'
import ImageUpload from '../layouts/image-upload.vue'
import Multiselect from 'vue-multiselect'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    components: { 
        ImageUpload,
        Multiselect,
    },
    
    props: {
    	organizers: { type: Array },
        event: { type: Object },
        user: { type: Object }
    },
    
    data() {
        return {
            searchModel: '',
            organizationImageModel: '',
            finalImage: '',
            defaultImage: '/storage/website-files/upload.png',
            showSearchField: _.isEmpty(this.organizers) ? false : true,
            showFormFields: _.isEmpty(this.organizers) ? true : false,
            organizer: this.initializeOrganizerObject(),
            searchOptions: this.initializeSearchOptions(),
            eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
            nameActive: false,
            descriptionActive: false,
            websiteActive: false,
            serverErrors: [],
            isLoading: false,

        };
    },

    computed: {
        slug: function () {
          return this.slugify(this.organizer.name)
        }
    },

    methods: {

        initializeSearchOptions() {

            //create a new organizer object
            const newOrganizer = this.initializeOrganizerObject();
            //name that new organizer Create New Organizer
            newOrganizer.name = 'Create New Organizer';
            //Add the New Organizer to the array of organizaers
            return _.concat(newOrganizer, this.organizers);
        },

        initializeOrganizerObject() {
            return {
                id: '',
                name: '',
                description: '',
                website: '',
                imagePath: '',
                twitterHandle: '',
                facebookHandle: '',
                instagramHandle: ''
            }
        },

        onOrganizerSelect(organizer) {

            if ((organizer !== null) && (typeof organizer === "object") && (organizer.id !== null)) {

                //displays the fields for the user to edit
                this.showFormFields = true;
                //fills the field forms with data from the selected organizer
                this.organizer = _.pick(organizer, _.intersection( _.keys(this.organizer), _.keys(organizer) ));
                //adds the image to the dropdown
                this.organizationImageModel = this.organizer.imagePath ? `/storage/${this.organizer.imagePath}` : '';
                if(organizer.id === '') { this.organizer.name = '' }
            }
        },

        toggleName() {

            // sets the class for the name field being selected
            this.nameActive = true;
            // removes the server errors
            this.serverErrors = [];
        },

        toggleWebsite() {

            // sets the class for the website field being selected
            this.websiteActive = true;
            // removes the server errors
            this.serverErrors = [];
        },

        slugify (text, ampersand = 'and') {

            //creates a slug that is sent to be checked by database
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

        hasServerError(field) {

            //checks to see if passed variable is in the server errors
            return (field && _.has(this, 'serverErrors.' + field) && !_.isEmpty(this.serverErrors[field]));
        },

        asyncFind (query) {

            //this is the ajax search for the organizers name when the user starts entering letters
            //sets the spinning dial
            this.isLoading = true
            //axios post submitting the user entry to the database
            axios.get('/api/organizer/search', { params: { keywords: query } })
                .then(response => {
                    //adds new organizer to the returned list
                    const newOrganizer = this.initializeOrganizerObject();
                    newOrganizer.name = 'Create New Organizer';
                    this.searchOptions = _.concat(newOrganizer, response.data);
                    // turns off spinning wheel
                    this.isLoading = false;
                })
                .catch(error => {
                    console.log(error)
                });
        },

        async onImageUpload(image) {
            
            // adds image to the page so user can see it
            this.organizationImageModel = image.src;
            //adds file to organizer object for upl
            this.organizer.imagePath = image.file;
            this.finalImage = image.file;
        },

        async createOrganizer() {

            // do not go further if there are validation errors
            this.$v.$touch(); 
            if (this.$v.$invalid) { return false }

            //creates a new Form data called params
            const params = new FormData();
            // creates a headers variable with correct info
            const headers = {'Content-Type': 'application/x-www-form-urlencoded'};
            // adds the organizer fields to formdata
            for (var field in this.organizer) {
                params.append(field, this.organizer[field]);
            }
            //adds the slug to the form data
            params.append('slug', this.slug);


            // submits to database. If statement is for new organizer or if updating organizer
            if ( this.organizer.id == '' ) {
                // post the form data to server
                axios.post(`${this.eventUrl}/organizer`, params, headers)
                .then(response => {
                    // all is well. move on to the next page
                    // window.location.href = `${this.eventUrl}/dates`;
                })
                .catch(errorResponse => {
                    // show if there are server side validation errors
                });
            } else {
                // post the form data to server
                axios.post(`${this.eventUrl}/${this.organizer.id}/organizer`, params, headers)
                .then(response => {
                    //all good
                })
                .catch(error => {            
                    this.serverErrors = error.response.data.errors;
                    console.log(error.response.data.errors)   
                });
            };
        },
    },

    mounted() {
        //if event already has organizer(being updated) this fills in the fields on the page with that organizer
         if (_.has(this.event, 'organizer.id') && this.event.organizer.id !== null) {
            this.onOrganizerSelect(this.event.organizer);
            this.searchModel = this.event.organizer;
        }
    },

    validations: {
        organizationImageModel: {
            required,
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
                serverFailed : function(){ return !this.hasServerError('website'); },
            },
        },
    },
};
</script>