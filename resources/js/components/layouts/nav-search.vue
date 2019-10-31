<template>
    <div class="nav-search">
        <div class="nav-search__input">
            <multiselect 
            v-model="searchBoxInput" 
            :options="searchBoxOptions" 
            open-direction="bottom"
            :placeholder="placeholder"
            label="name"
            :loading="isLoading"
            :show-labels="false"
            :internal-search="false"
            :options-limit="30" 
            :limit="5"  
            track-by="name" 
            @search-change="asyncGenerateCitiesList"
            @input="searchEvents"
            :show-no-results="false"
            :allow-empty="false">
                <template 
                slot="selection" 
                slot-scope="{ values, search, isOpen }">
                    <span 
                    class="multiselect__single" 
                    v-if="values.length &amp;&amp; !isOpen">
                        {{ values.length }} options selected
                    </span>
                </template>
            </multiselect>      
        </div>  
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import _ from 'lodash'
import { mapGetters } from 'vuex'


export default {

    components: { Multiselect },

    name: "userSearchRequest",
    name: "searchEvents", 

    computed: {
        onSearchPage() {
          return this.$router.currentRoute.path === '/index/search' ? true : false;
        },
        ...mapGetters([
            'userSearchRequest'
        ]),
        placeholder() {
            return this.$store.state.userSearchRequest.name;
        }

    },


    data() {
        return {
            searchBoxInput: [],
            searchBoxOptions: [],
            isLoading: false,
        }
    },

    methods: {
        asyncGenerateCitiesList (query) {
            axios.get('/api/search/navbar/content', { params: { keywords: query } })
            .then(response => {
                this.searchBoxOptions = response.data;
            });
        },

        searchEvents() {
            if(_.has(this.searchBoxInput, 'latitude')) {
                this.onSearchPage === true ? this.localSearch() : this.globalSearch();
            } else {
                this.eventSearch()
            };
        },

        globalSearch() {
            axios.post('/search/storedata', this.searchBoxInput)
            .then(response => {
                console.log(response.data);
            });

            window.location.href = '/index/search';

        },

        localSearch() {
            this.$store.dispatch('searchEvents', this.searchBoxInput);
            this.$store.dispatch('userSearchRequest', this.searchBoxInput);
        },

        eventSearch() {
             window.location.href = `/events/${this.searchBoxInput.slug}`;
        }
    },
};
</script>