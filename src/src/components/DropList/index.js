import Vue from 'vue'
import './index.css'

export default Vue.component('DropList', {
  data() {
    return {
      top: (this.config.position && this.config.position.top) || null,
      right: (this.config.position && this.config.position.right) || null,
      bottom: (this.config.position && this.config.position.bottom) || null,
      left: (this.config.position && this.config.position.left) || null,
      width: this.config.width || null,
      list: this.config.list || [],
      isShow: this.config.isShow || false
    }
  },
  props: ['config'],
  methods: {
    show() {
      this.isShow = true
    },
    hidden() {
      this.isShow = false
    },
    Action(callback) {
      callback()
      this.hidden()
    }
  },
  template: `
    <div class="wrap" v-show="isShow">
      <div class="wrap-bg" @click="hidden()"></div>
      <div class="wrap-content" :style="'width:'+width+';top:'+top+';right:'+right+';bottom:'+bottom+';left:'+left">
        <div class="item" v-for="item in list" v-text="item.text" @click="Action(item.action)"></div>
      </div>
    </div>
  `
})