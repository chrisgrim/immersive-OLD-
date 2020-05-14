<template>
    <div class="nav-search__content">
        <div class="icon">
            <svg aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
        </div>
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
            searchBoxOptions: [
                {name: 'Loading List...'}
            ],
            isLoading: false,
            search: this.initializeSearchObject(),
            placeholder: new URL(window.location.href).searchParams.get("name") ? new URL(window.location.href).searchParams.get("name") : 'Search by city or event',
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