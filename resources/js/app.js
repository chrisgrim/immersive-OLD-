/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vuelidate from "vuelidate";
import store from './store/index'
import vuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import { Icon }  from 'leaflet';
import 'leaflet/dist/leaflet.css';
import VueRouter from 'vue-router';
import {routes} from './routes';


window.axios = require('axios');
window.Vue = require('vue');

Vue.use(Vuelidate);
Vue.use(VueRouter)
// require('./bootstrap');


const router = new VueRouter({
  routes,
  mode: 'history'
});



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


//Nav
Vue.component('vue-nav', require('./components/layouts/nav.vue').default);
Vue.component('nav-search', require('./components/layouts/nav-search.vue').default);
Vue.component('profile-button', require('./components/layouts/profile-button.vue').default);
Vue.component('vue-create-nav', require('./components/layouts/create/nav.vue').default);


//Components
Vue.component('favorite', require('./components/layouts/favorite.vue').default);
Vue.component('modal', require('./components/layouts/modal.vue').default);
Vue.component('tabs', require('./components/layouts/tabs.vue').default);
Vue.component('tab', require('./components/layouts/tab.vue').default);
Vue.component('image-upload', require('./components/layouts/image-upload.vue').default);

//Create Events
Vue.component('event-create-checklist', require('./components/create/checklist.vue').default);
Vue.component('create-location-google', require('./components/create/location-google.vue').default);
Vue.component('create-category', require('./components/create/category.vue').default);
Vue.component('create-organizer', require('./components/create/organizer.vue').default);
Vue.component('create-title', require('./components/create/title.vue').default);
Vue.component('create-image', require('./components/create/image.vue').default);
Vue.component('create-date-picker', require('./components/create/datepicker.vue').default);
Vue.component('create-shows', require('./components/create/shows.vue').default);
Vue.component('show-listing', require('./components/create/show-listing.vue').default);
Vue.component('create-description', require('./components/create/description.vue').default);
Vue.component('create-advisories', require('./components/create/advisories.vue').default);

//Admin Area
Vue.component('admin-nav', require('./components/adminArea/nav.vue').default);
Vue.component('approval-bar', require('./components/adminArea/approve/approval-bar.vue').default);
Vue.component('admin-categories', require('./components/adminArea/admin-categories.vue').default);
Vue.component('admin-contact-level', require('./components/adminArea/admin-contact-level.vue').default);
Vue.component('admin-genres', require('./components/adminArea/admin-genres.vue').default);
Vue.component('admin-create-review', require('./components/adminArea/admin-create-review.vue').default);
Vue.component('admin-staff-picks', require('./components/adminArea/admin-staff-picks.vue').default);
Vue.component('admin-mobility', require('./components/adminArea/admin-mobility.vue').default);
Vue.component('admin-regions', require('./components/adminArea/admin-regions.vue').default);
Vue.component('admin-user', require('./components/adminArea/admin-user.vue').default);
Vue.component('admin-organizer', require('./components/adminArea/admin-organizer.vue').default);
Vue.component('admin-content-advisories', require('./components/adminArea/admin-content-advisories.vue').default);

//Profile
Vue.component('user-profile', require('./components/profile/profile-index.vue').default);

//Categories
Vue.component('category-show', require('./components/categories/category-show.vue').default);

//Organizers
Vue.component('organizer-show', require('./components/organizers/organizer-show.vue').default);

//Events
Vue.component('event-index', require('./components/events/event-index.vue').default);
Vue.component('search-listing', require('./components/events/event-search.vue').default);
Vue.component('event-map-search', require('./components/events/event-map-search.vue').default);
Vue.component('event-list-search', require('./components/events/event-list-search.vue').default);
Vue.component('event-show', require('./components/events/event-show.vue').default);
Vue.component('edit-events', require('./components/events/event-edit.vue').default);
Vue.component('event-listing-item', require('./components/events/components/index-item.vue').default);



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
        router
	});
};
if(document.getElementById("admin")){
  const create = new Vue({
      el: '#admin',
  });
};
if(document.getElementById("bodyArea")){
  const bodyArea = new Vue({
      el: '#bodyArea',
      store,
      router
  });
};
