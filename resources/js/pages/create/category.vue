<template>
    <div 
        :class="{ showcat: selectedCategory}" 
        class="event-create__category grid">
        <section 
            :class="{ showcat: selectedCategory}" 
            class="event-enter-category">
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
                    @blur="active = null">
                    <template 
                        slot="option" 
                        slot-scope="props">
                        <div class="option__desc">
                            <span class="option__title">{{ props.option.name }}</span>
                        </div>
                    </template>
                </multiselect>
                <input 
                    type="hidden" 
                    name="category" 
                    v-model="selectedCategory">
                <div 
                    v-if="$v.selectedCategory.$error" 
                    class="validation-error">
                    <p 
                        class="error" 
                        v-if="!$v.selectedCategory.required">
                        Please select your event's category
                    </p>
                </div>

                <div>
                    <p v-text="this.selectedCategory ? selectedCategory.description : ''" />
                </div>
            </div>
        </section>

        <section 
            :class="{ showcat: selectedCategory}" 
            v-if="selectedCategory" 
            class="event-show-category__image" 
            :style="pageHeight">
            <picture>       
                <source 
                    type="image/webp" 
                    :srcset="`/storage/${selectedCategory.largeImagePath}`"> 
                <img :src="`/storage/${selectedCategory.largeImagePath.slice(0, -4)}jpg`">
            </picture>
        </section>
        <Submit 
            @submit="onSubmit"
            :disabled="disabled" 
            previous="location"
            next="shows" 
            :event="event" />
        <transition name="slide-fade">
            <div 
                v-if="updated" 
                class="updated-notifcation">
                <p>Your event has been updated.</p>
            </div>
        </transition>
    </div>
</template>

<script>
    import Submit  from './components/submit-buttons.vue'
    import formValidationMixin from '../../mixins/form-validation-mixin'
	import Multiselect from 'vue-multiselect'
	import { required } from 'vuelidate/lib/validators';

	export default {

        props: ['event', 'categories'],

        mixins: [formValidationMixin],

		components: { Multiselect, Submit },

        computed: {
            endpoint() {
                return `/create/${this.event.slug}/category`
            },

            navSubmit() {
                return this.$store.state.navurl
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
                updated: false,
                approved: this.event.status == 'p' || this.event.status == 'e' ? true : false,
			}
		},


		methods: {
			onSubmit(value) {
                if (!this.$v.$anyDirty && this.event.status != 2) {return this.onForward(value)}
                if (this.checkVuelidate()) { return false }
				axios.patch(this.endpoint, this.selectedCategory)
				.then(res => {  
                    value == 'save' ? this.save() : this.onForward(value);
                })
                .catch(err => {this.onErrors(err);});
			},

            handleResize() {
                if (window.innerWidth > 1050) {
                    this.pageHeight = `height:calc(${window.innerHeight}px - 7rem)`;
                } else {
                    this.pageHeight = `height:calc(${window.innerHeight/2}px - 7rem)`;
                }
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

        watch: {
            navSubmit() {
                return !this.$v.$anyDirty ? this.onBack(this.navSubmit) : this.onSubmit(this.navSubmit);
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