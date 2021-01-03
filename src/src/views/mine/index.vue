<template>
  <div class="mine-layout">
    <section class="mine-header">
      <img src="../../assets/image/product/store-new.png" class="header-img" />
      <!-- <div class="login-regist">
        <router-link to="/login" class="order-item" tag="span">登录</router-link>
        <router-link to="/register/phoneRegister" class="order-item" tag="span">/注册</router-link>
      </div> -->
      <ul class="user-info">
        <li class="user-name">钻石王老五</li>
        <li class="node-info">
          <span class="sharing-node" @click="toShow">分享节点</span>
          <span class="business-node">商家节点</span>
        </li>
      </ul>
    </section>
    <section class="my-info">
      <ul class="info-list">
        <li class="info-item">
          <b>09</b>
          <span>商品关注</span>
        </li>
        <li class="info-item">
          <b>09</b>
          <span>店铺关注</span>
        </li>
        <li class="info-item">
          <b>09</b>
          <span>我的足迹</span>
        </li>
      </ul>
    </section>
    <section class="order-all">
      <router-link to="/order" class="look-orders" tag="span"
        >查看全部订单>></router-link
      >
      <ul class="order-list">
        <router-link to="/order/orderDetail" class="order-item" tag="li">
          <svg-icon icon-class="pending-pay"></svg-icon>
          <span>待付款</span>
        </router-link>
        <router-link to="/order/toBeDelivered" class="order-item" tag="li">
          <svg-icon icon-class="be-delivered"></svg-icon>
          <span>待发货</span>
        </router-link>
        <router-link to="/order/pendingReceipt" class="order-item" tag="li">
          <svg-icon icon-class="pending-receipt"></svg-icon>
          <span>待收货</span>
        </router-link>
        <router-link to="/order" class="order-item" tag="li">
          <svg-icon icon-class="all-orders"></svg-icon>
          <span>退换/售后</span>
        </router-link>
      </ul>
    </section>

    <section class="mine-content">
      <ul class="options-list">
        <router-link to="wallet/myWallet" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="my-assets"></svg-icon>
            <span>我的钱包</span>
          </div>
          <van-icon name="arrow" color="#DBDBDB" />
        </router-link>
        <router-link to="/node/nodeApplication" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="node-application"></svg-icon>
            <span>节点申请</span>
          </div>
          <van-icon name="arrow" color="#DBDBDB" />
        </router-link>
        <router-link to="/wallet/myWallet" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon
              class="incon"
              icon-class="businessmen-stationed"
            ></svg-icon>
            <span>商家入驻</span>
          </div>
          <van-icon name="arrow" color="#DBDBDB" />
        </router-link>
        <router-link to="/wallet/myWallet" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="sharing-links"></svg-icon>
            <span>分享链接</span>
          </div>
          <van-icon name="arrow" color="#DBDBDB" />
        </router-link>
      </ul>
    </section>

    <section class="mine-content">
      <ul class="options-list">
        <router-link to="/mine/shippingAddress" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="shipping-address"></svg-icon>
            <span>收货地址</span>
          </div>
          <van-icon name="arrow" color="#DBDBDB" />
        </router-link>
        <router-link to="/mine/messageCenter" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="message-center"></svg-icon>
            <span>消息中心</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
        <router-link to="/mine/helpCenter" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="help-center"></svg-icon>
            <span>帮助中心</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
        <router-link to="/mine/setting" class="option-item" tag="li">
          <div class="item-info">
            <svg-icon class="incon" icon-class="setting"></svg-icon>
            <span>设置</span>
          </div>
          <van-icon color="#DBDBDB" name="arrow" />
        </router-link>
      </ul>
    </section>

    <van-dialog
      class="node-dialog"
      v-model="show"
      confirmButtonText="我知道啦"
      close-on-click-overlay
      confirmButtonColor="#3A3A3A"
      confirm-button-color="#FCE14B"
      :show-cancel-button="false"
      :show-confirm-button="false"
    >
      <article>
        <header class="dialog-header">
          <img src="../../assets/image/product/header-good.png" />
        </header>
        <van-divider
          :style="{
            color: '#3A3A3A',
            borderColor: '#FFE31F',
            fontWeight: '600',
            fontSize: '14px',
            padding: '0 15px'
          }"
          >我的节点数据</van-divider
        >
        <ul class="my-node-data">
          <li class="data-item">
            <img src="../../assets/image/product/share-node-img.png" alt />
            <span class="node-text">分享节点</span>
          </li>
          <li class="data-item">
            <img src="../../assets/image/product/area-node-img.png" alt />
            <span class="node-text">区级节点</span>
          </li>
          <li class="data-item">
            <img src="../../assets/image/product/municipal-node-img.png" alt />
            <span class="node-text">市级节点</span>
          </li>
          <li class="data-item">
            <img src="../../assets/image/product/state-node-img.png" alt />
            <span class="node-text">州级节点</span>
          </li>
          <li class="data-item">
            <img src="../../assets/image/product/industry-node-img.png" alt />
            <span class="node-text">行业节点</span>
          </li>
          <li class="data-item">
            <img src="../../assets/image/product/super-node-img.png" alt />
            <span class="node-text">超级节点</span>
          </li>
        </ul>
        <van-divider
          :style="{
            color: '#3A3A3A',
            borderColor: '#FFE31F',
            fontWeight: '600',
            fontSize: '14px',
            padding: '0 15px'
          }"
        />
        <div class="node-bottom">
          <span class="know-btn" @click="handleClose">我知道啦</span>
          <img
            class="gray-img"
            src="../../assets/image/product/gray-node-img.png"
          />
        </div>
      </article>
    </van-dialog>
    <tabbar></tabbar>
  </div>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from "vue";
