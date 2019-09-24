<template>
  <div id="app">
    <keep-alive include="home,shopCart,mine">
      <router-view v-if="isRouterAlive" />
    </keep-alive>
  </div>
</template>

<script>
// 禁止在iOS端将页面手动放大缩小的事件
window.onload = function() {
  document.addEventListener("touchstart", function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  });
  document.addEventListener("gesturestart", function(event) {
    event.preventDefault();
  });
};
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  }
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
  position: relative;
  z-index: -2;
  background-color: #efeff4;
  -webkit-overflow-scrolling: touch;
}
</style>
