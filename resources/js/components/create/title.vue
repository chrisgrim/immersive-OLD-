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
	 					<p class="error" v-if="!$v.name.serverFailedTitle">This Event name has already been taken</p>
	    		</div>
	        </div>
	    </div>
	    <div class="">
	        <button @click.prevent="submitName()" class="create"> Next </button>
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

		computed: {
			submitObject() {
            	return {
                	name: this.name,
            	}
			}
		},

		methods: {

			//this checks the list of server errors to see if any of them have the title error
			hasServerError(field) {
	            return (field && _.has(this, 'serverErrors.' + field) && !_.isEmpty(this.serverErrors[field]));
	        },

	        //On click Sets class to green to remove error
	        //clears out all server errors
	        clearinput() {
	        	this.nameActive = true;
	        	this.serverErrors = [];
	        },

	        //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
			async submitName() {
				this.$v.$touch(); 
				if (this.$v.$invalid) { return false }
				
				axios.patch(`${this.eventUrl}/title`, this.submitObject)
				.then(response => { window.location.href = `${this.eventUrl}/images`; })
            	.catch(error => { this.serverErrors = error.response.data.errors; });
			}
		},

		validations: {
			name: {
				required,
				serverFailedTitle : function(){ return !this.hasServerError('name'); },
			},
		},
    };

</script>