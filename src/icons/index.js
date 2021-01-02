/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-02 13:21:37
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 13:26:38
 * @FilePath: /refactor-with-vue3/src/icons/index.js
 */
import SvgIcon from '@/components/SvgIcon'

const requireAll = requireContext => requireContext.keys().map(requireContext)

export default {
  install(app) {
    app.component('svg-icon', SvgIcon);
    const req = require.context('./svgs/', false, /\.svg$/)
    requireAll(req)
  }
}