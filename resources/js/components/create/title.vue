<template>
	<div>
		<div class="create-guide-title">
    	<h2> What is the Title of your Event?</h2>
	    </div>
	    <div>
	    	<p>Make it a good one!</p>
	    </div>
	    <div class="floating-form">
	    	
		    <div class="create-field">
				
				<label>Title</label>
	            <input 
	            type="text" 
	            class="create-input"
	            v-model="name" 
	            placeholder=" "
	            :class="{ active: nameActive,'error': $v.name.$error }"
	            @input="$v.name.$touch()"
	            @click="clearinput()"
                @blur="titleActive = false"
	             />

	             <div v-if="$v.name.$error" class="validation-error">
	    				<p class="error" v-if="!$v.name.required">The Title is required</p>
	 					<p class="error" v-if="!$v.name.serverFailed">This Event name has already been taken</p>
	    		</div>

	        </div>
	    </div>
	    <div class="">
	        <button :disabled="$v.$invalid" @click.prevent="submitName()" class="create"> Next </button>
	    </div>
    </div>
</template>

<script>
	
	import { required, minLength } from 'vuelidate/lib/validators';
	import _ from 'lodash';


	export default {
		props: {
			event: { type:Object },
		},

		data() {
			return {
				name: this.event.name,
				eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
				serverErrors: [],
				nameActive: false,
			}
		},

		methods: {

			hasServerError(field) {
				//this checks the list of server errors to see if any of them have the title error
	            return (field && _.has(this, 'serverErrors.' + field) && !_.isEmpty(this.serverErrors[field]));
	        },

	        clearinput() {
	        	
	        	//On click Sets class to green to remove error
	        	this.nameActive = true;
	        	//clears out all server errors
	        	this.serverErrors = [];
	        },


			async submitName() {

				//check if validation rules have been followed and returns false if not.
				this.$v.$touch(); 
				if (this.$v.$invalid) { return false }
				//data is set to empty Object, essential for Laravel 
				let data = {};
				// title in data is set to the Title in the form
				data.name = this.name;
				//submitting the data to the server
				axios.patch(`${this.eventUrl}/title`, data)
				.then(response => {
                	// all is well. move on to the next page
                	window.location.href = `/create-event/${response.data.event.slug}/images`;
                	
            	})
            	.catch(error => {
            		console.log(error.response.data.errors);
            		this.serverErrors = error.response.data.errors;

            	});
			}
		},

		validations: {
			name: {
				required,
				serverFailed : function(){ return !this.hasServerError('name'); },
			},
		},
    };

</script>