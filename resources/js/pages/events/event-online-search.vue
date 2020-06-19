<template>
    <div class="event-online-search" style="min-height: calc(100vh - 7rem);position:relative;">
        <div class="event-online-search__container">
            <header class="online-search__header" style="background: url('/storage/website-files/online-search.jpg');">
                <div class="online-search__header-content">
                     <div class="online-search__title">
                        <h2>{{title}}</h2>
                    </div>
                    <div class="online-search__tagline">
                        <p>Discover immersive experiences.</p>
                    </div>
                </div>
            </header>
            <section class="event-online-search-filter">
                <SearchFilter 
                :categories="categories" 
                @eventlist="updateEventList">
                </SearchFilter>
            </section>

            <section class="padded event-list"> 
                <div class="event-index-eventlist grid">
                    <div v-for="(event, index) in eventList" class="eventlist__element">
                        <vue-event-index :event="event"></vue-event-index>
                    </div>
                </div>
                <load-more @intersect="intersected"></load-more>
            </section>
        </div>

        
    </div>
</template>


<script>
    import SearchFilter  from './components/filter-remote.vue'
    import SearchItem  from './components/search-item.vue'
    import LoadMore  from '../../components/LoadMore.js'

    export default {

        props: ['searchedevents', 'categories', 'user'],

        components: { SearchFilter, SearchItem, LoadMore },

        computed: {
            title() {
                if (this.category) { return this.category};
                if (this.tag) { return this.tag};
                if (this.remote) { return this.remote};
                return 'Immersive Online';
            },
        },
        
        data() {
            return {
                eventList: this.searchedevents ? this.searchedevents : [],
                category: new URL(window.location.href).searchParams.get("category"),
                tag: new URL(window.location.href).searchParams.get("tag"),
                remote: new URL(window.location.href).searchParams.get("remote"),
                id: new URL(window.location.href).searchParams.get("id"),
                page: 2,
                hasFilter: false,

            }
        },

        methods: {
            updateEventList(value) {
                console.log(value);
                if(value) {
                    this.hasFilter = true;
                };
                this.eventList = value;
            },

            intersected() {
                if(this.hasFilter) {return false};
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


}
</script>