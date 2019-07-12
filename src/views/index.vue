<template>
  <div class="index">
    <transition :name="transitionName">
      <router-view class="router-view" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  // 监听路由的路径，可以通过不同的路径去选择不同的切换效果
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        //外---》内
        this.transitionName = "slide-left";
      } else if (to.meta.index < from.meta.index) {
        //内---》外
        this.transitionName = "slide-right";
      } else {
        this.transitionName = ""; //同级 无过渡效果
      }
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.index {
  /*切换样式出错处理*/
  .router-view {
    width: 100%;
    height: 100%;
    // position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch;
  }
  /*切换动画*/
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    height: 100%;
    will-change: transform;
    transition: all 500ms;
    position: absolute;
    backface-visibility: hidden;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
