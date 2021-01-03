/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-03 16:46:14
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-03 21:11:41
 * @FilePath: /refactor-with-vue3/src/hooks/useClickOutSide.js
 */

import { onMounted, onUnmounted, ref } from "vue";

export default useClickOutSide = (domRef) => {
  const isOutside = ref(false);

  const handler = (event) => {
    if (domRef.value) {
      if (domRef.value.contains(event.target)) {
        isOutside.value = false;
      } else {
        isOutside.value = true;
      }
    }
  }

  onMounted(() => {
    document.addEventListener('click', handler);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handler);
  });

  return isOutside;
}
