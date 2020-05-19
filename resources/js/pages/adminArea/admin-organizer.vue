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
        <div class="list" v-for="(organizer, index) in organizers">
            <input 
            type="text" 
            v-model="organizer.name" 
            placeholder="Organization"
            @blur="onSaveName(organizer)"
            />
            <input 
            type="text" 
            v-model="organizer.user_id" 
            placeholder="Owner Id"
            @blur="onSaveUser(organizer)"
            />
            <button @click.prevent="showModal(organizer, 'deleteOrg')" class="delete-circle"><p>X</p></button>
        </div>
         <modal v-if="modal == 'deleteOrg'" @close="modal = null">
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
                <button class="btn del" @click="deleteOrg()">Delete</button>
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
                organizer: [],
                organizerList: [],
                initOrganizers: [],
                isModalVisible: false,
                isEditModalVisible: false,
                modalDelete: '',
                isLoading: '',
                selectedModal: '',
                modal: '',

            }
        },

        computed: {
            organizers() {
                return this.organizerList.length ? this.organizerList : this.initOrganizers 
            }
        },

        methods: {

            showModal(event, arr) {
                this.selectedModal = event;
                this.modal = arr;
            },

            deleteOrg(index) {
                axios.delete(`/organizer/${this.selectedModal.slug}`)
                .then(response => {
                    this.events = response.data;
                    this.selectedModal = '';
                    this.modal = '';
                    this.loadEvents();
                })
                .catch(errorResponse => { 
                    errorResponse.response.data.errors 
                });
            },

            onLoad() {
                axios.get('/admin/organizer/fetch')
                .then(response => {
                    this.initOrganizers = response.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            onSaveUser(val) {
                let data = {
                    user_id: val.user_id,
                };
                axios.patch(`/admin/organizer/${val.slug}`, data)
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
                .then(response => { 
                    console.log(response.data)
                   this.onLoad()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            }, 

            asyncGenerateOrganizerList(query) {
                axios.get('/api/organizer/search', { params: { keywords: query } })
                .then(response => {
                    console.log(response.data);
                    this.organizerList = response.data;
                });
            },

            
        },

        created() {
            this.onLoad()
        },

        validations: {
            region: {
                required,
            },
        },
    }

</script>