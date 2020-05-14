<template>
    <div class="container">
        <div class="event-index">
            
            <h2>Your Favorited Events</h2>
            <div class="event-index-eventlist grid">
                <div v-for="(event, index) in events" class="eventlist__element">
                    <event-listing-item :event="event"></event-listing-item>
                </div>
            </div>

        </div>
    </div>
</template>

<script>

    export default {


        props: ['loaduser', 'events'],

        computed: {

        },

        data() {
            return {
                
            }
        },

        methods: {
            

        },

    };
</script>