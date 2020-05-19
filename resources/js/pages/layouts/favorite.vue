<template>
	<div class="fav">
        <div :class="inputclass">
            <div :class="isApproved">
                <a href="#" @click.prevent="toggle()">
                    <svg viewBox="0 0 38 38" :class="classes">
                        <path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38"></path>
                    </svg>
                </a>
            </div>
        </div>
        <login-pop v-if="login" :visible="login" @close="login=false"></login-pop>
        <modal :modalclass="modalwidth" v-if="modal" @close="modal=false">
            <div slot="header">
            </div>
            <div slot="body"> 
                <h3>Get Notified?</h3>
                <p>Would you like to recieve an email whenever the organizers of your favorited events have updates or releases new events? (This can be edited in your profile at any time)</p>
                <br>
                <div class="field">
                    <div id="cover">
                        <input v-model="newsletter" type="checkbox" id="checkbox">
                        <div id="bar"></div>
                        <div id="knob">
                            <p v-if="newsletter">Yes</p>
                            <p v-else>No</p>
                        </div>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <button  class="btn sub" @click="updateNewsletter">Done</button>
            </div>
        </modal>
         <vue-email-verify
        v-if="isVerifyVisible"
        @close="isVerifyVisible = false"
        :user="user" 
        message="verify">
        </vue-email-verify>
	</div>
</template>

<script>
	export default {
		props: ['event', 'inputclass'],

        computed: {
            classes() {
                return ['fa', this.isFavorited ? 'hearted' : 'unhearted'];
            },

            endpoint() {
                return '/favorite/' + this.event.slug + '/favorites';
            },

            isApproved() {
                return this.event.status !== 'p' ? 'dis' : '';
            },
        },

		data() {
			return {
                user: this.$store.state.user ? this.$store.state.user : '',
				isFavorited: this.event.isFavorited,
                modal: false,
                login: false,
                isVerifyVisible: false,
                modalwidth:'newsletter',
                newsletter: true,
                canFavorite: this.$store.state.user && this.$store.state.user.email_verified_at ? true : false,
                hasCookie: this.$cookies.isKey('news'),
			}
		},

		methods: {
			toggle() {
                if (this.canFavorite && this.hasCookie) {
                    return this.isFavorited ? this.destroy() : this.create();
                }
                if (this.canFavorite) {
                    return this.modal = true;
                }
                if (this.user) {
                    return this.isVerifyVisible = true;
                }
                return this.login = true;
			},

            updateNewsletter() {
                this.$cookies.set("news", true, "Infinity");
                let data = {newsletter: this.newsletter};
                axios.patch(`/users/${this.user.id}`, data)
                .then(response => {
                    console.log(response.data);
                    this.isFavorited ? this.destroy() : this.create();
                })
                .catch(error => { 
                    console.log(error.response.data );
                })
                .then(response => {
                    location.reload();
                });
            },

            toggleBodyClass(addRemoveClass, className) {
                const el = document.body;

                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

			create() {
				axios.post(this.endpoint);
				this.isFavorited = true;
			},
			destroy() {
				axios.delete(this.endpoint);
				this.isFavorited = false;
			},
		},

        watch: {
            modal() {
                return this.modal ? this.toggleBodyClass('addClass', 'noscroll') : this.toggleBodyClass('removeClass', 'noscroll');
            },
            login() {
                return this.login ? this.toggleBodyClass('addClass', 'noscroll') : this.toggleBodyClass('removeClass', 'noscroll');
            },
        }
	}
</script>