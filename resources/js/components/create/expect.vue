<template>
	<div>
        <div>
    		<h2> What can your guests expect?</h2>
	    </div>
	    <div>
	    	<p>Let the guests know what they can expect. Will there be scary noises or bright flashes?</p>
	    	<p>Some common ones include: 
				* strong language
				* fog/haze
				* flashing lights
				* simulated gun shots/violence
				* themes around racism, homophobia, mental health, suicide, etc.
				* discussions of sex and intimacy
				* moments of darkness
				* strong smells
			</p>
	    </div>
	    <div class="floating-form">
		    <div class="create-field">

		    	<label class="area"> Content Advisory </label>
	            <textarea 
	            v-model="expect.contentAdvisories" 
	            class="create-input area"
	            :class="{ active: contentActive,'error': $v.expect.contentAdvisories.$error }"
	            rows="8" 
	            placeholder=" " 
	            required
	            @click="contentActive = true"
		        @blur="contentActive = false"
		        @input="$v.expect.contentAdvisories.$touch"
	            autofocus>
	            </textarea>

	            <div v-if="$v.expect.contentAdvisories.$error" class="validation-error">
    				<p class="error" v-if="!$v.expect.contentAdvisories.required">Must enter an advisory </p>
    			</div>
	            
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
    				<p class="error" v-if="!$v.expect.ageRestriction.required">Must Provide an age</p>
					<p class="error" v-if="!$v.expect.ageRestriction.numeric">Can only be a number</p>
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
					:close-on-select="false" 
					:clear-on-select="false" 
					:preserve-search="true" 
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
			<div>
				<div class="create-field">

					<label>Advisory for Sexual Violence?</label>
					<multiselect 
					v-model="expect.sexualViolence" 
					deselect-label="Can't remove this value" 
					placeholder="Select one" 
					:options="sexualViolenceOptions" 
					open-direction="bottom"
					:searchable="false"
					:class="{ active: sexualViolenceActive,'error': $v.expect.sexualViolence.$error }"
					@click="sexualViolenceActive = true"
			        @blur="sexualViolenceActive = false"
			        @input="$v.expect.sexualViolence.$touch"
					:allow-empty="false">
	  				</multiselect>

					<div v-if="$v.expect.sexualViolence.$error" class="validation-error">
	    				<p class="error" v-if="!$v.expect.sexualViolence.required">Must select a sexual violence advisory </p>
	    			</div>

				</div>
			</div>
			<div v-if="showSexViolenceReason">
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
	        <div>
				<div class="create-field">

					<label class="area">Is this experience wheelchair accessible?</label>
					<multiselect 
					v-model="expect.wheelchairReady" 
					deselect-label="Can't remove this value" 
					placeholder="Select one" 
					:options="wheelchairOptions" 
					open-direction="bottom"
					:searchable="false"
					:class="{ active: sexualViolenceActive,'error': $v.expect.wheelchairReady.$error }"
					@click="wheelchairReadyActive = true"
			        @blur="wheelchairReadyActive = false"
			        @input="$v.expect.wheelchairReady.$touch"
					:allow-empty="false">
	  				</multiselect>

	  				<div v-if="$v.expect.wheelchairReady.$error" class="validation-error">
	    				<p class="error" v-if="!$v.expect.wheelchairReady.required">Must select if experience is wheelchair ready </p>
	    			</div>

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
			pivots: { type:Array },
		},

		data() {
			return {
				expect: this.initializeEventObject(),
				contactLevelOptions: this.contact,
				contactLevel: this.pivots,
				sexualViolenceOptions: [ 'Yes', 'No' ],
				wheelchairOptions: [ 'Yes', 'No' ],
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

		computed: {
			showSexViolenceReason: function() {
				if ( this.expect.sexualViolence == 'Yes' ) {
					return 'The show includes' } else { return ''}
			}
		},


		methods: {
			initializeEventObject() {
				return {
					contentAdvisories: '',
					contactAdvisories: '',
					sexualViolence: '',
					sexualViolenceDescription: '',
					wheelchairReady: '',
					mobilityAdvisories: '',
					ageRestriction: '',
				}
			},

			//updates fields if event is stored in database.
			updateEventFields(input) {
	            if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
	                this.expect = _.pick(input, _.intersection( _.keys(this.expect), _.keys(input) ));
	            }
	        },

	        //submit data to the database
			async submitExpectations() {
				this.$v.$touch(); 
                if (this.$v.$invalid) { return false; };
               	let data = this.expect;
               	data.contactLevel = this.contactLevel.map(a => a.id);

				axios.patch(`${this.eventUrl}/expect`, data)
				.then(response => { window.location.href = `${this.eventUrl}/title`; });
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
				contentAdvisories: {
			       required,
			   	},
			   	sexualViolence: {
			       required,
			   	},
			   	wheelchairReady: {
			       required,
			   	},
			   	mobilityAdvisories: {
			       required,
			   	},
			   	contactAdvisories: {
			       required,
			   	},
			   	ageRestriction: {
			       required,
			       numeric
			   	},
			},	
		},
    };



</script>