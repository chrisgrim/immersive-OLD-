<template>
    <div>
        <div class="vlogin" >
            <div ref="myDiv" class="body-log" >
                <div class="left-log">
                    <div v-if="!register">
                        <div class="title">
                            <h3>Hello There!</h3>
                        </div>
                        <div class="">
                            <div class="create-field">
                                <input 
                                id="email" 
                                type="email" 
                                class="email" 
                                v-model="email" 
                                required 
                                placeholder="email" 
                                autofocus>
                            </div>
                            <div class="create-field">
                                <input 
                                id="password" 
                                type="password" 
                                class="pass" 
                                v-model="password" 
                                required
                                placeholder="password">
                            </div>
                            <div class="forgot">
                                Forgot your password?
                            </div>
                            <button class="signin" @click="onLogin"> Sign In </button>
                            <div class="forgot">
                                Remember Me
                            </div>
                            <div class="list">
                                <div class="social">
                                    <p>Or connect with</p>
                                </div>
                                <div class="icon">
                                    <img src="/storage/website-files/facebook.png" alt="">
                                </div>
                                <div class="icon">
                                    <img src="/storage/website-files/facebook.png" alt="">
                                </div>
                            </div>
                            <div class="join">
                                <h4>New To Everything Immersive?</h4>
                                <div @click.prevent="register = true">Join Now</div>
                            </div>
                        </div>
                    </div>
                    <div v-if="register">
                        <div class="title">
                            <h3>Sign Up!</h3>
                        </div>
                        <div class="">
                            <div class="create-field">
                                <input 
                                id="name" 
                                type="name" 
                                class="name" 
                                v-model="name" 
                                required 
                                placeholder="name" 
                                autofocus>
                            </div>
                            <div class="create-field">
                                <input 
                                id="email" 
                                type="email" 
                                class="email" 
                                v-model="email" 
                                required 
                                placeholder="email" 
                                autofocus>
                            </div>
                            <div class="create-field">
                                <input 
                                id="password" 
                                type="password" 
                                class="pass" 
                                v-model="password" 
                                required
                                placeholder="password">
                            </div>
                            <div class="create-field">
                                <input 
                                id="password" 
                                type="password" 
                                class="pass" 
                                v-model="passwordConfirm" 
                                required
                                placeholder="password">
                            </div>
                            <button class="signin" @click="onRegister"> Register </button>
                            <div class="list">
                                <div class="social">
                                    <p>Or connect with</p>
                                </div>
                                <div class="icon">
                                    <img src="/storage/website-files/facebook.png" alt="">
                                </div>
                                <div class="icon">
                                    <img src="/storage/website-files/facebook.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rightimg">
                    <img src="/storage/website-files/create-background.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

        data() {
            return {
                password: '',
                email: '',
                name: '',
                passwordConfirm: '',
                register: false,
            }
        },

        methods: {

            onClickOutside(event) {
                let arr =  this.$refs.myDiv;
                if (!arr || arr.contains(event.target)) return;
                this.$emit('close', false)
            },

            onLogin() {
                let data = {
                    type: 'axios',
                    email: this.email,
                    password: this.password,
                }
                axios.post('/login', data)
                .then(response => {
                    location.reload();
                })
                .catch(errorResponse => { 
                    this.validationErrors = errorResponse.response.data.errors 
                });
            },

            onRegister() {
                let data = {
                    type: 'axios',
                    email: this.email,
                    password: this.password,
                    name: this.name,
                    password_confirmation: this.passwordConfirm
                }
                axios.post('/register', data)
                .then(response => {
                    location.reload();
                })
                .catch(errorResponse => { 
                    this.validationErrors = errorResponse.response.data.errors 
                });
            },

        },

        mounted() {
            setTimeout(() => document.addEventListener("click", this.onClickOutside), 200);
        },

        beforeDestroy() {
            document.removeEventListener("click", this.onClickOutside);
        }

    }
</script>