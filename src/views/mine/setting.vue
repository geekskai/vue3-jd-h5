<template>
  <div class="setting-page">
    <header class="page-header">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <div class="header-content">设置</div>
    </header>

    <section class="setting-content">
      <ul class="setting-list">
        <li class="setting-item">
          <span class="setting-msg">消息提醒</span>
          <van-switch v-model="checked" active-color="#EC3924" size="20px" />
        </li>
        <li class="setting-item">
          <span class="setting-msg">清除缓存</span>
          <van-icon class="icon" name="arrow" />
        </li>
        <router-link tag="li" class="setting-item" to="/setting/aboutAs">
          <span class="setting-msg">关于我们</span>
          <van-icon class="icon" name="arrow" />
        </router-link>
      </ul>
    </section>
    <van-button plain size="large" type="danger" @click="handleLogout">退出登录</van-button>
  </div>
</template>

<script>
export default {
  name: "Setting",

  components: {},
  props: {},
  data() {
    return {
      checked: false,
      token: localStorage.token
    };
  },
  methods: {
    handleLogout() {
      this.$http
        .post(`/api/user/logout`, { token: this.token })
        .then(response => {
          if (response.data.code === 0) {
            localStorage.setItem("token", "");
            this.$toast({
              mask: false,
              duration: 1000,
              message: "退出成功！"
            });
            this.$router.push("/index");
          } else {
            this.$toast({
              mask: false,
              message: response.data.msg
            });
          }
        });
    }
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {}
};
</script>

<style scoped lang="scss">
.setting-page {
  padding: 0 16px;
  height: 100vh;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .header-content {
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      flex: 1;
    }
  }
  .setting-content {
    padding: 20px 20px 0 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 8px;
    .setting-list {
      .setting-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        .icon {
          color: #949497;
          opacity: 0.5;
          font-size: 15px;
        }
        .setting-msg {
          color: #3a3a3a;
          font-size: 15px;
        }
      }
    }
  }
  /deep/ .van-button--large {
    height: 44px;
    line-height: 44px;
  }
}
</style>
