<template>
    <div class="favorited-index">
        <div class="favorited-index__title">
            <h3>Your Favorited Events</h3>
        </div>

        <div class="">
            <vue-event-index :events="events.data" />
            <pagination 
                :limit="1"
                :list="events"
                @selectpage="paginate" />
        </div>
    </div>
</template>

<script>
    import Pagination  from '../../components/pagination.vue'

    export default {

        props: ['loaduser', 'loadevents'],

        components: { Pagination },

        data() {
            return {
                events: this.loadevents,
            }
        },

        methods: {
            paginate(page) {
                console.log(page);
                axios.get(`/account-settings/favorited/fetch?page=${page}`)
                .then( res => { this.events = res.data })
                .catch( error => {error})
            }
        },

    };
</script>