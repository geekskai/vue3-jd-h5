<template>
  <div class="page-order">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">我的订单</div>
    </header>
    <list-scroll :scroll-data="categoryData" :scrollX="true">
      <section class="order-tag" ref="searchWrap">
        <span
          :class="{ active: orderType === 1 }"
          data-type="1"
          @click="selectTag"
          >全部(5)</span
        >
        <span
          :class="{ active: orderType === 2 }"
          data-type="2"
          @click="selectTag"
          >已取消(1)</span
        >
        <span
          :class="{ active: orderType === 3 }"
          data-type="3"
          @click="selectTag"
          >待支付(1)</span
        >
        <span
          :class="{ active: orderType === 4 }"
          data-type="4"
          @click="selectTag"
          >待发货(1)</span
        >
        <span
          :class="{ active: orderType === 5 }"
          data-type="5"
          @click="selectTag"
          >已支付(1)</span
        >
        <span
          :class="{ active: orderType === 6 }"
          data-type="6"
          @click="selectTag"
          >已完成(1)</span
        >
        <span
          :class="{ active: orderType === 7 }"
          data-type="7"
          @click="selectTag"
          >待收货(1)</span
        >
      </section>
    </list-scroll>
    <section class="order-card" v-show="orderType == 1 || orderType == 3">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img
              src="../../assets/image/product/store-headerM.png"
              class="header-img"
            />
            <span>店铺名称</span>
          </div>
          <span>待支付</span>
        </li>
        <li class="order-info">
          <img src alt />
          <div class="order-detail">
            <p class="info-one">
              <span>娜扎新装LOOK</span>
              <span>$248</span>
            </p>
            <p class="info-two">
              <span>型号;规格;颜色;</span>
              <span>×2</span>
            </p>
          </div>
        </li>
        <li class="order-count">
          <span>共2件商品,小计:</span>
          <i>$496</i>
        </li>
        <li class="order-btn">
          <router-link tag="span" to="/order/cancelOrder">取消订单</router-link>
          <router-link tag="span" to="/order/orderDetail">去支付</router-link>
        </li>
      </ul>
    </section>
    <section class="order-card" v-show="orderType == 1 || orderType == 5">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img
              src="../../assets/image/product/store-headerM.png"
              class="header-img"
            />
            <span>店铺名称</span>
            <span>订单号:201905211540350025</span>
          </div>
          <span>已支付</span>
        </li>
        <li class="order-info">
          <img src alt />
          <div class="order-detail">
            <p class="info-one">
              <span>娜扎新装LOOK</span>
              <span>$248</span>
            </p>
            <p class="info-two">
              <span>型号;规格;颜色;</span>
              <span>×2</span>
            </p>
          </div>
        </li>
        <li class="order-count">
          <span>共2件商品,小计:</span>
          <i>$496</i>
        </li>
        <li class="order-btn">
          <router-link to="/order/appeal" tag="span">申诉</router-link>
        </li>
      </ul>
    </section>
    <section class="order-card" v-show="orderType == 1 || orderType == 2">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img
              src="../../assets/image/product/store-headerM.png"
              class="header-img"
            />
            <span>店铺名称</span>
            <span>订单号:201905211540350025</span>
          </div>
          <span>已取消</span>
        </li>
        <li class="order-info">
          <img src alt />
          <div class="order-detail">
            <p class="info-one">
              <span>娜扎新装LOOK</span>
              <span>$248</span>
            </p>
            <p class="info-two">
              <span>型号;规格;颜色;</span>
              <span>×2</span>
            </p>
          </div>
        </li>
        <li class="order-count">
          <span>共2件商品,小计:</span>
          <i>$496</i>
        </li>
        <li class="order-btn">
          <router-link to="/order/appeal" tag="span">申诉</router-link>
        </li>
      </ul>
    </section>
    <section class="order-card" v-show="orderType == 1 || orderType == 4">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img
              src="../../assets/image/product/store-headerM.png"
              class="header-img"
            />
            <span>店铺名称</span>
            <span>订单号:201905211540350025</span>
          </div>
          <span>待发货</span>
        </li>
        <li class="order-info">
          <img src alt />
          <div class="order-detail">
            <p class="info-one">
              <span>娜扎新装LOOK</span>
              <span>$248</span>
            </p>
            <p class="info-two">
              <span>型号;规格;颜色;</span>
              <span>×2</span>
            </p>
          </div>
        </li>
        <li class="order-count">
          <span>共2件商品,小计:</span>
          <i>$496</i>
        </li>
        <li class="order-btn">
          <router-link to="/order/appeal" tag="span">申诉</router-link>
        </li>
      </ul>
    </section>
    <section class="order-card" v-show="orderType == 1 || orderType == 6">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img
              src="../../assets/image/product/store-headerM.png"
              class="header-img"
            />
            <span>店铺名称</span>
            <span>订单号:201905211540350025</span>
          </div>
          <span>已完成</span>
        </li>
        <li class="order-info">
          <img src alt />
          <div class="order-detail">
            <p class="info-one">
              <span>娜扎新装LOOK</span>
              <span>$248</span>
            </p>
            <p class="info-two">
              <span>型号;规格;颜色;</span>
              <span>×2</span>
            </p>
          </div>
        </li>
        <li class="order-count">
          <span>共2件商品,小计:</span>
          <i>$496</i>
        </li>
        <li class="order-btn">
          <router-link to="/order/viewLogistics" tag="span"
            >查看物流</router-link
          >
          <router-link to="/order/appeal" tag="span">商品申诉</router-link>
        </li>
      </ul>
    </section>
    <section class="order-card" v-show="orderType == 1 || orderType == 7">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img
              src="../../assets/image/product/store-headerM.png"
              class="header-img"
            />
            <span>店铺名称</span>
            <span>订单号:201905211540350025</span>
          </div>
          <span>待收货</span>
        </li>
        <li class="order-info">
          <img src alt />
          <div class="order-detail">
            <p class="info-one">
              <span>娜扎新装LOOK</span>
              <span>$248</span>
            </p>
            <p class="info-two">
              <span>型号;规格;颜色;</span>
              <span>×2</span>
            </p>
          </div>
        </li>
        <li class="order-count">
          <span>共2件商品,小计:</span>
          <i>$496</i>
        </li>
        <li class="order-btn">
          <router-link to="/order/viewLogistics" tag="span"
            >查看物流</router-link
          >
          <router-link to="/order/appeal" tag="span">商品申诉</router-link>
        </li>
      </ul>
    </section>
    <section class="may-like">
      <ul class="like-list">
        <span class="like-title">猜你喜欢</span>
        <li class="like-item">
          <img class="item-picture" />
          <div class="item-detail">
            <p class="store-info">
              <img
                src="../../assets/image/product/store-headerM.png"
                class="header-img"
              />
              <label>店铺名称</label>
            </p>
            <p class="item-title">娜扎新装LOOK</p>
            <p class="item-count">
              <i>$248</i>
              <span>月销:888</span>
            </p>
          </div>
        </li>
        <li class="like-item">
          <img class="item-picture" />
          <div class="item-detail">
            <p class="store-info">
              <img
                src="../../assets/image/product/store-headerM.png"
                class="header-img"
              />
              <label>店铺名称</label>
            </p>
            <p class="item-title">娜扎新装LOOK</p>
            <p class="item-count">
              <i>$248</i>
              <span>月销:888</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import ListScroll from "@/components/scroll/ListScroll";
