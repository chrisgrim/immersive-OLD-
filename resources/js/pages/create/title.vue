<template>
    <div class="event-create__title">
        <section 
            class="event-create__intro" 
            v-if="newEvent">
            <div>
                <h4>Hi There,</h4>
                <br>
                <p>We’re excited that you're sharing your work with us so we can share it with the world!</p>
                <p>Before we get started, make sure you have the following close at hand:</p>

                <ul>
                    <li><b>Your ticket site link.</b> (We don't provide ticketing services, we just help people discover your work.) </li>
                    <li><b>An image for your event.</b> It's best if it is horizontal, doesn't have text on it, and has dimensions of at least 800 x 450  and is under 10mb in size.</li>
                    <li><b>Text describing your event.</b> </li>
                    <li>If it's an in-person event, text describing your <b>COVID-19 policies and protocols.</b> </li>
                    <li><b>Your ticket price options.</b> We support multiple ticket types, including Pay What You Can, and many common currencies.</li> 
                    <li>Be prepared to answer questions about <b>accessibility, content advisories, the nature of physical contact</b> at the event (if any), and the <b>nature of interaction</b> at the event.</li>
                </ul>
                <br>
                <p>Once you’ve entered everything, smash that “Submit” button. We’ll get back to you with questions if we need anything cleared up!</p>
                <p>Best,<br>
                    Noah Nelson<br>
                    Publisher<br>
                    Everything Immersive & No Proscenium
                </p>
            </div>
        </section>

        <section 
            class="event-create" 
            v-else>
            <div class="title">
                <h2>Title</h2>
            </div>
            <div 
                @mouseover="resubmit=true" 
                v-if="approved" 
                class="field">
                <label>Title</label>
                <p class="create-titlename">{{ title.name }}</p>
                <button 
                    class="editTitle" 
                    v-if="resubmit" 
                    @click.prevent="modal=true">
                    Edit
                </button>
            </div>
            <div 
                v-else 
                class="field">
                <label>Project name</label>
                <input
                    type="text" 
                    v-model="title.name" 
                    placeholder=" "
                    :class="{ active: active == 'name','error': $v.title.name.$error }"
                    @input="cleanErr"
                    @click="active = 'name'"
                    @blur="active = 'null'">
                <div v-if="$v.title.name.$error" class="validation-error">
                    <p class="error" v-if="!$v.title.name.required">Please add a title.</p>
                    <p class="error" v-if="!$v.title.name.maxLength">The title is too long.</p>
                    <p class="error" v-if="!$v.title.name.serverFailed">You already have event with this name. Please edit that event instead of creating a new one.</p>
                </div>
            </div>
            <div class="field">
                <label>Project tag line (required)</label>
                <input 
                    type="text" 
                    v-model="title.tagLine"
                    :class="{ active: active == 'tag','error': $v.title.tagLine.$error }"
                    @input="$v.title.tagLine.$touch()"
                    @click="active = 'tag'"
                    @blur="active = 'null'"
                    placeholder="Quick blurb describing the event to get the audience hooked!">
                <div v-if="$v.title.tagLine.$error" class="validation-error">
                    <p class="error" v-if="!$v.title.tagLine.required">Please add a tag line.</p>
                    <p class="error" v-if="!$v.title.tagLine.maxLength">The tag line is too long.</p>
                </div>
            </div>
        </section>
        <Submit 
            :newsubmission="newEvent"
            @submit="onSubmit"
            @newevent="acceptNewEvent"
            :disabled="disabled" 
            previous="exit"
            next="location" 
            :event="event" />
        <modal v-if="modal" @close="modal = false">
            <div slot="header">
                <div class="circle del">
                    <p>?</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Changing the event name?</h3>
                <p>Editing the event name will require the event to be reapproved.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click="onResubmit()">Change</button>
            </div>
        </modal>
        <transition name="slide-fade">
            <div v-if="updated" class="updated-notifcation">
                <p>Your event has been updated.</p>
            </div>
        </transition>
    </div>
</template>

<script>
	import formValidationMixin from '../../mixins/form-validation-mixin'
	import { required, maxLength } from 'vuelidate/lib/validators';
    import Submit  from './components/submit-buttons.vue'

	export default {

        mixins: [formValidationMixin],

		props: ['event', 'newsubmission'],

        components: {Submit},

        computed: {
            endpoint() {
                return `/create/${this.event.slug}/title`
            },

            navSubmit() {
                return this.$store.state.navurl
            },

        },

		data() {
			return {
                title: this.initializeTitleObject(),
                active: null,
                disabled:false,
                resubmit: false,
                modal: false,
                approved: this.event.status == 'p' || this.event.status == 'e' ? true : false,
                serverErrors: '',
                updated: false,
                newEvent: this.newsubmission,
			}
		},

		methods: {
            initializeTitleObject() {
                return {
                    name: this.event.name ? this.event.name : '',
                    tagLine: this.event.tag_line ? this.event.tag_line : '',
                    resubmit: '',
                }
            },

            clearinput() {
                this.nameActive = true;
                this.serverErrors = [];
            },

			onSubmit(value) {

                if (this.event.status != 0 && !this.$v.$anyDirty) {return this.onForward(value)}
                if (this.checkVuelidate()) { return false }
				axios.patch( this.endpoint, this.title )
				.then(res => { 
                    value == 'save' ? this.save() : this.onForward(value);
                })
                .catch(err => { 
                    this.onErrors(err) });
			},

            onResubmit() {
                this.title.resubmit = 'resubmit';
                this.approved = false;
                this.modal = false;
            },

            onLoad() {
                axios.get(this.onFetch('title'))
                .then(res => {
                    res.data.name ? this.title.name = res.data.name : null;
                    res.data.tag_line ? this.title.tagLine = res.data.tag_line : null;
                });
            },

            cleanErr() {
                this.serverErrors = [];
                this.$v.title.name.$touch();
            },

            acceptNewEvent() {
                this.newEvent = false;
            }
		},

        created() {
            this.onLoad();
        },

        watch: {
            navSubmit() {
                this.onSubmit(this.navSubmit);
            },
        },

		validations: {
            title: {
                name: {
                    required,
                    maxLength: maxLength(100),
                    serverFailed(){ return !this.serverErrors['name']; },
                },
                tagLine: {
                    required,
                    maxLength: maxLength(100)
                }
            }
		},
    };

</script>