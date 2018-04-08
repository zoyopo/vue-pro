import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test' // component下vue模块的引入
import Register from '@/components/Register'
import nav from '@/components/Nav'
import CloudMusic from '@/components/CloudMusic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CloudMusic',
      component: CloudMusic
    },
    // {
    //   path: '/',
    //   name: 'nav',
    //   component: nav
    // },
    {
      path: '/test',   // 路由
      name: 'Test',
      component: Test  // 模块
    },
    {
      path: '/register',   // 路由
      name: 'Register',
      component: Register  // 模块
    },
    {
      path: '/register',   // 路由
      name: 'Register',
      component: Register  // 模块
    }
    // {
    //   path: '/dlg',   // 路由
    //   name: 'Dlg',
    //   component: Dlg
    // }
  ]
})
