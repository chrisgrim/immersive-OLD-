<template>
    <nav class="create" :style="pageHeight">
        <div class="grid create-nav-header">
            <div class="create-nav-header__home">
                <div class="nav-create-logo">
                    <a :href="backUrl">
                        <h3>EI</h3>
                    </a>
                </div>
            </div>
            <div class="nav-back">
                <button class="nav-back-button"> Save and Exit </button>
            </div>
        </div>
        <div class="create-nav-guide">
            <h3>Add your Organization</h3>
        </div>
        
    </nav>
</template>

<script>

    export default {
        props: ['user', 'organizer'],

        computed: {
            backUrl() {
                return this.user.hasCreatedOrganizers  ? '/create-event/edit' : '/'
            },
        },

        data() {
            return {
                pageHeight:'',
            }
        },

        methods: {



        },




    }

</script>