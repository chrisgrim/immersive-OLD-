<template>
    <div class="c-tags">
        <div class="">
            <div class="title">
                <h1>Tags</h1>
                <div class="add">
                    <button @click.prevent="isModalVisible = true">
                        <IconSvg type="add" />
                    </button>
                </div>
            </div>
        </div>

        <div class="c-tags__list">
            <div class="field c-tags__list--filter">
                <input 
                    type="text"
                    v-model="genre"
                    placeholder="search by tag name" 
                    @keyup="onSearch(genre)">
            </div>
            <div class="c-tags__list--grid-top">
                <p>tag</p>
                <p>rank</p>
                <p>admin</p>
            </div>
            <div 
                class="list c-tags__list--grid" 
                :key="genre.id"
                v-for="(genre) in genres">
                <div class="field">
                    <input 
                        type="text" 
                        v-model="genre.name" 
                        placeholder="Genre"
                        @blur="onUpdate(genre)">
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
                        @input="onUpdate(genre)"
                        :preselect-first="false" />
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
                        @input="onUpdate(genre)"
                        :preselect-first="false" />
                </div>

                <button 
                    @click.prevent="showModal(genre)" 
                    class="delete-circle">
                    <IconSvg type="delete" />
                </button>
            </div>
            <modal 
                v-if="isEditModalVisible" 
                @close="isEditModalVisible = false">
                <div slot="header">
                    <div class="circle del">
                        <p>X</p>
                    </div>
                </div>
                <div slot="body"> 
                    <h3>Are you sure?</h3>
                    <p>You are deleting {{ modalDelete.genre }}.</p>
                </div>
                <div slot="footer">
                    <button 
                        class="btn del" 
                        @click.prevent="onDelete(modalDelete)">
                        Delete
                    </button>
                </div>
            </modal>

            <div class="pin noimg">
                <modal 
                    v-if="isModalVisible" 
                    @close="isModalVisible = false">
                    <div slot="header">
                        <div />
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
                                    @input="$v.name.$touch">
                                <div v-if="$v.name.$error" class="validation-error">
                                    <p class="error" v-if="!$v.name.required">Please Add Genre </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div slot="footer">
                        <button 
                            @click.prevent="onSubmit()" 
                            class="btn sub">
                            Submit
                        </button>
                    </div>
                </modal>
            </div>
            <load-more @intersect="intersected()" />
        </div>
    </div>
</template>

<script>
    
    import { required } from 'vuelidate/lib/validators'
    import LoadMore  from '../../components/LoadMore.js'
    import Multiselect from 'vue-multiselect'
    import IconSvg from '../../components/Svg-icon'

    export default {

        components: { Multiselect, LoadMore, IconSvg },

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

            onSubmit() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false }

                axios.post('/genres', {name: this.name})
                .then(res => { this.genres = res.data.data; this.isModalVisible = false; })
                .catch(error => { this.isModalVisible = false });
            },

            onUpdate(genre) {
                axios.patch(`/genres/${genre.id}`, genre)
                .then(res => { this.genres = res.data.data; })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            onDelete(genre) {
                axios.delete(`/genres/${genre.id}`)
                .then(res => { this.isEditModalVisible = false; this.genres = res.data.data; })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            onLoad() {
                axios.get(`/genres?page=${this.page}`)
                .then(res => { 
                    res.data.current_page == 1 ? this.genres = res.data.data : this.genres = this.genres.concat(res.data.data);
                    this.pagination = res.data;
                    this.page = res.data.current_page + 1;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            onSearch(value) {
                this.page = 2;
                axios.get('/api/admin/genres/search', { params: { keywords: value } })
                .then(res => {
                    this.genres = res.data.data;
                });
            },

            showModal(genre) {
                this.modalDelete = genre;
                this.isEditModalVisible = true;
            },

            intersected() {
                if (this.genre) {return false}
                if( this.pagination.last_page < this.page ) {return false}
                this.onLoad();
            },
            
        },

        created() {
            this.onLoad()
        },

        validations: {
            name: {
                required,
            },
        },
    }

</script>