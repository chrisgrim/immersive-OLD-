<template>
	<div class="event-create__category container grid">
        <section class="event-enter-category">
            <div class="title">
                <h2>Immersive Categories</h2>
            </div>
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
            <div class="event-create__submit-button">
                <button :disabled="disabled" @click.prevent="onSubmit()" class="create"> Next </button>
            </div>
        </section>

        <section v-if="selectedCategory"  class="event-show-category__image" :style="pageHeight">
            <picture>       
                <source type="image/webp" :srcset="`/storage/${selectedCategory.largeImagePath}`"> 
                <img :src="`/storage/${selectedCategory.largeImagePath.slice(0, -4)}jpg}`">
            </picture>
        </section>
       

        <div class="create-button__in-nav">
            <button :disabled="disabled" class="create" @click.prevent="onBack('location')"> Back </button>
            <button :disabled="disabled" class="create" @click.prevent="onSubmit()"> Next </button>
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
			onSubmit() {
                if (this.checkVuelidate()) { return false };
				axios.patch(this.endpoint, this.selectedCategory)
				.then(res => {  
                    // console.log(res.data);    
                    this.onForward('shows');
                })
                .catch(err => {
                    this.onErrors(err);
                });
			},

            handleResize() {
                this.pageHeight = `height:calc(${window.innerHeight}px - 8rem)`;
            },

            onLoad() {
                axios.get(this.onFetch('category'))
                .then(res => {
                    this.selectedCategory = res.data;
                });
            },
		},

        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
            this.onLoad();
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