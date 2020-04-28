<template>
	<div class="event-edit">
		<div v-for="(organizer,index) in organizerEvents">
			<div class="event-edit__organizer">
                <div class="organizer-card grid">
                    <div class="organizer-card__image" :style="organizerStyle(organizer)">
                        <div class="organizer-card__image-icontext" v-if="!organizer.thumbImagePath">
                            <h2>{{organizer.name.charAt(0)}}</h2>
                        </div>
                    </div>
                    <div class="organizer-card__title">
                        {{organizer.name}}
                    </div>
                    <div class="organizer-card__nav">
                        <a :href="`/organizer/${organizer.slug}/edit`">
                            <button class="edit-organizer">Edit</button>
                        </a>
                        <button v-if="!organizer.in_progress_events.length || organizer.past_events.length" @click.prevent="showModal(organizer, 'deleteOrg')" class="edit-organizer">Delete</button>
                        <button @click.prevent="showOrganizer(organizer)" class="preview-organizer">Preview Organizer</button>
                    </div>
                </div>
                <div class="listing-details-block">
                <tabs>
                    <tab title="Current Events" :active="true" :id="organizer.id" class="event-edit-eventlist grid">
                        <div class="add-new-event-card">
                            <button @click.prevent="newEvent(organizer)" class="new-event__button">
                                <div class="new-event__center">
                                    <div>
                                        <svg class="b" height="32" width="32" viewBox="0 0 24 24" aria-label="Add an Event" role="img"><path d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"></path></svg>
                                    </div>
                                     <div>
                                        <p>Add New Event</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div v-for="(event, index) in organizer.in_progress_events" :key="event.id" v-if="index < 10" class="edit-event__element">
                            <div class="edit-event__buttons">
                                <a v-if="status(event)" :href="`/events/${event.slug}`"><button class="edit-event__sub-button">View</button></a>
                                <button v-if="status(event)" @click.prevent="showModal(event, 'delete')" class="edit-event__sub-button">Delete</button>
                                <button v-if="false" @click.prevent="showModal(event, 'addreview')" class="edit-event__sub-button">Add Review</button>
                            </div>
                            <vue-event-edit-listing-item :user="user" :event="event"></vue-event-edit-listing-item>
                            
                        </div> 
                        <modal v-if="modal == 'delete'" @close="modal = null">
                            <div slot="header">
                                <div class="circle del">
                                    <p>X</p>
                                </div>
                            </div>
                            <div slot="body"> 
                                <h3>Are you sure?</h3>
                                <p>You are deleting your {{selectedModal.name}} event.</p>
                            </div>
                            <div slot="footer">
                                <button class="btn del" @click="deleteRow()">Delete</button>
                            </div>
                        </modal>
                        <modal v-if="modal == 'deleteOrg'" @close="modal = null">
                            <div slot="header">
                                <div class="circle del">
                                    <p>X</p>
                                </div>
                            </div>
                            <div slot="body"> 
                                <h3>Are you sure?</h3>
                                <p>You are deleting your {{selectedModal.name}} event.</p>
                            </div>
                            <div slot="footer">
                                <button class="btn del" @click="deleteOrg()">Delete</button>
                            </div>
                        </modal>
                        <modal v-if="modal == 'addreview'" @close="modal = null">
                            <div slot="header">
                                <h3>Add Review</h3>
                            </div>
                            <div slot="body">
                                <div class="review">
                                    <div class="field">
                                         <input 
                                        type="text" 
                                        v-model="reviewername" 
                                        placeholder="Reviewer's name"
                                        :class="{ active: activeItem == 'reviewername','error': $v.reviewername.$error}"
                                        @input="$v.reviewername.$touch()"
                                        @click="activeItem = 'reviewername'"
                                        @blur="activeItem = 'reviewername'"
                                         />
                                        <div v-if="$v.reviewername.$error" class="validation-error">
                                            <p class="error" v-if="!$v.reviewername.required">Please add a title.</p>
                                        </div>
                                    </div>
                                    <div class="field">
                                        <input 
                                        type="text" 
                                        v-model="url" 
                                        @input="$v.url.$touch()"
                                        placeholder="Link to the review"
                                        :class="{ active: activeItem == 'url','error': $v.url.$error}"
                                        @click="activeItem = 'url'"
                                        @blur="activeItem = 'url'"
                                         />
                                        <div v-if="$v.url.$error" class="validation-error">
                                            <p class="error" v-if="!$v.url.required">Please add a title.</p>
                                            <p class="error" v-if="!$v.url.url">Must be a url (https://...)</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="field">
                                    <textarea 
                                    type="textarea" 
                                    v-model="review"
                                    rows="6"
                                    @input="$v.review.$touch()"
                                    placeholder="Review snippet (no longer than 120 characters)"
                                    :class="{ active: activeItem == 'review','error': $v.review.$error}"
                                    @click="activeItem = 'review'"
                                    @blur="activeItem = 'review'"
                                     />
                                    </textarea>
                                    <div v-if="$v.review.$error" class="validation-error">
                                        <p class="error" v-if="!$v.review.required">Must include review snippet</p>
                                        <p class="error" v-if="!$v.review.maxLength">The review snippit is too long.</p>
                                    </div>
                                </div>
                            </div>
                            <div slot="footer">
                                <button class="btn del" @click="submitReview()">Submit</button>
                            </div>
                        </modal>
                    </tab>
                    <tab title="Past Events" :id="organizer.id + 1" class="tab-events">
                        <div :key="event.id" v-for="(event, index) in organizer.past_events" v-if="index < 4" class="ind">
                            <button @click.prevent="showModal(event)" class="delete-circle">X</button>
                            <vue-event-edit-listing-item :user="user" :loadurl="'/events/' + event.slug" :event="event"></vue-event-edit-listing-item>
                        </div> 
                        <modal v-if="modal == 'delete'" @close="modal = null">
                                <div slot="header">Ready to Delete?</div>
                                <div slot="body"> Are you sure you want to delete event {{selectedModal.name}}</div>
                                <div slot="footer">
                                <button @click="deleteRow()">Yes</button></div>
                        </modal>
                    </tab>
                </tabs>
                </div>
			</div>
		</div>
        <div>
           <div class="newOrg">
                <div class="title">
                    <h1>Add another organization</h1>
                    <a href="/organizer/create" class="add">+</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { required, url, maxLength } from 'vuelidate/lib/validators'
	export default {

        props: {
            user: {
                type:String
            }
        }, 

		data() {
			return {
				modal: '',
				selectedModal:'',
                showMore: '',
                organizerEvents: [],
                review: '',
                reviewername: '',
                url: '',
                activeItem: '',
                webp: false,
			}
		},

        computed: {
            getUrl(event) {
                return this.events.in_progress_events;
            },
            organizerStyle() {
                return organizer => organizer.thumbImagePath ? this.webp ? `background-image:url('/storage/${organizer.thumbImagePath}')` : `background-image:url('/storage/${organizer.thumbImagePath.slice(0, -4)}jpg')` : `background:${organizer.hexColor}`
            },
            status() {
                return event => event.status!=='r' ? true : false;
            }
        },

		methods: {
			//deletes a ticket row or clears the first one
			deleteRow(index) {
				axios.delete(`/events/${this.selectedModal.slug}`)
	            .then(response => {
                    location.reload();
	                // this.events = response.data;
	                // this.selectedModal = '';
	                // this.modal = '';
                 //    this.loadEvents();
	            })
	            .catch(errorResponse => { 
	            	errorResponse.response.data.errors 
	            });
			},

            deleteOrg(index) {
                axios.delete(`/organizer/${this.selectedModal.slug}`)
                .then(response => {
                    this.events = response.data;
                    this.selectedModal = '';
                    this.modal = '';
                    this.loadEvents();
                })
                .catch(errorResponse => { 
                    errorResponse.response.data.errors 
                });
            },

            submitReview(index) {
                let data = {
                    event: this.selectedModal,
                    url: this.url,
                    review: this.review,
                    reviewername: this.reviewername
                }
                axios.post(`/reviewevents`, data)
                .then(response => {
                    this.selectedModal = '';
                    this.modal = '';
                })
                .catch(errorResponse => {

                });
            },

			showModal(event, arr) {
                console.log(event);
				this.selectedModal = event;
			    this.modal = arr;
			},
			closeModal() {
			    this.isModalVisible = false;
			},

            loadEvents() {
                axios.get(`/create-event/edit/fetch?timestamp=${new Date().getTime()}`)
                .then(response => {
                    this.organizerEvents = response.data;
                });
            },

			newEvent(organizer) {
				axios.post(`/events`, organizer)
				.then(response => { 
					window.location.href = `/create-event/${response.data.slug}/title`; 
				})
            	.catch(error => { this.serverErrors = error.response.data.errors; });
			},

            showOrganizer(organizer) {
                window.location.href = `/organizer/${organizer.slug}`;
            },

            canUseWebP() {
                let webp = (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
                if (webp) {
                    return this.webp = true
                };
            },
		},

        mounted() {
            this.canUseWebP();
        },

        created() {
            this.loadEvents();
        },

        validations: {
            reviewername: {
                required,

            },
            url: {
                required,
                url
            },
            review: {
                required,
                maxLength: maxLength(120)
            },
        },
    };
</script>