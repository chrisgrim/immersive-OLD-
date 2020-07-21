<template>
    <div :class="{ 'dis': isDisabled }" class="card">
        <a :href="url" class="url">
            <div v-if="event.thumbImagePath" class="card-image">
                <picture>
                    <source type="image/webp" :srcset="`/storage/${event.thumbImagePath}`"> 
                    <img :src="`/storage/${event.thumbImagePath.slice(0, -4)}jpg`" :alt="`${event.name} Immersive Event`">
                </picture>
            </div>
            <div class="card-without-image" v-else>
            </div>
            <div class="card-title">
                <p>{{ event.name ? event.name : 'New Event'}}</p>
            </div>
            <div class="card-price">
                <p>{{ event.price_range }}</p>
            </div>
             <div class="card-inprogress" v-if="inProgress">
                <p><b>Your Draft</b></p>
            </div>
            <div class="card-inprogress" v-if="event.status == 'n' || event.status == '9'">
                <p><b>Needs Changes</b></p>
            </div>
             <div class="card-inprogress" v-if="event.status == 'e'">
                <p><b>Goes Live <br> {{ new Date(event.embargo_date) | dateFormat('MMM DD, YYYY')}} </b></p>
            </div>
        </a>
        <div class="card-inprogress" v-if="event.status == 'r'">
            <p><b>Under Review</b><br>(Locked)</p>
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

        computed: {
            inProgress() {
                return this.progress.includes(this.event.status) ? true : false;
            }
        },

        data() {
            return {
                divBackground: `background-image: url('${this.event.thumbImagePath ? /storage/ + this.event.thumbImagePath : '/storage/default-avatar/default.jpg'}')`,
                showEventClass: 'heart',
                url: `/create-event/${this.event.slug}/title`,
                isModified: '',
                isDisabled: false,
                imageWidth: '',
                progress: ['0','1','2','3','4','5','6','7','8','9','d'],
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
                if (this.event.status == '7') {
                    return this.url = `/create-event/${this.event.slug}/images`;
                }
                if (this.event.status == '6') {
                    return this.url = `/create-event/${this.event.slug}/images`;
                }
                if (this.event.status == '5') {
                    return this.url = `/create-event/${this.event.slug}/advisories`;
                }
                if (this.event.status == '4') {
                    return this.url = `/create-event/${this.event.slug}/description`;
                }
                if (this.event.status == '3') {
                    return this.url = `/create-event/${this.event.slug}/shows`;
                }
                if (this.event.status == '2') {
                    return this.url = `/create-event/${this.event.slug}/category`;
                }
                if (this.event.status == '1') {
                    return this.url = `/create-event/${this.event.slug}/location`;
                }
                return this.url = `/create-event/${this.event.slug}/title`;
            },

        },

        watch: {
            event: function(newVal, oldVal) { // watch it
                this.getUrl();
            }
        },

        mounted() {
            this.event.status == 'p' ? '' : this.getUrl();
            this.eventStatus();
        },


    };
</script>