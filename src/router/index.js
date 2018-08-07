import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/components/GoodsList'
import CartFlowchart from '@/components/CartFlowchart'
import CartList from '@/components/CartList'
import CartAddress from '@/components/CartAddress'
import CartDetail from '@/components/CartDetail'
import CartCompleted from '@/components/CartCompleted'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goodslist'
    },
    {
      path: '/goodslist',
      component:GoodsList      
    },
    {
      path: '/cart',
      component:CartFlowchart,
      children:[
        {
          path: '',
          redirect:'list'      
        },
        {
          path: 'list',
          component:CartList      
        },
        {
          path: 'address',
          component:CartAddress      
        },
        {
          path: 'detail',
          component:CartDetail
        },
        {
          path: 'completed',
          component:CartCompleted     
        }
      ]
    },
  ]
})
