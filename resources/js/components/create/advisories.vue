<template>
	<div class="advisories">
	    <div class="section">
            <div class="texta">
                <div class="ctitle">
                    <h2>Content Advisories</h2>
                </div>
                <div class="field">
                    <label class="area">Explain the shows content</label>
                    <multiselect 
                    v-model="contentAdvisories" 
                    :show-labels="false"
                    :options="contentAdvisoryOptions"
                    :class="{ active: activeItem == 'content','error': $v.contentAdvisories.$error }"
                    :multiple="true" 
                    tag-placeholder="Add this as new tag"
                    :taggable="true" 
                    tag-position="bottom"
                    placeholder="Search or add a tag" 
                    open-direction="bottom"
                    @tag="addTag"
                    @click="activeItem = 'content'"
                    @blur="activeItem = null"
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
                    :class="{ active: activeItem == 'age','error': $v.advisories.ageRestriction.$error }"
                    @click="activeItem = 'age'"
                    @blur="activeItem = null"
                    @input="$v.advisories.ageRestriction.$touch"
                    :preselect-first="false">
                    </multiselect>
                    <div v-if="$v.advisories.ageRestriction.$error" class="validation-error">
                        <p class="error" v-if="!$v.advisories.ageRestriction.required">Required</p>
                    </div>
                </div>
            </div>
            <div class="textb">
                <div class="ctitle">
                    <h2>Contact Advisories</h2>
                </div>
                <div class="field">
                    <label class="area">Select physical interaction level with guests</label>
                    <multiselect 
                    v-model="contactLevel" 
                    :options="contactLevelOptions" 
                    :multiple="true" 
                    placeholder="Choose all that apply"
                    open-direction="bottom"
                    :show-labels="false"
                    :class="{ active: activeItem == 'contact','error': $v.contactLevel.$error }"
                    @click="activeItem = 'contact'"
                    @blur="activeItem = null"
                    @input="$v.contactLevel.$touch"
                    label="level" 
                    track-by="id" 
                    :preselect-first="false">
                    </multiselect>
                    <div v-if="$v.contactLevel.$error" class="validation-error">
                        <p class="error" v-if="!$v.contactLevel.required">Must choose at least one contact level </p>
                    </div>
                </div>
                <div class="field" v-if="contactLevel.length">
                    <label class="area"> Explain a bit about your contact with the audience </label>
                    <textarea 
                    v-model="advisories.contactAdvisories" 
                    class="create-input area" 
                    rows="8" 
                    placeholder=" "
                    :class="{ active: activeItem == 'conAdv','error': $v.advisories.contactAdvisories.$error }"
                    @click="activeItem = 'conAdv'"
                    @blur="activeItem = null"
                    @input="$v.advisories.contactAdvisories.$touch"
                    required 
                    autofocus></textarea>
                    <div v-if="$v.advisories.contactAdvisories.$error" class="validation-error">
                        <p class="error" v-if="!$v.advisories.contactAdvisories.required">Must enter a contact advisory </p>
                    </div>
                </div>
                <div class="field" v-if="contactLevel.length">
                    <label> Is there sexual Violence? </label>
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
                        :class="{ active: activeItem == 'sexual'}"
                        placeholder=" "
                        @click="activeItem = 'sexual'"
                        @blur="activeItem = null"
                        required 
                        autofocus></textarea>
                    </div>
                </div>
            </div>
            <div class="textc">
                <div class="ctitle">
                    <h2>Mobility Advisories</h2>
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
                    placeholder="Search or add a tag" 
                    open-direction="bottom"
                    :class="{ active: activeItem == 'mobility','error': $v.mobilityAdvisories.$error }"
                    @tag="addTagMobility"
                    @click="activeItem = 'mobility'"
                    @blur="activeItem = null"
                    @input="$v.mobilityAdvisories.$touch"
                    label="mobilities"
                    track-by="id">
                    </multiselect>
                    <div v-if="$v.mobilityAdvisories.$error" class="validation-error">
                        <p class="error" v-if="!$v.mobilityAdvisories.required">Must enter a mobility advisory </p>
                    </div>
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
                <button :disabled="dis" @click.prevent="submitAdvisories()" class="create"> Next </button>
            </div>
            <div class="mobile">
                
            </div>
            <div class="inNav">
                <button :disabled="dis" class="create" @click.prevent="goBack()"> Back </button>
                <button :disabled="dis" class="create" @click.prevent="submitAdvisories()"> Next </button>
            </div>
	    </div>
    </div>
