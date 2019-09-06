<template>
  <!-- 确认订单 -->
  <div class="order-detail-page">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">确认订单</div>
    </header>
    <section class="order-info" @click="handleToChooseAddress">
      <ul class="info-list">
        <li class="receiver-addres">
          <div class="address-content">
            <svg-icon icon-class="shipping-address"></svg-icon>
            <span class="address-fullAddress" v-if="orderForm.fullAddress">{{orderForm.fullAddress}}</span>
            <span class="address-fullAddress" v-else>请选择收货人地址</span>
          </div>
          <svg-icon class="arrow-icon-right" icon-class="arrow-icon-right"></svg-icon>
        </li>
      </ul>
    </section>

    <section
      class="order-card"
      v-for="(oderShopSkuInfo,index) in orderForm.oderShopSkuInfoVos"
      :key="index"
    >
      <ul class="order-list">
        <li class="list-item">
          <div class="store-info">
            <img v-lazy="oderShopSkuInfo.logoUrl" class="header-img" />
            <span>{{oderShopSkuInfo.shopName}}</span>
          </div>
          <span>待支付</span>
        </li>
        <li class="item-info" v-for="(orderSkuInfo,i) in oderShopSkuInfo.orderSkuInfoVos" :key="i">
          <img v-lazy="orderSkuInfo.productMainUrl" />
          <div class="order-detail">
            <p class="info-one">
              <span>{{orderSkuInfo.productName}}</span>
              <b>￥{{orderSkuInfo.productAmount}}</b>
            </p>
            <p class="info-two">
              <span>{{orderSkuInfo.fullName}}</span>
              <span>×{{orderSkuInfo.quantity }}</span>
            </p>
          </div>
        </li>
        <li class="order-count">
          <span>快递：</span>
          <i>￥{{oderShopSkuInfo.freightAmount}}</i>
        </li>
        <li class="real-pay">
          <span>实付款：</span>
          <i>￥{{oderShopSkuInfo.shopAllAmount}}</i>
        </li>
      </ul>
    </section>
    <div class="pay-btn">
      <div class="pay-count">
        <span>
          共{{orderForm.skuCount}}件商品，小计：
          <i>￥{{ orderForm.allAmount}}</i>
        </span>
      </div>
      <van-button type="danger" @click="handleSubmitOrder" size="large">提交订单</van-button>
    </div>
    <vue-pickers
      :show="show"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="close"
      @confirm="confirmFn"
    ></vue-pickers>
  </div>
</template>

