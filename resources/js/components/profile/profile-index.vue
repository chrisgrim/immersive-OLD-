<template>
    <div class="profile">
        <div class="body">
            <div class="left">
                <div v-if="!onSelf || !user.email_verified_at">
                    <div v-if="avatar" class="image non" :style="`background:url('/storage/${avatar}')`">
                    </div>
                    <div v-else-if="user.gravatar" class="image non" :style="`background:url('${user.gravatar}')center no-repeat;background-size: cover;`"></div>
                    <div v-else class="image non" :style="`background:${user.hexColor}`">
                        <h2>{{loaduser.name.charAt(0)}}</h2>
                    </div>
                </div>
                <div v-else class="image">                   
                    <label 
                    v-if="avatar"
                    class="wrapper"
                    :class="{ imageloaded: avatar, imageloading: onUpClass }"
                    :style="`background:url('/storage/${avatar}')`">
                    <image-upload @loaded="onImageUpload"></image-upload>
                    <CubeSpinner :loading="isLoading"></CubeSpinner>
                    <span class="text">
                        <p v-if="onUpClass">Loading</p>
                        <p v-else="onUpClass">Update</p>
                        <p class="error" v-if="validationErrors.wrong" v-text="validationErrors.wrong"></p>
                    </span>
                    </label>    
                    <label
                    v-else-if="user.gravatar"
                    class="wrapper"
                    :class="{ imageloaded: avatar, imageloading: onUpClass }"
                    :style="`background:url('${user.gravatar}')center no-repeat;background-size: cover;`">
                    <image-upload @loaded="onImageUpload"></image-upload>
                    <CubeSpinner :loading="isLoading"></CubeSpinner>
                    <span class="text">
                        <p v-if="onUpClass">Loading</p>
                        <p v-else="onUpClass">Update</p>
                        <p class="error" v-if="validationErrors.wrong" v-text="validationErrors.wrong"></p>
                    </span>
                    </label>
                    <div v-else class="image">
                        <div class="icontext">
                            <h2>{{loaduser.name.charAt(0)}}</h2>
                        </div>
                        <label 
                        class="wrapper"
                        :class="{ imageloaded: avatar, imageloading: onUpClass }"
                        :style="`background:${user.hexColor}`">
                        <image-upload @loaded="onImageUpload"></image-upload>
                        <CubeSpinner :loading="isLoading"></CubeSpinner>
                        <span class="text">
                            <p v-if="onUpClass">Loading</p>
                            <p v-else="onUpClass">Update</p>
                            <p class="error" v-if="validationErrors.wrong" v-text="validationErrors.wrong"></p>
                        </span>
                        </label>
                    </div>

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
                                :placeholder="locationPlaceholder ? locationPlaceholder : 'Choose your location'"
                                :class="{ active: activeItem == 'location'}"
                                autocomplete="false"
                                onfocus="value = ''" 
                                @click="activeItem = 'location'"
                                @blur="activeItem = null"
                                type="text"
                                />
                            </div>
                            <div class="field">
                                <label> Email </label>
                                <input 
                                type="email" 
                                v-model="user.email"
                                :class="{ active: activeItem == 'email','error': $v.user.email.$error }"
                                @click="activeItem = 'email'"
                                @blur="activeItem = null"
                                @input="$v.user.email.$touch"
                                />
                                <div v-if="$v.user.email.$error" class="validation-error">
                                    <p class="error" v-if="!$v.user.email.required">Must have an email</p>
                                    <p class="error" v-if="!$v.user.email.email">Must be a valid email</p>
                                    <p class="error" v-if="!$v.user.email.auth">You don't have permission to edit</p>
                                </div>
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
                        <div v-if="onSelf && user.email_verified_at" class="edit" @click="userEdit">
                            Edit profile
                        </div>
                        <button :disabled="dis" @click.prevent="resend" class="ver" v-if="onSelf && !user.email_verified_at && !onSent">
                            Please verify your account.
                        </button>
                        <div class="ver a" v-if="onSelf && !user.email_verified_at && onSent">
                            Please check your email.
                        </div>
                    </div>
                    <div class="loc" v-if="location.latitude">
                        <div>
                            Lives near <span style="font-weight:600;color:#616161">{{locationPlaceholder}}</span> 
                            }
                        </div>
                    </div>
                </div>
                <div class="favorites" v-if="onSelf">
                    <div>
                        <h3>Your Favorited Events</h3>
                    </div>
                    <div id="grid">
                        <div v-for="event in events">
                            <event-listing-item :user="auth" :event="event"></event-listing-item>
                        </div>
                    </div>
                </div>
                <div class="logout">
                    <button @click.prevent="logout()">Log out</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import _ from 'lodash';
    import ImageUpload from '../layouts/image-upload.vue'
    import Multiselect from 'vue-multiselect'
    import { required, maxLength, email } from 'vuelidate/lib/validators'
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

            visible() {
                return this.webp ? 'is webp able' : 'is not webp able';
            }
        },

        data() {
            return {
                user: this.loaduser,
                avatar: '',
                location: this.loc[0] ? this.loc[0] : {},
                gettingLocation: false,
                errorStr:'',
                finalImage: '',
                onSelf: parseFloat(this.auth) == this.loaduser.id ? true : false,
                activeItem: null,
                isLoading: false,
                onUserEdit: false,
                onUpClass: false,
                validationErrors: '',
                onSent: false,
                dis: false,
                webp: '',
            }
        },

        methods: {

            userEdit() {
                this.onUserEdit=true;
                this.validationErrors = '';
            },

            canUseWebP() {
                let webp = (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
                if (this.loaduser.thumbImagePath && webp) {
                    return this.avatar = this.loaduser.thumbImagePath
                };
                if (this.loaduser.thumbImagePath) {
                    return this.avatar = `${this.loaduser.thumbImagePath.slice(0, -4)}jpg`
                }
            },

            logout(){
                axios.post('/logout').
                    then(response => {
                        if (response.status === 302 || 401) {
                            window.location.href = '/';
                        } else {
                        // throw error and go to catch block
                        }
                    }).catch(error => {
                });
            },

            resend() {
                this.dis = true;
                axios.post(`/email/resend`)
                .then(response => {
                    this.onSent = true;
                    this.dis = false;
                    console.log(response.data)
                })
                .catch(errorResponse => { 
                    console.log(errorResponse.data);
                })
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
                    location.reload();
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
                    location:this.location,
                    email: this.user.email,
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
            this.canUseWebP();
        },

        filters: {
            formatDate(value) {
                return value ? moment(String(value)).format('MMM YYYY') : ''
            },
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
                },
                email: {
                    required,
                    email,
                    auth() {
                        return this.auth ? this.auth !== this.user.id : true
                    }
                }
            },
        },
    };
</script>