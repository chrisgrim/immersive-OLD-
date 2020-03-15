<template>
    <div class="chat">
        <div class="row submit" v-if="conversations.messages.length">
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
                    <button :class="{bspin : dis}" :disabled="dis" @click="sendMessage">Send message</button>
                </div>
            </div>
            <div class="image">
                <img :src="`/storage/${owner.image_path ? owner.image_path : anon}`" :alt="user.name">
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
        <div v-if="conversations.modmessages.lenght">
            <h3>{{ conversations.modmessages[0].event.name }} Comments</h3>
        </div>
        <div v-for="message in conversations.modmessages" class="list">
            <div class="row">
                <div class="field">
                    <div class="text">
                        <a :href="url">
                            <div>
                                {{message.comments}}
                            </div>
                        </a>
                        <div class="date">
                            {{message.created_at | formatDate}}
                        </div>
                    </div>
                </div>
                <div class="image">
                    <img :src="`/storage/${message.user_id == loaduser.id ? owner.image_path ? owner.image_path : anon : responder.image_path ? responder.image_path : anon}`" alt="message">
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
                responder: '',
                dis: false,
                url: '',
            }
        },

        methods: {
            sendMessage() {
                this.dis = true;
                let data = {message:this.message}
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
                console.log(arr.approval_process);
                if (arr.approval_process == 'approved') {
                    return this.url = `/events/${arr.slug}`;
                }
                if (arr.approval_process == 'ready') {
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