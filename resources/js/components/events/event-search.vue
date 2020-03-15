<template>
    <div class="search">
        <div class="body">
            <div class="filter">
                <div class="item">
                    <div class="el">
                        <div class="button" ref="dates">
                            <div @click="show('dates')" class="click">
                                <p v-if="!datesFormatted.length">Dates</p>
                                <p v-if="datesFormatted.length">{{datesFormatted[0]}}{{ datesFormatted[1] ? ' to ' + datesFormatted[1] : ''}} </p>
                            </div>
                            <div class="b_over dates" v-if="activeItem === 'dates'">
                                <div>
                                    <flat-pickr
                                        v-model="dates"
                                        :config="config"                                         
                                        placeholder="Select date"               
                                        name="dates">
                                    </flat-pickr>
                                </div>
                                <div class="save">
                                    <button v-if="datesFormatted.length" @click="datesFormatted = []; datesSubmit = [];" class="cancel">clear</button>
                                    <button v-if="!datesFormatted.length" @click="activeItem = null" class="cancel">Cancel</button>
                                    <button @click="submit" class="submit">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="el">
                        <div class="button" ref="cat">
                            <div @click="show('category')" class="click">
                                <p v-if="!category">Categories</p>
                                <p v-if="category">{{category.name}}</p>
                            </div>
                            <div v-if="activeItem === 'category'" class="b_over cat">
                                <div class="box">
                                    <multiselect 
                                    v-model="category"
                                    label="name"
                                    :options="categories" 
                                    placeholder="Categories"
                                    open-direction="bottom"
                                    :preselect-first="false">
                                    </multiselect>
                                </div>
                                <div class="save">
                                    <button v-if="category" @click="category = null" class="cancel">clear</button>
                                    <button v-if="!category" @click="activeItem = null" class="cancel">Cancel</button>
                                    <button @click="submit" class="submit">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="el">
                        <div class="button" ref="price">
                            <div @click="show('price')" class="click">
                                <p v-if="showPrice">Price</p>
                                <p v-else="showPrice">{{'$' + price[0]}}{{' to ' + '$' + price[1]}}</p>
                            </div>
                            <div v-if="activeItem === 'price'" class="b_over price">
                                <div class="box price">
                                    <vue-slider
                                    v-model="price" 
                                    :enable-cross="false" />
                                    <label> Min </label>
                                    <input 
                                    type="text"
                                    v-model="price[0]"
                                    >
                                    <label> Max </label>
                                    <input 
                                    type="text"
                                    v-model="price[1]"
                                    >
                                </div>
                                <div class="save">
                                    <button v-if="showPrice" @click="activeItem = null" class="cancel">Cancel</button>
                                    <button v-else="showPrice" @click="price = [0,100]" class="cancel">clear</button>
                                    <button @click="submit" class="submit">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="showmap">
                    <p>Show Map</p>
                    <div id="cover">
                        <input v-model="showMap" type="checkbox" id="checkbox">
                        <div id="bar"></div>
                        <div id="knob">
                            <p v-if="showMap"><svg viewBox="0 0 52 52" fill="black" fill-opacity="0" stroke="currentColor" stroke-width="3" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round" style="height: 28px; width: 28px; display: block; overflow: visible;"><path d="m19.1 25.2 4.7 6.2 12.1-11.2"></path></svg></p>
                        </div>
                    </div>
                </div>      
            </div>
            <event-map-search
            v-if="showMap"
            @mapCenterUpdated="mapSearch"
            :user="user"
            @loadMore="loadMoreEvents"
            :events="eventList"></event-map-search>
            <event-list-search
            v-else="showMap"
            :user="user"
            :events="eventList"></event-list-search>
        </div>
    </div>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.css'
    import { mapGetters } from 'vuex'
    import Multiselect from 'vue-multiselect'
    import '../events/components/clickOutside.js';
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'


    export default {

        components: {
            flatPickr, Multiselect, VueSlider
        },

        props: {
            searchedevents: {
                type:Object,
            },
            categories: {
                type:Array
            },
            user: {
                type:String
            }
        },

        name: "userSearchRequest",
        name: "searchEvents",

        computed: {
            ...mapGetters([
                'events'
            ]),
            ...mapGetters([
                'userSearchRequest'
            ]),
            location() {
                return this.$store.state.userSearchRequest.name;
            },
             mapCenter() {
                return {
                    lat: this.$store.state.userSearchRequest.latitude ? this.$store.state.userSearchRequest.latitude : '',
                    lng: this.$store.state.userSearchRequest.longitude ? this.$store.state.userSearchRequest.longitude : '',
                }
            },
            showPrice() {
                return this.price[0] == 0 && this.price[1] == 100 ? true : false;
            },

            data() {
                return {
                    results: this.results,
                    mapboundary: this.boundaries,
                    category: this.category,
                    dates: this.datesSubmit,
                    price: this.price,
                    loc: this.mapCenter,
                }
            }

        }, 

        data() {
            return {
                eventList: [],
                showPopup: false,
                searchObject: this.initializeSearchObject(),
                activeItem: null,
                category: '',
                showMap: true,
                price: [0,100],
                boundaries: '',
                datesSubmit: [],
                datesFormatted: [],
                dates: [],
                showInside:false,
                pickerInstance: '',
                results: '',
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
            }
        },

        methods: {

            initializeSearchObject() {
                return {
                    latitude: '',
                    longitude: '',
                }
            },

            show(type) {
                this.activeItem === type ? this.activeItem = null : this.activeItem = type;
            },

            updateSearchedLocation() {
                this.$store.dispatch('searchEvents', this.searchedevents);
                this.$store.dispatch('userSearchRequest', this.searchedevents);
            },

            filterData() {
                this.submit();
            },

            mapSearch(value) {
                this.boundaries = value;
                this.submit();
            },

            loadMoreEvents(value) {
                this.results = value;
                this.submit();
            },

            submit() {
                this.activeItem = null;
                 axios.post('/api/search/mapboundary', this.data)
                .then(response => {
                    this.eventList = response.data;
                    console.log(response.data);
                });
            },

            getPriceRange() {
                let prices = [] 
                this.eventList.forEach(event=>{ 
                  event.priceranges.forEach(pricerange=>{ 
                    prices.push(pricerange.price) 
                  }) 
                })
            },

            dateFunc() {
            // Save component this in that
            const that = this;
            // return function needed
            return function(value) {
                that.datesSubmit = value.map(date => 
                    this.formatDate(date, "Y-m-d H:i:S"));
                that.datesFormatted = value.map(date => 
                    this.formatDate(date, "M d"));
                }
            },

            onClickOutside(event) {
                let cat =  this.$refs.cat;
                let dates =  this.$refs.dates;
                let price =  this.$refs.price;
                if (!cat || cat.contains(event.target) || !dates || dates.contains(event.target) || !price || price.contains(event.target)) return;
                this.activeItem = null;
            },

        },

        watch: {
            events() {
                this.eventList = this.events;
                this.getPriceRange()
            },
        },

        created() {
            this.updateSearchedLocation();
            setTimeout(() => document.addEventListener("click", this.onClickOutside), 200);
        },


    };
</script>