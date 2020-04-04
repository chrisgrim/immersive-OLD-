<template>
    <div :class="{ 'dis': isDisabled }" class="item">
        <favorite :user="user" :inputclass="showEventClass" :event="event"></favorite>
        <a :href="url">
            <div class="image" :style="isModified ? isModified : divBackground">
                <div v-if="this.event.status == 'r'">
                    <h3><b>Under Review</b></h3>
                </div>
                <div v-if="this.event.status == 'n'">
                    <h3><b>Needs Changes</b></h3>
                </div>
            </div>
            <div class="etitle">
                <h3>{{ event.name }}</h3>
            </div>
            <div class="eprice">
                <h4>{{ event.price_range }}</h4><p> / show</p>
            </div>
        </a>
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
        }

    };
</script>