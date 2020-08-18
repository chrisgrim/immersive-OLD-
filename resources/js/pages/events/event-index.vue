<template>
    <div class="event-index-container">
        <div class="event-index">
            <header class="padded">
                <div class="header-title">
                    <h3>Discover immersive experiences...</h3>
                </div>
                <div class="index-nav-search">
                    <nav-search></nav-search>
                </div>
            </header>

            <section id="latestevents" class="padded staffpicks__banner" v-if="staffpicks">
                <div class="banner-title__staffpicks">
                    <h3>This Week's Staff Picks</h3>
                </div>
                <div class="staffpicks__selection">
                    <a :href="`/events/${staffpicks.event.slug}`">
                        <div class="staffpicks__selection--main">
                            <div class="staffpicks__image">
                                <picture>
                                    <source type="image/webp" :srcset="`/storage/${staffpicks.event.thumbImagePath}`"> 
                                    <img :src="`/storage/${staffpicks.event.thumbImagePath.slice(0, -4)}jpg`" :alt="`${staffpicks.event.name} Immersive Event`">
                                </picture>
                            </div>
                            <div>
                                <div class="staffpicks__title">
                                    <h4>{{staffpicks.event.name}}</h4>
                                    <p>{{staffpicks.event.organizer.name}}</p>
                                </div>
                                <div class="staffpicks__user">
                                    <picture>
                                        <source type="image/webp" :srcset="`/storage/${staffpicks.user.thumbImagePath}`"> 
                                        <img :src="`/storage/${staffpicks.user.thumbImagePath.slice(0, -4)}jpg`" :alt="`${staffpicks.user.name} Immersive Event`">
                                    </picture>
                                    <div class="staffpicks__user--name">
                                        <p>{{staffpicks.user.name}}</p>
                                    </div>
                                </div>
                                <div class="staffpicks__summary">
                                    <p>" {{staffpicks.comments}} "</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="/staffpicks/current">
                        <div class="staffpicks__selection--loadmore">
                            <h3>Check out the rest of the picks here.</h3>
                        </div>
                    </a>
                </div>
            </section>
            
            <section id="latestevents" class="padded event-list">
                <div class="header-title">
                    <h3>Latest events</h3>
                </div>   
                <div class="event-index-eventlist grid">
                    <div v-for="(event, index) in eventList" class="eventlist__element">
                        <vue-event-index :event="event"></vue-event-index>
                    </div>
                </div>
                <div class="see-more-events">
                    <a href="/index/search-online">
                        <button class="default"> See More Events</button>
                    </a>
                </div>
            </section>

            <section class="announcement padded">
                <div class="header-title__announcement">
                    <h3>Read The 2020 Immersive Entertainment Industry Annual Report</h3>
                    <p>Discover The Strength of Immersive Entertainment!</p>
                    <br>
                    <p><a href="/storage/website-files/documents/2020 Immersive Entertainment Industry Annual Report.pdf"><button class="black">Check out the report here</button></a></p>
                </div>
            </section>

            <section>
                <div class="index-contributers">
                    <h3>Check out our partners</h3>
                    <div class="contributer-content grid">
                        <div class="contributer__element" >
                            <a target="_blank" rel="noopener noreferrer" href="https://www.argn.com/">
                                <button style="background: url('/storage/website-files/argn-logo.jpg') center center / cover no-repeat;" class="contributer--button"></button>
                            </a>
                        </div>
                        <div class="contributer__element" >
                            <a target="_blank" rel="noopener noreferrer" href="https://roomescapeartist.com/">
                                <button style="background: url('/storage/website-files/rea-logo.png') center center / cover no-repeat;" class="contributer--button"></button>
                            </a>
                        </div>
                        <div class="contributer__element" >
                             <a target="_blank" rel="noopener noreferrer" href="https://noproscenium.com/">
                                <button style="background: url('/storage/website-files/nopro-logo.jpg') center center / cover no-repeat;" class="contributer--button"></button>
                            </a>
                        </div>
                        <div class="contributer__element" >
                             <a target="_blank" rel="noopener noreferrer" href="https://www.herefest.com/">
                                <button style="background: url('/storage/website-files/here-logo.png') center center / cover no-repeat;" class="contributer--button"></button>
                            </a>
                        </div>
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
    import LoadMore  from '../../components/LoadMore.js'


    export default {

        components: { Multiselect, catitem, SearchFilter, LoadMore },

        props:['events', 'categories', 'staffpicks'],

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

            

        },

    };
</script>