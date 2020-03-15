<template>
    <div>
        <div class="list">
            <div class="title">
                <h2>{{events.length}} immersive shows</h2>
            </div>
            <div class="top">
                <div class="ln"></div>
            </div>
            <div class="vert">
                <div v-for="(event, index) in events">
                    <search-item :user="user" :event="event"></search-item>
                </div>
            </div>
            <button @click="onLoadMore">Load More</button>
        </div>
        <div class="map" :style="this.map">
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
                <div style="width:100%;">
                    <l-map
                    :zoom="zoom"
                    :center="mapCenter"
                    :style="this.map"
                    @update:center="centerUpdate"
                    @update:bounds="this.boundsUpdate"
                    :options="{ scrollWheelZoom: allowZoom, zoomControl: allowZoom }"
                    >
                    <l-tile-layer :url="url" :attribution="attribution" />
                    <l-marker-cluster>
                        <l-marker 
                        v-for="event in events" 
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
    import { mapGetters } from 'vuex'
    import {LMap, LTileLayer, LMarker, LPopup, LIcon} from 'vue2-leaflet'
    import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
    import { latLng } from "leaflet"
    import searchItem  from '../events/components/search-item.vue'
    import PopupContent from "../read/popup-content"


    export default {


        components: {
            Multiselect, LPopup, LMap, LTileLayer, LMarker, 'l-marker-cluster': Vue2LeafletMarkerCluster, PopupContent, LIcon, searchItem,
        },

        props: {
            events: {
                type:Array
            },
            user: {
                type:String
            }
        }, 

        computed: {
            mapCenter() {
                return {
                    lat: this.$store.state.userSearchRequest.latitude ? this.$store.state.userSearchRequest.latitude : '',
                    lng: this.$store.state.userSearchRequest.longitude ? this.$store.state.userSearchRequest.longitude : '',
                }
            },
            map() {
                return `height:calc(${this.height}px - 12rem);`
            }
        }, 

        data() {
            return {
                value: '',
                eventName: '',
                searchObject: this.initializeSearchObject(),
                visibility: 'visible',
                zoom: 11,
                center: latLng(47.41322, -1.219482),
                url: "http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png",
                attribution:
                '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
                currentCenter: latLng(47.41322, -1.219482),
                currentBounds: '',
                allowZoom: false,
                eventList: '',
                mapSearch: true,
                height: 0,
                results: 15,
            }
        },

        methods: {

            initializeSearchObject() {
                return {
                    latitude: '',
                    longitude: '',
                }
            },
        
            centerUpdate(center) {
                this.currentCenter = center;
            },
            boundsUpdate(bounds) {
                this.currentBounds = bounds;
            },

            onMapCenterChanged () {
              this.$emit('mapCenterUpdated', this.currentBounds);
            },

            onLoadMore() {
                this.results = this.results + 15;
                console.log(this.results);
                this.$emit('loadMore', this.results);
            },

            handleResize() {
                this.height = window.innerHeight;
            },

            hello(value) {
                //
            }
            
        },

        watch: {
            mapCenter() {
                this.zoom = 11
            },
            currentCenter() {
                this.currentCenter.lat.toString().length > 10 ? this.mapSearch ? this.onMapCenterChanged() : '' : '' ;
            }
        },

        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },

        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },

    };
</script>