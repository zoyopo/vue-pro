import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test' // component下vue模块的引入
import Register from '@/components/Register'
// import nav from '@/components/Nav'
import CloudMusic from '@/components/CloudMusic'
import FindMusic from '@/components/FindMusic'
import SongSheets from '@/components/FindMusic/SongSheets'
import FindMusicContent from '@/components/FindMusic/FindMusicContent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CloudMusic',
      component: CloudMusic,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/',
          component: FindMusic,
          children: [
            {
              path: 'songsheets',
              component: SongSheets
            },
            {
              path: '/',
              component: FindMusicContent

            }

          ]
        }

      ]
    },
    {
      path: '/findmusic',
      name: 'findmusic',
      component: FindMusic,
      children: [
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'songsheets',
          component: SongSheets
        },
        {
          path: '/',
          component: FindMusicContent

        }

      ]
    },
    // {
    //   path: '/',
    //   name: 'nav',
    //   component: nav
    // },
    {
      path: '/test', // 路由
      name: 'Test',
      component: Test // 模块
    },
    {
      path: '/register', // 路由
      name: 'Register',
      component: Register // 模块
    },
    {
      path: '/register', // 路由
      name: 'Register',
      component: Register // 模块
    }
    // {
    //   path: '/dlg',   // 路由
    //   name: 'Dlg',
    //   component: Dlg
    // }
  ]
})
