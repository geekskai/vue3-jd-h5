<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-01-01 13:57:27
 * @LastEditors: gankai
 * @LastEditTime: 2021-01-01 16:31:58
 * @FilePath: /refactor-with-vue3/src/components/tabbar/index.vue
-->
<template>
  <div class="tabbar">
    <ul>
      <van-tabbar
        route
        v-model="active"
        @change="tabChange(active)"
        active-color="#FE4F70"
        inactive-color="#949497"
        style="z-index: 100"
      >
        <van-tabbar-item name="index" icon="home-o" to="/index">
          首页
        </van-tabbar-item>
        <van-tabbar-item name="classify" icon="apps-o" to="/classify">
          分类
        </van-tabbar-item>
        <van-tabbar-item
          name="shopCart"
          icon="shopping-cart-o"
          to="/shopCart"
          :badge="count"
        >
          <!-- <van-tabbar-item name="shopCart" to="/shopCart"> -->
          购物车
        </van-tabbar-item>
        <van-tabbar-item name="mine" icon="user-o" to="/mine">
          我
        </van-tabbar-item>
      </van-tabbar>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "tabbar",
  setup() {
    const active = ref(0);
    const store = useStore();

    const count = computed(() => store.state.cart.count);
    return {
      active,
      count,
    };
  },
  // data() {
  //   return {
  //     icon_home: {
  //       normal: require("@/assets/icons/tabbar/home.png"),
  //       active: require("@/assets/icons/tabbar/home_active.png"),
  //     },
  //     icon_classify: {
  //       normal: require("@/assets/icons/tabbar/classify.png"),
  //       active: require("@/assets/icons/tabbar/classify_active.png"),
  //     },
  //     icon_cart: {
  //       normal: require("@/assets/icons/tabbar/cart.png"),
  //       active: require("@/assets/icons/tabbar/cart_active.png"),
  //     },
  //     icon_mine: {
  //       normal: require("@/assets/icons/tabbar/mine.png"),
  //       active: require("@/assets/icons/tabbar/mine_active.png"),
  //     },
  //     active: 0,
  //   };
  // },
  created() {
    // TODO:
    // this.$eventBus.$on(
    //   "changeTag",
    //   (tag) => {
    //     this.active = tag;
    //   },
    //   this
    // );
  },

  methods: {
    tabChange(active) {
      console.log("==active=====>", active);
    },
  },
};
</script>

<style scoped lang="scss">
.tabbar {
  ul {
    height: 50px;
  }
}
</style>
