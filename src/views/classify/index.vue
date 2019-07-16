<template>
  <div class="classify">
    <header class="home-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="left-btn"></svg-icon>
      </span>
      <div class="header-search" @click="handleSearch">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <router-link tag="span" class="search-title" to="./search">推荐搜索 关键词</router-link>
      </div>
    </header>
    <section class="search-wrap" ref="searchWrap">
      <list-scroll :scroll-data="categoryData" class="nav-side-wrapper">
        <ul class="nav-side">
          <li
            v-for="(item,index) in categoryData"
            :key="index"
            :class="{'active' : currentIndex === index}"
            @click="selectMenu(index)"
          >
            <span>{{item.name.slice(0,2)}}</span>
            <span>{{item.name.slice(2)}}</span>
          </li>
        </ul>
      </list-scroll>
      <div class="search-content">
        <list-scroll :scroll-data="categoryData">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <template v-for="(category,index) in categoryData">
                <div class="swiper-slide" :key="index" v-if="currentIndex === index">
                  <img
                    @click="selectProduct"
                    class="category-main-img"
                    :src="category.mainImgUrl"
                    v-if="category.mainImgUrl"
                  />
                  <div class="category-list" v-for="(products,index) in category.list" :key="index">
                    <div
                      class="product-item"
                      v-for="(product,index) in products.productList"
                      :key="index"
                      @click="selectProduct(product.title)"
                    >
                      <img :src="product.imgUrl" />
                      <p v-text="product.title" class="product-title"></p>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </list-scroll>
      </div>
    </section>
    <tabbar></tabbar>
  </div>
</template>

<script>
import ListScroll from "../../components/scroll/ListScroll";
export default {
  components: {
    ListScroll
  },
  name: "",
  data() {
    return {
      tags: [],
      currentIndex: 0,
      categoryData: [],
      tabslabel: [
        {
          label: "热门推荐",
          active: true
        },
        {
          label: "手机数码",
          active: false
        },
        {
          label: "电脑办公",
          active: false
        },
        {
          label: "计生情趣",
          active: false
        },
        {
          label: "美妆护肤",
          active: false
        },

        {
          label: "个人清洁",
          active: false
        },
        {
          label: "汽车生活",
          active: false
        },
        {
          label: "男装",
          active: false
        },
        {
          label: "女装",
          active: false
        },
        {
          label: "超市",
          active: false
        },
        {
          label: "户外运动",
          active: false
        },
        {
          label: "男装",
          active: false
        },
        {
          label: "女装",
          active: false
        },
        {
          label: "超市",
          active: false
        },
        {
          label: "户外运动",
          active: false
        },
        {
          label: "其他",
          active: false
        }
      ]
    };
  },
  created() {
    this.$http.get("http://test.happymmall.com/category/data").then(res => {
      const { data } = res.data;
      this.categoryData = data;
    });
  },
  methods: {
    handleSearch() {
      this.$router.push("/search");
    },
    //左侧菜单和右侧区域联动
    selectMenu($index) {
      this.currentIndex = $index;
    },
    //动态设置searc-wrap的高
    setSearchWrapHeight() {
      let $screenHeight = document.documentElement.clientHeight;
      this.$refs.searchWrap.style.height = $screenHeight - 100 + "px";
    },
    selectProduct(title) {
      this.$router.push("/recommend");
    }
  },
  mounted() {
    this.setSearchWrapHeight();
    this.$eventBus.$emit("changeTag", 1);
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/mixin.scss";
.classify {
  height: 100%;
  .home-header {
    position: fixed;
    left: 0;
    top: 10px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    display: flex;
    justify-content: flex-start;
    @include boxSizing;
    font-size: 30px;
    color: #fdc;
    z-index: 10000;
    .btn-left {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header-search {
      border-radius: 3px;
      margin-left: 16px;
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      color: #232326;
      background: #fff;
      .search-icon {
        line-height: 40px;
        padding: 8px 10px;
      }
      .app-name {
        padding: 0 20px;
        color: $red;
        font-size: 40px;
        font-weight: bold;
      }
      .icon-search {
        padding: 0 20px;
        font-size: 34px;
      }
      .search-title {
        font-size: 16px;
        color: #dbdbdb;
        width: 100%;
        padding-left: 60px;
      }
    }
  }
  .search-wrap {
    @include fj;
    width: 100%;
    margin-top: 70px;
    background: #f8f8f8;
    .nav-side-wrapper {
      width: 88px;
      height: 100%;
      overflow: hidden;
      .nav-side {
        width: 100%;
        @include boxSizing;
        background: #f8f8f8;
        li {
          width: 100%;
          height: 77px;
          text-align: center;
          font-weight: 600;
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #949497;
          flex-direction: column;
          &.active {
            color: #D8182D;
            border-left: 3px solid transparent;
            border-color: #D8182D;
            background: #fff;
          }
        }
      }
    }
    .search-content {
      width: 100%;
      height: 100%;
      padding: 0 20px;
      background: #fff;
      @include boxSizing;
      .swiper-container {
        width: 100%;
        .swiper-slide {
          width: 100%;
          padding-top: 20px;
          .category-main-img {
            width: 100%;
          }
          .category-list {
            display: flex;
            flex-wrap: wrap;
            flex-shrink: 0;
            width: 100%;
            .catogory-title {
              width: 100%;
              font-size: 34px;
              font-weight: 500;
              padding: 40px 0;
            }
            .product-item {
              width: 49%;
              margin-bottom: 20px;
              text-align: center;
              font-size: 30px;

              .product-title {
                color: #3a3a3a;
                font-size: 11px;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
  }

  // .munu_all {
  //   display: flex;
  //   .meun_classify {
  //     width: 25%;
  //     text-align: center;
  //     flex-wrap: wrap;
  //     li {
  //       height: 50px;
  //       line-height: 50px;
  //       border-bottom: 1px solid #ffffff;
  //       color: #333;
  //       background-color: #f8f8f8;
  //       font-size: 14px;
  //     }
  //     .active {
  //       background-color: #ffffff;
  //       color: #e93b3d;
  //     }
  //   }
  //   .classify_content {
  //     text-align: center;
  //     width: 75%;
  //     ul {
  //       background-color: #ffffff;
  //       display: flex;
  //       flex-wrap: wrap;

  //       li {
  //         width: 50%;
  //         justify-content: center;
  //         align-items: center;
  //         font-size: 15px;

  //         img {
  //           width: 80px;
  //           height: 80px;
  //         }

  //         .cubeic-add,
  //         .cubeic-remove {
  //           font-size: 18px;
  //           color: red;
  //         }
  //       }
  //     }
  //   }
  // }
}
</style>
