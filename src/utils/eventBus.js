/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-01 17:19:50
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 15:39:38
 * @FilePath: /refactor-with-vue3/src/utils/eventBus.js
 */
import { getCurrentInstance } from 'vue'

class EventBus {
  constructor(app) {
    if (!this.handles) {
      Object.defineProperty(this, 'handles', {
        value: {},
        enumerable: false
      })
    }
    this.app = app
    // _uid和EventName的映射
    this.eventMapUid = {}
  }
  setEventMapUid(uid, eventName) {
    if (!this.eventMapUid[uid]) {
      this.eventMapUid[uid] = []
    }
    this.eventMapUid[uid].push(eventName)
    // 把每个_uid订阅的事件名字push到各自uid所属的数组里
  }
  $on(eventName, callback, vm) {
    // vm是在组件内部使用时组件当前的this用于取_uid
    if (!this.handles[eventName]) {
      this.handles[eventName] = []
    }
    this.handles[eventName].push(callback)
    this.setEventMapUid(vm._uid, eventName)
  }
  $emit() {
    let args = [...arguments]
    let eventName = args[0]
    let params = args.slice(1)
    if (this.handles[eventName]) {
      let len = this.handles[eventName].length
      for (let i = 0; i < len; i++) {
        this.handles[eventName][i](...params)
      }
    }
  }
  $offVmEvent(uid) {
    let currentEvents = this.eventMapUid[uid] || []
    currentEvents.forEach(event => {
      this.$off(event)
    })
  }
  $off(eventName) {
    delete this.handles[eventName]
  }
}

let $EventBus = {}
$EventBus.install = (app) => {
  app.config.globalProperties.$eventBus = new EventBus(app)
  app.mixin({
    beforeUnmount() {
      const currentInstance = getCurrentInstance();
      // 拦截beforeUnmount钩子,自动销毁自身所有订阅的事件
      this.$eventBus.$offVmEvent(currentInstance._uid)
    }
  })
}
export default $EventBus
