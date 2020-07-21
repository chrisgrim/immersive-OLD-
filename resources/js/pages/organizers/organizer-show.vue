<template>
    <div class="organizer-show grid">
        <div class="organizer-show-image" style="height:100%">
            <div class="organizer-show-image__media">
                <div v-if="organizer.thumbImagePath">
                    <picture>
                        <source type="image/webp" :srcset="`/storage/${organizer.thumbImagePath}`"> 
                        <img :src="`/storage/${organizer.thumbImagePath.slice(0, -4)}jpg`" :alt="`${organizer.name} organizer`">
                    </picture>
                </div>
                <div v-else></div>
            </div>
        </div>
        <div class="organizer-show-info">
            <div class="organizer-show-info__name">
                <h2>{{organizer.name}}</h2>
            </div>
            <div class="organizer-show-info__contact grid">
                <a rel="noreferrer noopener" target="_blank" :href="`https://www.twitter.com/${organizer.twitterHandle}`" v-if="organizer.twitterHandle">
                    <div class="">
                        <img class="organizer-info-contact__image" src="/storage/website-files/twitter.png" alt="">
                        <span class="organizer-info-contact__type">{{organizer.twitterHandle}}</span>
                    </div>
                </a>
                <a rel="noreferrer noopener" target="_blank" :href="`https://www.facebook.com/${organizer.facebookHandle}`" v-if="organizer.facebookHandle">
                    <div class="" >
                        <img class="organizer-info-contact__image" src="/storage/website-files/facebook.png" alt="">
                        <span class="organizer-info-contact__type">{{organizer.facebookHandle}}</span>
                    </div>
                </a>
                <a rel="noreferrer noopener" target="_blank" :href="`https://www.instagram.com/${organizer.instagramHandle}`" v-if="organizer.instagramHandle">
                    <div class="">
                        <img class="organizer-info-contact__image" src="/storage/website-files/insta.png" alt="">
                        <span class="organizer-info-contact__type">{{organizer.instagramHandle}}</span>
                    </div>
                </a>
                <a rel="noreferrer noopener" target="_blank" :href="`${organizer.website}`" v-if="organizer.website">
                    <div class="">
                        <img class="organizer-info-contact__image" src="/storage/website-files/orgwebsite.png" alt="">
                        <span class="organizer-info-contact__type">{{organizer.name}}</span>
                    </div>
                </a>
            </div>
            <div style="white-space: pre-line;" class="organizer-show-info__description">
                <p>{{organizer.description}}</p>
            </div>
            <ContactOrganizer :user="user" :loadorganizer="organizer"></ContactOrganizer>
            <div class="organizer-show-events" v-if="loadorganizer.events && loadorganizer.events.length">
                <h2>Events by {{organizer.name}}</h2>
                <div class="grid organizer-show__event-list">
                    <div v-for="event in loadorganizer.events">
                        <organizer-show-events :event="event"></organizer-show-events>
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