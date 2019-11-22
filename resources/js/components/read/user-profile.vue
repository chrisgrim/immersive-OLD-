<template>
	<div class="profile-body">
		<div class="profile-upload-field">
	        <label 
	        class="profile-upload-wrapper"
	        :class="{ imageloaded: avatar }"
	        :style="{ backgroundImage: `url('${avatar ? avatar : ''}')` }">
	            <span class="profile-upload-layover">
	                <div class="add-profile-image"><p>+</p></div>
	            </span>
	            <image-upload @loaded="onImageUpload"></image-upload>
	        </label>
	    <input 
        type="hidden" 
        name="profileImagePath" 
        v-model="avatar"
        @input="$v.avatar.$touch()"
        />

        <div v-if="$v.avatar.$error" class="validation-error">
            <p class="error" v-if="!$v.avatar.fileSize">Image size is over 1MB</p>
        </div>


	    </div>
	    <div class="create-field">
            <label>User Name</label>
			<input 
            type="text" 
            class="create-input" 
            v-model="user.name"
            :class="{ active: nameActive,'error': $v.user.name.$error }"
            @click="nameActive = true"
			@blur="nameActive = false"
			@input="$v.user.name.$touch"
            placeholder=" "
            />
            <div v-if="$v.user.name.$error" class="validation-error">
				<p class="error" v-if="!$v.user.name.required">Must have a user name </p>
			</div>
		</div>
		<div class="">
            <button @click.prevent="submitUser()" class="create"> Update </button>
        </div>
		

    </div>
</template>

<script>
	import _ from 'lodash';
	import ImageUpload from '../layouts/image-upload.vue'
    import Multiselect from 'vue-multiselect';
    import { required } from 'vuelidate/lib/validators'


	export default {

		props: ['loaduser', 'fav'],

		components: {
            Multiselect, ImageUpload
        },

        computed: {
        },

		data() {
			return {
				user:this.loaduser,
				avatar: this.loaduser.image_path ? `/storage/${this.loaduser.image_path}` : '/storage/website-files/default-user-icon.jpg',
      			location: {},
				gettingLocation: false,
				errorStr:'',
				finalImage: '',
				nameActive: false,
			}
		},

		methods: {

			// Checks image size then loads image to page and to vue data if it is not larger than 2mb
			async onImageUpload(image) {
				if (image.file.size < 2097152 ) {
		            this.avatar = image.src;
		            this.finalImage = image.file;
		            this.createImage();
	        	} else {
	        		this.finalImage = image.file;
	        		this.$v.$touch(); 
	        	}
	        },

	        //saves the image when the user loads
	        async createImage() {
	            
	            let data = new FormData();
	            data.append('image', this.finalImage);
	            data.append('_method', 'PATCH');

	            axios.post(`/users/${this.user.id}`, data)
	            .then(response => {
	                console.log(response.data);
	            })
	            .catch(errorResponse => { this.validationErrors = errorResponse.response.data.errors });
	        },

	        submitUser() {
	        	this.$v.$touch(); 
	            if (this.$v.$invalid) { return false };

	            let data = {
	            	name: this.user.name
	            };

	            axios.patch(`/users/${this.user.id}`, data)
	            .then(response => {
	                console.log(response.data);
	            })
	            .catch(errorResponse => { 
	            	this.validationErrors = errorResponse.response.data.errors 
	            });

	        }
		    
		},


		mounted() {
			

		},

		validations: {
	        avatar: {
	            fileSize() { return this.finalImage ? this.finalImage.size < 2097152 : true },
	        },
	        user: {
	        	name: {
	        		required
	        	}
	        },
	    },





    };
</script>