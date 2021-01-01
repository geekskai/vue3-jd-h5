/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-27 20:10:38
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-01 15:57:36
 * @FilePath: /refactor-with-vue3/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '@/views/home/index.vue'

const indexRouter = {
  // 默认页面
  path: '/',
  component: () => import( /* webpackChunkName: "index" */ '@/views/index'),
  redirect: '/index',
  children: []
}

const routes = [
  indexRouter,
  // 无权限页面
  {
    path: '/nopermission',
    name: 'nopermission',
    meta: {
      index: 1
    },
    component: () => import( /* webpackChunkName: "NoPermission" */ '@/views/error/NoPermission')
  },
  {
    path: '/*',
    name: '404',
    meta: {
      index: 1
    },
    component: () => import( /* webpackChunkName: "404" */ '@/views/error/404')
  },
]

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   }
// ]

const routerContext = require.context('./modules', true, /\.js$/)
routerContext.keys().forEach(route => {
  const routerModule = routerContext(route)
  indexRouter.children = [...indexRouter.children, ...(routerModule.default || routerModule)]
})

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
