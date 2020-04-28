<template>
    <div class="notifications">
        <div class="header">
            <div class="breadcrumbs"><a href="/account-settings">Account</a> > Notifications</div>
            <h2>Notifications</h2>
        </div>
        <div class="content">
            <div class="item">
                <h4>Subscribe to monthly newsletter</h4>
                <p>Get our monthly newsletters about the latest and greatest immersive events.</p>
            </div>
            <div class="item">
                <div class="field">
                    <div id="cover">
                        <input v-model="monthly" type="checkbox" id="checkbox">
                        <div id="bar"></div>
                        <div id="knob">
                            <p v-if="monthly">Yes</p>
                            <p v-else>No</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="item">
                <h4>Subscribe to event update newsletters</h4>
                <p>Get the latest updates about the organizations and events you have liked on EI.</p>
            </div>
            <div class="item">
                 <div class="field">
                    <div id="cover">
                        <input v-model="updates" type="checkbox" id="checkbox">
                        <div id="bar"></div>
                        <div id="knob">
                            <p v-if="updates">Yes</p>
                            <p v-else>No</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="item">
                <h4>Messages</h4>
                <p>Get an email whenever a user or admin sends you a message</p>
            </div>
            <div class="item">
                 <div class="field">
                    <div id="cover">
                        <input v-model="messages" type="checkbox" id="checkbox">
                        <div id="bar"></div>
                        <div id="knob">
                            <p v-if="messages">Yes</p>
                            <p v-else>No</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>



    export default {

        props: ['user'],

        components: {
            
        },

        computed: {
            
        },

        data() {
            return {
                monthly: true,
                updates: true,
                messages: true,
            }
        },

        methods: {
            submit() {
                let data = {
                    monthly: this.monthly ? this.monthly : '',
                    updates: this.updates ? this.updates : '',
                    messages: this.messages ? this.messages : '',
                };

                axios.patch(`/users/${this.user.id}`, data)
                .then(response => {
                    console.log(response.data);
                
                })
                .catch(error => { 
                    console.log(error.response.data);
                });
            },
            updateNews() {
                if (this.user.newsletter_type == 'n') {
                    this.monthly = false; this.updates = false;
                };
                if (this.user.newsletter_type == 'a') {
                    this.monthly = true; this.updates = true;
                }
                if (this.user.newsletter_type == 'm') {
                    this.monthly = true; this.updates = false;
                }
                if (this.user.newsletter_type == 'u') {
                    this.monthly = false; this.updates = true;
                }
                if (this.user.silence == 'y') {
                    this.messages = false;
                }
            }
            
        },

        watch: {
            monthly() {
                this.submit();
            },
            updates() {
                this.submit();
            },
            messages() {
                this.submit();
            }
        },

        mounted() {
            this.updateNews();
        },

    };
</script>