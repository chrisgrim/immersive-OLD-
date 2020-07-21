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
                                <label class="area">Let our users know your ticket pricing</label>
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
                                placeholder="Ticket class (type here to create your own)" 
                                open-direction="bottom"
                                @tag="addTag"
                                label="name"
                                @input="$v.selected.$touch"
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
                            <div class="ticket-box__element labels grid">
                                <div>
                                    <label>Ticket Class</label>
                                </div>
                                <div>
                                    <label>Ticket Description (optional)</label>
                                </div>
                                <div>
                                    <label>Type (free, etc...)</label>
                                </div>
                                <div>
                                    <label>Ticket Price</label>
                                </div>
                            </div>

                            <div v-for="(ticket, index) in tickets" class="ticket-box__element grid">
                                <div class="field">
                                    <input 
                                    v-model="ticket.name" 
                                    class="create-input"  
                                    name="name"
                                    @input="$v.selected.$touch"
                                    :class="{ active: active == `name${index}`, error: ticket.errors.nameLength || ticket.errors.nameEmpty || ticket.errors.nameRepeat}"
                                    @click="active = `name${index}`"
                                    @keydown="reset"
                                    @blur="active = null"
                                    placeholder="ex: General, VIP, Student"
                                    />
                                    <div v-if="ticket.errors.nameLength || ticket.errors.nameRepeat || ticket.errors.nameEmpty" class="validation-error">
                                        <p v-if="ticket.errors.nameLength" class="error">Name is too long</p>
                                        <p v-if="ticket.errors.nameRepeat" class="error">No duplicate names</p>
                                        <p v-if="ticket.errors.nameEmpty" class="error">Name is required</p>
                                    </div>
                                </div>
                                <div class="field">
                                    <input 
                                    v-model="ticket.description"
                                    @input="reset"
                                    @click="active = `description${index}`"
                                    :class="{ active: active == `description${index}`, error: ticket.errors.descriptionLength}"
                                    @blur="active = null"
                                    placeholder="description (optional)"
                                    />
                                    <div v-if="ticket.errors.descriptionLength"  class="validation-error">
                                        <p v-if="ticket.errors.descriptionLength" class="error">Description is too long</p>
                                    </div>
                                </div>
                                <div class="field">
                                    <multiselect 
                                    v-model="ticket.type" 
                                    :options="ticketTypeOptions"
                                    track-by="type"
                                    label="name"
                                    :allowEmpty="false"
                                    :show-labels="false"
                                    open-direction="bottom"
                                    class="ticket-type-selection"
                                    :searchable="false"
                                    :class="{ active: active == 'type' }"
                                    @click="active = 'type'"
                                    @blur="active = null"
                                    @input="$v.selected.$touch"
                                    :preselect-first="false">
                                    </multiselect>
                                </div>
                                <div v-if="ticket.type.type == 'f'" class="field">
                                    <div  class="free-ticket__field">
                                        Free
                                    </div>
                                </div>
                                <div v-else-if="ticket.type.type == 'p'" class="field">
                                    <div  class="free-ticket__field">
                                        PWYC
                                    </div>
                                </div>
                                <div v-else class="field">
                                    <div class="c-ticket-currency">$</div>
                                    <input 
                                    v-model="ticket.ticket_price"
                                    v-money="money"
                                    :class="{ active: active == `price${index}`, error: ticket.errors.priceLength || ticket.errors.priceEmpty }"
                                    @click="active = `price${index}`"
                                    @blur="active = null"
                                    @keyup="reset"
                                    placeholder="$0.00"
                                    v-bind="money"
                                    @keydown="$event.key === '-' ? $event.preventDefault() : null"
                                    style="text-align: right" 
                                    />
                                    <div v-if="ticket.errors.priceLength || ticket.errors.priceEmpty" class="validation-error">
                                        <p v-if="ticket.errors.priceEmpty" class="error">Can't be zero</p>
                                        <p v-if="ticket.errors.priceLength" class="error">Price is too big</p>
                                    </div>
                                </div>
                                <div class="field">
                                    <button @click.prevent="deleteRow(index, ticket)" class="delete-circle">X</button>
                                </div>
                            </div>
                        </div>
                        <div class="c-ticklet-button">
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
                                @input="$v.callAction.$touch"
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
                                @input="$v.ticketUrl.$touch"
                                @blur="active = null"
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
                { id:'', name: 'General', ticket_price: '', description: '', type:this.initializeTypeObject()},
                { id:'', name: 'Student', ticket_price: '', description: '', type:this.initializeTypeObject()},
                { id:'', name: 'Senior', ticket_price: '', description: '', type:this.initializeTypeObject()},
                { id:'', name: 'VIP', ticket_price: '', description: '', type:this.initializeTypeObject()},
                { id:'', name: 'Free', ticket_price: '', description: '', type: {name: 'free',type:'f'}},
                { id:'', name: 'PWYC', ticket_price: '', description: '', type: {name: 'pwyc',type:'p'}},
            ],
            ticketTypeOptions: [
                { name: 'normal', type:'s'},
                { name: 'free', type:'f'},
                { name: 'pwyc', type:'p'},
            ],
            callAction: this.event.call_to_action,
            callActionOptions: ['Get Tickets', 'Sign Up', 'Download','Details'],
            disabled: false,
            active: null,
            modal: false,
            freeTicket: false,
            exit: false,
            selected: '',
            tempErrorName: false,
            temperrors: false,
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
                type: this.initializeTypeObject(),
                ticket_amount: '',
                ticket_price: '',
                errors: this.initializeErrorObject(),
            }
        },

        initializeTypeObject() {
            return {
                name: 'normal',
                type:'s',
            }
        },


        initializeErrorObject() {
            return {
                priceLength: false,
                priceEmpty: false,
                nameLength: false,
                nameEmpty: false,
                nameRepeat: false,
                descriptionLength:false,
                // { name:'priceLength', type:'price', hasError: false},
                // { name:'priceEmpty', type:'price', hasError: false},
                // { name:'nameEmpty', type:'name', hasError: false},
                // { name:'nameLength', type:'name', hasError: false},
                // { name: 'nameRepeat', type:'name', hasError: false }, 
                // { name: 'descriptionLength', type:'description', hasError: false }, 
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
                type: value.type,
                errors: this.initializeErrorObject()
            }
            this.tickets.push(val);
            this.selected = '';
            _.remove(this.ticketOptions, {name: value.name});
        },

        reset() {
            _.forEach(this.tickets, (ticket) => {ticket.errors = {priceLength: false,priceEmpty: false,nameLength: false, nameEmpty: false, nameRepeat: false, descriptionLength:false};
            })
            this.$v.selected.$touch();
        },

        onLoad() {
            axios.get(this.onFetch('tickets'))
            .then(res => {
                for (var i = 0; i < res.data.tickets[0].tickets.length; i++) {
                    let tic = res.data.tickets[0].tickets[i];
                    this.tickets.push({
                        name: tic.name,
                        description: tic.description,
                        ticket_price: tic.ticket_price,
                        type: _.find(this.ticketTypeOptions, { 'type': tic.type }),
                        errors: this.initializeErrorObject()
                    })
                }
                res.data.ticketUrl ? this.ticketUrl = res.data.ticketUrl : '';
            });
        },

        onSubmit(value) {
            let previous = [];
            for (var i = 0; i < this.tickets.length; i++) {
                let tic = this.tickets[i];
                if (tic.ticket_price == 0.00 && tic.type.type == 's') {
                    tic.errors.priceEmpty = true;
                        return false;
                }
                if (tic.ticket_price.length > 7 && tic.type.type == 's') {
                    tic.errors.priceLength = true;
                        return false;
                }
                if (tic.type.type == 'f' || tic.type.type == 'p') {
                    tic.ticket_price = 0.00;
                }
                if (tic.name.length > 18) {
                    tic.errors.nameLength = true;
                        return false;
                }
                if (tic.name.length == 0) {
                    tic.errors.nameEmpty = true;
                        return false;
                }
                if (tic.description && tic.description.length > 50) {
                    tic.errors.descriptionLength = true;
                        return false;
                }
                if (previous.includes(this.tickets[i].name.toLowerCase())) {
                    this.tickets[i].errors.nameRepeat = true;
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
                errors: this.initializeErrorObject(),
                type: this.initializeTypeObject(),
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
        },

    },

    mounted() {
        this.onLoad();
    },

    validations () {
        return {
            callAction: {
                required
            },
            ticketUrl: {
                required,
                url,
            },
            tickets: {
                required
            },
            selected: {

            }
        }
    },

    // validations: {
    //     callAction: {
    //         required
    //     },
    //     ticketUrl: {
    //        url,
    //        required,
    //     },
    //     tickets: {
    //         required,
    //         $each: {
    //             name: {
    //                 required,
    //                 maxLength: maxLength(30),
    //             },
    //             type: {
    //                 type: {
    //                     required
    //                 }
    //             },
    //             ticket_price: {
    //                 required,
    //                 maxLength: maxLength(7),
    //             },
    //             description: {
    //                maxLength: maxLength(60),
    //             },
    //         }
    //     },
    // }
}  
</script>