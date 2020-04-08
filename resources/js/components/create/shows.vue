<template>
    <div class="shows">
        <div class="listing-details-block">
            <tabs @current="selectTab">
                <tab id="s" title="Specific Show Dates" :active="event.showtype == 's'" class="tab-events">
                    <div class="section">
                        <div class="pricing">
                            <div class="field">
                                <label> Show Times</label>
                                <textarea 
                                v-model="showTimes"
                                class="create-input area"
                                :class="{ active: activeItem == 'times','error': $v.showTimes.$error }"
                                rows="8" 
                                :placeholder="placeholder" 
                                required
                                @click="activeItem = 'times'"
                                @blur="activeItem = null"
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
                                            :class="{ active: activeItem == 'ticket','error': v.name.$error }"
                                            @click="activeItem = 'ticket'"
                                            @blur="activeItem = null"
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
                                            @click="activeItem = 'price'"
                                            @blur="activeItem = null"
                                            placeholder="$0.00"
                                            v-bind="money"
                                            :class="{ active: activeItem == 'price','error': v.ticket_price.$error && num }"
                                            @keydown="$event.key === '-' ? $event.preventDefault() : null"
                                            style="text-align: right" 
                                            />
                                            <div v-if="v.ticket_price.$error" class="validation-error">
                                                <p class="error" v-show="num" v-if="!v.ticket_price.minValue">Please enter an amount</p>
                                                <p class="error" v-if="!v.ticket_price.maxLength">Please enter an amount under $10,000</p>
                                                <p class="error" v-if="!v.ticket_price.required">Please enter a price</p>
                                            </div>
                                            <button v-if="tickets.length > 1" @click.prevent="deleteRow(index)" class="delete-circle">X</button>
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
                                    ref="datePicker"                                              
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
                </tab>
                <tab id="o" title="On-Going Shows" :active="event.showtype == 'o'" class="tab-events">
                    <div class="section">
                        <div class="pricing">
                            <div class="field">
                                <label> Show Times</label>
                                <textarea 
                                v-model="showTimes" 
                                class="create-input area"
                                :class="{ active: activeItem == 'times','error': $v.showTimes.$error }"
                                rows="8" 
                                :placeholder="placeholder" 
                                required
                                @click="activeItem = 'times'"
                                @blur="activeItem = null"
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
                                            :class="{ active: activeItem == 'ticket','error': v.name.$error }"
                                            @click="activeItem = 'ticket'"
                                            @blur="activeItem = null"
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
                                            @click="activeItem = 'price'"
                                            @blur="activeItem = null"
                                            placeholder="$0.00"
                                            v-bind="money"
                                            :class="{ active: activeItem == 'price','error': v.ticket_price.$error && num }"
                                            @keydown="$event.key === '-' ? $event.preventDefault() : null"
                                            style="text-align: right" 
                                            />
                                            <div v-if="v.ticket_price.$error" class="validation-error">
                                                <p class="error" v-show="num" v-if="!v.ticket_price.minValue">Please enter an amount</p>
                                                <p class="error" v-if="!v.ticket_price.maxLength">Please enter an amount under $10,000</p>
                                                <p class="error" v-if="!v.ticket_price.required">Please enter a price</p>
                                            </div>
                                            <button v-if="tickets.length > 1" @click.prevent="deleteRow(index)" class="delete-circle">X</button>
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
                                <label> Select show days</label>
                                <div class="week-calendar">
                                    <div 
                                    class="day" 
                                    :class="{ active: week.mon }" 
                                    @click="addWeekDay('mon')">
                                        <h4>Mon</h4>
                                    </div>
                                    <div 
                                    class="day"
                                    :class="{ active: week.tue }" 
                                    @click="addWeekDay('tue')">
                                        <h4>Tue</h4>
                                    </div>
                                    <div 
                                    class="day" 
                                    :class="{ active: week.wed }" 
                                    @click="addWeekDay('wed')">
                                        <h4>Wed</h4>
                                    </div>
                                    <div 
                                    class="day" 
                                    :class="{ active: week.thu }" 
                                    @click="addWeekDay('thu')">
                                        <h4>Thu</h4>
                                    </div>
                                    <div 
                                    class="day"
                                    :class="{ active: week.fri }" 
                                    @click="addWeekDay('fri')">
                                        <h4>Fri</h4>
                                    </div>
                                    <div 
                                    class="day"
                                    :class="{ active: week.sat }"
                                    @click="addWeekDay('sat')">
                                        <h4>Sat</h4>
                                    </div>
                                    <div 
                                    class="day"
                                    :class="{ active: week.sun }"
                                    @click="addWeekDay('sun')">
                                        <h4>Sun</h4>
                                    </div>
                                </div>
                                <div v-if="$v.week.$error" class="validation-error">
                                    <p class="error" v-if="!$v.week.ifOngoing">Please select at least one day</p>
                                </div>
                            </div>
                            <button :disabled="dis" @click.prevent="submitOnGoing()" class="create"> Next </button> 
                        </div>
                    </div>
                </tab>
                <tab id="a" title="All Times" :active="event.showtype == 'a'" class="tab-events">
                    <div class="section">
                        <div class="pricing">
                            <div class="field">
                                <label> Show Times</label>
                                <textarea 
                                v-model="showTimes" 
                                class="create-input area"
                                :class="{ active: activeItem == 'times','error': $v.showTimes.$error }"
                                rows="8" 
                                :placeholder="placeholder" 
                                required
                                @click="activeItem = 'times'"
                                @blur="activeItem = null"
                                @input="$v.showTimes.$touch"
                                autofocus>
                                </textarea>
                                <div v-if="$v.showTimes.$error" class="validation-error">
                                    <p class="error" v-if="!$v.showTimes.required">Please give a brief description of show times</p>
                                </div>
                            </div>
                        </div>
                        <div class="calendar">
                            <div class="field cost">
                                <label class="area"> Ticket types and prices </label>
                                <div class="ticket-box">
                                    <div v-for="(v, index) in $v.tickets.$each.$iter" class="ticket-box-grid">
                                        <div class="field">
                                            <label>Ticket Type</label>
                                            <input 
                                            class="create-input"  
                                            name="name"
                                            :class="{ active: activeItem == 'ticket','error': v.name.$error }"
                                            @click="activeItem = 'ticket'"
                                            @blur="activeItem = null"
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
                                            @click="activeItem = 'price'"
                                            @blur="activeItem = null"
                                            placeholder="$0.00"
                                            v-bind="money"
                                            :class="{ active: activeItem == 'price','error': v.ticket_price.$error && num }"
                                            @keydown="$event.key === '-' ? $event.preventDefault() : null"
                                            style="text-align: right" 
                                            />
                                            <div v-if="v.ticket_price.$error" class="validation-error">
                                                <p class="error" v-show="num" v-if="!v.ticket_price.minValue">Please enter an amount</p>
                                                <p class="error" v-if="!v.ticket_price.maxLength">Please enter an amount under $10,000</p>
                                                <p class="error" v-if="!v.ticket_price.required">Please enter a price</p>
                                            </div>
                                            <button v-if="tickets.length > 1" @click.prevent="deleteRow(index)" class="delete-circle">X</button>
                                        </div>
                                    </div>
                                </div>
                                 <div class="add-button" @click.prevent="addTickets">
                                    <button class="add-button">&#43; Ticket Types</button>
                                </div>
                            </div>
                            <button :disabled="dis" @click.prevent="submitAlways()" class="create"> Next </button> 
                        </div>
                    </div>
                </tab>
            </tabs>
        </div>
        <modal v-if="isVisible" @close="isVisible = false">
            <div slot="header">
                <div class="circle del">
                    <p>?</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>You are submitting a free ticket price or forgot to add a price</h3>
                <p>We just want to double check this is correct.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="onFree()">It is</button>
            </div>
        </modal>
        <div class="inNav">
            <button :disabled="dis" class="create" @click.prevent="goBack()"> Back </button>
            <button v-show="selectedTab == 's'" :disabled="dis" class="create" @click.prevent="submitDates()"> Next </button>
            <button v-show="selectedTab == 'o'" :disabled="dis" class="create" @click.prevent="submitOnGoing()"> Next </button>
            <button v-show="selectedTab == 'a'" :disabled="dis" class="create" @click.prevent="submitAlways()"> Next </button>
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
            selectedTab: this.event.showtype !== null ? this.event.showtype : 's',
            dates: '',
	        config: {
				minDate: "today",
                maxDate: new Date().fp_incr(180),
				mode: "multiple",
				inline: true,
				showMonths: 2,
				dateFormat: 'Y-m-d H:i:s',        
	        },
            week: this.initializeWeekObject(),
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
            activeItem: null,
            isVisible: false,
            free: false,
            placeholder: 'Please provide a brief description of daily show times...' + '\n' + '\n' + '10:00PM shows during the week ' + '\n' + '12:00PM shows during the weekend'
        }
    },

    methods: {

        //deletes a ticket row or clears the first one
        deleteRow(index) {
            this.$delete(this.tickets, index) ;
        },

        selectTab(value) {
            this.selectedTab = value;
        },

        onFree() {
            this.free = true;
            this.isVisible = false;
        },

        initializeShowtimeObject() {
            return {
                hh: "00",
                mm: "00",
                A: "PM",
            }
        },

        initializeWeekObject() {
            return {
                mon: false,
                tue: false,
                wed: false,
                thu: false,
                fri: false,
                sat: false,
                sun: false,
            }
        },

        addWeekDay(day) {
            this.week[day] = !this.week[day];
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
    	load() {
    		axios.get(`${this.eventUrl}/shows/fetch?timestamp=${new Date().getTime()}`)
    		.then(response => {
                console.log(response.data);
                if(response.data.dates) {
                    this.dates = response.data.dates;
                }
                if (response.data.week) {
                    this.week = response.data.week;
                }
                response.data.tickets ? this.tickets = response.data.tickets[0].tickets : '';
                response.data.showTimes ? this.showTimes = response.data.showTimes : '';

            });
    	},

        goBack() {
            window.location.href = `${this.eventUrl}/category`;
        },

        checkFree() {
            this.tickets.map(value => {
                if (value.ticket_price == 0)  {return this.isVisible = true};
            });
        },

        submitAlways() {
            this.week = {mon: true, tue: true, wed: true, thu: true, fri: true, sat: true, sun: true };
            this.$v.$touch();
            if (this.$v.$invalid) { return false };
            this.free ? '' : this.checkFree(); 
            if (this.isVisible) { return false };
            this.dis = true;
            let data = {
                'week': this.week,
                'showtimes': this.showTimes,
                'tickets': this.tickets,
                'onGoing' : true,
                'always': true,
            };
            axios.post(`${this.eventUrl}/shows`, data)
            .then(response => {
                console.log(response.data)
                window.location.href = `${this.eventUrl}/description`; 
            })
            .catch(error => {
                console.log(error.response.data)
            });
        },

        submitOnGoing() {
            this.$v.$touch();
            if (this.$v.$invalid) { return false }
            this.free ? '' : this.checkFree(); 
            if (this.isVisible) { return false };
            this.dis = true;
            let data = {
                'week': this.week,
                'showtimes': this.showTimes,
                'tickets': this.tickets,
                'onGoing': true
            };
            axios.post(`${this.eventUrl}/shows`, data)
            .then(response => {
                console.log(response.data)
                window.location.href = `${this.eventUrl}/description`; 
            })
            .catch(error => {
                console.log(error.response.data)
            });
        },

        //Submits the users dates and tickets to the database
        submitDates() {
            this.num = true;
         	this.$v.$touch();
			if (this.$v.$invalid) { return false }
            this.free ? '' : this.checkFree(); 
            if (this.isVisible) { return false };
            this.dis = true;
            let data = {
                'dates': this.dateArray,
                'showtimes': this.showTimes,
                'tickets': this.tickets,
                'shows': true
            };

            axios.post(`${this.eventUrl}/shows`, data)
            .then(response => {
                console.log(response.data)
                window.location.href = `${this.eventUrl}/description`; 
            });
        },
    },

    mounted() {
    	this.load();
        setTimeout(() => this.$refs.datePicker.fp.jumpToDate(new Date()), 100);
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
                    minValue: minValue(0.00),
                    maxLength: maxLength(7),
                },
            }
        },
        showTimes: {
            required,
            maxLength: maxLength(400)
        },
        dates: {
            ifDates() { 
                return this.selectedTab == 's' ? this.dates.length ? true : false : true
            },
        },
        week: {
            ifOngoing() {
                return this.selectedTab == 'o' || this.selectedTab == 'a' ? this.week.mon == 1 || this.week.tue == 1 || this.week.wed == 1 || this.week.thu == 1 || this.week.fri == 1 || this.week.sat == 1 || this.week.sun == 1  ? true : false : true
            }
        }
	},
}  
</script>