<template>
    <div class="categories">
        <div class="">
            <div class="title">
                <h1>Categories</h1>
                <div class="add">
                    <button @click.prevent="isModalVisible = true"><p>+</p></button>
                </div>
            </div>
        </div>

        <div class="list" v-for="(category, index) in categories">
            <input 
            type="text" 
            v-model="category.name" 
            placeholder="Category Name"
            @blur="saveName(category)"
            />
            <textarea
            type="text" 
            v-model="category.description" 
            placeholder="Category Name"
            @blur="saveDescription(category)"
            /></textarea> 
            <div class="box" :style="{ backgroundImage: `url('/storage/${category.thumbImagePath}')` }">
                <label @click="tempCat = category">
                     <image-upload @loaded="onImageEdit"></image-upload>
                     <CubeSpinner :loading="isLoading"></CubeSpinner>
                </label> 
            </div>
            <input 
            type="text" 
            v-model="category.credit" 
            placeholder="image credit"
            @blur="saveCredit(category)"
            />
            <div>
                <input 
                type="text" 
                v-model="category.rank" 
                placeholder="Category Rank"
                @blur="saveRank(category)"
                />
            </div>
            <button @click.prevent="showModal(category)" class="delete-circle"><p>X</p></button>
        </div>
        <modal v-if="isEditModalVisible" @close="isEditModalVisible = false">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting your {{modalDelete.name}} category.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="deleteCategory(modalDelete)">Delete</button>
            </div>
        </modal>

        <div class="pin">
            <modal v-if="isModalVisible" @close="isModalVisible = false">
                <div slot="header">
                    <div></div>
                </div>
                <div slot="body" class="body">
                    <label :style="{ backgroundImage: `url('${imageSrc}')` }">
                        <div v-if="!imageSrc" class="box">
                            <div class="in">
                                <div>
                                    <svg class="b" height="32" width="32" viewBox="0 0 24 24" aria-label="Add an image or video" role="img"><path d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"></path></svg>
                                </div>
                                 <div>
                                    <p>Click here to upload image</p>
                                    <p>Must be at least 720x960 and under 2mb</p>
                                </div>
                            </div>
                        </div>
                         <image-upload @loaded="onImageUpload"></image-upload>
                         <CubeSpinner :loading="isLoading"></CubeSpinner>
                        <div v-if="$v.finalImage.$error" class="validation-error">
                            <p class="error" v-if="!$v.finalImage.required">Please Add Image </p>
                            <p class="error" v-if="!$v.finalImage.fileSize">Image needs to be less than 2mb </p>
                            <p class="error" v-if="!$v.finalImage.fileType">Image should be jpg, gif, or png</p>
                            <p class="error" v-if="!$v.finalImage.imageRatio">Needs to be at least 720 x 960</p>
                        </div>
                    </label> 
                    <div class="text">
                        <div class="name">
                            <input 
                            type="text" 
                            v-model="name" 
                            placeholder="Category Name"
                            :class="{ active: nameActive}"
                            @click="nameActive = true"
                            @blur="nameActive = false"
                            @input="clearInfo"
                            />
                            <div v-if="$v.name.$error" class="validation-error">
                                <p class="error" v-if="!$v.name.required">Please Add Category Name </p>
                                <p class="error" v-if="!$v.name.serverFailed">This category has already been created</p>
                            </div>
                        </div>
                        <div class="desc">
                            <textarea
                            type="text"
                            rows="6"
                            v-model="description" 
                            placeholder="Category Description"
                            :class="{ active: nameActive }"
                            @click="nameActive = true"
                            @blur="nameActive = false"
                            @input="$v.description.$touch"
                             /></textarea>
                            <div v-if="$v.description.$error" class="validation-error">
                                <p class="error" v-if="!$v.description.required">Please Add Category Description </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div slot="footer">
                    <button @click.prevent="submitNewCategory()" class="btn sub">Submit</button>
                </div>
            </modal>
        </div>
    </div>
</template>

