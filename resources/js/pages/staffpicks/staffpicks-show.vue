<template>
    <div class="event-index-container">
        <div class="event-index">
            <header class="padded">
                <div class="header-title">
                    <h3>StaffPicks for the week of {{week}}</h3>
                </div>
            </header>
            <section class="padded">
                <div v-for="(pick, index) in staffpicks">
                    <div class="card" >
                        <a :href="`/events/${pick.event.slug}`" class="url">
                            <div class="card-image">
                                <picture>
                                    <source type="image/webp" :srcset="`/storage/${pick.event.thumbImagePath}`"> 
                                    <img :src="`/storage/${pick.event.thumbImagePath.slice(0, -4)}jpg`" :alt="`${pick.event.name} Immersive Event`">
                                </picture>
                            </div>
                            <div class="card-content">
                                <div class="card-title" >
                                    <h3>{{ pick.event.name }}</h3>
                                </div>
                                <div class="card-organizer">
                                    <h3>{{ pick.event.organizer.name }}</h3>
                                </div>
                                <div class="card-price">
                                    <h4>{{ pick.event.price_range }}</h4>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>

    export default {

        props:['staffpicks', 'week'],

        computed: {
        },

        data() {
            return {
                value: '',
                list: [],
                price: '',
                eventName: '',

            }
        },

        methods: {

        },

        mounted() {

        }

    };
</script>