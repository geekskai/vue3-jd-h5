/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-27 20:10:38
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-01 14:38:31
 * @FilePath: /refactor-with-vue3/src/store/index.js
 */
import { createStore } from 'vuex'

import cart from './modules/cart'
import search from './modules/search'

export default createStore({
  modules: {
    cart,
    search
  },
  strict: process.env.NODE_ENV !== 'production'
})
