// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios';

import Goods from './components/Goods/Goods';
import Ratings from './components/Ratings/Ratings';
import Seller from './components/Seller/Seller';

const routes = [
  {
    path:'/',
    redirect: '/goods'
  },
  {
    path: '/goods',
    component: Goods 
  },
  {
    path: '/ratings',
    component: Ratings
  },
  {
    path: '/seller',
    component: Seller
  }
];

const router = new VueRouter({
  routes,
  //active class-->active
  linkActiveClass: 'active'
})

Vue.config.productionTip = false

//install vue-router plugin
Vue.use(VueRouter);
//if wanna use axios in other components, have to rewrite axios as vue prototype
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
