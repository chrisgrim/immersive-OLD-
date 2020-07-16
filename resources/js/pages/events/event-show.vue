<template>
    <div class="show-content">
        <nav class="event-show mobile">
            <div class="back">
                <a v-if="searchUrl" :href="searchUrl">
                    <div class="event-show-nav__back-arrow">
                        <svg aria-label="Back" role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                    </div>
                </a>
                <a v-else href="/">
                    <div class="event-show-nav__back-arrow">
                        <svg aria-label="Back" role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                    </div>
                </a>
            </div>
            <div class="event-show-nav__favorite">
                <favorite :user="user" :inputclass="showEventMobileClass" :event="event"></favorite>
            </div>
        </nav>

        <!-- header -->
        <header class="event-show grid">
            <div class="header-left">
                <div class="content">   
                    <a v-if="event.category" :href="`/index/search-online?category=${event.category.name}&id=${event.category.id}`">
                        <span class="header-left__cat">{{event.category.name}}</span>
                    </a>
                    <span class="header-left__title"><h1 :style="titleFontSize">{{event.name}}</h1></span>
                    <span class="header-left__tag"><i>{{event.tag_line}}</i></span>
                    <div v-if="event.staffpick">
                        EI Pick of the week!
                    </div>
                    <div class="header-left__details">
                        <a href="#tickets">
                            <div class="item">
                                <img src="/storage/website-files/price.png" alt="">
                                <span>
                                    <span class="header__show-info">Price</span>
                                    <span class="header__show-info bold">{{event.price_range}}</span>
                                </span>
                            </div>
                        </a>
                        <a href="#location">
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
                        </a>
                        <a href="#dates">
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
                        </a>
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
                <div class="desktop">
                    <favorite :user="user" :inputclass="showEventClass" :event="event"></favorite>
                </div>
            </div>
        </header>
       
        <!-- About -->
        <section class="event-show grid two-panel">
            <div class="event-title">
                <h2>About</h2>
            </div>
            <div class="right">
                <div class="event-show__description">
                    <p style="white-space: pre-wrap;" class="text">{{ descriptionText }}<span class="show-text" 
                        v-if="!fullDescription" @click="fullDescription = !fullDescription">... Show More</span>
                        <span class="show-text" v-if="fullDescription && event.description.length >= 400" @click="fullDescription = !fullDescription">... Show Less </span>
                    </p>
                </div>
            </div>
        </section>

        <!-- Tickets -->
        <section id="tickets" class="event-show grid two-panel grey">
            <div class="event-title">
                <h2>Tickets</h2>
            </div>
            <div class="right">
                <div class="event-show__tickets">
                    <div class="event-show__tickets--grid">
                        <a :href="eventUrl" rel="noreferrer noopener" target="_blank" v-for="ticket in tickets" :key="ticket.name">
                            <div class="event-show__ticket" @mouseover="hover = ticket" @mouseleave="hover = null">
                                <div>
                                     <div class="event-show__ticket--name">
                                        <p>{{ticket.name}}</p>
                                    </div>
                                    <div v-if="ticket.type == 'f'" class="event-show__ticket--price">
                                        <p>Free</p>
                                    </div>
                                    <div v-else-if="ticket.type == 'p'" class="event-show__ticket--price">
                                        <p>Pay what you can</p>
                                    </div>
                                    <div v-else class="event-show__ticket--price">
                                        <p>{{ticket.ticket_price == 0.00 ? 'Free' : `$${ticket.ticket_price}`}}</p>
                                    </div>
                                </div>
                                <div class="event-show__ticket--description">
                                    <p>{{ticket.description}}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <load-more @intersect="intersected"></load-more>

        <!-- Dates -->
        <section id="dates" v-if="event.showtype == 's'" class="grid event-show two-panel">
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
                <div class="event-show__showtimes--specific">
                    <p>Show Details:</p>
                    <p>{{event.timezone ? event.timezone.description : ''}}</p>
                    <p style="white-space: pre-wrap;" class="text">{{ showtimesText }}<span class="show-text" 
                        v-if="!fullShowtimes" @click="fullShowtimes = !fullShowtimes">... Show More</span>
                        <span class="show-text"v-if="fullShowtimes && event.show_times.length >= 160" @click="fullShowtimes = !fullShowtimes">... Show Less </span>
                    </p>
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
                <div class="event-show__showtimes--specific">
                    <p>Show Details:</p>
                    <p>{{event.timezone ? event.timezone.description : ''}}</p>
                    <p style="white-space: pre-wrap;" class="text">{{ showtimesText }}<span class="show-text" 
                        v-if="!fullShowtimes" @click="fullShowtimes = !fullShowtimes">... Show More</span>
                        <span class="show-text" v-if="fullShowtimes && event.show_times.length >= 160" @click="fullShowtimes = !fullShowtimes">... Show Less </span>
                    </p>
                </div>
            </div>
        </section>

        <!-- Dates On Going -->
        <section id="dates" v-if="event.showtype == 'o'" class="grid event-show two-panel">
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
                <div class="event-show__showtimes--ongoing">
                    <p>Show Details:</p>
                    <p>{{event.timezone ? event.timezone.description : ''}}</p>
                    <p style="white-space: pre-wrap;" class="text">{{ showtimesText }}<span class="show-text" 
                        v-if="!fullShowtimes" @click="fullShowtimes = !fullShowtimes">... Show More</span>
                        <span class="show-text"v-if="fullShowtimes && event.show_times.length >= 160" @click="fullShowtimes = !fullShowtimes">... Show Less </span>
                    </p>
                </div>
            </div>
        </section>

        <!-- Dates Always -->
        <section id="dates" v-if="event.showtype == 'a'" class="grid event-show two-panel">
            <div class="event-title">
                <h2>Show Times</h2>
            </div>
            <div class="right">
                <h3>Anytime</h3>
                <div class="event-show__showtimes--specific">
                    <p>Show Details:</p>
                    <p>{{event.timezone ? event.timezone.description : ''}}</p>
                    <p style="white-space: pre-wrap;" class="text">{{ showtimesText }}<span class="show-text" 
                        v-if="!fullShowtimes" @click="fullShowtimes = !fullShowtimes">... Show More</span>
                        <span class="show-text"v-if="fullShowtimes && event.show_times.length >= 160" @click="fullShowtimes = !fullShowtimes">... Show Less </span>
                    </p>
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
                            <p>{{event.age_limits ? event.age_limits.name : event.advisories.ageRestriction}}</p>
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
                    <ul class="audience-role__info">
                        <li>
                            <p style="white-space: pre-wrap;" class="text">{{ advisoryText }}<span class="show-text" 
                                v-if="!fullAdvisories" @click="fullAdvisories = !fullAdvisories">... Show More</span>
                                <span class="show-text"v-if="fullAdvisories && event.advisories.audience.length >= 160" @click="fullAdvisories = !fullAdvisories">... Show Less </span>
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

        <!-- Reviews -->
        <section v-if="event.eventreviews ? event.eventreviews.length : null" class=" event-show grey event-show-review">
            <div class="content grid two-panel">
                <div class="left">
                   <div class="event-title">
                        <h2>Show Reviews</h2>
                    </div>
                </div>
                <div class="event-show-review__right">
                    <div class="box" v-for="review in event.eventreviews">
                        <a rel="noreferrer" target="_blank" :href="review.url">
                            <div class="event-show-review__right--image">
                                <img width="33px" height="33px" :src="review.image_path" alt="">
                            </div>
                            <div class="event-show-review__right--name">
                                <h4>{{review.reviewer_name}}</h4>
                            </div>
                        </a>
                        <div class="review">
                            <a rel="noreferrer" target="_blank" :href="review.url">                 
                                <i 
                                style="white-space: pre-wrap;" 
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
                <div style="white-space: pre-wrap;" v-if="event.organizer.description" class="description">
                    <span style="white-space: pre-wrap;" class="text">{{organizerText}}<span class="show-text" v-if="!fullOrganizer" @click="fullOrganizer = !fullOrganizer">... Show More</span>
                        <span class="show-text" v-if="fullOrganizer && event.organizer.description.length >= 160" @click="fullOrganizer = !fullOrganizer">... Show Less </span>
                    </span>
                </div>
                <ContactOrganizer :user="user" :loadorganizer="event.organizer"></ContactOrganizer>
            </div>
        </section>

        <!-- location -->
        <section id="location" v-if="bar && event.hasLocation" class="section event-show location">
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
        <section id="location" class="event-show grid two-panel" v-if="!event.hasLocation">
            <div class="event-title">
                <h2>What you will need</h2>
            </div>
            <div class="right">
                <div>
                    <div v-for="location in event.remotelocations">
                        <h3>{{location.name}}</h3>
                        <p>{{location.description}}</p>
                    </div>
                    <div style="white-space: pre-wrap;" v-if="event.remote_description">
                        <p>{{event.remote_description}}</p>
                    </div>
                </div>
            </div>
        </section>

        <div class="grid event-bottom-bar" :class="{ active: bar }">
            <div class="event-bottom-bar__name">
                <picture>
                    <source height="50" width="50" type="image/webp" :srcset="`/storage/${event.thumbImagePath}`"> 
                    <img class="event-bottom-bar__img" height="50" width="50" :src="`/storage/${event.thumbImagePath.slice(0, -4)}jpg`" :alt="event.name">
                </picture>
                <h4>{{event.name}}</h4>
            </div>
            <div class="event-price">
                <h4>{{event.price_range}}</h4>
            </div>
            <div class="event-get-tickets">
                <a :href="eventUrl" rel="noreferrer noopener" target="_blank">
                    <button class="event-bottom-bar__button">
                        {{loadevent.call_to_action ? loadevent.call_to_action : 'Get Tickets'}}
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import {LMap, LTileLayer, LMarker, LPopup} from 'vue2-leaflet'
    import format from 'date-fns/format'
    import ContactOrganizer from '../organizers/contact-organizer.vue'
    import flatPickr from 'vue-flatpickr-component'
    import LoadMore  from '../../components/LoadMore.js'

    export default {

        props: ['loadevent', 'user', 'tickets'],

        components: { LMap, LTileLayer, LMarker, flatPickr, ContactOrganizer, LPopup, LoadMore},

        computed: {
            locationPlaceholder() {
                return this.event.location.postal_code || this.event.location.city ? (this.event.location.home ? this.event.location.home + ' ' : '') 
                + (this.event.location.street ? this.event.location.street + ' | ' : '') 
                + (this.event.location.city ? this.event.location.city + ' | ' : '') 
                + (this.event.location.region ? this.event.location.region + ' | ' : '') 
                + (this.event.location.country ? this.event.location.country : '') 
                : '';
            },

            eventUrl() {
                if (this.loadevent.ticketUrl) {
                    return this.loadevent.ticketUrl;
                }
                if (this.loadevent.websiteUrl) {
                    return this.loadevent.websiteUrl;
                }
                if (this.loadevent.organizer.website) {
                    return this.loadevent.organizer.website;
                }
            },

            organizerText() {
                return this.fullOrganizer ? this.loadevent.organizer.description : this.loadevent.organizer.description.substring(0,160)
            },

            advisoryText() {
                return this.fullAdvisories ? this.loadevent.advisories.audience : this.loadevent.advisories.audience.substring(0,160)
            },

            showtimesText() {
                return this.fullShowtimes ? this.loadevent.show_times : this.loadevent.show_times.substring(0,160)
            },

            descriptionText() {
                return this.fullDescription ? this.loadevent.description : this.loadevent.description.substring(0,400)
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
                    // minDate: "today",
                    maxDate: new Date().fp_incr(180),
                    mode: "multiple",
                    inline: true,
                    showMonths: 2,
                    dateFormat: 'Y-m-d H:i:s',    
                },
                configMob: {
                    // minDate: "today",
                    maxDate: new Date().fp_incr(180),
                    mode: "multiple",
                    inline: true,
                    showMonths: 1,
                    dateFormat: 'Y-m-d H:i:s',    
                },
                searchUrl: '',
                titleFontSize: '',
                fullOrganizer: this.loadevent.organizer.description.length <= 160 ? true : false,
                fullAdvisories: this.loadevent.advisories.audience.length <= 160 ? true : false,
                fullShowtimes: this.loadevent.show_times.length <= 160 ? true : false,
                fullDescription: this.loadevent.description.length <= 400 ? true : false,
                hover: null,
                hasIntersected: false,

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

            intersected() {
                console.log('intersected');
                return this.hasIntersected = true;
            },

            handleScroll (event) {
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                // if (window.pageYOffset < 300) { this.hasIntersected = false; };
                if (currentScrollPosition > 60) {
                    return this.bar = true;
                }
                return this.bar = false;
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