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
        <div 
            class="list" 
            :key="event.id"
            v-for="(event) in events">
            <div>
                {{ event.name }}
            </div>
            <a :href="`/events/${event.slug}`">
                <button class="default">
                    view
                </button>
            </a>
            <div>
                <button @click="openModal(event)">
                    Owner
                </button>
            </div>
            <a :href="`/create-event/${event.slug}/title`">
                <button class="default">
                    edit
                </button>
            </a>
        </div>
        <div class="pagination-button">
            <button 
                class="default" 
                @click="loadMore">
                Load more
            </button>
        </div>
        <modal 
            v-if="modalVisible" 
            @close="modalVisible = false">
            <div slot="header">
                <div class="circle sub">
                    <p>!</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Change {{modalData.name}} Event Organizer</h3>
                <p>Current organizer is {{modalData.organizer.name}}</p>
                <multiselect 
                    v-model="organizer" 
                    label="name" 
                    track-by="id" 
                    placeholder="Type to search" 
                    open-direction="bottom" 
                    :options="organizers" 
                    :searchable="true" 
                    :internal-search="false"
                    @open="asyncGenerateOrganizerList"
                    @search-change="asyncGenerateOrganizerList" />
            </div>
            <div slot="footer">
                <button 
                    class="btn sub" 
                    @click="changeOwner">
                    Change Owner
                </button>
            </div>
        </modal>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'

    export default {

        components: { Multiselect },

        data() {
            return {
                events: '',
                eventList: '',
                organizer: '',
                organizers: [],
                pagination: {paginate:10},
                modalData: null,
                modalVisible: false,
            }
        },

        methods: {
            delete(event) {
                axios.delete(`/genres/${genre.id}`)
                .then(res => { 
                    this.isEditModalVisible = false;
                    this.loadGenres();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            loadEvents() {
                axios.post('/admin/events/fetch', this.pagination)
                .then(res => {
                    this.events = res.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            asyncGenerateEventList(eventList) {
                axios.get('/api/admin/search/events', { params: { keywords: eventList } })
                .then(res => {
                    this.events = res.data;
                });
            },

            loadMore() {
                this.pagination.paginate += 10;
                this.loadEvents();
            }, 

            asyncGenerateOrganizerList(value) {
                axios.get('/api/admin/search/organizer', { params: { keywords: value } })
                .then(res => {
                    this.organizers = res.data;
                });
            },

            changeOwner() {
                axios.post(`/admin/event/${this.modalData.slug}/change-organizer`, this.organizer)
                .then(res => {
                    this.clearModalData()
                });
            },

            openModal(data) {
                this.modalData = data
                this.modalVisible = true
            },

            clearModalData() {
                this.loadEvents();
                this.modalData = null
                this.modalVisible = false
            }

        },

        created() {
            this.loadEvents()
        },

    }

</script>