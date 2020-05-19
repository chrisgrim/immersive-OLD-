<template>
	<div class="content">
        <nav class="event-show mobile">
            <div class="back">
                <a v-if="searchUrl" :href="searchUrl">
                    <svg aria-label="Back" role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                </a>
                <a v-else href="/">
                    <svg aria-label="Back" role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                </a>
            </div>
            <div>
                <favorite :user="user" :inputclass="showEventMobileClass" :event="event"></favorite>
            </div>
        </nav>
		<header class="event-show grid">
			<div class="header-left">
				<div class="content">	
					<span class="header-left__cat">{{event.category ? event.category.name : ''}}</span>
					<span class="header-left__title"><h1>{{event.name}}</h1></span>
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
                                <span v-if="dateArray && dateArray.length > 1 ? dateArray.length : ''" class="header__show-info bold">{{ dateArray.length }} dates left</span>
                                <span v-if="dateArray && dateArray.length == 1 ? dateArray.length : ''" class="header__show-info bold">{{ dateArray.length }} date left</span>
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
                <div class="desktop">
                    <favorite :user="user" :inputclass="showEventClass" :event="event"></favorite>
                </div>
			</div>
		</header>
	
		<section class="event-show grid two-panel">
            <div class="event-title">
                <h2>About {{event.category.name}}</h2>
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
                    <p style="white-space: pre-wrap;">{{event.show_times}}</p>
                </div>
            </div>
        </section>
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
                    <p style="white-space: pre-wrap;">{{event.show_times}}</p>
                </div>
            </div>
        </section>
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
                        <h3>Contact Advisories</h3>
                    </div>
                    <ul class="info">
                        <li v-for="item in event.contact_levels">
                            <p>{{item.level}}</p>
                        </li>
                        <li>
                            <p>{{event.advisories.contactAdvisories}}</p>
                        </li>
                    </ul>
                </div>
                <div class="grid two-panel">
                    <div class="title">
                        <h3>Mobility Advisories</h3>
                    </div>
                    <ul class="info">
                        <li v-for="item in event.mobility_advisories">
                            <p>{{item.mobilities}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
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
                    {{event.organizer.description}}
                </div>
                <ContactOrganizer :user="user" :loadorganizer="event.organizer"></ContactOrganizer>
			</div>
		</section>
		<section v-if="bar && event.location.latitude" class="section event-show location">
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
				<div class="location-map">
					<div v-if="center">
						<div class="zoom">
							<div class="in">
								<button @click.prevent="zoom += 1">
									<svg viewBox="0 0 16 16" height="16" width="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0V1z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
								</button>
							</div>
							<div class="out">
								<button @click.prevent="zoom -= 1">
									<svg viewBox="0 0 16 16" height="16" width="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
								</button>
							</div>
						</div>
						<div style="width:100%;height:400px">
							<l-map :zoom="zoom" :center="center" :options="{ scrollWheelZoom: allowZoom, zoomControl: allowZoom }">
							<l-tile-layer :url="url"></l-tile-layer>
							<l-marker :lat-lng="center">
                                <l-icon class-name="icons"><p>{{event.organizer.name.slice(0,20)}}<span v-if="event.organizer.name.length > 20">...</span></p></l-icon>
                                <l-popup>
                                    <div class="show-pop">
                                        <a rel="noreferrer" target="_blank" :href="`http://maps.google.com/maps?q=${event.location.home}+${event.location.street},+${event.location.city},+${event.location.region}`">
                                            <div class="info">
                                                <div class="name">
                                                    {{event.location.home}} {{event.location.street}}, {{event.location.city}},  {{event.location.region}} 
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
		<div class="grid event-bottom-bar" :class="{ active: bar }">
			<div class="event-name desktop">
				<h4>{{event.name}}</h4>
			</div>
			<div class="event-price">
				<h4>{{event.price_range}}</h4>
			</div>
			<div class="event-get-tickets">
				<a :href="event.ticketUrl" rel="noreferrer" target="_blank">
					<button>
						Get Tickets
					</button>
				</a>
			</div>
		</div>
    </div>
</template>

<script>
	import {LMap, LTileLayer, LMarker, LPopup, LIcon} from 'vue2-leaflet'
    import format from 'date-fns/format'
    import ContactOrganizer from '../organizers/contact-organizer.vue'
    import flatPickr from 'vue-flatpickr-component'

	export default {

        props: ['loadevent', 'user'],

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

            dateArray() {
                if(!Array.isArray(this.dates) && this.dates.includes(",")) {
                    return this.dates.split(",");
                } else {
                    if(!Array.isArray(this.dates)) {
                        return [this.dates];
                    } else {
                        ''
                    }
                }
            },

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

			}
		},

		methods: {
            getDates() {
                if(this.event.shows) {
                    this.event.shows.forEach(event=> {
                        this.dates.push(event.date)
                    });
                }
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
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    };
</script>