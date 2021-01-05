<template>
    <section
        id="location"
        class="pad4">
        <template v-if="event.hasLocation">
            <div>
                <h2>Location</h2>
                <div v-if="event.location.hiddenLocationToggle">
                    <a 
                        rel="noreferrer" 
                        target="_blank" 
                        :href="`http://maps.google.com/maps?q=${event.location.city},+${event.location.region}`">
                        <b><p v-if="event.location.venue"> {{ event.location.venue }} </p></b>
                        <p><span v-if="event.location.city"> {{ event.location.city }},</span> <span v-if="event.location.region"> {{ event.location.region }} </span></p>
                        <br>
                        <p> {{ event.location.hiddenLocation }} </p>
                    </a>
                </div>
                <div v-else>
                    <a 
                        rel="noreferrer" 
                        target="_blank" 
                        :href="`http://maps.google.com/maps?q=${event.location.home}+${event.location.street},+${event.location.city},+${event.location.region}`">
                        <b><p v-if="event.location.venue"> {{ event.location.venue }} </p></b>
                        <p>{{location}}</p>
                    </a>
                </div>
                <div class="es__map">
                    <template v-if="center">
                        <div style="width:100%;height:400px">
                            <l-map 
                                :zoom="zoom" 
                                :center="center" 
                                :options="{ scrollWheelZoom: false, zoomControl: true }">
                                <l-tile-layer :url="url" />
                                <l-marker :lat-lng="center" />
                            </l-map>
                        </div>  
                    </template>
                </div>
            </div>
        </template>
        <template v-else>
            <h2>What you will need</h2>
            <div class="es__remote">
                <div 
                    class="es__remote--element" 
                    v-for="location in event.remotelocations"
                    :key="location.id">
                    <h4>
                        {{ location.name }}
                    </h4>
                    <p>
                        {{ location.description }}
                    </p>
                </div>
            </div>
            <div 
                class="es__remote--element user"
                v-if="event.remote_description">
                <h4>Additional Instructions</h4>
                <p style="white-space: pre-wrap;">{{ event.remote_description }}</p>
            </div>
        </template>
    </section>
</template>

<script>
    import {LMap, LTileLayer, LMarker, LPopup} from 'vue2-leaflet'
    export default {

        props: [ 'event' ],

        components: { LMap, LTileLayer, LMarker, LPopup },

        data() {
            return {
                zoom:13,
                center: this.event.location_latlon,
                url:'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
                attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                location: '',
            }
        },

        mounted() {
            let home = this.event.location.home ? this.event.location.home : ''
            let street = this.event.location.street ? this.event.location.street : ''
            let city = this.event.location.city ? this.event.location.city : ''
            let region = this.event.location.region ? this.event.location.region : ''
            let country = this.event.location.country ? this.event.location.country : ''
            let zip = this.event.location.postal_code ? this.event.location.postal_code : ''
            if (this.event.location.hiddenLocationToggle) {
                this.location = `${city}, ${region}`;
            } else {
                this.location = `${home}${street} ${city}, ${region} ${country} ${zip}`
            }
        }
    }
</script>