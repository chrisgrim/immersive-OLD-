<template>
    <div :class="{ 'dis': isDisabled, black : color=='black' }" class="card" >
        <favorite :inputclass="showEventClass" :event="event"></favorite>
        <a :href="url" class="url">
            <div class="card-image" :style="`width:${imageWidth}px`">
                <picture>
                    <source type="image/webp" :srcset="`/storage/${event.thumbImagePath}`"> 
                    <img :src="`/storage/${event.thumbImagePath.slice(0, -4)}jpg`" :alt="`${event.name} Immersive Event`">
                </picture>
            </div>
            <div class="card-content">
                <div class="card-title" >
                    <h3 :class="{ black : color=='black' }">{{ event.name }}</h3>
                </div>
                <div class="card-organizer">
                    <h3 :class="{ black : color=='black' }">{{ event.organizer.name }}</h3>
                </div>
                <div class="card-price">
                    <h4 :class="{ black : color=='black' }">{{ event.price_range }}</h4>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        props:['event', 'loadurl', 'color'],

        data() {
            return {
                showEventClass: 'heart',
                url: this.loadurl ? this.loadurl : '/events/' + this.event.slug,
                isDisabled: false,
                imageWidth: '',
            }
        },

        methods: {
            handleResize() {
                if (window.innerWidth < 768) {
                    this.imageWidth = window.innerWidth/1.4;
                }
            }
        },

        mounted() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        }

    };
</script>