<template>
    <div class="event-create__shows">
        <section class="">
            <div class="listing-details-block">
                <div class="title">
                    <h2>Dates and Times</h2>
                </div>
                <input 
                    style="opacity:0;position:absolute;top:0;" 
                    autofocus>
                <div class="show-type-selection">
                    <div class="field">
                        <label> Select all show dates</label>
                        <multiselect 
                            v-model="showType" 
                            :options="showTypeOptions" 
                            :multiple="false" 
                            placeholder="Show hours type"
                            open-direction="bottom"
                            :allowEmpty="false"
                            :show-labels="false"
                            :class="{ active: active == 'type','error': $v.$error }"
                            @select="dates = []"
                            @click="active = 'type'"
                            @blur="active = null"
                            @open="checkStatus"
                            label="name" 
                            track-by="id"
                            @input="$v.showType.$touch"
                            :preselect-first="false">
                            <template slot="option" slot-scope="props">
                                <div class="option__desc">
                                    <div class="option__title--interaction">
                                        {{ props.option.name }}
                                    </div>
                                    <div class="option__small-interaction">
                                        {{ props.option.description }}
                                    </div>
                                </div>
                            </template>
                        </multiselect>
                    </div>
                </div>
                
                <!-- Limited Run (Specific Dates) -->
                <div 
                    v-show="showType.id == 1" 
                    class="specific-show-dates">
                    <section class="event-enter-showdates">
                        <div class="field">
                            <label> Select each individual show date</label>
                            <div class="calendar desktopshow">
                                <flat-pickr
                                    v-model="dates"
                                    :config="calendarConfig"
                                    ref="datePicker"                                              
                                    class="form-control"
                                    @on-value-update="onDateChange" 
                                    :events="eventsToBeEmitted"
                                    placeholder="Select date"   
                                    name="dates" />
                            </div>
                            <div class="calendar mobileshow">
                                <flat-pickr
                                    v-model="dates"
                                    :config="calendarConfig"
                                    ref="datePicker"
                                    @on-value-update="onDateChange" 
                                    :events="eventsToBeEmitted"                                           
                                    class="form-control"
                                    placeholder="Select date"        
                                    name="dates" />
                            </div>
                            <div v-if="$v.dates.$error" class="validation-error">
                                <p class="error" v-if="!$v.dates.required">Please add at least 1 show date</p>
                            </div>
                            <div>
                                <label v-if="dateArray && dates">({{ dateArray.length }} dates selected)</label>
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
                                @input="$v.timezone.$touch"
                                :options="timezones" 
                                :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }">
                                    <strong>{{ option.description }}</strong>
                                </template>
                            </multiselect>
                            <div v-if="$v.timezone.$error" class="validation-error">
                                <p class="error" v-if="!$v.timezone.ifOnDemand">Please include timezone of show</p>
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
                                autofocus />
                            <div v-if="$v.showTimes.$error" class="validation-error">
                                <p class="error" v-if="!$v.showTimes.required">Please give a brief description of show times</p>
                                <p class="error" v-if="!$v.showTimes.maxLength">Show time is too long</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="field">
                            <label> Does the event have a specific embargo date? <br> (i.e. The date you would like it to first appear on EI) </label>
                            <div id="cover">
                                <input 
                                    @input="$v.showEmbargoDate.$touch" 
                                    v-model="showEmbargoDate" 
                                    type="checkbox" 
                                    id="checkbox">
                                <div id="bar" />
                                <div id="knob">
                                    <p v-if="showEmbargoDate">
                                        Yes
                                    </p>
                                    <p v-else>
                                        No
                                    </p>
                                </div>
                            </div>
                            <div v-if="showEmbargoDate">
                                <div class="embargo-calendar">
                                    <flat-pickr
                                        v-model="embargoDate"
                                        :config="embargoCalendarConfig"
                                        ref="datePicker"
                                        @on-value-update="onDateChange" 
                                        :events="eventsToBeEmitted"                                          
                                        class="form-control"
                                        placeholder="Select date"               
                                        name="dates" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
           
                <!-- Limited Dates -->
                <div v-show="showType.id == 2" class="limited-show-dates">
                    <section class="event-enter-showdates">
                        <div class="field limited__calender">
                            <label> Select the first day your weekly shows begin</label>
                            <div class="embargo-calendar">
                                <flat-pickr
                                    v-model="startDate"
                                    :config="embargoCalendarConfig"
                                    ref="datePicker"                                              
                                    class="form-control"
                                    @on-value-update="onDateChange" 
                                    :events="eventsToBeEmitted"
                                    placeholder="Select date"    
                                    name="dates" />
                            </div>
                            <div v-if="$v.limit.$error" class="validation-error">
                                <p class="error" v-if="!$v.limit.ifLimit">Please select a start and end date</p>
                                <p class="error" v-if="!$v.limit.correctRange">The start date must be before the end date</p>
                            </div>
                        </div>
                        <div class="field limited__calender">
                            <label> Select the last day your weekly shows ends</label>
                            <div class="embargo-calendar">
                                <flat-pickr
                                    v-model="endDate"
                                    :config="embargoCalendarConfig"
                                    ref="datePicker"                                              
                                    class="form-control"
                                    @on-value-update="onDateChange" 
                                    :events="eventsToBeEmitted"
                                    placeholder="Select date"    
                                    name="dates" />
                            </div>
                            <div v-if="$v.limit.$error" class="validation-error">
                                <p class="error" v-if="!$v.limit.ifLimit">Please select a start and end date</p>
                                <p class="error" v-if="!$v.limit.correctRange">The start date must be before the end date</p>
                            </div>
                        </div>
                        <div class="field ongoing-show-dates">
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
                    <section class="ongoing-show-dates">
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
                                @input="$v.timezone.$touch"
                                placeholder="Select timezone" 
                                :options="timezones" 
                                :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }">
                                    <strong>{{ option.description }}</strong>
                                </template>
                            </multiselect>
                            <div v-if="$v.timezone.$error" class="validation-error">
                                <p class="error" v-if="!$v.timezone.ifOnDemand">Please include timezone of show</p>
                            </div>
                        </div>
                    </section>
                    <section class="event-enter-showtimes ongoing-show-dates">
                        <div class="field">
                            <label> Show Times</label>
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
                                autofocus />
                            <div v-if="$v.showTimes.$error" class="validation-error">
                                <p class="error" v-if="!$v.showTimes.required">Please give a brief description of show times</p>
                                <p class="error" v-if="!$v.showTimes.maxLength">Show time is too long</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="field">
                            <label> Does the event have a specific embargo date? <br> (i.e. The date you would like it to first appear on EI) </label>
                            <div id="cover">
                                <input 
                                    @input="$v.showEmbargoDate.$touch" 
                                    v-model="showEmbargoDate" 
                                    type="checkbox" 
                                    id="checkbox">
                                <div id="bar" />
                                <div id="knob">
                                    <p v-if="showEmbargoDate">
                                        Yes
                                    </p>
                                    <p v-else>
                                        No
                                    </p>
                                </div>
                            </div>
                            <div v-if="showEmbargoDate">
                                <div class="embargo-calendar">
                                    <flat-pickr
                                        v-model="embargoDate"
                                        :config="embargoCalendarConfig"
                                        ref="datePicker"
                                        @on-value-update="onDateChange" 
                                        :events="eventsToBeEmitted"                                        
                                        class="form-control"
                                        placeholder="Select date"               
                                        name="dates" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <!-- Open Ended (Weekly) Dates -->
                <div v-show="showType.id == 3" class="ongoing-show-dates">
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
                                    @on-value-update="onDateChange" 
                                    :events="eventsToBeEmitted"
                                    placeholder="Select date"    
                                    name="dates" />
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
                                @input="$v.timezone.$touch"
                                placeholder="Select timezone" 
                                :options="timezones" 
                                :allow-empty="false">
                                <template slot="singleLabel" slot-scope="{ option }">
                                    <strong>{{ option.description }}</strong>
                                </template>
                            </multiselect>
                            <div v-if="$v.timezone.$error" class="validation-error">
                                <p class="error" v-if="!$v.timezone.ifOnDemand">Please include timezone of show</p>
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
                                :placeholder="placeholdero" 
                                required
                                @click="active = 'times'"
                                @blur="active = null"
                                @input="$v.showTimes.$touch"
                                autofocus />
                            <div v-if="$v.showTimes.$error" class="validation-error">
                                <p class="error" v-if="!$v.showTimes.required">Please give a brief description of show times</p>
                                <p class="error" v-if="!$v.showTimes.maxLength">Show time is too long</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div class="field">
                            <label> Does the event have a specific embargo date? <br> (i.e. The date you would like it to first appear on EI) </label>
                            <div id="cover">
                                <input 
                                    @input="$v.showEmbargoDate.$touch" 
                                    v-model="showEmbargoDate" 
                                    type="checkbox" 
                                    id="checkbox">
                                <div id="bar" />
                                <div id="knob">
                                    <p v-if="showEmbargoDate">
                                        Yes
                                    </p>
                                    <p v-else>
                                        No
                                    </p>
                                </div>
                            </div>
                            <div v-if="showEmbargoDate">
                                <div class="embargo-calendar">
                                    <flat-pickr
                                        v-model="embargoDate"
                                        :config="embargoCalendarConfig"
                                        ref="datePicker"                                              
                                        class="form-control"
                                        @on-value-update="onDateChange" 
                                        :events="eventsToBeEmitted"
                                        placeholder="Select date"               
                                        name="dates" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                
                <div 
                    v-show="showType.id == 4" 
                    class="everyday-show-dates">
                    <section class="event-enter-showtimes">
                        <div class="field">
                            <label> Show Times</label>
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
                                autofocus />
                            <div v-if="$v.showTimes.$error" class="validation-error">
                                <p class="error" v-if="!$v.showTimes.required">Please give a brief description of show times</p>
                                <p class="error" v-if="!$v.showTimes.maxLength">Show time is too long</p>
                            </div>
                        </div>
                    </section>
                    <section class="event-enter-showdates">
                        <div class="field" style="margin-top:6rem">
                            <label> Does the event have a specific embargo date? <br> (i.e. The date you would like it to first appear on EI) </label>
                            <div id="cover">
                                <input 
                                    @input="$v.showEmbargoDate.$touch" 
                                    v-model="showEmbargoDate" 
                                    type="checkbox" 
                                    id="checkbox">
                                <div id="bar" />
                                <div id="knob">
                                    <p v-if="showEmbargoDate">
                                        Yes
                                    </p>
                                    <p v-else>
                                        No
                                    </p>
                                </div>
                            </div>
                            <div v-if="showEmbargoDate">
                                <div class="embargo-calendar">
                                    <flat-pickr
                                        v-model="embargoDate"
                                        :config="embargoCalendarConfig"
                                        ref="datePicker"
                                        @on-value-update="onDateChange" 
                                        :events="eventsToBeEmitted"                                             
                                        class="form-control"
                                        placeholder="Select date"               
                                        name="dates" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        <Submit 
            @submit="onSubmit"
            :disabled="disabled" 
            previous="category"
            next="tickets" 
            :event="event" />
        <transition name="slide-fade">
            <div v-if="updated" class="updated-notifcation">
                <p>Your event has been updated.</p>
            </div>
        </transition>
        <modal v-if="modal" @close="modal = false">
            <div slot="header">
                <div class="circle del">
                    <p>?</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Changing the type of dates?</h3>
                <p>Changing the show run type will require the event to be reapproved.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click="onResubmit()">Change</button>
            </div>
        </modal>
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
    import Submit  from './components/submit-buttons.vue'


