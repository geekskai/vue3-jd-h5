/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-01 17:05:34
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 14:30:21
 * @FilePath: /refactor-with-vue3/src/router/modules/areaNode.js
 */
export default [{
  path: '/node/areaNode',
  name: 'areaNode',
  meta: {
    index: 15
  },
  component: () => import('@/views/node/areaNode.vue')
}]
