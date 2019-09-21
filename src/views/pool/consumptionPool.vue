<template>
  <div class="consumption-pool">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" />
      </span>
      <i>消费矿池</i>
    </cm-header>
    <li class="notice-message">
      <svg-icon class="notice-wallet-icon" icon-class="notice-wallet"></svg-icon>
      <label class="wallet-total">社区消费算力：{{communityCalculate}}算力</label>
    </li>
    <div v-if="walletUserPoolLogVOs.length" class="card-box">
      <section
        class="consumption-card"
        v-for="(WalletUserPool,index) in walletUserPoolLogVOs"
        :key="index"
      >
        <ul class="card-content">
          <li class="consumption-time">
            <small>{{WalletUserPool.createTime}}</small>
            <span class="consumption-text">{{WalletUserPool.typeDesc}}</span>
          </li>
          <li class="card-bottom">
            <span>+{{WalletUserPool.amount}} USDT</span>
            <span>{{WalletUserPool.statusDesc}}</span>
          </li>
        </ul>
      </section>
    </div>
    <div class="empty-icon" v-else>
      <img src="../../assets/image/node/pool-empty.png" class="pool-empty-cls" />
      <p class="empty-text">暂无相关记录</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "consumptionPool",
  data() {
    return {
      walletUserPoolLogVOs: [],
      communityCalculate: ""
    };
  },

  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$http
        .get(`/api/wallet/getPoolLogs?poolType=1&page=1&size=10`)
        .then(response => {
          this.walletUserPoolLogVOs =
            response.data.content.walletUserPoolLogVOs;
          this.communityCalculate = response.data.content.communityCalculate;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.consumption-pool {
  .notice-message {
    display: flex;
    padding: 0 16px;
    justify-content: flex-start;
    align-items: center;
    color: #3a3a3a;
    font-size: 11px;
    .wallet-total {
      padding-left: 5px;
    }
    .wallet-value {
      padding-left: 10px;
    }
    .notice-wallet-icon {
      width: 20px;
      height: 20px;
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
          display: flex;
          justify-content: flex-start;
          align-items: flex-end;
          flex-direction: column;
        }
      }
    }
  }
}
</style>
