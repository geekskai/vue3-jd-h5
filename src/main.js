/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-27 20:10:38
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 13:39:04
 * @FilePath: /refactor-with-vue3/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "@/plugins/axios";

// import SvgIcon from '@/components/SvgIcon'// svg组件
import 'lib-flexible/flexible'

import icons from '@/icons' // icon
import components from '@/components' // icon

import Vant from 'vant'
import 'vant/lib/index.css' // 全局引入样式

import './mock/mock'

import eventBus from './utils/eventBus'

const app = createApp(App);
app.use(Vant).use(store).use(router).mount('#app');
app.use(axios)
app.use(icons)
app.use(components)
app.use(eventBus)
