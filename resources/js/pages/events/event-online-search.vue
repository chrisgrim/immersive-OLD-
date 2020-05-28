<template>
    <div class="event-online-search" style="min-height: calc(100vh - 7rem);position:relative;">
        <div class="event-online-search__container">
            <header class="online-search__header" style="background: url('/storage/website-files/online-search.jpg');">
                <div class="online-search__title">
                    <h2>{{title}}</h2>
                </div>
                <div class="online-search__tagline">
                    <p>Enjoy immersive experiences from the comfort of your home.</p>
                </div>
            </header>
            <section class="event-online-search-filter">
                <SearchFilter 
                :categories="categories" 
                @eventlist="updateEventList">
                </SearchFilter>
                         
                <div class="event-search-list grid"> 
                    <div v-for="(event, index) in eventList" class="eventlist__element">
                        <search-item :user="user" :event="event"></search-item>
                    </div>
                    <button v-if="eventList.length >14" @click="loadMoreEvents">Load More</button>
                </div>
            </section>
        </div>

        
    </div>
</template>


<script>
    import SearchFilter  from './components/filter-remote.vue'
    import SearchItem  from './components/search-item.vue'

    export default {

        props: ['searchedevents', 'categories', 'user'],

        components: { SearchFilter, SearchItem},

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
                eventList: this.searchedevents,
                category: new URL(window.location.href).searchParams.get("category"),
                tag: new URL(window.location.href).searchParams.get("tag"),
                remote: new URL(window.location.href).searchParams.get("remote"),

            }
        },

        methods: {
            updateEventList(value) {
                this.eventList = value;
            }

        },


}
</script>