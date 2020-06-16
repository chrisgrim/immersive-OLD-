<template>
    <nav class="admin-nav" :class="onclass">
        <a href="/">
            <button class="admin-home-icon">Home</button>
        </a>
        <div class="admin-nav-title">
            <h3>Admin Area</h3>
        </div>
        <div class="admin-menu">
            <a v-if="admin" href="/categories/create">
            <div class="admin-menu__item">
                Categories
            </div>
            </a>

            <a v-if="admin" href="/genres/create">
            <div class="admin-menu__item" >
                Tags
            </div>
            </a>

            <a v-if="admin" href="/contactlevels/create">
            <div class="admin-menu__item" >
                Contact Levels
            </div>
            </a>

            <a v-if="admin" href="/remotelocations/create">
            <div class="admin-menu__item" >
                Remote Locations
            </div>
            </a>

            <a v-if="admin" href="/contentadvisories/create">
            <div class="admin-menu__item" >
                Content Advisories
            </div>
            </a>

            <a v-if="admin" href="/mobilities/create">
            <div class="admin-menu__item" >
                Mobility Advisories
            </div>
            </a>

            <a v-if="admin" href="/interactivelevels/create">
            <div class="admin-menu__item" >
                Interactive Levels
            </div>
            </a>

            <a v-if="admin" href="/master/userlist">
            <div class="admin-menu__item" >
                Edit Users
            </div>
            </a>

            <a v-if="admin" href="/admin/events">
            <div class="admin-menu__item" >
                Edit Events
            </div>
            </a>
            <a v-if="admin" href="/admin/boneyard">
            <div class="admin-menu__item" >
                Boneyard
            </div>
            </a>

            <a href="/admin/organizer">
            <div class="admin-menu__item" >
                Edit Organizers
            </div>
            </a>

            <a href="/reviewevents/create">
            <div class="admin-menu__item" >
                Event Reviews
            </div>
            </a>

            <a href="/staffpicks/create">
            <div class="admin-menu__item" >
                Picks Of The Week
            </div>
            </a>

             <a href="/finish/events">
                <div class="admin-menu__item">
                    <div v-if="user.needsApproval" class="admin-menu__notification">
                        <p>{{user.needsApproval}}</p>
                    </div>
                    Approve Events
                </div>
            </a>
        </div>
    </nav>
</template>

<script>

    export default {

        props: ['loaduser', 'onclass'],

        data() {
            return {
                user: this.loaduser ? this.loaduser : '',
                admin: this.loaduser.type == 'a' ? true : false,
                mod: this.loaduser.type == 'm' ? true : false,
            };
        },

        methods: {
            
        },

    }
</script>



