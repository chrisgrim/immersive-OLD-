<template>
    <div class="container">
        <div class="category">
            <div class="list">
                <h2>Explore {{category.name}}</h2>
                <div>
                    <div id="grid">
                        <div v-for="event in category.events">
                            <event-listing-item :event="event"></event-listing-item>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';
    import Multiselect from 'vue-multiselect';
    import format from 'date-fns/format';
    // import {mapGetters} from 'vuex'


    export default {

        components: {
            Multiselect,
        },

        props: {
            category: {
                type:Object
            }
        }, 

        data() {
            return {
                value: '',
                list: [],
                price: '',
                eventName: '',
                location: '',
            }
        },

        methods: {
        

           //  locationPromise() {
           //   return new Promise((resolve, reject) => {
           //       let params = {
           //           key: 'af4b25e28c2b00',
           //           q: this.location,
           //       };
           //       let url = `https://cors-anywhere.herokuapp.com/https://us1.locationiq.com/v1/search.php?key=af4b25e28c2b00&q=` + this.location + `&format=json`;
                    // axios.get(url)
                    // .then(response => {
                    //  console.log(response.data[0].lat);
                    //  let params = {
                    //      eventLat: response.data[0].lat,
                    //      eventLong: response.data[0].lon,
                    //      locationName: this.location
                    //  };
                    //  resolve(params);
                    // });
           //   });
           //  },

            // getFilteredEvents(data) {
            //  axios.post('/eventsFilter/eventfilter', data)
            //  .then(response => {
            //      this.allEvents = response.data;
            //      console.log(response.data);
            //  })
            //  .catch(errorResponse => {
            //      //show if there are server side validation errors
            //      if(!_.has(errorResponse, 'response.data.errors')) {
            //          return false;
            //      }
            //      for (const[field, errors] of Object.entries(errorResponse.response.data.errors)) {
            //          for(const error in errors) {
            //              this.errors.add({
            //                  field: field,
            //                  msg: errors[error]
            //              });
            //          }
            //      }
            //  });
            // },

            // locationSearch() {
            //  let params = {
            //      key: 'af4b25e28c2b00',
            //      q: this.location,
            //  };
            //  let url = `https://cors-anywhere.herokuapp.com/https://us1.locationiq.com/v1/search.php?key=af4b25e28c2b00&q=` + this.location + `&format=json`;
            //  axios.get(url)
            //  .then(response => {
      //            console.log(response.data[0].lat);
      //            let params = {
               //       eventLat: response.data[0].lat,
               //       eventLong: response.data[0].lon,
               //       locationName: this.location
               //   };
               //   axios.post('/eventsFilter/locationfilter', params)
               //   .then(response => {
         //             this.allEvents = response.data;
         //         })
         //         .catch(errorResponse => {
         //            // show if there are server side validation errors
         //             if (!_.has(errorResponse, 'response.data.errors')) { return false; }
         //                 for (const [field, errors] of Object.entries(errorResponse.response.data.errors)) {
            //                  for (const error in errors) {
            //                     this.errors.add({ field: field, msg: errors[error] });
         //                 }
         //                 }
         //         });

      //        })
      //        .catch(errorResponse => {
      //           // show if there are server side validation errors
      //           if (!_.has(errorResponse, 'response.data.errors')) { return false; }
      //            for (const [field, errors] of Object.entries(errorResponse.response.data.errors)) {
      //                for (const error in errors) {
      //                   this.errors.add({ field: field, msg: errors[error] });
      //                }
      //                }
      //        });
            // },
        },

        // mounted() {
  //           this.$store.dispatch('fetchEvents')
  //       },
    };
</script>