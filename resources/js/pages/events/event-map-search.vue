<template>
    <section class="e-search-map">
        <div v-if="desktop" class="e-search-map-container" :style="pageHeight">
            <div>
                <div class="e-search-map-container__update-box grid">
                    <label>
                        <span class="e-search-map-container__update-box--checkbox">
                            <input 
                            @click="mapSearch = !mapSearch" 
                            type="checkbox" 
                            v-model="mapSearch">
                            <span class=check></span>
                        </span> 
                    </label>
                    <p>Search as I move the map </p>
                </div>
                <div class="zoom search">
                    <div class="zoom__in">
                        <button @click.prevent="zoom += 1">
                            <svg viewBox="0 0 16 16" height="16" width="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0V1z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
                        </button>
                    </div>
                    <div class="zoom__out">
                        <button @click.prevent="zoom -= 1">
                            <svg viewBox="0 0 16 16" height="16" width="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
                        </button>
                    </div>
                </div>
                <div >
                    <l-map
                    :zoom="zoom"
                    :center="mapCenter"
                    :minZoom="10"
                    :style="pageHeight"
                    @update:center="centerUpdate"
                    @update:bounds="boundsUpdate"
                    :options="{ scrollWheelZoom: allowZoom, zoomControl: allowZoom }"
                    >
                    <l-tile-layer :url="url" :attribution="attribution" />
                    <l-marker-cluster>
                        <l-marker 
                        v-for="event in events" 
                        :key="event.id" 
                        :lat-lng="event.location_latlon">
                            <l-icon class-name="icons"><p>{{event.price_range}}</p></l-icon>
                            <l-popup>
                                <popup-content :data="event" />
                            </l-popup>
                        </l-marker>
                    </l-marker-cluster>
                    </l-map>
                </div>  
            </div>
        </div>

        <div v-else class="e-search-map-container fullmap" :style="mobileMap" @click="fullscreen">
            <button class="e-search-map-container__update-box" @click="onMapCenterChanged" v-if="fullMap">
                <span><svg viewBox="0 0 16 16" height="16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.227 3.152a5.552 5.552 0 0 0-3.595-.19 5.4 5.4 0 0 0-2.915 2.041 5.14 5.14 0 0 0-.955 3.352 5.177 5.177 0 0 0 1.413 3.197 5.455 5.455 0 0 0 3.175 1.64 5.537 5.537 0 0 0 3.535-.662 5.293 5.293 0 0 0 2.318-2.66.75.75 0 1 1 1.397.549 6.793 6.793 0 0 1-2.973 3.415 7.037 7.037 0 0 1-4.494.842 6.954 6.954 0 0 1-4.048-2.093 6.677 6.677 0 0 1-1.819-4.124 6.64 6.64 0 0 1 1.23-4.328A6.9 6.9 0 0 1 6.22 1.52a7.052 7.052 0 0 1 4.568.24 6.9 6.9 0 0 1 2.462 1.685V2.002a.75.75 0 0 1 1.5 0v3.6a.75.75 0 0 1-.75.75h-3.692a.75.75 0 1 1 0-1.5h2.171a5.386 5.386 0 0 0-2.252-1.7z" fill="currentColor"></path></svg></span>
                <span>
                    <p>Search here</p>
                </span>
            </button>
            
            <div style="width:100%;">
                <l-map
                :zoom="zoom"
                :center="mapCenter"
                :style="mobileMap"
                @update:center="centerUpdate"
                @update:bounds="boundsUpdate"
                :options="{ scrollWheelZoom: allowZoom, zoomControl: allowZoom }"
                >
                <l-tile-layer :url="url" :attribution="attribution" />
                <l-marker-cluster>
                    <l-marker 
                    v-for="event in events" 
                    :key="event.id" 
                    :lat-lng="event.location_latlon">
                        <l-icon class-name="icons"><p>{{event.price_range}}</p></l-icon>
                        <l-popup>
                            <popup-content :data="event" />
                        </l-popup>
                    </l-marker>
                </l-marker-cluster>
                </l-map>
            </div>  
        </div>
        <button v-if="fullMap" class="mobile-map-close" @click="closeMap">
            <svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false" style="height: 14px; width: 14px; display: block; fill: currentcolor;"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fill-rule="evenodd"></path></svg>
        </button>
    </section>
</template>

<script>
    import _ from 'lodash';
    import Multiselect from 'vue-multiselect';
    import {LMap, LTileLayer, LMarker, LPopup, LIcon} from 'vue2-leaflet'
    import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
    import { latLng } from "leaflet"
    import PopupContent from "../read/popup-content"


    export default {

        components: { Multiselect, LPopup, LMap, LTileLayer, LMarker, 'l-marker-cluster': Vue2LeafletMarkerCluster, PopupContent, LIcon },

        props: [ 'events', 'user' ],

        computed: {
            mapCenter() {
                return {
                    lat: new URL(window.location.href).searchParams.get("lat") ? new URL(window.location.href).searchParams.get("lat") : '',
                    lng: new URL(window.location.href).searchParams.get("lng") ? new URL(window.location.href).searchParams.get("lng") : '',
                }
            },
        }, 

        data() {
            return {
                value: '',
                eventName: '',
                searchObject: this.initializeSearchObject(),
                visibility: 'visible',
                zoom: 11,
                center: latLng(47.41322, -1.219482),
                url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
                attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                currentCenter: latLng(47.41322, -1.219482),
                currentBounds: '',
                allowZoom: false,
                eventList: '',
                mapSearch: true,
                results: 15,
                locationName: new URL(window.location.href).searchParams.get("name"),
                desktop: window.innerWidth > 769,
                pageHeight: `height: 100vh;`,
                mobileMap : `height:${window.innerHeight}px;`,
                fullMap: false,
                options: {
                    disableClusteringAtZoom: 10,
                    showCoverageOnHover: false,
                }
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

            toggleBodyClass(addRemoveClass, className) {
                const el = document.body;

                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            onMapCenterChanged() {
                this.$emit('mapCenterUpdated', this.currentBounds);
            },

            handleResize() {
                //
            },

            fullscreen() {
                this.$emit('mapfull', window.innerHeight+'px');
                this.$store.commit('showmap', true);
                this.mapSearch = false;
                this.fullMap = true;
                this.toggleBodyClass('addClass', 'noscroll');
            },

            closeMap() {
                this.$emit('mapfull', '65%');
                this.$store.commit('showmap', false);
                this.toggleBodyClass('removeClass', 'noscroll');
                this.fullMap = false;
            },
            
        },

        watch: {
            mapCenter() {
                this.zoom = 11
            },
            currentCenter() {
                this.currentCenter.lat.toString().length > 10 && this.desktop ? this.mapSearch ? this.onMapCenterChanged() : '' : '' ;
            },
        },

        created() {
            window.addEventListener('resize', this.handleResize)
        },

        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },

    };
</script>