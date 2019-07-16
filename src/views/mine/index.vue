<template>
  <div class="mine-layout">
    <section class="mine-header">
      <img src="../../assets/image/product/store-headerM.png" class="header-img" />
      <div class="login-regist">
        <span>登录</span>
        <span>/注册</span>
      </div>
    </section>
    <section class="order-all">
      <router-link to="/order" class="look-orders" tag="span">查看全部订单>></router-link>
      <!-- <span class="look-orders">查看全部订单>></span> -->
      <ul class="order-list">
        <router-link to="/order/orderDetail" class="order-item" tag="li">
          <svg-icon icon-class="pending-pay"></svg-icon>
          <span>待付款</span>
        </router-link>
        <router-link to="/order/toBeDelivered" class="order-item" tag="li">
          <svg-icon icon-class="be-delivered"></svg-icon>
          <span>待发货</span>
        </router-link>
        <router-link to="/order/pendingReceipt" class="order-item" tag="li">
          <svg-icon icon-class="pending-receipt"></svg-icon>
          <span>待收货</span>
        </router-link>
        <router-link to="/order" class="order-item" tag="li">
          <svg-icon icon-class="all-orders"></svg-icon>
          <span>退换/售后</span>
        </router-link>
      </ul>
    </section>
    <section class="mine-content">
      <ul class="options-list">
        <!-- <router-link to="/mine/personInfo" class="option-item" tag="li">
          <div class="item-info">
            <img src="../../assets/image/product/store-headerM.png" class="header-img" />
            <span>李四</span>
          </div>
          <van-icon name="arrow" />
        </router-link>-->
        <router-link to="/mine/myAssets" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="my-assets"></svg-icon>
            <span>我的资产</span>
          </div>
          <van-icon name="arrow" color="#DBDBDB" />
        </router-link>
        <router-link to="/mine/shippingAddress" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="shipping-address"></svg-icon>
            <span>收货地址</span>
          </div>
          <van-icon name="arrow" color="#DBDBDB" />
        </router-link>
        <router-link to="/mine/appealRecord" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="my-complaint"></svg-icon>
            <span>我的申诉</span>
          </div>
          <van-icon name="arrow" color="#DBDBDB" />
        </router-link>
        <router-link to="/mine/setting" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="setting"></svg-icon>
            <span>设置</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
      </ul>
    </section>
    <section class="mine-content">
      <ul class="options-list">
        <router-link to="/mine/messageCenter" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="message-center"></svg-icon>
            <span>消息中心</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
        <router-link to="/mine/helpCenter" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="help-center"></svg-icon>
            <span>帮助中心</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
      </ul>
    </section>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      show: false,
      columns: 1,
      defaultData: [
        {
          text: 1997,
          value: 1997
        }
      ],
      pickData: {
        // 第一列的数据结构
        data1: [
          {
            text: 1999,
            value: 1999
          },
          {
            text: 1998,
            value: 1998
          },
          {
            text: 1997,
            value: 1997
          },
          {
            text: 1996,
            value: 1996
          },
          {
            text: 2001,
            value: 2001
          }
        ]
      }
    };
  },
  created() {},
  computed: {},
  mounted() {
    this.$eventBus.$emit("changeTag", 3);
  },
  methods: {
    close() {
      this.show = false;
    },
    confirmFn(val) {
      this.show = false;
      console.log("=====confirm==>", val.select1);
      this.defaultData = [val.select1];
    },
    toShow() {
      this.show = true;
    }
  }
};
</script>

<style scoped lang="scss">
.mine-layout {
  padding: 16px;
  min-height: 812px;
  background: linear-gradient(#fe4f70, #ff9351);
  .mine-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 14px;
    padding-bottom: 30px;
    .header-img {
      width: 70px;
      height: 70px;
    }
    .login-regist {
      font-size: 15px;
      color: #fff;
      padding-top: 20px;
    }
  }
  .order-all {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 8px;
    .look-orders {
      font-size: 11px;
      font-weight: 600;
      color: #3a3a3a;
      padding-left: 19px;
      padding-top: 14px;
      padding-bottom: 18px;
    }
    .order-list {
      padding-bottom: 18px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .order-item {
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          padding-top: 5px;
          font-weight: 600;
        }
      }
    }
  }
  .mine-content {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    padding: 0 16px;
    margin-top: 18px;
    .options-list {
      padding-top: 20px;
      .option-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        padding-bottom: 22px;
        .item-info {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 15px;
          color: #888;
          .incon {
            padding-right: 16px;
          }
          .header-img {
            width: 50px;
            height: 50px;
            padding-right: 16px;
          }
        }
      }
    }
  }
}
</style>
