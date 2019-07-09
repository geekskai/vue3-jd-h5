<template>
  <div class="cancel-order">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">取消原因</div>
      <router-link class="appeal-record" to="/order/appealRecord" tag="span">申诉记录</router-link>
    </header>
    <div class="tips-box">
      <span class="icon-svg" @click="$router.go(-1)">
        <svg-icon icon-class="sigh"></svg-icon>
      </span>
      <i>订单取消成功</i>
    </div>
    <section class="reason-list">
      <van-picker :columns="columns" @change="onChange" />
      <van-field v-model="value" type="textarea " rows="4" autosize placeholder="请输入原因" />
    </section>

    <div class="pay-btn">
      <div class="pay-count">请选择取消订单原因，帮助我们改进，提高服务</div>
      <van-button type="danger" size="large">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CancelOrder",
  data() {
    return {
      columns: [
        "想了想，我不想要了",
        "买多了/买错了",
        "支付遇到问题",
        "地址填写错误",
        "其他原因"
      ],
      value: ""
    };
  },
  created() {},
  methods: {
    onChange(picker, value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
    }
  }
};
</script>

<style scoped lang="scss">
.cancel-order {
  padding: 0 16px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .header-content {
      text-align: center;
      font-size: 18px;
      color: #3a3a3a;
      flex: 1;
    }
    .appeal-record {
      color: #fe4f70;
      font-size: 13px;
    }
  }
  .reason-list {
    border-radius: 5px;
    /deep/ input {
      padding-left: 20px;
    }
  }
  .tips-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    i {
      color: #3a3a3a;
      font-size: 14px;
      padding-top: 10px;
      padding-bottom: 44px;
    }
    .icon-svg {
        display: inline-block;
      .svg-icon {
        width: 32px;
        height: 32px;
      }
    }
  }
  .pay-btn {
    width: 100%;
    padding: 0 16px;
    padding-top: 50px;
    padding-bottom: 30px;
    .pay-count {
      display: flex;
      justify-content: center;
      color: #949497;
      font-size: 14px;
      padding-bottom: 12px;
    }
    /deep/ .van-button--danger {
      background-color: #fe4f70;
      line-height: 44px;
      font-size: 18px;
    }
  }
}
</style>
