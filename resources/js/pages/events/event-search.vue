<template>
    <div class="event-search">
        <div
            v-if="url.lat && mobile"
            class="event-search__container">
            <event-map-search
                @onhidemap="fullMap"
                :user="user"
                :events="eventList.data" />
            <section 
                class="event__filter"
                @click="showEvents"
                :style="`margin-top: ${shiftDown}vh;`">
                <div class="greyBar" />
                <EventFilter
                    @locationevents="updateEvents"
                    @onlineevents="updateOnlineEvents"
                    :page="pagination"
                    :onlinepage="onlinePagination"
                    :events="searchedevents" 
                    :onlineevents="onlineevents" 
                    :maxprice="maxprice" 
                    :tags="tags" 
                    :categories="categories" />
                <div class="event-search-list">
                    <div 
                        v-if="eventList.data && eventList.data.length" 
                        class="event__results">
                        <div class="event__results--title">
                            <p style="display:inline-block;font-size:1.4rem;font-weight:500">
                                {{ eventList.total }} 
                                <span v-if="eventList.total > 1">
                                    events.
                                </span>
                                <span v-else>
                                    event.                       
                                </span>
                            </p>
                        </div>
                        <div>
                            <a 
                                :href="`/events/${event.slug}`" 
                                v-for="(event) in eventList.data" 
                                :key="event.id"
                                class="event__horizontal-card">
                                <div class="event__horizontal-card--element">
                                    <div class="event__horizontal-card--image">
                                        <div class="event__horizontal-card--lock" />                              
                                        <picture>
                                            <source 
                                                type="image/webp" 
                                                :srcset="`/storage/${event.thumbImagePath}`"> 
                                            <img 
                                                style="object-fit:cover" 
                                                loading="lazy" 
                                                :src="`/storage/${event.thumbImagePath.slice(0, -4)}jpg`" 
                                                :alt="`${event.name} Immersive Event`">
                                        </picture>
                                    </div>
                                    <div class="event__horizontal-card--content">
                                        <div>
                                            <div class="event__horizontal-card--category">
                                                {{ event.category ? event.category.name : '' }}
                                            </div>
                                            <div class="event__horizontal-card--heart">
                                                <favorite 
                                                    inputclass="heart visible" 
                                                    :event="event" />
                                            </div>
                                        </div>
                                        <div class="event__horizontal-card--title">
                                            {{ event.name }}
                                        </div>
                                        <div class="event__horizontal-card--tagline">
                                            {{ event.tag_line }}
                                        </div>
                                        <ul class="event__horizontal-card--tags">
                                            <li 
                                                v-for="(itemTag, index) in eventTags(event)" 
                                                :key="itemTag.id" >
                                                {{ itemTag.name }}<span v-if="index != '2'">•</span>
                                            </li>
                                        </ul>
                                        <div class="event__horizontal-card--price">
                                            {{ fixedprice(event) }}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <pagination
                                :list="eventList"
                                :limit="2"
                                @selectpage="selectPage" />
                        </div>
                    </div>
                    <div 
                        class="event__results--title" 
                        v-else>
                        <p style="display:inline-block;font-size:1.4rem;font-weight:500">
                            {{ eventList.total }} 
                            <span v-if="eventList.total > 1">
                                events.
                            </span>
                            <span v-else>
                                event.                       
                            </span>
                        </p>
                        <p>
                            There are no events that fit your search filters,<br> check out some online events below
                        </p>
                    </div>
                    <div 
                        class="event-search-list" 
                        v-if="!mobile">
                        <div class="title">
                            <h3>Check out <span> {{ $store.state.searchtype }} </span> online events</h3>
                        </div>
                        <template v-if="onlineEventList.data">
                            <vue-event-index :events="onlineEventList.data" />
                        </template>
                        <div>
                            <pagination 
                                :list="onlineEventList"
                                :limit="2"
                                @selectpage="selectOnlinePage" />
                        </div>
                    </div>
                    <div>
                        <div class="title">
                            <h2>Online events</h2>
                        </div>
                        <vue-event-index :events="onlineEventList.data" />
                    </div>
                </div>
            </section>
        </div>
        <div
            v-if="url.lat && !mobile"
            class="event-search__container">
            <section 
                class="event__filter" 
                :style="`margin-top: ${shiftDown}vh;`">
                <EventFilter
                    @locationevents="updateEvents"
                    @onlineevents="updateOnlineEvents"
                    :page="pagination"
                    :onlinepage="onlinePagination"
                    :events="searchedevents" 
                    :onlineevents="onlineevents" 
                    :maxprice="maxprice" 
                    :tags="tags" 
                    :categories="categories" />
                <div class="event-search-list">
                    <div 
                        v-if="eventList.data && eventList.data.length" 
                        class="event__results">
                        <div class="event__results--title">
                            <h3 style="display:inline-block">
                                Results for {{ url.city }}
                            </h3>
                            <p style="display:inline-block;font-size:1.4rem;font-weight:500">
                                {{ eventList.total }} in person events.
                            </p>
                        </div>
                        <div>
                            <a 
                                :href="`/events/${event.slug}`" 
                                v-for="(event) in eventList.data" 
                                :key="event.id"
                                class="event__horizontal-card">
                                <div class="event__horizontal-card--element">
                                    <div class="event__horizontal-card--image">
                                        <div class="event__horizontal-card--lock" />                              
                                        <picture>
                                            <source 
                                                type="image/webp" 
                                                :srcset="`/storage/${event.thumbImagePath}`"> 
                                            <img 
                                                style="object-fit:cover" 
                                                loading="lazy" 
                                                :src="`/storage/${event.thumbImagePath.slice(0, -4)}jpg`" 
                                                :alt="`${event.name} Immersive Event`">
                                        </picture>
                                    </div>
                                    <div class="event__horizontal-card--content">
                                        <div>
                                            <div class="event__horizontal-card--category">
                                                {{ event.category ? event.category.name : '' }}
                                            </div>
                                            <div class="event__horizontal-card--heart">
                                                <favorite 
                                                    inputclass="heart visible" 
                                                    :event="event" />
                                            </div>
                                        </div>
                                        <div class="event__horizontal-card--title">
                                            {{ event.name }}
                                        </div>
                                        <div class="event__horizontal-card--tagline">
                                            {{ event.tag_line }}
                                        </div>
                                        <ul class="event__horizontal-card--tags">
                                            <li 
                                                v-for="(itemTag, index) in eventTags(event)" 
                                                :key="itemTag.id" >
                                                {{ itemTag.name }}<span v-if="index != '2'">•</span>
                                            </li>
                                        </ul>
                                        <div class="event__horizontal-card--price">
                                            {{ fixedprice(event) }}
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <pagination
                                :list="eventList"
                                :limit="2"
                                @selectpage="selectPage" />
                        </div>
                    </div>
                    <div class="event__results--title" v-else>
                        <h3>
                            No Results in {{ url.city }}
                        </h3>
                        <p>There are no events listed in {{ url.city }} at this time. <br>Try a different city or check out some online events.</p>
                    </div>
                    <div style="border-bottom:1px solid #d6d6d6;margin: 0 0 3rem 0;" />
                    <div 
                        class="event-search-list" 
                        v-if="!mobile">
                        <div class="title">
                            <h3>Check out <span> {{ $store.state.searchtype }} </span> online events</h3>
                        </div>
                        <template v-if="onlineEventList.data">
                            <vue-event-index :events="onlineEventList.data" />
                        </template>
                        <div>
                            <pagination 
                                :list="onlineEventList"
                                :limit="2"
                                @selectpage="selectOnlinePage" />
                        </div>
                    </div>
                </div>
            </section>
            <event-map-search
                @onhidemap="fullMap"
                :user="user"
                :events="eventList.data" />
        </div>
        <div 
            class="event__filter" 
            v-if="!url.lat && !mobile">
            <EventFilter
                @onlineevents="updateOnlineEvents"
                :onlinepage="onlinePagination"
                :onlineevents="onlineevents" 
                :maxprice="maxprice" 
                :tags="tags" 
                :categories="categories" />
            <div 
                class="event-search-list" 
                v-if="!mobile">
                <div class="title">
                    <h3>Check out <span> {{ $store.state.searchtype }} </span> online events</h3>
                </div>
                <template v-if="onlineEventList.data">
                    <vue-event-index :events="onlineEventList.data" />
                </template>
                <div>
                    <pagination 
                        limit="1"
                        :list="onlineEventList"
                        @selectpage="selectOnlinePage" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import EventFilter  from './components/filter.vue'
    import Pagination  from './components/pagination.vue'
    import searchBasicsMixin from '../../mixins/search-basics-mixin'

    export default {
        components: { EventFilter, Pagination },

        mixins: [ searchBasicsMixin ],

        props:['searchedevents','onlineevents','categories','user', 'tags', 'maxprice'],

        computed: {
            loadedCat() {
                return this.categories.slice(0,7);
            },

            multipleCategory() {
                return this.categories.filter(cat => cat.checked).map(o => o.id)
            },

            eventTags() {
                return event => event.genres.slice(0, 3);
            },

            fixedprice() {
                return event => event.price_range.replace(/\d+(\.\d{1,2})?/g, dec => parseInt(dec));
            },

            noResults() {
                return !this.eventList.data.length
            },
           
            currentOnlinePage () {
                return this.onlineEventList.current_page;
            },
        }, 

        data() {
            return {
                eventList: this.searchedevents,
                onlineEventList: this.onlineevents,
                mobile: window.innerWidth < 768,
                shiftDown: window.innerWidth < 768 ? 45 : 0,
                pagination: 1,
                onlinePagination: 1,
            }
        },

        methods: {

            updateEvents(value) {
                this.eventList = value;
                this.pagination = value.current_page;
            },

            updateOnlineEvents(value) {
                this.onlineEventList = value;
                this.onlinePagination = value.current_page;
            },

            fullMap(value) {
                this.shiftDown = value ? 45 : 80;
            },

            selectPage (page) {
                this.pagination = page
            },

            selectOnlinePage (page) {
                this.onlinePagination = page
            },

            onLoad() {
                this.categories.forEach((cat) => cat.checked = false);
            },

            showEvents() {
                this.conditionalBodyClass(false, 'noscroll')
                this.shiftDown = 45;
                this.$store.commit('showmap', false);
            },

            conditionalBodyClass(bool, className) {
                if (bool) {
                    console.log('no scroll added to page');
                    document.body.classList.add(className)
                } else {
                    console.log('no scroll removed from page');
                    document.body.classList.remove(className)
                }
            },
        },

        mounted() {
            this.onLoad();
        },


    };
</script>