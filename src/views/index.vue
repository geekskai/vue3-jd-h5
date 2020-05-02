<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-04-29 22:08:13
 * @LastEditors: gankai
 * @LastEditTime: 2020-05-02 15:55:00
 * @FilePath: /vue-jd-h5/src/views/index.vue
 -->
<template>
  <div class="index">
    <!-- <transition :name="transitionName"> -->
    <router-view class="router-view" />
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="scss" scoped>
.index {
  /*切换样式出错处理*/
  // height: 100%;
  .router-view {
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
