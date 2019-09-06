
<template>
  <div class="node-pool">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" />
      </span>
      <div class="header-content">节点矿池</div>
      <li class="notice-message">
        <svg-icon class="notice-wallet-icon" icon-class="notice-wallet"></svg-icon>
        <label class="wallet-total">社区算力总额：85578909算力</label>
      </li>
    </header>
    <div class="card-box">
      <section class="consumption-card">
        <ul class="card-content">
          <div class="circular-consumption">消费</div>
          <li class="consumption-time">
            <small>2018-3-25</small>
            <span class="consumption-text">消费挖矿分红</span>
          </li>
          <li class="card-bottom">+6900 USDT</li>
        </ul>
      </section>
      <section class="week-card">
        <ul class="card-content">
          <div class="circular-consumption">周</div>
          <li class="consumption-time">
            <small>2018-3-25</small>
            <span class="consumption-text">消费挖矿分红</span>
          </li>
          <li class="card-bottom">+6900 USDT</li>
        </ul>
      </section>
      <section class="consumption-card">
        <ul class="card-content">
          <div class="circular-consumption">消费</div>
          <li class="consumption-time">
            <small>2018-3-25</small>
            <span class="consumption-text">消费挖矿分红</span>
          </li>
          <li class="card-bottom">+6900 USDT</li>
        </ul>
      </section>
      <section class="week-card">
        <ul class="card-content">
          <div class="circular-consumption">周</div>
          <li class="consumption-time">
            <small>2018-3-25</small>
            <span class="consumption-text">消费挖矿分红</span>
          </li>
          <li class="card-bottom">+6900 USDT</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "nodePool",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.node-pool {
  .page-header {
    width: 100%;
    padding: 10px 20px;
    color: #3a3a3a;
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
      font-weight: 600;
      flex: 1;
    }
    .notice-message {
      padding-top: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .wallet-total {
        font-size: 14px;
        padding-left: 10px;
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
  .card-box {
    .consumption-card {
      .card-content {
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        padding: 20px 16px;
        border-radius: 8px;
        margin: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .circular-consumption {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #f3ca43;
          font-size: 10px;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .consumption-time {
          margin-right: auto;
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          font-size: 10px;
          color: #949497;
          .consumption-text {
            font-size: 13px;
            color: #3a3a3a;
          }
        }
        .card-bottom {
          color: #d8182d;
          font-size: 15px;
        }
      }
    }
    .week-card {
      .card-content {
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        padding: 20px 16px;
        border-radius: 8px;
        margin: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .circular-consumption {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #fe785e;
          font-size: 10px;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .consumption-time {
          margin-right: auto;
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          font-size: 10px;
          color: #949497;
          .consumption-text {
            font-size: 13px;
            color: #3a3a3a;
          }
        }
        .card-bottom {
          color: #d8182d;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
