<template>
    <div class="regions">
        <div class="">
            <div class="title">
                <h1>Regions</h1>
                <div class="add">
                    <button @click.prevent="isModalVisible = true"><p>+</p></button>
                </div>
            </div>
        </div>


        <div class="list" v-for="(region, index) in regions">
            <input 
            type="text" 
            v-model="region.region" 
            placeholder="Region Name"
            @blur="saveRegion(region)"
            />
            <button @click.prevent="showModal(region)" class="delete-circle"><p>X</p></button>
        </div>
        <modal v-show="isEditModalVisible" @close="isEditModalVisible = false">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting your {{modalDelete.region}} region.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="deleteRegion(modalDelete)">Delete</button>
            </div>
        </modal>

        <div class="pin noimg">
            <modal v-show="isModalVisible" @close="isModalVisible = false">
                <div slot="header">
                    <div></div>
                </div>
                <div slot="body" class="body">
                    <div class="text">
                        <div class="name">
                            <input 
                            type="text" 
                            v-model="region" 
                            placeholder="Region Name"
                            :class="{ active: regionActive}"
                            @click="regionActive = true"
                            @blur="regionActive = false"
                            @input="$v.region.$touch"
                            />
                            <div v-if="$v.region.$error" class="validation-error">
                                <p class="error" v-if="!$v.region.required">Please Add Region </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div slot="footer">
                    <button @click.prevent="submitNewRegion()" class="btn sub">Submit</button>
                </div>
            </modal>
        </div>
    </div>
</template>

<script>
    
    import { required } from 'vuelidate/lib/validators';


    export default {

        data() {
            return {
                regions: '',
                regionActive: false,
                region: '',
                isModalVisible: false,
                isEditModalVisible: false,
                modalDelete: '',

            }
        },

        computed: {
            
        },

        methods: {

            //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
            async submitNewRegion() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                let data = {
                    region: this.region
                }

                axios.post('/regions', data)
                .then(response => { 
                    console.log(response.data);
                    this.isModalVisible = false;
                    this.region = '';
                    this.loadRegions();
                })
                .catch(error => { 
                    this.isModalVisible = false;
                });
            },

            showModal(region) {
                this.modalDelete = region;
                this.isEditModalVisible = true;
            },

            deleteRegion(region) {
                axios.delete(`/regions/${region.id}`)
                .then(response => { 
                    this.isEditModalVisible = false;
                    this.loadRegions();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            loadRegions() {
                axios.get('/regions')
                .then(response => { 
                   this.regions = response.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            saveRegion(region) {
                let data = {
                    region: region.region
                };
                axios.patch(`/regions/${region.id}`, data)
                .then(response => { 
                    console.log(response.data)
                   this.loadRegions()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            
        },

        created() {
            this.loadRegions()
        },

        validations: {
            region: {
                required,
            },
        },
    }

</script>