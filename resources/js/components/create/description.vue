<template>
	<div>
        <div>
            <h2> Event Description</h2>
        </div>
        <div>
            <p>What can your guests expect with the event?</p>
        </div>
        <div>
            <div class="create-field">

            	<label class="area"> Let your guests know what to expect with the event/performance </label>

                <textarea 
                type="text" 
                class="create-input area"  
                name="description" 
                v-model="description" 
                placeholder=" "
                :class="{ active: descriptionActive,'error': $v.description.$error }"
                @input="$v.description.$touch"
                @click="descriptionActive = true"
                @blur="descriptionActive = false" 
                rows="8"></textarea>

                <div v-if="$v.description.$error" class="validation-error">
                    <p class="error" v-if="!$v.description.required">Must provide a description</p>
                </div>
                

            </div>
            <div class="create-field">
                
                <label>Event Website</label>
                <input 
                type="text" 
                class="create-input" 
                v-model="websiteUrl"
                :class="{ active: websiteActive,'error': $v.websiteUrl.$error }"
                @click="websiteActive = true"
                @blur="websiteActive = false"
                @input="$v.websiteUrl.$touch"
                placeholder=" ">
                
                <div v-if="$v.websiteUrl.$error" class="validation-error">
                    <p class="error" v-if="!$v.websiteUrl.required">Must enter an Event Website </p>
                    <p class="error" v-if="!$v.websiteUrl.url">Must be a Url</p>
                </div>

            </div>

            <div class="create-field">
                
                <label>Ticket Url</label>
                <input 
                type="text" 
                class="create-input"  
                v-model="ticketUrl"
                :class="{ active: ticketActive,'error': $v.ticketUrl.$error }"
                @click="ticketActive = true"
                @blur="ticketActive = false"
                @input="$v.ticketUrl.$touch"
                placeholder=" "/>

                <div v-if="$v.ticketUrl.$error" class="validation-error">
                    <p class="error" v-if="!$v.ticketUrl.required">Enter a ticket Url, Can be the same as website </p>
                    <p class="error" v-if="!$v.ticketUrl.url"> Must be a Url </p>
                </div>

            </div>
            <div>
                Event Genre
                <multiselect 
                v-model="genreName"
                class="create-input"
                tag-placeholder="Add this as new tag" 
                placeholder="Search or add a tag" 
                label="genre" 
                track-by="id" 
                :options="options" 
                :multiple="true" 
                :taggable="true" 
                tag-position="bottom"
                :class="{ active: genreActive,'error': $v.genreName.$error }"
                @tag="addTag"
                @input="$v.genreName.$touch"
                @click="genreActive = true"
                @blur="genreActive = false" 
                ></multiselect>
                
                <div v-if="$v.genreName.$error" class="validation-error">
                    <p class="error" v-if="!$v.genreName.required">Must select at least one Genre</p>
                </div>

            </div>
            <div class="">
                <button @click.prevent="submitDescription()" class="create"> Save and Continue </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import _ from 'lodash'
    import { required, url } from 'vuelidate/lib/validators'

	export default {
        components: {
            Multiselect
        },

		props: {
			event: {type:Object},
            genres: {type:Array},
            pivots: {type:Array}
		},

		data() {
			return {
                description: _.has(this.event, 'description') ? this.event.description : '',
                genreName: this.pivots,
                options: this.genres,
                eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
                genreActive: false,
                descriptionActive: false,
                ticketActive: false,
                websiteActive: false,
                websiteUrl: '',
                ticketUrl: '',
			}
		},

		methods: {
			async submitDescription() {

                this.$v.$touch(); 
                if (this.$v.$invalid) { return false; };
                
				let data = {
                    'description': this.description,
                    'websiteUrl': this.websiteUrl,
                    'ticketUrl': this.ticketUrl
           		};
                
                data.genre = this.genreName.map(a => a.genre);

				axios.patch(`${this.eventUrl}/description`, data)
                .then(response => {
                    // all is well. move on to the next page
                })
                .catch(errorResponse => {
                    // show if there are server side validation errors
                });
			},

            addTag (newTag) {
                const tag = {
                    genre: newTag,
                    id: newTag.substring(0, 0) + Math.floor((Math.random() * 10000000))
                }
                this.options.push(tag)
                this.genreName.push(tag)
            },

		},

        validations: {
            genreName: {
                required
            },
            description: {
                required
            },
            websiteUrl: {
               required,
               url,
            },
            ticketUrl: {
               required,
               url
            },
        },
    };



</script>