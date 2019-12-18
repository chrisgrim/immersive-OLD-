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
            <div class="box" :style="{ backgroundImage: `url('/${category.thumbImagePath}')` }">
                <label>
                     <image-upload @loaded="onImageUpload"></image-upload>
                </label> 
            </div>
            <button @click.prevent="showModal(category)" class="delete-circle"><p>X</p></button>
        </div>
        <modal v-show="isEditModalVisible" @close="isEditModalVisible = false">
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
            <modal v-show="isModalVisible" @close="isModalVisible = false">
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
                                </div>
                            </div>
                        </div>
                         <image-upload @loaded="onImageUpload"></image-upload>
                        <div v-if="$v.imageSrc.$error" class="validation-error">
                            <p class="error" v-if="!$v.imageSrc.required">Please Add Image </p>
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
                            @input="$v.name.$touch"
                            />
                            <div v-if="$v.name.$error" class="validation-error">
                                <p class="error" v-if="!$v.name.required">Please Add Category Name </p>
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
    
    import { required, minLength } from 'vuelidate/lib/validators';


    export default {

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

            }
        },

        computed: {
            
        },

        methods: {

            //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
            async submitNewCategory() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                let data = new FormData();
                data.append('imagePath', this.finalImage);
                data.append('name', this.name);
                data.append('description', this.description);

                axios.post('/categories', data)
                .then(response => { 
                    console.log(response.data);
                    this.isModalVisible = false;
                    this.name = '';
                    this.description = '';
                    this.imageSrc = '',
                    this.finalImage = '',
                    this.loadCategories();
                })
                .catch(error => { 
                    this.isModalVisible = false;
                });
            },

            showModal(category) {
                this.modalDelete = category;
                this.isEditModalVisible = true;
            },

            deleteCategory(category) {
                axios.delete(`/categories/${category.slug}`)
                .then(response => { 
                    this.isEditModalVisible = false;
                    this.loadCategories();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            onImageUpload(image) {
                image.width < 1280 || image.height < 720 ? this.tooSmall = true : this.assignImage(image);
            },

            assignImage(image) {
                console.log(image);
                this.imageSrc = image.src;
                this.finalImage = image.file;
            },

            loadCategories() {
                axios.get('/categories')
                .then(response => { 
                   this.categories = response.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
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
                    this.serverErrors = error.response.data.errors; 
                });
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
        },

        created() {
            this.loadCategories()
        },

        validations: {
            name: {
                required,
            },
            description: {
                required,
            },
            imageSrc: {
                required,
            }
        },
    }

</script>