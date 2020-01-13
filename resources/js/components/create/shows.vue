<template>
    <div class="shows">
        <div class="ctitle">
            <h2>Shows</h2>
        </div>
        <div class="section">
            <div class="pricing">
                <div class="field">
                    <label class="area"> Show times</label>
                    <textarea 
                    v-model="showTimes" 
                    class="create-input area"
                    :class="{ active: showTimeActive,'error': $v.showTimes.$error }"
                    rows="8" 
                    placeholder="Please provide a brief description of daily show times...8:00PM and 10:00PM shows or 10:00PM shows during the week and 12:00PM during the weekend." 
                    required
                    @click="showTimeActive = true"
                    @blur="showTimeActive = false"
                    @input="$v.showTimes.$touch"
                    autofocus>
                    </textarea>
                    <div v-if="$v.showTimes.$error" class="validation-error">
                        <p class="error" v-if="!$v.showTimes.required">Please give a brief description of show times</p>
                    </div>
                </div>
                <div class="field cost">
                    <label class="area"> Ticket types and prices </label>
                    <div class="ticket-box">
                        <div v-for="(v, index) in $v.tickets.$each.$iter" class="ticket-box-grid">
                            <div class="field">
                                <label>Ticket Type</label>
                                <input 
                                class="create-input"  
                                name="name"
                                :class="{ active: ticketActive,'error': v.name.$error }"
                                @click="ticketActive = true"
                                @blur="ticketActive = false"
                                v-model="v.name.$model" 
                                placeholder="ex: General, VIP, Student"
                                />
                                <div v-if="v.name.$error" class="validation-error">
                                    <p class="error" v-if="!v.name.required">Must enter a ticket name</p>
                                    <p class="error" v-if="!v.name.maxLength">Name is too Long</p>
                                </div>
                            </div>
                            <div class="field">
                                <label>Ticket Price</label>
                                <input 
                                v-model="v.ticket_price.$model"
                                v-money="money"
                                @click="ticketPriceActive = true"
                                @blur="ticketPriceActive = false"
                                placeholder="$0.00"
                                v-bind="money"
                                :class="{ active: ticketPriceActive,'error': v.ticket_price.$error && num }"
                                @keydown="$event.key === '-' ? $event.preventDefault() : null"
                                style="text-align: right" 
                                />
                                <div v-if="v.ticket_price.$error" class="validation-error">
                                    <p class="error" v-show="num" v-if="!v.ticket_price.minValue">Please enter an amount</p>
                                    <p class="error" v-if="!v.ticket_price.maxLength">Please enter an amount under $10,000</p>
                                    <p class="error" v-if="!v.ticket_price.required">Please enter a price</p>
                                </div>
                                <button v-if="index != 0" @click.prevent="deleteRow(index)" class="delete-circle">X</button>
                            </div>
                        </div>
                    </div>
                     <div class="add-button" @click.prevent="addTickets">
                        <button class="add-button">&#43; Ticket Types</button>
                    </div>
                </div>
            </div>
            <div class="calendar">
                <div class="field">
                    <label> Select all show dates</label>
                    <flat-pickr
                        v-model="dates"
                        :config="config"                                                  
                        class="form-control"
                        placeholder="Select date"               
                        name="dates">
                    </flat-pickr>
                    <div v-if="$v.dates.$error" class="validation-error">
                        <p class="error" v-if="!$v.dates.required">Please add at least 1 show date</p>
                    </div>
                </div>
                <button :disabled="dis" @click.prevent="submitDates()" class="create"> Next </button> 
            </div>
        </div>
        <div class="inNav">
            <button :disabled="dis" class="create" @click.prevent="goBack()"> Back </button>
            <button :disabled="dis" class="create" @click.prevent="submitDates()"> Next </button>
        </div>

    </div>
</template>

<script>
import format from 'date-fns/format'
import { required, minLength, minValue, maxLength } from 'vuelidate/lib/validators'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import {Money} from 'v-money'


export default {
    props: {
        event: {
            type:Object,
        },
    },  

    components: {
      flatPickr, Money
    },

    computed: {

        // return this.dates.length > 10 ? this.dates.split(",") : '';
        dateArray() {
        	if(!Array.isArray(this.dates) && this.dates.includes(",")) {
        		return this.dates.split(",");
        	} else {
        		if(!Array.isArray(this.dates)) {
                    return [this.dates];
                } else {
                    ''
                }
        	}
        },
    },

    data() {
        return {
            eventUrl:`/create-event/${this.event.slug}`,
            dates: '',
	        config: {
				minDate: "today",
                maxDate: new Date().fp_incr(180),
				mode: "multiple",
				inline: true,
				showMonths: 2,
				dateFormat: 'Y-m-d H:i:s',        
	        },
            ticketActive: '',
            ticketPriceActive: '',
            showTimeActive: '',
            tickets: [this.initializeTicketObject()],
            showTimes: '',
            money: {
                decimal: '.',
                thousands: '',
                prefix: '',
                suffix: '',
                precision: 2,
                masked: false
            },
            dis: false,
            num: false,
        }
    },

    methods: {

        //deletes a ticket row or clears the first one
        deleteRow(index) {
            index == 0 ? this.clearindex() : this.$delete(this.tickets, index) ;
        },

        //clears the first ticket row if there are no other ones to delete
        clearindex() {
            this.tickets[0].name = '';
            this.tickets[0].ticket_price = '';
        },

        initializeShowtimeObject() {
            return {
                hh: "00",
                mm: "00",
                A: "PM",
            }
        },

        // when user clicks new ticket this creates a new ticket object
        addTickets() {
            this.tickets.push(this.initializeTicketObject());
        },

        //creates a ticket Object
        initializeTicketObject() {
            return {
                id: '',
                name: '',
                show_id: '',
                ticket_amount: '',
                ticket_price: '',
            }
        },

        // If there is data in Database it will load from the database
    	getDatabase() {
    		axios.get(`${this.eventUrl}/shows/loadshows?timestamp=${new Date().getTime()}`)
    		.then(response => {
                console.log(response.data);
                response.data.dates.length ? this.dates = response.data.dates : '';
                response.data.tickets.length ? this.tickets = response.data.tickets[0].tickets : '';
                response.data.showTimes ? this.showTimes = response.data.showTimes : '';
            });
    	},

        goBack() {
            window.location.href = `${this.eventUrl}/category`;
        },

        //Submits the users dates and tickets to the database
        async submitDates() {
            this.num = true;
         	this.$v.$touch();
			if (this.$v.$invalid) { return false }
            this.dis = true;
            let data = {
                'dates': this.dateArray,
                'showtimes': this.showTimes,
                'tickets': this.tickets
            };
            axios.post(`${this.eventUrl}/shows`, data)
            .then(response => {
                // console.log(response.data)
                window.location.href = `${this.eventUrl}/description`; 
            });
        },

    },

    mounted() {
    	this.getDatabase();
    },

    validations: {
        tickets: {
            required,
            $each: {
                name: {
                    required,
                    maxLength: maxLength(80),
                },
                ticket_price: {
                    required,
                    minValue: minValue(0.01),
                    maxLength: maxLength(7),
                },
            }
        },
        showTimes: {
            required,
            maxLength: maxLength(400)
        },
        dates: {
            required,
        },
	},
}  
</script>