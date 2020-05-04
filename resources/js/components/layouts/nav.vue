<template>
    <div>
        <nav v-if="!mobileDevice" class="nav" :class="onclass">
            <div :class="{ fullmap: fullmap }">
                <div class="nav-logo" :class="{ active: bar }">
                    <a href="/">
                        <h3>EI</h3>
                    </a>
                </div>
                <div class="nav-search" :class="{ fullmap: fullmap }">
                    <nav-search></nav-search>
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
                            <div>Host an Experience</div>
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
                            <svg aria-label="Back" role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                        </a>
                        <a v-else href="/">
                            <svg aria-label="Back" role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                        </a>
                    </div>
                    <nav-search></nav-search>
                </div>
            </div>
        </nav>
        <menu v-if="mobileDevice && dontShowMenu" class="nav-menu mobile" :class="{ fullmap: fullmap, active: bar }">
            <div v-if="!user">
            </div>
            <div class="nav-logo">
                <a href="/">
                    <h3>EI</h3>
                </a>
            </div>
            <div class="nav-menu-item mobile">
                <a class="menu-link" href="/">
                    <div>Liked</div>
                </a>
            </div>
            <div class="nav-menu-item mobile" v-if="user && user.hasCreatedOrganizers">
                <a class="menu-link" href="/create-event/edit">
                    <div>Events</div>
                </a>
            </div>
            <div class="nav-menu-item mobile" v-if="user && !user.hasCreatedOrganizers">
                <a class="menu-link" href="/events/create">
                    <div>Events</div>
                </a>
            </div>
            <div class="nav-menu-item mobile" v-if="!user">
                <a class="menu-link" href="/login">
                    <div>Login</div>
                </a>
            </div>
            <div class="nav-menu-item mobile" v-if="user">
                <a class="menu-link" href="/messages">
                    <div v-if="user.unread" class="active-dot">
                        <p></p>
                    </div>
                    <div>Inbox</div>
                </a>
            </div>
            <div class="nav-menu-item mobile" v-if="user">
                <profile-button :screenwidth="mobileDevice" :user="user"></profile-button>
            </div>
        </menu>
    </div>
</template>

<script>

	export default {

        props: {
            user: {
                type:Object
            },
            onclass: {
                type:String
            }
        },

        computed: {
            fullmap() {
                return this.$store.state.map ? true : false;
            },
            onClassType() {
                return this.onclass=='show' || this.onclass=='message' || this.onclass=='entry' ?  false : true;
            },
            dontShowNav() {
                return this.onclass == 'show' || this.onclass == 'message' || this.onclass == 'profile' || this.onclass == 'messageshow' || this.onclass == 'entry' ? false : true;
            },
            dontShowMenu() {
                return this.onclass == 'show' || this.onclass == 'messageshow' ? false : true;
            }
        },

		data() {
			return {
                bar: true,
                lastScrollPosition: 0,
                mobileDevice: false,
                url: '',
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



