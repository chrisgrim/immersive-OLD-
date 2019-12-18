<template>
	<div class="checklist">
        <div class="logo">
            <a href="/create-event/edit">
                <img src="/storage/website-files/ei-logo.png" alt="">
            </a>
        </div>
        <div v-if="onOrganizer" class="item">
            <div class="text">
                <h2>Organizer - </h2>
                <p>Let users know about your team!</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/title`" class="item">
            <div class="text">
                <p>Title: </p>
                <p>Make it a good one!</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/location`" class="item">
            <div class="text">
                <p>Location: </p>
                <p>Give your event an address</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/category`" class="item">
            <div class="text">
                <p>Category: </p>
                <p>Select the best fit for your event</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/shows`" class="item">
            <div class="text">
                <p>Shows: </p>
                <p>Choose your Dates and Pricing</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/description`" class="item">
            <div class="text">
                <p>Description: </p>
                <p>Let your users know about the event</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/advisories`" class="item">
            <div class="text">
                <p>Advisories: </p>
                <p>Provide warnings</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/images`" class="item">
            <div class="text">
                <p>Image: </p>
                <p>Make sure its a good one!</p>
            </div>
        </div>
       <div class="bar">
            <div class="link" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onTitle }">
                <a v-if="event.name" :href="`/create-event/${this.event.slug}/title`"></a>
            </div>
            <div class="link" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onLocation }">
                <a v-if="event.location_latlon" :href="`/create-event/${this.event.slug}/location`"></a>
            </div>
            <div class="link" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onCategory }">
                <a v-if="event.category_id" :href="`/create-event/${this.event.slug}/category`"></a>
            </div>
            <div class="link" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onShows }">
                <a v-if="event.show_times" :href="`/create-event/${this.event.slug}/shows`"></a>
            </div>
            <div class="link" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onDescription }">
                <a v-if="event.description" :href="`/create-event/${this.event.slug}/description`"></a>
            </div>
            <div class="link" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onAdvisories }">
                <a v-if="event.advisories_id" :href="`/create-event/${this.event.slug}/advisories`"></a>
            </div>
            <div class="link" style="width: 14.4%; left: 0%;padding-top:1rem;" :class="{ fill: onImage }">
                <a v-if="event.largeImagePath" :href="`/create-event/${this.event.slug}/images`"></a>
            </div>
       </div>
    </div>
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
            }
        },

        methods: {
            getUrl(data) {
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
            }
        },

        mounted() {
            let data = this.$router.currentRoute.path;
            this.getUrl(data);
        }
    }

</script>