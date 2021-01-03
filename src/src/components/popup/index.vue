<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-01 17:19:50
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 20:33:24
 * @FilePath: /refactor-with-vue3/src/components/popup/index.vue
-->
<template>
  <div class="popup" v-show="popupShow">
    <div class="popup-content">
      <div class="message">
        <span class="iconfont">
          <svg-icon icon-class="icon-alertwarn"></svg-icon>
        </span>
        <span>{{ popupTitle }}</span>
      </div>
      <div class="popup-buttons">
        <span @click="cancelPopup">取消</span>
        <span @click="confirmPopup">确认</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {
    popupShow: {
      type: Boolean,
      default: false
    },
    popupTitle: {
      type: String,
      default: ""
    }
  },
  methods: {
    cancelPopup() {
      this.$emit("cancelPopup");
    },
    confirmPopup() {
      this.$emit("confirmPopup");
    }
  }
};
</script>

<style lang="scss" type="text/scss" scoped>
@import "../../styles/mixin.scss";
.popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999999;
  .popup-content {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    @include borderRadius(20px);
    .message {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 20px;
      text-align: center;
      @include boxSizing;
      .iconfont {
        text-align: center;
      }
      span {
        padding-top: 20px;
        font-size: 16px;
      }
    }
    .popup-buttons {
      display: flex;
      width: 100%;
      border-top: 1px solid #999;
      span {
        flex: 1;
        height: 70px;
        text-align: center;
        line-height: 70px;
        font-size: 16px;
        &:first-child {
          border-right: 1px solid #999;
          @include boxSizing;
        }
        &:last-child {
          color: $red;
        }
      }
    }
  }
}
</style>
