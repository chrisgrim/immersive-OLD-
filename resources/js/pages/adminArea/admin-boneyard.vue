<template>
    <div class="admin-events">
        <div class="">
            <div class="admin-events__title">
                <h1>Boneyard</h1>
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
        </div>
         <div class="pagination-button">
            <button class="default" @click="loadMore">Load more</button>
        </div>
    </div>
</template>

<script>
    
    import { required } from 'vuelidate/lib/validators';


    export default {

        data() {
            return {
                events: '',
                eventList: '',
                pagination: {paginate:10},

            }
        },

        computed: {
            
        },

        methods: {

             loadEvents() {
                axios.post('/admin/boneyard/fetch', this.pagination)
                .then(res => {
                    console.log(res.data);
                    this.events = res.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            asyncGenerateEventList(eventList) {
                
                axios.get('/api/admin/search/boneyard', { params: { keywords: eventList } })
                .then(res => {
                    console.log(res.data);
                    this.events = res.data;
                });
            },

            loadMore() {
                this.pagination.paginate += 10;
                this.loadEvents();
            },        
        },

        created() {
            this.loadEvents()
        },

    }

</script>