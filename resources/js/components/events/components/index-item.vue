<template>
    <div :class="{ 'dis': isDisabled }" class="item">
        <favorite :user="user" :inputclass="showEventClass" :event="event"></favorite>
        <a :href="url">
            <div class="image" :style="this.isDisabled ? disabledBackground : divBackground"></div>
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
            isDisabled() {
                return this.event.approval_process == 'ready' ? true : false; 
            },
            shortBack() {
                return this.event.thumbImagePath ? `/storage/${this.event.thumbImagePath}` : 'test';
            },
            disabledBackground() {
                return `background-image: url('/storage/default-avatar/default-disabled.png'),url('${this.shortBack}')`;
            },
        },

        data() {
            return {
                divBackground: `background-image: url('${this.event.thumbImagePath ? /storage/ + this.event.thumbImagePath : '/storage/default-avatar/default.jpg'}')`,
                showEventClass: 'heart',
                url: this.loadurl ? this.loadurl : '/events/' + this.event.slug,
            }
        },

        methods: {
            getUrl() {
                if (this.event.expectation_id) {
                    return this.url = `/create-event/${this.event.slug}/title`;
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
                if (this.event.approved == 0) {
                    return this.url = `/create-event/${this.event.slug}/title`;
                }
            }
        },

        watch: {
            event: function(newVal, oldVal) { // watch it
                this.getUrl();
            }
        },

        mounted() {
            this.event.approved ? '' : this.getUrl();
        }

    };
</script>