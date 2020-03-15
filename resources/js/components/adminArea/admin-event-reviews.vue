<template>
    <div class="reviewevent">
        <div class="">
            <div class="title">
                <h1>Add Reviews to events</h1>
                <div class="add">
                    <button @click.prevent="add = true"><p>+</p></button>
                </div>
            </div>
        </div>

        <div v-if="add" class="new">
            <div class="content">
                <div class="event">
                    <label>Event</label>
                    <multiselect 
                    v-model="event" 
                    :options="events" 
                    open-direction="bottom"
                    placeholder="Select the event"
                    label="name"
                    :show-labels="false"
                    :internal-search="false"
                    :options-limit="30"
                    :class="{ active: isActive == 'event','error': $v.event.$error}"
                    :limit="5"  
                    track-by="name"
                    @click="isActive = 'event'"
                    @blur="isActive = null"
                    @open="loadEvents"
                    @search-change="loadEvents"
                    @input="$v.event.$touch"
                    :show-no-results="false"
                    :allow-empty="false">
                        <template 
                        slot="singleLabel" 
                        slot-scope="props">
                            <img 
                            class="option__image" 
                            :src="'/storage/' + props.option.thumbImagePath" 
                            :alt="props.option.name">
                            <span class="option__desc">
                                <span class="option__title">{{ props.option.name }}
                                </span>
                            </span
                        ></template>
                    </multiselect> 
                    <div v-if="$v.event.$error" class="validation-error">
                        <p class="error" v-if="!$v.event.required">Please select event</p>
                    </div>
                </div>
                <div class="field">
                    <label>Reviewer</label>
                    <multiselect 
                    v-model="reviewername" 
                    :show-labels="false"
                    :options="reviewerList"
                    :class="{ active: isActive == 'name','error': $v.reviewername.$error }"
                    :multiple="false" 
                    tag-placeholder="Add this as new tag"
                    :taggable="true" 
                    tag-position="bottom"
                    placeholder="Select reviewer or add your own" 
                    open-direction="bottom"
                    @tag="addTag"
                    @input="assignUrl(reviewername)"
                    @click="isActive = 'name'"
                    @blur="isActive = null">
                    </multiselect>
                    <div v-if="$v.reviewername.$error" class="validation-error">
                        <p class="error" v-if="!$v.reviewername.required">Please add reviews name</p>
                    </div>
                </div>
                <div class="field">
                    <label>Review URL</label>
                    <input 
                    type="text" 
                    v-model="url" 
                    placeholder="Link to the review"
                    :class="{ active: isActive == 'url','error': $v.url.$error}"
                    @click="isActive = 'url'"
                    @input="$v.url.$touch"
                    @blur="isActive = null"
                     />
                    <div v-if="$v.url.$error" class="validation-error">
                        <p class="error" v-if="!$v.url.required">Please add url</p>
                    </div>
                </div>
                <div class="rank">
                    <label>Rank</label>
                    <multiselect 
                    v-model="rank" 
                    :options="rankOptions"
                    :show-labels="false"
                    placeholder="Leave blank for default Rank of 5 (1 being most important)"
                    open-direction="bottom"
                    :class="{ active: isActive == 'rank'}"
                    @click="isActive = 'rank'"
                    @blur="isActive = null"
                    :preselect-first="false">
                    </multiselect>
                </div>
            </div>
            <div class="content">
                <label>Review</label>
                <textarea 
                type="textarea" 
                v-model="review"
                rows="6"
                placeholder="Review snippet (no longer than 120 characters)"
                :class="{ active: isActive == 'review','error': $v.review.$error}"
                @click="isActive = 'review'"
                @input="$v.review.$touch"
                @blur="isActive = null"
                 />
                </textarea>
                <div v-if="$v.review.$error" class="validation-error">
                    <p class="error" v-if="!$v.review.required">Please add review snippet.</p>
                    <p class="error" v-if="!$v.review.maxLength">Please keep it under 120 letters.</p>
                </div>
            </div>
            <div class="content">
                <button @click.prevent="addReview">Add Review</button>
            </div>
        </div>

        <div class="listing">
            <div>
                <h2>Latest Reviews</h2>
            </div>
            <div class="list" v-for="(item, index) in reviews">
                <div class="field">
                    {{item.event.name}}
                </div>
                <div class="field">
                    <input 
                    type="text" 
                    v-model="item.reviewer_name" 
                    placeholder="Reviewer's name"
                    :class="{ active: isActive == 'reviewername'}"
                    @click="isActive = 'reviewername'"
                    @blur="updateReview(item, 'name')"
                     />
                </div>
                <div class="field">
                    <input 
                    type="text" 
                    v-model="item.url" 
                    placeholder="Link to the review"
                    :class="{ active: isActive == 'url'}"
                    @click="isActive = 'url'"
                    @blur="updateReview(item, 'url')"
                     />
                </div>
                <div class="field">
                    <textarea 
                    type="textarea" 
                    v-model="item.review"
                    rows="6"
                    placeholder="Review snippet (no longer than 120 characters)"
                    :class="{ active: isActive == 'review'}"
                    @click="isActive = 'review'"
                    @blur="updateReview(item, 'review')"
                     />
                    </textarea>
                </div>
                <div class="field">
                    <multiselect 
                    v-model="item.rank" 
                    :options="rankOptions"
                    :show-labels="false"
                    placeholder="Leave blank for default Rank of 5 (1 being most important)"
                    open-direction="bottom"
                    :class="{ active: isActive == 'rank'}"
                    @input="updateReview(item, 'rank')"
                    :preselect-first="false">
                    </multiselect>
                </div>
                <button @click.prevent="showModal(item, 'delete')" class="delete-circle"><p>X</p></button>
            </div>
        </div>
        <modal v-show="modal == 'delete'" @close="modal = null">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting the review {{selectedModal.name}}.</p>
            </div>
            <div slot="footer">
                <button class="btn del" @click.prevent="deleteReview(selectedModal)">Delete</button>
            </div>
        </modal>
    </div>
