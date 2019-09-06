<template>
  <div class="tabbar">
    <ul>
      <van-tabbar
        route
        v-model="active"
        active-color="#FE4F70"
        inactive-color="#949497"
        style="z-index: 100;"
      >
        <van-tabbar-item name="index" to="/index">
          <span>首页</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_home.active : icon_home.normal"
          />
        </van-tabbar-item>
        <van-tabbar-item name="classify" to="/classify">
          <span>分类</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_classify.active : icon_classify.normal"
          />
        </van-tabbar-item>
        <van-tabbar-item name="shopCart" to="/shopCart" :info="count">
          <!-- <van-tabbar-item name="shopCart" to="/shopCart"> -->
          <span>购物车</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_cart.active : icon_cart.normal"
          />
        </van-tabbar-item>
        <van-tabbar-item name="mine" to="/mine">
          <span>我</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon_mine.active : icon_mine.normal"
          />
        </van-tabbar-item>
      </van-tabbar>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "tabbar",
  data() {
    return {
      icon_home: {
        normal: require("@/assets/icons/tabbar/home.png"),
        active: require("@/assets/icons/tabbar/home_active.png")
      },
      icon_classify: {
        normal: require("@/assets/icons/tabbar/classify.png"),
        active: require("@/assets/icons/tabbar/classify_active.png")
      },
      icon_cart: {
        normal: require("@/assets/icons/tabbar/cart.png"),
        active: require("@/assets/icons/tabbar/cart_active.png")
      },
      icon_mine: {
        normal: require("@/assets/icons/tabbar/mine.png"),
        active: require("@/assets/icons/tabbar/mine_active.png")
      },
      active: 0
    };
  },
  created() {
    this.$eventBus.$on(
      "changeTag",
      tag => {
        this.active = tag;
      },
      this
    );
  },
  computed: {
    ...mapState({
      count: state => state.cart.count
    })
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.tabbar {
  ul {
    height: 50px;
  }
}
</style>
