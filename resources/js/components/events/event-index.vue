<template>
    <div class="container">
        <div class="event-index">

            <div class="staffpicks" v-if="staffpicks.length">
                <h2>Check out our Staff Picks of the week</h2>
                <div class="event-index-eventlist grid">
                    <div v-for="(pick, index) in staffpicks" class="eventlist__element">
                        <event-listing-item :user="user" :event="pick.event"></event-listing-item>
                    </div>
                </div>
            </div>
            
            <h2>Our Latest Immersive Events</h2>
            <div class="event-index-eventlist grid">
                <div v-for="(event, index) in events" class="eventlist__element">
                    <event-listing-item :event="event"></event-listing-item>
                </div>
            </div>

            <h2>Our Latest Remote Events</h2>
            <div class="event-index-eventlist grid">
                <div v-for="(event, index) in remote" class="eventlist__element">
                    <event-listing-item :event="event"></event-listing-item>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import Multiselect from 'vue-multiselect';
    import format from 'date-fns/format';
    import catitem  from '../events/components/cat-item.vue';


    export default {

        components: {
            Multiselect, catitem
        },

        props: {
            events: {
                type:Array,
            },
            remote: {
                type:Array,
            },
            categories: {
                type:Array
            },
            staffpicks: {
                type:Array
            },
        }, 

        computed: {
            user () {
                return this.$store.state.user ? this.$store.state.user : ''
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
            },

        },

    };
</script>