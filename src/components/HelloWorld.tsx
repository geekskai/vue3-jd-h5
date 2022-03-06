import { defineComponent, ref } from "vue";

import "./index.less";

export default defineComponent({
  setup() {
    const size = ref<"large" | "medium" | "small" | "mini">("mini");
    return () => (
      <>
        <div class={size.value === "large" ? "large" : "layout"}>color</div>
        <van-button size={size.value} type="primary">
          大号主要按钮
        </van-button>
        <van-button type="success">成功按钮</van-button>
        <van-button type="default">默认按钮</van-button>
      </>
    ); //写一个 hello world祭天
  },
});
