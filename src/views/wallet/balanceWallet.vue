<template>
  <div class="balance-wallet">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" />
      </span>
      <div class="header-content">余额钱包</div>
      <li class="notice-message">
        <svg-icon class="notice-wallet-icon" icon-class="notice-wallet"></svg-icon>
        <label class="wallet-total">钱包总额:{{$route.query.lockWalletAmount}}CM</label>
        <span class="wallet-value">≈{{$route.query.lockWalletAmountCny}}CNY</span>
      </li>
    </header>
    <div class="empty-icon" v-if="!balanceWallets.length">
      <img src="../../assets/image/node/pool-empty.png" class="pool-empty-cls">
      <p class="empty-text">暂无相关记录</p>
    </div>
    <section
      v-else
      class="wallet-orders"
      v-for="(balanceWallet,index) in balanceWallets"
      :key="index"
    >
      <ul class="orders-lists">
        <li class="order-item">
          <div class="item-time">
            <svg-icon class="calendar-wallet-order" icon-class="calendar-wallet-order"></svg-icon>
            <span class="time-text">{{formatDate(balanceWallet.createTime)}}</span>
          </div>
          <div class="item-status">
            <div
              class="status-color-consumer"
              v-if="balanceWallet.logType==101||balanceWallet.logType==201"
            >{{balanceWallet.logTypeDesc}}</div>
            <div
              class="status-color-node"
              v-if="balanceWallet.logType==102||balanceWallet.logType==202"
            >{{balanceWallet.logTypeDesc}}</div>
            <div
              class="status-color-adve"
              v-if="balanceWallet.logType==103||balanceWallet.logType==203"
            >{{balanceWallet.logTypeDesc}}</div>
          </div>
        </li>
        <li class="order-number">
          <div class="item-time">
            <span>单号：</span>
            <span class="time-text">{{balanceWallet.id}}</span>
          </div>
          <div class="item-status">
            <span>金额：+{{balanceWallet.amount}}</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'balanceWallet',
  data () {
    return {
      balanceWallets: []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http
        .get(`/api/wallet/getWalletLogs?type=2&page=1&size=10`)
        .then(response => {
          this.balanceWallets = response.data.content
        })
    },
    formatDate (inputTime) {
      var date = new Date(inputTime)
      // var y = date.getFullYear()
      var m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      var d = date.getDate()
      d = d < 10 ? '0' + d : d
      var h = date.getHours()
      h = h < 10 ? '0' + h : h
      var minute = date.getMinutes()
      var second = date.getSeconds()
      minute = minute < 10 ? '0' + minute : minute
      second = second < 10 ? '0' + second : second
      // return y + "/" + m + "/" + d + " " + h + ":" + minute + ":" + second;
      return m + '/' + d + ' ' + h + ':' + minute + ':' + second
    }
  }
}
</script>

<style scoped lang="scss">
.balance-wallet {
  .page-header {
    // height: 334px;
    // background: linear-gradient(to right, #fe735d, #fc9863);
    background-color: #6383fc;
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
