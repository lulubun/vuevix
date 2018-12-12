import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css';

import Home from './views/Home';
import Pets from './views/Pets';

Vue.use(Vuetify);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/pets', component: Pets },
];

const router = new VueRouter({ routes });

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
})
