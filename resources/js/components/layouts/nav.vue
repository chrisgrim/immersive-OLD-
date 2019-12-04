<template>
	<div>
		<nav class="grid nav">
			<a href="/">
				<div class="logo">
					<img src="/storage/website-files/ei-logo.png" alt="">
				</div>
			</a>
	
			<nav-search></nav-search>

			<div class="menu">
                <div class="menu-nav">
                    <profile-button :user="user" v-if="user"></profile-button>
                </div>
                <div class="menu-nav" v-if="user && !user.hasCreatedEvents">
                    <a href="/events/create">
                        <div>Create Event</div>
                    </a>
                </div>
                <div class="menu-nav" v-if="user && user.hasCreatedEvents">
                    <a href="/create-event/edit">
                        Edit Your Events
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

			</div>
		</nav>
	</div>
</template>

<script>

	export default {

		props: ['loaduser'],

		data() {
			return {
				user: this.loaduser ? this.loaduser : '',
			};
		},

		methods: {
			
		},

	}
</script>



