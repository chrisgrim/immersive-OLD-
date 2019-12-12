<template>
	<div class="category">
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
                :class="{ active: categoryActive,'error': $v.selectedCategory.$error}"
                @click="categoryActive = true"
                @blur="categoryActive = false" 
                >
                    <template slot="option" slot-scope="props">
                        <div class="option__desc">
                            <span class="option__title">{{ props.option.name }}</span>
                        </div>
                    </template>
                </multiselect>
                <input type="hidden" name="category" v-model="selectedCategory">
                <div v-if="$v.selectedCategory.$error" class="validation-error">
                    <p class="error" v-if="!$v.selectedCategory.required">Please select your events category</p>
                </div>
                <div class="">
                    <button @click.prevent="submitCategory()" class="create"> Next </button>
                </div>
            </div>
            <div class="image">
                <img v-if="this.selectedCategory" :src="'/storage/' + selectedCategory.imagePath " :alt="selectedCategory.name">
                <div>
                    <h2 v-text="this.selectedCategory ? selectedCategory.name : ''"></h2>
                    <p v-text="this.selectedCategory ? selectedCategory.description : ''"></p>
                </div>
            </div>
        </div>
        <div class="inNav">
            <button class="create" @click.prevent="goBack()"> Back </button>
            <button class="create" @click.prevent="submitCategory()"> Next </button>
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
				selectedCategory: this.event.category,
				eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
				categoryOptions: this.categories,
				categoryActive: false,
			}
		},

		methods: {

			//checks for validation
			//submit to database
			async submitCategory() {
				this.$v.$touch(); 
				if (this.$v.$invalid) { return false };
				
				axios.patch(`${this.eventUrl}/category`, this.selectedCategory)
				.then(response => { window.location.href = `${this.eventUrl}/shows` });
			},

            goBack() {
                window.location.href = `${this.eventUrl}/location`;
            }
		},

		validations: {
			selectedCategory: {
				required
			},
		},
    };
</script>