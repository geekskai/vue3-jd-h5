<template>
  <div class="waiting-review-results">
    <header class="page-header">
      <span class="btn-left" @click="$router.push('/mine')">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">商家入驻</div>
    </header>
    <section class="apply-content">
      <ul class="address-list">
        <li>
          <svg-icon class="green-ok" icon-class="green-ok"></svg-icon>
          
          <span class="thanks-text">感谢您的配合！</span>
        </li>
        <li class="reault-text">
          <p>3个工作日内审核结果会以短信形式反馈到</p>
          <p>您的账号，请注意查收</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "waitingReviewResults",
  data() {
    return {
      applyInfo: {}
    };
  },
  created() {}
};
</script>

<style scoped lang="scss">
.waiting-review-results {
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
      padding: 60px 20px;
      height: 100%;
      background-color: #fff;
      border-radius: 8px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      color: #3a3a3a;
      .green-ok {
        width: 34px;
        height: 34px;
      }
      .thanks-text {
        padding-left: 10px;
        font-size: 17px;
      }
      .reault-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 14px;
        padding-top: 20px;
      }
    }
  }
}
</style>
