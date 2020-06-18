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
            
             <section class="announcement padded">
                <div class="header-title__announcement">
                    <h3>Read The 2020 Immersive Entertainment Industry Annual Report</h3>
                    <p>Discover The Strength of Immersive Entertainment!</p>
                    <br>
                    <p><a href="/storage/website-files/documents/2020 Immersive Entertainment Industry Annual Report.pdf"><button class="black">Check out the report here</button></a></p>
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
                <load-more @intersect="intersected"></load-more>
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

        props:['events', 'categories'],

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
                page: 2,
            }
        },

        methods: {

            intersected() {
                if (this.page >= 4) { return false};
                axios.post(`/api/index/loadmore?page=${this.page}`)
                .then(res => {  
                    console.log(res.data);
                    this.eventList = this.eventList.concat(res.data.data);
                    this.page++;
            
                })
                .catch(err => {
                    this.onErrors(err);
                });
            }

        },

    };
</script>