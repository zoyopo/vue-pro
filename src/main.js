// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'mint-ui/lib/style.css'

import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import vuex from 'vuex'
//
axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.withCredentials = false
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(vuex)

const store = new vuex.Store({
  state: {
    userInfo: {},
    playListInfo: {}
  },
  mutations: {
    storeUserInfo (state, playload) {
      state.userInfo = playload
      sessionStorage.setItem('userInfo', JSON.stringify(playload))
    },
    storePlayListInfo (state, playload) {
      state.playListInfo = playload
    }
  },
  actions: {},
  getters: {}
})

// Vue.use(Button)
/* eslint-disable no-new */

// 跨域请求参数

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})

