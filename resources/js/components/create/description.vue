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
                        :class="{ active: activeItem == 'description','error': $v.description.$error }"
                        @input="$v.description.$touch"
                        @click="activeItem = 'description'"
                        @blur="activeItem = null" 
                        rows="8"></textarea>
                        <div v-if="$v.description.$error" class="validation-error">
                            <p class="error" v-if="!$v.description.required">Must provide a description</p>
                        </div>
                    </div>
                    <div class="field"> 
                        <label>Event genres</label>
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
                        :class="{ active: activeItem == 'genre','error': $v.genreName.$error }"
                        @tag="addTag"
                        @input="$v.genreName.$touch"
                        @click="activeItem = 'genre'"
                        @blur="activeItem = null"
                        ></multiselect>
                        <div v-if="$v.genreName.$error" class="validation-error">
                            <p class="error" v-if="!$v.genreName.required">Must select at least one Genre</p>
                        </div>
                    </div>
                    <div class="field">
                        <label>Event website</label>
                        <input 
                        type="text" 
                        v-model="websiteUrl"
                        :class="{ active: activeItem == 'website','error': $v.websiteUrl.$error }"
                        @click="activeItem = 'website'"
                        @blur="activeItem = null"
                        @input="$v.websiteUrl.$touch"
                        placeholder="Leave blank if using Organizer Website Url"
                        />
                        <div v-if="$v.websiteUrl.$error" class="validation-error">
                            <p class="error" v-if="!$v.websiteUrl.url">Must be a url (https://...)</p>
                        </div>
                    </div>
                    <div class="field">   
                        <label>Ticket website</label>
                        <input 
                        type="text" 
                        v-model="ticketUrl"
                        :class="{ active: activeItem == 'ticket','error': $v.ticketUrl.$error }"
                        @click="activeItem = 'ticket'"
                        @blur="activeItem = null"
                        @input="$v.ticketUrl.$touch"
                        placeholder="Leave blank if using Organizer Website Url"
                        />
                        <div v-if="$v.ticketUrl.$error" class="validation-error">
                            <p class="error" v-if="!$v.ticketUrl.url"> Must be a url (https://...)</p>
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
                dis: false,
                genres: [],
                activeItem: null,
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

            // adds new tags in the multi select
            addTag (newTag) {
                const tag = {
                    genre: newTag,
                    id: newTag.substring(0, 0) + Math.floor((Math.random() * 10000000))
                }
                this.options.push(tag)
                this.genreName.push(tag)
            },

            goBack() {
                window.location.href = `${this.eventUrl}/shows`;
            },

            // If there is data in Database it will load from the database
            load() {
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
            this.load();
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