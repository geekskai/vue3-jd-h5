<template>
  <div class="store-detail">
    <!-- <span class="btn-left" @click="$router.go(-1)">
      <svg-icon icon-class="gray-btn"></svg-icon>
    </span>-->
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">店铺详情</div>
    </header>
    <section class="store-info">
      <ul class="store-top">
        <img
          src="../../assets/image/product/store-headerM.png"
          class="store-header"
        />
        <li class="store-name">店铺名称</li>
        <li class="store-introd">
          <div>
            店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺
            介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺
            介绍店铺介绍店铺介绍店铺介绍店铺介绍
          </div>
        </li>
      </ul>
      <ul class="store-center">
        <li class="store-tel">
          <label>电话:</label>
          <span>13567890000</span>
        </li>
        <li>
          <label>地址:</label>
          <span>广东省深圳市宝安区科研路9号腾讯大厦10001</span>
        </li>
        <li class="store-btn">
          <van-button size="small" type="danger">联系店家</van-button>
        </li>
      </ul>
    </section>
    <div class="goods-all">
      <section class="select-menu" :class="{ isFixed: seclectActive }">
        <div
          class="select-item default-sort"
          :class="{ active: orderBy === 'default' }"
          data-order-by="default"
          @click="selectOrder($event)"
        >
          默认排序
        </div>
        <div class="select-item" :class="{ active: orderBy === 'price_asc' }">
          按价格
          <!-- <i class="iconfont icon-up1" :class="{'active' : orderBy === 'price_asc'}"></i> -->
          <span class="select-arrows">
            <i
              class="sort-caret ascending"
              data-order-by="price_asc"
              @click="selectOrder($event)"
            ></i>
            <i
              class="sort-caret descending"
              data-order-by="price_desc"
              @click="selectOrder($event)"
            ></i>
          </span>
        </div>
        <div
          class="select-item"
          :class="{ active: orderBy === 'price_desc' }"
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
        <div class="search-icon select-item" @click="handleSearch">
          <svg-icon icon-class="search"></svg-icon>
        </div>
      </section>
      <section class="goods-box">
        <ul class="goods-content">
          <template v-for="(item, index) in likeList" :key="index">
            <router-link tag="li" to="/classify/product">
              <img :src="item.imgSrc" />
              <div class="goods-layout">
                <div class="goods-title">{{ item.itemTitle }}</div>
                <span class="goods-div">限量套装 新品上市</span>
                <div class="goods-desc">
                  <span class="goods-price">
                    <i>{{ item.itemPrice }}</i>
                  </span>
                  <svg-icon class="add-icon" icon-class="add"></svg-icon>
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
      orderBy: "default",
      seclectActive: false,
      likeList: [
        {
          id: 0,
          imgSrc: require("../../assets/image/home/test8.png"),
          itemTitle: "娜扎新装LOOK",
          itemPrice: "$248"
        },
        {
          id: 1,
          imgSrc: require("../../assets/image/home/test9.png"),
          itemTitle: "娜扎新装LOOK",
          itemPrice: "$248"
        },
        {
          id: 2,
          imgSrc: require("../../assets/image/home/test3.png"),
          itemTitle: "时尚双肩包",
          itemPrice: "$248"
        },
        {
          id: 3,
          imgSrc: require("../../assets/image/home/test4.png"),
          itemTitle: "商务行李箱",
          itemPrice: "$248"
        },
        {
          id: 4,
          imgSrc: require("../../assets/image/home/test5.png"),
          itemTitle: "无线消噪耳机",
          itemPrice: "$248"
        },
        {
          id: 4,
          imgSrc: require("../../assets/image/home/test6.png"),
          itemTitle: "无线蓝牙耳机",
          itemPrice: "$248"
        }
      ]
    };
  },
  methods: {
    handleSearch() {
      this.$router.push("/search");
    },
    selectOrder(e) {
      let orderBy = e.currentTarget.getAttribute("data-order-by");
      if (orderBy === this.orderBy) {
        return;
      }
      // this.productList = []    //重置list
      this.orderBy = orderBy;
      // this.params.orderBy = orderBy
      // this.params.pageNum = 1
      // this.isLoading = true
      // this.getProductList(this.params)
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
  created() {},
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
      .store-introd {
        padding: 16px;
        color: #3a3a3a;
        font-size: 11px;
      }
    }
    .store-center {
      color: #3a3a3a;
      font-size: 11px;
      padding: 16px;
      .store-tel {
        padding-bottom: 10px;
      }
      .store-btn {
        text-align: center;
        padding-top: 20px;
        /deep/ .van-button--danger {
          background-color: #d8182d;
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
      justify-content: space-between;
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
        li {
          display: inline-block;
          width: 165px;
          border-radius: 8px;
          margin-top: 10px;
          padding-right: 10px;
          background-color: white;
        }
        li:nth-of-type(even) {
          padding-right: 0;
        }
        .goods-layout {
          width: 165px;
          padding: 0 10px;
          .goods-title {
            color: #3a3a3a;
            font-size: 14px;
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
              color: #d8182d;
            }
          }
        }
      }
    }
  }
}
</style>
