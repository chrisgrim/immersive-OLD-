<template>
	<div>
        <a :href="'/create-event/'+ this.event.slug +'/location'">
        <div class="checklist-section" >
            Location 
                <svg class="checkbox" v-if="event.location_id" viewBox="0 0 42 42"><path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path></svg>
        </div>
        </a>
        <a :href="'/create-event/'+ this.event.slug +'/category'">
        <div class="checklist-section">
            Category
            <svg class="checkbox" v-if="event.category_id" viewBox="0 0 42 42"><path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path></svg>
        </div>
        </a>

        <a :href="'/create-event/'+ this.event.slug +'/organizer'">
        <div class="checklist-section">
            Who is Putting it On?
            <svg class="checkbox" v-if="event.organizer_id" viewBox="0 0 42 42"><path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path></svg>
        </div>
        </a>

        <a :href="'/create-event/'+ this.event.slug +'/shows'">
        <div class="checklist-section">
            Dates and Tickets
            <svg class="checkbox" v-if="event.show_times" viewBox="0 0 42 42"><path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path></svg>
        </div>
        </a>

        <a :href="'/create-event/'+ this.event.slug +'/description'">
        <div class="checklist-section">
            Event Description
            <svg class="checkbox" v-if="event.description" viewBox="0 0 42 42"><path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path></svg>
        </div>
        </a>

        <a :href="'/create-event/'+ this.event.slug +'/expect'">
        <div class="checklist-section">
            What Guests should expect
            <svg class="checkbox" v-if="event.expectation_id" viewBox="0 0 42 42"><path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path></svg>
        </div>
        </a>

        <a :href="'/create-event/'+ this.event.slug +'/title'">
        <div class="checklist-section">
            Title
            <svg class="checkbox" v-if="event.name" viewBox="0 0 42 42"><path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path></svg>
        </div>
        </a>

        <a :href="'/create-event/'+ this.event.slug +'/images'">
        <div class="checklist-section">
            Photo
            <svg class="checkbox" viewBox="0 0 42 42"><path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path></svg>
        </div>
        </a>

        
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'

	export default {
		props: {
			event: {
				type:Object
			},
		},
    }

</script>