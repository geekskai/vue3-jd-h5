<template>
  <div class="node-application">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" alt />
      </span>
      <div class="header-content">节点申请</div>
    </header>
    <main class="apply-main">
      <ul class="main-lists">
        <li class="list-item" @click="toShow">
          <img src="../../assets/image/product/share-apply.png" alt />
          <span class="node-text">分享节点</span>
        </li>
        <li class="list-item" @click="toShow">
          <img src="../../assets/image/product/area-node.png" alt />
          <span class="node-text">区域节点</span>
        </li>
        <li class="list-item" @click="toShow">
          <img src="../../assets/image/product/municipal-node.png" alt />
          <span class="node-text">城市节点</span>
        </li>
        <li class="list-item" @click="toShow">
          <img src="../../assets/image/product/state-node.png" alt />
          <span class="node-text">州级节点</span>
        </li>
        <li class="list-item" @click="toShow">
          <img src="../../assets/image/product/industry-node.png" alt />
          <span class="node-text">行业节点</span>
        </li>
        <li class="list-item" @click="toShow">
          <img src="../../assets/image/product/super-node.png" alt />
          <span class="node-text">超级节点</span>
        </li>
      </ul>
    </main>

    <van-dialog
      class="node-dialog"
      v-model="show"
      title="确认支付"
      close-on-click-overlay
      confirmButtonColor="#3A3A3A"
      confirm-button-color="#FCE14B"
      :show-cancel-button="false"
      :show-confirm-button="false"
    >
      <ul class="dialog-content">
        <li class="content-tips">
          <span>确认支付1003 USDT成为分享节点？</span>
          <!-- <svg-icon icon-class="dialog-close"></svg-icon> -->
        </li>
        <li class="content-count">
          <span>USDT</span>
          <b class="text-weight">100003</b>
        </li>
        <li class="coin-pay">
          <label>支付</label>
          <svg-icon icon-class="coin-pay"></svg-icon>
          <label>CoinPay</label>
        </li>
        <li class="content-btn">
          <span class="know-btn" @click="handleClose">确认</span>
        </li>
      </ul>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: "NodeApplication",
  data() {
    return {
      show: false
    };
  },
  created() {},
  methods: {
    handleClose() {
      this.show = false;
    },
    toShow() {
      this.show = true;
    }
  }
};
</script>

<style scoped lang="scss">
.node-application {
  .page-header {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efeff4;
    .btn-left {
      position: absolute;
      left: 16px;
      top: 10px;
      z-index: 999;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      z-index: 11;
      color: #3a3a3a;
      font-weight: 600;
      flex: 1;
    }
  }
  .apply-main {
    padding: 10px;
    .main-lists {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      .list-item {
        background-color: #fff;
        display: flex;
        width: 45%;
        height: 160px;
        margin-bottom: 20px;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .node-text {
          font-size: 14px;
          color: #444;
          padding-top: 16px;
        }
      }
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
      .content-tips {
        width: 100%;
        padding-top: 20px;
      }
      .coin-pay {
        width: 100%;
        .svg-icon {
          margin-left: auto;
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
        }
      }
    }
  }
}
</style>

