<template>
    <div class="es__dates">
        <template v-if="event.showtype == 's' || event.showtype == 'l'">
            <button 
                @click="visible =! visible"
                class="es__dates-button subtext">
                <h3 
                    v-if="remaining && remaining.length > 1 ? remaining.length : ''" 
                    class="header__show-info bold">{{ remaining.length }} show dates left</h3>
                <h3 
                    v-else-if="remaining && remaining.length == 1 ? remaining.length : ''" 
                    class="header__show-info bold">{{ remaining.length }} date left</h3>
                <h3 
                    v-else 
                    class="header__show-info bold">no dates left</h3>
                <p>See show dates</p>
            </button>
            <template v-if="visible">
                <div class="es__dates--popup">
                    <flat-pickr
                        v-model="dates"
                        :config="config"                                  
                        class="form-control"
                        placeholder="Select date"
                        ref="datePicker"             
                        name="dates" />
                    <div class="es__dates--description">
                        <ShowMore 
                            :text="event.show_times"
                            :limit="20" />
                    </div>
                </div>
            </template>
        </template>

        <template v-if="event.showtype == 'o'">
            <h3>Every week on</h3>
            <div class="es__dates--week">
                <div 
                    class="es__week--day" 
                    :class="{ active: week.mon }">
                    <h4>Mon</h4>
                </div>
                <div 
                    class="es__week--day"
                    :class="{ active: week.tue }">
                    <h4>Tue</h4>
                </div>
                <div 
                    class="es__week--day" 
                    :class="{ active: week.wed }">
                    <h4>Wed</h4>
                </div>
                <div 
                    class="es__week--day" 
                    :class="{ active: week.thu }">
                    <h4>Thu</h4>
                </div>
                <div 
                    class="es__week--day"
                    :class="{ active: week.fri }">
                    <h4>Fri</h4>
                </div>
                <div 
                    class="es__week--day"
                    :class="{ active: week.sat }">
                    <h4>Sat</h4>
                </div>
                <div 
                    class="es__week--day"
                    :class="{ active: week.sun }">
                    <h4>Sun</h4>
                </div>
            </div>
            <div class="es__dates--description">
                <ShowMore 
                    :text="event.show_times"
                    :limit="20" />
            </div>
        </template>

        <template v-if="event.showtype == 'a'">
            <div>
                <h3>Anytime</h3>
                <div class="es__dates--description">
                    <ShowMore 
                        :text="event.show_times"
                        :limit="20" />
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import ShowMore  from '../components/show-more.vue'
    import flatPickr from 'vue-flatpickr-component'
    export default {

        props: [ 'event', ],

        components: { ShowMore, flatPickr },

        data() {
            return {
                config: this.initializeCalendarObject(),
                dates: [],
                week: this.event ? this.event.show_on_going : '',
                remaining: [],
                visible: false,
            }
        },

        methods: {
            initializeCalendarObject() { 
                return {
                    maxDate: new Date().fp_incr(180),
                    mode: "multiple",
                    inline: true,
                    showMonths: 2,
                    dateFormat: 'Y-m-d H:i:s',
                    disable: [],
                }
            },

            getDates() {
                if(this.event.shows) {
                    this.event.shows.forEach(event=> {
                        if (this.$dayjs().subtract(1, 'day').format('YYYY-MM-DD 23:59:00') < event.date) {
                            this.remaining.push(event.date);
                        } else {
                            this.config.disable.push(event.date);
                        }
                        this.dates.push(event.date);
                    });
                }
            },
        },

        mounted() {
            this.getDates();
        }
    }
</script>