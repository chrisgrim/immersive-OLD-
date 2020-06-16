<template>
    <div class="admin-events">
        <div class="">
            <div class="admin-events__title">
                <h1>Events</h1>
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
                {{event.name}}
            </div>
            <a :href="`/create-event/${event.slug}/title`"><button class="default">edit</button></a>
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



            delete(event) {
                axios.delete(`/genres/${genre.id}`)
                .then(response => { 
                    console.log(response.data);
                    this.isEditModalVisible = false;
                    this.loadGenres();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

             loadEvents() {
                axios.post('/admin/events/fetch', this.pagination)
                .then(res => {
                    console.log(res.data);
                    this.events = res.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            asyncGenerateEventList(eventList) {
                
                axios.get('/api/admin/search/events', { params: { keywords: eventList } })
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