<template>
	<div class="event">
		<div class="header">
            <div class="section">
    			<div class="left">
    				<div class="content">	
    					<span class="category">{{event.category ? event.category.name : ''}}</span>
    					<span class="title">{{event.name}}</span>
                        <i>{{event.tag_line}}</i>
                        <div v-if="event.staffpick">
                            EI Pick of the week!
                        </div>
                        <div class="info">
                            <div>
                                <img src="/storage/website-files/price.png" alt="">
                                <span class="des">Price</span>
                                <span class="ans">{{event.price_range}}</span>
                            </div>
                            <div>
                                <img src="/storage/website-files/location.png" alt="">
                                <div v-if="event.hasLocation">
                                    <span class="des">Location</span>
                                    <span class="ans">{{event.location.city}}</span>
                                </div>
                                <div v-else>
                                    <span class="des">Location</span>
                                    <span class="ans">Anywhere</span>
                                </div>
                            </div>
                            <div>
                                <img src="/storage/website-files/calendar.png" alt="">
                                <div v-if="event.shows">
                                    <span class="des">Shows</span>
                                    <span class="ans">{{dateArray ? dateArray.length : ''}} dates left</span>
                                </div>
                                <div v-if="event.show_on_going">
                                    <span class="des">Show Days</span>
                                    <span class="ans">M W T</span>
                                </div>
                            </div>
                        </div>
    				</div>
    			</div>
    			<div class="right">
                    <div class="image">
                        <picture>
                            <source type="image/webp" :srcset="`/storage/${event.largeImagePath}`"> 
                            <img :src="`/storage/${event.largeImagePath.slice(0, -4)}jpg`" :alt="`${event.name} Immersive Event`">
                        </picture>
                    </div>
                    <div>
                        <favorite :user="user" :inputclass="showEventClass" :event="event"></favorite>
                    </div>
                    
    			</div>
            </div>
		</div>
		<div class="body">
			<div class="section about">
                <div class="content">
                    <div class="left">
                        <div class="text">
                            <h3>About the {{event.category.name}}</h3>
                        </div>
                    </div>
                    <div class="right">
                        <p 
                        style="white-space: pre-line;" 
                        v-if="showMore !== 'description'" 
                        class="text">{{event.description.substring(0,400)}}<span 
                            class="show" 
                            v-if="event.description.length >= 400"
                            @click="showMore = 'description'">... Show More
                            </span>
                        </p>
                        <p 
                        style="white-space: pre-line;" 
                        v-show="showMore == 'description'" 
                        class="text">{{event.description}}<span 
                            class="show" 
                            @click="showMore = null">... Show Less
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div v-if="event.eventreviews ? event.eventreviews.length : null" class="section reviews">
                <div class="back"></div>
                <div class="content">
                    <div class="left">
                       <div class="text">
                            <h3>Show<br>Reviews</h3>
                        </div>
                    </div>
                    <div class="right">
                        <div class="box" v-for="review in event.eventreviews">
                            <div class="image">
                                <img :src="review.image_path" alt="">
                            </div>
                            <a rel="noreferrer" target="_blank" :href="review.url">
                                <div class="name">
                                    {{review.reviewer_name}}
                                </div>
                            </a>
                            <div class="review">
                                <i>{{review.review}}</i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="event.shows" class="section dates">
                <div class="content">
                    <div class="left">
                        <div class="text">
                            <h3>Show Dates</h3>
                        </div>
                    </div>
                    <div class="right">
                        <flat-pickr
                            v-model="dates"
                            :config="config"                                                  
                            class="form-control"
                            placeholder="Select date"
                            ref="datePicker"             
                            name="dates">
                        </flat-pickr>
                        <div class="times">
                            <p style="white-space: pre-wrap;">{{event.show_times}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="event.show_on_going" class="section dates">
                <div class="content">
                    <div class="left">
                        <div class="text">
                            <h3>Show Times</h3>
                        </div>
                    </div>
                    <div class="right">
                        <div class="calendar">
                            <div class="field">
                                <div class="week-calendar">
                                    <div 
                                    class="day" 
                                    :class="{ active: week.mon }" >
                                        <h4>Mon</h4>
                                    </div>
                                    <div 
                                    class="day"
                                    :class="{ active: week.tue }" >
                                        <h4>Tue</h4>
                                    </div>
                                    <div 
                                    class="day" 
                                    :class="{ active: week.wed }" >
                                        <h4>Wed</h4>
                                    </div>
                                    <div 
                                    class="day" 
                                    :class="{ active: week.thu }" >
                                        <h4>Thu</h4>
                                    </div>
                                    <div 
                                    class="day"
                                    :class="{ active: week.fri }" >
                                        <h4>Fri</h4>
                                    </div>
                                    <div 
                                    class="day"
                                    :class="{ active: week.sat }">
                                        <h4>Sat</h4>
                                    </div>
                                    <div 
                                    class="day"
                                    :class="{ active: week.sun }">
                                        <h4>Sun</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="times">
                            <p style="white-space: pre-wrap;">{{event.show_times}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section details">
                <div class="content">
                    <div class="left">
                        <div class="text">
                            <h3>Show Details</h3>
                        </div>
                    </div>
                    <div class="right">
                        <div class="block">
                            <div class="title">
                                <h4>Content Advisories</h4>
                            </div>
                            <div class="info">
                                <p>&#8226; {{event.advisories.ageRestriction}}</p>
                                <div v-for="item in event.content_advisories">
                                    <p>&#8226; {{item.advisories}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="block">
                            <div class="title">
                                <h4>Contact Advisories</h4>
                            </div>
                            <div class="info">
                                <div v-for="item in event.contact_levels">
                                    <p>&#8226; {{item.level}}</p>
                                </div>
                                <p>&#8226; {{event.advisories.contactAdvisories}}</p>
                            </div>
                        </div>
                        <div class="block">
                            <div class="title">
                                <h4>Mobility Advisories</h4>
                            </div>
                            <div class="info">
                                <div v-for="item in event.mobility_advisories">
                                    <p>&#8226; {{item.mobilities}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section organizer">
                <div class="content">
                    <div class="left">
                        <div class="text">
                            <h3>About the organizer</h3>
                        </div>
                    </div>
    				<div class="right">
                        <a :href="`/organizer/${event.organizer.slug}`">
                            <div class="image">
                                <div :style="event.organizer.thumbImagePath ? `background-image:url('/storage/${event.organizer.thumbImagePath}')` : `background:${event.organizer.hexColor}`" class="img">
                                    <div class="icontext" v-if="!event.organizer.thumbImagePath">
                                        <h2>{{event.organizer.name.charAt(0)}}</h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a :href="`/organizer/${event.organizer.slug}`">
                            <div class="name">
                                {{event.organizer.name}}
                            </div>
                        </a>
                        <div style="white-space: pre-line;" v-if="event.organizer.description" class="description">
                            {{event.organizer.description}}
                        </div>
                        <ContactOrganizer :user="user" :loadorganizer="event.organizer"></ContactOrganizer>
    				</div>
                </div>
			</div>
			<div v-if="bar && event.location.latitude" class="section location">
				<div>
					<div class="title">
						<h3>Location</h3>
					</div>
					<div class="text" v-if="event.location.hiddenLocationToggle">
                        <a rel="noreferrer" target="_blank" :href="`http://maps.google.com/maps?q=${event.location.city},+${event.location.region}`">
    						<p>{{event.location.city}} {{event.location.region}}</p>
                            <br>
                            <p>{{event.location.hiddenLocation}}</p>
                        </a>
					</div>
                    <div class="text" v-else="event.location.hiddenLocationToggle">
                        <a rel="noreferrer" target="_blank" :href="`http://maps.google.com/maps?q=${event.location.home}+${event.location.street},+${event.location.city},+${event.location.region}`">
                            <p>{{event.location.home}} {{event.location.street}}, {{event.location.city}},  {{event.location.region}}</p>  
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
								<l-tile-layer 
								:url="url"></l-tile-layer>
								<l-marker 
								:lat-lng="center"></l-marker>
								</l-map>
							</div>	
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="event-bottom-bar" :class="{ active: bar }">
			<div class="event-name">
				{{event.name}}
			</div>
			<div class="event-price">
				{{event.price_range}}
			</div>
			<div class="event-get-tickets">
				<a :href="event.ticketUrl">
					<button>
						Get Tickets
					</button>
				</a>
			</div>
		</div>
    </div>
</template>

<script>
	import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'
    import format from 'date-fns/format'
    import ContactOrganizer from '../organizers/contact-organizer.vue'
    import flatPickr from 'vue-flatpickr-component'

	export default {

        props: {
	        loadevent: {
	            type:Object,
	        },
            user: {
                type:String
            }
	    },

	    components: { 
			LMap, 
			LTileLayer, 
			LMarker,
            flatPickr,
            ContactOrganizer,
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
        },

		data() {
			return {
				event: this.loadevent ? this.loadevent : '',
				isModalVisible: false,
				zoom:13,
				center: this.loadevent.location_latlon,
				url:'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				allowZoom: false,
                week: this.loadevent ? this.loadevent.show_on_going : '',
				showEventClass: 'show-heart-location',
                showMore: null,
                dates: [],
                remaining: [],
                bar: false,
                config: {
                    minDate: "today",
                    maxDate: new Date().fp_incr(180),
                    mode: "multiple",
                    inline: true,
                    showMonths: 2,
                    dateFormat: 'Y-m-d H:i:s',    
                },
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
                event.path[1].scrollY > 60 ? this.bar = true : this.bar = false; 
            }
		},

        watch: {
            dates() {
                this.$refs.datePicker.fp.jumpToDate(new Date());
            }
        },

        mounted() {
            this.getDates();

        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        }
    };
</script>