<template>
    <div>
        <nav class="nav">
            <a href="/">
                <button class="home">Home</button>
            </a>
            <div class="title">
                <h3>Admin Area</h3>
            </div>
            <div class="menu">
                <a href="/categories/create">
                <div class="checklist-section">
                    Categories
                </div>
                </a>

                <a href="/genres/create">
                <div class="checklist-section" >
                    Genres
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

                <a href="/mobilities/create">
                <div class="checklist-section" >
                    Mobility Advisories
                </div>
                </a>

                <a href="/master/userlist">
                <div class="checklist-section" >
                    Edit Users
                </div>
                </a>

                <a href="/admin/organizer">
                <div class="checklist-section" >
                    Edit Organizers
                </div>
                </a>

                <a href="/reviewevents/create">
                <div class="checklist-section" >
                    Event Reviews
                </div>
                </a>

                <a href="/staffpicks/create">
                <div class="checklist-section" >
                    Picks Of The Week
                </div>
                </a>

                 <a href="/finish/events">
                    <div class="checklist-section">
                        <div class="item">
                            <div v-if="user.needsApproval" class="notification">
                                <p>{{user.needsApproval}}</p>
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



