import Vue from 'vue'
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css';

import store from "./store/store";
import App from './App.vue'
import Home from './views/Home';
import Pets from './views/Pets';
import Favorites from './views/Favorites';
import Form from './views/Form';

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/pets', component: Pets },
  { path: '/favorites', component: Favorites },
  { path: '/form', component: Form }
];

const router = new VueRouter({ routes });

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
