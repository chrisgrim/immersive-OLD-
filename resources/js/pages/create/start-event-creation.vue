<template>
    <div class="event-create-start grid" :style="pageHeight">
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
                <br>
                <ul>
                    <li>The first step is to create your organization on EI.</li>
                    <li>The second step is creating the event for that organization.</li>
                </ul>
            </div>
            <a href="/organizer/create"><button class="event-start-button">Create Organization</button></a>
        </div>
        <div class="login-image">
            <picture>
                
                <img :style="pageHeight" src="/storage/website-files/login-image.jpg">
            </picture>
        </div>
    </div>
    
</template>

<script>
    export default {

        props: ['user'],

        data() {
            return {
                pageHeight: 0,
            }
        },

        methods: {
            handleResize() {
                this.pageHeight = `height:${window.innerHeight}px;`
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