<template>
  <div class="audit-failure">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">商家入驻</div>
    </header>
    <section class="apply-content">
      <ul class="address-list">
        <li class="audit-result">
          <svg-icon class="exclamation-mark" icon-class="exclamation-mark"></svg-icon>
          <span class="fail-text">审核失败！</span>
        </li>
        <li class="audit-item">
          <label>理由：</label>
          <span class="fail-reason">{{applyInfo.reason||''}}</span>
        </li>
        <li class="audit-item">
          <label>审核时间：</label>
          <span class="audit-time">{{applyInfo.reviewTime||''}}</span>
        </li>
      </ul>
    </section>
    <router-link class="pay-btn" tag="div" :to="`/merchantsSettled/shopApplyInfo?isEdit=true`">
      <van-button type="danger" size="large">重新入驻</van-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "auditFailure",
  data() {
    return {
      applyInfo: {
        reason: "",
        reviewTime: ""
      }
    };
  },
  created() {
    this.$http.post(`/api/shop/again/display`).then(response => {
      this.applyInfo = response.data.content;
    });
  }
};
</script>

<style scoped lang="scss">
.audit-failure {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 80px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;
    .btn-left {
      background-color: #fff;
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
    .appeal-record {
      color: #ec3924;
      font-size: 13px;
    }
  }
  .apply-content {
    .address-list {
      margin-top: 20px;
      padding: 60px 30px;
      height: 100%;
      background-color: #fff;
      border-radius: 8px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      color: #3a3a3a;
      .audit-result {
        padding-bottom: 54px;
        .exclamation-mark {
          width: 34px;
          height: 34px;
        }
        .fail-text {
          font-size: 17px;
          padding-left: 10px;
        }
      }
      .audit-item {
        padding-bottom: 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #949497;
        span {
          color: #3a3a3a;
        }
      }
    }
  }
  .pay-btn {
    position: fixed;
    width: 100%;
    bottom: 10px;
    left: 0;
    right: 0;
    padding: 0 16px;
    /deep/ .van-button--danger {
      background-color: #ec3924;
      line-height: 44px;
      font-size: 18px;
    }
  }
}
</style>
