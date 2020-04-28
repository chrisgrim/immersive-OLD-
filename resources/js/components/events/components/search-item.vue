<template>
    <div class="card">
        <favorite :inputclass="showEventClass" :event="event"></favorite>
        <a class="url" :href="`/events/${event.slug}?name=${name}&lat=${lat}&lng=${lng}`">         
            <div class="card-image">
                <picture>
                    <source type="image/webp" :srcset="`/storage/${event.thumbImagePath}`"> 
                    <img :src="`/storage/${event.thumbImagePath.slice(0, -4)}jpg`" :alt="`${event.name} Immersive Event`">
                </picture>
            </div>
            <div class="card-title">
                <h3>{{ event.name }}</h3>
            </div>
            <div class="card-organizer">
                <h3>{{ event.organizer.name }}</h3>
            </div>
            <div class="card-location">
                {{ event.location.city }}
            </div>
            <div class="card-price">
                <h4>{{ event.price_range }}</h4>
            </div>
        </a>
    </div>
</template>

<script>
    export default {

        name: "search-item",

        props: {
            event: { type:Object },
            user: { type:String }
        },

        data() {
            return {
                divBackground: `background-image: url("/storage/${this.event.thumbImagePath}");`,
                showEventClass: 'heart',
                name: new URL(window.location.href).searchParams.get("name"),
                lat: new URL(window.location.href).searchParams.get("lat"),
                lng: new URL(window.location.href).searchParams.get("lng"),
                eventImage: '',
            }
        },

        methods: {
            canUseWebP() {
                let webp = (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
                if (this.event.thumbImagePath && webp) {
                    return this.eventImage = `background-image: url('/storage/${this.event.thumbImagePath}')`
                };
                if (this.event.thumbImagePath) {
                    return this.eventImage = `background-image: url('/storage/${this.event.thumbImagePath.slice(0, -4)}jpg')`
                }
            },
        },

        mounted() {
            this.canUseWebP();
        },
    };
</script>