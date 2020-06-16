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

import VueFilterDateFormat from '@vuejs-community/vue-filter-date-format';




// import VueRouter from 'vue-router';
// import {routes} from './routes';
// Vue.use(VueRouter);
// const router = new VueRouter({
//   routes,
//   mode: 'history'
// });


window.axios = require('axios');
window.Vue = require('vue');

Vue.use(Vuelidate);
Vue.use(VueFilterDateFormat);

Vue.use(require('vue-cookies'));
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
 * Eg. ./pages/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));


//Nav
Vue.component('vue-nav', () => import('./pages/layouts/nav.vue'));
Vue.component('nav-search', () => import('./pages/layouts/nav-search.vue'));
Vue.component('profile-button', () => import('./pages/layouts/profile-button.vue'));

//Footer
Vue.component('vue-footer', () => import('./pages/layouts/footer.vue'));


//Components
Vue.component('favorite', () => import('./pages/layouts/favorite.vue'));
Vue.component('modal', () => import('./pages/layouts/modal.vue'));
Vue.component('tabs', () => import('./pages/layouts/tabs.vue'));
Vue.component('tab', () => import('./pages/layouts/tab.vue'));
Vue.component('image-upload', () => import('./pages/layouts/image-upload.vue'));
Vue.component('vue-alert', () => import('./pages/layouts/alert.vue'));
Vue.component('vue-email-verify', () => import('./pages/layouts/email-verified.vue'));

//Create Events
Vue.component('vue-create-nav', () => import('./pages/create/nav.vue'));
Vue.component('vue-create-organizer-nav', () => import('./pages/create/organizer-nav.vue'));
Vue.component('vue-create-nav-bottom-bar', () => import('./pages/create/nav-bottom-bar.vue'));
Vue.component('create-location-google', () => import('./pages/create/location-google.vue'));
Vue.component('create-category', () => import('./pages/create/category.vue'));
Vue.component('create-organizer', () => import('./pages/create/organizer.vue'));
Vue.component('create-title', () => import('./pages/create/title.vue'));
Vue.component('create-image', () => import('./pages/create/image.vue'));
Vue.component('create-date-picker', () => import('./pages/create/datepicker.vue'));
Vue.component('create-shows', () => import('./pages/create/shows.vue'));
Vue.component('show-listing', () => import('./pages/create/show-listing.vue'));
Vue.component('create-description', () => import('./pages/create/description.vue'));
Vue.component('create-advisories', () => import('./pages/create/advisories.vue'));
Vue.component('create-review', () => import('./pages/create/review.vue'));
Vue.component('vue-create-review-event', () => import('./pages/create/review-event.vue'));
Vue.component('vue-create-first-event', () => import('./pages/create/start-event-creation.vue'));




//Admin Area
Vue.component('admin-nav', () => import('./pages/adminArea/nav.vue'));
Vue.component('approval-bar', () => import('./pages/adminArea/approve/approval-bar.vue'));
Vue.component('approval-list', () => import('./pages/adminArea/approve/approval-list.vue'));
Vue.component('admin-categories', () => import('./pages/adminArea/admin-categories.vue'));
Vue.component('admin-contact-level', () => import('./pages/adminArea/admin-contact-level.vue'));
Vue.component('admin-genres', () => import('./pages/adminArea/admin-genres.vue'));
Vue.component('vue-admin-events', () => import('./pages/adminArea/admin-events.vue'));
Vue.component('vue-admin-boneyard', () => import('./pages/adminArea/admin-boneyard.vue'));
Vue.component('vue-admin-stats', () => import('./pages/adminArea/admin-stats.vue'));
Vue.component('admin-event-reviews', () => import('./pages/adminArea/admin-event-reviews.vue'));
Vue.component('admin-staff-picks', () => import('./pages/adminArea/admin-staff-picks.vue'));
Vue.component('admin-mobility', () => import('./pages/adminArea/admin-mobility.vue'));
Vue.component('admin-regions', () => import('./pages/adminArea/admin-regions.vue'));
Vue.component('admin-user', () => import('./pages/adminArea/admin-user.vue'));
Vue.component('admin-organizer', () => import('./pages/adminArea/admin-organizer.vue'));
Vue.component('admin-content-advisories', () => import('./pages/adminArea/admin-content-advisories.vue'));
Vue.component('vue-admin-remote-locations', () => import('./pages/adminArea/admin-remote-locations.vue'));
Vue.component('vue-admin-interactive-levels', () => import('./pages/adminArea/admin-interactive-levels.vue'));

//Profile
Vue.component('user-profile', () => import('./pages/profile/profile-index.vue'));
Vue.component('vue-user-notifications', () => import('./pages/profile/notifications.vue'));
Vue.component('vue-user-account', () => import('./pages/profile/account.vue'));
Vue.component('vue-user-favorited', () => import('./pages/profile/favorited.vue'));

// Messages
Vue.component('message-index', () => import('./pages/messages/message-index.vue'));
Vue.component('message-show', () => import('./pages/messages/message-show.vue'));


//Categories
Vue.component('category-show', () => import('./pages/categories/category-show.vue'));

//Organizers
Vue.component('organizer-show', () => import('./pages/organizers/organizer-show.vue'));
Vue.component('organizer-show-events', () => import('./pages/organizers/components/event-list-item.vue'));

//Events
Vue.component('event-show', () => import('./pages/events/event-show.vue'));
Vue.component('event-index', () => import('./pages/events/event-index.vue'));
Vue.component('search-listing', () => import('./pages/events/event-search.vue'));
Vue.component('event-map-search', () => import('./pages/events/event-map-search.vue'));
Vue.component('event-list-search', () => import('./pages/events/event-list-search.vue'));
Vue.component('edit-events', () => import('./pages/events/event-edit.vue'));
Vue.component('vue-event-index', () => import('./pages/events/components/index-item.vue'));
Vue.component('vue-event-edit-listing-item', () => import('./pages/events/components/event-edit-item.vue'));
Vue.component('vue-event-online-search', () => import('./pages/events/event-online-search.vue'));

//Login z
Vue.component('login-pop', () => import('./pages/layouts/login-pop.vue'));
Vue.component('vue-register', () => import('./pages/layouts/register.vue'));
Vue.component('vue-reset-password', () => import('./pages/layouts/reset-password.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


if(document.getElementById("header")){
	const header = new Vue({
    	el: '#header',
        store,
        
	});
};
if(document.getElementById("create")){
	const create = new Vue({
    	el: '#create',
	});
};
if(document.getElementById("admin")){
  const admin = new Vue({
      el: '#admin',
  });
};
if(document.getElementById("bodyArea")){
  const bodyArea = new Vue({
      el: '#bodyArea',
      store,
  });
};
if(document.getElementById("footer")){
    const footer = new Vue({
        el: '#footer',
    });
};
if(document.getElementById("flash")){
  const flash = new Vue({
      el: '#flash',
  });
};
