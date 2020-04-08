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
        },
    };

</script>