<template>
	<div class="profile-button">
		<label @click="toggle = !toggle" class="profile-image" :style="{ backgroundImage: 'url(' + avatar + ')' }">
		</label>

		<ul v-show='toggle' class="subdropdown">
			<li>
				<a :href="'/users/'+ url">
					Profile
				</a>
			</li>
			<li>
				<a :href="'/myFavorites/'+ url">
					Your Favorites
				</a>
			</li>
			<li v-if="user.userType ? user.userType.name == 'admin' : ''">
				<a href="/admin/dashboard">
					Admin Dashboard
				</a>
			</li>
			<li>
				<a :href="'/website-stats/'">
					Website Stats
				</a>
			</li>
			 <li>
			 	<a href="#" @click.prevent="logout()">
			 		Logout
			 	</a>
			 </li>
			
		</ul>
	</div>
</template>

<script>
	import ImageUpload from './image-upload.vue';

	export default {
		props: ['user'],

		components: { ImageUpload },


		data() {
			return {
				avatar: this.user.image_path ? `/storage/${this.user.image_path}` : '/storage/website-files/default-user-icon.jpg',
				userName: this.user.name,
				url: this.user.id,
				toggle:false,

			};

		},


		methods: {

			logout(){
				axios.post('/logout').
					then(response => {
						if (response.status === 302 || 401) {
							window.location.href = '/';
						} else {
						// throw error and go to catch block
						}
					}).catch(error => {
				});
            },
		}
	}
</script>



