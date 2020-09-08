<template>
    <div class="admin-events">
        <div class="">
            <div class="admin-events__title">
                <h1>Purgatory</h1>
            </div>
        </div>
        <div class="field">
            <input 
            v-model="eventList"
            placeholder="Filter by event name" 
            class="general"
            @keyup="asyncGenerateEventList(eventList)"
            type="text">
        </div>
        <div class="list" v-for="(event, index) in events">
            <div>
                <img style="height:40px;width:40px;object-fit:cover;" :src="`/storage/${event.thumbImagePath}`" alt="">
            </div>
                <div>
                    {{event.name}}
                </div>
            <div>
                <a target="_blank" :href="`/create-event/${event.slug}/title`">
                    <button>Edit</button>
                </a>
            </div>
        </div>
        <div class="pagination-button">
            <button v-if="moreToLoad" @click="loadMore">Load More</button>
        </div>
    </div>
</template>

<script>
    
    import { required } from 'vuelidate/lib/validators';

    export default {

        props: ['loadedevents'],

        data() {
            return {
                events: this.loadedevents ? this.loadedevents : [],
                eventList: '',
                page: 2,
                moreToLoad: true,

            }
        },

        computed: {
          //
        },

        methods: {

            asyncGenerateEventList(eventList) {
                axios.get('/api/admin/search/purgatory', { params: { keywords: eventList } })
                .then(res => {
                    console.log(res.data);
                    this.events = res.data;
                });
            },

            loadMore() {
                axios.post(`/admin/purgatory/fetch?page=${this.page}`)
                .then(res => {  
                    console.log(res.data);
                    this.events = this.events.concat(res.data.data);
                    this.page++;
                    this.page == res.data.total + 1 ? this.moreToLoad = false : '';
                })
                .catch(err => {
                    this.onErrors(err);
                });
            },
 
        },

    }

</script>