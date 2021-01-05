<template>
    <div class="show-content">
        <EventHeader 
            :user="user"
            :event="event" />
        <div class="es__body">
            <div class="es__body--left">
                <EventAbout 
                    :remaining="remaining"
                    :event="event" />
                <EventStaffpick
                    v-if="event.staffpick"
                    :event="event" />
                <EventLocation :event="event" />
                <EventDetails :event="event" />
                <EventReviews :event="event" />
            </div>
            <div class="es__body--right">
                <div class="es__pricing--body">
                    <EventTickets
                        :tickets="tickets"
                        :event="event" />
                    <EventDates :event="event" />
                    <div class="es__ticket--buy">
                        <a 
                            :href="eventUrl" 
                            rel="noreferrer noopener" 
                            target="_blank">
                            <button class="event-bottom-bar__button">
                                {{ loadevent.call_to_action ? loadevent.call_to_action : 'Get Tickets' }}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="es__widebody">
            <EventOrganizer :event="event" />
        </div>

        <div 
            class="grid event-bottom-bar" 
            v-if="isMobile"
            :class="{ active: bar }">
            <div class="event-bottom-bar__name">
                <picture>
                    <source 
                        height="50" 
                        width="50" 
                        type="image/webp" 
                        :srcset="`/storage/${event.thumbImagePath}`"> 
                    <img 
                        class="event-bottom-bar__img" 
                        height="50" 
                        width="50" 
                        :src="`/storage/${event.thumbImagePath.slice(0, -4)}jpg`" 
                        :alt="event.name">
                </picture>
                <h4>{{ event.name }}</h4>
            </div>
            <div class="event-price">
                <h4>{{ event.price_range }}</h4>
            </div>
            <div class="event-get-tickets">
                <a 
                    :href="eventUrl" 
                    rel="noreferrer noopener" 
                    target="_blank">
                    <button class="event-bottom-bar__button">
                        {{ loadevent.call_to_action ? loadevent.call_to_action : 'Get Tickets' }}
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import {LMap, LTileLayer, LMarker, LPopup} from 'vue2-leaflet'
    import ShowMore  from './components/show-more.vue'
    import EventHeader  from './show/event-show-header.vue'
    import EventDetails  from './show/event-show-details.vue'
    import EventAbout  from './show/event-show-about.vue'
    import EventTickets  from './show/event-show-tickets.vue'
    import EventDates  from './show/event-show-dates.vue'
    import EventOrganizer  from './show/event-show-organizer.vue'
    import EventLocation  from './show/event-show-location.vue'
    import EventStaffpick  from './show/event-show-staffpick.vue'
    import EventReviews  from './show/event-show-reviews.vue'

    export default {

        props: ['loadevent', 'user', 'tickets'],

        components: { LMap, LTileLayer, LMarker, LPopup, ShowMore, EventHeader, EventAbout, EventDetails, EventTickets, EventDates, EventOrganizer, EventLocation, EventStaffpick, EventReviews },

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
                if (this.loadevent.ticketUrl) {return this.loadevent.ticketUrl}
                if (this.loadevent.websiteUrl) {return this.loadevent.websiteUrl}
                return this.loadevent.organizer.website;
            },

        },

        data() {
            return {
                event: this.loadevent ? this.loadevent : '',
                zoom:13,
                center: this.loadevent.location_latlon,
                url:'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
                attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                week: this.loadevent ? this.loadevent.show_on_going : '',
                showEventClass: 'show-heart-location',
                showEventMobileClass: 'show-heart-mobile-location',
                organizerImage: '',
                dates: [],
                remaining: [],
                bar: false,
                lastScrollPosition: 0,
                config: this.initializeCalendarObject(),
                titleFontSize: '',
                hover: null,
                isMobile: window.innerWidth < 768 ? true : false,

            }
        },

        methods: {
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

            handleScroll () {
                const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
                return currentScrollPosition > 60 ? this.bar = true : this.bar = false
            },

            canUseWebP() {
                let webp = (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
                if (this.loadevent.organizer.thumbImagePath && webp) {
                    return this.organizerImage = `background-image:url('/storage/${this.loadevent.organizer.thumbImagePath}')`;
                }
                if (this.loadevent.organizer.thumbImagePath) {
                    return this.organizerImage = `background-image:url('/storage/${this.loadevent.organizer.thumbImagePath.slice(0, -4)}jpg')`;
                }
            },

            initializeCalendarObject() { 
                return {
                    maxDate: new Date().fp_incr(180),
                    mode: "multiple",
                    inline: true,
                    showMonths: window.innerWidth < 768 ? 1 : 2,
                    dateFormat: 'Y-m-d H:i:s',
                    disable: [],
                }
            },

        },

        mounted() {
            this.getDates();
            this.canUseWebP();

        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        unmounted () {
            window.removeEventListener('scroll', this.handleScroll);
        },
    };
</script>