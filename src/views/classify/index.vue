<template>
  <div class="classify">
    <header class="home-header">商品分类</header>
    <section class="search-wrap" ref="searchWrap">
      <list-scroll class="nav-side-wrapper">
        <ul class="nav-side">
          <li
            v-for="(item, index) in categoryDatas.value"
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
            <template v-for="(category, index) in categoryDatas.value">
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
import { ref, reactive, onMounted, computed, toRefs } from "vue";
import { useRouter } from "vue-router";
import axios from "@/plugins/axios";

export default {
  name: "classify",
  components: {
    ListScroll
  },
  async setup(props) {
    const $router = useRouter();
    const tags = ref([]);
    const currentIndex = ref(0);
    const searchWrap = ref(null);
    const categoryDatas = reactive({ value: [] });

    const { data } = await axios.get(
      "http://test.happymmall.com/category/categoryData"
    );
    const { categoryData } = data;
    categoryDatas.value = categoryData;

    const selectMenu = index => {
      currentIndex.value = index;
    };

    const setSearchWrapHeight = () => {
      const { clientHeight } = document.documentElement;
      searchWrap.value.style.height = clientHeight - 100 + "px";
    };
    const selectProduct = sku => {
      $router.push({ path: "/classify/recommend", query: { sku } });
    };
    onMounted(() => {
      setSearchWrapHeight();
      // TODO:
      // root.$eventBus.$emit("changeTag", 1);
    });
    return {
      tags,
      currentIndex,
      searchWrap,
      categoryDatas,
      selectProduct,
      selectMenu
    };
  }
};
</script>

<style scoped lang="scss" src="./index.scss"></style>
