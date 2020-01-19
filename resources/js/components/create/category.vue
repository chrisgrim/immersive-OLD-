<template>
	<div class="category">
        <div class="ctitle">
            <h2>Category</h2>
        </div>
		 <div class="section">
            <div class="text">
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
                :class="{ active: activeItem == 'category','error': $v.selectedCategory.$error}"
                @click="activeItem = 'category'"
                @blur="activeItem = null" 
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
                <div class="">
                    <button :disabled="dis" @click.prevent="submitCategory()" class="create"> Next </button>
                </div>
            </div>
            <div class="image">
                <img v-if="this.selectedCategory" :src="'/storage/' + selectedCategory.largeImagePath " :alt="selectedCategory.name">
                <div>
                    <h2 v-text="this.selectedCategory ? selectedCategory.name : ''"></h2>
                    <p v-text="this.selectedCategory ? selectedCategory.description : ''"></p>
                </div>
            </div>
        </div>
        <div class="inNav">
            <button :disabled="dis" class="create" @click.prevent="goBack()"> Back </button>
            <button :disabled="dis" class="create" @click.prevent="submitCategory()"> Next </button>
        </div>
    </div>
</template>

<script>
	import Multiselect from 'vue-multiselect'
	import _ from 'lodash'
	import { required } from 'vuelidate/lib/validators';

	export default {
		props: {
			event: { type:Object },
			categories: { type:Array }
		},

		components: { 
			Multiselect 
		},

		data() {
			return {
				defaultImage: '/storage/website-files/upload.png',
				selectedCategory: '',
				eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
				categoryOptions: this.categories,
				activeItem: null,
                dis: false,
			}
		},

		methods: {

			//checks for validation
			//submit to database
			async submitCategory() {
				this.$v.$touch(); 
				if (this.$v.$invalid) { return false };
				this.dis = true;
				axios.patch(`${this.eventUrl}/category`, this.selectedCategory)
				.then(response => { window.location.href = `${this.eventUrl}/shows` });
			},

            load() {
            axios.get(`${this.eventUrl}/category/fetch?timestamp=${new Date().getTime()}`)
                .then(response => {
                    this.selectedCategory = response.data;
                });
            },

            goBack() {
                window.location.href = `${this.eventUrl}/location`;
            },
        
		},

        created() {
            this.load();
        },

		validations: {
			selectedCategory: {
				required
			},
		},
    };
</script>