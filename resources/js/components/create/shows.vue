<template>
    <div>
       <flat-pickr
            v-model="dates"
            :config="config"                                                  
            class="form-control" 
            placeholder="Select date"               
            name="dates">
    	</flat-pickr>

        
        <div class="show-box">
            <div class="create-field">
                <label>Show Times</label>
            </div>
            <div class="show-box-grid">
                <div v-for="time in showTimes" >
                    <vue-timepicker
                    format="hh:mm A"
                    close-on-complete
                    :minute-interval="5"
                    v-model="time.showTime">
                    ></vue-timepicker>
                </div>
            </div>
        </div>
        <div>
            <button class="add-button" @click.prevent="addShowTimes"> &#43; Show Times</button>
        </div>
        <div v-for="ticket in tickets" class="ticket-box">
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
                v-model="ticket.ticket_price"
                v-money="ticket.ticket_price !== null ? money : null" 
                v-bind="money"
                placeholder=" "/>    
            </div>
        </div>
        <div>
            <button class="add-button" @click.prevent="addTickets">&#43; Ticket Types</button>
        </div>
        <button @click.prevent="test()" >Test</button>
        
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
        quickSave() {
            return {
                'dates': this.dateArray,
                'tickets': this.tickets,
                'showTimes': this.showTimes
            };
        },
    },

    data() {
        return {
            eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
            dates: new Date(),
        // Get more form https://chmln.github.io/flatpickr/options/
	        config: {
				minDate: "today",
				mode: "multiple",
				inline: true,
				showMonths: 2,
				dateFormat: 'Y-m-d H:i:s',        
	        },
            tickets: [this.initializeTicketObject()],
            showTimes: [this.initializeShowtimeObject()],
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
            axios.post(`${this.eventUrl}/shows/tmp`, this.quickSave);
        },

        initializeShowtimeObject() {
            return {
                hh: "00",
                mm: "00",
                A: "PM",
            }
        },

        initializeTicketObject() {
            return {
                id: '',
                name: '',
                show_id: '',
                ticket_amount: '',
                ticket_price: '',
            }
        },

        addTickets() {
            this.tickets.push(this.initializeTicketObject());
            axios.post(`${this.eventUrl}/shows/tmp`, this.quickSave);
        },

    	getRedis() {
    		axios.get(`${this.eventUrl}/shows/gettmp`)
    		.then(response => {
                console.log(response.data);
                if (response.data.dates) {
                    this.dates = response.data.dates;
                    response.data.showTimes ? this.showTimes = response.data.showTimes : '';
                    response.data.tickets ? this.tickets = response.data.tickets : '';
                } else {
                    this.getDatabase();
                };
            });
    	},

    	getDatabase() {

    		axios.get(`${this.eventUrl}/shows/loadshows`)
    		.then(response => {
                response.data.dates.length ? this.dates = response.data.dates : '';
                response.data.tickets.length ? this.tickets = response.data.tickets[0].tickets : '';
                // response.data.tickets !== '' ? this.tickets = response.data.tickets[0].tickets : '';
    			// response.data ? this.dates = response.data : '';
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
		  	axios.post(`${this.eventUrl}/shows/tmp`, this.quickSave);
		},
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