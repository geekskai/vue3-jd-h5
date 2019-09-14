<template>
  <div class="consumption-pool">
  
 <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" />
      </span>
      <i>消费矿池</i>
    </cm-header>
    <div v-if="walletUserPoolLogVO.length" class="card-box">
      <section
        class="consumption-card"
        v-for="(WalletUserPool,index) in walletUserPoolLogVO"
        :key="index"
      >
        <ul class="card-content">
          <li class="consumption-time">
            <small>{{WalletUserPool.createTime}}</small>
            <span class="consumption-text">{{WalletUserPool.typeDesc}}</span>
          </li>
          <li class="card-bottom">+{{WalletUserPool.amount}} USDT</li>
        </ul>
      </section>
    </div>
    <div class="empty-icon" v-else>
      <img src="../../assets/image/node/pool-empty.png" class="pool-empty-cls">
      <p class="empty-text">暂无相关记录</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "consumptionPool",
  data() {
    return {
      walletUserPoolLogVO: []
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
          this.walletUserPoolLogVO = response.data.content;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.consumption-pool {
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
