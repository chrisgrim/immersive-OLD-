/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */



window.Vue = require('vue');

import Vuelidate from "vuelidate";
import store from './store/index'
import * as VueGoogleMaps from "vue2-google-maps";
import vuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import { Icon }  from 'leaflet';
import 'leaflet/dist/leaflet.css';
import VCalendar from 'v-calendar';
import VueRouter from 'vue-router';


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/event/:id'}
  ]
})

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDi5THKxUVFMVrEMfl-2D03CCXNTkSavmI",
    libraries: "places" // necessary for places input
  }
});
Vue.use(Vuelidate);

const datepickerOptions = {}
Vue.use(VCalendar, {
  firstDayOfWeek: 2,
});


require('./bootstrap');



// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));




Vue.component('profile-button', require('./components/layouts/profile-button.vue').default);

Vue.component('nav-search', require('./components/layouts/nav-search.vue').default);
Vue.component('favorite', require('./components/layouts/favorite.vue').default);


Vue.component('event-create-checklist', require('./components/create/checklist.vue').default);
Vue.component('create-location', require('./components/create/location.vue').default);
Vue.component('create-location-google', require('./components/create/location-google.vue').default);
Vue.component('create-category', require('./components/create/category.vue').default);
Vue.component('create-organizer', require('./components/create/organizer.vue').default);
Vue.component('create-title', require('./components/create/title.vue').default);
Vue.component('create-image', require('./components/create/image.vue').default);
Vue.component('create-date-picker', require('./components/create/datepicker.vue').default);
Vue.component('create-shows', require('./components/create/shows.vue').default);
Vue.component('show-listing', require('./components/create/show-listing.vue').default);
Vue.component('create-description', require('./components/create/description.vue').default);
Vue.component('create-expect', require('./components/create/expect.vue').default);

Vue.component('event-listing', require('./components/read/event-listing.vue').default);
Vue.component('event-listing-item', require('./components/read/event-listing-item.vue').default);

Vue.component('search-listing', require('./components/read/search-listing.vue').default);

Vue.component('user-profile', require('./components/read/user-profile.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


if(document.getElementById("header")){
	const header = new Vue({
    	el: '#header',
      store,
      router
	});
};
if(document.getElementById("create")){
	const create = new Vue({
    	el: '#create',
      store
	});
};
if(document.getElementById("bodyArea")){
  const bodyArea = new Vue({
      el: '#bodyArea',
      store,
      router
     
  });
};
