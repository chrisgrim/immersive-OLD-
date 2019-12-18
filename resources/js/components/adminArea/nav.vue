<template>
    <div>
        <nav class="nav">
            <div class="logo">
                <a href="/">
                    <img src="/storage/website-files/ei-logo.png" alt="">
                </a>
            </div>
            <div class="title">
                <h3>Admin Area</h3>
            </div>
            <div class="menu">
                <a href="/categories/create">
                <div class="checklist-section">
                    Categories
                </div>
                </a>

                <a href="/regions/create">
                <div class="checklist-section">
                    Regions
                </div>
                </a>

                <a href="/contactlevels/create">
                <div class="checklist-section" >
                    Contact Levels
                </div>
                </a>

                <a href="/contentadvisories/create">
                <div class="checklist-section" >
                    Content Advisories
                </div>
                </a>

                <a href="/genres/create">
                <div class="checklist-section" >
                    Genres
                </div>
                </a>

                 <a href="/finish/events">
                    <div class="checklist-section">
                        <div class="item">
                            <div v-if="user.needsApproval" class="notification">
                                {{user.needsApproval}}
                            </div>
                            Approve Events
                        </div>
                    </div>
                </a>
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