import { getCurrentInstance, onMounted, reactive, ref, toRefs } from "vue";
export default {
  name: "Order",
  components: {
    ListScroll
  },
  setup() {
    const orderType = ref(1);
    const { ctx } = getCurrentInstance();

    const searchWrap = ref(null);
    const setSearchWrapWidth = () => {
      const { clientWidth } = document.documentElement;
      searchWrap.value.style.width = clientWidth + 100 + "px";
    };

    const selectTag = e => {
      orderType.value = parseInt(e.currentTarget.getAttribute("data-type"));
    };

    const state = reactive({
      categoryData: []
    });

    onMounted(() => {
      setSearchWrapWidth();
      ctx.$eventBus.$emit("changeTag", 1);
    });

    return {
      orderType,
      setSearchWrapWidth,
      selectTag,
      searchWrap,
      ...toRefs(categoryData)
    };
  },

  methods: {}
};
</script>

<style scoped lang="scss">
.page-order {
  padding: 0 16px;
  height: 100%;
  .scroll-wrapper {
    height: 40px;
  }
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;

    .header-content {
      text-align: center;
      font-size: 18px;
      color: #3a3a3a;
      font-weight: 600;
      flex: 1;
    }
  }
  .order-tag {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: nowrap;
    overflow-y: scroll;
    span {
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      width: 100%;
      display: inline-block;
      color: #949497;
      text-align: center;
      &.active {
        color: red;
        border-bottom: 2px solid red;
      }
    }
  }
  .order-card {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 20px;
    .order-list {
      .order-item {
        display: flex;
        justify-content: space-between;
        & > span {
          color: #d8182d;
          font-size: 11px;
        }
        .store-info {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 10px;
          .header-img {
            width: 24px;
            height: 24px;
          }
          span {
            color: #3a3a3a;
            padding-left: 3px;
            font-size: 11px;
          }
        }
      }
      .order-info {
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        img {
          width: 80px;
          height: 80px;
          display: inline-block;
          background-color: #d8182d;
          border-radius: 4px;
        }
        .order-detail {
          flex: 1;
          padding-left: 16px;
          padding-bottom: 4px;
          .info-one,
          .info-two {
            display: flex;
            justify-content: space-between;
            font-size: 11px;
          }
          .info-one {
            color: #3a3a3a;
            padding-bottom: 5px;
          }
          .info-two {
            color: #949497;
          }
        }
      }
      .order-count {
        display: flex;
        justify-content: flex-end;
        i {
          color: #d8182d;
          font-size: 14px;
          padding-left: 5px;
        }
        span {
          color: #3a3a3a;
          font-size: 11px;
        }
      }
      .order-btn {
        display: flex;
        justify-content: flex-end;
        padding-top: 14px;
        span {
          height: 26px;
          line-height: 20px;
          border: 1px solid #949497;
          color: #949497;
          font-size: 11px;
          padding: 2px 15px;
          border-radius: 2px;
          margin-left: 10px;
        }
      }
    }
  }
  .may-like {
    padding-bottom: 20px;
    .like-list {
      .like-title {
        color: #d8182d;
        font-size: 18px;
      }
      .like-item {
        background-color: #fff;
        margin-top: 8px;
        border-radius: 4px;
        padding: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .item-picture {
          width: 80px;
          height: 80px;
          display: inline-block;
          background-color: #d8182d;
          border-radius: 4px;
        }
        .item-detail {
          padding-left: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          flex: 1px;
          .store-info {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img {
              width: 24px;
              height: 24px;
            }
            label {
              color: #3a3a3a;
              font-size: 11px;
              padding-left: 4px;
            }
          }
          .item-title {
            color: #3a3a3a;
            font-size: 14px;
            padding-top: 10px;
          }
          .item-count {
            padding-top: 4px;
            display: flex;
            justify-content: space-between;
            width: 100%;
            i {
              color: #d8182d;
              font-size: 14px;
            }
            span {
              font-size: 11px;
              color: #949497;
            }
          }
        }
      }
    }
  }
}
</style>
