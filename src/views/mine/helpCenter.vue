<template>
  <div class="help-center">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">帮助中心</div>
    </header>
    <section class="message-card">
      <ul class="message-list">
        <li class="message-item">
          <div class="item-title">
            <svg-icon icon-class="product-help"></svg-icon>
            <span>产品帮助</span>
          </div>
          <div class="item-title">
            <svg-icon icon-class="feedback-svg"></svg-icon>
            <span>问题反馈</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "helpCenter",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.help-center {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 45px;
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
    .appeal-record {
      color: #fe4f70;
      font-size: 13px;
    }
  }
  .message-card {
    margin-top: 10px;
    background: url("../../assets/image/back-show.png") no-repeat center center;
    background-size: 100% 100%;
    .message-list {
      .message-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        color: #3a3a3a;
        .item-title {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          .svg-icon {
            width: 70px;
            height: 68px;
          }
          span {
            font-size: 15px;
            margin-top: 10px;
          }
        }
        .message-content {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
