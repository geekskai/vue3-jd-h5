<template>
  <div>
    <div class="wrap" v-show="isShow">
      <div
        class="wrap-content"
        :style="
          'width:' +
          width +
          ';top:' +
          top +
          ';right:' +
          right +
          ';bottom:' +
          bottom +
          ';left:' +
          left
        "
      >
        <div
          class="item"
          v-for="(item, index) in list"
          :key="index"
          @click="Action(item)"
        >
          <svg-icon :icon-class="item.icon"></svg-icon>
          <span>{{ item.text }}</span>
        </div>
      </div>
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
      isShow: this.config.isShow || false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hidden() {
      this.isShow = false;
    },
    Action(item) {
      item.action(item);
      this.hidden();
    },
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
};
</script>

<style scoped lang="scss">
.wrap-content {
  position: absolute;
  opacity: 1;
  background: #fff;
  border-radius: 6px;
  z-index: 999999;
  .item {
    opacity: 0.8;
    padding: 8px 0px;
    margin: 0 15px;
    font-size: 14px;
    color: #3a3a3a;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    span {
      flex: 1;
      text-align: center;
    }
    .svg-icon {
      width: 19px;
      height: 19px;
    }
  }
}

.wrap-content:before {
  content: "";
  position: absolute;
  right: 10px;
  top: -14px;
  border: 6px solid transparent;
  border-bottom: 10px solid #fff;
}

.wrap-content .item:last-child {
  border-bottom: none;
}
</style>
