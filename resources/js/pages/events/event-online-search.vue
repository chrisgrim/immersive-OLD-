<template>
    <div class="event-online-search" style="min-height: calc(100vh - 7rem);position:relative;">
        <div class="event-online-search__container">
            <header class="online-search__header" style="background: url('/storage/website-files/online-search.jpg');">
                <div class="online-search__header-content">
                     <div class="online-search__title">
                        <h2>{{title}}</h2>
                    </div>
                    <div class="online-search__tagline">
                        <p>Enjoy immersive experiences from the comfort of your home.</p>
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
                eventList: [],
                category: new URL(window.location.href).searchParams.get("category"),
                tag: new URL(window.location.href).searchParams.get("tag"),
                remote: new URL(window.location.href).searchParams.get("remote"),
                id: new URL(window.location.href).searchParams.get("id"),

            }
        },

        methods: {
            updateEventList(value) {
                this.eventList = value;
            }

        },


}
</script>