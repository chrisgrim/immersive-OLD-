<template>
    <div :class="{ 'dis': isDisabled }" class="item">
        <favorite :inputclass="showEventClass" :event="event"></favorite>
        <a :href="url">
            <div class="image" :style="eventImage">
               
            </div>
            <div class="etitle">
                <h3>{{ event.name }}</h3>
            </div>
            <div class="eprice">
                <h4>{{ event.price_range }}</h4> 
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            event: { type:Object },
            loadurl: { type:String },
        },

        data() {
            return {
                showEventClass: 'heart',
                url: this.loadurl ? this.loadurl : '/events/' + this.event.slug,
                isModified: '',
                isDisabled: false,
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