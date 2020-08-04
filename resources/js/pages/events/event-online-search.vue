<template>
    <div class="event-online-search" style="min-height: calc(100vh - 7rem);position:relative;">
        <div class="event-online-search__container">
            <header class="online-search__header">
                <div class="online-search__header-content">
                     <div class="online-search__title">
                        <h2>{{this.$store.state.searchtype}}</h2>
                    </div>
                    <div class="online-search__tagline">
                        <p>Discover immersive experiences.</p>
                    </div>
                </div>
            </header>
            <section class="event-online-search-filter">
                <SearchFilter :events="searchedevents" :maxprice="maxprice" :tags="tags" :categories="categories"></SearchFilter>
            </section>
        </div>
    </div>
</template>


<script>
    import SearchFilter  from './components/filter-remote.vue'
    import SearchItem  from './components/search-item.vue'
    

    export default {

        props: ['searchedevents', 'categories', 'user', 'maxprice', 'tags'],

        components: { SearchFilter, SearchItem },

        computed: {

        },
        
        data() {
            return {
            }
        },

        methods: {

        

        },


}
</script>