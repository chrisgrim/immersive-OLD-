<template>
    <div class="message-index">
        <div class="message-index__title mobile">
            <h3>Inbox</h3>
        </div>
        <div class="listing-details-block">
            <tabs>
                <tab title="Messages" :notification="user.unread=='m'" :active="true" class="tab-events">
                    <div v-if="conversations">
                        <div v-for="conversation in userConversations">
                            <MessageIndexTab :conversation="conversation" :loaduser="loaduser"></MessageIndexTab>
                        </div>
                    </div>
                </tab>
                <tab title="Events" :notification="user.unread=='e'" class="tab-events">
                    <div v-if="conversations">
                        <div v-for="conversation in eventConversations">
                            <MessageIndexTab :conversation="conversation" :loaduser="loaduser"></MessageIndexTab> 
                        </div>
                    </div>
                </tab>
            </tabs>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    import MessageIndexTab from '../messages/components/message-index-tab.vue'
    export default {

        props: ['loaduser'],

        components: {
            MessageIndexTab
        },

        computed: {
            userConversations() {
                return this.conversations.filter(function (conversation) {
                    return conversation.messages.length;
                })
            },
            eventConversations() {
                return this.conversations.filter(function (conversation) {
                    return conversation.modmessages.length;
                })
            },
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





    };
</script>