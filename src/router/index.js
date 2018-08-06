import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import GoodsList from '@/components/GoodsList'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goodslist'
    },
    {
      path: '/goodslist',
      name: 'goodslist',
      components:{ 
        header: Header,
        content: GoodsList
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components:{ 
        header: Header,
        content: Cart
      }
    },
  ]
})
