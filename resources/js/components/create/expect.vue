<template>
	<div>
        <div class="create-title">
    		<h2>Advisories and Restrictions</h2>
	    	<p>Let the guests know what they can expect. Choose from our list below or enter your own.</p>
	    </div>
	    <div class="floating-form">
	        <div class="create-field">
				<label class="area">Content Advisories</label>
				<multiselect 
				v-model="contentAdvisories" 
				:options="contentAdvisoryOptions" 
				:multiple="true" 
				tag-placeholder="Add this as new tag"
				:taggable="true" 
                tag-position="bottom"
				placeholder="Search or add a tag" 
				open-direction="bottom"
				@tag="addTag"
				@click="contentActive = true"
		        @blur="contentActive = false"
				label="advisories"
				track-by="id">
				</multiselect>
			</div>
	        <div class="create-field">
            	<label>Age Restriction</label>
                <input 
                type="text" 
                class="create-input" 
                v-model="expect.ageRestriction" 
                :class="{ active: ageActive,'error': $v.expect.ageRestriction.$error }"
                placeholder=" "
               	@click="ageActive = true"
		        @blur="ageActive = false"
		        @input="$v.expect.ageRestriction.$touch"
                />

				<div v-if="$v.expect.ageRestriction.$error" class="validation-error">
    				<p class="error" v-if="!$v.expect.ageRestriction.required">Required</p>
    			</div>
               
            </div>
	        <br>
	        <div>
				<div class="create-field">
					<label class="area">Level of Contact w/ Audience (Touch Advisory) </label>
					<multiselect 
					v-model="contactLevel" 
					:options="contactLevelOptions" 
					:multiple="true" 
					placeholder="Choose All That Apply"
					open-direction="bottom"
					:class="{ active: contactActive,'error': $v.contactLevel.$error }"
					@click="contactActive = true"
			        @blur="contactActive = false"
			        @input="$v.contactLevel.$touch"
					label="level" 
					track-by="id" 
					:preselect-first="false">
  					</multiselect>
	  				<div v-if="$v.contactLevel.$error" class="validation-error">
	    				<p class="error" v-if="!$v.contactLevel.required">Must choose at least one contact level </p>
	    			</div>
				</div>
			</div>
			<div>
				<div class="create-field">

					<label class="area"> Explain a bit about your contact with the audience </label>
		            <textarea 
		            v-model="expect.contactAdvisories" 
		            class="create-input area" 
		            rows="8" 
		            placeholder=" "
		            :class="{ active: contactAdvisoryActive,'error': $v.expect.contactAdvisories.$error }"
					@click="contactAdvisoryActive = true"
			        @blur="contactAdvisoryActive = false"
			        @input="$v.expect.contactAdvisories.$touch"
		            required 
		            autofocus></textarea>

		            <div v-if="$v.expect.contactAdvisories.$error" class="validation-error">
	    				<p class="error" v-if="!$v.expect.contactAdvisories.required">Must enter a contact advisory </p>
	    			</div>
		            
	        	</div>
			</div>
			<div class="create-field">
			 	<label> Is there sexual Violence? </label>
				<div id="cover">
					<input v-model="expect.sexualViolence" type="checkbox" id="checkbox">
					<div id="bar"></div>
					<div id="knob">
						<p v-if="expect.sexualViolence">Yes</p>
						<p v-else="expect.sexualViolence">No</p>
					</div>
				</div>
                <div v-if="$v.expect.sexualViolence.$error" class="validation-error">
                    <p class="error" v-if="!$v.expect.sexualViolence.required">Must select if there is sexual violence</p>
                </div>
            </div>
			<div v-if="expect.sexualViolence">
				<div class="create-field">
					<label class="area"> Explain more about the sexual violence </label>
		            <textarea 
		            v-model="expect.sexualViolenceDescription" 
		            class="create-input area" 
		            rows="8" 
		            placeholder=" " 
		            required 
		            autofocus></textarea>
	        	</div>
			</div>
			<div class="create-field">
			 	<label> Is the Event Wheel Chair Accessible? </label>
				<div id="cover">
					<input v-model="expect.wheelchairReady" type="checkbox" id="checkbox">
					<div id="bar"></div>
					<div id="knob">
						<p v-if="expect.wheelchairReady">Yes</p>
						<p v-else="expect.wheelchairReady">No</p>
					</div>
				</div>
                <div v-if="$v.expect.wheelchairReady.$error" class="validation-error">
                    <p class="error" v-if="!$v.expect.wheelchairReady.required">Must select if the event is wheelchair accessible </p>
                </div>
		    </div>
			<div><br>
					Any Other Mobility Advisories?<br>
					* Can you accommodate someone who can't stand/walk for long periods of time? <br>
					* Can the show accommodate someone who uses a walker? <br>
					* Does the show take place on uneven ground or in a venue with staircases?
			</div>
			<div class="create-field">

				 <label class="area"> Mobility Advisories </label>
	            <textarea 
	            v-model="expect.mobilityAdvisories" 
	            class="create-input area" 
	            rows="8" 
	            placeholder=" "
	            :class="{ active: sexualViolenceActive,'error': $v.expect.mobilityAdvisories.$error }"
				@click="mobilityAdvisoriesActive = true"
		        @blur="mobilityAdvisoriesActive = false"
		        @input="$v.expect.mobilityAdvisories.$touch"
	            required 
	            autofocus></textarea>

				<div v-if="$v.expect.mobilityAdvisories.$error" class="validation-error">
	    			<p class="error" v-if="!$v.expect.mobilityAdvisories.required">Must enter a mobility advisory </p>
	    		</div>
	           
	        </div>
	        <div class="">
	            <button @click.prevent="submitExpectations()" class="create"> Save and Continue </button>
	        </div>
	    </div>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import _ from 'lodash'
    import { required, numeric } from 'vuelidate/lib/validators'

	export default {
        components: {
            Multiselect
        },

		props: {
			event: { type:Object },
			contact: { type:Array },
			content: { type:Array },
			pivots: { type:Array },
			contentpivots: { type:Array },
		},

		data() {
			return {
				expect: this.initializeEventObject(),
				contactLevelOptions: this.contact,
				contentAdvisoryOptions: this.content,
				contactLevel: this.pivots,
				contentAdvisories: this.contentpivots,
				eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
				contentActive: false,
				contactActive: false,
				contactAdvisoryActive: false,
				sexualViolenceActive: false,
				wheelchairReadyActive: false,
				mobilityAdvisories: false,
				ageActive: false,
			}
		},

		methods: {
			initializeEventObject() {
				return {
					contactAdvisories: '',
					sexualViolence: false,
					sexualViolenceDescription: '',
					wheelchairReady: false,
					mobilityAdvisories: '',
					ageRestriction: '',
				}
			},

			//updates fields if event is stored in database.
			updateEventFields(input) {
	            if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
	                this.expect = _.pick(input, _.intersection( _.keys(this.expect), _.keys(input) ));
	            }
                this.expect.wheelchairReady ? '' : this.expect.wheelchairReady = false;
                this.expect.sexualViolence ? '' : this.expect.sexualViolence = false;
	        },

	        addTag (newTag) {
                const tag = {
                    advisories: newTag,
                    id: newTag.substring(0, 0) + Math.floor((Math.random() * 10000000))
                }
                this.contentAdvisoryOptions.push(tag)
                this.contentAdvisories.push(tag)
            },

	        //submit data to the database
			async submitExpectations() {
				this.$v.$touch(); 
                if (this.$v.$invalid) { return false; };
               	let data = this.expect;
               	data.contactLevel = this.contactLevel.map(a => a.id);
               	data.contentAdvisory = this.contentAdvisories.map(a => a.advisories);

				axios.patch(`${this.eventUrl}/expect`, data)
				.then(response => { 
                    window.location.href = `${this.eventUrl}/images`; 
                })
				.catch(error => { console.log(error.response.data); });
			},
		},

        mounted() {
        	this.updateEventFields(this.event.expectation);
        },

        validations: {
        	contactLevel: {
        		required
        	},
			expect: {
			   	mobilityAdvisories: {
			       required,
			   	},
			   	contactAdvisories: {
			       required,
			   	},
			   	ageRestriction: {
			       required,
			   	},
                wheelchairReady: {
                    required,
                },
                sexualViolence: {
                    required,
                },
			},	
		},
    };



</script>