<template>
	<div class="nav-dropdown" :style="`background:${user.hexColor}`" ref="dropdown">
        <button @click="toggle" class="dropdown-image">
            <label v-if="user.largeImagePath">
                <picture>
                    <source height="28" width="28" type="image/webp" :srcset="`/storage/${user.thumbImagePath}`"> 
                    <img height="28" width="28" :src="`/storage/${user.thumbImagePath.slice(0, -4)}jpg`" :alt="user.name + `'s account`">
                </picture>
            </label>
            <div v-else-if="user.gravatar">
                <img :src="user.gravatar" height="28" width="28" :alt="user.name + `'s account`">
            </div>
            <div v-else="user.largeImagePath" class="dropdown-button-text">
                <h2>{{userName.charAt(0)}}</h2>
            </div>
        </button>

		<ul v-show='onToggle' class="sub-dropdown" >
			<li>
				<a :href="'/users/'+ url">
					Profile
				</a>
			</li>
            <li>
                <a href="/account-settings">
                    Account
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
		props: {
            user: {
                type:Object
            },
            screenwidth: {
                type:Boolean
            }
        },

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
                if (this.screenwidth) {
                    return window.location.href = `/account-settings`;
                }
                return this.onToggle = !this.onToggle;
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



