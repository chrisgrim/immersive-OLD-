<template>
    <div>
        <div class="approvebar">
            <div class="comments">
                <div class="field">
                    <label>Mod Comments</label>
                    <textarea 
                    type="text"
                    name="comments" 
                    v-model="comments" 
                    placeholder=" "
                    :class="{ active: commentsActive }"
                    @click="commentsActive = true"
                    @blur="commentsActive = false" 
                    rows="8">
                    </textarea>
                </div>
            </div>
            <div class="buttons">
                <button class="create" @click.prevent="goBack()"> Go Back </button>
                <button class="create" @click.prevent="denied()"> Denied </button>
                <button class="create" @click.prevent="approved()"> Approved </button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            loadevent: {
                type:Object,
            },
        },

        data() {
            return {
                event: this.loadevent,
                comments: '',
                commentsActive: false,
            }
        },

        methods: {
            approved() {
                axios.post(`/approve/${this.event.slug}`)
                .then(response => { 
                    window.location.href = '/finish/events';
                })
                .catch(error => {         
                    this.serverErrors = error.response.data.errors;  
                });
            },

            denied() {
                let data = {
                    comments: this.comments
                };
                axios.post(`/unapprove/${this.event.slug}`, data)
                .then(response => { 
                    window.location.href = '/finish/events';
                })
                .catch(error => {         
                    this.serverErrors = error.response.data.errors;  
                });
            },

            goBack() {
                window.location.href = '/finish/events';
            },
        }


    }

</script>