<template>
    <div class="account">
        <div class="header">
            <h2>Account</h2>
            <p>{{user.name}} <span>Back to Profile</span></p> 
        </div>
        <div class="content">
            <a href="/account-settings/notifications">
                <div class="item">
                    <h3>Notifications</h3>
                    <p>Choose your newsletter and contact preferences</p>
                </div>
            </a>
            <div class="item">
                <h3>Login</h3>
                <p>Update your password and login information</p>
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
                
            }
        },

        methods: {

            
        },

        mounted() {
            
        },

    };
</script>