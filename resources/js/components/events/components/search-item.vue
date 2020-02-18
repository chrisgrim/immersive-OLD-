<template>
    <a :href="'/events/' + event.slug">
        <div class="lista">
            <div class="image">
                <div class="image" :style="{ backgroundImage: `url('${this.event ? /storage/ + this.event.thumbImagePath : ''}')` }">
                    <div>
                        <favorite :user="user" :inputclass="showEventClass" :event="event"></favorite>
                    </div>
                </div>
            </div>
            <div class="info">
                <div class="name">
                    {{ event.name }}
                </div>
                <div class="loc">
                    {{ event.location.city }}
                </div>
                <div class="org">
                    {{ event.organizer.name }}
                </div>
                <div class="price">
                    {{ event.price_range }}
                </div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {

        name: "search-item",

        props: {
            event: { type:Object },
            user: { type:String }
        },

        data() {
            return {
                divBackground: `background-image: url("/storage/${this.event.thumbImagePath}");`,
                showEventClass: 'heart',
            }
        },

        methods: {

        }
    };
</script>