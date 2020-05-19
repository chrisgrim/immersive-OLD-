<template>
    <div class="account-index">
        <div class="account-notifications_header">
            <h2>Account</h2>
            <p>{{user.name}} <span>Back to Profile</span></p> 
        </div>
        <section class="account-index-content grid">
            <a href="/account-settings/notifications">
                <div class="account-index__element">
                    <h3>Notifications</h3>
                    <p>Choose your newsletter and contact preferences</p>
                </div>
            </a>
            <div class="account-index__element">
                <h3>Login</h3>
                <p>Update your password and login information</p>
            </div>
            <a href="/account-settings/favorited">
                <div class="account-index__element">
                    <h3>Favorites</h3>
                    <p>Look through your favorited events and their organizers</p>
                </div>
            </a>
        </section>
        
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
                
            }
        },

        methods: {

            
        },

        mounted() {
            
        },

    };
</script>