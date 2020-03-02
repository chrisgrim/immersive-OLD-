<template>
    <div v-if="visible">
        <div class="verify_bar">
            <div class="text">
                <p>{{this.body}}</p>
            </div>
            <div class="submit">
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

        },

        data() {
            return {
                body: this.message ? this.message : 'Please take a minute to verify your account',
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
                this.visible = false;
            }
        },

        mounted() {
            setTimeout(() => this.hide(), 10000);
        }

    }
</script>