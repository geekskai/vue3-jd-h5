<template>
  <div class="balance-wallet">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" />
      </span>
      <div class="header-content">余额钱包</div>
      <li class="notice-message">
        <svg-icon
          class="notice-wallet-icon"
          icon-class="notice-wallet"
        ></svg-icon>
        <label class="wallet-total">钱包总额:85578909CM</label>
        <span class="wallet-value">≈65468.77CNY</span>
      </li>
    </header>
    <section class="wallet-card">
      <ul class="wallet-content">
        <span class="wallet-title">收益占比</span>
        <div class="profit-charts">
          <div class="profit-img">
            <img src="../../assets/icons/rown.png" />
          </div>
          <ul class="profit-lists">
            <li class="profit-item">
              <div class="circular-yestaday"></div>
              <div class="profit-date">
                <label>昨日矿池收益</label>
                <span>500CM</span>
              </div>
            </li>
            <li class="profit-item">
              <div class="circular-week"></div>
              <div class="profit-date">
                <label>本周矿池收益</label>
                <span>800CM</span>
              </div>
            </li>
            <li class="profit-item">
              <div class="circular-month"></div>
              <div class="profit-date">
                <label>本月矿池收益</label>
                <span>1200CM</span>
              </div>
            </li>
            <li class="profit-item">
              <div class="circular-history"></div>
              <div class="profit-date">
                <label>历史矿池收益</label>
                <span>674599000CM</span>
              </div>
            </li>
          </ul>
        </div>
      </ul>
    </section>
    <ul class="order-header">
      <li class="options-header">
        <div class="header-item">
          <span class="option-time">2019-8-15</span>
          <svg-icon icon-class="arrow-down"></svg-icon>
        </div>
        <div class="header-item">
          <span class="option-type">全部类型</span>
          <svg-icon icon-class="arrow-down"></svg-icon>
        </div>
        <div class="header-item">
          <span class="option-total">总明细:29845678907CM</span>
        </div>
      </li>
    </ul>
    <section class="wallet-orders">
      <ul class="orders-lists">
        <li class="order-item">
          <div class="item-time">
            <svg-icon
              class="calendar-wallet-order"
              icon-class="calendar-wallet-order"
            ></svg-icon>
            <span class="time-text">3/25 21:22:45</span>
          </div>
          <div class="item-status">
            <span class="status-text">已完成</span>
            <div class="status-color">消费矿池释放</div>
          </div>
        </li>
        <li class="order-number">
          <div class="item-time">
            <span>单号：</span>
            <span class="time-text">6588745</span>
          </div>
          <div class="item-status">
            <span>金额：77.789654</span>
          </div>
        </li>
        <li class="order-item">
          <div class="item-time">
            <span class="status-text">转换ID：0x4o…dfghjk</span>
          </div>
          <div class="item-status">
            <svg-icon
              class="wallet-order-message"
              icon-class="wallet-order-message"
            ></svg-icon>
          </div>
        </li>
      </ul>
    </section>
    <section class="wallet-orders">
      <ul class="orders-lists">
        <li class="order-item">
          <div class="item-time">
            <svg-icon
              class="calendar-wallet-order"
              icon-class="calendar-wallet-order"
            ></svg-icon>
            <span class="time-text">3/25 21:22:45</span>
          </div>
          <div class="item-status">
            <span class="status-text">已完成</span>
            <div class="status-color1">节点矿池释放</div>
          </div>
        </li>
        <li class="order-number">
          <div class="item-time">
            <span>单号：</span>
            <span class="time-text">6588745</span>
          </div>
          <div class="item-status">
            <span>金额：77.789654</span>
          </div>
        </li>
        <li class="order-item">
          <div class="item-time">
            <span class="status-text">转换ID：0x4o…dfghjk</span>
          </div>
          <div class="item-status">
            <svg-icon
              class="wallet-order-message"
              icon-class="wallet-order-message"
            ></svg-icon>
          </div>
        </li>
      </ul>
    </section>
    <section class="wallet-orders">
      <ul class="orders-lists">
        <li class="order-item">
          <div class="item-time">
            <svg-icon
              class="calendar-wallet-order"
              icon-class="calendar-wallet-order"
            ></svg-icon>
            <span class="time-text">3/25 21:22:45</span>
          </div>
          <div class="item-status">
            <span class="status-text">已完成</span>
            <div class="status-color1">广告矿池释放</div>
          </div>
        </li>
        <li class="order-number">
          <div class="item-time">
            <span>单号：</span>
            <span class="time-text">6588745</span>
          </div>
          <div class="item-status">
            <span>金额：77.789654</span>
          </div>
        </li>
        <li class="order-item">
          <div class="item-time">
            <span class="status-text">转换ID：0x4o…dfghjk</span>
          </div>
          <div class="item-status">
            <svg-icon
              class="wallet-order-message"
              icon-class="wallet-order-message"
            ></svg-icon>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "balanceWallet",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.balance-wallet {
  .page-header {
    border-radius: 0pt 0pt 0pt 103pt;

    height: 321px;
    background: linear-gradient(to right, #fe735d, #fc9863);
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
      padding-top: 30px;
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
  .wallet-card {
    position: absolute;
    top: 100px;
    right: 16px;
    left: 16px;
    padding: 16px;
    background-color: #ffffff;
    border-radius: 8px;
    .wallet-content {
      width: 343px;
      height: 230px;
      .wallet-title {
        display: block;
        font-size: 14px;
        color: #333333;
        margin-bottom: 20px;
      }
      .profit-charts {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .profit-img {
          padding: 16px;
        }
        .profit-lists {
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          flex-direction: column;
          .profit-item {
            margin-top: 10px;
            padding-left: 30px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .circular-yestaday {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background-color: #ff6383;
            }
            .circular-week {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background-color: #ff9f40;
            }
            .circular-month {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background-color: #c95ff2;
            }
            .circular-history {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              background-color: #5c89ff;
            }
            .profit-date {
              padding-left: 10px;
              font-size: 10px;
              color: #3a3a3a;
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              flex-direction: column;
            }
          }
        }
      }
    }
  }
  .order-header {
    color: #3a3a3a;
    margin-top: 60px;
    .options-header {
      display: flex;
      justify-content: center;
      align-items: center;
      .header-item {
        font-size: 13px;

        .option-type {
          padding-left: 10px;
        }
        .option-total {
          padding-left: 10px;
        }
      }
      .total-detail {
        font-size: 11px;
        color: #3a3a3a;
      }
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
          .status-color {
            font-size: 10px;
            text-align: center;
            color: #ffffff;
            background-color: #ffbf44;
            border-radius: 0pt 33px 33px 48px;
            width: 71px;
            height: 20px;
          }
          .status-color1 {
            font-size: 10px;
            text-align: center;
            color: #ffffff;
            background-color: #5685ed;
            border-radius: 0pt 33px 33px 48px;
            width: 71px;
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
