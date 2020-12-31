<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-04-29 22:08:12
 * @LastEditors: gankai
 * @LastEditTime: 2020-12-28 00:36:36
 * @FilePath: /refactor-with-vue3/src/App.vue
 -->
<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
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
