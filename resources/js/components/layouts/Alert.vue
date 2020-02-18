<template>
    <div>
        <div class="verify_bar">
            <div class="text">
                <p>Please take a minute to verify your account</p>
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


        data() {

        },

        computed: {

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
            }
        }

    }
</script>