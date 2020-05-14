<template>
    <div class="event-create-start grid" :style="map">
        <nav class="start-content__nav">
            <div class="nav-logo">
                <a href="/">
                    <h3>EI</h3>
                </a>
            </div>
        </nav>
        <div class="start-content">
            <div class="start-content__text">
                <h2>Hi, {{user.name}}</h2>
                <p>We're excited you are listing your event on Everything Immersive!</p> 
                <p>It takes only a few minutes to complete. At the end of the process your event will be reviewed by EI. The first step is to let us know about your organization.</p>
            </div>
            <a href="/organizer/create"><button class="event-start-button">Create Organizer</button></a>
        </div>
        <div class="login-image">
            <picture>
                
                <img :style="map" src="/storage/website-files/login-image.jpg">
            </picture>
        </div>
    </div>
    
</template>

<script>


    
    export default {

        props: ['user'],

        components: { 
            
        },

        data() {
            return {
                
            }
        },

        computed: {
            map() {
                return `height:${this.height}px;`
            },
        }, 

        methods: {

            handleResize() {
                this.height = window.innerHeight;
            },
        

        },

        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },

        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },

       

    }
</script>