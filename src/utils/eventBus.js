/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2019-09-20 14:07:34
 * @LastEditors: gankai
 * @LastEditTime: 2020-03-22 19:53:54
 * @FilePath: /vue-jd-h5/src/utils/eventBus.js
 */
class EventBus {
  constructor (vue) {
    if (!this.handles) {
      Object.defineProperty(this, 'handles', {
        value: {},
        enumerable: false
      })
    }

    this.Vue = vue
    // _uid和EventName的映射
    this.eventMapUid = {}
  }

  setEventMapUid (uid, eventName) {
    if (!this.eventMapUid[uid]) {
      this.eventMapUid[uid] = []
    }
    this.eventMapUid[uid].push(eventName)
    // 把每个_uid订阅的事件名字push到各自uid所属的数组里
  }

  $on (eventName, callback, vm) {
    // vm是在组件内部使用时组件当前的this用于取_uid
    if (!this.handles[eventName]) {
      this.handles[eventName] = []
    }
    this.handles[eventName].push(callback)
    if (vm instanceof this.Vue) {
      this.setEventMapUid(vm._uid, eventName)
    }
  }

  $emit () {
    const args = [...arguments]
    const eventName = args[0]
    const params = args.slice(1)
    if (this.handles[eventName]) {
      const len = this.handles[eventName].length
      for (let i = 0; i < len; i++) {
        this.handles[eventName][i](...params)
      }
    }
  }

  $offVmEvent (uid) {
    const currentEvents = this.eventMapUid[uid] || []
    currentEvents.forEach(event => {
      this.$off(event)
    })
  }

  $off (eventName) {
    delete this.handles[eventName]
  }
}
// 写成Vue插件形式，直接引入然后Vue.use($EventBus)进行使用
const $EventBus = {}
$EventBus.install = (Vue, option) => {
  Vue.prototype.$eventBus = new EventBus(Vue)
  Vue.mixin({
    beforeDestroy () {
      // 拦截beforeDestroy钩子自动销毁自身所有订阅的事件
      this.$eventBus.$offVmEvent(this._uid)
    }
  })
}
export default $EventBus
