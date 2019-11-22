<template>
	<div>
        <div class="create-title">
            <h2>Event Description</h2>
            <p>This is your main event description.</p>
        </div>
        <div>
            <div class="create-field">
            	<label class="area"> Let your guests know what to expect with the event/performance </label>
                <textarea 
                type="text" 
                class="create-input area"  
                name="description" 
                v-model="description" 
                placeholder="eg. Our super scary event will bring your fears to the surface..."
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
                <label>Event Website Url</label>
                <input 
                type="text" 
                class="create-input" 
                v-model="websiteUrl"
                :class="{ active: websiteActive,'error': $v.websiteUrl.$error }"
                @click="websiteActive = true"
                @blur="websiteActive = false"
                @input="$v.websiteUrl.$touch"
                placeholder="Leave blank if using Organizer Website Url"
                />
                <div v-if="$v.websiteUrl.$error" class="validation-error">
                    <p class="error" v-if="!$v.websiteUrl.url">Must be a Url (https://...)</p>
                </div>
            </div>
            <div class="create-field">   
                <label>Ticket Url (If different from Organizer Website)</label>
                <input 
                type="text" 
                class="create-input"  
                v-model="ticketUrl"
                :class="{ active: ticketActive,'error': $v.ticketUrl.$error }"
                @click="ticketActive = true"
                @blur="ticketActive = false"
                @input="$v.ticketUrl.$touch"
                placeholder="Leave blank if using Organizer Website Url"
                />
                <div v-if="$v.ticketUrl.$error" class="validation-error">
                    <p class="error" v-if="!$v.ticketUrl.url"> Must be a Url (https://...)</p>
                </div>
            </div>
            <div class="create-field"> 
                <label>Event Genre</label>
                <p>Select from our top genres or add your own.</p>
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
                @search-change="asyncFind"
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
                websiteUrl: _.has(this.event, 'websiteUrl') ? this.event.websiteUrl : '',
                ticketUrl: _.has(this.event, 'ticketUrl') ? this.event.ticketUrl : '',
                genreActive: false,
                descriptionActive: false,
                ticketActive: false,
                websiteActive: false,
			}
		},

		methods: {

            //submit the data to the database adding the genres then load the new page
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
                .then(response => { window.location.href = `${this.eventUrl}/expect`; });
			},

            //Search list of Genres as user Types then add response to the options list
            asyncFind (query) {
                axios.get('/api/genre/search', { params: { keywords: query } })
                .then(response => {
                    console.log(response.data);
                    response.data.length ? this.options = response.data : '';
                    // this.options = response.data;
                });
            },

            // adds new tags in the multi select
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
               url,
            },
            ticketUrl: {
               url
            },
        },
    };



</script>