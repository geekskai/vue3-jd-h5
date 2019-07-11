<template>
  <div class="shop-cart">
    <header class="page-header">
      <div class="header-content">购物车</div>
      <router-link class="appeal-record" to="/order/appealRecord" tag="span">完成</router-link>
    </header>
    <!-- <section class="cart-empty">
      <img class="img-cart" src="../../assets/image/cart/cart-empty.png" alt />
    </section>-->
    <section class="order-card">
      <van-checkbox v-model="checked" checked-color="#91C95B">
        <li class="checkbox-all">
          <div class="store-info">
            <img src="../../assets/image/product/store-headerM.png" class="header-img" />
            <span>店铺名称</span>
          </div>
        </li>
      </van-checkbox>
      <van-checkbox-group class="order-list" v-model="result">
        <ul v-for="(item, index) in list" :key="index">
          <div class="order-info">
            <li class="check-item">
              <van-checkbox :key="index" checked-color="#91C95B" :name="item"></van-checkbox>
            </li>
            <img
              src="http://m.360buyimg.com/mobilecms/jfs/t1/7091/11/2919/441267/5bd578bfE03e7166a/c5d5222c1802fd21.jpg!q70.jpg.dpg"
            />
            <li class="order-detail">
              <ul>
                <li class="info-one">
                  <span>三彩预售新款短裙淑女裙淑女裙淑女裙淑女</span>
                </li>
                <li class="info-two">
                  <span>型号;规格;颜色;</span>
                </li>
              </ul>
              <div class="info-count">
                <span>￥200</span>
                <van-stepper v-model="stepperValue" input-width="31px" button-size="12px" />
              </div>
            </li>
          </div>
          <div class="order-total">
            <label>合计：</label>
            <span>123000</span>
          </div>
        </ul>
      </van-checkbox-group>
    </section>
    <section class="order-card">
      <van-checkbox v-model="checked" checked-color="#91C95B">
        <li class="checkbox-all">
          <div class="store-info">
            <img src="../../assets/image/product/store-headerM.png" class="header-img" />
            <span>店铺名称</span>
          </div>
        </li>
      </van-checkbox>
      <van-checkbox-group class="order-list" v-model="result">
        <ul v-for="(item, index) in lists" :key="index">
          <div class="order-info">
            <li class="check-item">
              <van-checkbox :key="index" checked-color="#91C95B" :name="item"></van-checkbox>
            </li>
            <img
              src="http://m.360buyimg.com/mobilecms/jfs/t1/7091/11/2919/441267/5bd578bfE03e7166a/c5d5222c1802fd21.jpg!q70.jpg.dpg"
            />
            <li class="order-detail">
              <ul>
                <li class="info-one">
                  <span>三彩预售新款短裙淑女裙淑女裙淑女裙淑女</span>
                </li>
                <li class="info-two">
                  <span>型号;规格;颜色;</span>
                </li>
              </ul>
              <div class="info-count">
                <span>￥200</span>
                <van-stepper v-model="stepperValue" input-width="31px" button-size="12px" />
              </div>
            </li>
          </div>
          <div class="order-total">
            <label>合计：</label>
            <span>123000</span>
          </div>
        </ul>
      </van-checkbox-group>
    </section>

    <van-submit-bar :price="20000" button-text="结算" @submit="onSubmit">
      <van-checkbox v-model="checked" checked-color="#91C95B">全选</van-checkbox>
    </van-submit-bar>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: ["a"],
      lists: ["a", "b", "c"],
      checked: false,
      stepperValue: "",
      result: ["a", "b"]
    };
  },
  created() {
    console.log("======cart=>");
  },
  mounted() {
    this.$eventBus.$emit("changeTag", 2);
  },
  methods: {
    onSubmit() {}
  }
};
</script>

<style scoped lang="scss">
.shop-cart {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 100px;
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .header-content {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: #3a3a3a;
    }
    .appeal-record {
      color: #fe4f70;
      font-size: 13px;
    }
  }
  .cart-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    .img-cart {
      flex: 1;
    }
  }
  .order-card {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
    .checkbox-all {
      .store-info {
        display: flex;
        justify-content: center;
        align-items: center;
        .header-img {
          width: 24px;
          height: 24px;
        }
        span {
          color: #3a3a3a;
          font-size: 11px;
          padding-left: 4px;
        }
      }
    }
    .order-list {
      .order-info {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 16px;
        display: flex;
        justify-content: flex-start;
        .check-item {
          display: flex;
          align-items: center;
        }
        img {
          margin-left: 5px;
          width: 100px;
          height: 100px;
          display: inline-block;
          background-color: #fe4f70;
          border-radius: 4px;
        }
        .order-detail {
          width: 55%;
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .info-one,
          .info-two {
            display: flex;
            padding-top: 4px;
            justify-content: space-between;
            font-size: 13px;
          }
          .info-one {
            color: #3a3a3a;
            padding-bottom: 5px;
            span {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          .info-two {
            color: #949497;
          }
          .info-count {
            color: #fe4f70;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        }
      }
      .order-total {
        color: #949497;
        font-size: 14px;
        text-align: right;
        span {
          font-weight: 600;
        }
      }
    }
  }
  /deep/ .van-submit-bar {
    .van-submit-bar__bar {
      height: 44px;
      line-height: 44px;
    }
    bottom: 50px;
    .van-submit-bar__text {
      font-size: 17px;
      color: #333333;
    }
  }
  /deep/ .van-submit-bar__price {
    color: #fe4f70;
    font-size: 17px;
    font-weight: 600;
    padding-left: 5px;
  }
  /deep/ .van-button--danger {
    background-color: #fe4f70;
    height: 44px;
    line-height: 44px;
    .van-button__text {
      font-size: 18px;
    }
  }
  /deep/ .van-checkbox {
    padding-left: 24px;
    .van-checkbox__label {
      font-size: 13px;
      color: #949497;
    }
  }
}
</style>
