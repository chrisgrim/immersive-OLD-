<template>
    <a :href="`/conversations/${conversation.id}`">
        <div class="message-index__element grid">

            <div v-if="isMessage">
                <div v-if="isNotUser(user)" v-for="user in conversation.users" class="message-index__card grid">
                    <div class="message-index__image" :style="`background:${user.hexColor}`">
                        <label v-if="user.largeImagePath">
                            <picture>
                                <source type="image/webp" :srcset="`/storage/${user.thumbImagePath}`"> 
                                <img :src="`/storage/${user.thumbImagePath.slice(0, -4)}jpg`" :alt="user.name + `'s account`">
                            </picture>
                        </label>
                        <div v-else-if="user.gravatar">
                            <img :src="user.gravatar" :alt="user.name + `'s account`">
                        </div>
                        <div v-else="user.largeImagePath" class="message-index__user-noimage">
                            <h2>{{user ? user.name.charAt(0) : ''}}</h2>
                        </div>
                    </div>
                    <div class="message-index__name">
                        <p><b>{{user.name}}</b></p>
                        <div v-if="firstMessage(index)" v-for="(message, index) in conversation.messages" class="desktop">
                            <p><span>{{new Date(message.updated_at) | dateFormat('MMM DD, YYYY')}}</span></p>
                        </div>
                        <div v-if="firstMessage(index)" v-for="(message, index) in conversation.messages" class="message-index__message mobile">
                        <p><span>{{ message.message }}</span></p>
                    </div>
                    </div>
                </div>
            </div>

            <div v-else class="message-index__card grid">
                <div class="message-index__image">
                    <picture>
                        <source type="image/webp" :srcset="`/storage/${conversation.event.thumbImagePath}`"> 
                        <img :src="`/storage/${conversation.event.thumbImagePath.slice(0, -4)}jpg`" alt="message image">
                    </picture>
                </div>
                <div class="message-index__name">
                    <p><b>{{conversation.event.name}}</b></p>
                    <div v-if="firstMessage(index)" v-for="(message, index) in conversation.modmessages" class="desktop">
                        <p><span>{{ new Date(message.updated_at) | dateFormat('MMM DD, YYYY')}}</span></p>
                    </div>
                    <div v-if="firstMessage(index)" v-for="(message, index) in conversation.modmessages" class="message-index__message mobile">
                        <p><span>{{ message.comments }}</span></p>
                    </div>
                </div>
            </div>

            <div v-if="isMessage">
                <div v-if="firstMessage(index)" v-for="(message, index) in conversation.messages" class="message-index__message desktop">
                    <p><span>{{ message.message }}</span></p>
                </div>
                <div v-if="firstMessage(index)" v-for="(message, index) in conversation.messages" class="message-index__mdates mobile">
                    <p><span>{{ new Date(message.updated_at) | dateFormat('MMM DD, YYYY')}}</span></p>
                </div>
            </div>

            <div v-else>
                <div v-if="firstMessage(index)" v-for="(message, index) in conversation.modmessages" class="message-index__message desktop">
                    <p><span>{{ message.comments  }}</span></p>
                </div>
                <div v-if="firstMessage(index)" v-for="(message, index) in conversation.modmessages" class="message-index__mdates mobile">
                    <p><span>{{ new Date(message.updated_at) | dateFormat('MMM DD, YYYY')}}</span></p>
                </div>
            </div> 

        </div>
    </a>
</template>

<script>
    export default {
        props: {
            conversation: { type:Object },
            loaduser: { type:Object},
        },

        computed: {
            isNotUser() {
                return user => user.id !== this.loaduser.id ? true : false;
            },
            firstMessage() {
                return index => index == 0 ? true : false;
            },
            isMessage() {
                return this.conversation.event ? false : true
            }
        },

        data() {
            return {

            }
        },

        methods: {
          
        },

        mounted() {

        },



    };
</script>