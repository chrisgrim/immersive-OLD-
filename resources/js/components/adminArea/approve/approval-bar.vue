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
            <div class="buttons">
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="goBack()"> Go Back </button>
                <button :class="{bspin : dis}" :disabled="dis" class="create" @click.prevent="denied()"> Denied </button>
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
                .then(response => { 
                    window.location.href = '/finish/events';
                })
                .catch(error => {         
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
                .then(response => { 
                    console.log(response.data)
                    this.dis = false;
                    window.location.href = '/finish/events';
                })
                .catch(error => {         
                    this.serverErrors = error.response.data.errors;
                    this.dis = false;
                });
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