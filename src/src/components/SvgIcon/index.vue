<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2020-04-29 22:08:12
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-03 19:54:46
 * @FilePath: /refactor-with-vue3/src/components/SvgIcon/index.vue
 -->
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { computed, toRefs, toRef } from "vue";
export default {
  name: "svg-icon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  setup(initProps) {
    // const { iconClass } = initProps;❌
    // 因为 props 是响应式的，你不能使用 ES6 解构，因为它会消除 prop 的响应性。
    // 如果需要解构 prop，可以通过使用 setup 函数中的 toRefs 来完成此操作：
    const { iconClass } = toRefs(initProps);
    const iconName = computed(() => {
      return `#icon-${iconClass.value}`;
    });

    // 由于 className 是可选的 prop，则传入的 props 中可能没有 className 。
    // 在这种情况下，toRefs 将不会为 className 创建一个 ref ，需要使用 toRef 替代它。
    const className = toRef(initProps, "className");
    const svgClass = computed(() => {
      if (className) {
        return "svg-icon " + className.value;
      } else {
        return "svg-icon";
      }
    });
    return {
      iconName,
      svgClass
    };
  }
};
</script>

<style scoped>
.svg-icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
