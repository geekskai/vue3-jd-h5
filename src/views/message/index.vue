<template>
  <div class="message-center">
     <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <i>消息中心</i>
    </cm-header>
    <section class="message-mall">
      <router-link
        tag="ul"
        class="message-list"
        :to="`/message/mallMessage?type=${mallMessage.type}`"
      >
        <svg-icon class="mall-message-class" icon-class="mall-message-icon"></svg-icon>
        <li class="message-item">
          <label class="message-title">商城消息</label>
          <span v-if="mallMessage.count" class="mesage-count">存在{{mallMessage.count}}条消息</span>
          <span v-else class="mesage-count">暂无消息</span>
        </li>
        <van-icon size="13px" name="arrow" color="#DBDBDB" />
      </router-link>
    </section>

    <section class="message-mall">
      <router-link
        tag="ul"
        class="message-list"
        :to="`/message/systemMessage?type=${systemMessage.type}`"
      >
        <svg-icon class="mall-message-class" icon-class="system-message-icon"></svg-icon>
        <li class="message-item">
          <label class="message-title">系统消息</label>
          <span v-if="systemMessage.count" class="mesage-count">存在{{systemMessage.count}}条消息</span>
          <span v-else class="mesage-count">暂无消息</span>
        </li>
        <van-icon size="13px" name="arrow" color="#DBDBDB" />
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "messageCenter",
  data() {
    return {
      systemMessage: {},
      mallMessage: {}
    };
  },
  created() {
    this.$http.get(`/api/message/messageTypeCount`).then(response => {
      response.data.content.forEach(it => {
        it.type === 1 ? (this.mallMessage = it) : (this.systemMessage = it);
      });
    });
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.message-center {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 45px;
  .message-mall {
    margin-top: 10px;
    background: url("../../assets/image/back-show.png") no-repeat center center;
    background-size: 100% 100%;
    .message-list {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .mall-message-class {
        width: 40px;
        height: 40px;
      }
      .message-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        margin-right: auto;
        padding-left: 10px;
        .message-title {
          font-size: 14px;
          color: #3a3a3a;
        }
        .mesage-count {
          font-size: 11px;
          color: #949497;
        }
      }
      .arrow-right {
        width: 7px;
        height: 13px;
      }
    }
  }
}
</style>
