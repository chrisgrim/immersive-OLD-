<template>
    <div class="contentlevels">
        <div class="">
            <div class="title">
                <h1>Content Advisories</h1>
                <div class="add">
                    <button @click.prevent="isModalVisible = true"><p>+</p></button>
                </div>
            </div>
        </div>


        <div class="list" v-for="(advisory, index) in contentAdvisories">
            <input 
            type="text" 
            v-model="advisory.advisories" 
            placeholder="Content Advisories"
            @blur="saveContentAdvisory(advisory)"
            />
            <button @click.prevent="showModal(advisory)" class="delete-circle"><p>X</p></button>
        </div>
        <modal v-if="isEditModalVisible" @close="isEditModalVisible = false">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting {{modalDelete.advisories}}.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="deleteContentAdvisory(modalDelete)">Delete</button>
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
                            v-model="contentAdvisory" 
                            placeholder="Content Advisory"
                            :class="{ active: contentActive}"
                            @click="contentActive = true"
                            @blur="contentActive = false"
                            @input="$v.contentAdvisory.$touch"
                            />
                            <div v-if="$v.contentAdvisory.$error" class="validation-error">
                                <p class="error" v-if="!$v.contentAdvisory.required">Please Add Content Advisories </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div slot="footer">
                    <button @click.prevent="submitNewContentAdvisory()" class="btn sub">Submit</button>
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
                contentAdvisory: '',
                contentActive: false,
                contentAdvisories: '',
                isModalVisible: false,
                isEditModalVisible: false,
                modalDelete: '',

            }
        },

        computed: {
            
        },

        methods: {

            //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
            async submitNewContentAdvisory() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                let data = {
                    advisories: this.contentAdvisory
                }

                axios.post('/contentadvisories', data)
                .then(response => { 
                    console.log(response.data);
                    this.isModalVisible = false;
                    this.contentAdvisory = '';
                    this.loadContentAdvisories();
                })
                .catch(error => { 
                    this.isModalVisible = false;
                });
            },

            showModal(advisory) {
                this.modalDelete = advisory;
                this.isEditModalVisible = true;
            },

            deleteContentAdvisory(advisory) {
                axios.delete(`/contentadvisories/${advisory.id}`)
                .then(response => { 
                    console.log(response.data);
                    this.isEditModalVisible = false;
                    this.loadContentAdvisories();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            loadContentAdvisories() {
                axios.get('/contentadvisories')
                .then(response => { 
                   this.contentAdvisories = response.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            saveContentAdvisory(advisory) {
                let data = {
                    advisories: advisory.advisories
                };
                axios.patch(`/contentadvisories/${advisory.id}`, data)
                .then(response => { 
                    console.log(response.data)
                    this.loadContentAdvisories()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            
        },

        created() {
            this.loadContentAdvisories()
        },

        validations: {
            contentAdvisory: {
                required,
            },
        },
    }

</script>