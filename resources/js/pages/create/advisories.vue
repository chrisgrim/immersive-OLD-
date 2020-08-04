<template>
	<div class="event-create__advisories grid">
        <section class="event-create">
            <div class="title">
                <h2>Physical Contact Advisories</h2>
            </div>
            <input style="opacity:0;position:absolute;top:0;" autofocus />
            <div class="field">
                <label class="area">Select physical interaction level with guests</label>
                <multiselect 
                v-model="contactAdvisories" 
                :options="contactAdvisoryOptions" 
                :multiple="true" 
                placeholder="Choose all that apply"
                open-direction="bottom"
                :close-on-select="false"
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
        </section>
        <section class="event-create">
            <div class="title">
                <h2>Content Advisories</h2>
            </div>
            <div class="field">
                <label> Is there sexual content? </label>
                <multiselect 
                v-model="advisories.sexual" 
                :options="options"
                :show-labels="false"
                placeholder="Choose one"
                label="name"
                open-direction="bottom"
                :class="{ active: active == 'sexual','error': $v.advisories.sexual.$error }"
                @click="active = 'sexual'"
                @blur="active = null"
                @input="$v.advisories.sexual.$touch"
                :preselect-first="false">
                </multiselect>
                <div v-if="$v.advisories.sexual.$error" class="validation-error">
                    <p class="error" v-if="!$v.advisories.sexual.required">Required</p>
                </div>
            </div>
            <div v-if="advisories.sexual && advisories.sexual.type">
                <div class="field">
                    <label class="area"> Explain more about the sexual content </label>
                    <textarea 
                    v-model="advisories.sexualDescription" 
                    class="create-input area" 
                    rows="8"
                    :class="{ active: active == 'sexual','error': $v.advisories.sexualDescription.$error }"
                    placeholder=" "
                    @click="active = 'sexual'"
                    @input="$v.advisories.sexualDescription.$touch"
                    @blur="active = null"
                    required 
                    autofocus></textarea>
                    <div v-if="$v.advisories.sexualDescription.$error" class="validation-error">
                        <p class="error" v-if="!$v.advisories.sexualDescription.ifSexual">Please describe the sexual content </p>
                    </div>
                </div>
            </div>
            <div class="field">
                <label class="area">Include warnings and advisories</label>
                <multiselect 
                v-model="contentAdvisories" 
                :show-labels="false"
                :close-on-select="false"
                :options="contentAdvisoryOptions"
                :class="{ active: active == 'content','error': $v.contentAdvisories.$error }"
                :multiple="true" 
                tag-placeholder="Add this as new tag"
                :taggable="true" 
                tag-position="bottom"
                placeholder="Select from list or enter your own" 
                open-direction="bottom"
                @tag="addContentTag"
                @click="active = 'content'"
                @blur="active = null"
                @input="$v.contactAdvisories.$touch"
                label="advisories"
                track-by="id">
                </multiselect>
                <div v-if="$v.contentAdvisories.$error" class="validation-error">
                    <p class="error" v-if="!$v.contentAdvisories.required">Must enter a content advisory </p>
                </div>
            </div>
            <div class="field">
                <label>Age restriction</label>
                <multiselect 
                v-model="age" 
                :options="agelimit"
                :show-labels="false"
                placeholder="Select the appropriate age group"
                open-direction="bottom"
                track="id"
                label="name"
                :class="{ active: active == 'age','error': $v.age.$error }"
                @click="active = 'age'"
                @blur="active = null"
                @input="$v.age.$touch"
                :preselect-first="false">
                </multiselect>
                <div v-if="$v.age.$error" class="validation-error">
                    <p class="error" v-if="!$v.age.required">Required</p>
                </div>
            </div>
        </section>
        <section class="event-create">
            <div class="title">
                <h2>Mobility Advisories</h2>
            </div>
            <div class="field">
                <label> Is the Event Wheel Chair Accessible? </label>
                <multiselect 
                v-model="advisories.wheelchairReady" 
                :options="options"
                :show-labels="false"
                placeholder="Choose one"
                label="name"
                open-direction="bottom"
                :class="{ active: active == 'wheel','error': $v.advisories.wheelchairReady.$error }"
                @click="active = 'wheel'"
                @blur="active = null"
                @input="$v.advisories.wheelchairReady.$touch"
                :preselect-first="false">
                </multiselect>
                <div v-if="$v.advisories.wheelchairReady.$error" class="validation-error">
                    <p class="error" v-if="!$v.advisories.wheelchairReady.required">Required</p>
                </div>
            </div>
            <div class="field">
                <label class="area">Select any mobility restrictions</label>
                <multiselect 
                v-model="mobilityAdvisories" 
                :options="mobilityAdvisoryOptions" 
                :multiple="true" 
                :show-labels="false"
                :close-on-select="false"
                tag-placeholder="Add this as new tag"
                :taggable="true" 
                tag-position="bottom"
                placeholder="Select from list or enter your own" 
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
        </section>

        <section class="event-create">
            <div class="title">
                <h2>Audience Interaction Level</h2>
            </div>
            <div class="field">
                <label class="area">Select physical interaction level with guests</label>
                <multiselect 
                v-model="interactiveLevel" 
                :options="interactiveLevelOptions" 
                :multiple="false" 
                placeholder="Select your event's interaction level"
                open-direction="bottom"
                :allowEmpty="false"
                :show-labels="false"
                :class="{ active: active == 'interactive','error': $v.interactiveLevel.$error }"
                @click="active = 'interactive'"
                @blur="active = null"
                @input="$v.interactiveLevel.$touch"
                label="name" 
                track-by="id" 
                :preselect-first="false">
                <template slot="option" slot-scope="props">
                    <div class="option__desc">
                        <div class="option__title--interaction">{{ props.option.name }}</div>
                        <div class="option__small-interaction">{{ props.option.description }}</div>
                    </div>
                </template>
                </multiselect>
                <div v-if="$v.interactiveLevel.$error" class="validation-error">
                    <p class="error" v-if="!$v.interactiveLevel.required">Must choose at least one interaction level </p>
                </div>
            </div>
            <div class="field">
                <label class="area"> Audience Role </label>
                <textarea 
                v-model="advisories.audience" 
                class="create-input area" 
                rows="8" 
                placeholder=" "
                :class="{ active: active == 'audience','error': $v.advisories.audience.$error }"
                @click="active = 'audience'"
                @blur="active = null"
                @input="$v.advisories.audience.$touch"
                required 
                autofocus></textarea>
                <div v-if="$v.advisories.audience.$error" class="validation-error">
                    <p class="error" v-if="!$v.advisories.audience.required">Must enter the audience's role </p>
                </div>
            </div>

        </section>

        <div class="event-create__submit-button">
            <button :disabled="disabled" @click.prevent="onBackInitial()" class="nav-back-button"> Your events </button>
        </div>
        <div class="create-button__back">
            <button :disabled="disabled" class="create" @click.prevent="onBack('description')"> Back </button>
        </div>
        <div class="create-button__forward">
            <button :disabled="disabled" class="create" @click.prevent="onSubmit('images')"> Save and continue </button>
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

		props: ['event', 'loadcontact', 'loadcontent', 'loadmobility', 'loadinteractive', 'agelimit'],

        computed: {
            endpoint() {
                return `/create-event/${this.event.slug}/advisories`
            },

            navSubmit() {
                return this.$store.state.save
            },

            submitObject() {
                return {
                    advisories: {
                        contactAdvisories: this.advisories.contactAdvisories,
                        sexual: this.advisories.sexual.type,
                        sexualDescription: this.advisories.sexualDescription,
                        wheelchairReady: this.advisories.wheelchairReady.type,
                        ageRestriction: this.advisories.ageRestriction,
                        audience: this.advisories.audience,
                    },
                    contactAdvisory :   this.contactAdvisories.map(a => a.id),
                    contentAdvisory : this.contentAdvisories.map(a => a.advisories),
                    mobilityAdvisory : this.mobilityAdvisories.map(a => a.mobilities),
                    interactiveLevel : this.interactiveLevel,
                    age: this.age,
                }
            }
        },

		data() {
			return {
				advisories: this.initializeAdvisoriesObject(),
				contactAdvisoryOptions: this.loadcontact ? this.loadcontact : [],
				contentAdvisoryOptions: this.loadcontent ? this.loadcontent : [],
                mobilityAdvisoryOptions: this.loadmobility ? this.loadmobility : [],
                interactiveLevelOptions: this.loadinteractive ? this.loadinteractive: [],
				contactAdvisories: this.event.contact_levels ? this.event.contact_levels : '',
				contentAdvisories: this.event.content_advisories ? this.event.content_advisories : '',
                mobilityAdvisories: this.event.mobility_advisories ? this.event.mobility_advisories : '',
                interactiveLevel: this.event.interactivelevel ? this.event.interactivelevel : '',
                active: null,
                options: [{ name: 'Yes', type: true },{ name: 'No', type: false }],
                age:'',
                disabled: false,
                serverErrors: [],
			}
		},

		methods: {
			initializeAdvisoriesObject() {
				return {
					contactAdvisories: this.event.advisories ? this.event.advisories.contactAdvisories : '',
					sexual: [],
					sexualDescription: this.event.advisories ? this.event.advisories.sexualDescription : '',
					wheelchairReady: [],
					ageRestriction: this.event.advisories ? this.event.advisories.ageRestriction : '',
                    audience: this.event.advisories ? this.event.advisories.audience : '',
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

			onSubmit(value) {
				if (this.checkVuelidate()) { return false };
				axios.patch(this.endpoint, this.submitObject)
				.then(res => { 
                    value == 'exit' ? this.onBackInitial() : this.onForward(value);
                })
				.catch(err => {
                    this.onErrors(err);
                });
			},

            updateAdvisoryFields(input) {
                if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
                    this.advisories = _.pick(input, _.intersection( _.keys(this.advisories), _.keys(input) ));
                }
                if (this.advisories.wheelchairReady != null) {
                    this.advisories.wheelchairReady ? this.advisories.wheelchairReady = { name: 'Yes', type: true } : this.advisories.wheelchairReady = { name: 'No', type: false };
                }
                if (this.advisories.sexual != null) {
                    this.advisories.sexual ? this.advisories.sexual = { name: 'Yes', type: true } : this.advisories.sexual = { name: 'No', type: false };
                }
            },

            onLoad() {
                axios.get(this.onFetch('advisories'))
                .then(res => {
                    this.updateAdvisoryFields(res.data.advisories);
                    res.data.contactPivots ? this.contactAdvisories = res.data.contactPivots : '';
                    res.data.contentPivots ? this.contentAdvisories = res.data.contentPivots : '';
                    res.data.mobilityPivots ? this.mobilityAdvisories = res.data.mobilityPivots : '';
                    res.data.interactivePivots ? this.interactiveLevel = res.data.interactivePivots : '';
                    res.data.age ? this.age = res.data.age : '';
                });
            },
		},

        watch: {
            navSubmit() {
                if (this.event.status < 7 && this.$v.$invalid) {
                    this.onBack(this.navSubmit);
                } else {
                    this.onSubmit(this.navSubmit);
                }
            }
        },

        created() {
            this.onLoad();
        },


        validations: {
            age: {
                required
            },
        	contactAdvisories: {
        		required
        	},
            mobilityAdvisories: {
                required
            },
            contentAdvisories: {
                required
            },
            interactiveLevel: {
                required
            },
			advisories: {
                sexualDescription: {
                    ifSexual() {
                        return this.advisories.sexual && this.advisories.sexual.type ? this.advisories.sexualDescription ? true : false : true
                    }
                },
                wheelchairReady: {
                    required,
                },
                audience: {
                    required,
                },
                sexual: {
                    required
                }
			},	
		},
    };

</script>