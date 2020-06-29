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
                    <section>
                        <div class="field">
                            <label> Show Timezone </label>
                            <multiselect 
                            v-model="timezone" 
                            deselect-label="Can't remove this value" 
                            track-by="name"
                            :class="{ active: active == 'timezone','error': $v.timezone.$error }"
                            @click="active = 'timezone'"
                            @blur="active = null"
                            label="description" 
                            placeholder="Select timezone" 
                            :options="timezones" 
                            :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }">
                                    <strong>{{ option.description }}</strong>
                                </template>
                            </multiselect>
                            <div v-if="$v.timezone.$error" class="validation-error">
                                <p class="error" v-if="!$v.timezone.required">Please include timezone of show</p>
                            </div>
                        </div>
                    </section>
                    <section class="event-enter-showtimes">
                        <div class="field">
                            <label> Show Times</label>
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
                                <p class="error" v-if="!$v.showTimes.maxLength">Show time is too long</p>
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
                        <div v-show="showStartDate" class="field">
                            <label> Select the first day your weekly shows begin</label>
                            <div class="embargo-calendar">
                                <flat-pickr
                                    v-model="startDate"
                                    :config="embargoCalendarConfig"
                                    ref="datePicker"                                              
                                    class="form-control"
                                    placeholder="Select date"               
                                    name="dates">
                                </flat-pickr>
                            </div>
                        </div>
                    </section>
                     <section>
                        <div class="field">
                            <label> Show Timezone </label>
                            <multiselect 
                            v-model="timezone" 
                            deselect-label="Can't remove this value" 
                            track-by="name"
                            :class="{ active: active == 'timezone','error': $v.timezone.$error }"
                            @click="active = 'timezone'"
                            @blur="active = null"
                            label="description" 
                            placeholder="Select timezone" 
                            :options="timezones" 
                            :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }">
                                    <strong>{{ option.description }}</strong>
                                </template>
                            </multiselect>
                            <div v-if="$v.timezone.$error" class="validation-error">
                                <p class="error" v-if="!$v.timezone.required">Please include timezone of show</p>
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
                                <p class="error" v-if="!$v.showTimes.maxLength">Show time is too long</p>
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
                                <p class="error" v-if="!$v.showTimes.maxLength">Show time is too long</p>
                            </div>
                        </div>
                    </section>
                     <section>
                        <div class="field">
                            <label> Show Timezone </label>
                            <multiselect 
                            v-model="timezone" 
                            deselect-label="Can't remove this value" 
                            track-by="name"
                            :class="{ active: active == 'timezone','error': $v.timezone.$error }"
                            @click="active = 'timezone'"
                            @blur="active = null"
                            label="description" 
                            placeholder="Select timezone" 
                            :options="timezones" 
                            :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }">
                                    <strong>{{ option.description }}</strong>
                                </template>
                            </multiselect>
                            <div v-if="$v.timezone.$error" class="validation-error">
                                <p class="error" v-if="!$v.timezone.required">Please include timezone of show</p>
                            </div>
                        </div>
                    </section>
                    <section class="event-enter-showdates">
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
    import Multiselect from 'vue-multiselect'


export default {
    props: ['event', 'timezones'],

    mixins: [formValidationMixin],

    components: { flatPickr, Multiselect},


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
                'shows': this.showType == 'Specific Dates' ? true : false,
                'embargo_date' : this.showEmbargoDate ? this.embargoDate : null,
                'week': this.week && this.showType == 'Anytime' ? _.mapValues(this.week, () => true) : this.week,
                'onGoing' : this.showType == 'Weekly' && this.weeklyOngoing ? true : false,
                'always': this.showType == 'Anytime' || !this.weeklyOngoing ? true : false,
                'start_date': this.startDate ? this.startDate : null,
                'timezone': this.timezone,
            }
        },

    },

    data() {
        return {
            eventUrl:`/create-event/${this.event.slug}`,
            showType: this.event.showtype ? this.event.showtype : 's',
            dates: this.event.shows ? this.event.shows.map(a => a.date) : '',
            startDate: '',
            embargoDate: this.event.embargo_date ? this.event.embargo_date : '',
            showEmbargoDate: this.event.embargo_date ? true : false,
	        calendarConfig: this.initializeCalendarObject(),
            mobileCalendarConfig: this.initializeMobileCalendarObject(),
            embargoCalendarConfig: this.initializeEmbargoCalendarObject(),
            week: this.event.show_on_going ? this.event.show_on_going : this.initializeWeekObject(),
            showTimes: this.event.shows.length ? this.event.show_times : '',
            disabled: false,
            active: null,
            modal: false,
            placeholders: 'Please provide a brief description of show times. For example:' + '\n' + '\n' + '“Doors at 7, Show at 8.”' + '\n' + '“Two shows an hour from 8-10.”',
            placeholdero: 'Please provide a brief description of weekly show times. For example:' + '\n' + '\n' + '10:00PM shows on Monday & Tuesday.' + '\n' + '12:00PM on Wednesday and Thursday.',
            placeholdera: 'Please provide a brief description of daily times. For example:' + '\n' + '\n' + 'Show begins everyday at 12PM.' + '\n' + 'Enjoy at any time.',
            showType: '',
            showTypeOptions: ['Specific Dates', 'Weekly', 'Anytime'],
            exit: false,
            showStartDate: this.event.show_on_going ? true : false,
            timezone: this.event.timezone ? this.event.timezone : '',

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

        initializeShowtimeObject() {
            return {
                hh: "00",
                mm: "00",
                A: "PM",
            }
        },

        addWeekDay(day) {
            this.showStartDate = true;
            this.week[day] = !this.week[day];
        },

        onLoad() {
            if (this.event.showtype == 'a') { return this.showType = 'Anytime'};
            if (this.event.showtype == 'o') { return this.showType = 'Weekly'};
            if (this.event.showtype == 's') { return this.showType = 'Specific Dates'};
            axios.get(this.onFetch('shows'))
            .then(res => {
                res.data.dates ? this.dates = res.data.dates : '';
                res.data.week ? this.week = res.data.week : '';
                res.data.showTimes ? this.showTimes = res.data.showTimes : '';
            });
        },

        onSubmit(value) {
         	if (this.checkVuelidate()) { return false };
            axios.post(this.endpoint, this.submitObject)
            .then(res => {  
                console.log(res.data);
                value == 'exit' || this.exit == true ? this.onBackInitial() : this.onForward('tickets');
            })
            .catch(err => { this.onErrors(err) });
        },

        setStartDate() {
            return this.dates.length ? this.startDate = this.dates[0] : '';
        },

    },

    mounted() {
    	this.onLoad();
        this.setStartDate();
        setTimeout(() => this.$refs.datePicker.fp.jumpToDate(new Date()), 100);
    },

    validations: {
        showTimes: {
            required,
            maxLength: maxLength(1000)
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
        },
        timezone: {
            required,
        }
	},
}  
</script>