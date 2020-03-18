<template>
    <div class="messages">
        <div class="title">
           <h2>Messages</h2> 
        </div>
        <div v-if="conversations" v-for="conversation in conversations">
            <a v-if="conversation.messages.length" :href="`/conversations/${conversation.id}`" class="row">
                <div v-if="loaduser.id !== user.id" class="user" v-for="user in conversation.users">
                    <div class="user-message" :style="`background:${user.hexColor}`">
                        <label v-if="user.largeImagePath" class="profile-image" >
                            <img :src="`/storage/${user.thumbImagePath}`" :alt="user.name">
                        </label>
                        <div v-else="user.largeImagePath" class="icontext">
                            <h2>{{user ? user.name.charAt(0) : ''}}</h2>
                        </div>
                    </div>
                    <div class="name">
                        <p>{{user.name}}</p>
                    </div>
                </div>
                <div>
                    <div v-for="(message, index) in conversation.messages">
                        <div v-if="index == 0">{{ message.message }}</div>
                    </div>
                </div>  
            </a>
        </div>
        <div v-if="conversations" v-for="conversation in conversations">
            <a v-if="conversation.modmessages.length" :href="`/conversations/${conversation.id}`" class="row">
                <div class="user">
                    <div class="image">
                        <img :src="`/storage/${conversation.modmessages[0].event.largeImagePath}`" >
                    </div>
                    <div>
                        {{ conversation.modmessages[0].event.name }}
                    </div>
                </div>
                <div>
                    <div v-for="(message, index) in conversation.modmessages">
                        <div v-if="index == 0">Notes: {{ message.comments }}</div>
                    </div>
                </div>  
            </a>
        </div>
    </div>
</template>

<script>

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





    };
</script>