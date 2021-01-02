/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-01 17:05:34
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 14:30:29
 * @FilePath: /refactor-with-vue3/src/router/modules/balanceWallet.js
 */
export default [{
  path: '/wallet/balanceWallet',
  name: 'balanceWallet',
  meta: {
    index: 15
  },
  component: () => import('@/views/wallet/balanceWallet.vue')
}]
