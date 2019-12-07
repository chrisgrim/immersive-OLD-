<template>
    <div class="search">
        <div class="filter">
            <div class="item">
                 <flat-pickr
                    v-model="dates"
                    :config="config"                                                  
                    placeholder="Select date"               
                    name="dates">
                </flat-pickr>
            </div>            
        </div>
        <div class="list">
            <div class="title">
                <h2>{{listedEvents.length}} immersive shows</h2>
            </div>
            <div v-for="event in listedEvents">
                <search-item :event="event"></search-item>
            </div>
        </div>
        <div class="map">
            <div>
                <div class="search">
                    <label>
                        <span class="checkbox">
                            <input @click="mapSearch = !mapSearch" type="checkbox" v-model="mapSearch">
                            <span class=check></span>
                        </span> 
                    </label>
                    <p>Search as I move the map </p>
                </div>
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
                <div style="width:100%;height:100vh">
                    <l-map
                    :zoom="zoom"
                    :center="mapCenter"
                    style="height: 80%"
                    @update:center="centerUpdate"
                    @update:bounds="this.boundsUpdate"
                    :options="{ scrollWheelZoom: allowZoom, zoomControl: allowZoom }"
                    >
                    <l-tile-layer :url="url" :attribution="attribution" />
                    <l-marker-cluster>
                        <l-marker 
                        v-for="event in listedEvents" 
                        :key="event.id" 
                        :lat-lng="event.location_latlon"
                        @click="hello(event)">
                            <l-icon class-name="icons"><p>{{event.price_range.split(' -')[0]}}</p></l-icon>
                            <l-popup>
                                <popup-content :data="event" />
                            </l-popup>
                        </l-marker>
                    </l-marker-cluster>
                    </l-map>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import Multiselect from 'vue-multiselect';
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.css'
    import { mapGetters } from 'vuex'
    import {LMap, LTileLayer, LMarker, LPopup, LIcon} from 'vue2-leaflet'
    import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
    import { latLng } from "leaflet"
    import searchItem  from '../events/components/search-item.vue'
    import PopupContent from "../read/popup-content"


    export default {


        components: {
            Multiselect, flatPickr, LPopup, LMap, LTileLayer, LMarker, 'l-marker-cluster': Vue2LeafletMarkerCluster, PopupContent, LIcon, searchItem,
        },

        props: {
            searchedevents: {
                type:Object,
            },
        }, 

        name: "userSearchRequest",
        name: "searchEvents",

        computed: {
            ...mapGetters([
                'events'
            ]),
            ...mapGetters([
                'userSearchRequest'
            ]),
            location() {
                return this.$store.state.userSearchRequest.name;
            },
            mapCenter() {
                return {
                    lat: this.$store.state.userSearchRequest.latitude ? this.$store.state.userSearchRequest.latitude : '',
                    lng: this.$store.state.userSearchRequest.longitude ? this.$store.state.userSearchRequest.longitude : '',
                }
            },
            listedEvents() {
                return this.eventList ? this.eventList : this.events;
            }
        }, 

        data() {
            return {
                value: '',
                list: [],
                price: '',
                eventName: '',
                searchObject: this.initializeSearchObject(),
                dates: '',
                config: {
                    minDate: "today",
                    mode: "range",
                    inline: false,
                    showMonths: 2,
                    dateFormat: 'Y-m-d H:i:s',
                    onClose: [function(value){
                        const dateArr = value.map(date => this.formatDate(date, "Y-m-d H:i:s"));
                        console.log(dateArr);
                    }.bind(this.test)] 
                },
                visibility: 'visible',
                zoom: 11,
                center: latLng(47.41322, -1.219482),
                url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
                attribution:
                '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
                currentCenter: latLng(47.41322, -1.219482),
                currentBounds: '',
                allowZoom: false,
                eventList: '',
                mapSearch: true,

            }
        },

        methods: {

            testUpdate(value) {
                console.log(value);
                this.$set(this.searchedevents, 'start',value[0]);
                console.log(this.searchedevents);
            },

            initializeSearchObject() {
                return {
                    latitude: '',
                    longitude: '',
                }
            },
        
            updateFilter() {
                this.$store.dispatch('searchEvents', this.searchedevents);
                this.$store.dispatch('userSearchRequest', this.searchedevents);
            },
            centerUpdate(center) {
                this.currentCenter = center;
            },
            boundsUpdate(bounds) {
                this.currentBounds = bounds;
                // this.mapSearch ? this.updateData() : '';
            },

            updateData() {
                let data = {
                    latitude: this.currentBounds,
                    time: 'test'
                };
                axios.post('/api/mapboundary/search', data)
                .then(response => {
                    console.log(response.data)
                    this.eventList = response.data
                });
            },

            hello(event) {
                //
            }
            
        },

        watch: {
            mapCenter() {
                this.zoom = 11
            },
            currentCenter() {
                this.currentCenter.lat.toString().length > 10 ? this.mapSearch ? this.updateData() : '' : '' ;
            }
        },

        mounted() {
            this.updateFilter();
        },

    };
</script>