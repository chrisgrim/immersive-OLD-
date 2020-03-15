<template>
    <div class="profile">
        <div class="body">
            <div class="left">
                <div class="image" v-if="parseFloat(this.auth)!==user.id">
                    <img v-if="this.loaduser.image_path" :src="`${avatar ? avatar : ''}`" alt="">
                    <h2 v-else="this.loaduser.image_path">{{loaduser.name.charAt(0)}}</h2>
                </div>
                <div v-if="parseFloat(this.auth)==user.id" class="image">
                    <div class="icontext" v-if="!this.loaduser.image_path">
                        <h2>{{loaduser.name.charAt(0)}}</h2>
                    </div>
                    <label 
                    class="wrapper"
                    :class="{ imageloaded: avatar, imageloading: onUpClass }"
                    :style="`background:${avatar ? color : ''}`">
                    <image-upload @loaded="onImageUpload"></image-upload>
                    <CubeSpinner :loading="isLoading"></CubeSpinner>
                    <span class="text">
                        <p v-if="onUpClass">Loading</p>
                        <p v-else="onUpClass">Update</p>
                        <p class="error" v-if="validationErrors.wrong" v-text="validationErrors.wrong"></p>
                    </span>
                    </label>


                    <input 
                    type="hidden" 
                    name="profileImagePath"
                    v-model="avatar"
                    @input="$v.avatar.$touch()"
                    />

                    <div v-if="$v.avatar.$error" class="validation-error">
                        <p class="error" v-if="!$v.avatar.fileSize">Image size is over 20MB</p>
                        <p class="error" v-if="!$v.finalImage.fileType">Needs to be a Jpg, Png or Gif</p>
                        <p class="error" v-if="!$v.finalImage.imageRatio">Needs to be at least 400 x 400</p>
                        <p class="error" v-if="!$v.finalImage.auth">you don't have permission to edit</p>
                    </div>
                </div>
            </div>
            <div class="right">
                <div v-show="onUserEdit">
                    <div class="field">
                        <div class="text">
                            <div class="field">
                                <label>User Name</label>
                                <input 
                                type="text" 
                                v-model="user.name"
                                :class="{ active: activeItem == 'user','error': $v.user.name.$error }"
                                @click="activeItem = 'website'"
                                @blur="activeItem = null"
                                @input="$v.user.name.$touch"
                                />
                                <div v-if="$v.user.name.$error" class="validation-error">
                                    <p class="error" v-if="!$v.user.name.required">Must have a name</p>
                                    <p class="error" v-if="!$v.user.name.maxLength">Can't be more than 50 characters</p>
                                    <p class="error" v-if="!$v.user.name.auth">You don't have permission to edit</p>
                                </div>
                            </div>
                            <div class="field">
                                <label> Location </label>
                                <input 
                                ref="autocomplete" 
                                :placeholder="locationPlaceholder"
                                :class="{ active: activeItem == 'location'}"
                                autocomplete="false"
                                onfocus="value = ''" 
                                @click="activeItem = 'location'"
                                @blur="activeItem = null"
                                type="text"
                                />
                            </div>
                            <div class="">
                                <button @click.prevent="submitUser()" class="save"> Save </button>
                                <button @click.prevent="onUserEdit=false" class="cancel"> Cancel </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="!onUserEdit">
                    <div class="name">
                        <h2>{{user.name}}</h2>
                    </div>
                    <div class="info">
                        <div class="age">
                            Member since {{user.created_at | formatDate }}
                        </div>
                        <div v-if="parseFloat(this.auth) == user.id" class="edit" @click="userEdit">
                            Edit profile
                        </div>
                    </div>
                    <div class="loc">
                        <div>
                            Lives Near {{locationPlaceholder}}
                        </div>
                    </div>
                </div>
                <div class="favorites">
                    <div>
                        <h3>Your Favorited Events</h3>
                    </div>
                    <div id="grid">
                        <div v-for="event in events">
                            <event-listing-item :user="auth" :event="event"></event-listing-item>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import _ from 'lodash';
    import ImageUpload from '../layouts/image-upload.vue'
    import Multiselect from 'vue-multiselect'
    import { required, maxLength } from 'vuelidate/lib/validators'
    import CubeSpinner  from '../layouts/loading.vue'
    import moment from 'moment'


    export default {

        props: ['loaduser', 'events', 'loc', 'auth'],

        components: {
            Multiselect, ImageUpload, CubeSpinner
        },

        computed: {
            locationPlaceholder() {
                if (this.location.city) {
                    return this.location.city + ', ' +  this.location.country
                }
                if (this.location.region) {
                    return this.location.region
                }
                if (this.location.country) {
                    return ' the ' + this.location.country
                }
            },
        },

        data() {
            return {
                user: this.loaduser,
                avatar: this.loaduser.image_path ? `url("/storage/${this.loaduser.image_path}")` : `url("/storage/website-files/default-user-icon.jpg")`,
                location: this.loc[0] ? this.loc[0] : {},
                gettingLocation: false,
                errorStr:'',
                finalImage: '',
                activeItem: null,
                isLoading: false,
                onUserEdit: false,
                onUpClass: false,
                validationErrors: '',
                color: '#' + Math.floor(Math.random()*16777215).toString(16),
            }
        },

        methods: {

            userEdit() {
                this.onUserEdit=true;
                this.validationErrors = '';
            },

            onImageUpload(image) {
                this.finalImage = image.file;
                this.finalImage.width = image.width;
                this.finalImage.height = image.height;
                this.validationErrors = '';
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                // this.imageSrc = image.src;
                this.onUpClass = true;
                this.avatar = image.src;
                this.addImage(image);
            },

            setPlace() {
                let place = this.autocomplete.getPlace();
                this.center = L.latLng(place.geometry.location.lat(), place.geometry.location.lng());
                this.getAddressObject(place.address_components, place.geometry.location.lat(), place.geometry.location.lng());
            },

            addImage(image) {

                this.isLoading = true;
                this.dis = true;
                console.log(image);
                let data = new FormData();
                data.append('image', this.finalImage);
                data.append('_method', 'PATCH');
                axios.post(`/users/${this.user.id}`, data)
                .then(response => {
                    this.isLoading = false;
                    this.onUpClass = false;
                    this.dis = false;
                    console.log(response.data)
                })
                .catch(errorResponse => { 
                    console.log(errorResponse.data)
                    errorResponse.data ? this.validationErrors = errorResponse.response.data.errors : this.validationErrors = {wrong: 'sorry! something has gone wrong'}; 
                    this.avatar = '/storage/website-files/default-user-icon.jpg';
                    this.isLoading = false;
                    this.onUpClass = false;
                    this.dis = false; });
            },

            submitUser() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };

                let data = {
                    name: this.user.name,
                    location:this.location
                };

                axios.patch(`/users/${this.user.id}`, data)
                .then(response => {
                    console.log(response.data);
                    this.onUserEdit = false;
                })
                .catch(errorResponse => { 
                    this.validationErrors = errorResponse.response.data.errors 
                });
            },
            // Gets data from Google Maps and inputs into Vue forms correctly
            getAddressObject(address_components, geometryLat, geometryLgn) {
                var ShouldBeComponent = {
                    home: ["street_number"],
                    postal_code: ["postal_code"],
                    street: ["street_address", "route"],
                    region: [
                        "administrative_area_level_1",
                        "administrative_area_level_2",
                        "administrative_area_level_3",
                        "administrative_area_level_4",
                        "administrative_area_level_5"
                    ],
                    city: [
                        "locality",
                        "sublocality",
                        "sublocality_level_1",
                        "sublocality_level_2",
                        "sublocality_level_3",
                        "sublocality_level_4"
                    ],
                    country: ["country"]
                };
                this.location = {
                    home: "",
                    postal_code: "",
                    street: "",
                    region: "",
                    city: "",
                    country: "",
                    latitude: geometryLat,
                    longitude: geometryLgn
                };
                address_components.forEach(component => {
                    for (var shouldBe in ShouldBeComponent) {
                        if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
                            if (shouldBe === "country") {
                                this.location[shouldBe] = component.short_name;
                            } else {
                                this.location[shouldBe] = component.long_name;
                            }
                        }
                    }
                });
            },
        },

        mounted() {
            this.autocomplete = new google.maps.places.Autocomplete(
                (this.$refs.autocomplete),
                {
                    types: ['geocode'],
                    // componentRestrictions: {country: 'us'}
                },
            );
            this.autocomplete.addListener('place_changed', this.setPlace);
            console.log(parseFloat(this.auth) !== this.user.id ? 'yes' : 'no');
        },

        filters: {
            formatDate(value) {
                return value ? moment(String(value)).format('MMM YYYY') : ''
            }
        },

        validations: {
            avatar: {
                fileSize() { 
                    return this.finalImage ? this.finalImage.size < 20971520 : true 
                },
                fileType() {
                    return this.finalImage ? ['image/jpeg','image/png','image/gif'].includes(this.finalImage.type) : true
                },
                imageRatio() {
                    return this.finalImage ? this.finalImage.width > 500 && this.finalImage.height > 500 : true 
                },
                auth() {
                    return this.auth ? this.auth !== this.user.id : true
                },
            },
            user: {
                name: {
                    required,
                    maxLength: maxLength(50),
                    auth() {
                        return this.auth ? this.auth !== this.user.id : true
                    }
                }
            },
        },
    };
</script>