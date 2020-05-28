<template>
    <div class="event-index-container">
        <div class="event-index">
            <header class="padded">
                <div class="header-title">
                    <h3>Discover immersive shows near you...</h3>
                </div>
                <div class="index-nav-search">
                    <nav-search></nav-search>
                </div>
            </header>


            <section class="padded event-list">
                <div class="header-title">
                    <h3>Check out our staff favorites</h3>
                </div>   
                <div class="event-index-eventlist grid">
                    <div v-for="(event, index) in eventList" class="eventlist__element">
                        <vue-event-index :event="event"></vue-event-index>
                    </div>
                </div>
            </section>

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


        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import Multiselect from 'vue-multiselect';
    import format from 'date-fns/format';
    import catitem  from '../events/components/cat-item.vue';
    import SearchFilter  from './components/filter-remote.vue'


    export default {

        components: { Multiselect, catitem, SearchFilter },

        props:['events', 'remote', 'categories', 'staffpicks'],

        computed: {
            user () {
                return this.$store.state.user ? this.$store.state.user : ''
            }
        },

        data() {
            return {
                eventList: this.events ? this.events : [],
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

            updateEventList(value) {
                this.eventList = value;
            }

        },

    };
</script>