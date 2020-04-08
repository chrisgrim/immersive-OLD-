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

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


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
Vue.component('vue-nav', () => import('./components/layouts/nav.vue'));
Vue.component('nav-search', () => import('./components/layouts/nav-search.vue'));
Vue.component('profile-button', () => import('./components/layouts/profile-button.vue'));
Vue.component('vue-create-nav', () => import('./components/layouts/create/nav.vue'));


//Components
Vue.component('favorite', () => import('./components/layouts/favorite.vue'));
Vue.component('modal', () => import('./components/layouts/modal.vue'));
Vue.component('tabs', () => import('./components/layouts/tabs.vue'));
Vue.component('tab', () => import('./components/layouts/tab.vue'));
Vue.component('image-upload', () => import('./components/layouts/image-upload.vue'));
Vue.component('vue-alert', () => import('./components/layouts/alert.vue'));
Vue.component('vue-email-verify', () => import('./components/layouts/email-verified.vue'));

//Create Events
Vue.component('event-create-checklist', () => import('./components/create/checklist.vue'));
Vue.component('create-location-google', () => import('./components/create/location-google.vue'));
Vue.component('create-category', () => import('./components/create/category.vue'));
Vue.component('create-organizer', () => import('./components/create/organizer.vue'));
Vue.component('create-title', () => import('./components/create/title.vue'));
Vue.component('create-image', () => import('./components/create/image.vue'));
Vue.component('create-date-picker', () => import('./components/create/datepicker.vue'));
Vue.component('create-shows', () => import('./components/create/shows.vue'));
Vue.component('show-listing', () => import('./components/create/show-listing.vue'));
Vue.component('create-description', () => import('./components/create/description.vue'));
Vue.component('create-advisories', () => import('./components/create/advisories.vue'));
Vue.component('create-review', () => import('./components/create/review.vue'));
Vue.component('vue-create-review-event', () => import('./components/create/review-event.vue'));

//Admin Area
Vue.component('admin-nav', () => import('./components/adminArea/nav.vue'));
Vue.component('approval-bar', () => import('./components/adminArea/approve/approval-bar.vue'));
Vue.component('approval-list', () => import('./components/adminArea/approve/approval-list.vue'));
Vue.component('admin-categories', () => import('./components/adminArea/admin-categories.vue'));
Vue.component('admin-contact-level', () => import('./components/adminArea/admin-contact-level.vue'));
Vue.component('admin-genres', () => import('./components/adminArea/admin-genres.vue'));
Vue.component('admin-event-reviews', () => import('./components/adminArea/admin-event-reviews.vue'));
Vue.component('admin-staff-picks', () => import('./components/adminArea/admin-staff-picks.vue'));
Vue.component('admin-mobility', () => import('./components/adminArea/admin-mobility.vue'));
Vue.component('admin-regions', () => import('./components/adminArea/admin-regions.vue'));
Vue.component('admin-user', () => import('./components/adminArea/admin-user.vue'));
Vue.component('admin-organizer', () => import('./components/adminArea/admin-organizer.vue'));
Vue.component('admin-content-advisories', () => import('./components/adminArea/admin-content-advisories.vue'));

//Profile
Vue.component('user-profile', () => import('./components/profile/profile-index.vue'));

// Messages
Vue.component('message-index', () => import('./components/messages/message-index.vue'));
Vue.component('message-show', () => import('./components/messages/message-show.vue'));


//Categories
Vue.component('category-show', () => import('./components/categories/category-show.vue'));

//Organizers
Vue.component('organizer-show', () => import('./components/organizers/organizer-show.vue'));

//Events
Vue.component('event-show', () => import('./components/events/event-show.vue'));
Vue.component('event-index', () => import('./components/events/event-index.vue'));
Vue.component('search-listing', () => import('./components/events/event-search.vue'));
Vue.component('event-map-search', () => import('./components/events/event-map-search.vue'));
Vue.component('event-list-search', () => import('./components/events/event-list-search.vue'));
Vue.component('edit-events', () => import('./components/events/event-edit.vue'));
Vue.component('event-listing-item', () => import('./components/events/components/index-item.vue'));
Vue.component('vue-event-edit-listing-item', () => import('./components/events/components/event-edit-item.vue'));

//Login z
Vue.component('login-pop', () => import('./components/layouts/login-pop.vue'));
Vue.component('vue-register', () => import('./components/layouts/register.vue'));

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
      router
  });
};
if(document.getElementById("flash")){
  const flash = new Vue({
      el: '#flash',
  });
};
