<template>
    <div class="login-popup" >
        <div ref="myDiv" class="login-index popup grid" >
            <div class="login-information" v-if="login">
                <div class="login-close-button" @click="$emit('close', false)">
                    <svg aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                </div>
                <div class="login-information__title">
                    <h3>Hello There!</h3>
                </div>
                <div class="">
                    <div class="field">
                        <input 
                        id="email" 
                        type="email" 
                        class="email" 
                        v-model="user.email" 
                        :class="{ active: activeItem == 'email','error': $v.user.email.$error }"
                        @click="toggleEmail"
                        @blur="activeItem = null" 
                        @input="$v.user.email.$touch"
                        required
                        placeholder="email" 
                        autofocus>
                        <div v-if="$v.user.email.$error" class="validation-error">
                            <p class="error" v-if="!$v.user.email.serverFailed">The login doesn't match our records</p>
                            <p class="error" v-if="!$v.user.email.required">The email is required</p>
                        </div>
                    </div>
                    <div class="field">
                        <input 
                        id="password" 
                        :type="passwordFieldType" 
                        class="pass" 
                        v-model="user.password"
                        :class="{ active: activeItem == 'password','error': $v.user.password.$error }"
                        @click="activeItem = 'password'"
                        @blur="activeItem = null" 
                        @input="$v.user.password.$touch"
                        required
                        placeholder="password">
                        <div v-if="$v.user.password.$error" class="validation-error">
                            <p class="error" v-if="!$v.user.email.serverFailed">The login doesn't match our records</p>
                            <p class="error" v-if="!$v.user.password.required">The password is required</p>
                        </div>
                        <div class="login-information__showpass">
                            <img v-if="passwordFieldType=='password'" @click="switchVisibility" src="/storage/website-files/password-eye.png" alt="">
                            <img v-if="passwordFieldType!=='password'" @click="switchVisibility" src="/storage/website-files/password-eye-closed.png" alt="">
                        </div>
                    </div>
                    <div class="field">
                        <p @click="onForget" :class="{ inprogress: dis}" class="login-information__forgot-password">Forgot your password?</p>
                    </div>
                    <div class="field">
                        <button type="submit" :disabled="dis" class="login-button" @click="onLogin"> Sign In </button>
                    </div>
                    <div class="login-information__line">
                        <hr>
                        <span>or</span>
                    </div>
                    <div class="login-information__social-login grid">
                        <button @click="urlClick('Facebook')" class="social-login">
                            <p>Facebook</p>
                        </button>
                       <button @click="urlClick('Google')" class="social-login">
                            <p>Google</p>
                       </button>
                    </div>
                     <div class="login-information__switch">
                        <p>Don't have an account? <button class="switch_login" @click.prevent="switchLogin">Join Now</button></p>
                    </div>
                </div>
            </div>

            <div v-else class="login-information">
                <div class="login-close-button" @click="$emit('close', false)">
                    <svg aria-hidden="true" role="presentation" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
                </div>
                <div class="login-information__title">
                    <h3>Sign Up!</h3>
                </div>
                <div class="">
                    <div class="field">
                        <input 
                        id="name" 
                        type="name" 
                        v-model="user.name" 
                        required
                        :class="{ active: activeItem == 'name','error': $v.user.name.$error }"
                        @click="activeItem = 'name'"
                        @blur="activeItem = null" 
                        @input="$v.user.name.$touch"
                        placeholder="Name" 
                        autofocus>
                        <div v-if="$v.user.name.$error" class="validation-error">
                            <p class="error" v-if="!$v.user.name.required">The name is required</p>
                            <p class="error" v-if="!$v.user.name.maxLength">The name too long</p>
                        </div>
                    </div>
                    <div class="field">
                        <input 
                        id="email" 
                        type="email" 
                        v-model="user.email" 
                        required 
                        :class="{ active: activeItem == 'email','error': $v.user.email.$error }"
                        @click="toggleEmail"
                        @blur="activeItem = null" 
                        @input="$v.user.email.$touch"
                        placeholder="Email" 
                        autofocus>
                        <div v-if="$v.user.email.$error" class="validation-error">
                            <p class="error" v-if="!$v.user.email.required">The email is required</p>
                            <p class="error" v-if="!$v.user.email.serverFailed">{{serverErrors.email[0]}}</p>
                        </div>
                    </div>
                    <div class="field">
                         <input 
                        id="password" 
                        type="password" 
                        class="pass" 
                        v-model="user.password" 
                        :class="{ active: activeItem == 'password','error': $v.user.password.$error }"
                        @click="activeItem = 'password'"
                        @blur="activeItem = null" 
                        @input="$v.user.password.$touch"
                        required
                        placeholder="Password">
                        <div v-if="$v.user.password.$error" class="validation-error">
                            <p class="error" v-if="!$v.user.password.serverFailed">Must be at least 8 characters</p>
                            <p class="error" v-if="!$v.user.password.required">The password is required</p>
                        </div>
                    </div>
                    <div class="field">
                        <input 
                        id="password" 
                        type="password" 
                        class="pass" 
                        v-model="user.passwordConfirm"
                        :class="{ active: activeItem == 'passwordConfirm','error': $v.user.passwordConfirm.$error }"
                        @click="toggleConfirm"
                        @blur="activeItem = null" 
                        @input="$v.user.passwordConfirm.$touch"
                        required
                        placeholder="Confirm Password">
                        <div v-if="$v.user.passwordConfirm.$error" class="validation-error">
                            <p class="error" v-if="!$v.user.passwordConfirm.serverFailed">{{serverErrors.password[0]}}</p>
                            <p class="error" v-if="!$v.user.passwordConfirm.isRequiredRegister">The passwordConfirm is required</p>
                        </div>
                    </div>
                    <div class="field">
                        <button type="submit" :disabled="dis" class="save" @click="onRegister"> Register </button>
                    </div>
                    <div class="login-information__line">
                        <hr>
                        <span>or</span>
                    </div>
                    <div class="login-information__social-login grid">
                        <button @click="urlClick('Facebook')" class="social-login">
                            <p>Facebook</p>
                        </button>
                       <button @click="urlClick('Google')" class="social-login">
                            <p>Google</p>
                       </button>
                    </div>
                   <div class="login-information__switch">
                        <p>Already have an account? <button class="switch_login"  @click.prevent="switchLogin">Sign In Now</button></p>
                    </div>
                </div>
            </div>
            <div class="login-image">
                <img src="/storage/website-files/login-image.jpg" alt="">
            </div>
        </div>
    <vue-alert v-if="alerts.message" :message="alerts.message"></vue-alert>
    </div>
