// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'mint-ui/lib/style.css'

import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
import vuetable from "vuetable-2"
//lazyLoad
// Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: '../static/Img/FindMusic/loading.gif',
  attempt: 1
})
//
//vue-table2
Vue.use(vuetable);
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = '//u-to-world.com:3000'
// axios.defaults.withCredentials = false
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(vuex)

const store = new vuex.Store({
  state: {
    userInfo: {},
    playListInfo: [],
    CategoriesInfo: {},
    arrayInfo: []
  },
  mutations: {
    storeUserInfo (state, playload) {
      state.userInfo = playload
      sessionStorage.setItem('userInfo', JSON.stringify(playload))
    },
    storePlayListInfo (state, playload) {
      state.playListInfo = playload
    },
    storeCategoriesInfo (state, playload) {
      state.CategoriesInfo = playload
    }
  },
  actions: {},
  getters: {
    getcategoriesById: (state) => (id) => {
      return state.CategoriesInfo.sub.find(todo => todo.category === id)
    }
  }
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

