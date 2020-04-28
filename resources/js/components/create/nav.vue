<template>
    <nav class="create">
    	<div class="grid create-menu" :class="{ review : onReview }">
            <div class="create-menu__home">
                <a href="/create-event/edit">
                    <button class="home" :class="{ review : onReview }">Home</button>
                </a>
            </div>
            <div class="create-menu__item">     
                <p v-if="url == `/organizer/create`">Organizer: Let users know about your team!</p>
                <p v-if="url == `/create-event/${this.event.slug}/title`">Title: Make it a good one!</p>
                <p v-if="url == `/create-event/${this.event.slug}/location`">Location: Give your event an address</p>
                <p v-if="url == `/create-event/${this.event.slug}/category`">Category: Select the best fit for your event</p>
                <p v-if="url == `/create-event/${this.event.slug}/shows`">Shows: Choose your Dates and Pricing</p>
                <p v-if="url == `/create-event/${this.event.slug}/description`">Description: Let your users know about the event</p>
                <p v-if="url == `/create-event/${this.event.slug}/advisories`">Advisories: Provide warnings</p>
                <p v-if="url == `/create-event/${this.event.slug}/images`">Image: Entice our visitors with a great image</p>
                <p :class="{ 'review-nav-text' : onReview }" v-if="url == `/create-event/${this.event.slug}/review`">Review: One last chance to make sure everything looks good</p>
            </div>
        </div>
        <div v-if="!onReview" class="create-navbar" :class="{over:hover}">
            <div @mouseover="hover = 'name'" @mouseleave="hover = null" class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onTitle }">
                <a v-if="event.name" :href="`/create-event/${this.event.slug}/title`">
                    <div class="create-navbar__hover" v-if="hover=='name'"><span>Event Name</span></div>
                </a>
            </div>
            <div @mouseover="hover = 'location'" @mouseleave="hover = null" class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onLocation }">
                <a v-if="event.location_latlon" :href="`/create-event/${this.event.slug}/location`">
                    <div class="create-navbar__hover" v-if="hover=='location'"><span>Event Location</span></div>
                </a>
            </div>
            <div  @mouseover="hover = 'category'" @mouseleave="hover = null" class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onCategory }">
                <a v-if="event.category_id" :href="`/create-event/${this.event.slug}/category`">
                    <div class="create-navbar__hover" v-if="hover=='category'"><span>Event Category</span></div>
                </a>
            </div>
            <div @mouseover="hover = 'shows'" @mouseleave="hover = null" class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onShows }">
                <a v-if="event.show_times" :href="`/create-event/${this.event.slug}/shows`">
                    <div class="create-navbar__hover" v-if="hover=='shows'"><span>Event Shows</span></div>
                </a>
            </div>
            <div @mouseover="hover = 'description'" @mouseleave="hover = null" class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onDescription }">
                <a v-if="event.description" :href="`/create-event/${this.event.slug}/description`">
                    <div class="create-navbar__hover" v-if="hover=='description'"><span>Event Description</span></div>
                </a>
            </div>
            <div @mouseover="hover = 'advisories'" @mouseleave="hover = null" class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onAdvisories }">
                <a v-if="event.advisories_id" :href="`/create-event/${this.event.slug}/advisories`">
                    <div class="create-navbar__hover" v-if="hover=='advisories'"><span>Event Advisories</span></div>
                </a>
            </div>
            <div @mouseover="hover = 'image'" @mouseleave="hover = null" class="create-navbar__page" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onImage }">
                <a v-if="event.largeImagePath" :href="`/create-event/${this.event.slug}/images`">
                    <div class="create-navbar__hover" v-if="hover=='image'"><span>Event Image</span></div>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    import Multiselect from 'vue-multiselect'

	export default {
		props: {
			event: {
				type:Object
			},
		},

        computed: {
            onReview() {
                return this.url === `/create-event/${this.event.slug}/review` ? true : '';
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
                    return (['d','n','p'].includes(this.event.status)) ? '' : window.location.href = '/create-event/edit';
                }
            }

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