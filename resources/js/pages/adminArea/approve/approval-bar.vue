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
                    rows="8">
                    </textarea>
                    <div v-if="$v.comments.$error" class="validation-error">
                        <p class="error" v-if="!$v.comments.required">Be sure to include notes</p>
                    </div>
                </div>
            </div>
            <div class="admin-approve-url">
                <a rel="noreferrer noopener" target="_blank" :href="loadevent.ticketUrl">{{loadevent.ticketUrl}}</a>
            </div>
            <div class="buttons">
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
        props: {
            loadevent: {
                type:Object,
            },
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
                axios.post(`/approve/${this.event.slug}`)
                .then(res => { 
                    // console.log(res.data);
                    window.location.href = '/finish/events';
                })
                .catch(error => {   
                    console.log(error.response.data);      
                    this.serverErrors = error.response.data.errors;
                    this.dis = false;
                });
            },

            denied() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                this.dis = true;
                let data = {
                    comments: this.comments
                };
                axios.post(`/unapprove/${this.event.slug}`, data)
                .then(res => { 
                    console.log(res.data)
                    this.dis = false;
                    window.location.href = '/finish/events';
                })
                .catch(error => {  
                    console.log(error.response.data);       
                    this.serverErrors = error.response.data.errors;
                    this.dis = false;
                });
            },

            rejected() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                this.dis = true;
                let data = {
                    comments: this.comments
                };
                axios.post(`/reject/${this.event.slug}`, data)
                .then(res => { 
                    console.log(res.data);
                    window.location.href = '/finish/events';
                })
                .catch(err => {   
                    console.log(err.response.data);      
                    this.serverErrors = err.response.data.errors;
                    this.dis = false;
                });
            },

            makeEdits() {
                window.location.href = `/create-event/${this.event.slug}/title`
            },

            goBack() {
                window.location.href = '/finish/events';
            },
        },

        validations: {
            comments: {
                required,
            },
        },

    }

</script>