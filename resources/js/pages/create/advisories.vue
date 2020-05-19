<template>
	<div class="event-create__advisories container grid">
        <section class="event-create">
            <div class="title">
                <h2>Content Advisories</h2>
            </div>
            <div class="field">
                <label class="area">Include warnings and advisories</label>
                <multiselect 
                v-model="contentAdvisories" 
                :show-labels="false"
                :options="contentAdvisoryOptions"
                :class="{ active: active == 'content','error': $v.contentAdvisories.$error }"
                :multiple="true" 
                tag-placeholder="Add this as new tag"
                :taggable="true" 
                tag-position="bottom"
                placeholder="Type here to create your own" 
                open-direction="bottom"
                @tag="addContentTag"
                @click="active = 'content'"
                @blur="active = null"
                label="advisories"
                track-by="id">
                </multiselect>
                <div v-if="$v.contentAdvisories.$error" class="validation-error">
                    <p class="error" v-if="!$v.contentAdvisories.required">Must enter a mobility advisory </p>
                </div>
            </div>
            <div class="field">
                <label>Age restriction</label>
                <multiselect 
                v-model="advisories.ageRestriction" 
                :options="ageOptions"
                :show-labels="false"
                placeholder="Select the appropriate age group"
                open-direction="bottom"
                :class="{ active: active == 'age','error': $v.advisories.ageRestriction.$error }"
                @click="active = 'age'"
                @blur="active = null"
                @input="$v.advisories.ageRestriction.$touch"
                :preselect-first="false">
                </multiselect>
                <div v-if="$v.advisories.ageRestriction.$error" class="validation-error">
                    <p class="error" v-if="!$v.advisories.ageRestriction.required">Required</p>
                </div>
            </div>
        </section>
        <section class="event-create">
            <div class="title">
                <h2>Contact Advisories</h2>
            </div>
            <div class="field">
                <label class="area">Select physical interaction level with guests</label>
                <multiselect 
                v-model="contactAdvisories" 
                :options="contactAdvisoryOptions" 
                :multiple="true" 
                placeholder="Choose all that apply"
                open-direction="bottom"
                :show-labels="false"
                :class="{ active: active == 'contact','error': $v.contactAdvisories.$error }"
                @click="active = 'contact'"
                @blur="active = null"
                @input="$v.contactAdvisories.$touch"
                label="level" 
                track-by="id" 
                :preselect-first="false">
                </multiselect>
                <div v-if="$v.contactAdvisories.$error" class="validation-error">
                    <p class="error" v-if="!$v.contactAdvisories.required">Must choose at least one contact level </p>
                </div>
            </div>
            <div class="field" v-if="contactAdvisories.length">
                <label class="area"> Audience Role </label>
                <textarea 
                v-model="advisories.contactAdvisories" 
                class="create-input area" 
                rows="8" 
                placeholder=" "
                :class="{ active: active == 'conAdv','error': $v.advisories.contactAdvisories.$error }"
                @click="active = 'conAdv'"
                @blur="active = null"
                @input="$v.advisories.contactAdvisories.$touch"
                required 
                autofocus></textarea>
                <div v-if="$v.advisories.contactAdvisories.$error" class="validation-error">
                    <p class="error" v-if="!$v.advisories.contactAdvisories.required">Must enter the audience's role </p>
                </div>
            </div>
            <div class="field" v-if="contactAdvisories.length">
                <label> Is there sexual violence? </label>
                <div id="cover">
                    <input v-model="advisories.sexualViolence" type="checkbox" id="checkbox">
                    <div id="bar"></div>
                    <div id="knob">
                        <p v-if="advisories.sexualViolence">Yes</p>
                        <p v-else="advisories.sexualViolence">No</p>
                    </div>
                </div>
                <div v-if="$v.advisories.sexualViolence.$error" class="validation-error">
                    <p class="error" v-if="!$v.advisories.sexualViolence.required">Must select if there is sexual violence</p>
                </div>
            </div>
            <div v-if="advisories.sexualViolence">
                <div class="field">
                    <label class="area"> Explain more about the sexual violence </label>
                    <textarea 
                    v-model="advisories.sexualViolenceDescription" 
                    class="create-input area" 
                    rows="8"
                    :class="{ active: active == 'sexual'}"
                    placeholder=" "
                    @click="active = 'sexual'"
                    @blur="active = null"
                    required 
                    autofocus></textarea>
                </div>
            </div>
        </section>
        <section class="event-create">
            <div class="title">
                <h2>Mobility Advisories</h2>
            </div>
            <div class="field">
                <label> Is the Event Wheel Chair Accessible? </label>
                <div id="cover">
                    <input v-model="advisories.wheelchairReady" type="checkbox" id="checkbox">
                    <div id="bar"></div>
                    <div id="knob">
                        <p v-if="advisories.wheelchairReady">Yes</p>
                        <p v-else="advisories.wheelchairReady">No</p>
                    </div>
                </div>
                <div v-if="$v.advisories.wheelchairReady.$error" class="validation-error">
                    <p class="error" v-if="!$v.advisories.wheelchairReady.required">Must select if the event is wheelchair accessible </p>
                </div>
            </div>
            <div class="field">
                <label class="area">Select any mobility restrictions</label>
                <multiselect 
                v-model="mobilityAdvisories" 
                :options="mobilityAdvisoryOptions" 
                :multiple="true" 
                :show-labels="false"
                tag-placeholder="Add this as new tag"
                :taggable="true" 
                tag-position="bottom"
                placeholder="Type here to create your own" 
                open-direction="bottom"
                :class="{ active: active == 'mobility','error': $v.mobilityAdvisories.$error }"
                @tag="addMobilityTag"
                @click="active = 'mobility'"
                @blur="active = null"
                @input="$v.mobilityAdvisories.$touch"
                label="mobilities"
                track-by="id">
                </multiselect>
                <div v-if="$v.mobilityAdvisories.$error" class="validation-error">
                    <p class="error" v-if="!$v.mobilityAdvisories.required">Must enter a mobility advisory </p>
                </div>
            </div>
            <div class="event-create__submit-button">
                <button :disabled="disabled" @click.prevent="onSubmit()" class="create"> Next </button>
            </div>
        </section>

        <div class="create-button__in-nav">
            <button :disabled="disabled" class="create" @click.prevent="onBack('description')"> Back </button>
            <button :disabled="disabled" class="create" @click.prevent="onSubmit()"> Next </button>
        </div>
    </div>
