<template>
    <div class="container">
        <div class="index">
            <div class="categories">
                <div class="section">
                    <div v-for="category in categories" class="block">
                        <a :href="'/categories/' + category.slug">
                            <catitem :category="category"></catitem>
                        </a>
                    </div>
                </div>
            </div>

            <div class="events">
                <h2>Our Latest Events</h2>
                <div>
                    <div id="grid">
                        <div v-for="event in events">
                            <event-listing-item :event="event"></event-listing-item>
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
            categories: {
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