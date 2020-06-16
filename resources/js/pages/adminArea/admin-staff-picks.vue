<template>
    <div class="picks">
        <div class="">
            <div class="title">
                <h1>Picks of the Week</h1>
                <div class="add">
                    <button @click.prevent="add = true"><p>+</p></button>
                </div>
            </div>
        </div>
        <div v-if="add" class="new">
            <div class="content">
                <div class="event">
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
                        <template 
                        slot="singleLabel" 
                        slot-scope="props">
                            <img 
                            class="option__image" 
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
                <div class="rank">
                    <label>Rank</label>
                    <multiselect 
                    v-model="rank" 
                    :options="rankOptions"
                    :show-labels="false"
                    placeholder="Leave blank for default Rank of 5 (1 being most important)"
                    open-direction="bottom"
                    :class="{ active: activeItem == 'rank'}"
                    @click="activeItem = 'rank'"
                    @blur="activeItem = null"
                    :preselect-first="false">
                    </multiselect>
                </div>
                <button @click.prevent="savePick">Add staff pick</button>
            </div>
            <div class="dates">
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

        <div class="listing">
            <div>
                <h2>Current Picks</h2>
            </div>
            <div v-for="pick in picks" class="list">
                <div class="image">
                    <img :src="/storage/ + pick.event.thumbImagePath" :alt="pick.event.name">
                </div>
                <div class="name">
                    {{ pick.event.name }}
                </div>
                <div class="rank">
                   <multiselect 
                    v-model="pick.rank" 
                    :options="rankOptions"
                    :show-labels="false"
                    placeholder="Leave blank for default Rank of 5 (1 being most important)"
                    open-direction="bottom"
                    :class="{ active: activeItem == 'rank'}"
                    @click="activeItem = 'rank'"
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
        </div>
        <modal v-show="modal == 'delete'" @close="modal = null">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting the review {{selectedModal.name}}.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="deletePick(selectedModal)">Delete</button>
            </div>
        </modal>
    </div>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.css'
    import Multiselect from 'vue-multiselect'
    import { required } from 'vuelidate/lib/validators';
    import _ from 'lodash'

    export default {

        data() {
            return {
                event: '',
                events: [],
                add: false,
                dates: [],
                datesSubmit: [],
                datesFormatted: [],
                listDates: [],
                rank: '',
                activeItem: '',
                rankOptions: ['1', '2', '3', '4', '5'],
                picks:[],
                temp: '',
                listDatesSubmit: [],
                listDatesFormatted: [],
                selectedModal: '',
                modal: '',
                serverErrors: [],
                config: {
                    minDate: "today",
                    altFormat:'M d',
                    altInput: true,
                    mode: "range",
                    inline: true,
                    showMonths: 2,
                    dateFormat: 'Y-m-d H:i:s',
                    onClose: [this.dateFunc()], 
                },
                pickConfig: {
                    minDate: "today",
                    altFormat:'M d',
                    altInput: true,
                    mode: "range",
                    inline: false,
                    showMonths: 2,
                    dateFormat: 'Y-m-d H:i:s',
                    onClose: [this.listDateFunc()], 
                },
            }
        },

        components: {
            flatPickr, Multiselect
        },

        computed: {
            
        },

        methods: {

            loadEvents (query) {
                axios.get('/api/admin/search/events', { params: { keywords: query } })
                .then(res => {
                    console.log(res.data);
                    this.events = res.data;
                });
            },

            showModal(pick, arr) {
                this.selectedModal = pick;
                this.modal = arr;
            },

            loadPicks() {
                axios.get(`/staffpicks?timestamp=${new Date().getTime()}`)
                .then(response => {
                    this.picks = response.data;
                });
            },

            savePick() {
                this.$v.$touch();
                if (this.$v.$invalid) { return false }
                let data = {
                    event_id: this.event.id,
                    rank: this.rank,
                    dates: this.datesSubmit
                };
                axios.post('/staffpicks/', data)
                .then(response => { 
                    console.log(response.data);
                    this.add = false;
                    this.loadPicks();
                })
                .catch(error => { 
                    console.log(error.response.data.errors);
                    this.serverErrors = error.response.data.errors;
                });
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
                axios.post(`/staffpicks/${pick.id}`, data)
                .then(response => { 
                    if(this.listDatesSubmit.length) {
                        this.loadPicks;
                        this.listDatesSubmit = [];
                        this.listDatesFormatted = [];
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

        },

        created() {
            this.loadPicks()
        },

        validations: {
            event: {
                required,
                serverFailed : function(){ return !this.hasServerError('event_id'); },
            },
            dates: {
                required
            }
        },

    }

</script>