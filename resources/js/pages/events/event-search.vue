<template>
    <div class="event-search" style="min-height: calc(100vh - 7rem);position:relative;">
        <div class="event-search__container grid" :class="{ maphidden: !showMap}">
            <section class="e-search-filter" :style="shift">
                <div class="title">
                    <h2>{{category ? category.name : 'Immersive'}} in {{searchedCity}}</h2>
                </div>
                <div v-if="mobile" class="e-search-filter__row">
                    <button @click="showFilters=true" class="filter">Filters</button>
                </div>
                <div v-if="!mobile" class="e-search-filter__row grid">

                    <!-- Date Search -->
                    <div class="e-search-filter__item">
                        <div class="e-search-filter__button" ref="dates">
                            <button @click="show('dates')" class="filter">
                                <p v-if="showDates">Dates</p>
                                <p v-else>{{datesFormatted[0]}}{{ datesFormatted[1] ? ' to ' + datesFormatted[1] : ''}} </p>
                            </button>
                            <div class="e-search-filter__pop-box" v-if="active == 'dates'">
                                <div>
                                    <flat-pickr
                                        v-model="dates"
                                        :config="config"                                         
                                        placeholder="Select date"               
                                        name="dates">
                                    </flat-pickr>
                                </div>
                                <div class="e-search-filter__pop-box--footer">
                                    <button v-if="showDates" @click="active = null" class="pop-box__cancel">Cancel</button>
                                    <button v-else @click="datesFormatted = []; datesSubmit = []; dates = [];" class="pop-box__cancel">clear</button>
                                    <button @click="submit" class="pop-box__submit">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Category Search -->
                    <div class="e-search-filter__item">
                        <div class="e-search-filter__button" ref="cat">
                            <button @click="show('category')" class="filter">
                                <p v-if="!category">Categories</p>
                                <p v-if="category">{{category.name}}</p>
                            </button>
                            <div v-if="active === 'category'" class="e-search-filter__pop-box">
                                <div class="e-search-filter__pop-box--category">
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
                                <div class="e-search-filter__pop-box--footer">
                                    <button v-if="category" @click="clearCat" class="pop-box__cancel">clear</button>
                                    <button v-if="!category" @click="active = null;" class="pop-box__cancel">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Price Search -->
                    <div class="e-search-filter__item">
                        <div class="e-search-filter__button" ref="price">
                            <button @click="show('price')" class="filter">
                                <p v-if="!showPrice && price[0] == 0">{{' Up to ' + '$' + price[1]}}</p>
                                <p v-if="!showPrice && price[0] != 0">{{'$' + price[0]}}{{' to ' + '$' + price[1]}}</p>
                                <p v-if="showPrice">Price</p>
                            </button>
                            <div v-if="active === 'price'" class="e-search-filter__pop-box">
                                <div class="e-search-filter__pop-box--price">
                                    <vue-slider
                                    v-model="price" 
                                    v-bind="options"
                                    :enable-cross="false" />
                                    <div class="price-box__amount">
                                        <div class="price-box__amount--info">
                                            <label> Min </label>
                                            <input type="text"v-model="price[0]">
                                        </div>
                                        <div class="price-box__amount--info">
                                            <label> Max </label>
                                            <input type="text"v-model="price[1]">
                                        </div>
                                    </div>
                                </div>
                                <div class="e-search-filter__pop-box--footer">
                                    <button v-if="showPrice" @click="active = null" class="pop-box__cancel">Cancel</button>
                                    <button v-if="!showPrice" @click="price = [options.min, options.max]" class="pop-box__cancel">clear</button>
                                    <button @click="submit" class="pop-box__submit">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="e-search-filter__item--showmap" v-if="!showMap">
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

        <!-- Mobile Filter List -->
        <div class="mobile-filter-list" v-show="showFilters">
            <div class="mobile-filter-list__nav">
                <button @click="cancelMobile" class="mobile-filter-list__nav--close-button">
                    <svg viewBox="0 0 12 12" role="presentation" aria-hidden="true" focusable="false" style="height: 14px; width: 14px; display: block; fill: currentcolor;"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fill-rule="evenodd"></path></svg>
                </button>
                <div class="mobile-filter-list__clear">
                    <button class="mobile-filter-list__clear-button" @click="clearMobile">Clear</button>
                </div>
            </div>
            <div class="mobile-filter-list__content">

                <!-- Mobile Date Search -->
                <div class="mobile-filter-list__content--dates">
                    <h3>Dates</h3>
                    <flat-pickr
                        v-model="dates"
                        :config="configmobile"                                         
                        placeholder="Select date"               
                        name="dates">
                    </flat-pickr>
                </div>
                
                <!-- Mobile Category Search -->
                <div class="mobile-filter-list__content--categories">
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
                
                <!-- Mobile Price Search -->
                <div class="mobile-filter-list__content--prices">
                    <h3>Prices</h3>
                    <div class="mobile-filter-list__price-box">
                        <vue-slider
                        v-model="price" 
                        v-bind="options"
                        :enable-cross="false" />
                        <div class="price-box__amount">
                            <div class="price-box__amount--info">
                                <label> Min </label>
                                <input type="text"v-model="price[0]">
                            </div>
                            <div class="price-box__amount--info">
                                <label> Max </label>
                                <input type="text"v-model="price[1]">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile-filter-list__footer">
                <div class="mobile-filter-list__footer--button">
                    <button class="mobile-filter-button" @click="filterMobile">Filter</button>
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

        components: { flatPickr, Multiselect, VueSlider, searchItem },

        props:['searchedevents','categories','user'],

        computed: {
            showPrice() {
                return this.price[1] == this.options.max && this.price[0] == this.options.min ? true : false;
            },
            showDates() {
                return !this.datesFormatted.length ? true : false;
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
                active: null,
                category: '',
                showMap: true,
                price: [0,0],
                boundaries: '',
                datesSubmit: [],
                datesFormatted: [],
                hasPrice: false,
                dates: [],
                results: '',
                searchedCity: new URL(window.location.href).searchParams.get("name"),
                searchedCategory: new URL(window.location.href).searchParams.get("category"),
                config: this.initializeConfigObject(),
                configmobile: this.initializeConfigObject(),
                options: { min: 0, max: 500 },
                shift: '',
                showFilters: false,
                mobile: window.innerWidth < 768,
                
            }
        },

        methods: {

            initializeConfigObject(){
                return {
                    // minDate: "today",
                    altFormat:'M d',
                    altInput: true,
                    mode: "range",
                    inline: true,
                    showMonths: window.innerWidth < 768 ? 1 : 2,
                    dateFormat: 'Y-m-d H:i:s',
                    onClose: [this.dateFunc()], 
                }
            },

            show(type) {
                this.active === type ? this.active = null : this.active = type;
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
                this.active = null;
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
                this.active = null;
                this.submit();
            },

            getCategory() {
                if (this.searchedCategory) {
                    this.category = this.categories.find(element => element.id == this.searchedCategory);
                }
            }

        },

        watch: {
            price() {
                this.hasPrice = true;
            },
            showFilters() {
                return this.showFilters ? this.toggleBodyClass('addClass', 'noscroll') : this.toggleBodyClass('removeClass', 'noscroll');
            },
        },

        mounted() {
            this.getCategory();
        },

        created() {
            this.getPriceRange();
        },


    };
</script>