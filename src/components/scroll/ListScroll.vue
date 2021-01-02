<template>
  <div ref="wrapper" class="scroll-wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { onMounted, nextTick, ref, watchEffect } from "vue";

export default {
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 1
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: true
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    scrollData: {
      type: Array,
      default: null
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  setup(props, setupContext) {
    const wrapper = ref(null);
    const initScroll = () => {
      if (!wrapper.value) {
        return;
      }

      const scroll = new BScroll(wrapper.value, {
        probeType: props.probeType,
        click: props.click,
        scrollX: props.scrollX
      });

      // 是否派发滚动事件
      if (props.listenScroll) {
        scroll.on("scroll", pos => {
          setupContext.emit("scroll", pos);
        });
      }
      // 是否派发滚动到底部事件，用于上拉加载
      if (props.pullup) {
        scroll.on("scrollEnd", () => {
          // 滚动到底部
          if (scroll.y <= scroll.maxScrollY + 50) {
            setupContext.emit("scrollToEnd");
          }
        });
      }
      // 是否派发顶部下拉事件，用于下拉刷新
      if (props.pulldown) {
        scroll.on("touchend", pos => {
          // 下拉动作
          if (pos.y > 50) {
            setupContext.emit("pulldown");
          }
        });
      }
      // 是否派发列表滚动开始的事件
      if (props.beforeScroll) {
        scroll.on("beforeScrollStart", () => {
          setupContext.emit("beforeScroll");
        });
      }
    };

    const disable = () => {
      // 代理better-scroll的disable方法
      scroll?.disable();
    };

    const enable = () => {
      // 代理better-scroll的enable方法
      scroll?.enable();
    };

    const refresh = () => {
      // 代理better-scroll的refresh方法
      scroll?.refresh();
    };

    const scrollTo = () => {
      // 代理better-scroll的scrollTo方法
      scroll?.scrollTo.apply(scroll, arguments);
    };

    const scrollToElement = () => {
      // 代理better-scroll的scrollToElement方法
      scroll?.scrollToElement.apply(scroll, arguments);
    };

    onMounted(() => {
      nextTick(() => {
        initScroll();
      });
    });
    return {};
  }
};
</script>

<style lang="scss" type="text/scss" scoped>
.scroll-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
}
</style>
