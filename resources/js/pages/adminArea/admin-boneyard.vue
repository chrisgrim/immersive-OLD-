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
                @keyup="search(eventList)"
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
                <button @click="resurrect(event)">
                    Resurrect
                </button>
            </div>
        </div>
        <div class="pagination-button">
            <template v-if="moreToLoad">
                <button @click="onLoad">
                    Load More
                </button>
            </template>
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

            search(eventList) {
                axios.get('/api/admin/event/deleted/search', { params: { keywords: eventList } })
                .then( res => { this.events = res.data });
            },

            onLoad() {
                axios.post(`/admin/event/boneyard/fetch?page=${this.page}`)
                .then( res => {  
                    this.events = this.events.concat(res.data.data);
                    this.page++;
                    this.page == res.data.total + 1 ? this.moreToLoad = false : '';
                })
            },

            resurrect(event) {
                axios.post(`/admin/event/boneyard/${event.id}/resurrect`)
                .then( res => { this.events = res.data.data } );
            }   
        },

        created() {
            this.onLoad()
        },

    }

</script>