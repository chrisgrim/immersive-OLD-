<template>
    <div class="event-create__shows">
        <section class="">
            <div class="listing-details-block">
                <div class="title">
                    <h2>Dates and Times</h2>
                </div>
                <div class="show-type-selection">
                    <div class="field">
                        <label class="area">Select the type of operating hours</label>
                        <multiselect 
                        v-model="showType" 
                        :show-labels="false"
                        :options="showTypeOptions"
                        :class="{ active: active == 'type','error': $v.$error }"
                        placeholder="Show hours type" 
                        open-direction="bottom"
                        :allowEmpty = "false"
                        @select="dates = []"
                        @click="active = 'type'"
                        @blur="active = null">
                        </multiselect>
                    </div>
                </div>
                
                <!-- Specific Dates -->
                <div v-show="showType == 'Specific Dates'" class="specific-show-dates">
                    <section class="event-enter-showdates">
                        <div class="field">
                            <label> Select all show dates</label>
                            <div class="calendar desktop">
                                <flat-pickr
                                    v-model="dates"
                                    :config="calendarConfig"
                                    ref="datePicker"                                              
                                    class="form-control"
                                    placeholder="Select date"               
                                    name="dates">
                                </flat-pickr>
                            </div>
                            <div class="calendar mobile">
                                <flat-pickr
                                    v-model="dates"
                                    :config="mobileCalendarConfig"
                                    ref="datePicker"                                              
                                    class="form-control"
                                    placeholder="Select date"               
                                    name="dates">
                                </flat-pickr>
                            </div>
                            <div v-if="$v.dates.$error" class="validation-error">
                                <p class="error" v-if="!$v.dates.required">Please add at least 1 show date</p>
                            </div>
                        </div>
                    </section>
                    <section class="event-enter-showtimes">
                        <div class="field">
                            <label> Show Times (please include time zone)</label>
                            <textarea 
                            v-model="showTimes"
                            class="create-input area"
                            :class="{ active: active == 'times','error': $v.showTimes.$error }"
                            rows="8" 
                            :placeholder="placeholders" 
                            required
                            @click="active = 'times'"
                            @blur="active = null"
                            @input="$v.showTimes.$touch"
                            autofocus>
                            </textarea>
                            <div v-if="$v.showTimes.$error" class="validation-error">
                                <p class="error" v-if="!$v.showTimes.required">Please give a brief description of show times</p>
                            </div>
                        </div>
                    </section>
                    <section class="ticket-section">
                        <div class="field cost">
                            <label class="area"> Ticket types and prices </label>
                            <div class="create-shows__ticket-box">
                                <div v-for="(v, index) in $v.tickets.$each.$iter" class="ticket-box__element grid">
                                    <div class="field">
                                        <label>Ticket Type</label>
                                        <input 
                                        class="create-input"  
                                        name="name"
                                        :class="{ active: active == 'ticket','error': v.name.$error }"
                                        @click="active = 'ticket'"
                                        @blur="active = null"
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
                                        @click="active = 'price'"
                                        @blur="active = null"
                                        placeholder="$0.00"
                                        v-bind="money"
                                        :class="{ active: active == 'price','error': v.ticket_price.$error }"
                                        @keydown="$event.key === '-' ? $event.preventDefault() : null"
                                        style="text-align: right" 
                                        />
                                        <div v-if="v.ticket_price.$error" class="validation-error">
                                            <p class="error" v-if="!v.ticket_price.minValue">Please enter an amount</p>
                                            <p class="error" v-if="!v.ticket_price.maxLength">Please enter an amount under $10,000</p>
                                            <p class="error" v-if="!v.ticket_price.required">Please enter a price</p>
                                        </div>
                                        <button v-if="tickets.length > 1" @click.prevent="deleteRow(index)" class="delete-circle">X</button>
                                    </div>
                                </div>
                            </div>
                             <div class="ticket-box__add-button" @click.prevent="addTickets">
                                <button>&#43; Ticket Types</button>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="field">
                            <label> Does the event have a specific embargo date? (date you would like it to appear on EI) </label>
                            <div id="cover">
                                <input v-model="showEmbargoDate" type="checkbox" id="checkbox">
                                <div id="bar"></div>
                                <div id="knob">
                                    <p v-if="showEmbargoDate">Yes</p>
                                    <p v-else="showEmbargoDate">No</p>
                                </div>
                            </div>
                            <div v-if="showEmbargoDate">
                                <div class="embargo-calendar">
                                    <flat-pickr
                                        v-model="embargoDate"
                                        :config="embargoCalendarConfig"
                                        ref="datePicker"                                              
                                        class="form-control"
                                        placeholder="Select date"               
                                        name="dates">
                                    </flat-pickr>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
           
                <!-- Weekly Dates -->
                <div v-show="showType == 'Weekly'" class="ongoing-show-dates">
                    <section class="event-enter-showdates">
                        <div class="field">
                            <label> Select show days</label>
                            <div class="week-calendar grid">
                                <div 
                                class="week-calendar__day" 
                                :class="{ active: week.mon }" 
                                @click="addWeekDay('mon')">
                                    <h4>Mon</h4>
                                </div>
                                <div 
                                class="week-calendar__day"
                                :class="{ active: week.tue }" 
                                @click="addWeekDay('tue')">
                                    <h4>Tue</h4>
                                </div>
                                <div 
                                class="week-calendar__day" 
                                :class="{ active: week.wed }" 
                                @click="addWeekDay('wed')">
                                    <h4>Wed</h4>
                                </div>
                                <div 
                                class="week-calendar__day" 
                                :class="{ active: week.thu }" 
                                @click="addWeekDay('thu')">
                                    <h4>Thu</h4>
                                </div>
                                <div 
                                class="week-calendar__day"
                                :class="{ active: week.fri }" 
                                @click="addWeekDay('fri')">
                                    <h4>Fri</h4>
                                </div>
                                <div 
                                class="week-calendar__day"
                                :class="{ active: week.sat }"
                                @click="addWeekDay('sat')">
                                    <h4>Sat</h4>
                                </div>
                                <div 
                                class="week-calendar__day"
                                :class="{ active: week.sun }"
                                @click="addWeekDay('sun')">
                                    <h4>Sun</h4>
                                </div>
                            </div>
                            <div v-if="$v.week.$error" class="validation-error">
                                <p class="error" v-if="!$v.week.ifWeekly">Please select at least one day</p>
                            </div>
                        </div>
                    </section>
                    <section class="event-enter-showtimes">
                        <div class="field">
                            <label> Show Times (please include time zone)</label>
                            <textarea 
                            v-model="showTimes" 
                            class="create-input area"
                            :class="{ active: active == 'times','error': $v.showTimes.$error }"
                            rows="8" 
                            :placeholder="placeholdero" 
                            required
                            @click="active = 'times'"
                            @blur="active = null"
                            @input="$v.showTimes.$touch"
                            autofocus>
                            </textarea>
                            <div v-if="$v.showTimes.$error" class="validation-error">
                                <p class="error" v-if="!$v.showTimes.required">Please give a brief description of show times</p>
                            </div>
                        </div>
                    </section>
                    <section class="ticket-section">
                        <div class="field cost">
                            <label class="area"> Ticket types and prices </label>
                            <div class="create-shows__ticket-box">
                                <div v-for="(v, index) in $v.tickets.$each.$iter" class="ticket-box__element grid">
                                    <div class="field">
                                        <label>Ticket Type</label>
                                        <input 
                                        class="create-input"  
                                        name="name"
                                        :class="{ active: active == 'ticket','error': v.name.$error }"
                                        @click="active = 'ticket'"
                                        @blur="active = null"
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
                                        @click="active = 'price'"
                                        @blur="active = null"
                                        placeholder="$0.00"
                                        v-bind="money"
                                        :class="{ active: active == 'price','error': v.ticket_price.$error }"
                                        @keydown="$event.key === '-' ? $event.preventDefault() : null"
                                        style="text-align: right" 
                                        />
                                        <div v-if="v.ticket_price.$error" class="validation-error">
                                            <p class="error" v-if="!v.ticket_price.minValue">Please enter an amount</p>
                                            <p class="error" v-if="!v.ticket_price.maxLength">Please enter an amount under $10,000</p>
                                            <p class="error" v-if="!v.ticket_price.required">Please enter a price</p>
                                        </div>
                                        <button v-if="tickets.length > 1" @click.prevent="deleteRow(index)" class="delete-circle">X</button>
                                    </div>
                                </div>
                            </div>
                             <div class="ticket-box__add-button" @click.prevent="addTickets">
                                <button>&#43; Ticket Types</button>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="field">
                            <label> Does the event have a specific embargo date? (date you would like it to appear on EI) </label>
                            <div id="cover">
                                <input v-model="showEmbargoDate" type="checkbox" id="checkbox">
                                <div id="bar"></div>
                                <div id="knob">
                                    <p v-if="showEmbargoDate">Yes</p>
                                    <p v-else="showEmbargoDate">No</p>
                                </div>
                            </div>
                            <div v-if="showEmbargoDate">
                                <div class="embargo-calendar">
                                    <flat-pickr
                                        v-model="embargoDate"
                                        :config="embargoCalendarConfig"
                                        ref="datePicker"                                              
                                        class="form-control"
                                        placeholder="Select date"               
                                        name="dates">
                                    </flat-pickr>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                
                <div v-show="showType == 'Anytime'" class="everyday-show-dates">
                    <section class="event-enter-showtimes">
                        <div class="field">
                            <label> Show Times (please include time zone)</label>
                            <textarea 
                            v-model="showTimes" 
                            class="create-input area"
                            :class="{ active: active == 'times','error': $v.showTimes.$error }"
                            rows="8" 
                            :placeholder="placeholdera" 
                            required
                            @click="active = 'times'"
                            @blur="active = null"
                            @input="$v.showTimes.$touch"
                            autofocus>
                            </textarea>
                            <div v-if="$v.showTimes.$error" class="validation-error">
                                <p class="error" v-if="!$v.showTimes.required">Please give a brief description of show times</p>
                            </div>
                        </div>
                    </section>
                    <section class="event-enter-showdates">
                        <div class="field cost">
                            <label class="area"> Ticket types and prices </label>
                            <div class="create-shows__ticket-box">
                                <div v-for="(v, index) in $v.tickets.$each.$iter" class="ticket-box__element grid">
                                    <div class="field">
                                        <label>Ticket Type</label>
                                        <input 
                                        class="create-input"  
                                        name="name"
                                        :class="{ active: active == 'ticket','error': v.name.$error }"
                                        @click="active = 'ticket'"
                                        @blur="active = null"
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
                                        @click="active = 'price'"
                                        @blur="active = null"
                                        placeholder="$0.00"
                                        v-bind="money"
                                        :class="{ active: active == 'price','error': v.ticket_price.$error }"
                                        @keydown="$event.key === '-' ? $event.preventDefault() : null"
                                        style="text-align: right" 
                                        />
                                        <div v-if="v.ticket_price.$error" class="validation-error">
                                            <p class="error" v-if="!v.ticket_price.minValue">Please enter an amount</p>
                                            <p class="error" v-if="!v.ticket_price.maxLength">Please enter an amount under $10,000</p>
                                            <p class="error" v-if="!v.ticket_price.required">Please enter a price</p>
                                        </div>
                                        <button v-if="tickets.length > 1" @click.prevent="deleteRow(index)" class="delete-circle">X</button>
                                    </div>
                                </div>
                            </div>
                             <div class="ticket-box__add-button" @click.prevent="addTickets">
                                <button>&#43; Ticket Types</button>
                            </div>
                        </div>
                        <div class="field" style="margin-top:6rem">
                            <label> Does the event have a specific embargo date? (date you would like it to appear on EI) </label>
                            <div id="cover">
                                <input v-model="showEmbargoDate" type="checkbox" id="checkbox">
                                <div id="bar"></div>
                                <div id="knob">
                                    <p v-if="showEmbargoDate">Yes</p>
                                    <p v-else="showEmbargoDate">No</p>
                                </div>
                            </div>
                            <div v-if="showEmbargoDate">
                                <div class="embargo-calendar">
                                    <flat-pickr
                                        v-model="embargoDate"
                                        :config="embargoCalendarConfig"
                                        ref="datePicker"                                              
                                        class="form-control"
                                        placeholder="Select date"               
                                        name="dates">
                                    </flat-pickr>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </section>

        <modal v-if="modal" @close="noFreeTicket">
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
                <button class="btn del" @click.prevent="onFreeTicket()">It is</button>
            </div>
        </modal>
        
         <div class="event-create__submit-button">
            <button :disabled="disabled" @click.prevent="onSubmit('exit')" class="nav-back-button"> Save and Exit </button>
        </div>
        <div class="create-button__back">
            <button :disabled="disabled" class="create" @click.prevent="onBack('category')"> Back </button>
        </div>
        <div class="create-button__forward">
            <button :disabled="disabled" class="create" @click.prevent="onSubmit()"> Save and continue </button>
        </div>

    </div>
