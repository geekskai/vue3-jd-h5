/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-12-27 20:10:38
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-03 20:46:14
 * @FilePath: /refactor-with-vue3/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "@/plugins/axios";

import 'lib-flexible/flexible'

import icons from '@/icons' // 全局注册所有svg的icon
import components from '@/components' // 全局注册所有组件

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
