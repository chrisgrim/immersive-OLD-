<template>
	<div class="event-create__description container grid">
        <section class="event-create">
            <div class="title">
                <h2>Description</h2>
            </div>
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
                placeholder="Type here to create your own" 
                label="genre"
                :close-on-select="true"
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
                @click="toggleWebsite()"
                @blur="activeItem = null"
                @input="$v.websiteUrl.$touch"
                placeholder="Leave blank if using Organizer Website Url"
                />
                <div v-if="$v.websiteUrl.$error" class="validation-error">
                    <p class="error" v-if="!$v.websiteUrl.url">Must be a url (https://...)</p>
                    <p class="error" v-if="!$v.websiteUrl.webNotWorking">One of your urls isn't working</p>
                </div>
            </div>
            <div class="field">   
                <label>Ticket website</label>
                <input 
                type="text" 
                v-model="ticketUrl"
                :class="{ active: activeItem == 'ticket','error': $v.ticketUrl.$error }"
                @click="toggleTicket()"
                @blur="activeItem = null"
                @input="$v.ticketUrl.$touch"
                placeholder="Leave blank if using Organizer Website Url"
                />
                <div v-if="$v.ticketUrl.$error" class="validation-error">
                    <p class="error" v-if="!$v.ticketUrl.url"> Must be a url (https://...)</p>
                    <p class="error" v-if="!$v.ticketUrl.ticketNotWorking">One of your urls isn't working</p>
                </div>
            </div>
            <div class="event-create__submit-button">
                <button :disabled="dis" @click.prevent="submitDescription()" class="create"> Next </button>
            </div>
        </section>

        <section></section>

        <div class="create-button__in-nav">
                    <button :disabled="dis" class="create" @click.prevent="goBack()"> Back </button>
                    <button :disabled="dis" class="create" @click.prevent="submitDescription()"> Next </button>
                </div>
        
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import { required, url } from 'vuelidate/lib/validators'
    import _ from 'lodash'

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
                serverErrors: [],
                activeItem: null,
			}
		},

		methods: {

            //submit the data to the database adding the genres then load the new page
			submitDescription() {
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
                .then(response => { 
                    console.log(response.data);
                    window.location.href = `${this.eventUrl}/advisories`; 
                })
                .catch(errors => {
                    errors.response.data.message.length ? this.serverErrors = {broken: 'Url is broken'} : '';
                    errors.response.data.errors ? this.serverErrors = errors.response.data.errors : '';
                    this.dis = false;
                });
			},

             // makes the organizer website field class active and clears any vuelidate server errors 
            toggleWebsite() {
                this.activeItem = 'website';
                this.serverErrors = [];
            },

            toggleTicket() {
                this.activeItem = 'ticket';
                this.serverErrors = [];
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

            hasServerError(field) {
                return (field && _.has(this, 'serverErrors.' + field) && !_.isEmpty(this.serverErrors[field]));
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
               webNotWorking(){ return this.websiteUrl ? !this.hasServerError('broken') : true },
            },
            ticketUrl: {
               url,
               ticketNotWorking(){ return this.ticketUrl ? !this.hasServerError('broken') : true },
            },
        },
    };



</script>