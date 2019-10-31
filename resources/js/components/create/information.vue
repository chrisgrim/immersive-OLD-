<template>
	<div>
		<div>
	    	<h2> Event Details</h2>
	    </div>
	    <div>
	    	<p>Give us the specifics!</p>
	    </div>
        <div class="floating-form">
            <input type="checkbox" v-model="studentPricingCheck" @click="zeroOut()"> Student Pricing<br>
            <input type="checkbox" v-model="vipPricingCheck" @click="zeroOut()"> VIP Pricing<br>
            <input type="checkbox" v-model="seniorPricingCheck" @click="zeroOut()"> Senior Pricing<br>
            <input type="checkbox" v-model="militaryPricingCheck" @click="zeroOut()"> Military Pricing<br>
            <input type="checkbox" v-model="allOtherPricingCheck" @click="zeroOut()"> Any other type of ticket<br>
           
			
            <div class="create-field">

				<label>General Pricing</label>
                <input
				class="create-input" 
				v-model="details.generalPricing"
				:class="{ active: generalActive,'error': $v.details.generalPricing.$error }"
				v-money="price !== null ? money : null" 
				@click="generalActive = true"
		        @blur="generalActive = false"
		        @input="$v.details.generalPricing.$touch"
		 		v-bind="money"
				placeholder=" "/>
				
				<div v-if="$v.details.generalPricing.$error" class="validation-error">
    				<p class="error" v-if="!$v.details.generalPricing.required">Must enter an a general Price </p>
    			</div>
                
            </div>
			<div class="alt-pricing">
	            <div class="create-field" v-if="studentPricingCheck">

					<label>Student Pricing</label>
	                <input 
					v-money="price !== null ? money : null" 
					v-bind="money"
	                type="text" 
	                class="create-input"
	                v-model="details.studentPricing" 
					:class="{ active: studentActive }"
					@click="studentActive = true"
			        @blur="studentActive = false"
	                placeholder=" ">              

	            </div>
	            <div class="create-field" v-if="vipPricingCheck">

					<label>VIP Pricing</label>
	                <input 
					v-money="price !== null ? money : null" 
					v-bind="money"
	                type="text" 
	                class="create-input"
	                v-model="details.vipPricing" 
					:class="{ active: vipActive }"
					@click="vipActive = true"
			        @blur="vipActive = false"
	                placeholder=" ">
	                
	            </div>
	            <div class="create-field" v-if="seniorPricingCheck">

					<label>Senior Pricing</label>
	                <input 
	                type="text" 
					v-money="price !== null ? money : null" 
					v-bind="money"
	                class="create-input"
	                v-model="details.seniorPricing" 
					:class="{ active: seniorActive }"
					@click="seniorActive = true"
			        @blur="seniorActive = false"
	                placeholder=" ">


	                
	            </div>
	            <div class="create-field" v-if="militaryPricingCheck">

					<label>Military Pricing</label>
	                <input 
	                type="text" 
					v-money="price !== null ? money : null" 
					v-bind="money"
	                class="create-input"
	                v-model="details.militaryPricing" 
					:class="{ active: militaryActive }"
					@click="militaryActive = true"
			        @blur="militaryActive = false"
	                placeholder=" ">
	               
	            </div>
	            <div class="create-field" v-if="allOtherPricingCheck">
					
					<label>All Other Pricing</label>
					<textarea 
	                type="text" 
	                class="create-input area"  
	                name="description" 
	                v-model="details.allOtherPricing" 
	                placeholder=" "
	                :class="{ active: otherPricingActive }"
	                @click="otherPricingActive = true"
	                @blur="otherPricingActive = false" 
	                rows="8"></textarea>
	                
	            </div>
			</div>

            <div class="create-field">
				
				<label>Event Website</label>
                <input 
				type="text" 
				class="create-input" 
				v-model="details.websiteUrl"
				:class="{ active: websiteActive,'error': $v.details.websiteUrl.$error }"
				@click="websiteActive = true"
		        @blur="websiteActive = false"
		        @input="$v.details.websiteUrl.$touch"
				placeholder=" ">
				
				<div v-if="$v.details.websiteUrl.$error" class="validation-error">
    				<p class="error" v-if="!$v.details.websiteUrl.required">Must enter an Event Website </p>
					<p class="error" v-if="!$v.details.websiteUrl.url">Must be a Url</p>
    			</div>

            </div>

            <div class="create-field">
				
				<label>Ticket Url</label>
                <input 
				type="text" 
				class="create-input"  
				v-model="details.ticketUrl"
				:class="{ active: ticketActive,'error': $v.details.ticketUrl.$error }"
				@click="ticketActive = true"
		        @blur="ticketActive = false"
		        @input="$v.details.ticketUrl.$touch"
				placeholder=" "/>

				<div v-if="$v.details.ticketUrl.$error" class="validation-error">
    				<p class="error" v-if="!$v.details.ticketUrl.required">Enter a ticket Url, Can be the same as website </p>
					<p class="error" v-if="!$v.details.ticketUrl.url"> Must be a Url </p>
    			</div>

            </div>

			<div class="create-field">

            	<label>Age Restriction</label>
                <input 
                type="text" 
                class="create-input" 
                v-model="details.ageRestriction" 
                :class="{ active: ageActive,'error': $v.details.ageRestriction.$error }"
                placeholder=" "
               	@click="ageActive = true"
		        @blur="ageActive = false"
		        @input="$v.details.ageRestriction.$touch"
                />

				<div v-if="$v.details.ageRestriction.$error" class="validation-error">
    				<p class="error" v-if="!$v.details.ageRestriction.required">Must Provide an age</p>
					<p class="error" v-if="!$v.details.ageRestriction.numeric">Can only be a number</p>
    			</div>
               
            </div>
            
            <div class="">
                <button @click.prevent="submitDetails()" class="create"> Save and Continue </button>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    import { required, numeric, url , decimal} from 'vuelidate/lib/validators'
	import {Money} from 'v-money'

	export default {
		props: {
			event: {
				type:Object,
			},
		},

		components: {
			Money
		},


		data() {
			return {
                details: this.initializeEventObject(),
                eventUrl:_.has(this.event, 'slug') ? `/create-event/${this.event.slug}` : null,
                ageActive: false,
				ticketActive: false,
				websiteActive: false,
				generalActive: false,
				otherPricingActive: false,
				militaryActive: false,
				seniorActive: false,
				studentActive: false,
				vipActive: false,
				studentPricingCheck: this.event.information.studentPricing,
				vipPricingCheck: this.event.information.vipPricing,
				seniorPricingCheck: this.event.information.seniorPricing,
				militaryPricingCheck: this.event.information.militaryPricing,
				allOtherPricingCheck: this.event.information.allOtherPricing,
				price: 123.45,
				money: {
						decimal: '.',
						thousands: '.',
						prefix: '',
						suffix: '',
						precision: 2,
						masked: false
					},

			}
		},

		methods: {
            initializeEventObject() {
                return {
                    websiteUrl: '',
                    ticketUrl: '',
                    ageRestriction: '',
                    generalPricing: '',
                    studentPricing: '',
                    vipPricing: '',
                    seniorPricing: '',
                    militaryPricing: '',
                    allOtherPricing: '',      
                }
            },


			async submitDetails() {

				this.$v.$touch(); 
                if (this.$v.$invalid) { return false; };

                axios.patch(`${this.eventUrl}/information`, this.details )
                .then(response => {
                	console.log(response);
                })
                .catch(errorResponse => {
                   console.log(errorResponse);
                });
            },

            updateEventFields(input) {
                if ((input !== null) && (typeof input === "object") && (input.id !== null)) {
                    this.details = _.pick(input, _.intersection( _.keys(this.details), _.keys(input) ));
                }
            },
		},

        mounted() {
        	this.updateEventFields(this.event.information)
        },

        validations: {
			details: {
				ageRestriction: {
			       required,
			       numeric
			   	},
			   	websiteUrl: {
			       required,
			       url,
			   	},
			   	ticketUrl: {
			       required,
			       url
			   	},
			   	generalPricing: {
			       required,
			   	},
			},
		},

    };



</script>