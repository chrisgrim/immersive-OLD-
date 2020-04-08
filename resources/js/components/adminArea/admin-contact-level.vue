<template>
    <div class="contactlevels">
        <div class="">
            <div class="title">
                <h1>Contact Levels</h1>
                <div class="add">
                    <button @click.prevent="isModalVisible = true"><p>+</p></button>
                </div>
            </div>
        </div>


        <div class="list" v-for="(level, index) in contactLevels">
            <input 
            type="text" 
            v-model="level.level" 
            placeholder="Contact Level Name"
            @blur="saveContactLevel(level)"
            />
            <button @click.prevent="showModal(level)" class="delete-circle"><p>X</p></button>
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
                <button class="btn del" @click.prevent="deleteContactLevel(modalDelete)">Delete</button>
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
                            v-model="contactLevel" 
                            placeholder="Contact Level Name"
                            :class="{ active: levelActive}"
                            @click="levelActive = true"
                            @blur="levelActive = false"
                            @input="$v.contactLevel.$touch"
                            />
                            <div v-if="$v.contactLevel.$error" class="validation-error">
                                <p class="error" v-if="!$v.contactLevel.required">Please Add Contact Level </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div slot="footer">
                    <button @click.prevent="submitNewContactLevel()" class="btn sub">Submit</button>
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
                contactLevels: '',
                levelActive: false,
                contactLevel: '',
                isModalVisible: false,
                isEditModalVisible: false,
                modalDelete: '',

            }
        },

        computed: {
            
        },

        methods: {

            //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
            async submitNewContactLevel() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                let data = {
                    level: this.contactLevel
                }

                axios.post('/contactlevels', data)
                .then(response => { 
                    console.log(response.data);
                    this.isModalVisible = false;
                    this.contactLevel = '';
                    this.loadContactLevels();
                })
                .catch(error => { 
                    this.isModalVisible = false;
                });
            },

            showModal(level) {
                this.modalDelete = level;
                this.isEditModalVisible = true;
            },

            deleteContactLevel(level) {
                axios.delete(`/contactlevels/${level.id}`)
                .then(response => { 
                    console.log(response.data);
                    this.isEditModalVisible = false;
                    this.loadContactLevels();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            loadContactLevels() {
                axios.get('/contactlevels')
                .then(response => { 
                   this.contactLevels = response.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            saveContactLevel(level) {
                let data = {
                    level: level.level
                };
                axios.patch(`/contactlevels/${level.id}`, data)
                .then(response => { 
                    console.log(response.data)
                    this.loadContactLevels()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            
        },

        created() {
            this.loadContactLevels()
        },

        validations: {
            contactLevel: {
                required,
            },
        },
    }

</script>