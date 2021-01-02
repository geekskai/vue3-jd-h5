/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-01 17:05:34
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 15:26:00
 * @FilePath: /refactor-with-vue3/src/router/modules/tabbar.js
 */
export default [{
    path: '/index',
    name: 'index',
    meta: {
      index: 1
    },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/classify',
    name: 'classify',
    meta: {
      index: 1
    },
    component: () => import('@/views/classify/index.vue')
  },
  {
    path: '/shopCart',
    name: 'shopCart',
    meta: {
      index: 1
    },
    component: () => import('@/views/shopCart/index.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    meta: {
      index: 1
    },
    component: () => import('@/views/mine/index.vue')
  },
]
