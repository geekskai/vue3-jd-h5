/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-01 17:05:34
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 14:28:44
 * @FilePath: /refactor-with-vue3/src/router/modules/addAddress.js
 */
export default [
  {
    path: '/mine/addAddress',
    name: 'addAddress',
    meta: {
      index: 13
    },
    component: () => import('@/views/mine/addAddress.vue')
  }
]