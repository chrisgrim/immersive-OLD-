<template>
    <div class="favorited-index">
        <div class="favorited-index__title">
            <h3>Your Favorited Events</h3>
        </div>

        <div class="event-index-eventlist grid">
            <div v-for="(event, index) in events" class="eventlist__element">
                <vue-event-index :event="event"></vue-event-index>
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