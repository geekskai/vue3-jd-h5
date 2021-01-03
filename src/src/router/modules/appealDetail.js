/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-01 17:05:34
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 14:29:35
 * @FilePath: /refactor-with-vue3/src/router/modules/appealDetail.js
 */
export default [{
  path: '/order/appealDetail',
  name: 'appealDetail',
  meta: {
    index: 13
  },
  component: () => import('@/views/order/appealDetail.vue')
}]
