import VueRouter from 'vue-router';
import {routes} from './routes';
import store from './store/index';
import { Icon }  from 'leaflet';
import 'leaflet/dist/leaflet.css';


window.axios = require('axios');
window.Vue = require('vue');
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('vue-nav', require('./components/layouts/nav.vue').default);
Vue.component('nav-search', require('./components/layouts/nav-search.vue').default);
Vue.component('profile-button', require('./components/layouts/profile-button.vue').default);

Vue.component('favorite', require('./components/layouts/favorite.vue').default);

Vue.component('event-show', require('./components/events/event-show.vue').default);
Vue.component('event-index', require('./components/events/event-index.vue').default);
Vue.component('event-listing-item', require('./components/events/components/index-item.vue').default);


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
