<template>
    <div>
        <nav class="nav">
            <div class="logo">
                <a href="/">
                    <h3>EI</h3>
                </a>
            </div>
            <div class="menu">
            </div>
        </nav>
    </div>
</template>

<script>

    export default {

        props: ['loaduser'],

        data() {
            return {
                user: this.loaduser ? this.loaduser : '',
            };
        },

        methods: {
            
        },

    }
</script>



