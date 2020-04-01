<template>
    <div class="container-r">
        <div class="register" >
            <div class="content" :style="this.map">
                <div class="left">
                    <div v-if="url == '/login'" class="sec">
                        <div class="title">
                            <h3>Everything Immersive</h3>
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
                                <div class="showpass">
                                    <img v-if="passwordFieldType=='password'" @click="switchVisibility" src="/storage/website-files/password-eye.png" alt="">
                                    <img v-if="passwordFieldType!=='password'" @click="switchVisibility" src="/storage/website-files/password-eye-closed.png" alt="">
                                </div>
                            </div>
                            <div class="field">
                                <p @click="onForget" :class="{ inprogress: dis}" class="forgot">Forgot your password?</p>
                            </div>
                            <div class="field">
                                <button :disabled="dis" class="save" @click="onLogin"> Sign In </button>
                            </div>
                            <div class="list">
                                <div class="social">
                                    <div>
                                        <a href="/login/Google">
                                            <p>Facebook</p>
                                        </a>
                                    </div>
                                   <div>
                                        <a href="/login/Google">
                                            <p>Google</p>
                                        </a>
                                   </div>
                                </div>
                            </div>
                            <div class="join">
                                <p>Don't have an account? <a href="" @click.prevent="switchLogin">Join Now</a></p>
                            </div>
                        </div>
                    </div>
                    <div v-if="url == '/register'" class="sec">
                        <div class="title">
                            <h3>Everything Immersive</h3>
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
                                <button :disabled="dis" class="save" @click="onRegister"> Register </button>
                            </div>
                            <div class="list">
                                <div class="social">
                                    <div>
                                        <a href="/login/Google">
                                            <p>Facebook</p>
                                        </a>
                                    </div>
                                   <div>
                                        <a href="/login/Google">
                                            <p>Google</p>
                                        </a>
                                   </div>
                                </div>
                            </div>
                            <div class="join">
                                <p>Already have an account? <a href="" @click.prevent="switchLogin">Sign In Now</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right" style="background:url(/storage/website-files/login-image.jpg) no-repeat;background-size: cover;">
    
                </div>
            </div>
        </div>
        <vue-alert v-if="alerts.message" :message="alerts.message"></vue-alert>
    </div>
</template>

<script>

import { required, requiredIf, maxLength } from 'vuelidate/lib/validators'
import CubeSpinner  from '../layouts/loading.vue'
    
    export default {

        components: { 
            CubeSpinner
        },

        data() {
            return {
                user: this.initializeUserObject(),
                login: true,
                passwordFieldType: 'password',
                height: 0,
                activeItem: '',
                serverErrors: [],
                alerts: [],
                dis:false,
                url: location.pathname,
            }
        },

        computed: {
            map() {
                return `height:calc(${this.height}px - 7rem);`
            },
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

            onLogin() {
                let data = {
                    type: 'axios',
                    email: this.user.email,
                    password: this.user.password,
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

            handleResize() {
                this.height = window.innerHeight;
            },

            switchLogin() {
                this.serverErrors = [];
                this.$v.$reset();
                this.url == '/login' ? this.url = '/register' : this.url = '/login';
            },

            switchVisibility() {
                this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
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
                    // console.log(response.data);
                    window.location.href = '/email/verify';
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

        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },

        destroyed() {
            window.removeEventListener('resize', this.handleResize)
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