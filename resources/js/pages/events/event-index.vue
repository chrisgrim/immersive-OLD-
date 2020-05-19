<template>
    <div class="event-index-container">
        <div class="event-index">
            <header class="padded">
                <div class="header-title">
                    <h3>Discover Immersive Everything!</h3>
                </div>
                <div class="index-nav-search">
                    <nav-search></nav-search>
                </div>
            </header>


            <section>
                <div class="index-nopro">
                    <div class="nopro-content" style="background: center / cover no-repeat url('/storage/website-files/nopro-back.jpg')">
                        <h3>Check out the latest reviews on</h3>
                        <h2>No Proscenium</h2>
                        <a rel="noreferrer" target="_blank" href="https://noproscenium.com/">
                            <button class="nopro-button">
                                Check it out
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <section class="padded events">
                <div class="event-index-eventlist grid">
                    <div v-for="(event, index) in events" class="eventlist__element">
                        <event-listing-item :event="event"></event-listing-item>
                    </div>
                </div>
            </section>

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