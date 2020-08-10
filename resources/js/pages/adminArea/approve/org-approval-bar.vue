<template>
    <div>
        <div class="approvebar">
            <div class="buttons">
                <span style="display:inline-block;margin:0rem 6rem">{{loadorganizer.user.email}}   </span>
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="goBack()"> Go Back </button>
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="makeEdits()"> Make Edits Yourself </button>
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="approved()"> Approved </button>
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
            approved() {
                this.dis = true;
                axios.post(`/approve/org/${this.organizer.slug}`)
                .then(res => { 
                    // console.log(res.data);
                    window.location.href = '/finish/organizers';
                })
                .catch(error => {   
                    console.log(error.response.data);      
                    this.serverErrors = error.response.data.errors;
                    this.dis = false;
                });
            },

            makeEdits() {
                window.location.href = `/organizer/${this.organizer.slug}/edit`
            },

            goBack() {
                window.location.href = '/finish/organizers';
            },
        },

        validations: {
            comments: {
                required,
            },
        },

    }

</script>