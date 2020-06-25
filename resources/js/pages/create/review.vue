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
    import formValidationMixin from '../../mixins/form-validation-mixin'
    
    import { required, maxLength } from 'vuelidate/lib/validators';

    export default {

        mixins: [formValidationMixin],

        props: ['event'],

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
                axios.get(`${this.eventUrl}/submit`)
                .then(res => {
                   window.location.href = `${this.eventUrl}/thankyou`;
                })
                .catch(err => { this.onErrors(err) });
    
            },

            goBack() {
                window.location.href = `${this.eventUrl}/images`;
            },
        },
    };

</script>