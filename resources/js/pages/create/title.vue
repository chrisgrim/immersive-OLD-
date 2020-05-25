<template>
	<div class="event-create__title">
        <section class="event-create">
            <div class="title">
                <h2>Title</h2>
            </div>
            <div @mouseover="resubmit=true" v-if="approved" class="field">
                <label>Title</label>
                <p class="create-titlename">{{title.name}}</p>
                <button class="editTitle" v-if="resubmit" @click.prevent="modal=true">Edit</button>
            </div>
            <div v-else="approved" class="field">
                <label>Project name</label>
                <input
                type="text" 
                v-model="title.name" 
                placeholder=" "
                :class="{ active: active == 'name','error': $v.title.name.$error }"
                @input="$v.title.name.$touch()"
                @click="active = 'name'"
                @blur="active = 'null'"
                 />
                <div v-if="$v.title.name.$error" class="validation-error">
                    <p class="error" v-if="!$v.title.name.required">Please add a title.</p>
                    <p class="error" v-if="!$v.title.name.maxLength">The title is too long.</p>
                </div>
            </div>
            <div class="field">
                <label>Project tag line (Stand out from the other events with a great tag line!)</label>
                <input 
                type="text" 
                v-model="title.tagLine"
                :class="{ active: active == 'tag','error': $v.title.tagLine.$error }"
                @input="$v.title.tagLine.$touch()"
                @click="active = 'tag'"
                @blur="active = 'null'"
                placeholder="Quick, one sentence line to get the audience hooked!"
                />
                <div v-if="$v.title.tagLine.$error" class="validation-error">
                    <p class="error" v-if="!$v.title.tagLine.maxLength">The tag line is too long.</p>
                </div>
            </div>
            
        </section>

        <section></section>
        <div class="event-create__submit-button">
            <button :disabled="disabled" @click.prevent="onSubmit('exit')" class="nav-back-button"> Save and Exit </button>
        </div>
        <div class="create-button__back">
            <button :disabled="disabled" class="create" @click.prevent="onBackInitial()"> Back </button>
        </div>
        <div class="create-button__forward">
            <button :disabled="disabled" class="create" @click.prevent="onSubmit()"> Save and continue </button>
        </div>
        
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
                <button class="btn del" @click="onReSubmit()">Change</button>
            </div>
        </modal>
    </div>
</template>

<script>
	import formValidationMixin from '../../mixins/form-validation-mixin'
	import { required, maxLength } from 'vuelidate/lib/validators';

	export default {

        mixins: [formValidationMixin],

		props: ['event'],

        computed: {
            endpoint() {
                return `/create-event/${this.event.slug}/title`
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
			}
		},

		methods: {

            initializeTitleObject() {
                return {
                    name: this.event.name ? this.event.name : '',
                    tagLine: this.event.tag_line ? this.event.tag_line : '',
                    reSubmitEvent: '',
                }
            },

	        clearinput() {
	        	this.nameActive = true;
	        	this.serverErrors = [];
	        },

			onSubmit(value) {
                if (this.checkVuelidate()) { return false };
				axios.patch( this.endpoint, this.title )
				.then(res => { value == 'exit' ? this.onBackInitial() : this.onForward('location') })
            	.catch(err => { this.onErrors(err) });
			},

            onReSubmit() {
                this.title.reSubmitEvent = 'reSubmit';
                this.approved = false;
                this.modal = false;
            },

            onLoad() {
                axios.get(this.onFetch('title'))
                .then(res => {
                    res.data.name ? this.title.name = res.data.name : '';
                    res.data.tag_line ? this.title.tagLine = res.data.tag_line : '';
                });
            },
		},

        created() {
            this.onLoad();
        },


		validations: {
            title: {
                name: {
                    required,
                    maxLength: maxLength(140),
                    serverFailed(){ return !this.serverErrors['name']; },
                },
                tagLine: {
                    maxLength: maxLength(140)
                }
            }
		},
    };

</script>