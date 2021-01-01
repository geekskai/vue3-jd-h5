/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-27 20:10:38
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-01 14:29:02
 * @FilePath: /refactor-with-vue3/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import SvgIcon from '@/components/SvgIcon'// svg组件
import 'lib-flexible/flexible'

import Vant from 'vant'
import 'vant/lib/index.css' // 全局引入样式

import './mock/mock'

// import EventBus from './utils/eventBus'

// .use(EventBus)

const app = createApp(App);
app.use(Vant).use(store).use(router).mount('#app');

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// 对符合'xx/xx.vue'组件格式的组件取组件名
function validateFileName(str) {
  return /^\S+\.vue$/.test(str) &&
    str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
}

const requireComponent = require.context('./components', true, /\.vue$/)

// 找到组件文件夹下以.vue命名的文件，如果文件名为index，那么取组件中的name作为注册的组件名
requireComponent.keys().forEach(filePath => {
  const componentConfig = requireComponent(filePath)
  const fileName = validateFileName(filePath)
  const componentName = fileName.toLowerCase() === 'index' ?
    capitalizeFirstLetter(componentConfig.default.name) :
    fileName
  app.component(componentName, componentConfig.default || componentConfig)
})

app.component('svg-icon', SvgIcon);
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./icons/svgs/', false, /\.svg$/)
requireAll(req)