<template>
	<div>
		<div class="event-head-section">
			<div class="event-title">
				<div  class="event-title_box">
					<div class="event-title_content">
						<span class="event-category_text">{{event.category.name}}</span>
						<span class="event-title_text">{{event.name}}</span>
					</div>
				</div>
			</div>
			<div :style="{ backgroundImage: `url('/storage/${event.largeImagePath}')` }" class="event-image">
				<div :class="showEventClass">
					<svg viewBox="0 0 32 32" class="unhearted">
						<a :href="'/favorite/' + event.slug + '/login'">
							<path d="m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38"></path>
						</a>
					</svg>
				</div>
				<div>
					<favorite :inputclass="showEventClass" :event="event"></favorite>
				</div>
			</div>
		</div>
		<div class="event-body">
			<div class="event-description-section">
				<div class="event-description">
					<div class="event-top-info">
						<div class="text">
							Price {{event.price_range}}
						</div>
						<div class="text">
							{{event.location.city}}
						</div>
					</div>
					<div class="event-description_box">
						<span class="event-description_text">
						{{event.description}}
						</span>
					</div>
				</div>
				<div class="event-organizer">
					<div class="event-organizer_image">
						<div :style="{ backgroundImage: `url('/storage/${event.organizer.imagePath}')` }" class="img">
						</div>
					</div>
					<div class="event-organizer_description">
						<div class="organizer-name">
							{{event.organizer.name}}
						</div>
						<div class="organizer-description">
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
							<div class="zoom-button-section">
								<div class="zoom-in">
									<button @click.prevent="zoom += 1">
										<svg viewBox="0 0 16 16" height="16" width="16" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0V1z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"></path></svg>
									</button>
								</div>
								<div class="zoom-out">
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
		<div class="event-bottom-bar">
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

	export default {

        props: {
	        loadevent: {
	            type:Object,
	        },
	    },

	    components: { 
			LMap, 
			LTileLayer, 
			LMarker,
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
			}
		},

		methods: {
			//deletes a ticket row or clears the first one

		}
    };
</script>