</template>

<script>
    import formValidationMixin from '../../mixins/form-validation-mixin'
    import Multiselect from 'vue-multiselect'
    import _ from 'lodash';
    import { required, numeric } from 'vuelidate/lib/validators'

	export default {

        mixins: [formValidationMixin],

        components: { Multiselect },

		props: ['event', 'loadcontact', 'loadcontent', 'loadmobility'],

        computed: {
            endpoint() {
                return `/create-event/${this.event.slug}/advisories`
            },

            submitObject() {
                return {
                    advisories: this.advisories,
                    contactAdvisory :   this.contactAdvisories.map(a => a.id),
                    contentAdvisory : this.contentAdvisories.map(a => a.advisories),
                    mobilityAdvisory : this.mobilityAdvisories.map(a => a.mobilities),
                }
            }
        },

		data() {
			return {
				advisories: this.initializeAdvisoriesObject(),
				contactAdvisoryOptions: this.loadcontact ? this.loadcontact : [],
				contentAdvisoryOptions: this.loadcontent ? this.loadcontent : [],
                mobilityAdvisoryOptions: this.loadmobility ? this.loadmobility : [],
				contactAdvisories: this.event.contact_levels ? this.event.contact_levels : '',
				contentAdvisories: this.event.content_advisories ? this.event.content_advisories : '',
                mobilityAdvisories: this.event.mobility_advisories ? this.event.mobility_advisories : '',
                active: null,
                ageOptions: ['All Ages', '12+', '16+', '18+', '21+'],
                disabled: false,
                serverErrors: [],
			}
		},

		methods: {
			initializeAdvisoriesObject() {
				return {
					contactAdvisories: this.event.advisories ? this.event.advisories.contactAdvisories : '',
					sexualViolence: this.event.advisories.sexualViolence ? this.event.advisories.sexualViolence : false,
					sexualViolenceDescription: this.event.advisories ? this.event.advisories.sexualViolenceDescription : '',
					wheelchairReady: this.event.advisories.wheelchairReady ? this.event.advisories.wheelchairReady : false,
					ageRestriction: this.event.advisories ? this.event.advisories.ageRestriction : '',
				}
			},

	        addContentTag (newTag) {
                const tag = {
                    advisories: newTag,
                    id: newTag.substring(0, 0) + Math.floor((Math.random() * 10000000))
                }
                this.contentAdvisoryOptions.push(tag)
                this.contentAdvisories.push(tag)
            },

            addMobilityTag (newTag) {
                const tag = {
                    mobilities: newTag,
                    id: newTag.substring(0, 0) + Math.floor((Math.random() * 10000000))
                }
                this.mobilityAdvisoryOptions.push(tag)
                this.mobilityAdvisories.push(tag)
            },

			onSubmit() {
				if (this.checkVuelidate()) { return false };
				axios.patch(this.endpoint, this.submitObject)
				.then(res => { 
                    console.log(res.data);
                    this.onForward('images');
                })
				.catch(err => {
                    this.onErrors(err);
                });
			},

            updateAdvisoryFields(input) {
                if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
                    this.advisories = _.pick(input, _.intersection( _.keys(this.advisories), _.keys(input) ));
                }
                this.advisories.wheelchairReady ? '' : this.advisories.wheelchairReady = false;
                this.advisories.sexualViolence ? '' : this.advisories.sexualViolence = false;
            },

            onLoad() {
                axios.get(this.onFetch('advisories'))
                .then(res => {
                    this.updateAdvisoryFields(res.data.advisories);
                    res.data.contactPivots ? this.contactAdvisories = res.data.contactPivots : '';
                    res.data.contentPivots ? this.contentAdvisories = res.data.contentPivots : '';
                    res.data.mobilityPivots ? this.mobilityAdvisories = res.data.mobilityPivots : '';
                });
            },
		},

        created() {
            this.onLoad();
        },


        validations: {
        	contactAdvisories: {
        		required
        	},
            mobilityAdvisories: {
                required
            },
            contentAdvisories: {
                required
            },
			advisories: {
			   	contactAdvisories: {
			       required,
			   	},
			   	ageRestriction: {
			       required,
			   	},
                wheelchairReady: {
                    required,
                },
                sexualViolence: {
                    required,
                },
			},	
		},
    };

</script>