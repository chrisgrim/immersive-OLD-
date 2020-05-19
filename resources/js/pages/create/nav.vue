<template>
    <nav class="create">
    	<div class="grid create-menu" :class="{ review : onReview }">
            <div class="create-menu__home">
                <div class="nav-logo">
                    <a :href="backUrl">
                        <h3>EI</h3>
                    </a>
                </div>
            </div>
            <div class="create-menu__item">     
                <p v-if="url == `/organizer/create`">Organizer: Let users know about your team!</p>
                <p v-if="url == `/create-event/${this.event.slug}/title`">Title: First Impressions Matter!</p>
                <p v-if="url == `/create-event/${this.event.slug}/location`">Location: Give your event an address</p>
                <p v-if="url == `/create-event/${this.event.slug}/category`">Category: Select the best fit for your event</p>
                <p v-if="url == `/create-event/${this.event.slug}/shows`">Shows: Choose your Dates and Pricing</p>
                <p v-if="url == `/create-event/${this.event.slug}/description`">Description: Let your users know about the event</p>
                <p v-if="url == `/create-event/${this.event.slug}/advisories`">Advisories: Provide warnings</p>
                <p v-if="url == `/create-event/${this.event.slug}/images`">Image: Entice visitors with a great image</p>
                <p :class="{ 'review-nav-text' : onReview }" v-if="url == `/create-event/${this.event.slug}/review`">Review: One last chance to make sure everything looks good</p>
            </div>
        </div>
        <div v-if="showBar" class="create-navbar" :class="{over:hover}">
            <div class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onTitle }">
                
            </div>
            <div  class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onLocation }">
                
            </div>
            <div  class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onCategory }">
               
            </div>
            <div class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onShows }">
                
            </div>
            <div class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onDescription }">
                
            </div>
            <div class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onAdvisories }">
               
            </div>
            <div class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onImage }">
               
            </div>
        </div>
    </nav>
</template>

<script>
    import Multiselect from 'vue-multiselect'

	export default {
		props: ['event', 'user'],

        computed: {
            onReview() {
                return this.url === `/create-event/${this.event.slug}/review` ? true : '';
            },
            showBar() {
                return this.onReview || this.url === `/organizer/create` ? false : true;
            },
            backUrl() {
                return this.user.hasCreatedOrganizers  ? '/create-event/edit' : '/'
            }
        },

        data() {
            return {
                onOrganizer: false,
                onTitle: false,
                onLocation: false,
                onCategory: false,
                onShows: false,
                onDescription: false,
                onAdvisories: false,
                onImage: false,
                url: window.location.pathname,
                hover: '',
            }
        },

        methods: {
            getUrl(data) {
                if (data === `/create-event/${this.event.slug}/review`) {
                    this.onTitle = true;
                    this.onLocation = true;
                    this.onCategory = true;
                    this.onShows = true;
                    this.onDescription = true;
                    this.onAdvisories = true;
                    return this.onImage = true;
                }
                if (data === `/create-event/${this.event.slug}/images`) {
                    this.onTitle = true;
                    this.onLocation = true;
                    this.onCategory = true;
                    this.onShows = true;
                    this.onDescription = true;
                    this.onAdvisories = true;
                    return this.onImage = true;
                }
                if (data === `/create-event/${this.event.slug}/advisories`) {
                    this.onTitle = true;
                    this.onLocation = true;
                    this.onCategory = true;
                    this.onShows = true;
                    this.onDescription = true;
                    return this.onAdvisories = true;
                }
                if (data === `/create-event/${this.event.slug}/description`) {
                    this.onTitle = true;
                    this.onLocation = true;
                    this.onCategory = true;
                    this.onShows = true;
                    return this.onDescription = true;
                }
                if (data === `/create-event/${this.event.slug}/shows`) {
                    this.onTitle = true;
                    this.onLocation = true;
                    this.onCategory = true;
                    return this.onShows = true;
                }
                if (data === `/create-event/${this.event.slug}/category`) {
                    this.onTitle = true;
                    this.onLocation = true;
                    return this.onCategory = true;
                }
                if (data === `/create-event/${this.event.slug}/location`) {
                    this.onTitle = true;
                    return this.onLocation = true;
                }
                if (data === `/create-event/${this.event.slug}/title`) {
                    return this.onTitle = true;
                }
            },

            notAllowed() {
                if(this.event.status) {
                    return (['d','n','p', 'e'].includes(this.event.status)) ? '' : window.location.href = '/create-event/edit';
                }
            },

        },

        mounted() {
            let data = window.location.pathname;
            this.getUrl(data);
        },

        created() {
            this.notAllowed();
        }
    }

</script>