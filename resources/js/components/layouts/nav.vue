<template>
	<div class="head" :class="page">
		<nav class="nav">
			<div class="logo">
                <a href="/">
                    <h3>EI</h3>
                </a>
			</div>
	
			<nav-search></nav-search>

			<div class="menu">
                <div class="menu-nav">
                    <profile-button :user="user" v-if="user"></profile-button>
                </div>
                <div class="menu-nav" v-if="user && !user.hasCreatedOrganizers">
                    <a href="/events/create">
                        <div>Create Event</div>
                    </a>
                </div>
                <div class="menu-nav" v-if="user && user.hasCreatedOrganizers">
                    <a href="/create-event/edit">
                        <div>Your Events</div>
                    </a>
                </div>
                <div class="menu-nav" v-if="user && loaduser.hasMessages ">
                    <a href="/messages">
                        <div v-if="user.has_unread" class="active">
                            <p></p>
                        </div>
                        <div>Messages</div>
                    </a>
                </div>
                <div class="menu-nav">
    				<a href="/login" v-if="!user">
    					<div>Login</div>
    				</a>
                </div>
                
                <div class="menu-nav">
    				<a href="/register" v-if="!user">
    					<div>Register</div>
    				</a>
                </div>

                <div class="menu-nav">
                    <a href="/register" v-if="!user">
                        <div>Host an Experience</div>
                    </a>
                </div>

			</div>
		</nav>
	</div>
</template>

<script>

	export default {

        props: {
            loaduser: {
                type:Object
            },
            username: {
                type:String, 
            },
            userid: {
                type:String,
            },
            avatar: {
                type:String,
            },
            usertype: {
                type:Object,
            },
            createdevents: {
                type:String
            },
        }, 

		data() {
			return {
				// user: {
    //                 avatar_path: this.avatar,
    //                 name: this.username,
    //                 userType: this.usertype,
    //                 hasCreatedOrganizers: this.createdevents,
    //                 id: this.userid
    //             },
                user:this.loaduser ? this.loaduser : '',
                page: '',
			};
		},

		methods: {
			navType() {
                var event = /events\/.*/;
                var org = /organizer\/.*/;
                event.test(this.$router.currentRoute.path) ? this.page = 'show' : '';
                org.test(this.$router.currentRoute.path) ? this.page = 'org' : '';
            },
		},

        mounted() {
            this.navType();
        }

	}
</script>



