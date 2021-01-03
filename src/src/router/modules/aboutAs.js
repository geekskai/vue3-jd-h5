/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-01 17:05:34
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 14:28:56
 * @FilePath: /refactor-with-vue3/src/router/modules/aboutAs.js
 */
export default [
  {
    path: '/setting/aboutAs',
    name: 'aboutAs',
    meta: {
      index: 13
    },
    component: () => import('@/views/mine/aboutAs.vue')
  }
]