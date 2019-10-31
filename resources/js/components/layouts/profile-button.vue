<template>
	<div class="profile-button">
		<label @click="toggle = !toggle" class="profile-image" :style="{ backgroundImage: 'url(' + avatar + ')' }">
		</label>
		<ul v-show='toggle' class="subdropdown">
			<li>
				<a :href="'/users/show/'+ url">
					Profile
				</a>
			</li>
			<li>
				<a :href="'/myFavorites/'+ url">
					Your Favorites
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
				avatar: this.user.avatar_path,
				userName: this.user.name,
				url: this.user.id,
				toggle:false,

			};

		},


		methods: {
			onLoad(avatar) {
				this.avatar = avatar.src;
				this.persist(avatar.file);
			},

			// logout() {

			// 	axios.post('/logout');
			// 	window.location.href = '/logout';
			// }
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



