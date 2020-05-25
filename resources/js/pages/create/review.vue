<template>
    <div>
        <div class="create-button__back review">
            <button :disabled="disabled" class="create" @click.prevent="goBack()"> Back </button>
        </div>
        <div class="create-button__forward review">
            <button :disabled="disabled" class="create" @click.prevent="onSubmit()"> Submit </button>
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
                disabled:false,
            }
        },

        methods: {
           
            onSubmit() {
                this.disabled = true;
                axios.get(`${this.eventUrl}/submit`);
                window.location.href = `${this.eventUrl}/thankyou`;
            },

            goBack() {
                window.location.href = `${this.eventUrl}/images`;
            },
        },
    };

</script>