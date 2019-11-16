<template>
	<div>
		<h2>Our Latest Events</h2>
		<div id="app">
			<div>
				<div>
					{{event.id}}
				</div>
			</div> 
		</div>
    </div>
</template>

<script>

	export default {

        props: {
	        loadevent: {
	            type:Object,
	        },
	    },

		data() {
			return {
				event: this.loadevent ? this.loadevent : '',
				isModalVisible: false,
			}
		},

		methods: {
			//deletes a ticket row or clears the first one

		}
    };
</script>