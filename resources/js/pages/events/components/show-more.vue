<template>
    <p class="text">
        <span style="white-space: pre-wrap;">{{ adjustedText }}</span>
        <span 
            class="show-text" 
            v-if="showMore" 
            @click="showMore = false">... Show More
        </span>
        <span 
            class="show-text" 
            v-if="!showMore && this.text.length >= this.limit"
            @click="showMore = true">... Show Less 
        </span>
    </p>
</template>

<script>

export default {
    props: ['text','limit'],

    computed: {
        adjustedText() {
            return this.text.length >= this.limit && this.showMore ? this.text.substring(0, this.limit) : this.text
        },
    },

    data() {
        return {
            showMore: this.text.length >= this.limit ? true : false
        }
    }



}
    
</script>