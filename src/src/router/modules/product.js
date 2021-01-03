/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-01 17:05:34
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-03 16:10:54
 * @FilePath: /refactor-with-vue3/src/router/modules/product.js
 */
export default [{
  path: '/classify/product/:id?',
  name: 'product',
  meta: {
    index: 25
  },
  component: () => import('@/views/product/index.vue')
}]
