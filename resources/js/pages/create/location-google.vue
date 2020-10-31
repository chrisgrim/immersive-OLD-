<template>
    <div 
        :class="{ remote: !hasLocation, showmap: location.latitude && hasLocation}" 
        class="event-create__location grid">
        <section 
            :class="{ showmap: location.latitude && hasLocation}" 
            class="event-enter-location">
            <div class="title">
                <h2>Location</h2>
            </div>
            <div class="field">
                <label> Does your event have a physical location? </label>
                <div id="cover">
                    <input  
                        @input="$v.select.$touch" 
                        v-model="hasLocation" 
                        type="checkbox" 
                        id="checkbox">
                    <div id="bar" />
                    <div id="knob">
                        <p v-if="hasLocation">
                            Yes
                        </p>
                        <p v-else>
                            No
                        </p>
                    </div>
                </div>
            </div>
            <div v-show="hasLocation">
                <div class="field">
                    <label> Is your location hidden? </label>
                    <div id="cover">
                        <input 
                            @input="$v.location.hiddenLocationToggle.$touch" 
                            v-model="location.hiddenLocationToggle" 
                            type="checkbox" 
                            id="checkbox">
                        <div id="bar" />
                        <div id="knob">
                            <p v-if="location.hiddenLocationToggle">
                                Yes
                            </p>
                            <p v-else>
                                No
                            </p>
                        </div>
                    </div>
                </div>
                <div 
                    class="field" 
                    v-if="location.hiddenLocationToggle">
                    <label> Please enter how participants will be notified of the location. (Required) </label>
                    <textarea 
                        v-model.trim="location.hiddenLocation" 
                        rows="4" 
                        :class="{ active: active == 'hidden', 'error': $v.location.hiddenLocation.$error }"
                        required 
                        autofocus
                        placeholder="...the night before you will receieve an email containing the location..."
                        @click="active = 'hidden'"
                        @blur="active = null"
                        @input="$v.location.hiddenLocation.$touch" />
                    <div v-if="$v.location.hiddenLocation.$error" class="validation-error">
                        <p class="error" v-if="!$v.location.hiddenLocation.ifHidden">Please let our readers know how they will be informed</p>
                    </div>
                </div>
                <div class="field">
                    <label> Venue name (optional) </label>
                    <input 
                        v-model="location.venue" 
                        placeholder="Venue name"
                        :class="{ active: active == 'venue', 'error': $v.location.venue.$error }"
                        @click="active = 'venue'"
                        @blur="active = null"
                        type="text">
                    <div v-if="$v.location.$error" class="validation-error">
                        <p class="error" v-if="$v.location.venue.$error">No longer than 40 characters</p>
                    </div>
                </div> 
                <div class="field">
                    <label> Event Location </label>
                    <label v-if="location.hiddenLocationToggle"> Please enter a full address. This will NOT appear in your event description, but will aid users in finding events near them. If you do not have an exact address, please enter the closest zip code. <br> <b>Note:</b> If you <i>just</i> enter a major city, your event will overlap with others on map view. Be as specific as possible.</label>
                    <input 
                        ref="autocomplete" 
                        :placeholder="locationPlaceholder"
                        :class="{ active: active == 'location', 'error': $v.location.latitude.$error }"
                        autocomplete="false"
                        onfocus="value = ''" 
                        @click="active = 'location'"
                        @blur="active = null"
                        type="text">
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
                        @input="$v.remoteLocations.$touch"
                        @tag="addTag"
                        @click="active = 'remote'"
                        @blur="active = null" />
                    <div v-if="$v.remoteLocations.$error" class="validation-error">
                        <p class="error" v-if="!$v.remoteLocations.ifNoLocation">Please choose at least one Mobile Location</p>
                    </div>
                </div>
                <div class="field">
                    <label class="area"> Additional instructions or suggestions (optional) </label>
                    <textarea 
                        type="text"
                        name="description" 
                        v-model="description" 
                        placeholder="eg. Sign into Zoom 10 minutes early... "
                        :class="{ active: active == 'description'}"
                        @click="active = 'description'"
                        @input="$v.description.$touch"
                        @blur="active = null" 
                        rows="8" />
                </div>
            </div>
            <CubeSpinner :loading="loading" />
        </section>

        <section style="width:100%">
            <div 
                :class="{ showmap: location.latitude && hasLocation}" 
                class="event-show-location" 
                :style="pageHeight">
                <div 
                    v-if="map.center && hasLocation" 
                    class="event-create-map">
                    <div
                        class="event-show-map"
                        :style="pageHeight" 
                        style="width:100%;">
                        <l-map 
                            :zoom="map.zoom" 
                            :center="map.center" 
                            :options="{ scrollWheelZoom: false, zoomControl: true }">
                            <l-tile-layer :url="map.url" />
                            <l-marker :lat-lng="map.center" />
                        </l-map>
                    </div>  
                </div>
            </div>
        </section>
        <Submit 
            @submit="onSubmit"
            :disabled="disabled" 
            previous="title"
            next="category" 
            :event="event" />
        <transition name="slide-fade">
            <div v-if="updated" class="updated-notifcation">
                <p>Your event has been updated.</p>
            </div>
        </transition>
    </div>
