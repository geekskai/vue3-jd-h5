<template>
  <div class="search-box">
    <div class="search-header">
      <span class="btn-left" @click="goBack">
        <svg-icon icon-class="left-btn"></svg-icon>
      </span>
      <div class="search-con">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <input v-focus placeholder="搜索、关键词" v-model="searchText" />
      </div>
      <span @click="getSearch">搜索</span>
    </div>
    <section v-if="serarchResult.length === 0"></section>
    <div class="goods-all" v-else>
      <section class="select-menu" :class="{'isFixed' : seclectActive}">
        <div
          class="select-item default-sort"
          :class="{'active' : orderBy === 'default'}"
          data-order-by="default"
          @click="selectOrder($event)"
        >全部</div>
        <div class="select-item" :class="{'active' : orderBy === 'price_asc'}">
          按价格
          <!-- <i class="iconfont icon-up1" :class="{'active' : orderBy === 'price_asc'}"></i> -->
          <span class="select-arrows">
            <i class="sort-caret ascending" data-order-by="price_asc" @click="selectOrder($event)"></i>
            <i
              class="sort-caret descending"
              data-order-by="price_desc"
              @click="selectOrder($event)"
            ></i>
          </span>
        </div>
        <div
          class="select-item"
          :class="{'active' : orderBy === 'price_desc'}"
          data-order-by="price_desc"
          @click="selectOrder($event)"
        >
          按销量
          <!-- <i class="iconfont icon-down1" :class="{'active' : orderBy === 'price_desc'}"></i> -->
          <span class="select-arrows">
            <i
              class="sort-caret ascending"
              data-order-by="saleCount_asc"
              @click="selectOrder($event)"
            ></i>
            <i
              class="sort-caret descending"
              data-order-by="saleCount_desc"
              @click="selectOrder($event)"
            ></i>
          </span>
        </div>
        <!-- <div class="search-icon select-item"></div> -->
      </section>
      <section class="goods-box">
        <ul class="goods-content">
          <template v-for="(item,index) in serarchResult">
            <li :key="index" class="goods-item" @click="handleGoToProduct(item)">
              <img class="product-image" v-lazy="item.productMainImage" />
              <div class="goods-layout">
                <div class="goods-title">{{item.productName}}</div>
                <span class="goods-div">{{item.labels}}</span>
                <div class="goods-desc">
                  <span class="goods-price">
                    <i>$:{{item.productCnyPrice}}</i>
                  </span>
                </div>
                <div class="goods-count-sale">
                  <span class="goods-shopName">
                    <i>{{item.shopName}}</i>
                  </span>
                  <span class="goods-monthlySalesQuantity">月销量：{{item.monthlySalesQuantity}}</span>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import ListScroll from "../../components/scroll/ListScroll";
