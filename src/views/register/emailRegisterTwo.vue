<template>
  <div class="emailRegisterTwo">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="gray-btn"></svg-icon>
      </span>
      <router-link class="appeal-record" to="/register/phoneRegister" tag="span">手机注册</router-link>
    </header>
    <div class="mall-logo">
      <img src="../../assets/image/setting/logo.png" />
    </div>
    <section class="register-info">
      <span class="phone-number">设置密码</span>
      <p class="number-tips">6-8位数字、字母的字符</p>

      <van-cell-group class="info-list">
        <van-field
          v-if="pwdEyes1"
          v-model="emailRegisterTwo.password"
          right-icon="eye-o"
          clearable
          @click-right-icon="pwdEyes1=!pwdEyes1"
          placeholder="密码"
        />
        <van-field
          v-else
          type="password"
          v-model="emailRegisterTwo.password"
          right-icon="closed-eye"
          clearable
          @click-right-icon="pwdEyes1=!pwdEyes1"
          placeholder="密码"
        />
        <van-field
          v-if="pwdEyes2"
          v-model="emailRegisterTwo.password1"
          right-icon="eye-o"
          clearable
          @click-right-icon="pwdEyes2=!pwdEyes2"
          placeholder="再次确认密码"
        />
        <van-field
          v-else
          type="password"
          v-model="emailRegisterTwo.password1"
          right-icon="closed-eye"
          clearable
          @click-right-icon="pwdEyes2=!pwdEyes2"
          placeholder="再次确认密码"
        />
        <van-field v-model="emailRegisterTwo.recommendCode" clearable placeholder="请输入邀请码（必填）" />
        <van-field class="temp-empty" />
      </van-cell-group>
    </section>
    <div class="login-register-btns">
      <span class="login-btn" @click="handleConfirmRegister">确定</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "emailRegisterTwo",
  data() {
    return {
      pwdEyes1: false,
      pwdEyes2: false,
      emailRegisterTwo: {
        password: ""
      }
    };
  },
  created() {},
  methods: {
    handleConfirmRegister() {
      this.$http
        .post(
          `/api/user/register`,
          Object.assign(this.emailRegisterTwo, this.$route.query)
        )
        .then(response => {
          if (response.data.code === 0) {
            localStorage.setItem("token", response.data.content.token);
            this.$toast({
              mask: false,
              message: "注册成功！"
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
  }
};
</script>

<style scoped lang="scss">
.emailRegisterTwo {
  height: 100%;
  padding: 0 16px;
  min-height: 667px;
  max-height: 812px;
  background: linear-gradient(#fdfdfd, #ffecf0);
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 44px;
    .appeal-record {
      color: #ec3924;
      font-size: 13px;
    }
  }
  .mall-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 32px;
  }
  .register-info {
    padding: 25px 34px;
    .phone-number {
      font-size: 24px;
      color: #3a3a3a;
      font-weight: 600;
    }
    .number-tips {
      color: #949497;
      padding-top: 4px;
      padding-bottom: 32px;
      font-size: 11px;
    }
    /deep/ .van-hairline--top-bottom::after {
      display: none;
    }
    /deep/ .temp-empty {
      display: none;
    }
    /deep/ .van-cell-group {
      background-color: transparent;
    }
    /deep/ .van-cell {
      background-color: transparent;
      padding-left: 0;
      padding-right: 0;
    }
  }
  .login-register-btns {
    text-align: center;
    padding-top: 60px;
    .login-btn {
      display: inline-block;
      width: 275px;
      height: 44px;
      line-height: 44px;
      color: white;
      font-size: 17px;
      border: 1px solid #ec3924;
      border-radius: 4px;
      background-color: #ec3924;
    }
  }
}
</style>
