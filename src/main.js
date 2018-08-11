// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App'
import router from './router'

import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false


var store = new Vuex.Store({
  state:{
    userLogin: false,
    cartList:[]
  },
  mutations: {
    setUserLogin(state, newState){
      state.userLogin = newState
    }
  },
  getters:{
    getUserLogin: function(state){
      return state.userLogin
    },
    cartListTotalAmount: function(state){
      return state.cartList.length
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
