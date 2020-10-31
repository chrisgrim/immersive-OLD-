export default {
    methods: {

        checkVuelidate() {
            this.$v.$touch()
            !this.$v.$invalid ? this.disabled = true : false;
            return this.$v.$invalid
        },

        onErrors(err) {
            err ? this.serverErrors = err.response.data.errors : '';
            this.disabled = false;
        },

        onBackInitial() {
            return window.location.href = `/create-event/edit/`;
        },

        onBack(value) {
            return value == 'exit' ?  this.onBackInitial() :  window.location.href = `/create-event/${this.event.slug}/${value}`
        },

        onFetch(value) {
            return `/create-event/${this.event.slug}/${value}/fetch?timestamp=${new Date().getTime()}`
        },
            
        onForward(value) {
            return window.location.href = `/create-event/${this.event.slug}/${value}`;
        },

        onRegistered() {
            return window.location.href = '/email/verify';
        },

        onFinishOrganizer(value) {
            return window.location.href = value;
        },

        save() {
            this.reSubmit == true ? location.reload() : '';
            this.onLoad();
            this.disabled = false;
            this.updated = true;
            setTimeout(() => this.updated = false, 3000);
        },
    }
}