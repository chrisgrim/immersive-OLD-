<template>
    <div class="c-staffpicks">
        <div class="">
            <div class="title">
                <h1>Picks of the Week</h1>
                <div class="add">
                    <button @click.prevent="add = true"><p>+</p></button>
                </div>
            </div>
        </div>
        <div v-if="add" class="c-staffpicks__new">
            <div class="c-staffpicks__new--fields">
                <div class="field">
                    <label>Event</label>
                    <multiselect 
                    v-model="event" 
                    :options="events" 
                    open-direction="bottom"
                    placeholder="Select the event"
                    label="name"
                    :show-labels="false"
                    :internal-search="false"
                    :options-limit="30" 
                    :limit="5"  
                    track-by="name"
                    @open="loadEvents"
                    @search-change="loadEvents"
                    :show-no-results="false"
                    @input="$v.event.$touch"
                    :allow-empty="false">
                        <template slot="option" slot-scope="props">
                            <div class="option__desc">
                                <div class="option__title" style="padding-bottom:1rem;height:2.4rem;">
                                    <div style="display:inline-block;float: left;">
                                        <img 
                                        class="c-staffpicks__new--image" 
                                        :src="'/storage/' + props.option.thumbImagePath">
                                    </div>
                                    <div style="display:inline-block;float: left;margin-top:.5rem;margin-left:1rem;width: 90%;white-space: nowrap;">
                                        {{ props.option.name }}
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template 
                        slot="singleLabel" 
                        slot-scope="props">
                            <img 
                            class="c-staffpicks__new--image" 
                            :src="'/storage/' + props.option.thumbImagePath" 
                            :alt="props.option.name">
                            <span class="option__desc">
                                <span class="option__title">{{ props.option.name }}
                                </span>
                            </span
                        ></template>
                    </multiselect>
                    <div v-if="$v.event.$error" class="validation-error">
                        <p class="error" v-if="!$v.event.required">Please select event</p>
                        <p class="error" v-if="!$v.event.serverFailed">This event has been picked already.</p>
                    </div>
                </div>
                <div class="field">
                    <label>Rank</label>
                    <multiselect 
                    v-model="rank" 
                    :options="rankOptions"
                    :show-labels="false"
                    placeholder="Leave blank for default Rank of 5 (1 being most important)"
                    open-direction="bottom"
                    :class="{ active: active == 'rank'}"
                    @click="active = 'rank'"
                    @blur="active = null"
                    :preselect-first="false">
                    </multiselect>
                </div>
                <div class="field">
                    <label class="area"> Comments </label>
                    <textarea 
                    v-model="comments" 
                    class="create-input area" 
                    rows="8"
                    :class="{ active: active == 'comments','error': $v.comments.$error }"
                    placeholder=" "
                    @click="active = 'comments'"
                    @input="$v.comments.$touch"
                    @blur="active = null"
                    required 
                    autofocus></textarea>
                    <div v-if="$v.comments.$error" class="validation-error">
                        <p class="error" v-if="!$v.comments.required">Comment is required </p>
                    </div>
                </div>
            </div>
            <div class="c-staffpicks__new--dates">
                <div class="field">
                    <label class="area"> Front page dates: 
                        <span v-if="datesFormatted[0]">{{datesFormatted[0]}} to {{datesFormatted[1]}}</span>
                    </label>
                    <flat-pickr
                        v-model="dates"
                        :config="config"                                         
                        placeholder="Select date"               
                        name="dates">
                    </flat-pickr>
                   <div v-if="$v.dates.$error" class="validation-error">
                        <p class="error" v-if="!$v.dates.required">Please add at least 1 show date</p>
                    </div>
                </div>
            </div>
            <div v-if="event" class="c-staffpicks__new--dates lockedcalendar">
                <div class="field">
                    <label class="area"> {{event ? event.name : ''}} Show Dates
                    </label>
                    <flat-pickr
                        v-model="showDates"
                        v-if="event && event.showtype != 'a'"
                        :config="eventConfig"                                         
                        placeholder="Select date"               
                        name="dates">
                    </flat-pickr>
                    <div v-else>
                        Shows are every day for {{event.name}}
                    </div>
                   <div v-if="$v.dates.$error" class="validation-error">
                        <p class="error" v-if="!$v.dates.required">Please add at least 1 show date</p>
                    </div>
                </div>
            </div>
            <button @click="checkDates">check</button>
            <br>
            <br>
            <button @click.prevent="savePick">Add staff pick</button>
        </div>

        <div class="c-staffpicks__list">
            <div class="field c-staffpicks__list--filter">
                <label>Filter by User</label>
                <multiselect 
                v-model="user" 
                :options="loadusers" 
                open-direction="bottom"
                placeholder="filter by user"
                label="name"
                track-by="name"
                @input="loadUserPicks(user)"
                @remove="loadPicks"
                :show-no-results="false">
                    <template slot="option" slot-scope="props">
                        <div class="option__desc">
                            <div class="option__title" style="padding-bottom:1rem;height:2.4rem;">
                                <div style="display:inline-block;float: left;">
                                    
                                </div>
                                <div style="display:inline-block;float: left;margin-top:.5rem;margin-left:1rem;width: 90%;white-space: nowrap;">
                                    {{ props.option.name }}
                                </div>
                            </div>
                        </div>
                    </template>
                    <template 
                    slot="singleLabel" 
                    slot-scope="props">
                        <span class="option__desc">
                            <span class="option__title">{{ props.option.name }}
                            </span>
                        </span
                    ></template>
                </multiselect>
            </div>
            <div class="c-staffpicks__list--grid-top">
                <p>event</p>
                <p>comments</p>
                <p>user</p>
                <p>rank</p>
                <p>dates</p>
            </div>
            <div v-for="pick in picks" class="list c-staffpicks__list--grid">
                <div class="image">
                    <img class="c-staffpicks__list--image" :src="/storage/ + pick.event.thumbImagePath" :alt="pick.event.name">
                    <div class="c-staffpicks__list--name">
                        {{ pick.event.name }}
                    </div>
                </div>
                <div class="field">
                    <textarea 
                    v-model="pick.comments" 
                    class="create-input area" 
                    rows="3"
                    :class="{ active: active == `${pick.id}comments`}"
                    placeholder=" "
                    @click="active = `${pick.id}comments`"
                    @blur="addComment(pick)"
                    required 
                    autofocus></textarea>
                </div>
                <div class="field">
                    <label>{{pick.user.name}}</label>
                </div>
                <div class="rank">
                   <multiselect 
                    v-model="pick.rank" 
                    :options="rankOptions"
                    :show-labels="false"
                    placeholder="Leave blank for default Rank of 5 (1 being most important)"
                    open-direction="bottom"
                    :class="{ active: active == 'rank'}"
                    @click="active = 'rank'"
                    @input="updatePick(pick, 'rank')"
                    :preselect-first="false">
                    </multiselect>
                </div>
                <div class="date-s">
                    <flat-pickr
                    @input="updatePick(pick, 'dates')"
                    :value="listDates = [pick.start_date, pick.end_date]"
                    :config="pickConfig"                                         
                    placeholder="Select date"               
                    name="dates">
                    </flat-pickr>
                </div>
                <button @click.prevent="showModal(pick, 'delete')" class="delete-circle"><p>X</p></button>
            </div>
            <load-more @intersect="intersected()"></load-more> 
        </div>
        <modal v-if="modal == 'delete'" @close="modal = null">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting the pick {{selectedModal.name}}.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="deletePick(selectedModal)">Delete</button>
            </div>
        </modal>
    </div>
