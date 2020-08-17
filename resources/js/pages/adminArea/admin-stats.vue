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
        <template>
            <div>
              <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
            </div>
        </template>
         
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'
    import { required } from 'vuelidate/lib/validators';
    Vue.component('apexchart', VueApexCharts)


    export default {
        props: ['eventcount', 'usercount',],

        data() {
            return {
                options: {
                    chart: {
                      id: 'vuechart-example'
                    },
                    xaxis: {
                      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                    }
                },
                series: [{
                    name: 'series-1',
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }],
            }
        },

        computed: {
            submitObject() {
                return {type : 'category'}
            }
        },

        methods: {
            onLoad() {
                axios.post('/admin/data', this.submitObject)
                .then(res => {
                    // this.options.xaxis.categories = Object.keys(res.data);
                    console.log(res.data);
                })
                .catch(err => {

                });
            }
                
        },

        created() {
            this.onLoad();
        },  

    }

</script>