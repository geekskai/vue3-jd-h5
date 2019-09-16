<template>
  <div class="my-wallet">
    <cm-header class="layout-header">
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="gray-btn"></svg-icon>
      </span>
      <i>我的钱包</i>
    </cm-header>
    <section class="wallet-box">
      <ul class="wallet-header">
        <router-link tag="li" to="/pool/consumptionPool" class="wallet-item consumption-pool">
          <svg-icon class="main-icon" icon-class="consumption-pool"></svg-icon>
          <b class="pool-text">消费矿池</b>
          <div class="consumption-info">
            <!-- <svg-icon class="count-svg" icon-class="pool-count"></svg-icon> -->
            <img class="count-svg" src="@/assets/image/mime/pool-count.png">
            <span class="pool-count">{{walletForm.shoppingPool}}</span>
          </div>
        </router-link>
        <router-link tag="li" to="/pool/advertisementPool" class="wallet-item advertisement-pool">
          <svg-icon class="main-icon" icon-class="advertisement-pool"></svg-icon>
          <b class="pool-text">广告矿池</b>
          <div class="advertisement-info">
            <img class="count-svg" src="@/assets/image/mime/pool-count.png">
            <!-- <svg-icon class="count-svg" icon-class="pool-count"></svg-icon> -->
            <span class="pool-count">{{walletForm.adPool}}</span>
          </div>
        </router-link>
        <router-link tag="li" to="/pool/nodePool" class="wallet-item node-pool">
          <svg-icon class="main-icon" icon-class="node-pool"></svg-icon>
          <b class="pool-text">节点矿池</b>
          <div class="node-info">
            <img class="count-svg" src="@/assets/image/mime/pool-count.png">
            <!-- <svg-icon class="count-svg" icon-class="pool-count"></svg-icon> -->
            <span class="pool-count">{{walletForm.nodePool}}</span>
          </div>
        </router-link>
      </ul>
    </section>
    <section class="wallet-consumption">
      <router-link
        class="wallet-consumption-list"
        :to="`/wallet/consumerWallet?shoppingWalletAmount=${walletForm.shoppingWalletAmount}&shoppingWalletAmountCny=${walletForm.shoppingWalletAmountCny}`"
        tag="ul"
      >
        <svg-icon class="wallet-consumption" icon-class="wallet-consumption"></svg-icon>
        <li class="wallet-consumption-item">
          <b class="wallet-name">消费钱包</b>
          <span class="wallet-cm">{{walletForm.shoppingWalletAmount}}CM</span>
          <span class="wallet-cny">≈{{walletForm.shoppingWalletAmountCny}}CNY</span>
        </li>
        <svg-icon class="wallet-consumption-icon" icon-class="wallet-consumption-icon"></svg-icon>
        <van-icon name="arrow" color="#DBDBDB" />
      </router-link>
    </section>

    <section class="wallet-balance">
      <router-link
        class="wallet-balance-list"
        :to="`/wallet/balanceWallet?lockWalletAmount=${walletForm.lockWalletAmount}&lockWalletAmountCny=${walletForm.lockWalletAmountCny}`"
        tag="ul"
      >
        <svg-icon class="wallet-balance" icon-class="wallet-balance"></svg-icon>
        <li class="wallet-balance-item">
          <b class="wallet-name">余额钱包</b>
          <span class="wallet-cm">{{walletForm.lockWalletAmount}}CM</span>
          <span class="wallet-cny">≈{{walletForm.lockWalletAmountCny}}CNY</span>
        </li>
        <svg-icon class="wallet-balance-icon" icon-class="wallet-balance-icon"></svg-icon>
        <van-icon name="arrow" color="#DBDBDB" />
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "MyWallet",
  data() {
    return {
      walletForm: {}
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$http.get(`/api/wallet/info`).then(response => {
        this.walletForm = response.data.content;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.my-wallet {
  .layout-header{
    background-color: #ffffff;
  }
  .wallet-box {
    background-color: #ffffff;
    .wallet-header {
      display: flex;
      height: 170px;
      padding: 0 6px;
      background-color: #ffffff;
      justify-content: space-around;
      flex-wrap: nowrap;
      align-items: center;
      .wallet-item {
        padding: 18px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        width: 106px;
        height: 130px;
        .main-icon {
          width: 40px;
          height: 40px;
        }
        .pool-text {
          font-size: 14px;
        }
        .pool-count {
          font-size: 13px;
          padding-left: 5px;
          color: #949497;
        }
        .count-svg {
          width: 10px;
          height: 10px;
        }
      }
      .consumption-pool {
        background-color: rgba(#f77925, 0.1);
        border-radius: 4px;
        .consumption-info {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .advertisement-pool {
        background-color: rgba(#cba6fd, 0.1);
        border-radius: 4px;
        .advertisement-info {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .node-pool {
        background-color: rgba(#5685ed, 0.1);
        border-radius: 4px;
        .node-info {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .wallet-consumption {
    margin: 16px;
    background-color: #ffffff;
    // box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    .wallet-consumption-list {
      padding: 20px 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .wallet-consumption-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        .wallet-name {
          font-size: 15px;
        }
        .wallet-cm {
          font-size: 18px;
          color: #3a3a3a;
        }
        .wallet-cny {
          font-size: 15px;
          color: rgba(#3a3a3a, 0.6);
        }
      }
      .wallet-consumption {
        width: 40px;
        height: 40px;
      }
      .wallet-consumption-icon {
        width: 80px;
        height: 73px;
      }
    }
  }
  .wallet-balance {
    margin: 16px;
    border-radius: 4px;
    background-color: #ffffff;
    .wallet-balance-list {
      padding: 20px 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .wallet-balance {
        width: 40px;
        height: 40px;
      }
      .wallet-balance-icon {
        width: 40px;
        height: 40px;
      }
      .wallet-balance-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        .wallet-name {
          font-size: 15px;
        }
        .wallet-cm {
          font-size: 18px;
          color: #3a3a3a;
        }
        .wallet-cny {
          font-size: 15px;
          color: rgba(#3a3a3a, 0.6);
        }
      }
      .wallet-balance-icon {
        width: 80px;
        height: 73px;
      }
    }
  }
}
</style>

