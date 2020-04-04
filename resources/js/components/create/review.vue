<template>
    <div>
        <div class="inNav">
            <button :disabled="dis" class="create review" @click.prevent="goBack()"> Back </button>
            <button :disabled="dis" class="create review" @click.prevent="submitEvent()"> Submit </button>
        </div>
    </div>
</template>

<script>
    
    import { required, maxLength } from 'vuelidate/lib/validators';

    export default {
        props: {
            event: { type:Object },
        },

        data() {
            return {
                name: '',
                eventUrl: `/create-event/${this.event.slug}`,
                tagLine: '',
                activeItem: null,
                dis:false,
            }
        },

        methods: {

            //On click Sets class to green to remove error
            //clears out all server errors
            clearinput() {
                this.nameActive = true;
                this.serverErrors = [];
            },

           
            submitEvent() {
                this.dis = true;
                axios.get(`${this.eventUrl}/submit`);
                window.location.href = `${this.eventUrl}/thankyou`;
            },

            goBack() {
                window.location.href = `${this.eventUrl}/images`;
            },

            notReady() {
                console.log('test');
                this.event.status !== 'p' &&
                this.event.organizer_id && 
                this.event.name && 
                (this.event.location_latlon || !this.event.hasLocation) && 
                this.event.category_id &&
                this.event.show_times &&
                this.event.description &&
                this.event.largeImagePath &&
                this.event.advisories_id
                ? '' : window.history.back();
            },


        },

        created() {
            this.notReady();
        },


    };

</script>