</template>
<script>
import _ from 'lodash';
import { required, requiredIf, maxLength } from 'vuelidate/lib/validators'
    export default {

        data() {
            return {
                user: this.initializeUserObject(),
                passwordFieldType: 'password',
                activeItem: '',
                serverErrors: [],
                alerts: [],
                dis:false,
                login: true,
            }
        },

        methods: {

            initializeUserObject() {
                return {
                    name: '',
                    email: '',
                    password: '',
                    passwordConfirm: '',
                    rememberMe: false,
                }
            },

            onClickOutside(event) {
                let arr =  this.$refs.myDiv;
                if (!arr || arr.contains(event.target)) return;
                this.$emit('close', false)
            },

            onLogin() {
                let data = {
                    type: 'axios',
                    email: this.user.email,
                    password: this.user.password,
                    remember: true,
                }
                this.dis = true;
                axios.post('/login', data)
                .then(response => {
                    // console.log(response.data);
                    location.reload();
                })
                .catch(errorResponse => { 
                    // console.log(errorResponse.data);
                    this.dis = false;
                    this.serverErrors = errorResponse.response.data.errors 
                });
            },

            switchLogin() {
                this.serverErrors = [];
                this.$v.$reset();
                this.login = !this.login;
            },

            switchVisibility() {
                this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
            },

            urlClick(value) {
                window.location.href = `/login/${value}`
            },

            onForget() {
                if (!this.user.email) { return false };
                let data = {
                    type: 'axios',
                    email: this.user.email,
                }
                this.dis = true;
                console.log(data);
                axios.post('/password/email', data)
                .then(response => {
                    this.dis = false;
                    console.log(response.data);
                    this.alerts = response.data;
                })
                .catch(errorResponse => { 
                    console.log(errorResponse.data);
                    this.serverErrors = errorResponse.response.data.errors;
                });
            },

            toggleConfirm() {
                this.activeItem = 'passwordConfirm';
                this.serverErrors = [];
            },

            toggleEmail() {
                this.activeItem = 'email';
                this.serverErrors = [];
            },

            onRegister() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                let data = {
                    type: 'axios',
                    email: this.user.email,
                    password: this.user.password,
                    name: this.user.name,
                    password_confirmation: this.user.passwordConfirm
                }
                this.dis = true;
                axios.post('/register', data)
                .then(response => {
                    location.reload();
                })
                .catch(errorResponse => { 
                    // console.log(errorResponse.data);
                    this.dis = false;
                    this.serverErrors = errorResponse.response.data.errors;
                });
            },

            //checks to see if passed variable is in the server errors
            hasServerError(field) {
                return (field && _.has(this, 'serverErrors.' + field) && !_.isEmpty(this.serverErrors[field]));
            },

        },

        mounted() {
            setTimeout(() => document.addEventListener("click", this.onClickOutside), 200);
        },

        beforeDestroy() {
            document.removeEventListener("click", this.onClickOutside);
        },

        validations: {
            user: {
                email: {
                    required,
                    serverFailed(){ return !this.hasServerError('email'); },
                },
                name: {
                    required,
                    maxLength: maxLength(50),
                },
                password: {
                    serverFailed(){ return !this.hasServerError('password'); },
                    required
                },
                passwordConfirm: {
                    serverFailed(){ return !this.hasServerError('password'); },
                    required: requiredIf(function(form){
                        return this.url == '/register'
                    }),
                }
            }
        },

    }
</script>