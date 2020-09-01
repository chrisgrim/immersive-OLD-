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

            <section id="latestevents" class="padded staffpicks__banner" v-if="staffpicks.length">
                <div class="padded-width">
                    <div class="banner-title__staffpicks">
                        <div style="display:inline-block;">
                            <h3>Staff Picks</h3>
                        </div>
                        <div>
                            <a href="/staffpicks/current">
                                <button class="staffpicks__selection--loadmore">
                                    See all
                                </button>
                            </a>
                        </div>
                        <div @click="showLess('staff')" class="index-staff__slider-button--left">
                            <button class="slider-button">
                                <svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                            </button>
                        </div>
                        <div  @click="showMore('staff')" class="index-staff__slider-button--right">
                            <button class="slider-button">
                                <svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg>
                            </button>
                        </div>
                    </div>
                    <div class="staffpicks__selection">
                        <div class="staffpicks__selection--middle" :style="`transform: translateX(${translateStaff}%);`">
                            <div v-for="(staffpick, index) in staffpicks" class="staffpicks__selection--bottom">
                                <a :href="`/events/${staffpick.event.slug}`">
                                    <div class="staffpicks__selection--main">
                                        <div class="staffpicks__image">
                                            <picture>
                                                <source type="image/webp" :srcset="`/storage/${staffpick.event.thumbImagePath}`"> 
                                                <img :src="`/storage/${staffpick.event.thumbImagePath.slice(0, -4)}jpg`" :alt="`${staffpick.event.name} Immersive Event`">
                                            </picture>
                                        </div>
                                        <div>
                                            <div class="staffpicks__title">
                                                <h4>{{staffpick.event.name}}</h4>
                                                <p>{{staffpick.event.organizer.name}}</p>
                                            </div>
                                            <div class="staffpicks__summary">
                                                <p>" {{staffpick.comments}} "</p>
                                            </div>
                                            <div class="staffpicks__user">
                                                <div class="staffpicks__user--name">
                                                    <i><p>-{{staffpick.user.name}}</p></i>
                                                </div>
                                                <picture>
                                                    <source type="image/webp" :srcset="`/storage/${staffpick.user.thumbImagePath}`"> 
                                                    <img :src="`/storage/${staffpick.user.thumbImagePath.slice(0, -4)}jpg`" :alt="`${staffpick.user.name} Immersive Event`">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="padded event-list event-index__categories">
                <div class="padded-width">
                    <div @click="showLess('cat')" class="index-category__slider-button--left">
                        <button class="slider-button">
                            <svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                        </button>
                    </div>
                    <div class="index-category__slider-button--right" @click="showMore('cat')">
                        <button class="slider-button">
                            <svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg>
                        </button>
                    </div>
                    <div class="event-index__categories--top">
                        <div class="event-index__categories--middle" :style="`transform: translateX(${translateCat}%);`">    
                            <div class="event-index__categories--bottom" v-for="(category, index) in categories">
                                <a :href="`/index/search-online?category=${category.name}&id=${category.id}`">
                                    <div class="event-index__categories--item clean-box" style="width: 100%;height:100%">
                                        <div>
                                            <h4>{{category.name}}</h4>
                                        </div>
                                    </div>
                                </a>  
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="latestevents" class="padded event-list" v-cloak>
                <div class="padded-width">
                    <div class="header-title">
                        <h3>Playing this weekend</h3>
                    </div>
                    <div class="event-index__eventlist--more">
                        <a :href="`/index/search-online?start=${weekendDates[0]}&end=${weekendDates[1]}`">
                            <button>
                                See more
                            </button>
                        </a>
                    </div>
                    <vue-event-index :events="weekend"></vue-event-index>
                    <div class="header-title">
                        <h3>Horror Events</h3>
                    </div>
                    <div class="event-index__eventlist--more">
                        <a href="/index/search-online?tag=horror&id=8">
                            <button>
                                See more
                            </button>
                        </a>
                    </div> 
                    <vue-event-index :events="horror"></vue-event-index>
                    <div class="header-title">
                        <h3>Latest events</h3>
                    </div>
                    <div class="event-index__eventlist--more">
                        <a href="/index/search-online">
                            <button>
                                See more
                            </button>
                        </a>
                    </div>
                    <vue-event-index :events="events"></vue-event-index>
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
                <div class="padded-width">
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

        props:['categories', 'staffpicks'],

        computed: {
            user () {
                return this.$store.state.user ? this.$store.state.user : ''
            }
        },

        data() {
            return {
                events: [],
                weekend: [],
                horror: [],
                value: '',
                list: [],
                price: '',
                eventName: '',
                location: [],
                weekendDates: [],
                mobile: window.innerWidth > 768 ? true : false,
                translateStaff: 0,
                translateCat: 0,
            }
        },

        methods: {
            async onLoad() {
                try {
                    let {data} = await axios.get('/index/fetch')
                    this.events = data.events;
                    this.weekend = data.weekend;
                    this.horror = data.horror;
                    this.weekendDates = data.weekenddates
                } catch(err) {
                  console.log(err)
                }
            },
            showMore(name){
                name == 'cat' && this.translateCat != -200 ? this.translateCat -= 100 : '';
                name == 'staff' && this.translateStaff != (this.staffpicks.length -1) * -100? this.translateStaff -= 100 : '';
            },
            showLess(name){
                name == 'cat' && this.translateCat != 0 ? this.translateCat += 100 : '';
                name == 'staff' && this.translateStaff != 0 ? this.translateStaff += 100 : '';
            },

        },

        mounted() { 
            this.onLoad()
        },


    };
</script>