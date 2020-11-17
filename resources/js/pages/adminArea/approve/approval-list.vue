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
                    :events="events" />
            </div>
        </section>
    </div>
</template>

<script>

    export default {

        props:['events', 'user'],

        data() {
            return {
            }
        },

        methods: {

        },

    };
</script>