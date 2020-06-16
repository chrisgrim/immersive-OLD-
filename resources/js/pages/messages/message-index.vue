<template>
    <div class="message-index">
        <div class="message-index__title mobile">
            <h3>Inbox</h3>
        </div>
        <div class="listing-details-block">
            <tabs>
                <tab v-if="userConversations && userConversations.length" title="Messages" :notification="user.unread=='m'" :active="true" class="tab-events">
                    <div>
                        <div v-for="conversation in userConversations">
                            <MessageIndexTab :conversation="conversation" :loaduser="loaduser"></MessageIndexTab>
                        </div>
                    </div>
                </tab>
                <tab v-if="eventConversations && eventConversations.length" title="Events" :notification="user.unread=='e'" class="tab-events">
                    <div>
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
    
    import MessageIndexTab from '../messages/components/message-index-tab.vue'
    export default {

        props: ['loaduser', 'conversations'],

        components: { MessageIndexTab },

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

            }
        },

        methods: {
                
        },

        validations: {
          
        },





    };
</script>