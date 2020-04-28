<template>
    <div :class="{ 'dis': isDisabled }" class="card">
        <a :href="url" class="url">
            <div v-if="event.thumbImagePath" class="card-image" :style="`width:${imageWidth}px`">
                <picture>
                    <source type="image/webp" :srcset="`/storage/${event.thumbImagePath}`"> 
                    <img :src="`/storage/${event.thumbImagePath.slice(0, -4)}jpg`" :alt="`${event.name} Immersive Event`">
                </picture>
            </div>
            <div class="card-without-image" v-else :style="`width:${imageWidth}px`">
                <div class="card-without-image_name">
                    <h4>{{event.name ? event.name : 'New Event'}}</h4>
                </div>
            </div>
            <div class="card-title">
                <h3>{{ event.name ? event.name : 'New Event'}}</h3>
            </div>
            <div class="card-price">
                <h4>{{ event.price_range }}</h4>
            </div>
        </a>
        <div class="card-inprogress" v-if="event.status == 'r'">
            <h3><b>Under Review</b></h3>
        </div>
        <div class="card-inprogress" v-if="event.status == 'n'">
            <h3><b>Needs Changes</b></h3>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            event: { type:Object },
            loadurl: { type:String },
            user: { type:String }
        },

        data() {
            return {
                divBackground: `background-image: url('${this.event.thumbImagePath ? /storage/ + this.event.thumbImagePath : '/storage/default-avatar/default.jpg'}')`,
                showEventClass: 'heart',
                url: `/create-event/${this.event.slug}/title`,
                isModified: '',
                isDisabled: false,
                imageWidth: '',
            }
        },

        methods: {

            eventStatus() {
                if (this.event.status == 'r' || this.event.status == 'n') {
                    this.event.status == 'r' ? this.isDisabled = true : '';
                    return this.isModified = `background: linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)),url('/storage/${this.event.thumbImagePath}');`
                }
            },

            getUrl() {
                if (this.event.status == 'n') {
                    return this.url = `/create-event/${this.event.slug}/title`;
                }
                if (this.event.largeImagePath) {
                    return this.url = `/create-event/${this.event.slug}/images`;
                }
                if (this.event.advisories) {
                    return this.url = `/create-event/${this.event.slug}/images`;
                }
                if (this.event.description) {
                    return this.url = `/create-event/${this.event.slug}/advisories`;
                }
                if (this.event.show_times) {
                    return this.url = `/create-event/${this.event.slug}/description`;
                }
                if (this.event.category_id) {
                    return this.url = `/create-event/${this.event.slug}/shows`;
                }
                if (this.event.location_latlon) {
                    return this.url = `/create-event/${this.event.slug}/category`;
                }
                if (this.event.name) {
                    return this.url = `/create-event/${this.event.slug}/location`;
                }
                return this.url = `/create-event/${this.event.slug}/title`;
            },

            handleResize() {
                if (window.innerWidth < 768) {
                    this.imageWidth = window.innerWidth/1.4;
                }
            }
        },

        watch: {
            event: function(newVal, oldVal) { // watch it
                this.getUrl();
            }
        },

        mounted() {
            this.event.status == 'p' ? '' : this.getUrl();
            this.eventStatus();
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        }

    };
</script>