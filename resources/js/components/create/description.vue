<template>
	<div class="description">
        <div class="ctitle">
            <h2>Description</h2>
        </div>
        <div class="section">
            <div class="field">
                <div class="text">
                    <div class="field">
                        <label class="area"> Describe your event to our readers </label>
                        <textarea 
                        type="text" 
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
                    <div class="field"> 
                        <label>Event Genres</label>
                        <multiselect 
                        v-model="genreName"
                        tag-placeholder="Add this as new tag" 
                        placeholder="Search or add your own here" 
                        label="genre"
                        :close-on-select="false"
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
                    <div class="field">
                        <label>Event Website Url</label>
                        <input 
                        type="text" 
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
                    <div class="field">   
                        <label>Ticket Url</label>
                        <input 
                        type="text" 
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
                    <div class="">
                        <button :disabled="dis" @click.prevent="submitDescription()" class="create"> Next </button>
                    </div>
                </div>
            </div>
            <div class="genre">
               <div>
                   <h3 v-if="genreActive">Genre List</h3>
               </div>
            </div>
            <div class="inNav">
                <button :disabled="dis" class="create" @click.prevent="goBack()"> Back </button>
                <button :disabled="dis" class="create" @click.prevent="submitDescription()"> Next </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import { required, url } from 'vuelidate/lib/validators'

	export default {
        components: {
            Multiselect
        },

		props: {
			event: {type:Object},
		},

		data() {
			return {
                description: '',
                genreName: '',
                options: [],
                websiteUrl: '',
                ticketUrl: '',
                eventUrl:`/create-event/${this.event.slug}`,
                genreActive: false,
                descriptionActive: false,
                ticketActive: false,
                websiteActive: false,
                dis: false,
                genres: [],
			}
		},

		methods: {

            //submit the data to the database adding the genres then load the new page
			async submitDescription() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false; };
                this.dis = true;
				let data = {
                    'description': this.description,
                    'websiteUrl': this.websiteUrl,
                    'ticketUrl': this.ticketUrl,
           		};
                data.genre = this.genreName.map(a => a.genre);

				axios.patch(`${this.eventUrl}/description`, data)
                .then(response => { window.location.href = `${this.eventUrl}/advisories`; });
			},

            //Search list of Genres as user Types then add response to the options list
            asyncFind (query) {
                axios.get('/api/genre/search', { params: { keywords: query } })
                .then(response => {
                    response.data.length ? this.options = response.data : this.options = this.genres;
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
                this.genre.push(tag)
            },

            goBack() {
                window.location.href = `${this.eventUrl}/shows`;
            },

            // If there is data in Database it will load from the database
            getDatabase() {
                axios.get(`${this.eventUrl}/description/fetch?timestamp=${new Date().getTime()}`)
                .then(response => {
                    console.log(response.data);
                    this.description = response.data.event.description;
                    this.websiteUrl = response.data.event.websiteUrl;
                    this.ticketUrl = response.data.event.ticketUrl;
                    this.genreName = response.data.pivots;
                    this.options = response.data.genres;
                    this.genres = response.data.genres;
                });
            },

		},

        created() {
            this.getDatabase();
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