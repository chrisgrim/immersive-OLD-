<template>
	<div class="event">
		<div class="header">
            <div class="section">
    			<div class="left">
    				<div class="content">	
    					<span class="category">{{event.category ? event.category.name : ''}}</span>
    					<span class="title">{{event.name}}</span>
                        <div class="info">
                            <div>
                                <img src="/storage/website-files/price.png" alt="">
                                <span class="des">Price</span>
                                <span class="ans">{{event.price_range}}</span>
                            </div>
                            <div>
                                <img src="/storage/website-files/location.png" alt="">
                                <span class="des">Location</span>
                                <span class="ans">{{event.location.city}}</span>
                            </div>
                            <div>
                                <img src="/storage/website-files/calendar.png" alt="">
                                <span class="des">Shows</span>
                                <span class="ans">{{dateArray ? dateArray.length : ''}} dates left</span>
                            </div>
                        </div>
    				</div>
    			</div>
    			<div class="right">
                    <div class="image" :style="{ backgroundImage: `url('/storage/${event.largeImagePath}')` }">
                    </div>
                    <div v-if="user.length">
                        <favorite :inputclass="showEventClass" :event="event"></favorite>
                    </div>
                    <div v-else="user.length" :class="showEventClass">
                        <svg viewBox="0 0 32 32" class="unhearted">
                            <a :href="'/favorite/' + event.slug + '/login'">
                                <path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38"></path>
                            </a>
                        </svg>
                    </div>
    			</div>
            </div>
		</div>
		<div class="body">
			<div class="section about">
                <div class="content">
                    <div class="left">
                        <div class="text">
                            <h3>About the show</h3>
                        </div>
                    </div>
                    <div class="right">
                        <p style="white-space: pre-wrap;" v-if="showMore !== 'description'" class="text"><i>"{{event.tag_line}}"</i><br>{{event.description.substring(0,400)}}<span class="show" @click="showMore = 'description'">... Show More</span></p>
                        <p style="white-space: pre-wrap;" v-if="showMore == 'description'" class="text"><i>"{{event.tag_line}}"</i><br>{{event.description}}<span class="show" @click="showMore = null">... Show Less</span></p>
                    </div>
                </div>
            </div>
            <div class="section reviews">
                <div class="back"></div>
                <div class="content">
                    <div class="left">
                       <div class="text">
                            <h3>Show<br>Reviews</h3>
                        </div>
                    </div>
                    <div class="right">
                        <div class="box">
                            <div class="name">
                                 no proscenium
                            </div>
                            <div class="review">
                                Such a good show I would recommend everyone go see it.
                            </div>
                        </div>
                        <div class="box">
                            <div class="name">
                                 no proscenium
                            </div>
                            <div class="review">
                                Such a good show I would recommend everyone go see it.Such a good show I would recommend everyone go see it

                            </div>
                        </div>
                        <div class="box">
                            <div class="name">
                                 no proscenium
                            </div>
                            <div class="review">
                                Such a good show I would recommend everyone go see it.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section dates">
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
                            name="dates">
                        </flat-pickr>
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
                        <div class="image">
                            <div :style="{ backgroundImage: `url('/storage/${event.organizer.imagePath}')` }" class="img">
                            </div>
                        </div>
                        <div class="name">
                            {{event.organizer.name}}
                        </div>
                        <div v-if="event.organizer.description.length>=50" class="description">
                            {{event.organizer.description}}
                        </div>
                        <div v-if="event.organizer.description.length<=8" class="description">
                            {{event.organizer.description}}
                        </div>
    				</div>
                </div>
			</div>
			<div class="location-section">
				<div>
					<div class="location-header">
						<h1>Location</h1>
					</div>
					<div class="location-place">
						<h2>
							<div class="text" v-if="event.location.hiddenLocationToggle">
								{{event.location.city}} {{event.location.region}}
							</div>
                            <div class="text" v-else="event.location.hiddenLocationToggle">
                                {{event.location.home}} {{event.location.street}} {{event.location.city}} {{event.location.region}}
                            </div>
						</h2>
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
    import flatPickr from 'vue-flatpickr-component'
    import 'flatpickr/dist/flatpickr.css'

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
		},

        computed: {

            // return this.dates.length > 10 ? this.dates.split(",") : '';
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
				url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
				attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				allowZoom: false,
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
                this.event.shows.forEach(event=> {
                    this.dates.push(event.date)
                });
            },
            handleScroll (event) {
                event.path[1].scrollY > 120 ? this.bar = true : this.bar = false; 
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