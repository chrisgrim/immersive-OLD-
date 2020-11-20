<template>
    <div class="events">
        <div class="create-title">
            <h2>Event Approval</h2>
            <p>These are the events that need approval</p>
        </div>
        
        <section>
            <div class="padded-width">
                <vue-event-index 
                    favorite="hidden" 
                    loadurl="admin" 
                    :events="eventsLoaded" />
            </div>
        </section>
    </div>
</template>

<script>

    export default {

        props:['user'],

        data() {
            return {
                eventsLoaded: null,
            }
        },

        methods: {
            onLoad() {
                axios.get(`/admin/events/finalize/fetch?timestamp=${new Date().getTime()}`)
                .then( res => { 
                    this.eventsLoaded = res.data;
                })
            },
        },

        created() {
            this.onLoad()
        },

    };
</script>