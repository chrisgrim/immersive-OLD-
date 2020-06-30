<template>
    <div>
        <nav v-if="!mobileDevice" class="nav" :class="onclass">
            <div class="nav-grid grid" :class="{ fullmap: fullmap }">
                <div class="nav-logo" :class="{ active: bar }">
                    <a href="/">
                        <h3>EI</h3>
                    </a>
                </div>
                <div  class="nav-search" :class="{ fullmap: fullmap }">
                    <nav-search v-if="dontShowNavSearch"></nav-search>
                </div>
                <div class="nav-menu" :class="{ active: bar }">
                    <div class="nav-menu-item" v-if="user">
                        <profile-button :screenwidth="mobileDevice" :user="user"></profile-button>
                    </div>
                    <div class="nav-menu-item" v-if="user && !user.hasCreatedOrganizers">
                        <a class="menu-link" href="/events/create">
                            <div>Create Event</div>
                        </a>
                    </div>
                    <div class="nav-menu-item" v-if="user && user.hasCreatedOrganizers">
                        <a class="menu-link" href="/create-event/edit">
                            <div>Your Events</div>
                        </a>
                    </div>
                    <div class="nav-menu-item" v-if="user && user.hasMessages ">
                        <a class="menu-link" href="/messages">
                            <div v-if="user.unread" class="active-dot">
                                <p></p>
                            </div>
                            <div>Inbox</div>
                        </a>
                    </div>
                    <div class="nav-menu-item" v-if="!user">
                        <a class="menu-link" href="/login">
                            <div>Login</div>
                        </a>
                    </div>
                    
                    <div class="nav-menu-item" v-if="!user">
                        <a class="menu-link" href="/register">
                            <div>Register</div>
                        </a>
                    </div>

                    <div class="nav-menu-item" v-if="!user">
                        <a class="menu-link" href="/register">
                            <div>Submit Your Experience</div>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <nav v-if="mobileDevice && dontShowNav" class="nav mobile" :class="{ fullmap: fullmap, entry: onclass=='entry', show: onclass=='show', message: onclass=='message', messageshow: onclass=='messageshow'  }" >
            <div v-if="onClassType">
                <div class="nav-search mobile">
                    <div class="nav-backarrow" v-if="onclass">
                        <a v-if="url && onclass=='show'" :href="url">
                            <svg aria-label="Back" role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                        </a>
                        <a v-else href="/">
                            <svg aria-label="Back" role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                        </a>
                    </div>
                    <nav-search></nav-search>
                </div>
            </div>
        </nav>
        <menu v-if="mobileDevice && dontShowMenu" class="nav-menu mobile" :class="{ fullmap: fullmap, active: bar }">
            <div v-if="!user">
            </div>
            <div class="nav-menu-item mobile">
                <a href="/">
                    <div class="nav-mobile-footer__icon">
                        <h3>EI</h3>
                        <p class="mobile-nav-footer__text">Home</p>
                    </div>
                </a>
            </div>
            <div class="nav-menu-item mobile" v-if="user">
                <a class="menu-link" href="/account-settings/favorited">
                    <div class="nav-mobile-footer__icon">
                        <svg viewBox="0 0 24 24" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.5" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round" style="height: 100%; width: 100%; display: inline-block; overflow: visible;"><path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" stroke-linejoin="round"></path></svg>
                        <p class="mobile-nav-footer__text">Liked</p>
                    </div>
                </a>
            </div>
            <div class="nav-menu-item mobile" v-else>
                <a class="menu-link" href="/login">
                    <div class="nav-mobile-footer__icon">
                        <svg viewBox="0 0 24 24" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.5" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round" style="height: 100%; width: 100%; display: inline-block; overflow: visible;"><path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" stroke-linejoin="round"></path></svg>
                        <p class="mobile-nav-footer__text">Liked</p>
                    </div>
                </a>
            </div>
            <div class="nav-menu-item mobile" v-if="user && user.hasCreatedOrganizers">
                <a class="menu-link" href="/create-event/edit">
                    <div class="nav-mobile-footer__icon">
                        <svg viewBox="0 0 24 24" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.5" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round" style="height: 100%; width: 100%; display: inline-block; overflow: visible;"><circle class="st0" cx="12" cy="12.2" r="10.2"/><line class="st0" x1="12" y1="8.6" x2="12" y2="15.9"/><line class="st0" x1="8.3" y1="12.2" x2="15.7" y2="12.2"/></svg>
                        <p class="mobile-nav-footer__text">Submit</p>
                    </div>
                </a>
            </div>
            <div class="nav-menu-item mobile" v-if="user && !user.hasCreatedOrganizers">
                <a class="menu-link" href="/events/create">
                    <div class="nav-mobile-footer__icon">
                        <svg viewBox="0 0 24 24" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.5" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round" style="height: 100%; width: 100%; display: inline-block; overflow: visible;"><circle class="st0" cx="12" cy="12.2" r="10.2"/><line class="st0" x1="12" y1="8.6" x2="12" y2="15.9"/><line class="st0" x1="8.3" y1="12.2" x2="15.7" y2="12.2"/></svg>
                        <p class="mobile-nav-footer__text">Submit</p>
                    </div>
                </a>
            </div>
            <div class="nav-menu-item mobile" v-if="!user">
                <a class="menu-link" href="/login">
                    <div class="nav-mobile-footer__icon">
                        <svg viewBox="0 0 24 24" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.5" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round" style="height: 100%; width: 100%; display: inline-block; overflow: visible;"><path class="st0" d="M18.6,22.7c0.5,0,0.9-0.3,0.9-0.8c0,0,0-0.1,0-0.1v-4.3c0-2.8-2.3-5.1-5.1-5.1H9.4c-2.8,0-5.1,2.3-5.1,5.1
            v4.3c0,0.5,0.3,0.9,0.8,0.9"/>
                        <path class="st0" d="M11.9,10.7c2.3,0,4.2-1.9,4.2-4.3c0-2.4-1.9-4.3-4.2-4.3C9.6,2.1,7.7,4,7.7,6.4c0,0,0,0,0,0
            C7.7,8.7,9.6,10.6,11.9,10.7z"/></svg>
                        <p class="mobile-nav-footer__text">Login</p>
                    </div>
                </a>
            </div>
            <div class="nav-menu-item mobile" v-if="user">
                <a class="menu-link" href="/messages">
                    <div class="nav-mobile-footer__icon">
                        <div v-if="user.unread" class="nav-mobile-footer__icon--active-email">
                            <svg viewBox="0 0 24 24" fill="red" fill-opacity="1" stroke="red" stroke-width="1.5" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round" style="height: 24px; width: 24px; display: inline-block; overflow: visible;"><circle cx="20.7" cy="3.7" r="3.1"/></svg>
                        </div>
                        <svg viewBox="0 0 24 24" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.5" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round" style="height: 24px; width: 24px; display: inline-block; overflow: visible;"><path d="M18,19c2.6,0,4.6-1.2,4.5-3.5v-9C22.5,4,20.5,2,18,2H6C3.5,2,1.5,4,1.5,6.5v9c0,2.3,2,3.5,4.5,3.5h2.6 c0.6,0,1.1,0.3,1.5,0.8l1.9,2.7l1.4-2.3c0.2-0.3,0.5-0.6,0.8-0.8c0.4-0.2,0.9-0.4,1.3-0.4H18z"/></svg>
                        <p class="mobile-nav-footer__text">Inbox</p>
                    </div>
                </a>
            </div>
            <div class="nav-menu-item mobile" v-if="user">
                <div class="nav-mobile-footer__icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-width="1.5" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round" style="height: 100%; width: 100%; display: inline-block; overflow: visible;"><circle cx="12" cy="12" r="10.4"/></svg>         
                    <profile-button :screenwidth="mobileDevice" :user="user"></profile-button>
                    <p class="mobile-nav-footer__text">Profile</p>
                </div>     
            </div>
        </menu>
    </div>
