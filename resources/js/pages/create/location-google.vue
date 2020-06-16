<template>
	<div class="event-create__location grid">
		<section class="event-enter-location">
            <div class="title">
                <h2>Location</h2>
            </div>
            <div class="field">
                <label> Does your event have a physical location? </label>
                <div id="cover">
                    <input v-model="hasLocation" type="checkbox" id="checkbox">
                    <div id="bar"></div>
                    <div id="knob">
                        <p v-if="hasLocation">Yes</p>
                        <p v-else>No</p>
                    </div>
                </div>
            </div>
            <div v-show="hasLocation">
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
                    <label> We still need your address so that users searching for this event can see the general area. They will not see the specific street address. </label>
                     <label> Please enter how participants will be notified of the location. (Required) </label>
                    <textarea 
                    v-model.trim="location.hiddenLocation" 
                    rows="4" 
                    :class="{ active: active == 'hidden'}"
                    required 
                    autofocus
                    placeholder="...the night before you will receieve an email containing the location..."
                    @click="active = 'hidden'"
                    @blur="active = null"
                    />
                </div>
                <div class="field">
                    <label> Event Location </label>
                    <input 
                    ref="autocomplete" 
                    :placeholder="locationPlaceholder"
                    :class="{ active: active == 'location', 'error': $v.location.latitude.$error }"
                    autocomplete="false"
                    onfocus="value = ''" 
                    @click="active = 'location'"
                    @blur="active = null"
                    type="text"
                    />
                    <div v-if="$v.location.$error" class="validation-error">
                        <p class="error" v-if="!$v.location.latitude.ifLocation">Please select from the list of locations</p>
                        <p class="error" v-if="!$v.location.city.ifLocation">We couldn't determine the city. Please try again.</p>
                    </div>
                </div>   
            </div>
            <div v-show="!hasLocation">
                <div class="field">
                    <label> What mediums will your remote event be using? </label>
                    <multiselect 
                    v-model="remoteLocations"
                    tag-placeholder="Add this as new tag" 
                    placeholder="Type here to create your own" 
                    label="name"
                    :close-on-select="true"
                    track-by="id" 
                    :options="remoteLocationOptions" 
                    :multiple="true" 
                    :taggable="true" 
                    tag-position="bottom"
                    :class="{ active: active == 'remote','error': $v.remoteLocations.$error}"
                    @tag="addTag"
                    @click="active = 'remote'"
                    @blur="active = null"
                    ></multiselect>
                    <div v-if="$v.remoteLocations.$error" class="validation-error">
                        <p class="error" v-if="!$v.remoteLocations.ifNoLocation">Please choose at least one Mobile Location</p>
                    </div>
                </div>
                <div class="field">
                    <label class="area"> Helpful remote location event suggestions (optional) </label>
                    <textarea 
                    type="text"
                    name="description" 
                    v-model="description" 
                    placeholder="eg. Sign on 10 minutes early..."
                    :class="{ active: active == 'description'}"
                    @click="active = 'description'"
                    @blur="active = null" 
                    rows="8"></textarea>
                </div>
            </div>
            <CubeSpinner :loading="loading"></CubeSpinner>
        </section>
        <section class="event-show-location" :style="pageHeight">
            <div v-if="map.center && hasLocation" class="event-create-map">
                <div class="zoom">
                    <div class="zoom__in">
                        <button @click.prevent="map.zoom += 1">
                            <svg viewBox="0 0 16 16" height="16" width="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0V1z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
                        </button>
                    </div>
                    <div class="zoom__out">
                        <button @click.prevent="map.zoom -= 1">
                            <svg viewBox="0 0 16 16" height="16" width="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
                        </button>
                    </div>
                </div>
                <div :style="pageHeight" style="width:100%;">
                    <l-map :zoom="map.zoom" :center="map.center" :options="{ scrollWheelZoom: map.allowZoom, zoomControl: map.allowZoom }">
                    <l-tile-layer :url="map.url"></l-tile-layer>
                    <l-marker :lat-lng="map.center"></l-marker>
                    </l-map>
                </div>  
            </div>
        </section>
        <div class="event-create__submit-button">
            <button :disabled="disabled" @click.prevent="onSubmit('exit')" class="nav-back-button"> Save and Exit </button>
        </div>
		<div class="create-button__back">
            <button :disabled="disabled" class="create" @click.prevent="onBack('title')"> Back </button>
        </div>
        <div class="create-button__forward">
            <button :disabled="disabled" class="create" @click.prevent="onSubmit()"> Save and Continue </button>
        </div>
    </div>
</template>

