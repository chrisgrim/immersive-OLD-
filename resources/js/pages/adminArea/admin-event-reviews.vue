<template>
    <div class="reviewevent">
        <div class="">
            <div class="title">
                <h1>Add Reviews to events</h1>
                <div class="add">
                    <button @click.prevent="add = true">
                        <IconSvg type="add" />
                    </button>
                </div>
            </div>
        </div>

        <template v-if="add">
            <div class="new">
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
                            track-by="name"
                            :class="{ active: isActive == 'event','error': $v.event.$error}"
                            :limit="5"
                            @click="isActive = 'event'"
                            @blur="isActive = null"
                            @open="onSearch"
                            @search-change="onSearch"
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
                                </span>
                            </template>
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
                            @blur="isActive = null" />
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
                            @blur="isActive = null">
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
                            :preselect-first="false" />
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
                        @blur="isActive = null" />
                    <div v-if="$v.review.$error" class="validation-error">
                        <p class="error" v-if="!$v.review.required">Please add review snippet.</p>
                        <p class="error" v-if="!$v.review.maxLength">Please keep it under 1200 letters.</p>
                    </div>
                </div>
                <div class="content">
                    <button @click.prevent="onSubmit">
                        Add Review
                    </button>
                </div>
            </div>
        </template>

        <div class="listing">
            <div>
                <h2>Latest Reviews</h2>
            </div>
            <div 
                class="list" 
                :key="item.id"
                v-for="(item) in reviews.data">
                <div class="field">
                    {{ item.event.name }}
                </div>
                <div class="field">
                    <input 
                        type="text" 
                        v-model="item.reviewer_name" 
                        placeholder="Reviewer's name"
                        :class="{ active: isActive == 'reviewername'}"
                        @click="isActive = 'reviewername'"
                        @blur="onUpdate(item)">
                </div>
                <div class="field">
                    <input 
                        type="text" 
                        v-model="item.url" 
                        placeholder="Link to the review"
                        :class="{ active: isActive == 'url'}"
                        @click="isActive = 'url'"
                        @blur="onUpdate(item)">
                </div>
                <div class="field">
                    <textarea 
                        type="textarea" 
                        v-model="item.review"
                        rows="6"
                        placeholder="Review snippet"
                        :class="{ active: isActive == 'review'}"
                        @click="isActive = 'review'"
                        @blur="onUpdate(item)" />
                </div>
                <div class="field">
                    <multiselect 
                        v-model="item.rank" 
                        :options="rankOptions"
                        :show-labels="false"
                        placeholder="Leave blank for default Rank of 5 (1 being most important)"
                        open-direction="bottom"
                        :class="{ active: isActive == 'rank'}"
                        @input="onUpdate(item)"
                        :preselect-first="false" />
                </div>
                <button 
                    @click.prevent="showModal(item, 'delete')" 
                    class="delete-circle">
                    <IconSvg type="delete" />
                </button>
            </div>
            <pagination 
                :limit="1"
                :list="reviews"
                @selectpage="onLoad" />
        </div>
        <modal 
            v-if="modal == 'delete'" 
            @close="modal = null">
            <div slot="header">
                <div class="circle del">
                    <p>X</p>
                </div>
            </div>
            <div slot="body"> 
                <h3>Are you sure?</h3>
                <p>You are deleting the review {{ selectedModal.name }}.</p>
            </div>
            <div slot="footer">
                <button 
                    class="btn del" 
                    @click.prevent="onDelete(selectedModal)">
                    Delete
                </button>
            </div>
        </modal>
    </div>
</template>

<script>
    
    import { required,url,maxLength } from 'vuelidate/lib/validators';
    import Multiselect from 'vue-multiselect'
    import IconSvg from '../../components/Svg-icon'
    import Pagination  from '../../components/pagination.vue'

    export default {

        components: { Multiselect, IconSvg, Pagination },

        computed: {
            submitObject() {
                return {
                    reviewername: this.reviewername ? this.reviewername : '',
                    review: this.review ? this.review : '',
                    url: this.url ? this.url : '',
                    rank: this.rank ? this.rank : '',
                    event: this.event ? this.event : '',
                    image_path: this.image_path ? this.image_path : '/storage/reviews/default.png'
                }
            },
        },

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
                reviewerList: ['No Proscenium', 'Room Escape Artist'],
                pagination: { paginate:10 },
            }
        },

        methods: {

            onSubmit() {
                this.$v.$touch(); 
                if (this.$v.$invalid) { return false }

                axios.post('/reviewevents', this.submitObject)
                .then( res => { this.reviews = res.data; this.add = false });
            },

            onDelete(review) {
                axios.delete(`/reviewevents/${review.id}`)
                .then( res => { this.modal = null; this.reviews = res.data; })
                .catch( error => { this.serverErrors = error.response.data.errors; });
            },

            onLoad(page) {
                axios.get(`/reviewevents?page=${page}`)
                .then( res => { this.reviews = res.data })
                .catch( error => { this.serverErrors = error.response.data.errors; });
            },

            onSearch(query) {
                axios.get('/api/admin/events/search', { params: { keywords: query } })
                .then( res => { this.events = res.data });
            },

            onUpdate(review,) {

                axios.patch(`/reviewevents/${review.id}`, review)
                .then( res => { this.reviews = res.data })
                .catch(error => { 
                    this.serverErrors = error.response.data.errors; 
                });
            },

            showModal(item, arr) {
                this.selectedModal = item;
                this.modal = arr;
            },

            addTag (newTag) {
                this.reviewerList.push(newTag)
                this.reviewername = newTag;
            },

            assignUrl(arr) {
                this.$v.reviewername.$touch;
                if(arr == 'No Proscenium') {
                    return this.image_path = '/storage/reviews/nopro.png'
                }
                this.image_path = '/storage/reviews/default.png'
                return this.url = '';
            },

        },

        created() {
            this.onLoad()
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
                maxLength: maxLength(1200)
            },
        },
    }

</script>