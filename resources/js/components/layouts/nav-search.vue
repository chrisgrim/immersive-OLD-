<template>
    <div class="search">
        <div class="">
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
            @open="asyncGenerateCitiesList"
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


export default {

    components: { Multiselect },

    computed: {

    },


    data() {
        return {
            searchBoxInput: [],
            searchBoxOptions: [],
            isLoading: false,
            search: this.initializeSearchObject(),
            placeholder: this.$route.query.name ? this.$route.query.name : 'Try "New York"',
        }
    },

    methods: {
        asyncGenerateCitiesList (query) {
            axios.get('/api/search/navbar/content', { params: { keywords: query } })
            .then(response => {
                console.log(response.data);
                this.searchBoxOptions = response.data;
            });
        },

        initializeSearchObject() {
            return {
                name: '',
                latitude: '',
                longitude: '',
            }
        },

        searchEvents() {
            if(_.has(this.searchBoxInput, 'latitude')) {
                this.globalSearch();
            };
            if(_.has(this.searchBoxInput, 'twitterHandle')) {
                window.location.href = `/organizer/${this.searchBoxInput.slug}`;
            };
            if(_.has(this.searchBoxInput, 'tag_line')) {
                window.location.href = `/events/${this.searchBoxInput.slug}`;
            }
        },

        globalSearch() {
            window.location.href = `/index/search?name=${this.searchBoxInput.name}&lat=${this.searchBoxInput.latitude}&lng=${this.searchBoxInput.longitude}`;
        },

    },

    mounted() {
        
    }
};
</script>