<script>
    import CubeSpinner  from '../layouts/loading.vue'
    import googleLocationMixin from './components/google-location-mixin'
    import formValidationMixin from '../../mixins/form-validation-mixin'
	import Multiselect from 'vue-multiselect'
	import { required, minLength, requiredIf } from 'vuelidate/lib/validators'
	import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'
    import _ from 'lodash'

	export default {
		props: ['event', 'remote'],

        mixins: [googleLocationMixin, formValidationMixin],

		components: { Multiselect, LMap, LTileLayer, LMarker, CubeSpinner },

		computed: {
			locationPlaceholder() {
				return this.location.postal_code || this.location.city ? (this.location.home ? this.location.home + ' ' : '') 
                + (this.location.street ? this.location.street + ', ' : '') 
                + (this.location.city ? this.location.city + ', ' : '') 
                + (this.location.country ? this.location.country : '') 
                : 'Enter full address ';
			},

            remoteLocationArray() {
                let data; 
                return data = {remote: this.remoteLocations.map(a => a.name), description: this.description};
            },

            endpoint() {
                return `/create-event/${this.event.slug}/location`
            },

            corsEndpoint() {
                return `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${this.location.postal_code ? this.location.postal_code : this.location.city}&key=AIzaSyBxpUKfSJMC4_3xwLU73AmH-jszjexoriw`
            },

		},

		data() {
			return {
				location: this.initializeLocationObject(),
                map: this.initializeMapObject(),
                active: null,
                disabled: false,
                pageHeight:0,
                hasLocation: this.event.hasLocation,
                remoteLocationOptions: this.remote ? this.remote : '',
                remoteLocations: this.event.remotelocations ? this.event.remotelocations : '',
                description: this.event.remote_description ? this.event.remote_description : '',
                serverErrors: [],
                loading: false,
			}
		},

		methods: {
			initializeLocationObject() {
				return {
					street:  '',
	                city:  '',
	               	region: '',
	                country: '',
	               	postal_code: '',
	                hiddenLocation: '',
	 				hiddenLocationToggle: 0,
	                latitude: '',
	               	longitude: '',
                    home: '',
				}
			},

            initializeMapObject() {
                return {
                    zoom:14,
                    center: '',
                    url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                    attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                    allowZoom: false,
                }
            },
			
			onSubmit(value) {
				if (this.checkVuelidate()) { return false };
                return this.location.hiddenLocationToggle && this.hasLocation ? this.onCorsSubmit(value) : this.onNormalSubmit(value);
			},

            onNormalSubmit(value) {
                axios.patch( this.endpoint, this.hasLocation ? this.location : this.remoteLocationArray )
                .then(res => {  
                    value == 'exit' ? this.onBackInitial() : this.onForward('category');
                })
                .catch(err => {
                    this.onErrors(err);
                });
            },

            onCorsSubmit(value) {
                this.loading = true;
                axios.get(this.corsEndpoint)
                .then(res => {
                    this.location.latitude = res.data.results[0].geometry.location.lat;
                    this.location.longitude = res.data.results[0].geometry.location.lng;
                })
                .then(res => {  
                    axios.patch (this.endpoint, this.location )     
                    value == 'exit' ? this.onBackInitial() : this.onForward('category');
                })
                .catch(err => {
                    this.onErrors(err);
                });
            },

            updateEventFields(input) {
                if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
                    this.location = _.pick(input, _.intersection( _.keys(this.location), _.keys(input) ));
                };
                this.location.latitude ? this.map.center = L.latLng(this.location.latitude, this.location.longitude) : '';
            },

            handleResize() {
                this.pageHeight = `height:calc(${window.innerHeight}px - 7rem)`;
            },

            addTag (newTag) {
                const tag = {
                    name: newTag,
                    id: newTag.substring(0, 0) + Math.floor((Math.random() * 10000000))
                }
                this.remoteLocationOptions.push(tag)
                this.remoteLocations.push(tag)
            },

            onLoad() {
                axios.get(this.onFetch('location'))
                .then(res => {
                    this.updateEventFields(res.data.location);
                });
            },
		},
	
        created() {
            this.onLoad();
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },

        mounted() {
            this.autocomplete = new google.maps.places.Autocomplete(
                (this.$refs.autocomplete),
                {types: ['geocode']}
            );
            this.autocomplete.addListener('place_changed', this.setPlace);
            this.updateEventFields(this.event.location);
        },

        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },

		validations: {
			location: {
			 	latitude: {
                    ifLocation() { 
                        return this.hasLocation ? this.location.latitude ? true : false : true
                    },
			 	},
                city: {
                    ifLocation() { 
                        return this.hasLocation ? this.location.city ? true : false : true
                    },
                }
			},
            remoteLocations: {
                ifNoLocation() {
                    return !this.hasLocation ? this.remoteLocations.length ? true : false : true
                }
            },
		},
			
};



</script>