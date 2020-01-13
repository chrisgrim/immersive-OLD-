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
                <p>You are deleting the organizer {{modalDelete.name}} and its events.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="onDelete(modalDelete)">Delete</button>
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

            }
        },

        computed: {
            organizers() {
                return this.organizerList.length ? this.organizerList : this.initOrganizers 
            }
        },

        methods: {

            showModal(val) {
                this.modalDelete = val;
                this.isEditModalVisible = true;
            },

            onDelete(val) {
                axios.delete(`/regions/${val.id}`)
                .then(response => { 
                    this.isEditModalVisible = false;
                    this.onLoad();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
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