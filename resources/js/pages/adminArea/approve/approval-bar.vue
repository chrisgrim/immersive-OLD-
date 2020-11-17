<template>
    <div>
        <div class="approvebar">
            <div class="comments">
                <div class="field">
                    <label>Mod Comments</label>
                    <textarea 
                        type="text"
                        name="comments" 
                        v-model="comments" 
                        placeholder=" "
                        :class="{ active: commentsActive }"
                        @click="commentsActive = true"
                        @blur="commentsActive = false" 
                        @input="$v.comments.$touch"
                        rows="8" />
                    <div v-if="$v.comments.$error" class="validation-error">
                        <p class="error" v-if="!$v.comments.required">Be sure to include notes</p>
                    </div>
                </div>
            </div>
            <div class="admin-approve-similar-name" v-if="exists">
                <a rel="noreferrer noopener" target="_blank" :href="`/events/${exists.slug}`">An event named {{exists.name}} already exists</a>
            </div>
            <div class="admin-approve-url">
                <a rel="noreferrer noopener" target="_blank" :href="loadevent.ticketUrl">{{loadevent.ticketUrl}}</a>
            </div>
            <div class="buttons">
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="organizer()"> Organizer </button>
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="goBack()"> Go Back </button>
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="rejected()"> Reject </button>
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="makeEdits()"> Make Edits Yourself </button>
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="denied()"> Request Changes </button>
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="approved()"> Approved </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators';

    export default {
        props: ['loadevent', 'exists'],

        computed: {
            approvedOrg() {
                return this.loadevent.organizer.status == 'p' ? true : false;
            }
        },

        data() {
            return {
                event: this.loadevent,
                comments: '',
                commentsActive: false,
                dis: false,
            }
        },

        methods: {
            approved() {
                this.dis = true;
                axios.post(`/admin/event/${this.event.slug}/approve`)
                .then(window.location.href = '/admin/events/finalize');
            },

            denied() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false }
                this.dis = true;

                axios.post(`/admin/event/${this.event.slug}/fail`, { message: this.comments })
                .then( window.location.href = '/admin/events/finalize' )
                .catch( error => {  this.serverErrors = error.response.data.errors; this.dis = false });
            },

            rejected() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false }
                this.dis = true;

                axios.post(`/admin/event/${this.event.slug}/reject`, { message: this.comments })
                .then( window.location.href = '/admin/events/finalize' )
                .catch( err => { this.serverErrors = err.response.data.errors;this.dis = false });
            },

            makeEdits() {
                window.location.href = `/create/${this.event.slug}/title`
            },

            organizer() {
                window.location.href = `/organizer/${this.event.organizer.slug}/edit`
            },

            goBack() {
                window.location.href = '/admin/events/finalize';
            },
        },

        validations: {
            comments: {
                required,
            },
        },

    }

</script>