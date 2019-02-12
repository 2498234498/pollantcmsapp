import Vue from 'vue'
import Router from 'vue-router'
import Login from '@view/Login'
import Main from '@view/Main'
import Home from '@view/Main/Home'
import Homehome from '@view/Main/Home/Homehome'
import Detail from '@view/Main/Home/Detail'
import ExcessData from '@view/Main/Home/ExcessData'
import Data from '@view/Main/Data'
import DataList from '@view/Main/Data/DataList'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      redirect: { name: 'Home' },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home,
          redirect: { name: 'Homehome' },
          children: [
            {
              path: '',
              name: 'Homehome',
              component: Homehome
            },
            {
              path: 'detail',
              name: 'Detail',
              component: Detail
            },
            {
              path: 'excessData',
              name: 'ExcessData',
              component: ExcessData
            }
          ]
        },
        {
          path: 'data',
          name: 'Data',
          component: Data,
          redirect: { name: 'DataList' },
          children: [
            {
              path: 'dataList',
              name: 'DataList',
              component: DataList
            }
          ]
        }
      ]
    }
  ]
})

export default router
