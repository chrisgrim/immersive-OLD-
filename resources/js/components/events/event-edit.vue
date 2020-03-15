<template>
	<div class="editevents">
		<div v-for="(organizer,index) in organizerEvents">
			<div class="section">
                <div class="title-block">
                    <div class="image" :style="{ backgroundImage: `url('/storage/${organizer.imagePath}')` }">
                        
                    </div>
                    <div class="title">
                        {{organizer.name}}
                    </div>
                    <div class="buttons">
                        <a :href="`/organizer/${organizer.slug}/edit`">
                            <button class="edit">Edit</button>
                        </a>
                        <button @click.prevent="showOrganizer(organizer)" class="prev">Preview Organizer</button>
                    </div>
                </div>
                <div class="listing-details-block">
                <tabs>
                    <tab title="Current Events" :active="true" id="grid" class="tab-events">
                        <div @click.prevent="newEvent(organizer)">
                            <div class="enew">
                                <div class="body">
                                    <div class="event">
                                        <div>
                                            <svg class="b" height="32" width="32" viewBox="0 0 24 24" aria-label="Add an image or video" role="img"><path d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"></path></svg>
                                        </div>
                                         <div>
                                            <p>Add New Event</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-for="(event, index) in organizer.in_progress_events" v-if="index < 10" class="item">
                            <event-listing-item :user="user" :event="event"></event-listing-item>
                            <button @click.prevent="showModal(event, 'delete')" class="del">Delete</button>
                            <button @click.prevent="showModal(event, 'addreview')" class="del">Add Review</button>
                        </div> 
                        <modal v-show="modal == 'delete'" @close="modal = null">
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
                        <modal v-show="modal == 'addreview'" @close="modal = null">
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
                    <tab title="Past Events" id="grid" class="tab-events">
                        <div v-for="(event, index) in organizer.past_events" v-if="index < 4">
                            <button @click.prevent="showModal(event)" class="delete-circle">X</button>
                            <event-listing-item :user="user" :loadurl="'/events/' + event.slug" :event="event"></event-listing-item>
                        </div> 
                        <modal v-show="modal == 'delete'" @close="modal = null">
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
			}
		},

        computed: {
            getUrl(event) {
                return this.events.in_progress_events;
            },
        },

		methods: {
			//deletes a ticket row or clears the first one
			deleteRow(index) {
				axios.delete(`/events/${this.selectedModal.slug}`)
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