</template>

<script>
    import formValidationMixin from '../../mixins/form-validation-mixin'
    import format from 'date-fns/format'
    import _ from 'lodash'
    import { required, minLength, minValue, maxLength } from 'vuelidate/lib/validators'
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.css'
    import {Money} from 'v-money'
    import Multiselect from 'vue-multiselect'


export default {
    props: ['event'],

    mixins: [formValidationMixin],

    components: { flatPickr, Money, Multiselect},


    computed: {
        endpoint() {
            return `/create-event/${this.event.slug}/shows`
        },

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

        weeklyOngoing() {
            if (this.week.mon == 0) {return true};
            if (this.week.tue == 0) {return true};
            if (this.week.wed == 0) {return true};
            if (this.week.thu == 0) {return true};
            if (this.week.fri == 0) {return true};
            if (this.week.sat == 0) {return true};
            if (this.week.sun == 0) {return true};
            return false;
        },

        submitObject() {
            return {
                'dates': Array.isArray(this.dates) ? this.dates : this.dateArray,
                'showtimes': this.showTimes,
                'tickets': this.tickets,
                'shows': this.showType == 'Specific Dates' ? true : false,
                'embargo_date' : this.showEmbargoDate ? this.embargoDate : null,
                'week': this.week && this.showType == 'Anytime' ? _.mapValues(this.week, () => true) : this.week,
                'onGoing' : this.showType == 'Weekly' && this.weeklyOngoing ? true : false,
                'always': this.showType == 'Anytime' || !this.weeklyOngoing ? true : false,
            }
        },
    },

    data() {
        return {
            eventUrl:`/create-event/${this.event.slug}`,
            showType: this.event.showtype ? this.event.showtype : 's',
            dates: this.event.shows ? this.event.shows.map(a => a.date) : '',
            embargoDate: this.event.embargo_date ? this.event.embargo_date : '',
            showEmbargoDate: this.event.embargo_date ? true : false,
	        calendarConfig: this.initializeCalendarObject(),
            mobileCalendarConfig: this.initializeMobileCalendarObject(),
            embargoCalendarConfig: this.initializeEmbargoCalendarObject(),
            week: this.event.show_on_going ? this.event.show_on_going : this.initializeWeekObject(),
            tickets: this.event.shows.length ? this.event.shows[0].tickets : [this.initializeTicketObject()],
            showTimes: this.event.shows.length ? this.event.show_times : '',
            money: this.initializeMoneyObject(),
            disabled: false,
            active: null,
            modal: false,
            freeTicket: false,
            placeholders: 'Please provide a brief description of show times. For example:' + '\n' + '\n' + '“Doors at 7, Show at 8.”' + '\n' + '“Two shows an hour from 8-10.”',
            placeholdero: 'Please provide a brief description of weekly show times. For example:' + '\n' + '\n' + '10:00PM shows on Monday & Tuesday.' + '\n' + '12:00PM on Wednesday and Thursday.',
            placeholdera: 'Please provide a brief description of daily times. For example:' + '\n' + '\n' + 'Show begins everyday at 12PM.' + '\n' + 'Enjoy at any time.',
            showType: '',
            showTypeOptions: ['Specific Dates', 'Weekly', 'Anytime'],
            exit: false,

        }
    },

    methods: {

        initializeCalendarObject() {
            return {
                // minDate: "today",
                maxDate: new Date().fp_incr(180),
                mode: "multiple",
                inline: true,
                showMonths: 2,
                dateFormat: 'Y-m-d H:i:s',     
            }
        },

        initializeMobileCalendarObject() {
            return {
                // minDate: "today",
                maxDate: new Date().fp_incr(180),
                mode: "multiple",
                inline: true,
                showMonths: 1,
                dateFormat: 'Y-m-d H:i:s',     
            }
        },

        initializeEmbargoCalendarObject() {
            return {
                // minDate: "today",
                maxDate: new Date().fp_incr(180),
                mode: "single",
                inline: true,
                showMonths: 1,
                dateFormat: 'Y-m-d H:i:s',     
            }
        },

        initializeMoneyObject() {
            return {
                decimal: '.',
                thousands: '',
                prefix: '',
                suffix: '',
                precision: 2,
                masked: false  
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

        initializeTicketObject() {
            return {
                id: '',
                name: '',
                show_id: '',
                ticket_amount: '',
                ticket_price: '',
            }
        },

        initializeShowtimeObject() {
            return {
                hh: "00",
                mm: "00",
                A: "PM",
            }
        },

        deleteRow(index) {
            this.$delete(this.tickets, index) ;
        },

        addWeekDay(day) {
            this.week[day] = !this.week[day];
        },

        addTickets() {
            this.tickets.push(this.initializeTicketObject());
        },

        onLoad() {
            if (this.event.showtype == 'a') { return this.showType = 'Anytime'};
            if (this.event.showtype == 'o') { return this.showType = 'Weekly'};
            if (this.event.showtype == 's') { return this.showType = 'Specific Dates'};
            axios.get(this.onFetch('shows'))
            .then(res => {
                res.data.dates ? this.dates = res.data.dates : '';
                res.data.week ? this.week = res.data.week : '';
                res.data.tickets ? this.tickets = res.data.tickets[0].tickets : '';
                res.data.showTimes ? this.showTimes = res.data.showTimes : '';
            });
        },

        checkFreeTicket(value) {
            value == 'exit' ? this.exit = true : false;
            this.tickets.map(value => {
                if (value.ticket_price == 0)  {return this.modal = true};
            });
        },

        onFreeTicket() {
            this.freeTicket = true;
            this.modal = false;
            this.onSubmit();
        },

        noFreeTicket() {
            this.modal = false;
            this.disabled = false;
        },

        onSubmit(value) {
         	if (this.checkVuelidate()) { return false };
            this.checkFreeTicket(value);
            if (this.modal && !this.freeTicket) { return false };

            axios.post(this.endpoint, this.submitObject)
            .then(res => {  
                value == 'exit' || this.exit == true ? this.onBackInitial() : this.onForward('description');
            })
            .catch(err => { this.onErrors(err) });
        },

    },

    mounted() {
    	this.onLoad();
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
                return this.showType == 'Specific Dates' ? this.dates.length ? true : false : true
            },
        },
        week: {
            ifWeekly() {
                return this.showType == 'Weekly' ? this.week.mon == 1 || this.week.tue == 1 || this.week.wed == 1 || this.week.thu == 1 || this.week.fri == 1 || this.week.sat == 1 || this.week.sun == 1  ? true : false : true
            }
        }
	},
}  
</script>