</template>

<script>
    
    import { required,url,maxLength } from 'vuelidate/lib/validators';
    import Multiselect from 'vue-multiselect'


    export default {

        components: { Multiselect },

        data() {
            return {
                event: '',
                events: [],
                add: false,
                rank: '',
                rankOptions: ['1', '2', '3', '4', '5'],
                modal: '',
                isLoading: '',
                isActive: '',
                reviewername: '',
                image_path: '',
                review: '',
                reviews: [],
                url: '',
                selectedModal: '',
                reviewerList: ['No Procenium', 'Escape Room Artist'],
            }
        },

        computed: {

        },

        methods: {

            loadEvents (query) {
                axios.get('/api/admin/search/events', { params: { keywords: query } })
                .then(response => {
                    this.events = response.data;
                });
            },

            assignUrl(arr) {
                this.$v.reviewername.$touch;
                if(arr == 'No Procenium') {
                   this.image_path = '/reviews/nopro.png' 
                   return this.url = 'https://noproscenium.com/'
                }
                return this.url = '';
            },

            addReview() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false };
                let data = {
                    reviewername: this.reviewername,
                    review: this.review,
                    url: this.url,
                    rank: this.rank,
                    event: this.event,
                }
                axios.post('/reviewevents/', data)
                 .then(response => {
                    location.reload();
                })
            },

            showModal(item, arr) {
                this.selectedModal = item;
                this.modal = arr;
            },

            deleteReview(review) {
                axios.delete(`/reviewevents/${review.id}`)
                .then(response => { 
                    this.modal = null;
                    this.loadReviews();
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            loadReviews() {
                axios.get('/reviewevents/')
                .then(response => {
                    console.log(response.data);
                    this.reviews = response.data;
                })
                .catch(error => { this.serverErrors = error.response.data.errors; });
            },

            updateReview(review, arr) {
                let data = new FormData();
                arr == 'name' ? data.append('reviewer_name', review.reviewer_name) : '';
                arr == 'url' ? data.append('url', review.url) : '';
                arr == 'review' ? data.append('review', review.review) : '';
                arr == 'rank' ? data.append('rank', review.rank) : '';
                data.append('_method', 'PATCH');
                axios.post(`/reviewevents/${review.id}`, data)
                .then(response => { 
                    console.log(response.data)
                })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            asyncGenerateUserList (query) {
                axios.get('/api/search/user/list', { params: { keywords: query } })
                .then(response => {
                    console.log(response.data);
                    this.users = response.data;
                });
            },

            addTag (newTag) {
                this.reviewerList.push(newTag)
                this.reviewername = newTag;
            },
            
        },

        created() {
            this.loadReviews()
        },

        validations: {
            event: {
                required,
            },
            reviewername: {
                required,
            },
            url: {
                required,
                url
            },
            review: {
                required,
                maxLength: maxLength(120)
            },
        },
    }

</script>