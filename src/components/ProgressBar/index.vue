<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-01 17:19:50
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 20:33:51
 * @FilePath: /refactor-with-vue3/src/components/ProgressBar/index.vue
-->
<template>
  <div class="progress-bar-box">
    <div class="progress-bar">
      <div class="box">
        <div class="clip" id="context"></div>
        <span class="tips-number">已售{{ 55 }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {};
  },
  created() {},
  methods: {
    processbar() {}
  }
};
</script>

<style scoped lang="scss">
.progress-bar-box {
  .progress-bar {
    display: inline-block;
    .box {
      border-radius: 30px;
      width: 74px;
      height: 11px;
      background-color: #f1f0f0;
      border: 1px solid #f1f0f0;
      padding: 0;
      display: inline-block;
      position: relative;
      .clip {
        background: linear-gradient(to right, #d8182d, #d8182d);
        width: 34px;
        margin: 0px;
        box-shadow: 0px 0px 2px #d8182d33;
        height: 10px;
        border-radius: 20px;
      }
      .tips-number {
        position: absolute;
        right: 10px;
        top: 0;
        line-height: 9px;
        font-size: 7px;
      }
    }
  }
}
</style>
