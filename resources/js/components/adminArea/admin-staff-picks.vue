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
                    <input 
                    v-model="pick.rank"
                    type="text">
                </div>
                <div class="dates">
                    <flat-pickr
                    :value="listDates = [pick.start_date, pick.end_date]"
                    :config="pickConfig"                                         
                    placeholder="Select date"               
                    name="dates">
                </flat-pickr>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.css'
    import Multiselect from 'vue-multiselect'

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
                    onClose: [this.submitDateFunc()], 
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
                .then(response => {
                    this.events = response.data;
                });
            },

            loadPicks() {
                axios.get('/admin/staffpicks')
                .then(response => {
                    this.picks = response.data;
                });
            },

            savePick() {
                let data = {
                    event: this.event.id,
                    rank: this.rank,
                    dates: this.datesSubmit
                };
                axios.post('/admin/staffpicks/', data)
                .then(response => { 
                    console.log(response.data);
                    this.add = false;
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
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

            submitDateFunc(arr) {
                console.log(arr)
                return function(value) {
                    
                    let data = {
                        start_date: this.formatDate(value[0], "Y-m-d H:i:S"),
                        end_date: this.formatDate(value[1], "Y-m-d H:i:S"),
                    };
                    // axios.post('/admin/staffpicks/{id}', data)
                    // .then(response => { 
                    //     console.log(response.data);
                    // })
                    // .catch(error => { 
                    //     this.serverErrors = error.response.data.errors; 
                    // });
                }
            },

        },

        created() {
            this.loadPicks()
        },

    }

</script>