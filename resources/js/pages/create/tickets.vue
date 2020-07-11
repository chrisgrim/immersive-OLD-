<template>
    <div class="event-create__shows">
        <section class="">
            <div class="listing-details-block">
                <div class="title">
                    <h2>Pricing</h2>
                </div>
                <section v-if="event.show_times" class="event-enter-tickets">
                    <div class="field cost">
                        <div class="event-tickets__add">
                            <div class="field">
                                <label class="area">Select ticket type</label>
                                <multiselect 
                                v-model="selected" 
                                :show-labels="false"
                                :hide-selected="true"
                                :resetAfter="true"
                                :multiple="false"
                                :options="ticketOptions"
                                :class="{ active: active == 'newTicket', 'error': $v.tickets.$error}"
                                tag-placeholder="Add this as new ticket"
                                :taggable="true"
                                tag-position="bottom"
                                placeholder="Ticket type (type here to create your own)" 
                                open-direction="bottom"
                                @tag="addTag"
                                label="name" 
                                track-by="name"
                                @select="pushTicket"
                                @click="active = 'newTicket'"
                                @blur="active = null">
                                </multiselect>
                                <div v-if="$v.tickets.$error" class="validation-error">
                                    <p class="error" v-if="!$v.tickets.required">Enter at least one ticket type (Select or Type)</p>
                                </div>
                            </div>
                        </div>
                        <div v-if="tickets.length" class="create-shows__ticket-box">
                            <div class="ticket-box__element grid">
                                <div>
                                     <label>Ticket Type</label>
                                </div>
                                <div>
                                     <label>Ticket Description (optional)</label>
                                </div>
                                <div>
                                     <label>Ticket Price (USD)</label>
                                </div>
                                <div>
                                     <label>Free?</label>
                                </div>
                            </div>

                            <div v-for="(v, index) in $v.tickets.$each.$iter" class="ticket-box__element grid">
                                <div class="field">
                                    <input 
                                    v-model="v.name.$model" 
                                    class="create-input"  
                                    name="name"
                                    :class="{ active: active == `${v.name.$model}name`,'error': v.name.$error }"
                                    @click="active = `${v.name.$model}name`; tempErrorName = false"
                                    @blur="active = null"
                                    placeholder="ex: General, VIP, Student"
                                    />
                                    <div v-if="v.name.$error" class="validation-error">
                                        <p class="error" v-if="!v.name.required">Must enter a ticket name</p>
                                        <p class="error" v-if="!v.name.maxLength">Name is too Long</p>
                                    </div>
                                    <div v-if="tempErrorName" class="validation-error">
                                        <p class="error">Cant have same name</p>
                                    </div>
                                </div>
                                <div class="field">
                                    <input 
                                    v-model="v.description.$model"
                                    @click="active = `${v.name.$model}des`"
                                    @blur="active = null"
                                    placeholder="optional"
                                    :class="{ active: active == `${v.name.$model}des` }"
                                    />
                                </div>
                                <div v-if="v.free.$model" class="field">
                                    <div  class="free-ticket__field">
                                        Free
                                    </div>
                                </div>
                                <div v-else class="field">
                                    <input 
                                    v-model="v.ticket_price.$model"
                                    v-money="money"
                                    @click="active = `${v.name.$model}price`; tempErrorPrice = false"
                                    @blur="active = null"
                                    placeholder="$0.00"
                                    v-bind="money"
                                    :class="{ active: active == `${v.name.$model}price`,'error': v.$error, 'error' : tempErrorPrice }"
                                    @keydown="$event.key === '-' ? $event.preventDefault() : null"
                                    style="text-align: right" 
                                    />
                                    <div v-if="v.$error" class="validation-error">
                                        <p class="error" v-if="!v.ticket_price.maxLength">Please enter an amount under $10,000</p>
                                        <p class="error" v-if="!v.ticket_price.required">Please enter a price</p>
                                    </div>
                                    <div v-if="tempErrorPrice" class="validation-error">
                                        <p class="error">Please enter a price</p>
                                    </div>
                                </div>
                                <div class="field">
                                    <div >
                                        <input v-model="v.free.$model" type="checkbox" id="select-box">
                                    </div>
                                </div>
                                <div class="field">
                                    <button @click.prevent="deleteRow(index, v)" class="delete-circle">X</button>
                                </div>
                            </div>
                        </div>
                        <div style="width:50%">
                            <div class="field">
                                <label>Choose your button text (your link for tickets or ticket info)</label>
                                <multiselect 
                                v-model="callAction" 
                                :options="callActionOptions"
                                :show-labels="false"
                                :allowEmpty="false"
                                placeholder="Select call to action"
                                open-direction="bottom"
                                :class="{ active: active == 'call' }"
                                @click="active = 'call'"
                                @blur="active = null"
                                :preselect-first="false">
                                </multiselect>
                                <div v-if="$v.callAction.$error" class="validation-error">
                                    <p class="error" v-if="!$v.callAction.required">Must have call to action</p>
                                </div>
                            </div>
                            <div class="field">
                                <label>Button link (required)</label>
                                <input 
                                type="text" 
                                v-model="ticketUrl"
                                :class="{ active: active == 'ticket','error': $v.ticketUrl.$error }"
                                @click="active = 'ticket'"
                                @blur="active = null"
                                @input="$v.ticketUrl.$touch"
                                placeholder=""
                                />
                                <div v-if="$v.ticketUrl.$error" class="validation-error">
                                    <p class="error" v-if="!$v.ticketUrl.url"> Must be a url (https://...)</p>
                                    <p class="error" v-if="!$v.ticketUrl.required">Please enter a URL</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section v-else>
                    Please head to Dates and Times to enter show times before adding tickets.
                </section>
            </div>
        </section>
        
         <div class="event-create__submit-button">
            <button :disabled="disabled" @click.prevent="onBackInitial()" class="nav-back-button"> Your events </button>
        </div>
        <div class="create-button__back">
            <button :disabled="disabled" class="create" @click.prevent="onBack('category')"> Back </button>
        </div>
        <div class="create-button__forward">
            <button :disabled="disabled" class="create" @click.prevent="onSubmit('description')"> Save and continue </button>
        </div>

    </div>
</template>

<script>
    import formValidationMixin from '../../mixins/form-validation-mixin'
    import _ from 'lodash'
    import { required, minLength, maxLength, minValue, url } from 'vuelidate/lib/validators'
    import {Money} from 'v-money'
    import Multiselect from 'vue-multiselect'

export default {


    props: ['event'],

    mixins: [formValidationMixin],

    components: { Money, Multiselect},


    computed: {
        endpoint() {
            return `/create-event/${this.event.slug}/tickets`
        },

        navSubmit() {
            return this.$store.state.save
        },

        submitObject() {
            return {
                'tickets': this.tickets,
                'ticketUrl': this.ticketUrl,
                'callAction': this.callAction,
            }
        },
    },

    data() {
        return {
            tickets: [],
            money: this.initializeMoneyObject(),
            ticketOptions: [
                { id:'', name: 'General', ticket_price: '', description: '', free:''},
                { id:'', name: 'Student', ticket_price: '', description: '', free:''},
                { id:'', name: 'Senior', ticket_price: '', description: '', free:''},
                { id:'', name: 'VIP', ticket_price: '', description: '', free:''},
                { id:'', name: 'Pay What You Can', ticket_price: '', description: '', free:''},
            ],
            callAction: this.event.call_to_action,
            callActionOptions: ['Get Tickets', 'Sign Up', 'Download','Details'],
            locked: ['VIP','Student','General','PWYC'],
            disabled: false,
            active: null,
            modal: false,
            freeTicket: false,
            exit: false,
            selected: '',
            tempErrorName: false,
            tempErrorPrice: false,
            ticketUrl: this.event.ticketUrl ? this.event.ticketUrl : '',
        }
    },

    methods: {

        initializeMoneyObject() {
            return {
                decimal: '.',
                thousands: '',
                prefix: '',
                suffix: '',
                precision: 2,
                masked: false  
            }
        },

        initializeTicketObject() {
            return {
                id: '',
                name: '',
                show_id: '',
                free: false,
                ticket_amount: '',
                ticket_price: '',
            }
        },

        deleteRow(index, v) {
            this.$delete(this.tickets, index) ;
        },

        pushTicket(value) {
            const val = {
                name: value.name,
                description: '',
                id: '',
                ticket_price:0.00,
                free: false
            }
            this.tickets.push(val);
            this.selected = '';
            _.remove(this.ticketOptions, {name: value.name});
        },

        onLoad() {
            axios.get(this.onFetch('tickets'))
            .then(res => {
                // console.log(res.data.tickets[0].tickets);
                for (var i = 0; i < res.data.tickets[0].tickets.length; i++) {
                    console.log(res.data.tickets[0].tickets[i].name);
                    this.tickets.push({
                        name: res.data.tickets[0].tickets[i].name,
                        description: res.data.tickets[0].tickets[i].description,
                        ticket_price: res.data.tickets[0].tickets[i].ticket_price,
                        free: res.data.tickets[0].tickets[i].ticket_price == 0.00 ? true : false,
                    })
                }
                // res.data.tickets ? this.tickets = res.data.tickets[0].tickets : '';
                res.data.ticketUrl ? this.ticketUrl = res.data.ticketUrl : '';
            });
        },

        onSubmit(value) {
            let free = ['free', 'pwyc'];
            let previous = [];
            for (var i = 0; i < this.tickets.length; i++) {
                if (this.tickets[i].ticket_price == 0.00 && this.tickets[i].free != true) {
                    this.tempErrorPrice = true;
                        return false;
                }
                if (this.tickets[i].free) {
                    this.tickets[i].ticket_price = 0.00;
                }
                if (previous.includes(this.tickets[i].name.toLowerCase())) {
                    this.tempErrorName = true;
                    return false;
                }
                previous.push(this.tickets[i].name.toLowerCase())

            }
            if (this.checkVuelidate()) { return false };
            axios.post(this.endpoint, this.submitObject)
            .then(res => {  
                value == 'exit' || this.exit == true ? this.onBackInitial() : this.onForward(value);
            })
            .catch(err => { this.onErrors(err) });
        },

        addTag (newTag) {
            
            const tag = {
                name: newTag,
                description: '',
                id: '',
                ticket_price:0.00,
                free: false
            }
            this.ticketOptions.push(tag)
            this.tickets.push(tag)
        },

    },

    watch: {
        navSubmit() {
            if (this.event.status < 5 && this.$v.$invalid) {
                this.onBack(this.navSubmit);
            } else {
                this.onSubmit(this.navSubmit);
            }
        }
    },

    mounted() {
        this.onLoad();
    },

    validations: {
        callAction: {
            required
        },
        ticketUrl: {
           url,
           required,
        },
        tickets: {
            required,
            $each: {
                name: {
                    required,
                    maxLength: maxLength(30),
                },
                free: {

                },
                ticket_price: {
                    required,
                    maxLength: maxLength(7),
                },
                description: {
                   maxLength: maxLength(60),
                },
            }
        },
    }
}  
</script>