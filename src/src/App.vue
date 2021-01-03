<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-04-29 22:08:12
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-02 14:32:14
 * @FilePath: /refactor-with-vue3/src/App.vue
 -->
<template>
  <keep-alive>
    <router-view />
  </keep-alive>
</template>

<script>
export default {
  name: "App"
};
</script>
<style lang="scss">
@import "./styles/base.scss";
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #efeff4;
  -webkit-overflow-scrolling: touch;
}
</style>
