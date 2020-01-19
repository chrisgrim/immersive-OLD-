<template>
    <div class="profile-body">
        <div class="create-field">
            <label>Organization Name</label>
            <input 
            type="text" 
            class="create-input" 
            v-model="organizer.name"
            :class="{ active: nameActive,'error': $v.organizer.name.$error }"
            @click="nameActive = true"
            @blur="nameActive = false"
            @input="$v.organizer.name.$touch"
            placeholder=" "
            />
            <div v-if="$v.organizer.name.$error" class="validation-error">
                <p class="error" v-if="!$v.organizer.name.required">Must have a organizer name </p>
            </div>
        </div>
        <div class="">
            <button @click.prevent="submitUser()" class="create"> Update </button>
        </div>
    </div>
</template>
<script>
    import _ from 'lodash';
    import ImageUpload from '../layouts/image-upload.vue'
    import Multiselect from 'vue-multiselect';
    import { required } from 'vuelidate/lib/validators'




    export default {

        props: ['loadorganizer'],

        components: {
            Multiselect, ImageUpload
        },

        computed: {
        },

        data() {
            return {
                organizer:this.loadorganizer,
                location: {},
                finalImage: '',
                nameActive: false,
                content: '',
                options: {
                }
            }
        },

        methods: {


            submitUser() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };

                let data = {
                    name: this.user.name
                };

                axios.patch(`/users/${this.user.id}`, data)
                .then(response => {
                    console.log(response.data);
                })
                .catch(errorResponse => { 
                    this.validationErrors = errorResponse.response.data.errors 
                });

            }
            
        },


        mounted() {

        },

        validations: {
            organizer: {
                name: {
                    required
                }
            },
        },





    };
</script>