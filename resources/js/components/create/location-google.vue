<template>
	<div class="location">
    	<div class="section">
			<div class="text">
                <div class="ctitle">
                    <h2>Location</h2>
                </div>
			    <div class="field">
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
		    	<div class="field" v-if="location.hiddenLocationToggle">
					<label> Please enter how participants will be notified of the location </label>
		            <textarea 
		            v-model.trim="location.hiddenLocation" 
		            rows="4" 
		            :class="{ active: activeItem == 'hidden'}"
		            required 
		            autofocus
		 			placeholder="...the night before you will receieve an email containing the location..."
                    @click="activeItem = 'hidden'"
                    @blur="activeItem = null"
                    />
		        </div>
                <div class="field">
                    <label> Event Location </label>
                    <input 
                    ref="autocomplete" 
                    :placeholder="locationPlaceholder"
                    :class="{ active: activeItem == 'location', 'error': $v.location.latitude.$error }"
                    autocomplete="false"
                    onfocus="value = ''" 
                    @click="activeItem = 'location'"
                    @blur="activeItem = null"
                    type="text"
                    />
                    <div v-if="$v.location.latitude.$error" class="validation-error">
                        <p class="error" v-if="!$v.location.latitude.required">Please select from the list of locations</p>
                    </div>
                </div>
    		    <div class="field">
    				<label>Regions</label>
    				<multiselect 
    				v-model.trim="selectedRegions" 
    				:options="regionOptions" 
    				:multiple="true" 
    				placeholder="Select Region. You may select more than one." 
    				track-by="id"
    				open-direction="bottom"
    				required 
    				label="region"
    				@input="$v.selectedRegions.$touch"
    				:class="{ active: activeItem == 'region','error': $v.selectedRegions.$error}"
    				@click="activeItem = 'region'"
    		        @blur="activeItem = null"
    				/>
    				<div v-if="$v.selectedRegions.$error" class="validation-error">
        				<p class="error" v-if="!$v.selectedRegions.required">Please select at least one Region</p>
        			</div>
    			</div>
                <div class="">
                <button :disabled="dis" @click.prevent="submitLocation()" class="create"> Next </button>
            </div>
            </div>
            <div class="image" :style="this.map">
                <div v-if="center" class="map">
                    <div class="zoom">
                        <div class="in">
                            <button @click.prevent="zoom += 1">
                                <svg viewBox="0 0 16 16" height="16" width="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0V1z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
                            </button>
                        </div>
                        <div class="out">
                            <button @click.prevent="zoom -= 1">
                                <svg viewBox="0 0 16 16" height="16" width="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div :style="this.map" style="width:100%;">
                        <l-map :zoom="zoom" :center="center" :options="{ scrollWheelZoom: allowZoom, zoomControl: allowZoom }">
                        <l-tile-layer :url="url"></l-tile-layer>
                        <l-marker :lat-lng="center"></l-marker>
                        </l-map>
                    </div>  
                </div>
            </div>
        </div>
		<div class="inNav">
            <button :disabled="dis" class="create" @click.prevent="goBack()"> Back </button>
            <button :disabled="dis" class="create" @click.prevent="submitLocation()"> Next </button>
        </div>
    </div>
</template>

<script>
	import Multiselect from 'vue-multiselect'
	import { required, minLength, requiredIf } from 'vuelidate/lib/validators'
	import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'



	export default {
		props: {
			event: { type:Object },
		},

		components: { 
			Multiselect, 
			LMap, 
			LTileLayer, 
			LMarker,
		},

		computed: {
			locationPlaceholder() {
				return this.location.city ? (this.location.home ? this.location.home : '') + ' ' + (this.location.street ? this.location.street + ', ' : '') + '' + this.location.city : 'Put full address if you have one, otherwise select the city.';
			},
            map() {
                return `height:calc(${this.height}px - 7rem);`
            }
		},

		data() {
			return {
				location:this.initializeEventObject(),
				regionOptions:[],
				selectedRegions: '',
				eventUrl:`/create-event/${this.event.slug}`,
				zoom:14,
				center: '',
				url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                activeItem: null,
                allowZoom: false,
                dis: false,
                height:0,
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
                    home: ''
				}
			},

			//Checks if database has fields and inputs them into Vue forms and adds lat and long to map
			updateEventFields(input) {
                if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
                    this.location = _.pick(input, _.intersection( _.keys(this.location), _.keys(input) ));
                };
				this.location.latitude ? this.center = L.latLng(this.location.latitude, this.location.longitude) : '';
            },
			
			//checks for validations
			//creates data variable called data and adds location info to the variable
			//adds regions to data variable
			async submitLocation() {
				this.$v.$touch(); 
				if (this.$v.$invalid) { return false };
                this.dis = true;
                let data = this.location;
           		data.Region = this.selectedRegions.map(a => a.id);

				axios.patch(`${this.eventUrl}/location`, data)
				.then(response => { 			
					window.location.href = `${this.eventUrl}/category`; 
				})
                .catch(errorResponse => {
                    this.dis = false;
                    this.validationErrors = errorResponse.response.data.errors; 
                });
			},

			// adds lat and lon to leaflet map using this.center
			// sends google map loc and lat info to updateLats
			//adds address info to location object

			setPlace() {
                let place = this.autocomplete.getPlace();
				this.center = L.latLng(place.geometry.location.lat(), place.geometry.location.lng());
				this.updateLats(place);
				this.getAddressObject(place.address_components);
			},

			// adds the google 
			updateLats(e) {
				this.location.latitude = e.geometry.location.lat();
                this.location.longitude = e.geometry.location.lng();
			},

            // If there is data in Database it will load from the database
            load() {
                axios.get(`${this.eventUrl}/location/fetch?timestamp=${new Date().getTime()}`)
                .then(response => {
                    this.updateEventFields(response.data.location);
                    this.selectedRegions = response.data.pivots;
                    this.regionOptions = response.data.regions;
                });
            },

			//after google fields search this inputs data into vue fields
			updateLocationFields(input) {
                if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
                    this.location = _.extend( this.location, input);
                }
            },
            
            goBack() {
                window.location.href = `${this.eventUrl}/title`;
            },

            handleResize() {
                this.height = window.innerHeight;
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
	
        created() {
            this.load();
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },

        mounted() {
            this.autocomplete = new google.maps.places.Autocomplete(
                (this.$refs.autocomplete),
                {types: ['geocode']}
            );
            this.autocomplete.addListener('place_changed', this.setPlace);
        },

        destroyed() {
            window.removeEventListener('resize', this.handleResize);
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