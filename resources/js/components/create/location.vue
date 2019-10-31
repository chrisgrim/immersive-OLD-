<template>
	<div class="create-content">
		<div class="create-title">
    		<h2> Location</h2>
    	</div>
    	<div class="create-form locations">

		    <div class="create-field">

				<label>Is The Location Hidden?</label>
				<multiselect 
				v-model.trim="location.HiddenLocation" 
				deselect-label="Can't remove this value" 
				placeholder="Is the location is being withheld?" 
				:options="locationOptions" 
				open-direction="bottom"
				:searchable="false" 
				:allow-empty="false"
				:class="{ active: isActive}"
				@click="isActive = true"
		        @blur="isActive = false"
				/>

		    </div>
	    	<div class="create-field" v-if="showHiddenLocation">

				<label> Please enter how participants will be notified </label>
	            <textarea 
	            v-model.trim="location.StreetAddress" 
	            class="create-input area" 
	            rows="8" 
	            :class="{ active: isActive,'error': $v.location.StreetAddress.$error }"
	            placeholder=" " 
	            required 
	            autofocus
	            @click="isActive = true"
		        @blur="isActive = false"
	            />
	            <div v-if="$v.location.StreetAddress.$error" class="validation-error">
    				<p class="error" v-if="!$v.location.StreetAddress.required">The Street Address is required</p>
    			</div>
	            

	        </div>
	    	<div class="create-field" v-else="specificLocation">
				
				<label>Street</label>
		        <input 
		        v-model.trim="location.StreetAddress" 
		        type="text" 
		     	class="create-input" 
		     	:class="{ active: isActive,'error': $v.location.StreetAddress.$error }"
		        placeholder=" "
		        name="streetAddress"
		        @input="$v.location.StreetAddress.$touch"
		        @click="isActive = true"
		        @blur="isActive = false"
		        />
		        
				<div v-if="$v.location.StreetAddress.$error" class="validation-error">
    				<p class="error" v-if="!$v.location.StreetAddress.required">The Street Address is required</p>
    			</div>

		    </div>
		    <div class="create-field">

		        <label>City</label>
		        <input
		        v-model.trim="location.City"
		        type="text" 
		        class="create-input"
		        :class="{ active: isActive,'error': $v.location.City.$error }"
		        name="city" 
		        placeholder=" "
		        @input="$v.location.City.$touch"
		        @click="isActive = true"
		        @blur="isActive = false"
		        />

		        <div v-if="$v.location.City.$error" class="validation-error">
    				<p class="error" v-if="!$v.location.City.required">The City is Required</p>
    			</div>

		    </div>
		    <div class="create-field">

				<label>State</label>
		        <input 
		        v-model.trim="location.State" 
		        type="text" 
		        class="create-input" 
		        :class="{ active: isActive,'error': $v.location.State.$error }"
		        name="state" 
		        placeholder=" "
		        @input="$v.location.State.$touch"
		        @click="isActive = true"
		        @blur="isActive = false"
		        />

		        <div v-if="$v.location.State.$error" class="validation-error">
    				<p class="error" v-if="!$v.location.State.required">The State is required</p>
    			</div>

		    </div>
		    <div class="create-field">
				
				<label>Zip</label>
		        <input
		        v-model.trim="location.Zipcode" 
		        type="text" 
		        class="create-input"
		        :class="{ active: isActive,'error': $v.location.Zipcode.$error }"
		        name="zip" 
		        placeholder=" "
		        @input="$v.location.Zipcode.$touch"
		        @click="isActive = true"
		        @blur="isActive = false"
		        />

		        <div v-if="$v.location.Zipcode.$error" class="validation-error">
    				<p class="error" v-if="!$v.location.Zipcode.required">The Zipcode is required</p>
    			</div>


		    </div>
		    <div class="create-field">

		    	<label>Country</label>
				<multiselect 
				v-model.trim="selectedCountry" 
				:options="this.countryData ? countryData : []" 
				:searchable="true" 
				placeholder="Select Country" 
				open-direction="bottom" 
				autocomplete="off"
				/>

			</div>
		    <div class="create-field">
		    	
				<label>Regions</label>
				<multiselect 
				v-model.trim="selectedRegions" 
				:options="this.regions ? regionOptions : []" 
				:multiple="true" 
				placeholder="Select Region. You may select more than one." 
				track-by="id"
				open-direction="bottom"
				required 
				label="region"
				@input="$v.selectedRegions.$touch"
				/>
				<span slot="noResult">Please select from our list of approved Regions</span>

				<div v-if="$v.selectedRegions.$error" class="validation-error">
    				<p class="error" v-if="!$v.selectedRegions.required">At least one Region is required</p>
    			</div>


			</div>
		    <div class="create-button">
		        <button :disabled="$v.$invalid" @click.prevent="submitLocation()" class="create"> Next </button>
		    </div>
		</div>
    </div>
