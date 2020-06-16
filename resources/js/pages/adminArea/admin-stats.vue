<template>
    <div class="admin-events">
        <div class="">
            <div class="admin-events__title">
                <h1>Stats</h1>
            </div>
        </div>
        <div>
            number of users: {{usercount}}
        </div>
        <div>
            number of events: {{eventcount}}
        </div>
         
    </div>
</template>

<script>
    
    import { required } from 'vuelidate/lib/validators';


    export default {
        props: ['eventcount', 'usercount',],

        data() {
            return {


            }
        },

        computed: {
            
        },

        methods: {



                
        },

        created() {

        },

    }

</script>