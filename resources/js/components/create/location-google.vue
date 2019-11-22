<template>
	<div class="create-content">
		<div class="create-title">
    		<h2> Location</h2>
			<p>We use this data to allow users to search by city to find your event.</p>
    	</div>
    	<div class="create-form locations">
			<div class="location-section-1">
			    <div class="create-field">
				 	<label> Is your location hidden? </label>
					<div id="cover">
						<input v-model="location.hiddenLocationToggle" type="checkbox" id="checkbox">
						<div id="bar"></div>
						<div id="knob">
							<p v-if="location.hiddenLocationToggle">Yes</p>
							<p v-else="location.hiddenLocationToggle">No</p>
						</div>
					</div>
			    </div>
		    	<div class="create-field" v-if="location.hiddenLocationToggle">
					<label> Please enter how participants will be notified of the location </label>
		            <textarea 
		            v-model.trim="location.hiddenLocation" 
		            class="create-input area" 
		            rows="8" 
		            :class="{ active: notifiedActive}"
		            required 
		            autofocus
		 			placeholder="...the night before you will receieve an email containing the location..."
		            @click="notifiedActive = true"
			        @blur="notifiedActive = false"
		            />
		        </div>
	    	</div>
	    	<div class="location-section-2">
			    <div class="create-field">
					<label> Location </label>
					<p>Put address if you have one, otherwise select your city.</p>
					<gmap-autocomplete
					@place_changed="setPlace"
					class="create-input"
					autocomplete="false"
					:class="{ active: locationActive, 'error': $v.location.latitude.$error }"
					:placeholder="locationPlaceholder"
					@click="locationActive = true"
		        	@blur="locationActive = false">
					</gmap-autocomplete>
					<div v-if="$v.location.latitude.$error" class="validation-error">
						<p class="error" v-if="!$v.location.latitude.required">Please select from the list of locations</p>
					</div>
				</div>
			</div>
			<div class="location-section-3">
					<div v-if="center">
						<div style="width:400px;height:400px">
							<l-map :zoom="zoom" :center="center">
							<l-tile-layer :url="url"></l-tile-layer>
							<l-marker :lat-lng="center"></l-marker>
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
	import { required, minLength, requiredIf } from 'vuelidate/lib/validators'
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
			locationPlaceholder() {
				return this.event.location.city ? (this.event.location.home ? this.event.location.home : '') + ' ' + (this.event.location.street ? this.event.location.street + ', ' : '') + '' + this.event.location.city : 'Event Address';
			}
		},

		data() {
			return {
				location:this.initializeEventObject(),
				regionOptions:this.regions,
				selectedRegions: this.pivots,
				eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
				zoom:14,
				center: '',
				url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				locationActive: false,
				notifiedActive: false,
				hiddenActive: false,
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
	 				hiddenLocationToggle: 0,
	                latitude: '',
	               	longitude: '',
				}
			},

			//Checks if database has fields and inputs them into Vue forms and adds lat and long to map
			updateEventFields(input) {
                if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
                    this.location = _.pick(input, _.intersection( _.keys(this.location), _.keys(input) ));
                };
				this.event.location.latitude ? this.center = L.latLng(this.event.location.latitude, this.event.location.longitude) : '';
            },
			
			//checks for validations
			//creates data variable called data and adds location info to the variable
			//adds regions to data variable
			async submitLocation() {
				this.$v.$touch(); 
				if (this.$v.$invalid) { return false };
                let data = this.location;
           		data.Region = this.selectedRegions.map(a => a.id);

				axios.patch(`${this.eventUrl}/location`, data)
				.then(response => { 			
                    console.log(response.data);		
					window.location.href = `${this.eventUrl}/category`; 
				})
                .catch(errorResponse => { 
                    this.validationErrors = errorResponse.response.data.errors; 
                });
			},

			// adds lat and lon to leaflet map using this.center
			// sends google map loc and lat info to updateLats
			//adds address info to location object

			setPlace(place) {
				this.center = L.latLng(place.geometry.location.lat(), place.geometry.location.lng());
				this.updateLats(place);
				this.getAddressObject(place.address_components);
			},

			// adds the google 
			updateLats(e) {
				this.location.latitude = e.geometry.location.lat();
                this.location.longitude = e.geometry.location.lng();
			},

			//after google fields search this inputs data into vue fields
			updateLocationFields(input) {
                if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
                    this.location = _.extend( this.location, input);
                }
            },

			// Gets data from Google Maps and inputs into Vue forms correctly
			getAddressObject(address_components) {
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
		},
	
		// on pageload this updates the fields with database information (if there is any) and then updates 
		mounted() {
			this.updateEventFields(this.event.location);
		},

		validations: {
			selectedRegions: {
				required
			},
			location: {
			 	latitude: {
			 		required
			 	},
			},
		},
			
};



</script>