export default {
  name: "classifySearch",
  components: {
    ListScroll
  },
  data() {
    return {
      searchText: this.$route.query.product.label,
      orderBy: "default",
      seclectActive: false,
      hotSerach: [],
      serarchResult: [],
      page: 1,
      historySearch: []
    };
  },
  created() {
    this.initData();
  },
  computed: {},
  methods: {
    handleGoToProduct(item) {
      console.log("=====item==>", item.productId);
      this.$router.push({
        path: `/classify/index`,
        query: { productId: item.productId }
      });
    },
    initData() {
      this.$http
        .get(
          `/api/product/list?categoryId=${this.$route.query.categoryId}&page=${this.page}&size=20`
        )
        .then(response => {
          this.serarchResult = response.data.content;
        });
    },
    // 当滑块滑动到低不低的时候。
    handleScrollToEnd() {
      this.page++;
      this.initData();
    },
    handlePullDown() {
      console.log("=====handlePullDown==>");
    },
    handleToDetail(sku) {
      this.$router.push({
        path: "/classify/index",
        query: { sku: sku }
      });
    },
    //动态设置searc-wrap的高
    setWrapHeight() {
      let $screenHeight = document.documentElement.clientHeight;
      this.$refs.wrapper.style.height = $screenHeight - 90 + "px";
    },
    getSearch() {
      let keyword = this.searchText.replace(/^\s+|\s+$/g, ""); //去除两头空格
      if (!keyword) {
        this.$toast({
          mask: false,
          duration: 1000,
          message: "请输入搜索内容"
        });
        return;
      }
      this.selectTag(keyword);
    },
    selectTag(keyword) {
      this.$http
        .get(
          `/api/product/list?categoryId=${this.$route.query.categoryId}&productName=${keyword}&page=${this.page}&size=20`
          // `/api/product/list?categoryId=${223}&page=${this.page}&size=15`
        )
        .then(response => {
          if (response.data.code === 0) {
            this.serarchResult = response.data.content;
          }
        });
    },
    deleteHistory() {
      this.$dialog
        .confirm({
          title: "提示！",
          message: "确认删除所有历史搜索吗？"
        })
        .then(() => {
          this.$http
            .post(`/api/product/delHistorySearch`, { type: 0 })
            .then(response => {
              if (response.data.code === 0) {
                this.$toast({
                  mask: false,
                  duration: 1000,
                  message: response.data.msg
                });
              }
            });
        });
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>

<style lang="scss" type="text/scss" scoped>
@import "../../styles/mixin.scss";
.search-box {
  width: 100%;
  height: 100vh;
  background-color: rgba(239, 239, 244, 1);
  font-size: 30px;
  padding-top: 45px;
  .search-header {
    @include fj;
    width: 100%;
    height: 44px;
    box-sizing: border-box;
    .btn-left {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 16px;
    }
    .icon-left {
      width: 10%;
      font-size: 16px;
      color: #252525;
      font-weight: bold;
    }
    .search-con {
      width: 70%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 10px;
      font-size: 16px;
      background: #f7f7f7;
      border-radius: 4px;
      @include boxSizing;
      .iconfont {
        font-size: 16px;
      }
      input {
        font-size: 16px;
        background: #f7f7f7;
        padding-left: 50px;
        width: 100%;
      }
    }
    span {
      padding-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: #d8182d;
      font-size: 16px;
    }
  }
  .search-content {
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
    .hot-list {
      .hot-words {
        position: relative;
        color: #d8182d;
        font-size: 14px;
      }
      .hot-detail {
        font-size: 13px;
        color: #686868;
        border: 1px solid #979797;
        padding: 2px 10px;
        margin-right: 16px;
        border-radius: 3px;
        display: inline-block;
      }
      .hot-detail.hot {
        border: 1px solid #d8182d;
        color: #d8182d;
        .svg-icon {
          width: 12px;
          height: 14px;
        }
      }
    }
    .search-list {
      width: 100%;
      .histort-search {
        span {
          font-size: 14px;
          color: #686868;
          padding: 2px 10px;
          margin-right: 16px;
          margin-bottom: 10px;
          display: block;
        }
      }
      &.history-list {
        margin-bottom: 20px;
        .history-search {
          font-size: 14px;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;
          color: #d8182d;
        }
        .icon-delete {
          width: 16px;
          height: 16px;
          float: right;
        }
      }
    }
  }
  .goods-all {
    padding-top: 10px;
    .select-menu {
      background-color: #fff;
      line-height: 44px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #949497;
      font-size: 11px;
      //  &.isFixed {
      //   position: fixed;
      //   left: 0;
      //   top: 0;
      // }
      .select-item.active {
        color: #d8182d;
      }
      .select-item {
        .search-icon {
          transform: rotate(90deg);
        }
      }
      .default-sort {
        padding-left: 16px;
      }
      .search-icon {
        padding-right: 16px;
      }
      .select-arrows {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        height: 34px;
        width: 20px;
        vertical-align: middle;
        cursor: pointer;
        overflow: initial;
        position: relative;
        .sort-caret {
          width: 0;
          height: 0;
          border: 5px solid transparent;
          position: absolute;
          left: 7px;
        }
        .sort-caret.ascending {
          border-bottom-color: #c0c4cc;
          top: 5px;
        }
        .sort-caret.descending {
          border-top-color: #c0c4cc;
          bottom: 7px;
        }
      }
    }
    .goods-box {
      padding: 16px;
      .good-things {
        font-size: 18px;
        color: #d8182d;
      }
      .goods-content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .goods-item {
          // display: inline-block;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 165px;
          border-radius: 8px;
          margin-top: 10px;
          // padding-right: 10px;
          background-color: white;
          .product-image {
            width: 165px;
            height: 196px;
          }
        }
        li:nth-of-type(even) {
          padding-right: 0;
        }
        .goods-layout {
          width: 165px;
          padding: 0 10px;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          .goods-title {
            color: #3a3a3a;
            font-size: 14px;
            font-weight: 700;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .goods-div {
            color: #949497;
            font-size: 11px;
          }
          .goods-desc {
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 12px;
            padding-top: 12px;
            .goods-price {
              font-size: 14px;
              color: #d8182d;
            }
            .add-icon {
              width: 20px;
              height: 20px;
            }
          }
          .goods-count-sale {
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 12px;
            color: #949497;
            font-size: 11px;

            .goods-monthlySalesQuantity {
              font-size: 11px;
            }
          }
        }
      }
    }
  }
}
</style>