</template>

<script>

	export default {

        props:['user', 'onclass'],

        computed: {
            fullmap() {
                return this.$store.state.map ? true : false;
            },
            onClassType() {
                return this.onclass=='show' || this.onclass=='message' || this.onclass=='entry' ?  false : true;
            },
            dontShowNav() {
                return this.onclass == 'show' || this.onclass == 'favorited' || this.onclass == 'message' || this.onclass == 'profile' || this.onclass == 'messageshow' || this.onclass == 'entry' || this.onclass == 'homepage' || this.onclass=='onlinesearch' ? false : true;
            },
            dontShowMenu() {
                return this.onclass == 'show' || this.onclass == 'messageshow' ? false : true;
            },
            dontShowNavSearch() {
                return this.onclass == 'homepage' || this.onclass=='onlinesearch' ?  false : true;
            }
        },

		data() {
			return {
                bar: true,
                lastScrollPosition: 0,
                mobileDevice: false,
                url: '',
                page: this.onclass
			};
		},

		methods: {

            breadcrumbs() {
                if (new URL(window.location.href).searchParams.get("name")) {
                    this.url = `/index/search?name=${new URL(window.location.href).searchParams.get("name")}&lat=${new URL(window.location.href).searchParams.get("lat")}&lng=${new URL(window.location.href).searchParams.get("lng")}`
                }
            },

            handleScroll (event) {
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                if (currentScrollPosition < 100) {
                    return this.bar = true;
                }
                if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                    return
                }
                this.bar = currentScrollPosition < this.lastScrollPosition;
                this.lastScrollPosition = currentScrollPosition ;
            },

            handleResize() {
                window.innerWidth < 768 ? this.mobileDevice = true : false;
                window.innerWidth > 768 ? this.mobileDevice = false : true;
            },
		},

        mounted() {
            this.$store.commit('adduser', this.user);
            this.breadcrumbs();
        },

        created () {
            window.addEventListener('resize', this.handleResize);
            window.addEventListener('scroll', this.handleScroll);
            this.handleResize();
        },
        destroyed () {
            window.removeEventListener('resize', this.handleResize)
            window.removeEventListener('scroll', this.handleScroll);
        }
	}
</script>



