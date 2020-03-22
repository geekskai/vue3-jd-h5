<template>
  <div class="search-reault">
    <div class="search-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="left-btn"></svg-icon>
      </span>
      <div class="search-con">
        <input v-focus placeholder="搜索、关键词" v-model="searchText" />
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

    <div v-else class="goods-all">
      <section class="select-menu">
        <div
          class="select-item default-sort"
          :class="{'active' : activeOrderBy === 'update_time'}"
          data-order-by="update_time"
          @click="initData(true)"
        >全部</div>
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
            <router-link
              :key="index"
              class="goods-item"
              tag="li"
              :to="`/product/index?productId=${item.productId}`"
            >
              <img class="product-image" v-lazy="item.productMainImage" />
              <div class="goods-layout">
                <div class="goods-title">{{item.productName}}</div>
                <span class="goods-div">{{item.labels}}</span>
                <div class="goods-desc">
                  <span class="goods-price">
                    <i>￥{{item.productCnyPrice}}</i>
                    <span v-if="item.calculate" class="force-value">{{item.calculate}}倍算力值</span>
                  </span>
                </div>
                <div class="goods-count-sale">
                  <span class="goods-shopName">
                    <i>{{item.shopName}}</i>
                  </span>
                  <span class="goods-monthlySalesQuantity">月销量：{{item.monthlySalesQuantity||0}}</span>
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
  name: 'searchReault',
  data () {
    return {
      serarchResult: [],
      page: 1,
      searchText: this.$route.query.searchWord || '',
      activeOrderBy: 'update_time',
      sortType: 'desc',
      orderBy: 'update_time'
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData (flag) {
      flag && (this.activeOrderBy = 'update_time')
      this.$http
        .get(
          `/api/product/list?categoryId=${
            this.$route.query.categoryId ? this.$route.query.categoryId : ''
          }&merchantShopId=${
            this.$route.query.merchantShopId
              ? this.$route.query.merchantShopId
              : ''
          }&productName=${this.searchText}&sortName=${
            flag ? 'update_time' : this.orderBy
          }&sortType=${flag ? 'desc' : this.sortType}&page=${
            this.page
          }&size=15&clientType=0`
        )
        .then(response => {
          this.serarchResult = response.data.content
        })
    },
    getSearch () {
      this.searchText = this.searchText.replace(/^\s+|\s+$/g, '') // 去除两头空格
      if (!this.searchText) {
        this.$toast({
          mask: false,
          duration: 1000,
          message: '请输入搜索内容'
        })
        return
      }
      this.initData()
    },
    selectOrder (e, sortType) {
      this.sortType = sortType
      this.orderBy = e.currentTarget.getAttribute('data-order-by')
      if (this.orderBy === this.activeOrderBy) {
        return
      }
      this.activeOrderBy = this.orderBy + '_' + sortType
      this.initData()
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../styles/mixin.scss";
.search-reault {
  .search-header {
    @include fj;
    width: 100%;
    height: 44px;
    padding-top: 5px;
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
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          width: 165px;
          border-radius: 8px;
          margin-top: 10px;
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
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding: 5px 0;
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
