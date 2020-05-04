<template>
    <div>
        <div class="messages-show">
            <nav class="account-notifications_header desktop">
                <div class="account-notifications_breadcrumbs"><a href="/messages">Inbox</a> > 
                    <span v-if="isMessage">
                        {{ responder.name }}
                    </span>
                    <span v-else>
                        {{ conversations.modmessages[0].event.name }}
                    </span>
                </div>
            </nav>
            <nav class="event-show mobile">
                <div class="back">
                    <a href="/messages">
                        <svg aria-label="Back" role="img" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>
                    </a>
                </div>
            </nav>
            <div class="messages-show-content grid" :class="{single: isMessage}">
                <div v-if="!isMessage">
                    <div class="messages-show-event">
                        <div class="messages-show-event__image">
                             <picture>
                                <source type="image/webp" :srcset="`/storage/${conversations.modmessages[0].event.thumbImagePath}`"> 
                                <img :src="`/storage/${conversations.modmessages[0].event.thumbImagePath.slice(0, -4)}jpg`" :alt="user.name + `'s account`">
                            </picture>
                        </div>
                        <div class="messages-show-event__title">
                            <h3>{{ conversations.modmessages[0].event.name }}</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="messages-show__element grid submit">
                        <div class="field">
                            <div class="messages-show__element-textarea">
                                <textarea 
                                type="text" 
                                v-model="message" 
                                :class="{ active: activeItem == 'description'}"
                                @click="activeItem = 'description'"
                                @blur="activeItem = null" 
                                rows="4"></textarea>
                            </div>
                            <div class="messages-show__submit-bottom">
                                <button :class="{bspin : dis}" :disabled="dis" @click="sendMessage">Send message</button>
                            </div>
                        </div>
                        <div class="message-index__image" :style="`background:${owner.hexColor}`">
                            <label v-if="owner.largeImagePath" class="profile-image" >
                                <picture>
                                    <source type="image/webp" :srcset="`/storage/${owner.thumbImagePath}`"> 
                                    <img :src="`/storage/${owner.thumbImagePath.slice(0, -4)}jpg`" :alt="owner.name + `'s account`">
                                </picture>
                            </label>
                            <div v-else-if="owner.gravatar" class="profile-image">
                                <img :src="owner.gravatar" :alt="owner.name + `'s account`">
                            </div>
                            <div v-else class="message-index__user-noimage">
                                <h2>{{owner ? owner.name.charAt(0) : ''}}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="messages-show__element grid" v-if="message.user_id == loaduser.id" v-for="message in conversationType">
                        <div class="field">
                            <div class="messages-show__element-textarea">
                                <div>
                                    {{message.message ? message.message : message.comments}}
                                </div>
                                <div class="messages-show__element-date">
                                    {{message.created_at | formatDate}}
                                </div>
                            </div>
                        </div>
                        <div class="message-index__image" :style="`background:${owner.hexColor}`">
                            <label v-if="owner.largeImagePath" class="profile-image" >
                                <picture>
                                    <source type="image/webp" :srcset="`/storage/${owner.thumbImagePath}`"> 
                                    <img :src="`/storage/${owner.thumbImagePath.slice(0, -4)}jpg`" :alt="owner.name + `'s account`">
                                </picture>
                            </label>
                            <div v-else-if="owner.gravatar" class="profile-image">
                                <img :src="owner.gravatar" :alt="owner.name + `'s account`">
                            </div>
                            <div v-else class="message-index__user-noimage">
                                <h2>{{owner ? owner.name.charAt(0) : ''}}</h2>
                            </div>
                        </div>
                    </div>
                    <div class="messages-show__element grid" v-else="isResponder(message)" :class="{inv: isResponder(message)}">
                        <div class="message-index__image" :style="`background:${responder.hexColor}`">
                            <label v-if="responder.largeImagePath" class="profile-image" >
                                <picture>
                                    <source type="image/webp" :srcset="`/storage/${responder.thumbImagePath}`"> 
                                    <img :src="`/storage/${responder.thumbImagePath.slice(0, -4)}jpg`" :alt="responder.name + `'s account`">
                                </picture>
                            </label>
                            <div v-else-if="responder.gravatar" class="profile-image">
                                <img :src="responder.gravatar" :alt="responder.name + `'s account`">
                            </div>
                            <div v-else class="message-index__user-noimage">
                                <h2>{{responder ? responder.name.charAt(0) : ''}}</h2>
                            </div>
                        </div>
                        <div class="field">
                            <div class="messages-show__element-textarea">
                                <div>
                                    {{message.message}}
                                </div>
                                <div class="messages-show__element-date">
                                    {{message.created_at | formatDate}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="message-bar-mobile">
            <input 
            type="text"
            v-model="message" 
            :class="{ active: activeItem == 'description'}"
            @click="activeItem = 'description'"
            placeholder="Write message here" 
            @keyup.enter="sendMessage"
            @blur="activeItem = null"
            class="message-bar__input">
            <button :disabled="dis" @click="sendMessage" class="message-bar__submit">
                <svg :class="{disabled : dis}" class="svgbutton" role="presentation" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px; display: block;"><circle cx="12" cy="12" r="12"></circle><g clip-path="url(#clipeSendIcon33)"><path transform="scale(1)" fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 6.29289C11.6834 5.90237 12.3166 5.90237 12.7071 6.29289L16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071C16.3166 12.0976 15.6834 12.0976 15.2929 11.7071L13 9.41421V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V9.41421L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.2929 6.29289Z" fill="white"></path></g><defs><clipPath id="clipeSendIcon33"><rect width="12" height="12" fill="white" transform="translate(6 6)"></rect></clipPath></defs></svg>
            </button>
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
            conversationType() {
                return this.conversations.messages.length ? this.conversations.messages : this.conversations.modmessages
            },
            isResponder() {
                return message => message.user_id !== this.loaduser.id ? true : false;
            },
            isMessage() {
                return this.conversations.messages.length ? true : false;
            }

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
        },


        mounted() {
           this.getOwner();
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