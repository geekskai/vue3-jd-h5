/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-01 17:19:50
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 20:35:02
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
