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
                @keyup="onSearch(eventList)"
                type="text">
        </div>
        <div 
            class="list" 
            :key="event.id"
            v-for="(event) in events">
            <div>
                <img 
                    style="height:40px;width:40px;object-fit:cover;" 
                    :src="`/storage/${event.thumbImagePath}`" 
                    alt="">
            </div>
            <div>
                {{ event.name }}
            </div>
            <div>
                <a 
                    target="_blank" 
                    :href="`/create/${event.slug}/title`">
                    <button v-if="event.status == 'r'"> Event In Review </button>
                    <button v-else> Edit </button>
                </a>
            </div>
        </div>
        <div class="pagination-button">
            <button 
                v-if="moreToLoad" 
                @click="onLoad">
                Load More
            </button>
        </div>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                events: this.loadedevents ? this.loadedevents : [],
                eventList: '',
                page: 2,
                moreToLoad: true,
            }
        },

        methods: {
            onSearch(eventList) {
                axios.get('/api/admin/purgatory/search', { params: { keywords: eventList } })
                .then( res => { console.log(res.data); this.events = res.data.data });
            },

            onLoad() {
                axios.post(`/admin/events/purgatory/fetch?page=${this.page}`)
                .then( res => {  
                    this.events = this.events.concat(res.data.data);
                    this.page++;
                    this.page == res.data.total + 1 ? this.moreToLoad = false : '';
                })
                .catch( err => { this.onErrors(err) });
            },
        },

        created() {
            this.onLoad()
        },

    }

</script>