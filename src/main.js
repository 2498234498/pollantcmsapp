// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible.js'
import Fastclick from './util/fastclick'
import native from '@util/native'
import { setStatusBarStyle, msgPush } from '@util'
import '@scss/reset.scss'
import VeBmap from 'v-charts/lib/bmap.common.min'

Vue.config.productionTip = false

Fastclick.FastClick.attach(document.body)

Vue.component(VeBmap.name, VeBmap)

// 初始化native
native.then(_ => {
  setStatusBarStyle('dark')
  msgPush()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
