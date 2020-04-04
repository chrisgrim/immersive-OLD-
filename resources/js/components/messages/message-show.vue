<template>
    <div class="chat">
        <div>
            <div class="ebox" v-if="conversations.modmessages.length">
                <div>
                    <img :src="`/storage/${conversations.modmessages[0].event.thumbImagePath}`" alt="">
                </div>
                <div class="cont">
                    <h3>{{ conversations.modmessages[0].event.name }}</h3>
                </div>
            </div>
        </div>
        <div v-if="conversations.messages.length">
            <div class="row submit">
                <div class="field">
                    <div class="text">
                        <textarea 
                        type="text" 
                        v-model="message" 
                        :class="{ active: activeItem == 'description'}"
                        @click="activeItem = 'description'"
                        @blur="activeItem = null" 
                        rows="4"></textarea>
                    </div>
                    <div class="bottom">
                        <button :class="{bspin : dis}" :disabled="dis" @click="sendMessage">Send message</button>
                    </div>
                </div>
                <div class="user-message" :style="`background:${owner.hexColor}`">
                    <label v-if="owner.largeImagePath" class="profile-image" >
                        <img :src="`/storage/${owner.thumbImagePath}`" :alt="owner.name + `'s account`">
                    </label>
                    <div v-else-if="owner.gravatar" class="profile-image">
                        <img :src="owner.gravatar" :alt="owner.name + `'s account`">
                    </div>
                    <div v-else class="icontext">
                        <h2>{{owner ? owner.name.charAt(0) : ''}}</h2>
                    </div>
                </div>
            </div>
            <div v-if="conversations.messages.length" v-for="message in conversations.messages" class="list">
                <div class="row" v-if="message.user_id == loaduser.id">
                    <div class="field">
                        <div class="text">
                            <div>
                                {{message.message}}
                            </div>
                            <div class="date">
                                {{message.created_at | formatDate}}
                            </div>
                        </div>
                    </div>
                    <div class="user-message" :style="`background:${owner.hexColor}`">
                        <label v-if="owner.largeImagePath" class="profile-image" >
                            <img :src="`/storage/${owner.thumbImagePath}`" :alt="owner.name + `'s account`">
                        </label>
                        <div v-else-if="owner.gravatar" class="profile-image">
                            <img :src="owner.gravatar" :alt="owner.name + `'s account`">
                        </div>
                        <div v-else class="icontext">
                            <h2>{{owner ? owner.name.charAt(0) : ''}}</h2>
                        </div>
                    </div>

                </div>
                <div class="row" v-else="message.user_id == loaduser.id" :class="{inv: message.user_id !== loaduser.id}">
                    <div class="user-message" :style="`background:${responder.hexColor}`">
                        <label v-if="responder.largeImagePath" class="profile-image" >
                            <img :src="`/storage/${responder.thumbImagePath}`" :alt="responder.name + `'s account`">
                        </label>
                        <div v-else-if="responder.gravatar" class="profile-image">
                            <img :src="responder.gravatar" :alt="responder.name + `'s account`">
                        </div>
                        <div v-else class="icontext">
                            <h2>{{responder ? responder.name.charAt(0) : ''}}</h2>
                        </div>
                    </div>
                    <div class="field">
                        <div class="text">
                            <div>
                                {{message.message}}
                            </div>
                            <div class="date">
                                {{message.created_at | formatDate}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div v-if="conversations.modmessages.length" class="row submit">
                <div class="field">
                    <div class="text">
                        <textarea 
                        type="text" 
                        v-model="modmessage" 
                        :class="{ active: activeItem == 'description'}"
                        @click="activeItem = 'description'"
                        @blur="activeItem = null" 
                        rows="4"></textarea>
                    </div>
                    <div class="bottom">
                        <button :class="{bspin : dis}" :disabled="dis" @click="sendMessage">Send message</button>
                    </div>
                </div>
                <div class="user-message" :style="`background:${owner.hexColor}`">
                    <label v-if="owner.largeImagePath" class="profile-image" >
                        <img :src="`/storage/${owner.thumbImagePath}`" :alt="owner.name + `'s account`">
                    </label>
                    <div v-else-if="owner.gravatar" class="profile-image">
                        <img :src="owner.gravatar" :alt="owner.name + `'s account`">
                    </div>
                    <div v-else class="icontext">
                        <h2>{{owner ? owner.name.charAt(0) : ''}}</h2>
                    </div>
                </div>
            </div>
            <div v-if="conversations.modmessages.length" v-for="message in conversations.modmessages" class="list">
                <div class="row" v-if="message.user_id == loaduser.id">
                    <div class="field">
                        <div class="text">
                            <div>
                                {{message.comments}}
                            </div>
                            <div class="date">
                                {{message.created_at | formatDate}}
                            </div>
                        </div>
                    </div>
                    <div class="user-message" :style="`background:${owner.hexColor}`">
                        <label v-if="owner.largeImagePath" class="profile-image" >
                            <img :src="`/storage/${owner.thumbImagePath}`" :alt="owner.name + `'s account`">
                        </label>
                        <div v-else-if="owner.gravatar" class="profile-image">
                            <img :src="owner.gravatar" :alt="owner.name + `'s account`">
                        </div>
                        <div v-else class="icontext">
                            <h2>{{owner ? owner.name.charAt(0) : ''}}</h2>
                        </div>
                    </div>

                </div>
                <div class="row" v-else="message.user_id == loaduser.id" :class="{inv: message.user_id !== loaduser.id}">
                    <div class="user-message" :style="`background:${responder.hexColor}`">
                        <label v-if="responder.largeImagePath" class="profile-image" >
                            <img :src="`/storage/${responder.thumbImagePath}`" :alt="responder.name + `'s account`">
                        </label>
                        <div v-else-if="responder.gravatar" class="profile-image">
                            <img :src="responder.gravatar" :alt="responder.name + `'s account`">
                        </div>
                        <div v-else class="icontext">
                            <h2>{{responder ? responder.name.charAt(0) : ''}}</h2>
                        </div>
                    </div>
                    <div class="field">
                        <div class="text">
                            <div>
                                {{message.comments}}
                            </div>
                            <div class="date">
                                {{message.created_at | formatDate}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

    export default {

        props: ['loaduser', 'loadmessages'],

        components: {
        },

        computed: {
        },

        data() {
            return {
                user: this.loaduser ? this.loaduser : '',
                conversations: this.loadmessages ? this.loadmessages : '',
                anon: 'website-files/default-user-icon.jpg',
                activeItem: null,
                message: '',
                modmessage: '',
                owner: '',
                responder: '',
                dis: false,
                url: '',
                avatar: this.loaduser.thumbImagePath ? `/storage/${this.loaduser.thumbImagePath}` : '',
            }
        },

        methods: {
            sendMessage() {
                this.dis = true;
                let data = {
                    message:this.message ? this.message : '',
                    modmessage: this.modmessage ? this.modmessage : '',
                }
                axios.post(`/conversations/${this.conversations.id}`, data)
                .then(response => {
                    location.reload();
                    console.log(response.data);
                })
                .catch(errorResponse => { 
                    this.validationErrors = errorResponse.response.data.errors 
                    this.dis = false;
                });
            },

            getOwner() {
                console.log(this.loadmessages);
                this.loadmessages.users.forEach(user => {
                    user.id == this.loaduser.id ? this.owner = user : '';
                    user.id !== this.loaduser.id ? this.responder = user : '';
                })
            },

            getUrl() {
                if(!this.conversations.modmessages.length) {return ''}; 
                let arr = this.conversations.modmessages[0].event;
                if (arr.status == 'p') {
                    return this.url = `/events/${arr.slug}`;
                }
                if (arr.status == 'r') {
                    return this.url = `#`;
                }
                if (arr.largeImagePath) {
                    return this.url = `/create-event/${arr.slug}/images`;
                }
                if (arr.advisories) {
                    return this.url = `/create-event/${arr.slug}/images`;
                }
                if (arr.description) {
                    return this.url = `/create-event/${arr.slug}/advisories`;
                }
                if (arr.show_times) {
                    return this.url = `/create-event/${arr.slug}/description`;
                }
                if (arr.category_id) {
                    return this.url = `/create-event/${arr.slug}/shows`;
                }
                if (arr.location_latlon) {
                    return this.url = `/create-event/${arr.slug}/category`;
                }
                if (arr.name) {
                    return this.url = `/create-event/${arr.slug}/location`;
                }
                return this.url = `/create-event/${arr.slug}/title`;
            }
    
        },


        mounted() {
           this.getOwner();
           this.getUrl();
        },

        created() {

        },

        destroyed() {

        },

        filters: {
            formatDate(value) {
                if (value) {
                    return moment(String(value)).format('MMM Do, YYYY')
                }
            }
        },

        validations: {
          
        },


    };
</script>