export default {
    props: ['event', 'timezones'],

    mixins: [formValidationMixin],

    components: { flatPickr, Multiselect, Submit},


    computed: {
        endpoint() {
            return `/create/${this.event.slug}/shows`
        },

        navSubmit() {
            return this.$store.state.navurl
        },

        published() {
            return this.event.status == 'p' || this.event.status == 'e' ? true : false;
        },

        dateArray() {
            if(!Array.isArray(this.dates) && this.dates.includes(",")) {
                this.ready = true;
                return this.dates.split(",");
            } else {
                if(!Array.isArray(this.dates)) {
                    this.ready = true;
                    return [this.dates];
                } else {
                    return null;
                }
            }
        },

        weeklyOngoing() {
            if (this.week.mon == 0) {return true}
            if (this.week.tue == 0) {return true}
            if (this.week.wed == 0) {return true}
            if (this.week.thu == 0) {return true}
            if (this.week.fri == 0) {return true}
            if (this.week.sat == 0) {return true}
            if (this.week.sun == 0) {return true}
            return false;
        },

        submitObject() {
            return {
                'dates': Array.isArray(this.dates) ? this.dates : this.dateArray,
                'showtimes': this.showTimes,
                'embargo_date' : this.showEmbargoDate ? this.embargoDate : null,
                'week':  this.showType.id == '2' && this.showType.id == '3' ? _.mapValues(this.week, () => true) : this.week,
                'shows': this.showType.id == '1',
                'limited' : this.showType.id == '2',
                'onGoing' : this.showType.id == '3',
                'always': this.showType.id == '4',
                'start_date': this.startDate ? this.startDate : null,
                'end_date': this.endDate ? this.endDate : null,
                'timezone': this.timezone,
                'resubmit': this.resubmit,
            }
        },

    },

    data() {
        return {
            eventUrl:`/create/${this.event.slug}`,
            showType: [],
            dates: this.event.shows ? this.event.shows.map(a => a.date) : '',
            startDate: '',
            endDate: '',
            embargoDate: this.event.embargo_date ? this.event.embargo_date : '',
            showEmbargoDate: this.event.embargo_date ? true : false,
            calendarConfig: this.initializeCalendarObject(),
            embargoCalendarConfig: this.initializeEmbargoCalendarObject(),
            week: this.event.show_on_going ? this.event.show_on_going : this.initializeWeekObject(),
            showTimes: this.event.shows.length ? this.event.show_times : '',
            disabled: false,
            active: null,
            modal: false,
            placeholders: 'Please provide a brief description of show times. For example:' + '\n' + '\n' + '“Doors at 7, Show at 8.”' + '\n' + '“Two shows an hour from 8-10.”',
            placeholdero: 'Please provide a brief description of weekly show times. For example:' + '\n' + '\n' + '10:00PM shows on Monday & Tuesday.' + '\n' + '12:00PM on Wednesday and Thursday.',
            placeholdera: 'Please provide a brief description of daily times. For example:' + '\n' + '\n' + 'Show begins everyday at 12PM.' + '\n' + 'Enjoy at any time.',
            showTypeOptions: [
                {   id: 1, name: 'Select Dates (Specific Dates)', description:'Your show has specific performance dates.'},
                {   id: 2, name: 'Limited Run (A range of dates, by day of week)', description:'Your show has an opening date and a closing date, and may have dark days each week.'}, 
                {   id: 3, name: 'Open Ended (Weekly)', description:'Your show recurs regularly and has no end date in the next 6 months, and may have dark days each week.'}, 
                {   id: 4, name: 'Ongoing', description:'Your show has no closing date and is available to do by audience members 24/7, with no dark dates. '}],
            exit: false,
            showStartDate: this.event.show_on_going ? true : false,
            timezone: this.event.timezone ? this.event.timezone : '',
            updated: false,
            resubmit: false,
            ready: false,
            eventsToBeEmitted : ['onReady', 'onChange','onValueUpdate']
        }
    },

    methods: {

        onLoad() {
            axios.get(this.onFetch('shows'))
            .then(res => {
                res.data.dates ? this.dates = res.data.dates : '';
                res.data.week ? this.week = res.data.week : '';
                res.data.showTimes ? this.showTimes = res.data.showTimes : '';
                if (this.event.showtype == 'l') {
                    this.endDate = res.data.dates[0]
                    this.startDate = res.data.dates[res.data.dates.length - 1]
                }
                if (this.event.showtype == 'o') {
                    this.startDate = res.data.dates[res.data.dates.length - 1]
                }
            });
            if (this.event.showtype == 's') { return this.showType = this.showTypeOptions[0]}
            if (this.event.showtype == 'l') { return this.showType = this.showTypeOptions[1]}
            if (this.event.showtype == 'o') { return this.showType = this.showTypeOptions[2]}
            if (this.event.showtype == 'a') { return this.showType = this.showTypeOptions[3]}
        },

        onSubmit(value) {
            if (this.checkVuelidate()) { return false }
            axios.post(this.endpoint, this.submitObject)
            .then(res => {  
                value == 'save' ? this.save() : this.onForward(value);
            })
            .catch(err => { this.onErrors(err) });
        },

        onDateChange() {
            if (this.ready) {
                 this.$v.week.$touch();
            }
        },

        initializeCalendarObject() {
            return {
                maxDate: new Date().fp_incr(180),
                mode: "multiple",
                inline: true,
                showMonths: window.innerWidth < 768 ? 1 : 2,
                dateFormat: 'Y-m-d H:i:s',     
            }
        },

        initializeEmbargoCalendarObject() {
            return {
                minDate: "today",
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
            this.$v.week.$touch();
            this.showStartDate = true;
            this.week[day] = !this.week[day];
        },

        checkStatus() {
            if ((this.event.status == 'p' || this.event.status == 'e') && this.resubmit == false) {
                this.modal = true;
            }
        },

        onResubmit() {
            this.resubmit = true;
            this.approved = false;
            this.modal = false;
        },

    },

    watch: {
        navSubmit() {
            return !this.$v.$anyDirty ? this.onBack(this.navSubmit) : this.onSubmit(this.navSubmit);
        },

    },

    mounted() {
        this.onLoad();
        setTimeout(() => this.$refs.datePicker.fp.jumpToDate(new Date()), 100);
    },

    validations: {
        showType: {

        },
        showTimes: {
            required,
            maxLength: maxLength(1000)
        },
        dates: {
            ifDates() { 
                return this.showType.id == '1' ? this.dates.length ? true : false : true
            },
        },
        limit: {
            ifLimit() {
                return this.showType.id == '2' ? this.startDate && this.endDate  ? true : false : true
            },
            correctRange() {
                return this.showType.id == '2' ? this.startDate < this.endDate  ? true : false : true
            }
        },
        week: {
            ifWeekly() {
                return this.showType.id == '2' || this.showType.id == '3' ? this.week.mon == 1 || this.week.tue == 1 || this.week.wed == 1 || this.week.thu == 1 || this.week.fri == 1 || this.week.sat == 1 || this.week.sun == 1  ? true : false : true
            }
        },
        timezone: {
            ifOnDemand() {
                return this.showType.id == '4' ? true : (this.timezone ? true : false)
            }
        },
        showEmbargoDate: {

        },
	},
}  
</script>