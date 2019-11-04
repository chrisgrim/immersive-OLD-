<template>
	<div class="create-content">
		<div class="create-title">
    		<h2> Location</h2>
    	</div>
    	<div class="create-form locations">
			<div class="location-section-1">
			    <div class="create-field">

					<label>Is The Location Hidden?</label>
					<multiselect 
					v-model.trim="location.hiddenLocationToggle" 
					deselect-label="Can't remove this value" 
					placeholder="Is the location is being withheld?" 
					:options="locationOptions" 
					open-direction="bottom"
					:searchable="false" 
					:allow-empty="false"
					:class="{ active: hiddenActive}"
					@click="hiddenActive = true"
			        @blur="hiddenActive = false"
					/>

			    </div>
		    	<div class="create-field" v-if="showHiddenLocation">

					<label> Please enter how participants will be notified </label>
		            <textarea 
		            v-model.trim="location.hiddenLocation" 
		            class="create-input area" 
		            rows="8" 
		            :class="{ active: notifiedActive }"
		            required 
		            autofocus
		 			placeholder=" "
		            @click="notifiedActive = true"
			        @blur="notifiedActive = false"
		            />
		            
		        </div>
	    	</div>
	    	<div class="location-section-2">
			    <div class="create-field">

					<label v-if="showHiddenLocation"> City </label>
					<label v-else="specificLocation"> Location </label>
						<gmap-autocomplete
						@place_changed="setPlace"
						class="create-input"
						autocomplete="false"
						:class="{ active: locationActive }"
						:placeholder="locationPlaceholder"
						@click="locationActive = true"
			        	@blur="locationActive = false">
						</gmap-autocomplete>

				</div>
			</div>
			<div class="location-section-3">

					<div v-if="center">
						<div style="width:400px;height:400px">
							<l-map :zoom="zoom" :center="center">
							<l-tile-layer 
							:url="url"></l-tile-layer>
							<l-marker 
							:lat-lng="center"></l-marker>
							</l-map>
						</div>	
					</div>
			    </div>
			</div>
			<div class="location-section-4">
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
					:class="{ active: hiddenActive,'error': $v.selectedRegions.$error}"
					@click="hiddenActive = true"
			        @blur="hiddenActive = false"
					/>

					<div v-if="$v.selectedRegions.$error" class="validation-error">
	    				<p class="error" v-if="!$v.selectedRegions.required">Please select at least one Region</p>
	    			</div>
				</div>
			</div>
			
				
		    <div class="create-button">
		        <button @click.prevent="submitLocation()" class="create"> Next </button>
		    </div>



		</div>
    </div>
</template>

<script>
	import Multiselect from 'vue-multiselect'
	import _ from 'lodash'
	import { required, minLength } from 'vuelidate/lib/validators'
	import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'



	export default {
		props: {
			event: { type:Object },
			regions: { type:Array },
			pivots: { type:Array },
		},

		components: { 
			Multiselect, 
			LMap, 
			LTileLayer, 
			LMarker,
		},

		computed: {
			showHiddenLocation: function() {
				return this.location.hiddenLocationToggle === 'Yes' ? '1': '';
			},
			locationPlaceholder() {
				return this.event.location.hiddenLocationToggle ? (this.event.location.home ? this.event.location.home : '') + ' ' + (this.event.location.street ? this.event.location.street + ', ' : '') + '' + this.event.location.city : 'Event Address';
			}
		},

		data() {
			return {
				location:this.initializeEventObject(),
				regionOptions:this.regions,
				selectedRegions: this.pivots,
				locationOptions: [ 'Yes', 'No' ],
				eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
				name: '',
				locationActive: false,
				notifiedActive: false,
				hiddenActive: false,
				places: [],
				zoom:14,
				center: '',
				url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				searchedLocation: {},
			}
		},

		methods: {
			initializeEventObject() {
				return {
					street: '',
	                city: '',
	               	region: '',
	                country: '',
	               	postal_code: '',
	                hiddenLocation: '',
	 				hiddenLocationToggle: '',
	                latitude: '',
	               	longitude: '',
				}
			},

			updateEventFields(input) {
				//Checks if database has fields and inputs them into Vue forms
                if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
                    this.location = _.pick(input, _.intersection( _.keys(this.location), _.keys(input) ));
                }
            },

			getAddressObject(address_components) {
				// Gets data from Google Maps and inputs into Vue forms correctly
				var ShouldBeComponent = {
					home: ["street_number"],
					postal_code: ["postal_code"],
					street: ["street_address", "route"],
					region: [
						"administrative_area_level_1",
						"administrative_area_level_2",
						"administrative_area_level_3",
						"administrative_area_level_4",
						"administrative_area_level_5"
					],
					city: [
						"locality",
						"sublocality",
						"sublocality_level_1",
						"sublocality_level_2",
						"sublocality_level_3",
						"sublocality_level_4"
					],
					country: ["country"]
				};

				var address = {
					home: "",
					postal_code: "",
					street: "",
					region: "",
					city: "",
					country: ""
				};

				address_components.forEach(component => {
					for (var shouldBe in ShouldBeComponent) {
						if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
							if (shouldBe === "country") {
								address[shouldBe] = component.short_name;
							} else {
								address[shouldBe] = component.long_name;
							}
						}
					}
				});

				this.updateLocationFields(address);
			},

			updateLocationFields(input) {
				//after google fields search this inputs data into vue fields
                if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
                    this.location = _.extend( this.location, input);
                }
            },
			
			async searchLocation() {

				// this.$v.$touch(); 
				// if (this.$v.$invalid) { return false; }

				axios.post('/api/location/search', this.searchedLocation)
				.then(response => {
                    console.log(response)
                })
                .catch(errorResponse => {
                    // show if there are server side validation errors
                    this.validationErrors = errorResponse.response.data.errors
                    console.log(errorResponse.response.data.errors)

             	});


			},

			async submitLocation() {

				// this.$v.$touch(); 
				// if (this.$v.$invalid) { return false; }

				//creates data variagle and adds location info to the variable
                let data = this.location;

				// Gets selected regions and adds them to data variable
           		data.Region = this.selectedRegions.map(a => a.id);

 				
 				//Send info to the database
				axios.patch(`${this.eventUrl}/location`, data)
				.then(response => {
                    console.log(response)
                })
                .catch(errorResponse => {
                    // show if there are server side validation errors
                    this.validationErrors = errorResponse.response.data.errors
                    console.log(errorResponse.response.data.errors)

             	});


			},

			setPlace(place) {

				// adds lat and lon to leaflet map
				this.center = L.latLng(place.geometry.location.lat(), place.geometry.location.lng());

				// adds lat and lon to location object
				this.updateLats(place);

				//adds address info to location object
				this.getAddressObject(place.address_components);
				
			},
			updateLats(e) {
				this.searchedLocation.latitude = this.location.latitude = e.geometry.location.lat();
                this.searchedLocation.longitude = this.location.longitude = e.geometry.location.lng();
			}

		},
	

		mounted() {

			//Checks for database information and updates Vue fields
			this.updateEventFields(this.event.location);

			// Checks if has location, if it does then opens map and centers the map on the location.
			if (this.event.location.hiddenLocationToggle) {
				this.center = L.latLng(this.event.location.latitude, this.event.location.longitude);
			}



		},

		validations: {
			selectedRegions: {
				required
			},
			location: {
			   	city: {
			       required
			   	},
			   	state: {
			   		required,
			   	}
			},
		},
			
};



</script>