/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-27 20:10:38
 * @LastEditors: gankai
 * @LastEditTime: 2020-12-27 20:41:27
 * @FilePath: /refactor-with-vue3/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
