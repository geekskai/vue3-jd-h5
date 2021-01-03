<template>
  <div class="message-center">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">消息中心</div>
    </header>
    <section class="message-card">
      <ul class="message-list">
        <li class="message-item">
          <div class="item-title">
            <van-tag color="#FFBF43">问题反馈</van-tag>
            <span>2019-05-17 16:30:10</span>
          </div>
          <div class="message-content">
            您的反馈我们已经收到，我们会及时跟踪改进，感谢一路有你
          </div>
        </li>
      </ul>
    </section>
    <section class="message-card">
      <ul class="message-list">
        <li class="message-item">
          <div class="item-title">
            <van-tag color="#FFBF43">问题反馈</van-tag>
            <span>2019-05-17 16:30:10</span>
          </div>
          <div class="message-content">
            您的反馈我们已经收到，我们会及时跟踪改进，感谢一路有你
          </div>
        </li>
      </ul>
    </section>
    <section class="message-card">
      <ul class="message-list">
        <li class="message-item">
          <div class="item-title">
            <van-tag color="#91C95B">订单通知</van-tag>
            <span>2019-05-17 16:30:10</span>
          </div>
          <div class="message-content">
            您的反馈我们已经收到，我们会及时跟踪改进，感谢一路有你
          </div>
        </li>
      </ul>
    </section>
    <section class="message-card">
      <ul class="message-list">
        <li class="message-item">
          <div class="item-title">
            <van-tag color="#FFBF43">问题反馈</van-tag>
            <span>2019-05-17 16:30:10</span>
          </div>
          <div class="message-content">
            您的反馈我们已经收到，我们会及时跟踪改进，感谢一路有你
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "messageCenter",
  setup() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.message-center {
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
      color: #d8182d;
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
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 16px;
        color: #3a3a3a;
        .item-title {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 5px;
          span {
            font-size: 10px;
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
