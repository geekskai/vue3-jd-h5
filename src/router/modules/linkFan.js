/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-04-03 12:17:45
 * @LastEditors: gankai
 * @LastEditTime: 2020-04-22 22:56:26
 * @FilePath: /vue-jd-h5/src/router/modules/linkFan.js
 */
export default [
  {
    path: '/mine/linkFan',
    name: 'linkFan',
    meta: {
      index: 13
    },
    component: () => import('@/views/mine/linkFan.vue')
  }
]
