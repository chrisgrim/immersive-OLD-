<template>
    <div class="event-create__shows">
        <section class="">
            <div class="listing-details-block">
                <div class="title">
                    <h2>Tickets</h2>
                </div>
                <section v-if="event.show_times" class="event-enter-tickets">
                    <div class="field cost">
                        <div class="event-tickets__add">
                            <div class="field">
                                <label class="area">Add new tickets</label>
                                <multiselect 
                                v-model="selected" 
                                :show-labels="false"
                                :hide-selected="true"
                                :resetAfter="true"
                                :multiple="false"
                                :options="ticketOptions"
                                :class="{ active: active == 'newTicket'}"
                                tag-placeholder="Add this as new tag"
                                :taggable="true"
                                tag-position="bottom"
                                placeholder="Type here to create your own" 
                                open-direction="bottom"
                                @tag="addTag"
                                label="name" 
                                track-by="name"
                                @select="pushTicket"
                                @click="active = 'newTicket'"
                                @blur="active = null">
                                </multiselect>
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
                            </div>

                            <div v-for="(v, index) in $v.tickets.$each.$iter" class="ticket-box__element grid">
                                <div class="field">
                                    <input 
                                    v-model="v.name.$model" 
                                    class="create-input"  
                                    name="name"
                                    :disabled="locked.includes(v.name.$model) ? true : false"
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
                                <div v-if="v.name.$model == 'Free' || v.name.$model == 'PWYC'" class="field">
                                    <div  class="free-ticket__field">
                                        
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
                                    <button @click.prevent="deleteRow(index, v)" class="delete-circle">X</button>
                                </div>
                            </div>
                        </div>
                        <div class="field">   
                            <label>Ticket Link (required)</label>
                            <input 
                            type="text" 
                            v-model="ticketUrl"
                            :class="{ active: active == 'ticket','error': $v.ticketUrl.$error }"
                            @click="active = 'ticket'"
                            @blur="active = null"
                            @input="$v.ticketUrl.$touch"
                            placeholder="Leave blank if using organizer website url"
                            />
                            <div v-if="$v.ticketUrl.$error" class="validation-error">
                                <p class="error" v-if="!$v.ticketUrl.url"> Must be a url (https://...)</p>
                                <p class="error" v-if="!$v.ticketUrl.required">Please enter a URL</p>
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
            <button :disabled="disabled" @click.prevent="onSubmit('exit')" class="nav-back-button"> Save and Exit </button>
        </div>
        <div class="create-button__back">
            <button :disabled="disabled" class="create" @click.prevent="onBack('category')"> Back </button>
        </div>
        <div class="create-button__forward">
            <button :disabled="disabled" class="create" @click.prevent="onSubmit()"> Save and continue </button>
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
        submitObject() {
            return {
                'tickets': this.tickets,
                'ticketUrl': this.ticketUrl,
            }
        },


    },

    data() {
        return {
            tickets: this.event.shows.length && this.event.shows[0].tickets.length ? this.event.shows[0].tickets : [],
            money: this.initializeMoneyObject(),
            ticketOptions: [
                { id:'', name: 'VIP', ticket_price: '', description: ''},
                { id:'', name: 'Student', ticket_price: '', description: ''},
                { id:'', name: 'General', ticket_price: '', description: ''},
                { id:'', name: 'Free', ticket_price: '', description: ''},
                { id:'', name: 'PWYC', ticket_price: '', description: ''},
            ],
            locked: ['VIP','Student','General','Free','PWYC'],
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
                ticket_amount: '',
                ticket_price: '',
            }
        },

        deleteRow(index, v) {
            this.ticketOptions.push({name: v.name.$model,ticket_price:0.00, description: '', });
            this.$delete(this.tickets, index) ;
        },

        pushTicket(value) {
            const val = {
                name: value.name,
                description: '',
                id: '',
                ticket_price:0.00,
            }
            this.tickets.push(val);
            this.selected = '';
            _.remove(this.ticketOptions, {name: value.name});
        },

        onLoad() {
            axios.get(this.onFetch('tickets'))
            .then(res => {
                res.data.tickets ? this.tickets = res.data.tickets[0].tickets : '';
                res.data.ticketUrl ? this.ticketUrl = res.data.ticketUrl : '';
            });
        },

        onSubmit(value) {
            let free = ['free', 'pwyc'];
            let previous = [];
            for (var i = 0; i < this.tickets.length; i++) {
                if (!free.includes(this.tickets[i].name.toLowerCase())) {
                    if (this.tickets[i].ticket_price == 0.00) {
                        this.tempErrorPrice = true;
                        return false;
                    }
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
                value == 'exit' || this.exit == true ? this.onBackInitial() : this.onForward('description');
            })
            .catch(err => { this.onErrors(err) });
        },

        addTag (newTag) {
            
            const tag = {
                name: newTag,
                description: '',
                ticket_price: '',
            }
            this.ticketOptions.push(tag)
            this.tickets.push(tag)
        },

    },

    mounted() {
        this.onLoad();
    },

    validations: {
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