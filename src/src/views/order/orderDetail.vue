<template>
  <!-- 待支付 -->
  <div class="order-detail-page">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">订单详情</div>
    </header>

    <section class="order-card">
      <ul class="order-list">
        <li class="list-item">
          <div class="store-info">
            <img
              src="../../assets/image/product/store-headerM.png"
              class="header-img"
            />
            <span>店铺名称</span>
          </div>
          <span>待支付</span>
        </li>
        <li class="item-info">
          <img />
          <div class="order-detail">
            <p class="info-one">
              <span>娜扎新装LOOK</span>
              <i>￥222</i>
            </p>
            <p class="info-two">
              <span>型号;规格;颜色;</span>
              <span>×2</span>
            </p>
          </div>
        </li>
        <li class="order-count">
          <span>订单总价：</span>
          <i>$444</i>
        </li>
        <li class="real-pay">
          <span>实付款：</span>
          <i>￥444</i>
        </li>
      </ul>
    </section>
    <section class="order-info">
      <ul class="info-list">
        <li class="info-title">
          <svg-icon icon-class="order-info"></svg-icon>
          <span>订单信息</span>
        </li>
        <li class="info-item">
          <label>订单编号：</label>
          <span>201905211540350025</span>
        </li>
        <li class="info-item">
          <label>创建时间：</label>
          <span>2019/05/01 13:40:40</span>
        </li>
        <li class="receiver-addres">
          <svg-icon icon-class="shipping-address"></svg-icon>
          <div class="address-content">
            <label>收货人：咋地 13545900066</label>
            <span>广东省深圳市南山区科研路1001号比科大厦</span>
          </div>
        </li>
      </ul>
    </section>
    <vue-pickers
      :show="show"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="close"
      @confirm="confirmFn"
    ></vue-pickers>

    <div class="pay-btn">
      <div class="pay-count">
        <span>
          共2件商品，小计：
          <i>￥222</i>
        </span>
        <span>59：59后取消订单</span>
      </div>
      <van-button type="danger" @click="handlePay" size="large"
        >立即支付</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      columns: 1,
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
  created() {},
  methods: {
    close() {
      this.show = false;
    },
    confirmFn() {
      this.show = false;
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
    handlePay() {
      this.show = true;
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
            font-size: 13px;
          }
          .info-one {
            color: #3a3a3a;
            padding-bottom: 5px;
            i {
              font-weight: 700;
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
          color: #d8182d;
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
        justify-content: flex-start;
        margin-top: 20px;
        .address-content {
          padding-left: 7px;
          color: #3a3a3a;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          label {
            font-size: 13px;
            font-weight: 600;
          }
          span {
            padding-top: 4px;
            font-size: 11px;
          }
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
    // padding-top: 50px;
    // padding-bottom: 30px;
    .pay-count {
      display: flex;
      justify-content: space-between;
      color: #949497;
      font-size: 11px;
      padding-bottom: 12px;
      i {
        color: #d8182d;
        font-weight: 700;
      }
    }
    /deep/ .van-button--danger {
      background-color: #d8182d;
      line-height: 44px;
      font-size: 18px;
    }
  }
}
</style>
