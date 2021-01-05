<template>
    <section>
        <div class="es__title pad4">
            <a :href="`/index/search-online?category=${event.category.id}`">
                <span class="es__title--category"> {{ event.category.name }} </span>
            </a>
            <span class="es__title--name"><h1> {{ event.name }} </h1></span>
            <span class="es__title--tag"><i> {{ event.tag_line }} </i></span>
            <div class="header-left__staffpick">
                <template v-if="event.staffpick">
                    Staff Pick
                </template>
            </div>
        </div>

        <div class="es__quickinfo pad4">
            <h2>Experience hosted by: <a href="#organizer">{{ event.organizer.name }}</a></h2>
            <div class="es__quickinfo--grid">
                <a href="#tickets">
                    <img src="/storage/website-files/price.png">
                    <p>{{ event.price_range }}</p> 
                </a>
                <a href="#location">
                    <img src="/storage/website-files/location.png">
                    <template v-if="event.hasLocation">
                        <p v-if="event.location.city"> {{ event.location.city }},  </p><p v-if="event.location.region"> {{ event.location.region }} </p>
                    </template>
                    <template v-else>
                        <p class="header__show-info bold">Available anywhere</p>
                    </template>
                </a>
                <a href="#dates">
                    <img src="/storage/website-files/calendar.png">
                    <template v-if="event.showtype=='s'">
                        <p 
                            v-if="remaining && remaining.length > 1 ? remaining.length : ''" 
                            class="header__show-info bold">{{ remaining.length }} dates left</p>
                        <p 
                            v-else-if="remaining && remaining.length == 1 ? remaining.length : ''" 
                            class="header__show-info bold">{{ remaining.length }} date left</p>
                        <p 
                            v-else 
                            class="header__show-info bold">no dates left</p>
                    </template>
                    <template v-if="event.showtype=='o' || event.showtype=='l'">
                        <span class="header__show-info bold">
                            <span v-if="event.show_on_going.mon">M</span>
                            <span v-else style="color:#bbbbbb;">M</span>
                            <span v-if="event.show_on_going.tue">T</span>
                            <span v-else style="color:#bbbbbb;">T</span>
                            <span v-if="event.show_on_going.wed">W</span>
                            <span v-else style="color:#bbbbbb;">W</span>
                            <span v-if="event.show_on_going.thu">T</span>
                            <span v-else style="color:#bbbbbb;">T</span>
                            <span v-if="event.show_on_going.fri">F</span>
                            <span v-else style="color:#bbbbbb;">F</span>
                            <span v-if="event.show_on_going.sat">S</span>
                            <span v-else style="color:#bbbbbb;">S</span>
                            <span v-if="event.show_on_going.sun">S</span>
                            <span v-else style="color:#bbbbbb;">S</span>
                        </span>
                    </template>
                    <template v-if="event.showtype=='a'">
                        <span class="header__show-info bold">Available any time</span>
                    </template>
                </a>
            </div>
        </div>

        <div class="es__description pad4">
            <h2>About</h2>
            <ShowMore 
                :text="event.description"
                :limit="100" />
        </div>
    </section>
</template>

<script>
    import ShowMore  from '../components/show-more.vue'
    export default {

        props: [ 'event', 'remaining'],

        components: { ShowMore },

        data() {
            return {
            }
        },

    }
</script>