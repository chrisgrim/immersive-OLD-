<template>
    <section>
        <div class="es__title pad4">
            <a :href="`/index/search-online?category=${event.category.id}`">
                <span class="es__title--category"> {{ event.category.name }} </span>
            </a>
            <span class="es__title--name"><h1> {{ event.name }} </h1></span>
            <span class="es__title--tag"><span class="es__star">★</span><span style="font-weight:700;font-size:1.5rem"> 4.8 </span> · <i> {{ event.tag_line }} </i></span>
            <template v-if="event.hasLocation">
                <p v-if="event.location.city"> {{ event.location.city }},  </p><p v-if="event.location.region"> {{ event.location.region }} </p>
            </template>
            <template v-else>
                <p class="header__show-info bold">Available anywhere</p>
            </template>
            <template v-if="event.staffpick">
                <a href="#staffpick">
                    <div class="es__staffpick--award">
                        <IconSvg type="award" />
                    </div>
                </a>
            </template>
        </div>

        <div class="es__description pad4">
            <h2>Experience hosted by <a href="#organizer">{{ event.organizer.name }}</a></h2>
            <a 
                v-if="event.organizer.thumbImagePath"
                href="#organizer">
                <img 
                    :src="`/storage/${event.organizer.thumbImagePath}`" 
                    :alt="`Logo of ${event.organizer.name}`">
            </a>
            <ShowMore 
                :text="event.description"
                :limit="100" />
        </div>
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