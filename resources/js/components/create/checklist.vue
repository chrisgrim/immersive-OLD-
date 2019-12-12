<template>
	<div class="checklist">
        <div class="logo">
            <a href="/create-event/edit">
                <img src="/storage/website-files/ei-logo.png" alt="">
            </a>
        </div>
        <div v-if="onOrganizer" class="item">
            <div class="text">
                <h2>Organizer: </h2>
                <p>Let users know about your team!</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/title`" class="item">
            <div class="text">
                <h2>Title: </h2>
                <p>Make it a good one!</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/location`" class="item">
            <div class="text">
                <h2>Location: </h2>
                <p>Give your event an address</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/category`" class="item">
            <div class="text">
                <h2>Category: </h2>
                <p>Select the best fit for your event</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/shows`" class="item">
            <div class="text">
                <h2>Shows: </h2>
                <p>Choose your Dates and Pricing</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/description`" class="item">
            <div class="text">
                <h2>Description: </h2>
                <p>Let your users know about the event</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/expect`" class="item">
            <div class="text">
                <h2>Advisories: </h2>
                <p>Provide warnings</p>
            </div>
        </div>
        <div v-if="this.$router.currentRoute.path === `/create-event/${this.event.slug}/images`" class="item">
            <div class="text">
                <h2>Image: </h2>
                <p>Make sure its a good one!</p>
            </div>
        </div>
        <div class="bar">
            <div style="width: 14.2857%; left: 0%; max-width: 100%;">
                <a :href="`/create-event/${this.event.slug}/title`">
                    <div v-if="onTitle" class="fill" style="width: 14.2857%; left: 0%; max-width: 100%;"></div>
                </a>
            </div>
             <div style="width: 14.2857%; left: 14.2857%; max-width: 85.7143%;">
                <a :href="`/create-event/${this.event.slug}/location`">
                    <div v-if="onLocation" class="fill" style="width: 14.2857%; left: 14.2857%; max-width: 85.7143%;"></div>
                </a>
            </div>
             <div style="width: 14.2857%; left: 28.5714%; max-width: 71.4286%;"> 
                <a :href="`/create-event/${this.event.slug}/category`">
                    <div v-if="onCategory" class="fill" style="width: 14.2857%; left: 28.5714%; max-width: 71.4286%;"> 
                    </div>
                </a>
            </div>
            <div style="width: 14.2857%; left: 42.8571%; max-width: 57.1429%;">
                <a :href="`/create-event/${this.event.slug}/shows`">
                    <div v-if="onShows" class="fill" style="width: 14.2857%; left: 42.8571%; max-width: 57.1429%;"></div>
                </a>
            </div>
            <div v-if="onDescription" class="fill" style="width: 14.2857%; left: 57.1429%; max-width: 42.8571%;">
                <a :href="`/create-event/${this.event.slug}/description`">
                </a>
            </div>
            <div v-if="onAdvisories" class="fill" style="width: 14.2857%; left: 71.4286%; max-width: 28.5714%;">
                <a :href="`/create-event/${this.event.slug}/expect`">
                </a>
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
                if (data === `/create-event/${this.event.slug}/expect`) {
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