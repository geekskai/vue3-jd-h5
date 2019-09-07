<template>
  <div class="mall-message">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">系统消息</div>
    </header>
    <div class="swipe-message" v-for="(message,index) in messageArrays" :key="index">
      <van-swipe-cell :disabled='true' :right-width="60" :on-close="onClose" :name="message.id">
        <section class="message-card">
          <ul class="message-list">
            <li class="message-item">
              <div class="item-title">
                <van-tag color="#91C95B" v-if="message.title === '订单通知'">{{message.title}}</van-tag>
                <van-tag color="#FFBF43" v-else>{{message.title}}</van-tag>
                <span>{{message.createTime}}</span>
              </div>
              <div class="message-content">{{message.content}}</div>
            </li>
          </ul>
        </section>
        <template slot="right">
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: "systemMessage",
  data() {
    return {
      messageArrays: []
    };
  },
  created() {
    this.inintData();
  },
  methods: {
    inintData() {
      this.$http
        .post(`/api/message/messageList`, { type: this.$route.query.type })
        .then(response => {
          this.messageArrays = response.data.content;
        });
    },
    onClose(clickPosition, instance, detail) {
      console.log("==detail==", detail);
      this.$http
        .post(`/api/message/updateMessage`, { ids: [detail.name], type: 1 })
        .then(response => {
          this.$toast({
            mask: false,
            duration: 1000,
            message: "删除成功！"
          });
        });
      instance.close();
      this.inintData();
    }
  }
};
</script>

<style scoped lang="scss">
.mall-message {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 45px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .btn-left {
      position: absolute;
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
      color: #ec3924;
      font-size: 13px;
    }
  }
  .swipe-message {
    margin-top: 10px;
    .message-card {
      background: url("../../assets/image/back-show.png") no-repeat center
        center;
      background-size: 102% 100%;
      background-color: #fff;
      border-radius: 8px 0 0 8px;
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
    /deep/ .van-swipe-cell {
      border-radius: 0 8px 8px 0;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
    }
    /deep/ .van-button--danger {
      height: 100%;
    }
  }
}
</style>