</template>

<script>
    import CubeSpinner  from '../layouts/loading.vue'
    import googleLocationMixin from './components/google-location-mixin'
    import formValidationMixin from '../../mixins/form-validation-mixin'
    import Multiselect from 'vue-multiselect'
    import { required, minLength, requiredIf, maxLength } from 'vuelidate/lib/validators'
    import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'
    import _ from 'lodash'
    import Submit  from './components/submit-buttons.vue'

    export default {
        props: ['event', 'remote'],
        mixins: [googleLocationMixin, formValidationMixin],
        components: { Multiselect, LMap, LTileLayer, LMarker, CubeSpinner, Submit },
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
                return `https://maps.googleapis.com/maps/api/geocode/json?address=${this.location.postal_code ? this.location.postal_code : this.location.city}&key=AIzaSyBxpUKfSJMC4_3xwLU73AmH-jszjexoriw`
            },
            navSubmit() {
                return this.$store.state.save
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
                updated: false,
                approved: this.event.status == 'p' || this.event.status == 'e' ? true : false,
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
                    venue: '',
                }
            },
            initializeMapObject() {
                return {
                    zoom:14,
                    center: '',
                    url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
                    attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                }
            },
            
            onSubmit(value) {
                if (this.checkVuelidate()) { return false };
                axios.patch( this.endpoint, this.hasLocation ? this.location : this.remoteLocationArray )
                .then(res => {  
                    value == 'save' ? this.save() : this.onForward(value);
                })
                .catch(err => { this.onErrors(err);});
            },

            updateEventFields(input) {
                if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
                    this.location = _.pick(input, _.intersection( _.keys(this.location), _.keys(input) ));
                };
                this.location.latitude ? this.map.center = L.latLng(this.location.latitude, this.location.longitude) : '';
            },

            handleResize() {
                if (window.innerWidth > 1050) {
                    this.pageHeight = `height:calc(${window.innerHeight}px - 7rem)`;
                } else {
                    this.pageHeight = `height:calc(${window.innerHeight/1.5}px - 7rem)`;
                }
            },

            addTag (newTag) {
                if (this.validateText(newTag)) { alert('No urls as tags') ;return false };
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

            validateText(str) {
                return str && str.startsWith("http") ? true : false
            },
        },
    
        created() {
            this.onLoad();
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },
        watch: {
            navSubmit() {
                if (this.event.status < 2 && this.$v.$invalid) {
                    this.onBack(this.navSubmit);
                } else {
                    this.onSubmit(this.navSubmit);
                }
            },
        },

        mounted() {
            this.autocomplete = new google.maps.places.Autocomplete(
                (this.$refs.autocomplete),
                {types: ['geocode']}
            );
            this.autocomplete.addListener('place_changed', this.setPlace);
            this.updateEventFields(this.event.location);
        },

        unmounted() {
            window.removeEventListener('resize', this.handleResize);
        },

        validations: {
            description: {

            },
            location: {
                latitude: {
                    ifLocation() { 
                        return this.hasLocation ? this.location.latitude ? true : false : true
                    },
                },
                city: {
                    ifLocation() { 
                        return this.hasLocation ? this.location.city || this.location.country ? true : false : true
                    },
                },
                hiddenLocationToggle: {

                },
                venue: {
                    maxLength: maxLength(40)
                },
                hiddenLocation: {
                    ifHidden() {
                        return this.location.hiddenLocationToggle ? this.location.hiddenLocation ? true : false : true
                    }
                }
            },
            remoteLocations: {
                ifNoLocation() {
                    return !this.hasLocation ? this.remoteLocations.length ? true : false : true
                }
            },
            select: {

            }
        },
    };
</script>