<template>
  <div class="transaction-details">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">交易详情</div>
    </header>
    <section class="card-box">
      <ul class="card-content">
        <li class="success-icon">
          <svg-icon icon-class="pay-success"></svg-icon>
        </li>
        <li class="pay-text">
          <span>1099 TOP</span>
        </li>
        <li class="pay-tips">
          <span>支付成功</span>
        </li>
      </ul>
      <ul class="list-info">
        <li class="item-info">
          <label>商品</label>
          <span>古力娜扎的新装</span>
        </li>
        <li class="item-info">
          <label>支付方式</label>
          <span>TOP支付</span>
        </li>
        <li class="item-info">
          <label>支付单号</label>
          <span>101010101010101010</span>
        </li>
        <li class="item-info">
          <label>成交时间</label>
          <span>2019年06月06日 16:36:33</span>
        </li>
      </ul>
      <div class="login-register-btns">
        <router-link class="register-btn" to="/classify" tag="span"
          >完成</router-link
        >
        <router-link class="login-btn" to="/storeDetail" tag="span"
          >返回商家</router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "transactionDetails",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.transaction-details {
  height: 100%;
  padding: 0 16px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .btn-left {
      background-color: white;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: #3a3a3a;
      flex: 1;
    }
  }
  .card-box {
    padding: 0 16px;
    margin-top: 10px;
    width: 346px;
    height: 443px;
    background-color: white;
    box-shadow: 0 5px 5px 0 rgba(#000000, 0.1);
    border-radius: 4px;
    .card-content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #333;
      .success-icon {
        padding-top: 30px;
        padding-bottom: 10px;
        .svg-icon {
          width: 32px;
          height: 32px;
        }
      }
      .pay-text {
        padding-bottom: 10px;
        font-size: 26px;
        font-weight: 600;
      }
      .pay-tips {
        font-size: 17px;
      }
    }
    .list-info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      font-size: 14px;
      padding-top: 40px;
      .item-info {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 16px;
        label {
          color: #9b9b9b;
        }
        span {
          color: #3a3a3a;
        }
      }
    }
    .login-register-btns {
      padding-top: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      .login-btn {
        width: 150px;
        height: 44px;
        line-height: 44px;
        color: white;
        font-size: 17px;
        border: 1px solid #d8182d;
        border-radius: 4px;
        background-color: #d8182d;
        margin-left: 15px;
      }
      .register-btn {
        line-height: 44px;
        color: #949497;
        font-size: 17px;
        border: 1px solid #949497;
        background-color: transparent;
        border-radius: 4px;
        width: 150px;
        height: 44px;
      }
    }
  }
}
</style>
