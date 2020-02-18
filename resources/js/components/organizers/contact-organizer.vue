<template>
    <div>
        <div v-if="user" class="contact">
            <button @click="isModalVisible=true">
                Contact
            </button>
        </div>
        <div v-else="user" class="contact">
            <button @click="onGuest">
                Contact
            </button>
        </div>
        <login-pop v-if="isLoginVisible" :visible="isLoginVisible" @close="isLoginVisible=false"></login-pop>
        <modal v-show="isModalVisible" @close="isModalVisible=false">
            <div slot="header">
            </div>
            <div slot="body"> 
                <h3>Ask {{organizer.name}}</h3>
                <p>Send a question to the organizer or about an event.</p>
                <textarea
                v-model="message" 
                rows="8"
                type="text">
                </textarea> 
            </div>
            <div slot="footer">
                <button class="btn sub" @click="sendMail()">Submit</button>
            </div>
        </modal>
    </div>
</template>
<script>
    export default {

        props: ['loadorganizer', 'user'],

        data() {
            return {
                isModalVisible: false,
                isLoginVisible: false,
                message: '',
                organizer: this.loadorganizer,
                close: false

            }
        },

        methods: {
            onGuest(){
                this.isLoginVisible = true
            },

            sendMail() {
                let data = {message:this.message}
                axios.post(`/message/organizer/${this.organizer.slug}/${this.user}`, data)
                .then(response => {
                    console.log(response.data);
                    this.isModalVisible = false;
                })
                .catch(errorResponse => { 
                    this.validationErrors = errorResponse.response.data.errors 
                });
            },
        }
    }
    
</script>