<template>
    <div class="events">
         <div class="create-title">
            <h2>Event Approval</h2>
            <p>These are the events that need approval</p>
        </div>
        <div>
            <div id="grid">
                <div v-for="event in events">
                    <div class="item">
                    <a :href="`/finish/events/${event.slug}`">
                        <div class="image" :style="`background-image: url(/storage/${event.thumbImagePath}`"></div>
                        <div class="etitle">
                            <h3>{{ event.name }}</h3>
                        </div>
                    </a>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import Multiselect from 'vue-multiselect';
    import format from 'date-fns/format';


    export default {

        components: {
            Multiselect
        },

        props: {
            events: {
                type:Array,
            },
            user: {
                type:String
            }
        }, 

        data() {
            return {
                value: '',
                list: [],
                price: '',
                eventName: '',
                location: [],
            }
        },

        methods: {
            loc() {
                navigator.geolocation.getCurrentPosition(pos => {
                    this.location = pos.coords;
                    console.log(pos.coords);
                }, err => {
                    console.log(err)
                });
            }
        },
    };
</script>