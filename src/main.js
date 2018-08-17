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
    selectAll: false,
    cartList: []
  },
  mutations: {
    setUserLogin(state, newState) {
      state.userLogin = newState
    },
    setUserName(state, name) {
      state.userName = name
    },
    setSelectAll(state, checked) {
      state.selectAll = checked
    },
    setCartList(state, list) {
      state.cartList = list


      if (state.cartList.length == 0) {
        state.selectAll = false
      } else {
        var selectAll = state.cartList.every(function (item, index, array) {
          return item.checked
        })
        state.selectAll = selectAll
      }


    },
    // removeProduct(state, willRemove) {
    //   state.cartList.forEach(function (item, index, array) {
    //     if (item.productId == willRemove.productId) {
    //       array.splice(index, 1)
    //     }
    //   })
    // },
    // setProductSelect(state, updated) {
    //   state.cartList.forEach(function (item, index, array) {
    //     if (item.productId == updated.productId) {
    //       item.select = updated.select
    //       array.splice(index, 1, { ...item
    //       })
    //     }
    //   })
    // },
    // setProductAmount(state, updated) {
    //   state.cartList.forEach(function (item, index, array) {
    //     if (item.productId == updated.productId) {
    //       item.productNum = updated.productNum
    //       array.splice(index, 1, { ...item
    //       })
    //     }
    //   })
    // }
  },
  actions: {
    checkAllProduct({
      dispatch,
      commit
    }, checked) {
      console.log('checkAllProduct is called: new checked is ' + checked)
      axios.post("/users/carcheckall", {
        checked: checked,
        headers: {
          Cookie: 'userId=' + this.userName
        }
      }).then((res) => {
        console.log('editProduct res.data:' + JSON.stringify(res.data))
        if (res.data.status == '0') {
          console.log('res.data.status==0')
          dispatch('getCartListFromServer')
        }
      })

    },
    editProduct({
      dispatch,
      commit
    }, willEdit) {
      console.log('editProduct is called: new num is ' + willEdit.productNum)
      axios.post("/users/caredit", {
        Id: willEdit.Id,
        productNum: willEdit.productNum,
        checked: willEdit.checked,
        headers: {
          Cookie: 'userId=' + this.userName
        }
      }).then((res) => {
        console.log('editProduct res.data:' + JSON.stringify(res.data))
        if (res.data.status == '0') {
          console.log('res.data.status==0')
          dispatch('getCartListFromServer')
        }
      })

    },
    removeProduct({
      dispatch,
      commit
    }, willRemove) {
      console.log('removeProduct is called')
      axios.post("/users/cardel", {
        productId: willRemove.productId,
        headers: {
          Cookie: 'userId=' + this.userName
        }
      }).then((res) => {
        console.log(JSON.stringify('res.data:' + res.data))
        if (res.data.status == '0') {
          console.log('res.data.status==0')
          dispatch('getCartListFromServer')
        }
      })

    },
    getCartListFromServer({
      dispatch,
      commit
    }) {
      axios.get("/users/carlist", {
        headers: {
          Cookie: 'userId=' + this.userName
        }
      }).then((res) => {
        console.log('getCartListFromServer' + JSON.stringify(res.data))
        commit('setCartList', res.data.result)

      })

    },
    addToCartList({
      dispatch,
      commit
    }, newItem) {

      axios.post("/goods/addcar", {
        productId: newItem.productId,
        headers: {
          Cookie: 'userId=' + this.userName
        }
      }).then((res) => {
        console.log(JSON.stringify('res.data:' + res.data))
        if (res.data.status == '0') {
          console.log('res.data.status==0')
          dispatch('getCartListFromServer')
        }
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
    getSelectAll: function (state) {
      return state.selectAll
    },
    getCartList: function (state) {
      return state.cartList
    },
    cartListTotalAmount: function (state) {
      var totalAmount = 0
      console.log('state.cartList:' + JSON.stringify(state.cartList))
      state.cartList.forEach(function (item, index, array) {
        totalAmount += item.productNum
      })
      console.log('state.cartList.totalAmount:' + totalAmount)
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
