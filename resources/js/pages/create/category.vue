<template>
	<div class="event-create__category grid">
        <section class="event-enter-category">
            <div class="title">
                <h2>Immersive Categories</h2>
            </div>
            <div class="field">
                <multiselect 
                v-show="categories.length > 0" 
                v-model="selectedCategory" 
                placeholder="Select Category"
                label="name" 
                track-by="name" 
                deselectLabel=''
                :allow-empty="false"  
                :options="categoryOptions" 
                open-direction="bottom"
                @input="$v.selectedCategory.$touch"
                :class="{ active: active == 'category','error': $v.selectedCategory.$error}"
                @click="active = 'category'"
                @blur="active = null" 
                >
                    <template slot="option" slot-scope="props">
                        <div class="option__desc">
                            <span class="option__title">{{ props.option.name }}</span>
                        </div>
                    </template>
                </multiselect>
                <input type="hidden" name="category" v-model="selectedCategory">
                <div v-if="$v.selectedCategory.$error" class="validation-error">
                    <p class="error" v-if="!$v.selectedCategory.required">Please select your event's category</p>
                </div>

                <div>
                    <p v-text="this.selectedCategory ? selectedCategory.description : ''"></p>
                </div>
            </div>
        </section>

        <section v-if="selectedCategory"  class="event-show-category__image" :style="pageHeight">
            <picture>       
                <source type="image/webp" :srcset="`/storage/${selectedCategory.largeImagePath}`"> 
                <img :src="`/storage/${selectedCategory.largeImagePath.slice(0, -4)}jpg}`">
            </picture>
        </section>
       
        <div class="event-create__submit-button">
            <button :disabled="disabled" @click.prevent="onBackInitial()" class="nav-back-button"> Your events </button>
        </div>
        <div class="create-button__back">
            <button :disabled="disabled" class="create" @click.prevent="onBack('location')"> Back </button>
        </div>
        <div class="create-button__forward">
            <button :disabled="disabled" class="create" @click.prevent="onSubmit('shows')"> Save and Continue </button>
        </div>
    </div>
</template>

<script>
    import formValidationMixin from '../../mixins/form-validation-mixin'
	import Multiselect from 'vue-multiselect'
	import { required } from 'vuelidate/lib/validators';

	export default {

        props: ['event', 'categories'],

        mixins: [formValidationMixin],

		components: { Multiselect },

        computed: {
            endpoint() {
                return `/create-event/${this.event.slug}/category`
            },

            navSubmit() {
                return this.$store.state.save
            },
        },

		data() {
			return {
				selectedCategory: '',
				categoryOptions: this.categories,
				active: null,
                pageHeight: 0,
                disabled: false,
                serverErrors: '',
			}
		},


		methods: {
			onSubmit(value) {
                if (!this.$v.$anyDirty && this.event.status != 2) {return this.onForward(value)};
                if (this.checkVuelidate()) { return false };
				axios.patch(this.endpoint, this.selectedCategory)
				.then(res => {  
                    value == 'exit' ? this.onBackInitial() : this.onForward(value);
                })
                .catch(err => {
                    this.onErrors(err);
                });
			},


            handleResize() {
                this.pageHeight = `height:calc(${window.innerHeight}px - 7rem)`;
            },

            onLoad() {
                axios.get(this.onFetch('category'))
                .then(res => {
                    this.selectedCategory = res.data;
                });
            },

            selectCategoryType() {

                if (this.event.hasLocation) {
                    return this.categoryOptions = this.categories.filter(category => category.remote == 0);
                } else {
                    return this.categoryOptions = this.categories.filter(category => category.remote == 1);
                }
            }
		},

        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
            this.onLoad();
            this.selectCategoryType();
        },

        watch: {
            navSubmit() {
                if (this.event.status < 3 && !this.$v.$anyDirty) {
                    this.onBack(this.navSubmit);
                } else {
                    this.onSubmit(this.navSubmit);
                }
            }
        },

        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },

		validations: {
			selectedCategory: {
				required
			},
		},
    };
</script>