</template>

<script>
	import Multiselect from 'vue-multiselect';
	import _ from 'lodash';
	import { required, minLength } from 'vuelidate/lib/validators';



	export default {
		props: {
			event: { type:Object },
			regions: { type:Array },
			pivots: { type:Array },
		},

		components: { 
			Multiselect
		},

		computed: {
			showHiddenLocation: function() {
				if( this.location.HiddenLocation === 'Yes' ) { 
					return '1'; } else { return ''}
			},
		},

		data() {
			return {
				location:this.initializeEventObject(),
				hiddenLocation: 'false',
				regionOptions:this.regions,
				selectedRegions: this.pivots,
				locationOptions: [ 'Yes', 'No' ],
				countryData: '',
				selectedCountry: 'United States of America',
				eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
				lat: '',
				lon: '',
				name: '',
				isActive: false,
			}
		},

		methods: {
			initializeEventObject() {
				return {
					StreetAddress: '',
	                City: '',
	                State: '',
	                Country: '',
	                Zipcode: '',
	                HiddenLocation: '',
	                Lat: '',
	                Long: '',
				}
			},

			updateEventFields(input) {
                if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
                    this.location = _.pick(input, _.intersection( _.keys(this.location), _.keys(input) ));
                }
            },

			async submitLocation() {

				if (this.$v.$invalid) { return false; }
				let url = `https://cors-anywhere.herokuapp.com/https://us1.locationiq.com/v1/search.php?key=af4b25e28c2b00&q=` + this.location.StreetAddress + ' ' + this.location.City + ' ' + this.location.State + ' ' + this.location.Zipcode + `&format=json`;


				axios.get(url)
		    	.then(response => {
                	this.location.Lat = response.data[0].lat;
                	this.location.Long = response.data[0].lon;
                	let data = this.location;
					data.Country = this.selectedCountry;
	           		data.Region = this.selectedRegions.map(a => a.id);


					axios.patch(`${this.eventUrl}/location`, data)
					.then(response => {
	                    console.log(response)
	                })
	                .catch(errorResponse => {
	                    // show if there are server side validation errors
	                    this.validationErrors = errorResponse.response.data.errors
	                    console.log(errorResponse.response.data.errors)

	             	});
            	})
            	.catch(errorResponse => {
                // show if there are server side validation errors
                });

			},

			addTag (newTag) {
		    	const tag = {
			        location: newTag,
			        id: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
			    }
			    this.regionOptions.push(tag)
      			this.selectedRegions.push(tag)
			},
			toggle() {
				this.hiddenLocation = !this.hiddenLocation;
			},
			
		},

		created() {
			axios.get('https://restcountries.eu/rest/v2/all?fields=name')
				.then(axiosResult => this.countryData = axiosResult.data.map(a => a.name));
		},		

		mounted() {
			this.updateEventFields(this.event.location);

			if (this.event.location.Country) {
				this.selectedCountry = this.event.location.Country;
			}

			if (this.event.location.HiddenLocation == 1) {
				this.hiddenLocation = 'true';
			}
			if (!this.event.location.HiddenLocation == 1) {
				this.location.HiddenLocation = 'No';
			}

		},

		validations: {
			selectedRegions: {
				required
			},
			location: {
				StreetAddress: {
			       required
			   	},
			   	City: {
			       required
			   	},
			   	State: {
			   		required,
			   	},
			   	Zipcode: {
			   		required
			   	},
			},
		},
			
			


};



</script>
