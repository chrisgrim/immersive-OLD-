<template>
    <nav v-if="isNotReview" class="create" :style="pageHeight">
    	<div class="grid create-nav-header">
            <div class="create-nav-header__home">
                <div class="nav-create-logo">
                    <a :href="backUrl">
                        <h3>EI</h3>
                    </a>
                </div>
            </div>
            <div class="nav-back">
                <button class="nav-back-button"> Save and Exit </button>
            </div>
        </div>
        <div v-if="isOrganizer" class="create-nav-guide">
            <h3>Submit your Organization</h3>
        </div>
        <div v-else class="create-nav-guide">
            <h3>Submit your Event</h3>
        </div>


        <div v-if="!isOrganizer" class="grid create-menu">
            <a :href="`/create-event/${this.event.slug}/title`">
                <NavMenuItem 
                :active="{active : url == `/create-event/${this.event.slug}/title`}" 
                name="Title" 
                :iconstatus="this.event.name ? 'completed' : 'uncomplete'">
                </NavMenuItem>
            </a>
            <a :href="`/create-event/${this.event.slug}/location`">
                <NavMenuItem 
                :active="{active : url == `/create-event/${this.event.slug}/location`}" 
                name="Location" 
                :iconstatus="this.event.location_latlon || !this.event.hasLocation ? 'completed' : 'uncomplete'">
                </NavMenuItem>
            </a>
            <a :href="`/create-event/${this.event.slug}/category`">
                <NavMenuItem 
                :active="{active : url == `/create-event/${this.event.slug}/category`}" 
                name="Category" 
                :iconstatus="this.event.category_id ? 'completed' : 'uncomplete'">
                </NavMenuItem>
            </a>
            <a :href="`/create-event/${this.event.slug}/shows`">
                <NavMenuItem 
                :active="{active : url == `/create-event/${this.event.slug}/shows`}" 
                name="Shows" 
                :iconstatus="this.event.show_times ? 'completed' : 'uncomplete'">
                </NavMenuItem>
            </a>
            <a :href="`/create-event/${this.event.slug}/description`">
                <NavMenuItem 
                :active="{active : url == `/create-event/${this.event.slug}/description`}" 
                name="Description" 
                :iconstatus="this.event.description ? 'completed' : 'uncomplete'">
                </NavMenuItem>
            </a>
            <a :href="`/create-event/${this.event.slug}/advisories`">
                <NavMenuItem 
                :active="{active : url == `/create-event/${this.event.slug}/advisories`}" 
                name="Advisories" 
                :iconstatus="this.event.advisories_id ? 'completed' : 'uncomplete'">
                </NavMenuItem>
            </a>
            <a :href="`/create-event/${this.event.slug}/images`">
                <NavMenuItem 
                :active="{active : url == `/create-event/${this.event.slug}/images`}" 
                name="Image" 
                :iconstatus="this.event.largeImagePath ? 'completed' : 'uncomplete'">
                </NavMenuItem>
            </a>
            <a v-if="cantReview" :href="canReview">
                <NavMenuItem 
                :active="{active : url == `/create-event/${this.event.slug}/review`}" 
                name="Final Review" 
                :iconstatus="'locked'">
                </NavMenuItem>
            </a>
           
        </div>
        
    </nav>
</template>

<script>
    import NavMenuItem  from './components/nav-menu-item.vue'

	export default {
		props: ['event', 'user'],

        components: { NavMenuItem },

        computed: {
            onReview() {
                return this.url === `/create-event/${this.event.slug}/review` ? true : '';
            },
            showBar() {
                return this.onReview || this.url === `/organizer/create` ? false : true;
            },
            backUrl() {
                return this.user.hasCreatedOrganizers  ? '/create-event/edit' : '/'
            },
            canReview() {
                return this.readyToSubmit ? `/create-event/${this.event.slug}/review` : '#'
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
                pageHeight:'',
                isNotReview: window.location.pathname == `/create-event/${this.event.slug}/review` ? false : true,
                isOrganizer: window.location.pathname == `/organizer/create` ? true : false,
                readyToSubmit: false,
                cantReview: this.event.status !== 'p' ? true : false,
            }
        },

        methods: {

            notAllowed() {
                if(this.event.status) {
                    return (['d','n','p', 'e'].includes(this.event.status)) ? '' : window.location.href = '/create-event/edit';
                }
            },

            handleResize() {
                this.pageHeight = `min-height:${window.innerHeight}px`;
            },

            toggleBodyClass(addRemoveClass, className) {
                const el = document.querySelector(".create-body");
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            isReview() {
                !this.isNotReview ? this.toggleBodyClass('addClass', 'hidden') : ''
            },

            checkSubmissionStatus() {
                this.event.status !== 'p' &&
                this.event.status !== 'e' &&
                this.event.organizer_id && 
                this.event.name && 
                (this.event.location_latlon || !this.event.hasLocation) && 
                this.event.category_id &&
                this.event.show_times &&
                this.event.description &&
                this.event.advisories_id
                ? this.readyToSubmit = true : false;
            },

        },

        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },

        mounted() {
            let data = window.location.pathname;
            this.isReview();
        },

        created() {
            this.notAllowed();
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
            this.checkSubmissionStatus();
        }
    }

</script>