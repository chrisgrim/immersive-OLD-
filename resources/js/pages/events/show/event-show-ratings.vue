<template>
    <section>
        
    </section>
</template>

<script>
    import ShowMore  from '../components/show-more.vue'
    import IconSvg from '../../../components/Svg-icon'
    export default {

        props: [ 'event', 'remaining'],

        components: { ShowMore, IconSvg },

        data() {
            return {
            }
        },

    }
</script>