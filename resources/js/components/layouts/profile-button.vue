<template>
	<div class="profile-button" :style="`background:#${Math.floor(Math.random()*16777215).toString(16)};`">
		<label v-if="this.user.image_path" @click="toggle = !toggle" class="profile-image" >
            <img :src="avatar" height="28" width="28" :alt="user.name + `'s account`">
        </label>
        <div v-else="this.user.image_path" @click="toggle = !toggle" class="icontext">
            <h2>{{userName.charAt(0)}}</h2>
        </div>

		<ul v-show='toggle' class="subdropdown">
			<li>
				<a :href="'/users/'+ url">
					Profile
				</a>
			</li>
			<li v-if="user.userType ? user.userType.name == 'admin' : ''">
				<a href="/admin/dashboard">
					Admin Dashboard
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



