<template>
  <div class="mine-layout">
    <section class="order-top">
      <span class="my-order">我的订单</span>
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
          <span>全部订单</span>
        </router-link>
      </ul>
    </section>
    <section class="mine-content">
      <ul class="options-list">
        <router-link to="/mine/personInfo" class="option-item" tag="li">
          <div class="item-info">
            <img src="../../assets/image/product/store-headerM.png" class="header-img" />
            <span>李四</span>
          </div>
          <van-icon name="arrow" />
        </router-link>
        <router-link to="/mine/shippingAddress" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="shipping-address"></svg-icon>
            <span>收货地址</span>
          </div>
          <van-icon name="arrow" />
        </router-link>
        <router-link to="/setting" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="message-center"></svg-icon>
            <span>消息中心</span>
          </div>
          <van-icon name="arrow" />
        </router-link>
        <router-link to="/classify/product" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="help-center"></svg-icon>
            <span>帮助中心</span>
          </div>
          <van-icon name="arrow" />
        </router-link>
        <router-link to="/order/appealRecord" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="my-complaint"></svg-icon>
            <span>我的申诉</span>
          </div>
          <van-icon name="arrow" />
        </router-link>
        <router-link to="/mine/setting" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="setting"></svg-icon>
            <span>设置</span>
          </div>
          <van-icon name="arrow" />
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
  .order-top {
    .my-order {
      font-size: 16px;
      font-weight: 700;
    }
    .order-list {
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .order-item {
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          padding-top: 5px;
        }
      }
    }
  }
  .mine-content {
    .options-list {
      .option-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        padding: 20px 0;
        .item-info {
          display: flex;
          justify-content: center;
          align-items: center;
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
