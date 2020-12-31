/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-27 20:10:38
 * @LastEditors: gankai
 * @LastEditTime: 2020-12-28 00:10:06
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
app.component('svg-icon', SvgIcon);


const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./icons/svgs/', false, /\.svg$/)
requireAll(req)