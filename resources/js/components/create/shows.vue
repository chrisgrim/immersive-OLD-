<template>
    <div>
       <flat-pickr
            v-model="dates"
            :config="config"                                                  
            class="form-control" 
            placeholder="Select date"               
            name="dates">
    	</flat-pickr>

        Add Your Show Times
        
        <div v-for="time in showTimes">
            <vue-timepicker
            format="hh:mm A"
            close-on-complete
            :minute-interval="5"
            v-model="time.showTime">
            ></vue-timepicker>
        </div>
        <div>
            <button class="btn btn-default" @click.prevent="addShowTimes">Add more show times</button>
        </div>
        <div v-for="ticket in tickets">

            <div class="create-field">
                <label>Ticket Type</label>
                <input 
                type="text" 
                class="create-input"  
                name="name" 
                v-model="ticket.name" 
                placeholder="ex: General Admission, VIP, Student">
            </div>
            
            <div class="create-field">
                <label>Ticket Price</label>
                <input
                class="create-input" 
                v-model="ticket.price"
                v-money="ticket.price !== null ? money : null" 
                v-bind="money"
                placeholder=" "/>    
            </div>

        </div>
        <button class="btn btn-default" @click.prevent="addTickets">Add another ticket type</button>
        
        <button 
        @click.prevent="submitDates()" 
        class="create"> 
            Next 
        </button> 
    </div>
</template>

<script>
import format from 'date-fns/format'
import { required } from 'vuelidate/lib/validators'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue'
import {Money} from 'v-money'


export default {
    props: {
        event: {
            type:Object,
        },
    },  

    components: {
      flatPickr, VueTimepicker, Money
    },

    computed: {
        dateArray() {
        	// return this.dates.length > 10 ? this.dates.split(",") : '';
        	if(!Array.isArray(this.dates) && this.dates.includes(",")) {
        		return this.dates.split(",");
        	} else {
        		return ''
        	}
        },
    },

    data() {
        return {
            eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
            dates: '',

            showTimes: [
                { hh: "00", mm: "00", A: "PM", },
            ],
        // Get more form https://chmln.github.io/flatpickr/options/
	        config: {
				minDate: "today",
				mode: "multiple",
				inline: true,
				showMonths: 2,
				dateFormat: 'Y-m-d H:i:s',        
	        },
            tickets: [
                { name: '', price: '0' },
            ],
            money: {
                decimal: '.',
                thousands: '.',
                prefix: '$',
                suffix: '',
                precision: 2,
                masked: false
            },

        }
    },

    methods: {

        addShowTimes() {
            this.showTimes.push({
                showTime: {
                    hh: "00",
                    mm: "00",
                    A: "PM",
                },
            });
        },

        addTickets() {
            this.tickets.push({});
        },

    	getRedis() {
    		axios.get(`${this.eventUrl}/shows/gettmp`)
    		.then(response => {
                console.log(response.data);
    			this.dates = response.data;
    			this.dates == '' ? this.getDatabase() : console.log('no date');
            });
    	},

    	getDatabase() {
    		axios.get(`${this.eventUrl}/shows/loadshows`)
    		.then(response => {
    			this.dates = response.data;
            });
    	},

        async submitDates() {

   //       	this.$v.$touch();
			// if (this.$v.$invalid) { return false }

			axios.post(`${this.eventUrl}/shows/tmp`, this.dateArray);

            let data = {
                'dates': this.dateArray,
                'showtimes': this.showTimes,
                'tickets': this.tickets
            };
            console.log(data);
            axios.post(`${this.eventUrl}/shows`, data)
            .then(response => {
                   console.log('submitted');
            })
            .catch(errorResponse => { 
                   console.log('error');
            });
        },

    },

    watch: {
		dates: function() {
		  	axios.post(`${this.eventUrl}/shows/tmp`, this.dateArray);
		}
	},

    mounted() {
    	this.getRedis();
    },

    validations: {
		selectedValue: {
			required,
		},
	},
}  
</script>