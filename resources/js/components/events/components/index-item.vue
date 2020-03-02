<template>
    <div :class="{ 'dis': isDisabled }" class="item">
        <favorite :user="user" :inputclass="showEventClass" :event="event"></favorite>
        <a :href="url">
            <div class="image" :style="isModified ? isModified : divBackground"></div>
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
        computed: {
            // isSubmitted() {
            //     return this.event.approval_process == 'ready' ? this.isModified = `background-image: url('/storage/default-avatar/default-disabled.png'),url('${this.shortBack}')` : false; 
            // },
            // shortBack() {
            //     return this.event.thumbImagePath ? `/storage/${this.event.thumbImagePath}` : 'test';
            // },
            // disabledBackground() {
            //     return `background-image: url('/storage/default-avatar/default-disabled.png'),url('${this.shortBack}')`;
            // },
        },

        data() {
            return {
                divBackground: `background-image: url('${this.event.thumbImagePath ? /storage/ + this.event.thumbImagePath : '/storage/default-avatar/default.jpg'}')`,
                showEventClass: 'heart',
                url: this.loadurl ? this.loadurl : '/events/' + this.event.slug,
                isModified: '',
                isDisabled: false,
            }
        },

        methods: {

            eventStatus() {
                if (this.event.approval_process == 'ready') {
                    this.isDisabled = true;
                    return this.isModified = `background-image: url('/storage/default-avatar/default-disabled.png'),url('/storage/${this.event.thumbImagePath}')`
                }
                if (this.event.approval_process == 'hasIssues') {
                    return this.isModified = `background-image: url('/storage/default-avatar/default-disabled.png'),url('/storage/${this.event.thumbImagePath}')`
                }
            },

            getUrl() {

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
            this.event.approved ? '' : this.getUrl();
            this.eventStatus();
        }

    };
</script>