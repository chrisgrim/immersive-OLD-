<template>
    <div v-if="visible">
        <div class="verify_bar" >
            <div class="panel" ref="panel">
                <div class="text">
                    <div @click="visible = false" class="close">
                        X
                    </div>
                    <img style="width: 10rem" src="/storage/website-files/email-logo.png" alt="">
                    <h3 v-if="this.verify">Please confirm your email</h3>
                    <p>We have sent you an email to confirm your email account.</p>
                </div>
                <div class="submit">
                    <hr>
                    <p>Recieved nothing?<span class="another" @click="resend"> Click here to request another.</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            message: { type:String },
            user: {type:Object},
        },

        computed: {

        },

        data() {
            return {
                body: '',
                visible: true,
                verify: this.message && this.message == 'verify' && !this.user.email_verified_at ? 'Please take a minute to verify your account' : '',
            }
        },

        methods: {
            resend() {
                axios.post(`/email/resend`)
                .then(response => {
                    this.visible = false;
                    console.log(response.data)
                })
                .catch(errorResponse => { 
                    console.log(errorResponse.data);
                })
            },

            onClickOutside(event) {
                let panel =  this.$refs.panel;
                if (!panel || panel.contains(event.target)) return console.log('one');;
                this.visible = false;
            },

            hide() {
                this.visible = false;
            }
        },

        mounted() {
            setTimeout(() => this.hide(), 20000);
            setTimeout(() => document.addEventListener("click", this.onClickOutside), 200);
        },

        beforeDestroy() {
            document.removeEventListener("click", this.onClickOutside);
        },
    }
</script>