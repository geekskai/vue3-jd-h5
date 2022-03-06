import { defineComponent } from "vue";

import { RouterView } from "vue-router"; //从vue router中引入RouterView组件 实际上也可以不用引入直接使用

export default defineComponent({
  setup() {
    return () => <RouterView />;
  },
});
