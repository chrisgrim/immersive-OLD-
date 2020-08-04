<template>
    <div class="c-tags">
        <div class="">
            <div class="title">
                <h1>Tags</h1>
                <div class="add">
                    <button @click.prevent="isModalVisible = true"><p>+</p></button>
                </div>
            </div>
        </div>

        <div class="c-tags__list">
             <div class="field c-tags__list--filter">
                <input 
                type="text"
                v-model="genre"
                placeholder="search by tag name" 
                @keyup="searchGenres(genre)"
                >
            </div>
            <div class="c-tags__list--grid-top">
                <p>tag</p>
                <p>rank</p>
                <p>admin</p>
            </div>
            <div class="list c-tags__list--grid" v-for="(genre, index) in genres">
                <div class="field">
                    <input 
                    type="text" 
                    v-model="genre.name" 
                    placeholder="Genre"
                    @blur="updateGenre(genre)"
                    />
                </div>
                <div class="field">
                    <multiselect 
                    v-model="genre.rank" 
                    :options="[1,2,3,4,5]"
                    :show-labels="false"
                    placeholder="Leave blank for default Rank of 5 (1 being most important)"
                    open-direction="bottom"
                    :class="{ active: active == 'rank'}"
                    @click="active = 'rank'"
                    @blur="active = null"
                    @input="updateGenre(genre)"
                    :preselect-first="false">
                    </multiselect>
                </div>
                <div class="field">
                    <multiselect 
                    v-model="genre.admin" 
                    :options="[0,1]"
                    :show-labels="false"
                    placeholder="admin tags"
                    open-direction="bottom"
                    :class="{ active: active == `${genre.id}rank`}"
                    @click="active = `${genre.id}rank`"
                    @blur="active = null"
                    @input="updateGenre(genre)"
                    :preselect-first="false">
                    </multiselect>
                </div>

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
            <load-more @intersect="intersected()"></load-more>
        </div>
    </div>
</template>

<script>
    
    import { required } from 'vuelidate/lib/validators'
    import LoadMore  from '../../components/LoadMore.js'
    import Multiselect from 'vue-multiselect'


    export default {

        components: { Multiselect, LoadMore },

        computed: {
            
        },

        data() {
            return {
                genre: '',
                genres: [],
                active: false,
                name: '',
                isModalVisible: false,
                isEditModalVisible: false,
                modalDelete: '',
                pagination: '',
                page: 1,

            }
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

            updateGenre(genre) {
                this.page = 1;
                axios.patch(`/genres/${genre.id}`, genre)
                .then(res => { 
                    console.log(res.data)
                    this.genre ? '' : this.loadGenres()
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            showModal(genre) {
                this.modalDelete = genre;
                this.isEditModalVisible = true;
            },

            deleteGenre(genre) {
                axios.delete(`/genres/${genre.id}`)
                .then(response => { 
                    this.isEditModalVisible = false;
                    this.loadGenres();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            intersected() {
                if (this.genre) {return false};
                if( this.pagination.last_page < this.page ) {return false};
                this.loadGenres();
            },

            loadGenres() {
                axios.get(`/genres?page=${this.page}`)
                .then(res => { 
                    console.log(res.data);
                    res.data.current_page == 1 ? this.genres = res.data.data : this.genres = this.genres.concat(res.data.data);
                    this.pagination = res.data;
                    this.page = res.data.current_page + 1;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            searchGenres(value) {
                this.page = 2;
                axios.get('/admin/search/genres', { params: { keywords: value } })
                .then(res => {
                    this.genres = res.data;
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