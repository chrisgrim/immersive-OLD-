<template>
	<div>
		<h2>Our Latest Events in {{this.location}}</h2>
		<div>
			<flat-pickr
                v-model="dates"
                :config="config"                                                  
                placeholder="Select date"               
                name="dates">
            </flat-pickr>
		</div>
		<div id="app">
			<div id="grid-section">
                <div v-for="event in events">
                    <event-listing-item :event="event"></event-listing-item>
                </div>
            </div>
            
		</div>
    </div>
</template>

<script>
	import _ from 'lodash';
    import Multiselect from 'vue-multiselect';
	import flatPickr from 'vue-flatpickr-component'
	import 'flatpickr/dist/flatpickr.css'
    import { mapGetters } from 'vuex'


	export default {


		components: {
            Multiselect, flatPickr
        },

        name: "userSearchRequest",

        computed: {
            ...mapGetters([
                'events'
            ]),
            ...mapGetters([
                'userSearchRequest'
            ]),
            location: function() {
            	return this.$store.state.userSearchRequest.name;
            }
        },

        props: {
	        searchedevents: {
	            type:Object,
	        },
	    },  

        name: "searchEvents",

		data() {
			return {
				value: '',
      			list: [],
      			price: '',
      			eventName: '',
      			searchObject: this.initializeSearchObject(),
      			dates: '',
		        config: {
					minDate: "today",
					mode: "range",
					inline: false,
					showMonths: 2,
					dateFormat: 'Y-m-d H:i:s',        
		        },
				visibility: 'visible',

			}
		},

		methods: {

			initializeSearchObject() {
	            return {
	                latitude: '',
	                longitude: '',
	            }
	        },
		
			updateFilter() {
				this.$store.dispatch('searchEvents', this.searchedevents);
				this.$store.dispatch('userSearchRequest', this.searchedevents);
			},
			

		},

		mounted() {
			//uses the laravel returned session to filter through events.
			this.updateFilter();

		}


    };
</script>