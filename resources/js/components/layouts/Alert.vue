<template>
    <div v-if="visible">
        <div class="verify_bar">
            <div class="text">
                <p v-if="this.verify">{{this.verify}}</p>
            </div>
            <div v-if="this.verify" class="submit">
                <p>If you did not recieve an email </p>
                <button type="submit" class="another" @click="resend">click here to request another</button>.
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        props: {
            message: { type:String },
        },

        computed: {
            verify() {
                return this.message && this.message == 'verify' ? 'Please take a minute to verify your account' : '';
            }
        },

        data() {
            return {
                body: '',
                visible: true,
            }
        },

        methods: {
            resend() {
                axios.post(`email/resend`)
                .then(response => {
                    console.log(response.data)
                })
                .catch(errorResponse => { 
                    console.log(errorResponse.data);
                })
            },

            hide() {
                this.visible = true;
            }
        },

        mounted() {
            setTimeout(() => this.hide(), 10000);
        }

    }
</script>