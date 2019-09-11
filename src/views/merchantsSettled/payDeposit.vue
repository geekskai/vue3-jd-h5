
<template>
  <div class="pay-deposit">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <i>商家入驻</i>
    </cm-header>
    <section class="apply-content">
      <ul class="address-list">
        <li class="pay-item">
          <svg-icon class="pay-deposit-svg" icon-class="pay-deposit"></svg-icon>
          <span class="thanks-text">您还需缴纳保证金</span>
        </li>
        <li class="reault-text">
          <b>300USDT</b>
        </li>
        <svg-icon class="pay-deposit-background" icon-class="pay-deposit-background"></svg-icon>
      </ul>
    </section>
    <div class="pay-btn">
      <van-button type="danger" @click="handlePayDeposit" size="large">缴纳</van-button>
    </div>
    <van-dialog
      class="node-dialog"
      v-model="showDialog"
      title="确认支付"
      close-on-click-overlay
      confirmButtonColor="#3A3A3A"
      confirm-button-color="#FCE14B"
      :show-cancel-button="false"
      :show-confirm-button="false"
    >
      <ul class="dialog-content">
        <li class="content-tips">
          <span>您还需缴纳保证金</span>
        </li>
        <li class="content-count">
          <span>USDT</span>
          <b class="text-weight">300</b>
        </li>
        <li class="coin-pay">
          <div>
            <label>支付</label>
          </div>
          <div class="icons-box" @click="handleShow" v-click-outside="hidden">
            <svg-icon icon-class="arrow-down" :class="{'active-arrow-down':isActive}"></svg-icon>
            <div class="select-absolte">
              <svg-icon v-if="item.icon" :icon-class="item.icon"></svg-icon>
              <span>{{item.text}}</span>
            </div>
          </div>
        </li>
        <drop-list class="drop-list-play" :config="configData" ref="droplist"></drop-list>
        <li class="content-btn">
          <span class="know-btn" @click="handleClose">确认</span>
        </li>
      </ul>
    </van-dialog>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "waitingReviewResults",
  directives: {
    ClickOutside
  },
  data() {
    return {
      applyInfo: {},
      item: {},
      showDialog: false,
      isActive: false,
      configData: {
        position: {
          top: "135px",
          right: "12px",
          bottom: "",
          left: ""
        },
        width: "30%", // 设置宽度
        list: [
          // 设置下拉列表数据和对应的点击事件
          {
            text: "CoinPay",
            icon: "coin-pay",
            action: this.handleCoinPay
          }
          // {
          //   text: "支付宝",
          //   icon: "alipay-icon",
          //   action: this.handleAlipay
          // }
        ]
      }
    };
  },
  created() {},
  methods: {
    handlePayDeposit() {
      this.showDialog = true;
    },
    handleClose() {
      this.showDialog = false;
      this.$http.post(`/api/shop/pay/deposit`).then(response => {
        this.$router.push(`/merchantsSettled/waitingReviewResults`);
      });
    },
    handleCoinPay(item) {
      this.item = item;
    },
    handleAlipay(item) {
      this.item = item;
    },
    hidden() {
      this.isActive = false;
      this.$refs.droplist.hidden();
    },
    handleShow() {
      this.isActive = true;
      this.$refs.droplist.show();
    }
  }
};
</script>

<style scoped lang="scss">
.pay-deposit {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 80px;
  .apply-content {
    .address-list {
      margin-top: 20px;
      padding: 30px 20px;
      height: 100%;
      background-color: #fff;
      border-radius: 8px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      color: #3a3a3a;
      .pay-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .pay-deposit-svg {
          width: 34px;
          height: 34px;
        }
        .thanks-text {
          padding-left: 10px;
          font-size: 14px;
          color: #474747;
          padding-top: 7px;
        }
      }
      .reault-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 20px;
        color: #ec3924;
        padding: 10px 0;
      }
      .pay-deposit-background {
        width: 343px;
        height: 272px;
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
    /deep/ .van-button--danger {
      background-color: #ec3924;
      line-height: 44px;
      font-size: 18px;
    }
  }
  .node-dialog {
    .dialog-content {
      padding: 0 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 14px;
      color: #3a3a3a;
      .drop-list-play {
        .item {
          margin: 0 10px;
        }
      }
      .content-tips {
        width: 100%;
        padding-top: 20px;
      }
      .coin-pay {
        width: 100%;
        .icons-box {
          padding-right: 75px;
          display: flex;
          justify-content: flex-start;
          position: relative;
          .select-absolte {
            position: absolute;
            right: 0;
            top: 0;
          }
        }
        .active-arrow-down {
          transform: rotate(180deg);
        }
      }
      .content-count {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 0;
        .text-weight {
          font-size: 20px;
          font-weight: 700;
          padding-left: 5px;
        }
      }
      .coin-pay {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .content-btn {
        .know-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;
          line-height: 40px;
          font-size: 17px;
          color: #fff;
          width: 140px;
          border-radius: 4px;
          background-color: #d8182d;
          margin: 30px 0;
          margin-top: 50px;
        }
      }
    }
  }
}
</style>
