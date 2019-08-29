<template>
  <div class="store-detail">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">店铺详情</div>
    </header>
    <section class="store-info">
      <ul class="store-top">
        <img v-lazy="storeDetail.idCardNo" class="store-header" />
        <li class="store-name">{{storeDetail.shopName}}</li>
      </ul>
      <ul class="store-center">
        <li class="store-introd">
          <div>{{storeDetail.detail}}</div>
        </li>
        <li class="store-tel">
          <label>电话:</label>
          <span>{{storeDetail.phone}}</span>
        </li>
        <li>
          <label>地址:</label>
          <span>{{storeDetail.address}}</span>
        </li>
        <li class="store-btn">
          <van-button size="small" type="danger">联系店家</van-button>
        </li>
      </ul>
    </section>

    <div v-if="serarchResult.length === 0" class="empty-box">
      <svg-icon icon-class="search-empty" class="search-empty"></svg-icon>
      <span class="empty-text">
        <i>没有搜索结果</i>
        <i>抱歉没有找到相关的商品~</i>
      </span>
    </div>

    <div v-else class="goods-all">
      <section class="select-menu">
        <div
          class="select-item default-sort"
          :class="{'active' : activeOrderBy === 'update_time'}"
          data-order-by="update_time"
          @click="initSortData(true)"
        >默认排序</div>

        <div class="select-item">
          按价格
          <span class="select-arrows">
            <i
              class="sort-caret ascending"
              :class="{'active' : activeOrderBy === 'price_asc'}"
              data-order-by="price"
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
        <div class="search-icon select-item" @click="handleSearch">
          <svg-icon icon-class="search"></svg-icon>
        </div>
      </section>
      <section class="goods-box">
        <ul class="goods-content">
          <template v-for="(item,index) in serarchResult">
            <router-link
              :key="index"
              tag="li"
              class="goods-item"
              :to="`/product/index?productId=${item.productId}`"
            >
              <img class="goods-productMainImage" v-lazy="item.productMainImage" />
              <div class="goods-layout">
                <div class="goods-title">{{item.productName}}</div>
                <span class="goods-div">{{item.labels}}</span>
                <div class="goods-desc">
                  <span class="goods-price">
                    <i>￥{{item.productCnyPrice}}</i>
                    <!-- <span v-if="item.calculate" class="force-value">{{item.calculate}}倍算力值</span> -->
                    <span v-if="item.calculate" class="force-value">{{item.calculate}}倍算力值</span>
                  </span>
                </div>
              </div>
            </router-link>
          </template>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "storeDetail",

  components: {},
  props: {},
  data() {
    return {
      activeOrderBy: "update_time",
      sortType: "desc",
      orderBy: "update_time",
      page: 1,
      seclectActive: false,
      storeDetail: {},
      serarchResult: []
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$http
        .get(
          `/api/merchant/merchantShopInfo?merchantInfoId=${this.$route.query.merchantInfoId}`
        )
        .then(response => {
          this.storeDetail = response.data.content;
        });
      this.initSortData();
    },
    initSortData(flag) {
      flag && (this.activeOrderBy = "update_time");
      this.$http
        .get(
          `/api/product/list?merchantShopId=${
            this.$route.query.merchantInfoId
          }&sortName=${flag ? "update_time" : this.orderBy}&sortType=${
            flag ? "desc" : this.sortType
          }&page=${this.page}&size=20&clientType=0`
        )
        .then(response => {
          this.serarchResult = response.data.content;
        });
    },
    handleSearch() {
      this.$router.push({
        path: "/search",
        query: { merchantShopId: this.$route.query.merchantInfoId }
      });
    },
    selectOrder(e, sortType) {
      this.sortType = sortType;
      this.orderBy = e.currentTarget.getAttribute("data-order-by");
      if (this.orderBy === this.activeOrderBy) {
        return;
      }
      this.activeOrderBy = this.orderBy + "_" + sortType;
      this.initSortData();
    },
    pageScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop > 100
        ? (this.seclectActive = true)
        : (this.seclectActive = false);
    }
  },
  computed: {},

  mounted() {
    window.addEventListener("scroll", this.pageScroll);
  },
  watch: {}
};
</script>

<style scoped lang="scss">
.store-detail {
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    position: relative;
    background-color: white;
    .btn-left {
      position: fixed;
      left: 16px;
      background-color: #efeff4;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      flex: 1;
      font-weight: 700;
    }
  }
  .store-info {
    background-color: #fff;
    min-height: 300px;
    margin-bottom: 10px;
    .store-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      .store-header {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        padding-top: 14px;
        padding-bottom: 10px;
      }
      .store-name {
        color: #3a3a3a;
        font-size: 18px;
      }
    }
    .store-center {
      color: #3a3a3a;
      font-size: 11px;
      padding: 16px;
      .store-introd {
        color: #3a3a3a;
        font-size: 11px;
        padding-bottom: 10px;
      }
      .store-tel {
        padding-bottom: 10px;
      }
      .store-btn {
        text-align: center;
        padding-top: 20px;
        /deep/ .van-button--danger {
          background-color: #ec3924;
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
      justify-content: space-between;
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
          display: inline-block;
          width: 165px;
          border-radius: 8px;
          margin-top: 10px;
          padding-right: 10px;
          background-color: white;
          .goods-productMainImage {
            width: 165px;
            height: 195px;
            border-radius: 8px 8px 0 0;
          }
        }
        li:nth-of-type(even) {
          padding-right: 0;
        }
        .goods-layout {
          width: 165px;
          padding: 0 5px;
          .goods-title {
            color: #3a3a3a;
            font-size: 14px;
            text-overflow: ellipsis;
            overflow: hidden;
            padding: 5px 0;
            white-space: nowrap;
            font-weight: 700;
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
            .goods-price {
              font-size: 14px;
              color: #ec3924;
              display: flex;
              justify-content: center;
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
                width: 55px;
                height: 17px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
