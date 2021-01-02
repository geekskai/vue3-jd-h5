<template>
  <div class="classify">
    <header class="home-header">商品分类</header>
    <section class="search-wrap" ref="searchWrap">
      <list-scroll class="nav-side-wrapper">
        <ul class="nav-side">
          <li
            v-for="(item, index) in categoryDatas"
            :key="index"
            :class="{ active: currentIndex === index }"
            @click="selectMenu(index)"
          >
            <span>{{ item.name.slice(0, 2) }}</span>
            <span>{{ item.name.slice(2) }}</span>
          </li>
        </ul>
      </list-scroll>
      <list-scroll class="search-content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <template v-for="(category, index) in categoryDatas">
              <div
                class="swiper-slide"
                :key="index"
                v-if="currentIndex === index"
              >
                <img
                  @click="selectProduct(category.value)"
                  class="category-main-img"
                  :src="category.imgUrl"
                  v-if="category.imgUrl"
                />
                <div v-for="(products, index) in category.list" :key="index">
                  <p class="goods-title">{{ products.title }}</p>
                  <div class="category-list">
                    <div
                      class="product-item"
                      @click="selectProduct(product.value)"
                      v-for="(product, index) in products.productList"
                      :key="index"
                    >
                      <img class="item-img" :src="product.imgUrl" />
                      <p class="product-title">{{ product.title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </list-scroll>
    </section>
    <tabbar></tabbar>
  </div>
</template>

<script>
import ListScroll from "@/components/scroll/ListScroll";
import { ref, reactive, onMounted, toRefs, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "classify",
  components: {
    ListScroll
  },
  setup(props) {
    
    const { ctx } = getCurrentInstance();
    const $router = useRouter();

    const searchWrap = ref(null);

    const state = reactive({
      categoryDatas: [],
      currentIndex: 0
    });

    const selectMenu = index => {
      state.currentIndex = index;
    };

    const setSearchWrapHeight = () => {
      const { clientHeight } = document.documentElement;
      searchWrap.value.style.height = clientHeight - 100 + "px";
    };

    const selectProduct = sku => {
      $router.push({ path: "/classify/recommend", query: { sku } });
    };

    onMounted(async () => {
      setSearchWrapHeight();
      ctx.$eventBus.$emit("changeTag", 1);
      const { data } = await ctx.$http.get(
        "http://test.happymmall.com/category/categoryData"
      );
      const { categoryData } = data;
      state.categoryDatas = categoryData;
    });

    return {
      searchWrap,
      ...toRefs(state),
      selectProduct,
      selectMenu
    };
  }
};
</script>

<style scoped lang="scss" src="./index.scss"></style>
