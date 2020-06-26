<template>
    <div class="show-content">

        <!-- header -->
        <header class="event-show grid">
            <div class="header-left">
                <div class="content">   
                    <span class="header-left__cat">{{event.category ? event.category.name : ''}}</span>
                    <span class="header-left__title"><h1 :style="titleFontSize">{{event.name}}</h1></span>
                    <span class="header-left__tag"><i>{{event.tag_line}}</i></span>
                    <div v-if="event.staffpick">
                        EI Pick of the week!
                    </div>
                    <div class="header-left__details">
                        <div class="item">
                            <img src="/storage/website-files/price.png" alt="">
                            <span>
                                <span class="header__show-info">Price</span>
                                <span class="header__show-info bold">{{event.price_range}}</span>
                            </span>
                        </div>
                        <div class="item">
                            <img src="/storage/website-files/location.png" alt="">
                            <span v-if="event.hasLocation">
                                <span class="header__show-info">Location</span>
                                <span class="header__show-info bold">{{event.location.city}}</span>
                            </span>
                            <span v-else>
                                <span class="header__show-info">Location</span>
                                <span class="header__show-info bold">Anywhere</span>
                            </span>
                        </div>
                        <div class="item">
                            <img src="/storage/website-files/calendar.png" alt="">
                            <span v-if="event.showtype=='s'">
                                <span class="header__show-info">Shows</span>
                                <span v-if="remaining && remaining.length > 1 ? remaining.length : ''" class="header__show-info bold">{{ remaining.length }} dates left</span>
                                <span v-else-if="remaining && remaining.length == 1 ? remaining.length : ''" class="header__show-info bold">{{ remaining.length }} date left</span>
                                <span v-else class="header__show-info bold">no dates left</span>
                            </span>
                            <span v-if="event.showtype=='o'">
                                <span class="header__show-info">Shows</span>
                                <span class="header__show-info bold">
                                    <span v-if="event.show_on_going.mon">M</span>
                                    <span v-else style="color:#bbbbbb;">M</span>
                                    <span v-if="event.show_on_going.tue">T</span>
                                    <span v-else style="color:#bbbbbb;">T</span>
                                    <span v-if="event.show_on_going.wed">W</span>
                                    <span v-else style="color:#bbbbbb;">W</span>
                                    <span v-if="event.show_on_going.thu">T</span>
                                    <span v-else style="color:#bbbbbb;">T</span>
                                    <span v-if="event.show_on_going.fri">F</span>
                                    <span v-else style="color:#bbbbbb;">F</span>
                                    <span v-if="event.show_on_going.sat">S</span>
                                    <span v-else style="color:#bbbbbb;">S</span>
                                    <span v-if="event.show_on_going.sun">S</span>
                                    <span v-else style="color:#bbbbbb;">S</span>
                                </span>
                            </span>
                            <span v-if="event.showtype=='a'">
                                <span class="header__show-info">Show Days</span>
                                <span class="header__show-info bold">Any Time</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-right">
                <div class="header-right__image">
                    <picture>
                        <source type="image/webp" :srcset="`/storage/${event.largeImagePath}`"> 
                        <img :src="`/storage/${event.largeImagePath.slice(0, -4)}jpg`" :alt="`${event.name} Immersive Event`">
                    </picture>
                </div>
            </div>
        </header>
    
        <!-- About -->
        <section class="event-show grid two-panel">
            <div class="event-title">
                <h2>About</h2>
            </div>
            <div class="right">
                <p 
                style="white-space: pre-line;" 
                v-if="showMore !== 'description'" 
                class="text">{{event.description.substring(0,400)}}<span 
                    class="show-text" 
                    v-if="event.description.length >= 400"
                    @click="showMore = 'description'">... Show More
                    </span>
                </p>
                <p 
                style="white-space: pre-line;" 
                v-show="showMore == 'description'" 
                class="text">{{event.description}}<span 
                    class="show-text" 
                    @click="showMore = null">... Show Less
                    </span>
                </p>
            </div>
        </section>

        <section v-if="event.eventreviews ? event.eventreviews.length : null" class=" event-show grey event-show-review">
            <div class="content grid two-panel">
                <div class="left">
                   <div class="event-title">
                        <h2>Show<br>Reviews</h2>
                    </div>
                </div>
                <div class="event-show-review__right">
                    <div class="box" v-for="review in event.eventreviews">
                        <a rel="noreferrer" target="_blank" :href="review.url">
                            <div class="image">
                                <img width="40px" height="40px" :src="review.image_path" alt="">
                            </div>
                            <div class="name">
                                <h4>{{review.reviewer_name}}</h4>
                            </div>
                        </a>
                        <div class="review">
                            <a rel="noreferrer" target="_blank" :href="review.url">                 
                                <i 
                                style="white-space: pre-line;" 
                                v-if="showMore !== 'review'" 
                                class="text">{{review.review.substring(0,300)}}<span 
                                    class="show-text" 
                                    v-if="review.review.length >= 200">... Read More
                                    </span>
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Dates -->
        <section v-if="event.showtype == 's'" class="grid event-show two-panel">
            <div class="event-title">
                <h2>Show Dates</h2>
            </div>
            <div class="right lockedcalendar desktop">
                <flat-pickr
                    v-model="dates"
                    :config="config"                                                  
                    class="form-control"
                    placeholder="Select date"
                    ref="datePicker"             
                    name="dates">
                </flat-pickr>
                <div class="event-show-showtimes">
                    <p>Show Details:</p>
                    <p>{{event.timezone ? event.timezone.description : ''}}</p>
                    <p style="white-space: pre-wrap;">{{event.show_times}}</p>
                </div>
            </div>
            <div class="right lockedcalendar mobile">
                <flat-pickr
                    v-model="dates"
                    :config="configMob"                                  
                    class="form-control"
                    placeholder="Select date"
                    ref="datePicker"             
                    name="dates">
                </flat-pickr>
                <div class="event-show-showtimes">
                    <p>Show Details:</p>
                    <p>{{event.timezone ? event.timezone.description : ''}}</p>
                    <p style="white-space: pre-wrap;">{{event.show_times}}</p>
                </div>
            </div>
        </section>

        <!-- Dates On Going -->
        <section v-if="event.show_on_going" class="grid event-show two-panel">
            <div class="event-title">
                <h2>Show Times</h2>
            </div>
            <div class="right">
                <div class="calendar">
                    <div class="field">
                        <div class="grid show-week-calendar">
                            <div 
                            class="show-week-calendar_day" 
                            :class="{ active: week.mon }" >
                                <h4>Mon</h4>
                            </div>
                            <div 
                            class="show-week-calendar_day"
                            :class="{ active: week.tue }" >
                                <h4>Tue</h4>
                            </div>
                            <div 
                            class="show-week-calendar_day" 
                            :class="{ active: week.wed }" >
                                <h4>Wed</h4>
                            </div>
                            <div 
                            class="show-week-calendar_day" 
                            :class="{ active: week.thu }" >
                                <h4>Thu</h4>
                            </div>
                            <div 
                            class="show-week-calendar_day"
                            :class="{ active: week.fri }" >
                                <h4>Fri</h4>
                            </div>
                            <div 
                            class="show-week-calendar_day"
                            :class="{ active: week.sat }">
                                <h4>Sat</h4>
                            </div>
                            <div 
                            class="show-week-calendar_day"
                            :class="{ active: week.sun }">
                                <h4>Sun</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="weektimes">
                    <p>Show Details:</p>
                    <p>{{event.timezone ? event.timezone.description : ''}}</p>
                    <p style="white-space: pre-wrap;">{{event.show_times}}</p>
                </div>
            </div>
        </section>

        <!-- Details -->
        <section class="grid event-show two-panel">
            <div class="left">
                <div class="event-title">
                    <h2>Show Details</h2>
                </div>
            </div>
            <div class="right">
                <div class=" grid two-panel">
                    <div class="title">
                        <h3>Content Advisories</h3>
                    </div>
                    <ul class="info">
                        <li>
                            <p>{{event.advisories.ageRestriction}}</p>
                        </li>
                        <li v-for="item in event.content_advisories">
                            <p>{{item.advisories}}</p>
                        </li>
                    </ul>
                </div>
                <div class="grid two-panel">
                    <div class="title">
                        <h3>Interaction Advisories</h3>
                    </div>
                    <ul class="info">
                        <li v-for="item in event.contact_levels">
                            <p>{{item.level}}</p>
                        </li>
                    </ul>
                </div>
                <div class="grid two-panel">
                    <div class="title">
                        <h3>Mobility Advisories</h3>
                    </div>
                    <ul class="info">
                        <li>
                            <p>Event is <span v-if="!event.advisories.wheelchairReady">not</span> wheelchair accessible.</p>
                        </li>
                        <li v-for="item in event.mobility_advisories">
                            <p>{{item.mobilities}}</p>
                        </li>
                    </ul>
                </div>
                <div class="grid two-panel">
                    <div class="title">
                        <h3>Audience Role</h3>
                    </div>
                    <ul class="info">
                        <li>
                            <p 
                            style="white-space: pre-line;" 
                            v-if="showMore !== 'audience'" 
                            class="text">{{event.advisories.audience.substring(0,160)}}<span 
                                class="show-text" 
                                v-if="event.advisories.audience.length >= 160"
                                @click="showMore = 'audience'">... Show More
                                </span>
                            </p>
                            <p 
                            style="white-space: pre-line;" 
                            v-show="showMore == 'audience'" 
                            class="text">{{event.advisories.audience}}<span 
                                class="show-text" 
                                @click="showMore = null">... Show Less
                                </span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="grid two-panel" v-if="event.advisories.sexual">
                    <div class="title">
                        <h3>Sexual Advisories</h3>
                    </div>
                    <ul class="info">
                        <li>
                            <p>{{event.advisories.sexualDescription}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Organizer -->
        <section class="grid event-show two-panel">
            <div class="left">
                <div class="event-title">
                    <h2>About the organizer</h2>
                </div>
            </div>
            <div class="right">
                <a :href="`/organizer/${event.organizer.slug}`">
                    <div class="event-show-organizer-image">
                        <div :style="event.organizer.thumbImagePath ? organizerImage : `background:${event.organizer.hexColor}`" class="img">
                            <div class="organizer-icon-text event-show" v-if="!event.organizer.thumbImagePath">
                                <span>{{event.organizer.name.charAt(0)}}</span>
                            </div>
                        </div>
                    </div>
                </a>
                <a :href="`/organizer/${event.organizer.slug}`">
                    <div class="name">
                        <h3>{{event.organizer.name}}</h3>
                    </div>
                </a>
                <div style="white-space: pre-line;" v-if="event.organizer.description" class="description">
                    <span 
                    style="white-space: pre-line;" 
                    v-if="showMore !== 'organizer'" 
                    class="text">{{event.organizer.description.substring(0,160)}}<span 
                        class="show-text" 
                        v-if="event.organizer.description.length >= 160"
                        @click="showMore = 'organizer'">... Show More
                        </span>
                    </span>
                    <span 
                    style="white-space: pre-line;" 
                    v-show="showMore == 'organizer'" 
                    class="text">{{event.organizer.description}}<span 
                        class="show-text" 
                        @click="showMore = null">... Show Less
                        </span>
                    </span>
                </div>
            </div>
        </section>

        <!-- Location -->
        <section v-if="bar && event.hasLocation" class="section event-show location">
            <div>
                <div class="event-title">
                    <h2>Location</h2>
                </div>
                <div class="text" v-if="event.location.hiddenLocationToggle">
                    <a rel="noreferrer" target="_blank" :href="`http://maps.google.com/maps?q=${event.location.city},+${event.location.region}`">
                        <p>{{event.location.city}}, {{event.location.region}}</p>
                        <br>
                        <p>{{event.location.hiddenLocation}}</p>
                    </a>
                </div>
                <div class="text" v-else="event.location.hiddenLocationToggle">
                    <a rel="noreferrer" target="_blank" :href="`http://maps.google.com/maps?q=${event.location.home}+${event.location.street},+${event.location.city},+${event.location.region}`">
                        <p>{{locationPlaceholder}}</p>  
                    </a>
                </div>
                <div class="event-show-map">
                    <div v-if="center">
                        <div class="zoom">
                            <div class="zoom__in">
                                <button @click.prevent="zoom += 1">
                                    <svg viewBox="0 0 16 16" height="16" width="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0V1z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
                                </button>
                            </div>
                            <div class="zoom__out">
                                <button @click.prevent="zoom -= 1">
                                    <svg viewBox="0 0 16 16" height="16" width="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <div style="width:100%;height:400px">
                            <l-map :zoom="zoom" :center="center" :options="{ scrollWheelZoom: allowZoom, zoomControl: allowZoom }">
                            <l-tile-layer :url="url"></l-tile-layer>
                            <l-marker :lat-lng="center">
                                <l-popup>
                                    <div class="show-pop">
                                        <a rel="noreferrer" target="_blank" :href="`http://maps.google.com/maps?q=${event.location.home}+${event.location.street},+${event.location.city},+${event.location.region}`">
                                            <div class="info">
                                                <div class="name">
                                                    {{locationPlaceholder}} 
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </l-popup>                        
                            </l-marker>
                            </l-map>
                        </div>  
                    </div>
                </div>
            </div>
        </section>

        <!-- No Location -->
        <section class="event-show grid two-panel" v-if="!event.hasLocation">
            <div class="event-title">
                <h2>What you will need</h2>
            </div>
            <div class="right">
                <div>
                    <div v-for="location in event.remotelocations">
                        <h3>{{location.location}}</h3>
                        <p>{{location.description}}</p>
                    </div>
                    <div v-if="event.remote_description">
                        <p>{{event.remote_description}}</p>
                    </div>
                </div>
            </div>
        </section>
        <div>
            <div class="create-button__back">
                <button :disabled="disabled" class="create review" @click.prevent="onBack('images')"> Back </button>
            </div>
            <div class="create-button__forward review">
                <button :disabled="disabled" class="create review" @click.prevent="onSubmit()"> Submit </button>
            </div>
        </div>
    </div>
</template>

<script>
    import formValidationMixin from '../../mixins/form-validation-mixin'
    import {LMap, LTileLayer, LMarker, LPopup, LIcon} from 'vue2-leaflet'
    import format from 'date-fns/format'
    import ContactOrganizer from '../organizers/contact-organizer.vue'
    import flatPickr from 'vue-flatpickr-component'

    export default {

        props: ['loadevent', 'user'],

        mixins: [formValidationMixin],

        components: { 
            LMap, 
            LTileLayer, 
            LMarker,
            flatPickr,
            ContactOrganizer,
            LPopup,
            LIcon
        },

        computed: {

            locationPlaceholder() {
                return this.event.location.postal_code || this.event.location.city ? (this.event.location.home ? this.event.location.home + ' ' : '') 
                + (this.event.location.street ? this.event.location.street + ' | ' : '') 
                + (this.event.location.city ? this.event.location.city + ' | ' : '') 
                + (this.event.location.region ? this.event.location.region + ' | ' : '') 
                + (this.event.location.country ? this.event.location.country : '') 
                : '';
            },
        },

        data() {
            return {
                event: this.loadevent ? this.loadevent : '',
                isModalVisible: false,
                zoom:13,
                center: this.loadevent.location_latlon,
                url:'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
                attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                allowZoom: false,
                week: this.loadevent ? this.loadevent.show_on_going : '',
                showEventClass: 'show-heart-location',
                showEventMobileClass: 'show-heart-mobile-location',
                showMore: null,
                organizerImage: '',
                dates: [],
                remaining: [],
                bar: false,
                lastScrollPosition: 0,
                config: {
                    minDate: "today",
                    maxDate: new Date().fp_incr(180),
                    mode: "multiple",
                    inline: true,
                    showMonths: 2,
                    dateFormat: 'Y-m-d H:i:s',    
                },
                configMob: {
                    minDate: "today",
                    maxDate: new Date().fp_incr(180),
                    mode: "multiple",
                    inline: true,
                    showMonths: 1,
                    dateFormat: 'Y-m-d H:i:s',    
                },
                searchUrl: '',
                disabled: false,
                titleFontSize: '',

            }
        },

        methods: {
            getDates() {
                if(this.event.shows) {
                    this.event.shows.forEach(event=> {
                        if (this.$dayjs().subtract(1, 'day').format('YYYY-MM-DD 23:59:00') < event.date) {
                            this.remaining.push(event.date)
                        }
                        this.dates.push(event.date)
                    });
                }
            },

            onSubmit() {
                this.disabled = true;
                axios.get(`/create-event/${this.event.slug}/submit`);
                window.location.href = `/create-event/${this.event.slug}/thankyou`;
            },

            handleScroll (event) {
                // event.path[1].scrollY > 60 ? this.bar = true : this.bar = false; 
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                if (currentScrollPosition > 60) {
                    return this.bar = true;
                }
                return this.bar = false;
                // if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                //     return
                // }
                // this.bar = currentScrollPosition < this.lastScrollPosition;
                // this.lastScrollPosition = currentScrollPosition ;
            },

            breadcrumbs() {
                if (new URL(window.location.href).searchParams.get("name")) {
                    this.searchUrl = `/index/search?name=${new URL(window.location.href).searchParams.get("name")}&lat=${new URL(window.location.href).searchParams.get("lat")}&lng=${new URL(window.location.href).searchParams.get("lng")}`
                }
            },

            canUseWebP() {
                let webp = (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
                if (this.loadevent.organizer.thumbImagePath && webp) {
                    return this.organizerImage = `background-image:url('/storage/${this.loadevent.organizer.thumbImagePath}')`;
                };
                if (this.loadevent.organizer.thumbImagePath) {
                    return this.organizerImage = `background-image:url('/storage/${this.loadevent.organizer.thumbImagePath.slice(0, -4)}jpg')`;
                }
            },

            getTitleFontSize() {
                if (this.event.name.length > 70) {
                   return this.titleFontSize = `font-size:3rem;line-height:3rem`
                }
                if (this.event.name.length > 40) {
                    return this.titleFontSize = `font-size:4rem;line-height:4rem`
                }
                return this.titleFontSize = `font-size:5rem;line-height:5rem`
            },

        },

        watch: {
            dates() {
                this.$refs.datePicker ? this.$refs.datePicker.fp.jumpToDate(new Date()) : ''
            }
        },

        mounted() {
            this.getDates();
            this.canUseWebP();
            this.breadcrumbs();
            this.getTitleFontSize();
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    };
</script>