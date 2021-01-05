<template>
    <section 
        v-if="event.eventreviews ? event.eventreviews.length : null" 
        class=" event-show grey event-show-review">
        <div class="content grid two-panel">
            <div class="left">
                <div class="event-title">
                    <h2>Show Reviews</h2>
                </div>
            </div>
            <div class="event-show-review__right">
                <div 
                    class="box" 
                    v-for="review in event.eventreviews"
                    :key="review.id">
                    <a 
                        rel="noreferrer" 
                        target="_blank" 
                        :href="review.url">
                        <div class="event-show-review__right--image">
                            <img 
                                width="33px" 
                                height="33px" 
                                :src="review.image_path">
                        </div>
                        <div class="event-show-review__right--name">
                            <h4> {{ review.reviewer_name }}'s Review</h4>
                        </div>
                    </a>
                    <div class="review">
                        <a 
                            rel="noreferrer" 
                            target="_blank" 
                            :href="review.url">                 
                            <i 
                                style="white-space: pre-wrap;"
                                class="text"> {{ review.review.substring(0,300) }}...<span class="show-text"> Read More
                                </span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import ShowMore  from '../components/show-more.vue'
    export default {

        props: [ 'event'],

        components: { ShowMore },

        data() {
            return {
                titleFontSize: '',
            }
        },

    }
</script>