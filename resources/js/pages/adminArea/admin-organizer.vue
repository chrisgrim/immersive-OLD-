<template>
    <div class="organizers">
        <div class="">
            <div class="title">
                <h1>Organizers</h1>
            </div>
        </div>

        <div class="field">
            <input 
                v-model="organizer"
                placeholder="Filter by organization name" 
                class="general"
                @keyup="asyncGenerateOrganizerList(organizer)"
                type="text">
        </div>
        <div 
            class="list"
            :key="organizer.id"
            v-for="(organizer) in organizers">
            <div class="edit">
                <a :href="`/organizer/${organizer.slug}/edit`">
                    <button class="default">Edit Organizer</button>
                </a>
            </div>
            <div>
                {{ organizer.name }}
            </div>
            <div>
                {{ organizer.user.email }}
            </div>
            <div>
                <button @click.prevent="showModal(organizer, 'changeOrg')">Change Owner</button>
            </div>
            <button 
                @click.prevent="showModal(organizer, 'deleteOrg')" 
                class="delete-circle">
                <p>X</p>
            </button>
        </div>
        <div class="pagination-button">
            <button 
                class="default" 
                @click="loadMore">
                Load more
            </button>
        </div>
        <modal 
            v-if="modal == 'deleteOrg'" 
            @close="modal = null">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting your {{selectedModal.name}} organization.</p>
            </div>
            <div slot="footer">
                <button 
                    class="btn del" 
                    @click="deleteOrg()">Delete</button>
            </div>
        </modal>
        <modal 
            v-if="modal == 'changeOrg'" 
            @close="modal = null">
            <div slot="header">
                <div class="circle sub">
                    <p>!</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Change Organizer Owner</h3>
                <multiselect 
                    v-model="user" 
                    deselect-label="Can't remove this value" 
                    track-by="email" 
                    label="email" 
                    placeholder="Select one" 
                    :options="users"
                    @search-change="asyncGenerateUserList" />
            </div>
            <div slot="footer">
                <button 
                    class="btn sub" 
                    @click="onChangeOwner()">Change Owner</button>
            </div>
        </modal>
    </div>
</template>

<script>
    
    import { required } from 'vuelidate/lib/validators';
    import Multiselect from 'vue-multiselect'


    export default {

        components: { Multiselect },

        computed: {
            organizers() {
                return this.organizerList.length ? this.organizerList : this.initOrganizers 
            }
        },

        data() {
            return {
                organizerList: [],
                initOrganizers: [],
                isModalVisible: false,
                isEditModalVisible: false,
                modalDelete: '',
                isLoading: '',
                selectedModal: '',
                modal: '',
                newOwner: 'bob',
                user: '',
                users:[],
                showEdit: false,
                pagination: {paginate:10},

            }
        },

        methods: {

            showModal(event, arr) {
                this.selectedModal = event;
                this.modal = arr;
            },

            deleteOrg(index) {
                axios.delete(`/organizer/${this.selectedModal.slug}`)
                .then(res => {
                   location.reload();
                })
                .catch(err => { 
                });
            },

            loadMore() {
                this.pagination.paginate += 10;
                this.onLoad();
            },

            onLoad() {
                axios.post('/admin/organizer/fetch', this.pagination)
                .then(res => {
                    this.initOrganizers = res.data;
                })
                .catch(error => { this.serverErrors = error.res.data.errors; });
            },

            onChangeOwner() {
                axios.post(`/change/organizer/${this.selectedModal.slug}`, this.user)
                .then(res => { 
                    console.log(res.data)
                    this.modal = '';
                    this.onLoad();
                })
            },

            asyncGenerateUserList (query) {
                axios.get('/api/admin/users/search', { params: { keywords: query } })
                .then(res => {
                    this.users = res.data;
                })
                .catch(error => {
                    this.loadUsers();
                })
            },

            loadUsers() {
                axios.get('/api/admin/users/search')
                .then(res => {
                    this.users = res.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            onSaveUser(value) {
                let data = {
                    user_id: value.user_id,
                };
                axios.patch(`/admin/organizer/${value.slug}`, data)
                .then(response => { 
                    console.log(response.data)
                   this.onLoad()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },
            onSaveName(val) {
                let data = {
                    name: val.name
                };
                axios.patch(`/admin/organizer/${val.slug}`, data)
                .then(res => { 
                    console.log(res.data)
                   this.onLoad()
                })
                .catch(error => { 
                    this.serverErrors = error.res.data.errors; 
                });
            }, 

            asyncGenerateOrganizerList(query) {
                axios.get('/api/search/organizer', { params: { keywords: query } })
                .then(res => {
                    this.organizerList = res.data;
                });
            },

            
        },

        created() {
            this.onLoad();
            this.loadUsers();
        },

        validations: {
            region: {
                required,
            },
        },
    }

</script>