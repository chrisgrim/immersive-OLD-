<template>
	<div class="title">
	    <div class="section">
            <div class="text">
    		    <div class="field">
    				<label>Title</label>
    	            <input 
    	            type="text" 
    	            v-model="name" 
    	            placeholder=" "
    	            :class="{ active: nameActive,'error': $v.name.$error }"
    	            @input="$v.name.$touch()"
    	            @click="nameActive = true"
                    @blur="nameActive = false"
    	             />
    	             <div v-if="$v.name.$error" class="validation-error">
    	    				<p class="error" v-if="!$v.name.required">The Title is required</p>
    	    		</div>
    	        </div>
            </div>
            <div class="image">
                
            </div>
	    </div>
        <div class="inNav">
            <button class="create" @click.prevent="goBack()"> Back </button>
            <button class="create" @click.prevent="submitName()"> Next </button>
        </div>
	    <div class="submit">
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
				.then(response => { 
                    window.location.href = `${this.eventUrl}/location`; 
                })
            	.catch(error => { this.serverErrors = error.response.data.errors; });
			},

            goBack() {
                window.location.href = '/create-event/edit';
            }
		},

		validations: {
			name: {
				required,
			},
		},
    };

</script>