<template>
    <div class="show">
        <div>
            <div class="organizer">
                <div class="left" style="height:100%">
                    <div class="image">
                        <div v-if="organizer.thumbImagePath">
                            <picture>
                                <source type="image/webp" :srcset="`/storage/${organizer.thumbImagePath}`"> 
                                <img :src="`/storage/${organizer.thumbImagePath.slice(0, -4)}jpg`" :alt="`${organizer.name} organizer`">
                            </picture>
                        </div>
                        <div v-else></div>
                    </div>
                </div>
                <div class="right">
                    <div class="name">
                        <h2>{{organizer.name}}</h2>
                    </div>
                    <div class="info">
                        <a rel="noreferrer" target="_blank" :href="`https://www.twitter.com/${organizer.instagramHandle}`" v-if="organizer.twitterHandle">
                            <div class="box">
                                <img src="/storage/website-files/twitter.png" alt="">
                                <span class="des">{{organizer.twitterHandle}}</span>
                            </div>
                        </a>
                        <a rel="noreferrer" target="_blank" :href="`https://www.facebook.com/${organizer.instagramHandle}`" v-if="organizer.facebookHandle">
                            <div class="box" >
                                <img src="/storage/website-files/facebook.png" alt="">
                                <span class="des">{{organizer.facebookHandle}}</span>
                            </div>
                        </a>
                        <a rel="noreferrer" target="_blank" :href="`https://www.instagram.com/${organizer.instagramHandle}`" v-if="organizer.instagramHandle">
                            <div class="box">
                                <img src="/storage/website-files/insta.png" alt="">
                                <span class="des">{{organizer.instagramHandle}}</span>
                            </div>
                        </a>
                        <a rel="noreferrer" target="_blank" :href="`${organizer.website}`" v-if="organizer.website">
                            <div class="box">
                                <img src="/storage/website-files/orgwebsite.png" alt="">
                                <span class="des">{{organizer.name}}</span>
                            </div>
                        </a>
                    </div>
                    <div style="white-space: pre-line;" class="descrip">
                        <p>{{organizer.description}}</p>
                    </div>
                    <ContactOrganizer :user="user" :loadorganizer="organizer"></ContactOrganizer>
                    <div class="events">
                        <h2>{{organizer.name}} Events</h2>
                        <div>
                            <div id="grid">
                                <div v-for="event in loadorganizer.events">
                                    <organizer-show-events :event="event"></organizer-show-events>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import _ from 'lodash';
    import ImageUpload from '../layouts/image-upload.vue'
    import ContactOrganizer from '../organizers/contact-organizer.vue'
    import Multiselect from 'vue-multiselect';
    import { required } from 'vuelidate/lib/validators'




    export default {

        props: ['loadorganizer', 'user'],

        components: {
            Multiselect, ImageUpload, ContactOrganizer
        },

        computed: {
        },

        data() {
            return {
                organizer:this.loadorganizer,
                location: {},
                height:0,
                finalImage: '',
                nameActive: false,
                content: '',
                options: {
                },
            }
        },

        methods: {


        },




        validations: {
        },


    };
</script>