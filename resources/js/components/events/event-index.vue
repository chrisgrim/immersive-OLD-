<template>
    <div class="container">
        <div class="index">
            <div class="categories">
                <div class="section">
                    <div v-for="category in categories" class="block" v-if="category.hasEvent">
                        <a :href="'/categories/' + category.slug">
                            <catitem :category="category"></catitem>
                        </a>
                    </div>
                </div>
            </div>

            <div class="staffpicks" v-if="staffpicks.length">
                <h2>Check out our Staff Picks of the week</h2>
                <div>
                    <div id="grid">
                        <div v-for="pick in staffpicks">
                            <event-listing-item :user="user" :event="pick.event"></event-listing-item>
                        </div>
                    </div>
                </div>
            </div>

            <div class="events">
                <h2>Our Latest Events</h2>
                <div>
                    <div id="grid">
                        <div v-for="event in events">
                            <event-listing-item :user="user" :event="event"></event-listing-item>
                        </div>
                    </div>
                </div>
            </div>

            <div class="events">
                <h2>Our Latest Remote Events</h2>
                <div>
                    <div id="grid">
                        <div v-for="event in remote">
                            <event-listing-item :user="user" :event="event"></event-listing-item>
                        </div>
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
            user: {
                type:String
            },
            staffpicks: {
                type:Array
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

        // mounted() {
  //           this.$store.dispatch('fetchEvents')
  //       },
    };
</script>