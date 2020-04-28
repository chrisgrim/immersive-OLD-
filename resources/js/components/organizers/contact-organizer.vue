<template>
    <div>
        <div v-if="user && user != loadorganizer.user_id" class="contact">
            <button @click="isModalVisible=true">
                Contact
            </button>
        </div>
        <div v-if="!user" class="contact">
            <button @click="onGuest">
                Contact
            </button>
        </div>
        <login-pop v-if="isLoginVisible" :visible="isLoginVisible" @close="isLoginVisible=false"></login-pop>
        <modal v-if="isModalVisible" @close="isModalVisible=false">
            <div slot="header">
            </div>
            <div slot="body"> 
                <h3>Ask {{organizer.name}}</h3>
                <p>Send a question to the organizer or about an event.</p>
                <div class="field">
                    <textarea
                    v-model="message" 
                    rows="8"
                    class="message"
                    :class="{ 'error': $v.message.$error }"
                    @input="$v.message.$touch()"
                    type="text">
                    </textarea>
                </div>
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

            toggleBodyClass(addRemoveClass, className) {
                const el = document.body;

                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            sendMail() {
                if (this.user == this.loadorganizer.user_id) { return false };
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
                .catch(error => { 
                    console.log(error.response.data)
                    // this.validationErrors = errorResponse.response.data.errors;
                    this.dis = false;
                });
            },
        },

        mounted() {

        },


        watch: {
            isModalVisible() {
                return this.isModalVisible ? this.toggleBodyClass('addClass', 'noscroll') : this.toggleBodyClass('removeClass', 'noscroll');
            },
            isLoginVisible() {
                return this.isLoginVisible ? this.toggleBodyClass('addClass', 'noscroll') : this.toggleBodyClass('removeClass', 'noscroll');
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