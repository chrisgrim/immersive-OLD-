<template>
	<div class="title">
        <div class="ctitle">
            <h2>Title</h2>
        </div>
	    <div class="section">
            <div class="text">
    		    <div class="field">
    				<label>Stand out from the other events with a great title</label>
    	            <input 
    	            type="text" 
    	            v-model="name" 
    	            placeholder=" "
    	            :class="{ active: activeItem == 'name','error': $v.name.$error }"
    	            @input="$v.name.$touch()"
    	            @click="activeItem = 'name'"
                    @blur="activeItem = 'name'"
    	             />
    	             <div v-if="$v.name.$error" class="validation-error">
    	    			<p class="error" v-if="!$v.name.required">Please add a Title</p>
                        <p class="error" v-if="!$v.name.maxLength">The Title is too long.</p>
    	    		</div>
    	        </div>
                <div class="field">
                    <label>Event Tag Line</label>
                    <input 
                    type="text" 
                    v-model="tagLine"
                    :class="{ active: activeItem == 'tag','error': $v.tagLine.$error }"
                    @input="$v.tagLine.$touch()"
                    @click="activeItem = 'tag'"
                    @blur="activeItem = 'tag'"
                    placeholder="Quick, one sentence line to get the audience hooked!"
                    />
                    <div v-if="$v.tagLine.$error" class="validation-error">
                        <p class="error" v-if="!$v.tagLine.maxLength">The tag line is too long.</p>
                    </div>
                </div>
            </div>
            <div class="image">
                
            </div>
	    </div>
        <div class="inNav">
            <button :disabled="dis" class="create" @click.prevent="goBack()"> Back </button>
            <button :disabled="dis" class="create" @click.prevent="submitName()"> Next </button>
        </div>
	    <div class="submit">
	        <button :disabled="dis" @click.prevent="submitName()" class="create"> Next </button>
	    </div>
    </div>
</template>

<script>
	
	import { required, maxLength } from 'vuelidate/lib/validators';

	export default {
		props: {
			event: { type:Object },
		},

		data() {
			return {
				name: '',
				eventUrl: `/create-event/${this.event.slug}`,
                tagLine: '',
                activeItem: null,
                dis:false,
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
				this.dis = true;
                let submitObject = {
                    name: this.name,
                    tagline: this.tagLine
                };
				axios.patch(`${this.eventUrl}/title`, submitObject)
				.then(response => { 
                    window.location.href = `${this.eventUrl}/location`; 
                })
            	.catch(error => { this.serverErrors = error.response.data.errors; this.dis = false; });
			},

            // If there is data in Database it will load from the database
            getDatabase() {
                axios.get(`${this.eventUrl}/title/fetch?timestamp=${new Date().getTime()}`)
                .then(response => {
                    response.data.name ? this.name = response.data.name : '';
                    response.data.tag_line ? this.tagLine = response.data.tag_line : '';
                });
            },

            goBack() {
                window.location.href = '/create-event/edit';
            },

		},

        created() {
            this.getDatabase();
        },

		validations: {
			name: {
				required,
                maxLength: maxLength(140)
			},
            tagLine: {
                maxLength: maxLength(140)
            }
		},
    };

</script>