<script>
    
    import { required, minLength } from 'vuelidate/lib/validators'
    import CubeSpinner  from '../layouts/loading.vue'
    import _ from 'lodash'


    export default {
        components: { 
            CubeSpinner
        },

        data() {
            return {
                categories: '',
                nameActive: false,
                name: '',
                description: '',
                imageSrc:'',
                finalImage: '',
                isModalVisible: false,
                isEditModalVisible: false,
                modalDelete: '',
                tempCat: '',
                serverErrors: [],
                isLoading: false,
            }
        },

        computed: {
            
        },

        methods: {

            //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
            async submitNewCategory() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                this.isLoading = true;
                let data = new FormData();
                data.append('imagePath', this.finalImage);
                data.append('name', this.name);
                data.append('description', this.description);

                console.log(data);

                axios.post('/categories', data)
                .then(response => { 
                    console.log(response.data);
                    this.isModalVisible = false;
                    this.name = '';
                    this.description = '';
                    this.imageSrc = '';
                    this.finalImage = '';
                    this.isLoading = false;
                    this.loadCategories();
                })
                .catch(error => {
                    this.serverErrors = error.response.data.errors; 
                    this.isLoading = false;
                    this.isModalVisible = true;
                });
            },

            deleteCategory(category) {
                axios.delete(`/categories/${category.slug}`)
                .then(response => { 
                    this.isEditModalVisible = false;
                    this.loadCategories();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            clearInfo() {
                this.$v.name.$touch;
                this.serverErrors = [];
            },

            loadCategories() {
                axios.get('/categories')
                .then(response => { 
                   this.categories = response.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            onImageUpload(image) {
                this.finalImage = image.file;
                this.finalImage.width = image.width;
                this.finalImage.height = image.height;
                this.$v.finalImage.$touch();
                if (this.$v.finalImage.$invalid) { return false };
                this.imageSrc = image.src;
            },

            onImageEdit(image) {
                if (image.file.size > 20971520) { return alert('Image Filesize Too Big') };
                if (!["image/jpeg","image/png",'image/gif'].includes(image.file.type)) { return alert('Image needs to be jpeg, pgn or gif') };
                if (image.width < 800 || image.height < 800) { return alert('Image Proportions Too Small') };

                this.isLoading = true;
                let data = new FormData();
                data.append('imagePath', image.file);
                data.append('_method', 'PATCH');
                axios.post(`/categories/${this.tempCat.slug}`, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
                )
                .then(response => { 
                   window.location.href = `/categories/create`;
                   console.log(response.data);
                })
                .catch(error => { 
                    console.log(error.response.data.errors);
                });
            },

            showModal(category) {
                this.modalDelete = category;
                this.isEditModalVisible = true;
            },

            saveName(category) {
                let data = {
                    name: category.name
                };
                axios.patch(`/categories/${category.slug}`, data)
                .then(response => { 
                    console.log(response.data)
                    this.loadCategories()
                })
                .catch(error => { 
                    console.log(error.response.data.errors);
                    this.serverErrors = error.response.data.errors; 
                });
            },

            saveRank(category) {
                let data = {
                    rank: category.rank
                };
                axios.patch(`/categories/${category.slug}`, data)
                .then(response => { 
                    console.log(response.data)
                    this.loadCategories()
                })
                .catch(error => { 
                    console.log(error.response.data.errors);
                    this.serverErrors = error.response.data.errors; 
                });
            },

            hasServerError(field) {
                return (field && _.has(this, 'serverErrors.' + field) && !_.isEmpty(this.serverErrors[field]));
            },

            saveDescription(category) {
                let data = {
                    description: category.description
                };
                axios.patch(`/categories/${category.slug}`, data)
                .then(response => { 
                   console.log(response.data)
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            saveCredit(category) {
                let data = {
                    credit: category.credit
                };
                axios.patch(`/categories/${category.slug}`, data)
                .then(res => { 
                   console.log(res.data)
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },
        },

        created() {
            this.loadCategories()
        },

        validations: {
            name: {
                required,
                serverFailed : function(){ return !this.hasServerError('name'); },
            },
            description: {
                required,
            },
            finalImage: {
                required,
                fileSize() { 
                    return this.finalImage ? this.finalImage.size < 20971520 : true 
                },
                fileType() {
                    return this.finalImage ? ['image/jpeg','image/png','image/gif'].includes(this.finalImage.type) : true
                },
                imageRatio() {
                    return this.finalImage ? this.finalImage.width > 800 && this.finalImage.height > 800 : true 
                }
            }
        },
    }

</script>