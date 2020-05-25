<template>
    <div class="event-search" style="min-height: calc(100vh - 7rem);position:relative;">
        <div class="event-search__container grid" :class="{ maphidden: !showMap}">
            <section class="event-search-filter" :style="shift">
                <div class="title">
                    <h2>Immersive in {{city}}</h2>
                </div>
                <div class="event-search__filters mobile">
                    <button @click="showFilters=true" class="filter">Filters</button>
                </div>
                <div class="event-search__filters grid desktop">
                    <div class="event-filter-item">
                        <div class="button" ref="dates">
                            <button @click="show('dates')" class="filter">
                                <p v-if="!datesFormatted.length">Dates</p>
                                <p v-if="datesFormatted.length">{{datesFormatted[0]}}{{ datesFormatted[1] ? ' to ' + datesFormatted[1] : ''}} </p>
                            </button>
                            <div class="event-filter-button__over dates" v-if="activeItem === 'dates'">
                                <div>
                                    <flat-pickr
                                        v-model="dates"
                                        :config="config"                                         
                                        placeholder="Select date"               
                                        name="dates">
                                    </flat-pickr>
                                </div>
                                <div class="save">
                                    <button v-if="datesFormatted.length" @click="datesFormatted = []; datesSubmit = []; dates = [];" class="cancel">clear</button>
                                    <button v-if="!datesFormatted.length" @click="activeItem = null" class="cancel">Cancel</button>
                                    <button @click="submit" class="submit">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="event-filter-item">
                        <div class="button" ref="cat">
                            <button @click="show('category')" class="filter">
                                <p v-if="!category">Categories</p>
                                <p v-if="category">{{category.name}}</p>
                            </button>
                            <div v-if="activeItem === 'category'" class="event-filter-button__over cat">
                                <div class="box">
                                    <multiselect 
                                    v-model="category"
                                    label="name"
                                    :options="categories" 
                                    placeholder="Categories"
                                    @select="submitCat"
                                    open-direction="bottom"
                                    :preselect-first="false">
                                    </multiselect>
                                </div>
                                <div class="save">
                                    <button v-if="category" @click="clearCat" class="cancel">clear</button>
                                    <button v-if="!category" @click="activeItem = null;" class="cancel">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="event-filter-item">
                        <div class="button" ref="price">
                            <button @click="show('price')" class="filter">
                                <p v-if="!showPrice && price[0] == 0">{{' Up to ' + '$' + price[1]}}</p>
                                <p v-if="!showPrice && price[0] != 0">{{'$' + price[0]}}{{' to ' + '$' + price[1]}}</p>
                                <p v-if="showPrice">Price</p>
                            </button>
                            <div v-if="activeItem === 'price'" class="event-filter-button__over price">
                                <div class="box price">
                                    <vue-slider
                                    v-model="price" 
                                    v-bind="options"
                                    :enable-cross="false" />
                                    <div class="amt">
                                        <div class="info">
                                            <label> Min </label>
                                            <input type="text"v-model="price[0]">
                                        </div>
                                        <div class="info">
                                            <label> Max </label>
                                            <input type="text"v-model="price[1]">
                                        </div>
                                    </div>
                                </div>
                                <div class="save">
                                    <button v-if="showPrice" @click="activeItem = null" class="cancel">Cancel</button>
                                    <button v-if="!showPrice" @click="price = [options.min, options.max]" class="cancel">clear</button>
                                    <button @click="submit" class="submit">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="event-filter-item showmap" v-if="!showMap">
                        <div class="field">
                            <label> Show Map </label>
                            <div id="cover">
                                <input v-model="showMap" type="checkbox" id="checkbox">
                                <div id="bar"></div>
                                <div id="knob">
                                    <p v-if="showMap">Yes</p>
                                    <p v-else="showMap">No</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>           
                <button v-if="showMap" class="close-map" @click="showMap=false">
                    <svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false" style="height: 14px; width: 14px; display: block; fill: currentcolor;"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fill-rule="evenodd"></path></svg>
                </button>
                <div class="event-search-list grid" :class="{ maphidden: !showMap}"> 
                    <div v-for="(event, index) in eventList" class="eventlist__element">
                        <search-item :user="user" :event="event"></search-item>
                    </div>
                    <button v-if="eventList.length >14" @click="loadMoreEvents">Load More</button>
                </div>
            </section>
            <event-map-search
            v-if="showMap"
            @mapfull="fullMap"
            @mapCenterUpdated="mapSearch"
            :user="user"
            @loadMore="loadMoreEvents"
            :events="eventList"></event-map-search>
        </div>

        <div class="filter-list" v-show="showFilters">
            <div class="nav">
                <button @click="cancelMobile" class="close">
                    <svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false" style="height: 14px; width: 14px; display: block; fill: currentcolor;"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fill-rule="evenodd"></path></svg>
                </button>
                <div class="clear">
                    <button @click="clearMobile">Clear</button>
                </div>
            </div>
            <div class="content">
                <div class="dates">
                    <h3>Dates</h3>
                    <flat-pickr
                        v-model="dates"
                        :config="configmob"                                         
                        placeholder="Select date"               
                        name="dates">
                    </flat-pickr>
                </div>
                <div class="prices">
                    <h3>Prices</h3>
                    <div class="box price">
                        <vue-slider
                        v-model="price" 
                        v-bind="options"
                        :enable-cross="false" />
                        <div class="amt">
                            <div class="info">
                                <label> Min </label>
                                <input type="text"v-model="price[0]">
                            </div>
                            <div class="info">
                                <label> Max </label>
                                <input type="text"v-model="price[1]">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="categories">
                    <h3>Categories</h3>
                    <multiselect 
                    v-model="category"
                    label="name"
                    :options="categories" 
                    placeholder="Categories"
                    open-direction="bottom"
                    :preselect-first="false">
                    </multiselect>
                </div>
            </div>
            <div class="filter">
                <div class="button">
                    <button @click="filterMobile">Filter</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.css'
    import Multiselect from 'vue-multiselect'
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'
    import searchItem  from '../events/components/search-item.vue'


    export default {

        components: {
            flatPickr, Multiselect, VueSlider, searchItem
        },

        props: {
            searchedevents: {
                type:Array,
            },
            categories: {
                type:Array
            },
            user: {
                type:String
            }
        },

        computed: {
            showPrice() {
                return this.price[1] == this.options.max && this.price[0] == this.options.min ? true : false;
            },

            data() {
                return {
                    results: this.results,
                    mapboundary: this.boundaries,
                    category: this.category,
                    dates: this.datesSubmit,
                    price: this.hasPrice ? this.price : '',
                    loc: this.boundaries ? '' : {lat: new URL(window.location.href).searchParams.get("lat"), lng: new URL(window.location.href).searchParams.get("lng")}
                }
            },

        }, 

        data() {
            return {
                eventList: this.searchedevents,
                activeItem: null,
                category: '',
                showMap: true,
                price: [0,0],
                boundaries: '',
                datesSubmit: [],
                datesFormatted: [],
                hasPrice: false,
                dates: [],
                results: '',
                city: new URL(window.location.href).searchParams.get("name"),
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
                configmob: {
                    minDate: "today",
                    altFormat:'M d',
                    altInput: true,
                    mode: "range",
                    inline: true,
                    showMonths: 1,
                    dateFormat: 'Y-m-d H:i:s',
                    onClose: [this.dateFunc()], 
                },
                options: {
                    min: 0,
                    max: 500, 
                },
                shift: '',
                showFilters: false,
            }
        },

        methods: {

            show(type) {
                this.activeItem === type ? this.activeItem = null : this.activeItem = type;
                setTimeout(() => document.addEventListener("click", this.onClickOutside), 200);
            },

            submitCat(value) {
                this.category = value;
                this.submit();
            },

            clearCat() {
                this.category = '';
                this.submit();
            },

            mapSearch(value) {
                this.boundaries = value;
                this.submit();
            },

            cancelMobile() {
                this.clearMobile();
                this.showFilters = false;
            },

            clearMobile() {
                this.price = [this.options.min, this.options.max]
                this.datesFormatted = [];
                this.datesSubmit = [];
                this.dates = [];
                this.category = '';
            },

            filterMobile() {
                this.submit();
                this.showFilters = false;
            },

            fullMap(value) {
                console.log(value);
                this.shift = `margin-top:${value};`
            },

            loadMoreEvents(value) {
                this.results = value;
                this.submit();
            },

            submit() {
                this.activeItem = null;
                console.log(this.data);
                axios.post('/api/search/mapboundary', this.data)
                .then(response => {
                    this.eventList = response.data;
                    console.log(response.data);
                })
                .catch(errorResponse => { 
                   console.log(errorResponse.data);
                });
            },

            getPriceRange() {
                let prices = [] 
                this.eventList.forEach(event=>{ 
                  event.priceranges.forEach(pricerange=>{ 
                    prices.push(pricerange.price) 
                  }) 
                })

                function compareNumbers(a, b) {
                  return a - b;
                }

                let arr = Math.ceil(parseFloat(prices.sort(compareNumbers).slice(-1)[0]));
                console.log(arr);

                prices.length ? this.price[1] = arr : this.price[1] = 1000;
                prices.length ? this.options.max = arr : this.options.max = 1000;
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

            toggleBodyClass(addRemoveClass, className) {
                const el = document.body;

                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            

            onClickOutside(event) {
                console.log('test');
                let cat =  this.$refs.cat;
                let dates =  this.$refs.dates;
                let price =  this.$refs.price;
                if (!cat || cat.contains(event.target) || !dates || dates.contains(event.target) || !price || price.contains(event.target)) return;
                this.activeItem = null;
                this.submit();
            },

        },

        watch: {
            price() {
                this.hasPrice = true;
            },
            showFilters() {
                return this.showFilters ? this.toggleBodyClass('addClass', 'noscroll') : this.toggleBodyClass('removeClass', 'noscroll');
            },
        },

        created() {
            this.getPriceRange()
        },


    };
</script>