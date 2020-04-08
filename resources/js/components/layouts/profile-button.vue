<template>
	<div class="profile-button" :style="`background:${user.hexColor}`" ref="dropdown">
		<label v-if="user.largeImagePath" @click="toggle" class="profile-image" >
            <img :src="avatar" height="28" width="28" :alt="user.name + `'s account`">
        </label>
        <div v-else-if="user.gravatar" @click="toggle" class="profile-image">
            <img :src="user.gravatar" height="28" width="28" :alt="user.name + `'s account`">
        </div>
        <div v-else="user.largeImagePath" @click="toggle" class="icontext">
            <h2>{{userName.charAt(0)}}</h2>
        </div>

		<ul v-show='onToggle' class="subdropdown" >
			<li>
				<a :href="'/users/'+ url">
					Profile
				</a>
			</li>
			<li v-if="user ? user.type == 'a' : ''">
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
				avatar: this.user.thumbImagePath ? `/storage/${this.user.thumbImagePath}` : '',
				userName: this.user.name,
				url: this.user.id,
				onToggle:false,
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

            toggle() {
                this.onToggle = !this.onToggle;
            },

            onClickOutside(event) {
                let arr =  this.$refs.dropdown;
                if (!arr || arr.contains(event.target)) return;
                this.onToggle = false;
            },
		},

        mounted() {
            document.addEventListener("click", this.onClickOutside);
        },

        beforeDestroy() {
            document.removeEventListener("click", this.onClickOutside);
        }
	}
</script>



