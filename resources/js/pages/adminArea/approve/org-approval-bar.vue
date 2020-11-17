<template>
    <div>
        <div class="approvebar">
            <div class="buttons">
                <span style="display:inline-block;margin:0rem 6rem">{{ loadorganizer.user.email }}   </span>
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="goBack()"> Go Back </button>
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="onDelete()"> Delete </button>
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="makeEdits()"> Make Edits Yourself </button>
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="onApproved()"> Approved </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators';

    export default {

        props: ['loadorganizer'],

        data() {
            return {
                organizer: this.loadorganizer,
                dis: false,
            }
        },

        methods: {
            onApproved() {
                this.dis = true;
                axios.post(`/admin/organizer/${this.organizer.slug}/approve`)
                .then( window.location.href = '/admin/organizers/finalize' )
                .catch( error => { this.serverErrors = error.response.data.errors; this.dis = false });
            },

            onDelete() {
                this.dis = true;
                axios.post(`/admin/organizer/${this.organizer.slug}/delete`)
                .then( window.location.href = '/admin/organizers/finalize' )
                .catch(error => { this.serverErrors = error.response.data.errors; this.dis = false });
            },

            makeEdits() {
                window.location.href = `/organizer/${this.organizer.slug}/edit`
            },

            goBack() {
                window.location.href = '/admin/organizers/finalize';
            },
        },

        validations: {
            comments: {
                required,
            },
        },

    }

</script>