export default {
  name: "mine",
  setup() {
    const show = ref(false);
    const columns = ref(1);
    const { ctx } = getCurrentInstance();

    const handleClose = () => {
      show.value = false;
    };

    const toShow = () => {
      show.value = true;
    };

    onMounted(() => {
      ctx.$eventBus.$emit("changeTag", 3);
    });

    return { show, columns, toShow, handleClose };
  }
};
</script>

<style scoped lang="scss">
.mine-layout {
  padding: 30px 16px;
  min-height: 812px;
  padding-bottom: 50px;

  background: linear-gradient(#fe4f70, #ff9351);
  .mine-header {
    display: flex;
    padding-left: 24px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    padding-bottom: 20px;
    .header-img {
      width: 70px;
      height: 70px;
    }
    .user-info {
      padding-left: 16px;
      font-size: 15px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .node-info {
        padding-top: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .sharing-node {
          padding-left: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 78px;
          height: 25px;
          font-size: 11px;
          text-align: center;
          background: url("../../assets/image/product/sharing-node.png")
            no-repeat center center;
          background-size: 100% 100%;
          border-radius: 11px 11px;
        }
        .business-node {
          margin-left: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 22px;
          font-size: 11px;
          text-align: center;
          background-color: #71c0f6;
          border-radius: 11px 11px;
        }
      }
    }

    .login-regist {
      font-size: 15px;
      color: #fff;
      padding-left: 16px;
    }
  }
  .my-info {
    font-size: 13px;
    color: #fff;
    padding-bottom: 16px;
    .info-list {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .info-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        b {
          font-size: 16px;
        }
      }
    }
  }
  .order-all {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 8px;
    .look-orders {
      font-size: 11px;
      font-weight: 600;
      color: #3a3a3a;
      padding-left: 19px;
      padding-top: 14px;
      padding-bottom: 18px;
    }
    .order-list {
      padding-bottom: 18px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .order-item {
        font-size: 14px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
          padding-top: 5px;
          font-weight: 600;
        }
      }
    }
  }
  .mine-content {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    padding: 0 16px;
    margin-top: 18px;
    .options-list {
      padding-top: 20px;
      .option-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        padding-bottom: 22px;
        .item-info {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 15px;
          color: #888;
          .incon {
            padding-right: 16px;
          }
          .header-img {
            width: 50px;
            height: 50px;
            padding-right: 16px;
          }
        }
      }
    }
  }
  .node-dialog {
    .dialog-header {
      text-align: center;
    }
    .my-node-data {
      padding: 10px 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      .data-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-left: 10px;
        margin-bottom: 20px;
        .node-text {
          font-size: 13px;
          padding-top: 5px;
          color: #3a3a3a;
        }
      }
    }
    .node-bottom {
      position: relative;
      .know-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        line-height: 40px;
        width: 154px;
        border-radius: 20px 20px;
        background-color: #fce14b;
        margin-bottom: 30px;
      }
      .gray-img {
        position: absolute;
        right: 12px;
        top: 0;
      }
    }
  }
}
</style>
