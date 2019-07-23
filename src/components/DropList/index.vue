<template>
  <div class="wrap" v-show="isShow">
    <div
      class="wrap-content"
      :style="'width:'+width+';top:'+top+';right:'+right+';bottom:'+bottom+';left:'+left"
    >
      <div
        class="item"
        v-for="(item,index) in list"
        v-text="item.text"
        :key="index"
        @click="Action(item.action)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropList",
  props: ["config"],

  data() {
    return {
      top: (this.config.position && this.config.position.top) || null,
      right: (this.config.position && this.config.position.right) || null,
      bottom: (this.config.position && this.config.position.bottom) || null,
      left: (this.config.position && this.config.position.left) || null,
      width: this.config.width || null,
      list: this.config.list || [],
      isShow: this.config.isShow || false
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hidden() {
      this.isShow = false;
    },
    Action(callback) {
      callback();
      this.hidden();
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {}
};
</script>

<style scoped lang="scss">
.wrap-content {
  position: absolute;
  opacity: 1;
  background: #fff;
  border-radius: 10px;
  z-index: 999999;
}

.wrap-content:before {
  content: "";
  position: absolute;
  right: 10px;
  top: -25px;
  border: 10px solid transparent;
  border-bottom: 20px solid #fff;
}

.wrap-content .item {
  padding: 8px 0px;
  margin: 0 5px;
  font-size: 11px;
  text-align: center;
  color: #000;
  border-bottom: 1px solid #f2f2f2;
}

.wrap-content .item:last-child {
  border-bottom: none;
}
</style>
