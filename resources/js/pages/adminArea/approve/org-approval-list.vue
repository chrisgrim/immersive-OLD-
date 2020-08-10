<template>
    <div class="events">
         <div class="create-title">
            <h2>Organizer Approval</h2>
            <p>These are the organizers that need approval</p>
        </div>
        
        <section class="">
            <div class="event-index-eventlist grid">
                <div v-for="(organizer, index) in organizers" class="eventlist__element">
                    <a :href="`/finish/organizers/${organizer.slug}`" class="url">
                        <div class="card-image" :style="`width:${imageWidth}px`">  
                        <img v-if="organizer.thumbImagePath" :src="`/storage/${organizer.thumbImagePath}`" :alt="`${organizer.name} Immersive Event`">
                        <div v-else class="event-index-eventlist__no-image">
                            
                        </div>
                        </div>
                        <div class="card-title">
                            <h3>{{ organizer.name }}</h3>
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

        props: ['organizers', 'user'],

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