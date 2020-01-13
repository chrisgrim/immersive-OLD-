<template>
    <div class="users">
        <div class="">
            <div class="title">
                <h1>Users</h1>
            </div>
        </div>

        <div class="field">
            <input 
            v-model="userList"
            placeholder="Filter by name or email" 
            class="general"
            @keyup="asyncGenerateUserList(userList)"
            type="text">
        </div>
        <div class="list" v-for="(user, index) in users">
            <input 
            type="text" 
            v-model="user.name" 
            placeholder="User Name"
            @blur="saveName(user)"
            />
            <input 
            type="text" 
            v-model="user.email" 
            placeholder="Email"
            @blur="saveEmail(user)"
            />
            <select 
            v-model="user.userType.name" 
            placeholder="User Type"
            @blur="saveUserType(user)">
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
            <option value="user">User</option>
            </select>
            <button @click.prevent="showModal(user)" class="delete-circle"><p>X</p></button>
        </div>
        <modal v-show="isEditModalVisible" @close="isEditModalVisible = false">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting the user {{modalDelete.name}} user.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="deleteUser(modalDelete)">Delete</button>
            </div>
        </modal>
    </div>
</template>

<script>
    
    import { required } from 'vuelidate/lib/validators';
    import Multiselect from 'vue-multiselect'


    export default {

        components: { Multiselect },

        data() {
            return {
                users: [],
                userList: [],
                searchUserOptions: [],
                regionActive: false,
                user: '',
                isModalVisible: false,
                isEditModalVisible: false,
                modalDelete: '',
                isLoading: '',

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

            loadUsers() {
                axios.get('/userlist/fetch')
                .then(response => {
                    console.log(response.data);
                    this.users = response.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            saveName(user) {
                let data = {
                    name: user.name
                };
                axios.patch(`/master/userlist/${user.id}`, data)
                .then(response => { 
                    console.log(response.data)
                   this.loadUsers()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            saveEmail(user) {
                let data = {
                    email: user.email
                };
                axios.patch(`/master/userlist/${user.id}`, data)
                .then(response => { 
                    console.log(response.data)
                   this.loadUsers()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            saveUserType(user) {
                let data = {
                    userType: user.userType.name
                };
                axios.patch(`/master/userlist/${user.id}`, data)
                .then(response => { 
                    console.log(response.data)
                   this.loadUsers()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            asyncGenerateUserList (query) {
                axios.get('/api/search/user/list', { params: { keywords: query } })
                .then(response => {
                    console.log(response.data);
                    this.users = response.data;
                });
            },

            createList() {
                this.searchUserOptions = this.userlist;
            },

            
        },

        created() {
            this.loadUsers()
        },

        validations: {
            region: {
                required,
            },
        },
    }

</script>