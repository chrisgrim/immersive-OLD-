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
                @keyup="onSearch(userList)"
                type="text">
        </div>
        <div 
            class="list" 
            :key="user.id"
            v-for="(user) in users.data">
            <input 
                type="text" 
                v-model="user.name" 
                placeholder="User Name"
                @change="onUpdate(user)">
            <input 
                type="text" 
                v-model="user.email" 
                placeholder="Email"
                @change="onUpdate(user)">
            <select 
                v-model="user.type" 
                placeholder="User Type"
                @change="onUpdate(user)">
                <option value="a">Admin</option>
                <option value="m">Moderator</option>
                <option value="g">Guest</option>
            </select>
            <button 
                @click.prevent="showModal(user, 'delete')" 
                class="delete-circle">
                <IconSvg type="delete" />
            </button>
        </div>
        <pagination 
            :limit="1"
            :list="users"
            @selectpage="onLoad" />
        <modal 
            v-if="modal == 'delete'" 
            @close="modal = null">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting the user {{ selectedModal.name }} user.</p>
            </div>
            <div slot="footer">
                <button 
                    class="btn del" 
                    @click.prevent="onDelete(selectedModal)">
                    Delete
                </button>
            </div>
        </modal>
    </div>
</template>

<script>

    import IconSvg from '../../components/Svg-icon'
    import Pagination  from '../../components/pagination.vue'

    export default {

        components: { IconSvg, Pagination },

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
            }
        },


        methods: {

            onDelete(user) {
                axios.delete(`/admin/users/${user.id}/delete`)
                .then( res => { this.modal=false; this.users = res.data })
                .catch( error => { this.serverErrors = error.response.data.errors; });
            },

            onLoad(page) {
                axios.post(`/admin/users/fetch?page=${page}`)
                .then( res => { this.users = res.data })
                .catch( error => { this.serverErrors = error.response.data.errors; });
            },

            onUpdate(user) {
                console.log('test');
                axios.patch(`/admin/users/${user.id}`, user)
                .then( res => { this.users = res.data; })
                .catch( error => {  this.serverErrors = error.response.data.errors });
            },

            onSearch(query) {
                axios.get('/api/admin/users/search', { params: { keywords: query } })
                .then( res => { this.users = res.data })
                .catch()
            },

            createList() {
                this.searchUserOptions = this.userlist;
            },

            showModal(user, arr) {
                this.selectedModal = user;
                this.modal = arr;
            }, 
        },

        created() {
            this.onLoad()
        },

    }

</script>