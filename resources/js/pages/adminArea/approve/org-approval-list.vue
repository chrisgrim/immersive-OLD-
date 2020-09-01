<template>
    <div class="events">
         <div class="create-title">
            <h2>Organizer Approval</h2>
            <p>These are the organizers that need approval</p>
        </div>
        
        <section>
            <div class="padded-width">
                <div class="event-index__eventlist" ref="list">
                    <div class="event-index__eventlist--middle vertical">
                        <div v-for="(organizer, index) in organizers" class="eventlist__element" :style="`width:${width}`">
                            <div class="card" >
                                <div itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem">
                                    <meta :content="organizer.name" itemprop="name">
                                    <meta :content="`https://www.everythingimmersive.com/events/${organizer.slug}`" itemprop="url">
                                    <a :href="`/finish/organizers/${organizer.slug}`" class="card-url"></a>
                                    <div class="card-image__top">
                                        <div class="card-image__middle" style="padding-top: 65%;">
                                            <div class="card-image">
                                                <picture>
                                                    <source type="image/webp" :srcset="`/storage/${organizer.thumbImagePath}`"> 
                                                    <img style="object-fit:cover" loading="lazy" class="card-image__img" :src="`/storage/${organizer.thumbImagePath.slice(0, -4)}jpg`" :alt="`${organizer.name} Immersive Event`">
                                                </picture>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-content">
                                        <div class="card-title" >
                                            <h3 :class="{ black : color=='black' }">{{ organizer.name }}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                width: '',
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

            divWidth() {
                console.log(this.$refs.list.clientWidth);
                if (this.$refs.list.clientWidth > 1000) {
                    return this.width = '25%'
                }
                if (this.$refs.list.clientWidth > 600) {
                    return this.width = '33.3333%'
                }
                return this.width = '41%';
            }
        },

        mounted() {
            this.divWidth();
        }
    };
</script>