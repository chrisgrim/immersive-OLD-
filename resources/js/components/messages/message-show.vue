<template>
    <div class="chat">
        <div class="row submit">
            <div class="field">
                <div class="text">
                    <textarea 
                    type="text" 
                    v-model="message" 
                    :class="{ active: activeItem == 'description'}"
                    @click="activeItem = 'description'"
                    @blur="activeItem = null" 
                    rows="8"></textarea>
                </div>
                <div class="bottom">
                    <button @click="sendMessage">Send message</button>
                </div>
            </div>
            <div class="image">
                <img :src="`/storage/${owner.image_path ? owner.image_path : anon}`" :alt="user.name">
            </div>
        </div>
        <div v-for="message in conversations.messages" class="list">
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
                <div class="image">
                    <img :src="`/storage/${message.user_id == loaduser.id ? owner.image_path ? owner.image_path : anon : responder.image_path ? responder.image_path : anon}`" alt="message">
                </div>
            </div>
            <div class="row" v-else="message.user_id == loaduser.id" :class="{inv: message.user_id !== loaduser.id}">
                <div class="image">
                    <img :src="`/storage/${message.user_id == loaduser.id ? owner.image_path ? owner.image_path : anon : responder.image_path ? responder.image_path : anon}`" alt="message">
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
                owner: '',
                responder: ''
            }
        },

        methods: {
            sendMessage() {
                let data = {message:this.message}
                axios.post(`/conversations/${this.conversations.id}`, data)
                .then(response => {
                    location.reload();
                    console.log(response.data);
                })
                .catch(errorResponse => { 
                    this.validationErrors = errorResponse.response.data.errors 
                });
            },

            getOwner() {
                console.log(this.loadmessages);
                this.loadmessages.users.forEach(user => {
                    user.id == this.loaduser.id ? this.owner = user : '';
                    user.id !== this.loaduser.id ? this.responder = user : '';
                })
            }
    
            
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