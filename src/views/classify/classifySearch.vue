<template>
  <div class="search-box">
    <div class="search-header">
      <span class="btn-left" @click="goBack">
        <svg-icon icon-class="left-btn"></svg-icon>
      </span>
      <div class="search-con">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <input placeholder="搜索、关键词" v-model="searchText" />
      </div>
      <span @click="getSearch">搜索</span>
    </div>
    <div v-if="serarchResult.length === 0" class="empty-box">
      <svg-icon icon-class="search-empty" class="search-empty"></svg-icon>
      <span class="empty-text">
        <i>没有搜索结果</i>
        <i>抱歉没有找到相关的商品~</i>
      </span>
    </div>
    <div class="goods-all" v-else>
      <section class="select-menu">
        <div
          class="select-item default-sort"
          :class="{'active' : activeOrderBy === 'update_time'}"
          data-order-by="update_time"
          @click="initData(true)"
        >默认排序</div>
        <div class="select-item">
          按价格
          <span class="select-arrows">
            <i
              class="sort-caret ascending"
              data-order-by="price"
              :class="{'active' : activeOrderBy === 'price_asc'}"
              @click="selectOrder($event,'asc')"
            ></i>
            <i
              class="sort-caret descending"
              :class="{'active' : activeOrderBy === 'price_desc'}"
              data-order-by="price"
              @click="selectOrder($event,'desc')"
            ></i>
          </span>
        </div>
        <div class="select-item">
          按销量
          <span class="select-arrows">
            <i
              :class="{'active' : activeOrderBy === 'sales_quantity_asc'}"
              class="sort-caret ascending"
              data-order-by="sales_quantity"
              @click="selectOrder($event,'asc')"
            ></i>
            <i
              :class="{'active' : activeOrderBy === 'sales_quantity_desc'}"
              class="sort-caret descending"
              data-order-by="sales_quantity"
              @click="selectOrder($event,'desc')"
            ></i>
          </span>
        </div>
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
                    <i>￥{{item.productCnyPrice}}</i>
                    <!-- <i>{{item.calculate}}倍算力值</i> -->
                    <span v-if="item.calculate" class="force-value">{{item.calculate}}倍算力值</span>
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
      searchText: this.$route.query.product.label || "",
      activeOrderBy: "update_time",
      sortType: "desc",
      orderBy: "update_time",
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
      this.$router.push({
        path: `/product/index`,
        query: { productId: item.productId }
      });
    },
    initData(flag) {
      flag && (this.activeOrderBy = "update_time");
      this.$http
        .get(
          `/api/product/list?categoryId=${
            this.$route.query.categoryId ? this.$route.query.categoryId : ""
          }&merchantShopId=${
            this.$route.query.merchantShopId
              ? this.$route.query.merchantShopId
              : ""
          }&productName=${this.searchText}&sortName=${
            flag ? "update_time" : this.orderBy
          }&sortType=${flag ? "desc" : this.sortType}&page=${
            this.page
          }&size=15&clientType=0`
        )
        .then(response => {
          this.serarchResult = response.data.content;
        });
    },
    selectOrder(e, sortType) {
      this.sortType = sortType;
      this.orderBy = e.currentTarget.getAttribute("data-order-by");
      if (this.orderBy === this.activeOrderBy) {
        return;
      }
      this.activeOrderBy = this.orderBy + "_" + sortType;
      this.initData();
    },
    // 当滑块滑动到低不低的时候。
    handleScrollToEnd() {
      this.page++;
      this.initData();
    },
    handlePullDown() {
    },
    handleToDetail(sku) {
      this.$router.push({
        path: "/product/index",
        query: { sku: sku }
      });
    },
    //动态设置searc-wrap的高
    setWrapHeight() {
      let $screenHeight = document.documentElement.clientHeight;
      this.$refs.wrapper.style.height = $screenHeight - 90 + "px";
    },
    getSearch() {
      this.searchText = this.searchText.replace(/^\s+|\s+$/g, ""); //去除两头空格
      if (!this.searchText) {
        this.$toast({
          mask: false,
          duration: 1000,
          message: "请输入搜索内容"
        });
        return;
      }
      this.initData();
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
  padding-top: 10px;
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
      color: #ec3924;
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
        color: #ec3924;
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
        border: 1px solid #ec3924;
        color: #ec3924;
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
          color: #ec3924;
        }
        .icon-delete {
          width: 16px;
          height: 16px;
          float: right;
        }
      }
    }
  }
  .empty-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 90px;
    .search-empty {
      width: 155px;
      height: 155px;
    }
    .empty-text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 17px;
      color: #949497;
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

      .select-item.active {
        color: #ec3924;
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
        .sort-caret.ascending.active {
          border-bottom-color: #ec3924;
          top: 5px;
        }
        .sort-caret.descending.active {
          border-top-color: #ec3924;
          bottom: 7px;
        }
      }
    }
    .goods-box {
      padding: 16px;
      .good-things {
        font-size: 18px;
        color: #ec3924;
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
              width: 100%;
              font-size: 14px;
              color: #ec3924;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .force-value {
                margin-left: 7px;
                color: white;
                border-radius: 20px 20px;
                background-color: #ec3924;
                display: inline-block;
                font-size: 7px;
                line-height: 17px;
                text-align: center;
                min-width: 55px;
                height: 17px;
                padding: 0 3px;
              }
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
