<template>
    <div class="genres">
        <div class="">
            <div class="title">
                <h1>Picks of the Week</h1>
            </div>
        </div>


        <div class="list" v-for="(event, index) in events">
            <input 
            type="text" 
            v-model="event.name" 
            placeholder="Name"
            />
            <input 
            type="checkbox" 
            id="checkbox" 
            v-model="event.pick"
            @input="savePick(event)"
            />
        </div>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                events: '',
            }
        },

        computed: {
            
        },

        methods: {

            asyncGenerateUserList (query) {
                axios.get('/api/search/event/list', { params: { keywords: query } })
                .then(response => {
                    console.log(response.data);
                    this.events = response.data;
                });
            },

            loadEvents() {
                axios.get('/admin/staffpicks/fetch')
                .then(response => {
                    console.log('test');
                    console.log(response.data);
                    this.events = response.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            savePick(event) {
                let data = {
                    pick: event.pick
                };
                axios.patch(`/staffpicks/${event.id}`, data)
                .then(response => { 
                    console.log(response.data)
                    // this.loadUsers()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            }
        },

        created() {
            this.loadEvents()
        },

    }

</script>