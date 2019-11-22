<template>
	<div>
		<div class="create-title">
	    	<h2> What type of Event are you hosting?</h2>
		    <p>Choose the category that best describes your event</p>
	    </div>
		 <div class="organization-form">
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
	                <img class="option__image" :src="props.option.imagePath ? `/storage/${props.option.imagePath}` : defaultImage"
	                alt="defaultImage">
	                <div class="option__desc">
	                    <span class="option__title">{{ props.option.name }}</span>
	                    <span class="option__small">{{ props.option.description }}</span>
	                </div>
	            </template>
	        </multiselect>
	        <input type="hidden" name="category" v-model="selectedCategory">

	        <div v-if="$v.selectedCategory.$error" class="validation-error">
				<p class="error" v-if="!$v.selectedCategory.required">Please select your events category</p>
			</div>
	    </div>
	    <img v-if="this.selectedCategory" class="option__image" :src="'/storage/' + selectedCategory.imagePath " alt="defaultImage">
	    <div>
	    	<h2 v-text="this.selectedCategory ? selectedCategory.name : ''"></h2>
	    </div>

	    <div class="">
	        <button @click.prevent="submitCategory()" class="create"> Next </button>
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
			}
		},

		validations: {
			selectedCategory: {
				required
			},
		},
    };
</script>