<template>
    <div>
        <section class="organizer-show">
            <template v-if="hasLogo">
                <div class="organizer-show__image">
                    <div class="organizer-show__image--media">
                        <div v-if="hasLogo">
                            <picture>
                                <source 
                                    type="image/webp" 
                                    :srcset="`/storage/${organizer.thumbImagePath}`"> 
                                <img 
                                    :src="`/storage/${organizer.thumbImagePath.slice(0, -4)}jpg`" 
                                    :alt="`${organizer.name} organizer`">
                            </picture>
                        </div>
                        <div v-else />
                    </div>
                </div>
            </template>
            <div 
                class="organizer-show__info"
                :class="{'has-logo' : hasLogo}">
                <div class="organizer-show__info--name">
                    <div :class="{'has-logo' : hasLogo}">
                        <h2 :style="titleFontSize">
                            {{ organizer.name }}
                        </h2>
                    </div>
                </div>
                <div class="organizer-show__info--contact">
                    <a 
                        rel="noreferrer noopener" 
                        target="_blank" 
                        :href="`https://www.twitter.com/${organizer.twitterHandle}`" 
                        v-if="organizer.twitterHandle">
                        <div class="">
                            <img 
                                class="organizer-info-contact__image" 
                                src="/storage/website-files/twitter.png" 
                                alt="">
                            <span class="organizer-info-contact__type">{{ organizer.twitterHandle }}</span>
                        </div>
                    </a>
                    <a 
                        rel="noreferrer noopener" 
                        target="_blank" 
                        :href="`https://www.facebook.com/${organizer.facebookHandle}`" 
                        v-if="organizer.facebookHandle">
                        <div class="">
                            <img 
                                class="organizer-info-contact__image" 
                                src="/storage/website-files/facebook.png" 
                                alt="">
                            <span class="organizer-info-contact__type">{{ organizer.facebookHandle }}</span>
                        </div>
                    </a>
                    <a 
                        rel="noreferrer noopener" 
                        target="_blank" 
                        :href="`https://www.instagram.com/${organizer.instagramHandle}`" 
                        v-if="organizer.instagramHandle">
                        <div class="">
                            <img 
                                class="organizer-info-contact__image" 
                                src="/storage/website-files/insta.png" 
                                alt="">
                            <span class="organizer-info-contact__type">{{ organizer.instagramHandle }}</span>
                        </div>
                    </a>
                    <a 
                        rel="noreferrer noopener" 
                        target="_blank" 
                        :href="`${organizer.website}`" 
                        v-if="organizer.website">
                        <div class="">
                            <img 
                                class="organizer-info-contact__image" 
                                src="/storage/website-files/orgwebsite.png" 
                                alt="">
                            <span class="organizer-info-contact__type">{{ organizer.name }}</span>
                        </div>
                    </a>
                </div>
                <div 
                    style="white-space: pre-line;" 
                    class="organizer-show-info__description">
                    <p>{{ organizer.description }}</p>
                </div>
                <template v-if="loadorganizer.events && loadorganizer.events.length">
                    <div class="organizer-show__events">
                        <h2>Events by {{ organizer.name }}</h2>
                        <vue-event-index :events="loadorganizer.events" />
                    </div>
                </template>
            </div>
        </section>

        <!-- <ContactOrganizer :user="user" :loadorganizer="organizer"></ContactOrganizer> -->

        <div class="organizer-show__background" />
    </div>
</template>
<script>
    import ContactOrganizer from '../organizers/contact-organizer.vue'

    export default {

        props: ['loadorganizer', 'user'],

        components: { ContactOrganizer },

        computed: {
            hasLogo() {
                return this.loadorganizer.largeImagePath
            }
        },

        data() {
            return {
                organizer:this.loadorganizer,
                titleFontSize: '',
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
            getTitleFontSize() {
                if (this.loadorganizer.name.length > 70) {
                   return this.titleFontSize = `font-size:3rem;line-height:3rem`
                }
                if (this.loadorganizer.name.length > 40) {
                    return this.titleFontSize = `font-size:5rem;line-height:5rem`
                }
                return this.titleFontSize = `font-size:7rem;line-height:9rem`
            },
        },

        mounted() {
            this.getTitleFontSize();
        },
    };
</script>