<script>
export default {
  name: "ConfirmOrder",
  data() {
    return {
      orderForm: {},
      columns: 1,
      orderNo: "",
      cartMode: true, // 购物车的模式，true 是显示出编辑按钮 false 是显示完成按钮,默认是false;
      defaultData: [
        {
          text: "Top-Pay",
          value: "Top-Pay"
        }
      ],
      pickData: {
        data1: [
          {
            text: "Top-Pay",
            value: "Top-Pay"
          },
          {
            text: "支付宝",
            value: "支付宝"
          },
          {
            text: "微信",
            value: "微信"
          },
          {
            text: "银行卡",
            value: "银行卡"
          }
        ]
      },
      show: false
    };
  },
  created() {
    this.initData();
  },

  methods: {
    initData() {
      console.log("=====selectedGoodsId==>", this.$route.query.selectedGoodsId);
      // if (this.$route.query.userAddrId) {
      let paramsObj = {
        skuInfoForm: {
          quantity: this.$route.query.quantity,
          skuId: this.$route.query.skuId
        },
        cartItemIds: this.$route.query.selectedGoodsId,
        userAddrId: this.$route.query.userAddrId
          ? this.$route.query.userAddrId
          : ""
      };
      if (this.$route.query.selectedGoodsId) {
        paramsObj.skuInfoForm = null;
      }
      this.$http.post(`/api/order/checkout`, paramsObj).then(response => {
        this.orderForm = response.data.content;
        let fullAddress = this.orderForm.fullAddress;
        if (fullAddress && ~fullAddress.indexOf("undefined")) {
          this.orderForm.fullAddress = fullAddress.slice(
            0,
            this.orderForm.fullAddress.length - 9
          );
        }
      });
      // } else {
      //   this.$http
      //     .post(`/api/order/checkout`, {
      //       skuInfoForm: {
      //         quantity: this.$route.query.quantity,
      //         skuId: this.$route.query.skuId
      //       }
      //     })
      //     .then(response => {
      //       this.orderForm = response.data.content;
      //       let fullAddress = this.orderForm.fullAddress;
      //       if (fullAddress && ~fullAddress.indexOf("undefined")) {
      //         this.orderForm.fullAddress = fullAddress.slice(
      //           0,
      //           this.orderForm.fullAddress.length - 9
      //         );
      //       }
      //     });
      // }
    },
    close() {
      this.show = false;
    },
    confirmFn() {
      this.show = false;
      this.$http.post(`/api/order/submit`, this.orderForm).then(response => {
        console.log("=====response.data==>", response.data);
      });
      this.$toast.loading({
        mask: true,
        duration: 1000, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: "spinner",
        message: "支付中..."
      });

      setTimeout(() => {
        // this.$toast({
        //   mask: false,
        //   message: "支付成功~"
        // });
        this.$router.push("/order/transactionDetails");
      }, 1300);
    },
    handleToChooseAddress() {
      this.$router.push({
        path: `/order/chooseAddress`,
        query: {
          quantity: this.$route.query.quantity,
          cartItemIds: this.$route.query.selectedGoodsId,
          skuId: this.$route.query.skuId
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.order-detail-page {
  height: 100%;
  padding: 0 16px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .header-content {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: #3a3a3a;
      flex: 1;
    }
  }
  .order-card {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 20px;
    .order-list {
      .list-item {
        display: flex;
        justify-content: space-between;
        & > span {
          color: #ec3924;
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
            border-radius: 50%;
          }
          span {
            color: #3a3a3a;
            padding-left: 3px;
            font-weight: 600;
            font-size: 13px;
          }
        }
      }
      .item-info {
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        img {
          width: 80px;
          height: 80px;
          display: inline-block;
          background-color: #ec3924;
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
            font-size: 13px;
          }
          .info-one {
            color: #3a3a3a;
            padding-bottom: 5px;
            .product-name {
              width: 150px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .info-two {
            color: #949497;
          }
        }
      }
      .order-count {
        display: flex;
        justify-content: flex-end;
        font-size: 13px;
        color: #949497;
      }
      .real-pay {
        display: flex;
        justify-content: flex-end;
        font-size: 13px;
        font-weight: 600;
        padding-top: 4px;
        i {
          color: #ec3924;
          padding-left: 5px;
        }
        span {
          color: #3a3a3a;
        }
      }
    }
  }
  .order-info {
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    padding: 20px;
    .info-list {
      color: #3a3a3a;
      .info-title {
        display: flex;
        font-weight: 600;
        justify-content: flex-start;
        align-items: center;
        span {
          font-size: 13px;
          padding-left: 7px;
          font-weight: 700;
        }
      }
      .info-item {
        font-size: 11px;
        padding-left: 34px;
        padding-bottom: 6px;
      }
      .receiver-addres {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .address-content {
          color: #3a3a3a;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .address-fullAddress {
            font-size: 13px;
            font-weight: 700;
            padding-left: 10px;
          }
        }
        .arrow-icon-right {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .pay-btn {
    position: fixed;
    width: 100%;
    bottom: 10px;
    left: 0;
    right: 0;
    padding: 0 16px;
    .pay-count {
      display: flex;
      justify-content: space-between;
      color: #949497;
      font-size: 11px;
      padding-bottom: 12px;
      i {
        color: #ec3924;
        font-weight: 700;
      }
    }
    /deep/ .van-button--danger {
      background-color: #ec3924;
      line-height: 44px;
      font-size: 18px;
    }
  }
}
</style>
