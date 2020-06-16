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
            v-model="user.type" 
            placeholder="User Type"
            @blur="saveUserType(user)">
            <option value="a">Admin</option>
            <option value="m">Moderator</option>
            <option value="g">Guest</option>
            </select>
            <button @click.prevent="showModal(user, 'delete')" class="delete-circle"><p>X</p></button>
        </div>
        <div class="pagination-button">
            <button class="default" @click="loadMore">Load more</button>
        </div>
        <modal v-if="modal == 'delete'" @close="modal = null">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting the user {{selectedModal.name}} user.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="deleteUser(selectedModal)">Delete</button>
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
                modal: false,
                selectedModal: '',
                isLoading: '',
                pagination: {paginate:10},

            }
        },

        computed: {
        },

        methods: {

            showModal(user, arr) {
                this.selectedModal = user;
                this.modal = arr;
            },

            deleteUser(user) {
                axios.delete(`/users/${user.id}`)
                .then(response => { 
                    this.modal = null;
                    this.loadUsers();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            loadMore() {
                this.pagination.paginate += 10;
                this.loadUsers();
            },

            loadUsers() {
                axios.post('/userlist/fetch', this.pagination)
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
                    type: user.type
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
                })
                .catch(error => {
                    this.loadUsers();
                })
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