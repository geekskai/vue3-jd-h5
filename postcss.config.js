/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-27 20:36:26
 * @LastEditors: gankai
 * @LastEditTime: 2020-12-27 20:37:37
 * @FilePath: /refactor-with-vue3/postcss.config.js
 */
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
