<template>
    <div class="genres">
        <div class="">
            <div class="title">
                <h1>Tags</h1>
                <div class="add">
                    <button @click.prevent="isModalVisible = true"><p>+</p></button>
                </div>
            </div>
        </div>


        <div class="list" v-for="(genre, index) in genres">
            <input 
            type="text" 
            v-model="genre.name" 
            placeholder="Genre"
            @blur="saveGenre(genre)"
            />
             <input 
            type="text" 
            v-model="genre.rank" 
            placeholder="Genre"
            @blur="saveRank(genre)"
            />
            <button @click.prevent="showModal(genre)" class="delete-circle"><p>X</p></button>
        </div>
        <modal v-if="isEditModalVisible" @close="isEditModalVisible = false">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting {{modalDelete.genre}}.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="deleteGenre(modalDelete)">Delete</button>
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
                            v-model="name" 
                            placeholder="Genre"
                            :class="{ active: active}"
                            @click="active = true"
                            @blur="active = false"
                            @input="$v.name.$touch"
                            />
                            <div v-if="$v.name.$error" class="validation-error">
                                <p class="error" v-if="!$v.name.required">Please Add Genre </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div slot="footer">
                    <button @click.prevent="submitNewGenre()" class="btn sub">Submit</button>
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
                genres: '',
                active: false,
                name: '',
                isModalVisible: false,
                isEditModalVisible: false,
                modalDelete: '',

            }
        },

        computed: {
            
        },

        methods: {

            //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
            submitNewGenre() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                let data = {
                    name: this.name
                }

                axios.post('/genres', data)
                .then(response => { 
                    console.log(response.data);
                    this.isModalVisible = false;
                    this.name = '';
                    this.loadGenres();
                })
                .catch(error => { 
                    this.isModalVisible = false;
                });
            },

            showModal(genre) {
                this.modalDelete = genre;
                this.isEditModalVisible = true;
            },

            deleteGenre(genre) {
                axios.delete(`/genres/${genre.id}`)
                .then(response => { 
                    console.log(response.data);
                    this.isEditModalVisible = false;
                    this.loadGenres();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            loadGenres() {
                axios.get('/genres')
                .then(res => { 
                   this.genres = res.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            saveGenre(genre) {
                let data = {
                    name: genre.name
                };
                axios.patch(`/genres/${genre.id}`, data)
                .then(res => { 
                    console.log(res.data)
                    this.loadGenres()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            saveRank(genre) {
                let data = {
                    rank: genre.rank
                };
                axios.patch(`/genres/${genre.id}`, data)
                .then(res => { 
                    console.log(res.data)
                    this.loadGenres()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            
        },

        created() {
            this.loadGenres()
        },

        validations: {
            name: {
                required,
            },
        },
    }

</script>