</template>

<script>
    import Multiselect from 'vue-multiselect'
    import _ from 'lodash';
    import { required, numeric } from 'vuelidate/lib/validators'

	export default {
        components: {
            Multiselect
        },

		props: {
			event: { type:Object },
		},

		data() {
			return {
				advisories: this.initializeEventObject(),
				contactLevelOptions: [],
				contentAdvisoryOptions: [],
                mobilityAdvisoryOptions: [],
				contactLevel: '',
				contentAdvisories: '',
                mobilityAdvisories: '',
				eventUrl:`/create-event/${this.event.slug}`,
                activeItem: null,
				ageActive: false,
                ageOptions: ['All Ages', '12+', '16+', '18+', '21+'],
                dis: false,
			}
		},

		methods: {
			initializeEventObject() {
				return {
					contactAdvisories: '',
					sexualViolence: false,
					sexualViolenceDescription: '',
					wheelchairReady: false,
					ageRestriction: '',
				}
			},

			//updates fields if event is stored in database.
			updateEventFields(input) {
	            if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
	                this.advisories = _.pick(input, _.intersection( _.keys(this.advisories), _.keys(input) ));
	            }
                this.advisories.wheelchairReady ? '' : this.advisories.wheelchairReady = false;
                this.advisories.sexualViolence ? '' : this.advisories.sexualViolence = false;
	        },

	        addTag (newTag) {
                const tag = {
                    advisories: newTag,
                    id: newTag.substring(0, 0) + Math.floor((Math.random() * 10000000))
                }
                this.contentAdvisoryOptions.push(tag)
                this.contentAdvisories.push(tag)
            },

            addTagMobility (newTag) {
                const tag = {
                    mobilities: newTag,
                    id: newTag.substring(0, 0) + Math.floor((Math.random() * 10000000))
                }
                this.mobilityAdvisoryOptions.push(tag)
                this.mobilityAdvisories.push(tag)
            },

	        //submit data to the database
			async submitAdvisories() {
				this.$v.$touch(); 
                if (this.$v.$invalid) { return false; };
                this.dis = true;
               	let data = this.advisories;
               	data.contactLevel = this.contactLevel.map(a => a.id);
               	data.contentAdvisory = this.contentAdvisories.map(a => a.advisories);
                data.mobilityAdvisory = this.mobilityAdvisories.map(a => a.mobilities);

				axios.patch(`${this.eventUrl}/advisories`, data)
				.then(response => { 
                    window.location.href = `${this.eventUrl}/images`; 
                })
				.catch(error => { console.log(error.response.data); this.dis = false;});
			},

            goBack() {
                window.location.href = `${this.eventUrl}/description`;
            },

            // If there is data in Database it will load from the database
            load() {
                axios.get(`${this.eventUrl}/advisories/fetch?timestamp=${new Date().getTime()}`)
                .then(response => {
                    console.log(response.data);
                    this.updateEventFields(response.data.advisories);
                    this.contactLevel = response.data.contactPivots;
                    this.contactLevelOptions = response.data.contactLevels;
                    this.contentAdvisories = response.data.contentPivots;
                    this.contentAdvisoryOptions = response.data.contentAdvisories;
                    this.mobilityAdvisories = response.data.mobilityPivots;
                    this.mobilityAdvisoryOptions = response.data.mobilityAdvisories;
                });
            },
		},

        created() {
            this.load();
        },

        validations: {
        	contactLevel: {
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