</template>

<script>
    import LoadMore  from '../../components/LoadMore.js'
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.css'
    import Multiselect from 'vue-multiselect'
    import { required } from 'vuelidate/lib/validators';
    import _ from 'lodash'

    export default {

        props: ['loadusers'],

        components: { flatPickr, Multiselect, LoadMore },

        computed: {
            submitObject() {
                return {
                    event_id: this.event ? this.event : '',
                    rank: this.rank ? this.rank : '',
                    dates: this.datesSubmit ? this.datesSubmit : '',
                    comments: this.comments ? this.comments : ''
                };
            },
        },

        data() {
            return {
                event: '',
                events: [],
                comments: '',
                add: false,
                dates: [],
                listDates: [],
                showDates:[],
                rank: '',
                active: '',
                rankOptions: ['1', '2', '3', '4', '5'],
                user: '',
                picks:[],
                datesSubmit: [],
                datesFormatted: [],
                listDatesSubmit: [],
                listDatesFormatted: [],
                selectedModal: '',
                modal: '',
                config: this.initializeDateObject('new'),
                pickConfig: this.initializeDateObject('list'),
                eventConfig: this.initializeDateObject('event'),
                pagination: '',
                paginationUser: '',
                page: 2,
            }
        },

        methods: {
            loadEvents (query) {
                axios.get('/api/admin/search/events', { params: { keywords: query } })
                .then(res => {
                    console.log(res.data);
                    this.events = res.data;
                });
            },

            initializeDateObject(val) {
                return {
                    minDate: "today",
                    altFormat:'M d',
                    altInput: true,
                    mode: val == 'event' ? 'multiple' : 'range',
                    inline: val == 'list' ? false : true,
                    showMonths: 1,
                    dateFormat: 'Y-m-d H:i:s',
                    onClose:  val == 'new' ? [this.dateFunc()] : [this.listDateFunc()], 
                }
            },

            intersected() {
                if( this.pagination.last_page < this.page ) {return false};
                this.user ? this.loadUserPicks() : this.onLoadMore();
            },

            onLoadMore() {
                axios.get(`/staffpicks?page=${this.page}`)
                .then(res => {
                    this.picks = this.picks.concat(res.data.data);
                    this.pagination = res.data;
                    this.page = res.data.current_page + 1;
                    console.log(this.page);
                    console.log(this.pagination.last_page);
                });
            },

            showModal(pick, arr) {
                this.selectedModal = pick;
                this.modal = arr;
            },

            loadPicks() {
                axios.get(`/staffpicks?timestamp=${new Date().getTime()}`)
                .then(res => {
                    this.picks = res.data.data;
                    this.pagination = res.data;
                    this.page = res.data.current_page + 1;
                });
            },

            loadUserPicks() {
                if(!this.user) {return this.loadPicks()}
                if (this.user.id != this.paginationUser.id) {this.page = 1};
                axios.post(`/staffpicks/userpicks/${this.user.id}?page=${this.page}`)
                .then(res => { 
                    res.data.current_page == 1 ? this.picks = res.data.data : this.picks = this.picks.concat(res.data.data);
                    this.pagination = res.data;
                    this.paginationUser = this.user;
                    this.page = res.data.current_page + 1;
                })
                .catch(error => { 
                   
                });
            },

            savePick() {
                this.$v.$touch();
                if (this.$v.$invalid) { return false }
                if (this.checkDates()) {alert('pick date must overlap show date');return false}
                axios.post('/staffpicks', this.submitObject)
                .then(response => { 
                    location.reload();
                })
                .catch(error => { 
                    console.log(error.response.data.errors);
                    this.serverErrors = error.response.data.errors;
                });
            },

            checkDates() {
                let from = new Date(this.datesSubmit[0]);
                let to = new Date(this.datesSubmit[1]);

                var result = [];
                this.showDates.forEach(date => result.push(new Date(date) >= from && new Date(date) <= to));
                return result.includes(true) ? false : true;


            },

            deletePick(pick) {
                axios.delete(`/staffpicks/${pick.id}`)
                .then(response => { 
                    this.modal = null;
                    this.loadPicks();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            updatePick(pick, arr) {
                if(arr == 'dates' && !this.listDatesSubmit['1']) {return ''};
                let data = new FormData();
                data.append('_method', 'PATCH');
                arr == 'dates' ? data.append('start_date', this.listDatesSubmit[0]) : '';
                arr == 'dates' ? data.append('end_date', this.listDatesSubmit[1]) : '';
                arr == 'rank' ? data.append('rank', pick.rank) : '';
                arr == 'comments' ? data.append('comments', pick.comments) : '';
                axios.post(`/staffpicks/${pick.id}`, data)
                .then(response => { 
                    if(this.listDatesSubmit.length) {
                        location.reload();
                    }
                })
                .catch(error => { 
                    console.log(error.response.data.errors);
                    this.serverErrors = error.response.data.errors; 
                });
            },

            hasServerError(field) {
                return (field && _.has(this, 'serverErrors.' + field) && !_.isEmpty(this.serverErrors[field]));
            },

            dateFunc() {
                const that = this;
                return function(value) {
                    that.datesSubmit = value.map(date => 
                        this.formatDate(date, "Y-m-d H:i:S"));
                    that.datesFormatted = value.map(date => 
                        this.formatDate(date, "M d"));
                    }
            },

            listDateFunc() {
                const that = this;
                return function(value) {
                    that.listDatesSubmit = value.map(date => 
                        this.formatDate(date, "Y-m-d H:i:S"));
                    that.listDatesFormatted = value.map(date => 
                        this.formatDate(date, "M d"));
                    }
            },

            addComment(pick) {
                this.updatePick(pick, 'comments');
                this.active = null;
            }
        },

        created() {
            this.loadPicks()
        },

        watch: {
            event() {
                this.showDates = this.event.shows.map(a => a.date);;
            }
        },

        validations: {
            event: {
                required,
                serverFailed : function(){ return !this.hasServerError('event_id'); },
            },
            dates: {
                required
            },
            comments: {
                required
            }
        },
    }
</script>