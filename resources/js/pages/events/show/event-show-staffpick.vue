<template>
    <section class="pad4">
        <div class="event-title">
            <h2>Staff Pick</h2>
            <div class="event-show__description">
                <ShowMore 
                    :text="event.staffpick.comments"
                    :limit="100" />
            </div>
            <div class="event-show__staffpicks__user">
                <div class="name">
                    <i><p>-{{ event.staffpick.user.name }}</p></i>
                </div>
                <picture>
                    <source 
                        type="image/webp" 
                        :srcset="`/storage/${event.staffpick.user.thumbImagePath}`"> 
                    <img 
                        :src="`/storage/${event.staffpick.user.thumbImagePath.slice(0, -4)}jpg`" 
                        :alt="`${event.staffpick.user.name} Immersive Event`">
                </picture>
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