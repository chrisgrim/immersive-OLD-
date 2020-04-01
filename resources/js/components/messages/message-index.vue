<template>
    <div class="messages">
        <div class="listing-details-block">
            <tabs>
                <tab title="Messages" :active="true" class="tab-events">
                    <div v-if="conversations" v-for="conversation in conversations">
                        <a v-if="conversation.messages.length" :href="`/conversations/${conversation.id}`" class="row">
                            <div v-if="loaduser.id !== user.id" v-for="user in conversation.users" class="user">
                                <div class="user-message" :style="`background:${user.hexColor}`">
                                    <label v-if="user.largeImagePath" class="profile-image" >
                                        <img :src="`/storage/${user.thumbImagePath}`" :alt="user.name + `'s account`">
                                    </label>
                                    <div v-else-if="user.gravatar" class="profile-image">
                                        <img :src="user.gravatar" :alt="user.name + `'s account`">
                                    </div>
                                    <div v-else="user.largeImagePath" class="icontext">
                                        <h2>{{user ? user.name.charAt(0) : ''}}</h2>
                                    </div>
                                </div>
                                <div class="name">
                                    <p><b>{{user.name}}</b></p>
                                    <div v-for="(message, index) in conversation.messages">
                                        <p v-if="index == 0"><span>{{message.updated_at | formatDate}}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div v-for="(message, index) in conversation.messages" class="message">
                                    <p v-if="index == 0"><span>{{ message.message }}</span></p>
                                </div>
                            </div>  
                        </a>
                    </div>
                </tab>
                <tab title="Events" class="tab-events">
                    <div v-if="conversations" v-for="conversation in conversations">
                        <a v-if="conversation.modmessages.length" :href="`/conversations/${conversation.id}`" class="row">
                            <div class="event">
                                <div class="image">
                                    <img :src="`/storage/${conversation.modmessages[0].event.thumbImagePath}`" >
                                </div>
                                <div class="name">
                                    <p><b>{{ conversation.modmessages[0].event.name }}</b></p>
                                    <div v-if="index == 0" v-for="(message, index) in conversation.modmessages">
                                        <p><span>{{message.updated_at | formatDate}}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div v-if="index == 0" v-for="(message, index) in conversation.modmessages" class="message">
                                    <div><b>Notes:</b> <p style="white-space: pre-line;">{{ message.comments }}</p></div>
                                </div>
                            </div>  
                        </a>
                    </div>
                </tab>
            </tabs>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    export default {

        props: ['loaduser'],

        components: {
        },

        computed: {
            lastItem() {

            }
        },

        data() {
            return {
                user: this.loaduser ? this.loaduser : '',
                conversations: '',
                anon: 'website-files/default-user-icon.jpg',
                avatar: this.loaduser.thumbImagePath ? `/storage/${this.loaduser.thumbImagePath}` : '',
            }
        },

        methods: {
            load() {
                axios.get(`/conversations/fetch?timestamp=${new Date().getTime()}`)
                .then(response => {
                    console.log(response.data);
                    this.conversations = response.data;
                })
                .catch(errorResponse => { 
                    this.validationErrors = errorResponse.response.data.errors 
                });

            },
           
            
        },


        mounted() {
            this.load();
        },

        created() {

        },

        destroyed() {

        },

        validations: {
          
        },

        filters: {
            formatDate(value) {
                if (value) {
                    return moment(String(value)).format('MMM Do, YYYY')
                }
            }
        },





    };
</script>