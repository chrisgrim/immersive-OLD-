<template>
    <div class="events">
         <div class="create-title">
            <h2>Event Approval</h2>
            <p>These are the events that need approval</p>
        </div>
        
        <section class="">
            <div class="event-index-eventlist grid">
                <div v-for="(event, index) in events" class="eventlist__element">
                    <a :href="`/finish/events/${event.slug}`" class="url">
                        <div class="card-image" :style="`width:${imageWidth}px`">
                            <picture>
                                <source type="image/webp" :srcset="`/storage/${event.thumbImagePath}`"> 
                                <img :src="`/storage/${event.thumbImagePath.slice(0, -4)}jpg`" :alt="`${event.name} Immersive Event`">
                            </picture>
                        </div>
                        <div class="card-title">
                            <h3>{{ event.name }}</h3>
                        </div>
                        <div class="card-price">
                            <h4>{{ event.price_range }}</h4>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import _ from 'lodash';
    import Multiselect from 'vue-multiselect';
    import format from 'date-fns/format';


    export default {

        components: {
            Multiselect
        },

        props: {
            events: {
                type:Array,
            },
            user: {
                type:String
            }
        }, 

        data() {
            return {
                value: '',
                list: [],
                price: '',
                eventName: '',
                location: [],
                imageWidth: '',
            }
        },

        methods: {
            loc() {
                navigator.geolocation.getCurrentPosition(pos => {
                    this.location = pos.coords;
                    console.log(pos.coords);
                }, err => {
                    console.log(err)
                });
            },

             handleResize() {
                if (window.innerWidth < 768) {
                    this.imageWidth = window.innerWidth/1.4;
                }
            }
        },

        mounted() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        }
    };
</script>