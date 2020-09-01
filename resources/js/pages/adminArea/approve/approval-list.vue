<template>
    <div class="events">
         <div class="create-title">
            <h2>Event Approval</h2>
            <p>These are the events that need approval</p>
        </div>
        
        <section>
            <div class="padded-width">
                <vue-event-index favorite="hidden" loadurl="admin" :events="events"></vue-event-index>
            </div>
        </section>
    </div>
</template>

<script>
    import _ from 'lodash';
    import Multiselect from 'vue-multiselect';
    import format from 'date-fns/format';


    export default {

        components: {
            Multiselect
        },

        props: {
            events: {
                type:Array,
            },
            user: {
                type:String
            }
        }, 

        data() {
            return {
                value: '',
                list: [],
                price: '',
                eventName: '',
                location: [],
                imageWidth: '',
            }
        },

        methods: {
            loc() {
                navigator.geolocation.getCurrentPosition(pos => {
                    this.location = pos.coords;
                    console.log(pos.coords);
                }, err => {
                    console.log(err)
                });
            },

             handleResize() {
                if (window.innerWidth < 768) {
                    this.imageWidth = window.innerWidth/1.4;
                }
            }
        },

        mounted() {
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        }
    };
</script>