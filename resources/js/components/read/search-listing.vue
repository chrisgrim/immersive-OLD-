<template>
	<div>
		<h2>Our Latest Events in {{this.location}}</h2>
		<div>
			<v-date-picker
            mode="range"
            :columns="2"
            :available-dates='{ start: new Date(), end: null }'
            :masks="masks"
            popoverDirection="bottom"
            :input-props='{
			    placeholder: "Dates",
			    readonly: true
			}'
            v-model='searchDateRange'>
            </v-date-picker>
            <button @click.prevent="openCalendar">Show Hide</button>
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
    import format from 'date-fns/format';
    import { mapGetters } from 'vuex'


	export default {


		components: {
            Multiselect,
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
      			searchDateRange: new Date(),
   				masks: {
					input: ['MMM DD'],
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

			openCalendar() {
		      this.visibility = this.visibility == 'hidden' ? 'visible' : 'hidden';
		    },

		},

		mounted() {
			//uses the laravel returned session to filter through events.
			this.updateFilter();

		}


    };
</script>