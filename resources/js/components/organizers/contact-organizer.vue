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
                :class="{ 'error': $v.message.$error }"
                @input="$v.message.$touch()"
                type="text">
                </textarea>
                <div v-if="$v.message.$error" class="validation-error">
                    <p class="error" v-if="!$v.message.required">Please include a message</p>
                    <p class="error" v-if="!$v.message.maxLength">The message is too long.</p>
                </div>
            </div>
            <div slot="footer">
                <button :class="{bspin : dis}" :disabled="dis" class="btn sub" @click="sendMail()">Submit</button>
            </div>
        </modal>
    </div>
</template>
<script>
    
    import { required, maxLength } from 'vuelidate/lib/validators';

    export default {

        props: ['loadorganizer', 'user'],

        data() {
            return {
                isModalVisible: false,
                isLoginVisible: false,
                message: '',
                organizer: this.loadorganizer,
                close: false,
                dis: false,

            }
        },

        methods: {
            onGuest(){
                this.isLoginVisible = true
            },

            sendMail() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false }
                this.dis = true;
                let data = {message:this.message}
                axios.post(`/message/organizer/${this.organizer.slug}/${this.user}`, data)
                .then(response => {
                    console.log(response.data);
                    this.isModalVisible = false;
                    this.message = '';
                    this.dis = false;
                })
                .catch(errorResponse => { 
                    this.validationErrors = errorResponse.response.data.errors;
                    this.dis = false;
                });
            },
        },

        validations: {
            message: {
                required,
                maxLength: maxLength(2000)
            },
        },
    }
    
</script>