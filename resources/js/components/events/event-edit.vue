<template>
	<div class="edit-events-page">
		<div v-for="(organizer,index) in eventsbyorganizer">
			<div class="organizer-event-edit-section">
                <div class="title-block">
                    <div class="title">
                        {{organizer.name}}
                    </div>
                    <div class="buttons">
                        <button class="create">Edit</button>
                        <button @click.prevent="showOrganizer(organizer)" class="create">Preview</button>
                    </div>
                </div>
                <div class="listing-details-block">
                <tabs>
                    <tab title="In Progress" :active="true" id="grid" class="tab-events">
                        <div @click.prevent="newEvent(organizer)">
                            <div class="event-grid">
                                <div class="event-grid_image">
                                    <div class="grid-background-image" style="background-image: url('/storage/default-avatar/add-new.png')">
                                    </div>
                                </div>
                                Add New Event
                            </div>
                        </div>
                        <div v-for="(event, index) in organizer.in_progress_events" v-if="index < 4">
                            <button @click.prevent="showModal(event)" class="delete-circle">X</button>
                            <event-listing-item :event="event"></event-listing-item>
                        </div> 
                        <modal v-show="isModalVisible" @close="closeModal">
                                <div slot="header">Ready to Delete?</div>
                                <div slot="body"> Are you sure you want to delete event {{modalDelete.name}}</div>
                                <div slot="footer">
                                <button @click="deleteRow()">Yes</button></div>
                        </modal>
                    </tab>
                    <tab title="Live Events" id="grid" class="tab-events">
                        <div v-for="(event, index) in organizer.live_events" v-if="index < 4">
                            <button @click.prevent="showModal(event)" class="delete-circle">X</button>
                            <event-listing-item :loadurl="'/events/' + event.slug" :event="event"></event-listing-item>
                        </div> 
                        <modal v-show="isModalVisible" @close="closeModal">
                                <div slot="header">Ready to Delete?</div>
                                <div slot="body"> Are you sure you want to delete event {{modalDelete.name}}</div>
                                <div slot="footer">
                                <button @click="deleteRow()">Yes</button></div>
                        </modal>
                    </tab>
                    <tab title="Past Events" id="grid" class="tab-events">
                        <div v-for="(event, index) in organizer.past_events" v-if="index < 4">
                            <button @click.prevent="showModal(event)" class="delete-circle">X</button>
                            <event-listing-item :loadurl="'/events/' + event.slug" :event="event"></event-listing-item>
                        </div> 
                        <modal v-show="isModalVisible" @close="closeModal">
                                <div slot="header">Ready to Delete?</div>
                                <div slot="body"> Are you sure you want to delete event {{modalDelete.name}}</div>
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

	export default {

        props: {
	        eventsbyorganizer: {
	            type:Array,
	        },
	    },

        computed: {
//
        },

		data() {
			return {
				events: this.eventsbyorganizer ? this.eventsbyorganizer : '',
				isModalVisible: false,
				modalDelete:'',
                showMore: '',


			}
		},

        computed: {
            getUrl(event) {
                return this.events.in_progress_events;
            }
        },

		methods: {
			//deletes a ticket row or clears the first one
			deleteRow(index) {
				axios.delete(`/events/${this.modalDelete.slug}`)
	            .then(response => {
	                this.events = response.data;
	                this.modalDelete = '';
	                this.isModalVisible = false;
	            })
	            .catch(errorResponse => { 
	            	errorResponse.response.data.errors 
	            });
			},

			showModal(event) {
				this.modalDelete = event;
			    this.isModalVisible = true;
			},
			closeModal() {
			    this.isModalVisible = false;
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

    };
</script>