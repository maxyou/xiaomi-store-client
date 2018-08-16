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
  state: {
    userLogin: false,
    userName: '',
    cartList: []
  },
  mutations: {
    setUserLogin(state, newState) {
      state.userLogin = newState
    },
    setUserName(state, name) {
      state.userName = name
    },
    removeProduct(state, willRemove) {
      state.cartList.forEach(function (item, index, array) {
        if (item.productId == willRemove.productId) {
          array.splice(index, 1)
        }
      })
    },
    setProductSelect(state, updated) {
      state.cartList.forEach(function (item, index, array) {
        if (item.productId == updated.productId) {
          item.select = updated.select
          array.splice(index, 1, { ...item })
        }
      })
    },
    setProductAmount(state, updated) {
      state.cartList.forEach(function (item, index, array) {
        if (item.productId == updated.productId) {
          item.amount = updated.amount
          array.splice(index, 1, { ...item })
        }
      })
    },
    addToCartList(state, newItem) {
      var found = state.cartList.some(function (item, index, array) {
        if (item.productId == newItem.productId) {

          item.amount++
            array.splice(index, 1, { ...item
            })

          return true
        }
        return false
      })
      if (!found) {
        newItem.amount = 1
        state.cartList.push(newItem)
      }
    },
    syncCartList(){
      axios.get("/carlist", {
        headers: {
            Cookie: 'userId='+this.userName
        }
    }).then((res) => {
        
        console.log(JSON.stringify(res.data))
    })
    }
  },
  getters: {
    getUserLogin: function (state) {
      return state.userLogin
    },
    getUserName: function (state) {
      return state.userName
    },
    getCartList: function (state) {
      return state.cartList
    },
    cartListTotalAmount: function (state) {
      var totalAmount = 0
      state.cartList.forEach(function (item, index, array) {
        totalAmount += item.amount
      })
      return totalAmount
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
