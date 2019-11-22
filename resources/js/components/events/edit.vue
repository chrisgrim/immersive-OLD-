<template>
	<div>
		<h2>Our Latest Events</h2>
		<div id="app">
			<div class="edit-events">
				<div>
					<button class="create" @click.prevent="createEvent">New Event</button>
				</div>
				<div :key="event.id" v-for="(event,index) in events">
					<button @click.prevent="showModal(event)" class="delete-circle">X</button>
	            	<edit-listing :event="event"></edit-listing>
	            </div> 
	            <modal v-show="isModalVisible" @close="closeModal">
				    	<div slot="header">Ready to Delete?</div>
				    	<div slot="body"> Are you sure you want to delete event {{modalDelete.name}}</div>
						<div slot="footer">
						<button @click="deleteRow()">Yes</button></div>
				</modal>
			</div>
		</div>
    </div>
</template>

<script>

	export default {

        props: {
	        loadevents: {
	            type:Array,
	        },
	    },

		data() {
			return {
				events: this.loadevents ? this.loadevents : '',
				isModalVisible: false,
				modalDelete:'',
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

			createEvent() {
				let data = { type: 'axios' };
				axios.post(`/events`, data)
				.then(response => { 
					window.location.href = `/create-event/${response.data.slug}/organizer`; 
				})
            	.catch(error => { this.serverErrors = error.response.data.errors; });
			}


		}
    };
</script>