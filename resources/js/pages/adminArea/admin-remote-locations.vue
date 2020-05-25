<template>
    <div class="genres">
        <div class="">
            <div class="title">
                <h1>Remote Locations</h1>
                <div class="add">
                    <button @click.prevent="isModalVisible = true"><p>+</p></button>
                </div>
            </div>
        </div>


        <div class="list" v-for="(remoteLocation, index) in remoteLocations">
            <input 
            type="text" 
            v-model="remoteLocation.location" 
            placeholder="Remote Location"
            @blur="saveLocation(remoteLocation)"
            />
            <textarea
            type="text" 
            v-model="remoteLocation.description" 
            placeholder="Remote location description"
            @blur="saveDescription(remoteLocation)"
            /></textarea> 
            <input 
            type="text" 
            v-model="remoteLocation.rank" 
            placeholder="Remote Location"
            @blur="saveRank(remoteLocation)"
            />
            <button @click.prevent="showModal(remoteLocation)" class="delete-circle"><p>X</p></button>
        </div>
        <modal v-if="isEditModalVisible" @close="isEditModalVisible = false">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting {{modalDelete.location}}.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="deleteLocation(modalDelete)">Delete</button>
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
                            v-model="remoteLocation.location" 
                            placeholder="Remote Location"
                            :class="{ active: activeItem = 'location'}"
                            @click="activeItem = 'location'"
                            @blur="activeItem = null"
                            @input="$v.remoteLocation.location.$touch"
                            />
                            <div v-if="$v.remoteLocation.location.$error" class="validation-error">
                                <p class="error" v-if="!$v.remoteLocation.location.required">Please Add Remote Location </p>
                            </div>
                            <textarea
                            type="text" 
                            v-model="remoteLocation.description" 
                            placeholder="Remote location description"
                            @blur="saveDescription(remoteLocation)"
                            /></textarea> 
                        </div>
                    </div>
                </div>
                <div slot="footer">
                    <button @click.prevent="submitNewLocation()" class="btn sub">Submit</button>
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
                remoteLocations: '',
                activeItem: '',
                remoteLocation: {
                    location: '',
                    description: '',
                },
                isModalVisible: false,
                isEditModalVisible: false,
                modalDelete: '',

            }
        },

        computed: {
            
        },

        methods: {

            //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
            submitNewLocation() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                let data = {
                    location: this.remoteLocation.location,
                    description: this.remoteLocation.description
                };

                axios.post('/remotelocations', data)
                .then(response => { 
                    this.isModalVisible = false;
                    this.remoteLocation = '';
                    this.loadLocations();
                })
                .catch(error => { 
                    this.isModalVisible = false;
                });
            },

            showModal(remotelocations) {
                this.modalDelete = remotelocations;
                this.isEditModalVisible = true;
            },

            deleteLocation(remotelocations) {
                axios.delete(`/remotelocations/${remotelocations.id}`)
                .then(response => { 
                    console.log(response.data);
                    this.isEditModalVisible = false;
                    this.loadLocations();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            loadLocations() {
                axios.get('/remotelocations')
                .then(response => { 
                   this.remoteLocations = response.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            saveLocation(remoteLocation) {
                let data = {
                    location: remoteLocation.location
                };
                axios.patch(`/remotelocations/${remoteLocation.id}`, data)
                .then(response => { 
                    console.log(response.data)
                    this.loadLocations()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            saveDescription(remoteLocation) {
                let data = {
                    description: remoteLocation.description
                };
                axios.patch(`/remotelocations/${remoteLocation.id}`, data)
                .then(response => { 
                   console.log(response.data)
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            saveRank(remoteLocation) {
                let data = {
                    rank: remoteLocation.rank
                };
                axios.patch(`/remotelocations/${remoteLocation.id}`, data)
                .then(response => { 
                    console.log(response.data)
                    this.loadLocations()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            
        },

        created() {
            this.loadLocations()
        },

        validations: {
            remoteLocation: {
                location: {
                    required,
                },
                description: {
                    required,
                }
            },
        },
    }

</script>