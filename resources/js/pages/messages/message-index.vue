<template>
    <div class="message-index">
        <div class="message-index__title mobile">
            <h3>Inbox</h3>
        </div>
        <div class="listing-details-block">
            <tabs>
                <tab v-if="conversations && conversations.length" title="Messages" :notification="user.unread=='m'" :active="true" class="tab-events">
                    <div>
                        <div v-for="conversation in conversations">
                            <MessageIndexTab :conversation="conversation" :loaduser="loaduser"></MessageIndexTab>
                        </div>
                    </div>
                    <load-more @intersect="intersected('message')"></load-more> 
                </tab>
                <tab v-if="eventConversations && eventConversations.length" title="Events" :notification="user.unread=='e'" class="tab-events">
                    <div>
                        <div v-for="conversation in eventConversations">
                            <MessageIndexTab :conversation="conversation" :loaduser="loaduser"></MessageIndexTab> 
                        </div>
                    </div>
                    <load-more @intersect="intersected('event')"></load-more> 
                </tab>
            </tabs>
        </div>
    </div>
</template>

<script>
    import LoadMore  from '../../components/LoadMore.js'
    import MessageIndexTab from '../messages/components/message-index-tab.vue'
    export default {

        props: ['loaduser'],

        components: { MessageIndexTab, LoadMore },

        computed: {
            // userConversations() {
            //     return this.conversations.filter(function (conversation) {
            //         return conversation.messages.length;
            //     })
            // },
            // eventConversations() {
            //     return this.conversations.filter(function (conversation) {
            //         return conversation.modmessages.length;
            //     })
            // },
        },

        data() {
            return {
                user: this.loaduser ? this.loaduser : '',
                conversations: [],
                eventConversations: [],
                messagePagination: '',
                eventMessagePagination: '',
                messagePage: 1,
                eventMessagePage: 1,
                limit: 10,

            }
        },

        methods: {
            intersected(value) {
                if( this.messagePagination.last_page < this.messagePage && value == 'message' ) {return false};
                if( this.eventMessagePagination.last_page < this.eventMessagePage && value == 'event') {return false};
                console.log('test');
                this.onLoadMore(value);
     
            },
            onLoad() {
                axios.get('/conversations/fetch/messages')
                .then(res => {
                    this.conversations = res.data.data;
                    this.messagePagination = res.data;
                    this.messagePage = res.data.current_page + 1;
                });
                axios.get('/conversations/fetch/eventmessages')
                .then(res => {
                    this.eventConversations = res.data.data;
                    this.eventMessagePagination = res.data;
                    this.eventMessagePage = res.data.current_page + 1;
                });
            },

            onLoadMore(value) {
                let url = value == 'event' ? `/conversations/fetch/eventmessages?page=${this.eventMessagePage}` : `/conversations/fetch/messages?page=${this.messagePage}`
                axios.get(url)
                .then(res => {
                    if (value == 'event') {
                        this.eventConversations = this.eventConversations.concat(res.data.data);
                        this.eventMessagePagination = res.data;
                        this.eventMessagePage = res.data.current_page + 1;
                    }
                    if (value == 'message') {
                        this.conversations = this.conversations.concat(res.data.data);
                        this.messagePagination = res.data;
                        this.messagePage = res.data.current_page + 1;
                    }
                })
                .catch(errorResponse => { 
                   console.log(errorResponse.data);
                });
            },
        },

        created() {
            this.onLoad();
        },

        validations: {
          
        },





    };
</script>