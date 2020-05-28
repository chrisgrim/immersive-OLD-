<template>
    <div class="genres">
        <div class="">
            <div class="title">
                <h1>Interactive Levels</h1>
                <div class="add">
                    <button @click.prevent="isModalVisible = true"><p>+</p></button>
                </div>
            </div>
        </div>


        <div class="list" v-for="(interactiveLevel, index) in interactiveLevels">
            <input 
            type="text" 
            v-model="interactiveLevel.name" 
            placeholder="Interactive Level"
            @blur="saveInteractive(interactiveLevel)"
            />
            <textarea
            type="text" 
            v-model="interactiveLevel.description" 
            placeholder="Interactive level description"
            @blur="saveDescription(interactiveLevel)"
            /></textarea> 
            <input 
            type="text" 
            v-model="interactiveLevel.rank" 
            placeholder="Rank"
            @blur="saveRank(interactiveLevel)"
            />
            <button @click.prevent="showModal(interactiveLevel)" class="delete-circle"><p>X</p></button>
        </div>
        <modal v-if="isEditModalVisible" @close="isEditModalVisible = false">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting {{modalDelete.level}}.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="deleteInteractiveLevel(modalDelete)">Delete</button>
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
                            v-model="interactiveLevel.name" 
                            placeholder="Interactive Level"
                            :class="{ active: active = 'name'}"
                            @click="active = 'name'"
                            @blur="active = null"
                            @input="$v.interactiveLevel.name.$touch"
                            />
                            <div v-if="$v.interactiveLevel.name.$error" class="validation-error">
                                <p class="error" v-if="!$v.interactiveLevel.name.required">Please add interactive level name </p>
                            </div>
                            <textarea
                            type="text" 
                            v-model="interactiveLevel.description" 
                            placeholder="Interactive level description"
                            @blur="saveDescription(interactiveLevel)"
                            /></textarea> 
                            <div v-if="$v.interactiveLevel.description.$error" class="validation-error">
                                <p class="error" v-if="!$v.interactiveLevel.description.required">Please add interactive level description </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div slot="footer">
                    <button @click.prevent="onSubmit()" class="btn sub">Submit</button>
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
                interactiveLevels: '',
                active: '',
                interactiveLevel: {
                    name: '',
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
            onSubmit() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                let data = {
                    name: this.interactiveLevel.name,
                    description: this.interactiveLevel.description
                };

                axios.post('/interactivelevels', data)
                .then(res => { 
                    console.log(res.data);
                    location.reload();
                })
                .catch(error => { 
                    this.isModalVisible = false;
                });
            },

            showModal(interactiveLevel) {
                this.modalDelete = interactiveLevel;
                this.isEditModalVisible = true;
            },

            deleteInteractiveLevel(interactiveLevel) {
                axios.delete(`/interactivelevels/${interactiveLevel.id}`)
                .then(res => { 
                    console.log(res.data);
                    this.isEditModalVisible = false;
                    this.loadInteractiveLevels();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            loadInteractiveLevels() {
                axios.get('/interactivelevels')
                .then(res => { 
                   this.interactiveLevels = res.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            saveInteractive(interactiveLevel) {
                let data = {
                    name: interactiveLevel.name
                };
                axios.patch(`/interactivelevels/${interactiveLevel.id}`, data)
                .then(res => { 
                    console.log(res.data)
                    this.loadInteractiveLevels()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            saveDescription(interactiveLevel) {
                let data = {
                    description: interactiveLevel.description
                };
                axios.patch(`/interactivelevels/${interactiveLevel.id}`, data)
                .then(response => { 
                   console.log(response.data)
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            saveRank(interactiveLevel) {
                let data = {
                    rank: interactiveLevel.rank
                };
                axios.patch(`/interactivelevels/${interactiveLevel.id}`, data)
                .then(res => { 
                    console.log(res.data)
                    this.loadInteractiveLevels()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            
        },

        created() {
            this.loadInteractiveLevels()
        },

        validations: {
            interactiveLevel: {
                name: {
                    required,
                },
                description: {
                    required,
                }
            },
        },
    }

</script>