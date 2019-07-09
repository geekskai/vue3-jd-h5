<template>
  <div id="app">
      <router-view class="router-view" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "./styles/base.scss";
body {
  max-width: 800px;
  margin: 0 auto;
}
#app {
  width: 100%;
  max-width: 800px;
  min-height: 100%;
  margin: 0 auto;
  // background: #fff;
  background-color: #efeff4;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
