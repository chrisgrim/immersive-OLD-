<template>
    <div class="mobility">
        <div class="">
            <div class="title">
                <h1>Mobility</h1>
                <div class="add">
                    <button @click.prevent="isModalVisible = true"><p>+</p></button>
                </div>
            </div>
        </div>


        <div class="list" v-for="(mobility, index) in mobilities">
            <input 
            type="text" 
            v-model="mobility.mobilities" 
            placeholder="Mobilities"
            @blur="saveMobility(mobility)"
            />
            <button @click.prevent="showModal(mobility)" class="delete-circle"><p>X</p></button>
        </div>
        <modal v-if="isEditModalVisible" @close="isEditModalVisible = false">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting {{modalDelete.mobility}}.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="deleteMobility(modalDelete)">Delete</button>
            </div>
        </modal>

        <div class="pin noimg">
            <modal v-if="isModalVisible" @close="isModalVisible = false">
                <div slot="header">
                    <div></div>
                </div>
                <div slot="body" class="body">
                    <div class="text">
                        <div class="name">
                            <input 
                            type="text" 
                            v-model="mobility" 
                            placeholder="Mobilities"
                            :class="{ active: mobilityActive}"
                            @click="mobilityActive = true"
                            @blur="mobilityActive = false"
                            @input="$v.mobility.$touch"
                            />
                            <div v-if="$v.mobility.$error" class="validation-error">
                                <p class="error" v-if="!$v.mobility.required">Please Add Mobility </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div slot="footer">
                    <button @click.prevent="submitNewMobility()" class="btn sub">Submit</button>
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
                mobilities: '',
                mobilityActive: false,
                mobility: '',
                isModalVisible: false,
                isEditModalVisible: false,
                modalDelete: '',

            }
        },

        computed: {
            
        },

        methods: {

            //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
            async submitNewMobility() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                let data = {
                    mobilities: this.mobility
                }

                axios.post('/mobilities', data)
                .then(response => { 
                    console.log(response.data);
                    this.isModalVisible = false;
                    this.mobility = '';
                    this.loadMobilities();
                })
                .catch(error => { 
                    this.isModalVisible = false;
                });
            },

            showModal(mobility) {
                this.modalDelete = mobility;
                this.isEditModalVisible = true;
            },

            deleteMobility(mobility) {
                axios.delete(`/mobilities/${mobility.id}`)
                .then(response => { 
                    console.log(response.data);
                    this.isEditModalVisible = false;
                    this.loadMobilities();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            loadMobilities() {
                axios.get('/mobilities')
                .then(response => { 
                   this.mobilities = response.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            saveMobility(mobility) {
                let data = {
                    mobilities: mobility.mobilities
                };
                axios.patch(`/mobilities/${mobility.id}`, data)
                .then(response => { 
                    console.log(response.data);
                    this.loadGenres();
                    this.$v.$reset();
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors;
                });
            },

            
        },

        created() {
            this.loadMobilities()
        },

        validations: {
            mobility: {
                required,
            },
        },
    }

</script>