<template>
	<div>
		<nav class="grid nav">
			<a href="/">
				<div class="logo">
					<img src="/storage/website-files/ei-logo.png" alt="">
				</div>
			</a>
	
			<nav-search></nav-search>

			<div class="navmenu">
				<a href="/events/create" v-if="user && !user.hasCreatedEvents">
					<div>Create Event</div>
				</a>
				<a href="/create-event/edit" v-if="user && user.hasCreatedEvents">
					<div>Edit Your Events</div>
				</a>

				<profile-button :user="user" v-if="user"></profile-button>

				<a href="/login" v-if="!user">
					<div>Login</div>
				</a>

				<a href="/register" v-if="!user">
					<div>Register</div>
				</a>

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



