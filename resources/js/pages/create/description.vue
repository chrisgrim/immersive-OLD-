<template>
	<div class="event-create__description grid">
        <section class="event-create">
            <div class="title">
                <h2>Description</h2>
            </div>
            <div class="field">
                <label class="area"> Describe your event to our readers <span v-if="event.hasLocation">(include covid 19 information)</span> </label>
                <textarea 
                type="text"
                name="description" 
                v-model="group.description" 
                placeholder="eg. Our super scary event will bring your fears to the surface..."
                :class="{ active: active == 'description','error': $v.group.description.$error }"
                @input="$v.group.description.$touch"
                @click="active = 'description'"
                @blur="active = null" 
                rows="14"></textarea>
                <div v-if="$v.group.description.$error" class="validation-error">
                    <p class="error" v-if="!$v.group.description.required">Must provide a description</p>
                </div>
            </div>
            <div class="field">
                <label>Event Link (Optional)</label>
                <input 
                type="text" 
                v-model="group.websiteUrl"
                :class="{ active: active == 'website','error': $v.group.websiteUrl.$error }"
                @click="onToggle('website')"
                @blur="active = null"
                @input="$v.group.websiteUrl.$touch"
                placeholder="Link to a page that has more information about your event"
                />
                <div v-if="$v.group.websiteUrl.$error" class="validation-error">
                    <p class="error" v-if="!$v.group.websiteUrl.url">Must be a url (https://...)</p>
                    <p class="error" v-if="!$v.group.websiteUrl.webNotWorking">One of your urls isn't working</p>
                </div>
            </div>
        </section>

        <section>
            <div class="tag-title">
                <h3>Event Tags</h3>
            </div>
            <div class="field">
                <label>Type in or select all show tags. We use these to help people find your event!</label>
                <multiselect 
                v-model="tagName"
                tag-placeholder="Add this as new tag" 
                placeholder="Type here to create your own" 
                label="name"
                :close-on-select="false"
                track-by="id" 
                :options="tagOptions" 
                :multiple="true" 
                :taggable="true" 
                tag-position="bottom"
                :class="{ active: active == 'genre','error': $v.tagName.$error }"
                @tag="addTag"
                @input="$v.tagName.$touch"
                @click="active = 'genre'"
                @blur="active = null"
                ></multiselect>
                <div v-if="$v.tagName.$error" class="validation-error">
                    <p class="error" v-if="!$v.tagName.required">Must select at least one Tag</p>
                    <p class="error" v-if="!$v.tagName.maxLength">No more than 10 tags</p>
                </div>
            </div>
        </section>
        
        <div class="event-create__submit-button">
            <button :disabled="disabled" @click.prevent="onBackInitial()" class="nav-back-button"> Your events </button>
        </div>
        <div class="create-button__back">
            <button :disabled="disabled" class="create" @click.prevent="onBack('tickets')"> Back </button>
        </div>
        <div class="create-button__forward">
            <button :disabled="disabled" class="create" @click.prevent="onSubmit('advisories')"> Save and continue </button>
        </div>
        
    </div>
</template>

<script>
    import formValidationMixin from '../../mixins/form-validation-mixin'
    import Multiselect from 'vue-multiselect'
    import { required, url, maxLength } from 'vuelidate/lib/validators'
    import _ from 'lodash'

	export default {
        components: { Multiselect },

        mixins: [formValidationMixin],

		props: ['event', 'loadtags'],

        computed: {
            endpoint() {
                return `/create-event/${this.event.slug}/description`
            },

            navSubmit() {
                return this.$store.state.save
            },
        },

		data() {
			return {
                group: this.initializeSubmitObject(),
                tagName: this.event.genres ? this.event.genres : '',
                tagOptions: this.loadtags,
                disabled: false,
                serverErrors: [],
                active: null,
			}
		},

		methods: {

            initializeSubmitObject() {
                return {
                    description: this.event.description ? this.event.description : '',
                    websiteUrl: this.event.websiteUrl ? this.event.websiteUrl : '',
                    genre: this.event.genres ? this.event.genres.map(a => a.name) : '',
                }
            },

			onSubmit(value) {
                if (!this.$v.$anyDirty && this.event.status != 5) {return this.onForward(value)};
                if (this.checkVuelidate()) { return false };
				axios.patch(this.endpoint, this.group)
                .then(res => { 
                    value == 'exit' ? this.onBackInitial() : this.onForward(value);
                })
                .catch(err => { this.onErrors(err) });
			},

            onToggle(arr) {
                this.active = arr;
                this.serverErrors = [];
            },

            addTag (newTag) {
                if (this.validateText(newTag)) { alert('No urls as tags') ;return false };
                const tag = {
                    name: newTag,
                    id: newTag.substring(0, 0) + Math.floor((Math.random() * 10000000))
                }
                this.tagOptions.push(tag);
                this.tagName.push(tag);
                this.$v.tagName.$touch();
            },

            validateText(str) {
                return str && str.startsWith("http") || str && str.startsWith("@") ? true : false
            },

            onLoad() {
                axios.get(this.onFetch('description'))
                .then(res => {
                    res.data.event ? this.group.description = res.data.event.description : '';
                    res.data.event ? this.group.websiteUrl = res.data.event.websiteUrl : '';
                    res.data.genres ? this.group.genre = res.data.genres.map(a => a.name) : '';
                });
            },

		},

        created() {
            this.onLoad();
        },

        watch: {
            tagName(){
                return this.group.genre = this.tagName.map(a => a.name);
            },

            navSubmit() {
                if (this.event.status < 6 && !this.$v.$anyDirty) {
                    this.onBack(this.navSubmit);
                } else {
                    this.onSubmit(this.navSubmit);
                }
            }
        },


        validations: {
            tagName: {
                required,
                maxLength: maxLength(10)
            },
            group : {
                description: {
                    required
                },
                websiteUrl: {
                   url,
                   webNotWorking(){ return this.websiteUrl ? !this.hasServerError('broken') : true },
                },
            }
        },
    };



</script>