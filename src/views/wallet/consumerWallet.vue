<template>
  <div class="consumer-wallet">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" />
      </span>
      <div class="header-content">消费钱包</div>
      <li class="notice-message">
        <svg-icon class="notice-wallet-icon" icon-class="notice-wallet"></svg-icon>
        <label class="wallet-total">钱包总额:{{$route.query.shoppingWalletAmount}}CM</label>
        <span class="wallet-value">≈{{$route.query.shoppingWalletAmountCny}}CNY</span>
      </li>
    </header>
    <div class="empty-icon" v-if="!consumerWallets.length">
      <img src="../../assets/image/node/pool-empty.png" class="pool-empty-cls">
      <p class="empty-text">暂无相关记录</p>
    </div>
    <section
      v-else
      class="wallet-orders"
      v-for="(consumerWallet,index) in consumerWallets"
      :key="index"
    >
      <ul class="orders-lists">
        <li class="order-item">
          <div class="item-time">
            <svg-icon class="calendar-wallet-order" icon-class="calendar-wallet-order"></svg-icon>
            <span class="time-text">{{formatDate(consumerWallet.createTime)}}</span>
          </div>
          <div class="item-status">
            <div
              class="status-color-consumer"
              v-if="consumerWallet.logType==101||consumerWallet.logType==201"
            >{{consumerWallet.logTypeDesc}}</div>
            <div
              class="status-color-node"
              v-if="consumerWallet.logType==102||consumerWallet.logType==202"
            >{{consumerWallet.logTypeDesc}}</div>
            <div
              class="status-color-adve"
              v-if="consumerWallet.logType==103||consumerWallet.logType==203"
            >{{consumerWallet.logTypeDesc}}</div>
          </div>
        </li>
        <li class="order-number">
          <div class="item-time">
            <span>单号：</span>
            <span class="time-text">{{consumerWallet.id}}</span>
          </div>
          <div class="item-status">
            <span>金额：+{{consumerWallet.amount}}</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "consumerWallet",
  data() {
    return {
      consumerWallets: []
    };
  },

  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$http
        .get(`/api/wallet/getWalletLogs?type=1&page=1&size=10`)
        .then(response => {
          this.consumerWallets = response.data.content;
        });
    },
    formatDate(inputTime) {
      var date = new Date(inputTime);
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var h = date.getHours();
      h = h < 10 ? "0" + h : h;
      var minute = date.getMinutes();
      var second = date.getSeconds();
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      return m + "/" + d + " " + h + ":" + minute + ":" + second;
    }
  }
};
</script>

<style scoped lang="scss">
.consumer-wallet {
  .page-header {
    background-color: #fe785d;
    width: 100%;
    padding: 10px 20px;
    .btn-left {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      z-index: 11;
      color: #ffffff;
      font-weight: 600;
      flex: 1;
    }
    .notice-message {
      padding-top: 25px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #ffffff;
      .wallet-total {
        font-size: 14px;
        padding-left: 5px;
      }
      .wallet-value {
        font-size: 13px;
        padding-left: 20px;
      }
      .notice-wallet-icon {
        width: 20px;
        height: 20px;
      }
    }
  }
  .empty-icon {
    text-align: center;
    padding-top: 100px;
    .pool-empty-cls {
      width: 155px;
      height: 155px;
    }
    .empty-text {
      color: #949497;
      font-size: 17px;
    }
  }
  .wallet-orders {
    padding: 5px 16px;
    margin: 16px;
    background-color: #ffffff;
    border-radius: 8px;
    .orders-lists {
      .order-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 8px;
        padding-top: 8px;
        border-bottom: 1px solid #efeff4;
        .item-time {
          font-size: 14px;
          color: #474747;
          display: flex;
          justify-content: center;
          align-items: center;
          .time-text {
            padding-left: 5px;
          }
        }
        .item-status {
          display: flex;
          justify-content: center;
          align-items: center;

          .status-text {
            padding-right: 5px;
            font-size: 10px;
            color: #949497;
          }
          .status-color-consumer {
            font-size: 10px;
            text-align: center;
            color: #ffffff;
            background-color: #ffbf44;
            border-radius: 0pt 33px 33px 48px;
            width: 80px;
            height: 20px;
          }
          .status-color-node {
            font-size: 10px;
            text-align: center;
            color: #ffffff;
            background-color: #5685ed;
            border-radius: 0pt 33px 33px 48px;
            width: 80px;
            height: 20px;
          }
          .status-color-adve {
            font-size: 10px;
            text-align: center;
            color: #ffffff;
            background-color: #727cf1;
            border-radius: 0pt 33px 33px 48px;
            width: 80px;
            height: 20px;
          }
        }
      }
      .order-number {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 8px;
        padding-top: 8px;
        border-bottom: 1px solid #efeff4;
        .item-time {
          font-size: 14px;
          color: #474747;
          display: flex;
          justify-content: center;
          align-items: center;
          .time-text {
            padding-left: 5px;
          }
        }
        .item-status {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          color: #474747;
        }
      }
    }
  }
}
</style>
