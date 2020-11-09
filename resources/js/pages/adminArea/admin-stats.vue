<template>
    <div class="admin-events">
        <div class="">
            <div class="admin-events__title">
                <h1>Stats</h1>
            </div>
        </div>
        <div>
            number of users: {{ usercount }}
        </div>
        <div>
            number of events: {{ eventcount }}
        </div>
        <br>
        <div>
            <h3>User Searches</h3>
        </div>
        <div>
            <multiselect 
                v-model="searchType"
                placeholder="Search by type"
                :allowEmpty="false"
                :options="searchOptions" 
                tag-position="bottom"
                :class="{ active: active == 'type' }"
                @input="onLoad"
                @click="active = 'type'"
                @blur="active = null" />
        </div>
        <div>
            <apexchart 
                width="500" 
                type="bar" 
                :options="options" 
                :series="series" />
        </div>
    </div>
</template>

<script>
    import VueApexCharts from 'vue-apexcharts'
    import { required } from 'vuelidate/lib/validators';
    import Multiselect from 'vue-multiselect'
    Vue.use(VueApexCharts)
    Vue.component('apexchart', VueApexCharts)


    export default {
        props: ['eventcount', 'usercount'],

        components: { Multiselect },

        computed: {
            submitObject() {
                return {type : this.searchType}
            }
        },

        data() {
            return {
                searchOptions: ['category', 'location', 'event', 'organizer'],
                searchType: 'category',
                active: '',
                options: {
                    chart: {
                      id: 'vuechart-example'
                    },
                    xaxis: {
                      categories: []
                    }
                },
                series: [{
                    name: 'series-1',
                    data: []
                }],
            }
        },

        methods: {
            onLoad() {
                axios.post('/admin/data', this.submitObject)
                .then( res => {
                    this.options = {
                        xaxis: {
                          categories: res.data.map(name => name.name.substring(0, 20)),
                        }
                    }
                    this.series = [{data: res.data.map(name => name.count), name: res.data.map(name => name.name.substring(0, 20))}]
                })
                .catch( err => {});
            },
                
        },

        created() {
            this.onLoad();
        },  

    }

</script>