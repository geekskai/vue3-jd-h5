<template>
  <div class="login">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="close-popup"></svg-icon>
      </span>
    </header>
    <div class="mall-logo">
      <img src="../../assets/image/setting/logo.png" />
    </div>
    <section class="login-info">
      <van-cell-group class="info-list">
        <van-field
          v-model="loginForm.emailPhone"
          clearable
          placeholder="手机/邮箱"
          @click-right-icon="$toast('question')"
        />
        <van-field v-model="loginForm.password" type="password" clearable placeholder="请输入密码" />
        <van-field class="temp-empty" />
        <span class="forget-pwd">
          <svg-icon icon-class="question-mark"></svg-icon>
          <i>忘记密码？</i>
        </span>
      </van-cell-group>
    </section>
    <ul class="other-login">
      <li class="top-login">
        <span>或使用TOP金服登录</span>
      </li>
      <img src="../../assets/image/top-logo.png" alt />
    </ul>
    <div class="login-register-btns">
      <span class="login-btn" @click="handleUserLogin">登录</span>
      <span class="register-btn" @click="handleUserRegister">注册</span>
    </div>
  </div>
</template>

<script>
import { reactive, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "login",

  setup() {
    const $router = useRouter();
    const { ctx } = getCurrentInstance();
    const loginForm = reactive({
      emailPhone: "",
      password: ""
    });
    const handleUserLogin = () => {};
    const handleUserRegister = () => {};

    return {
      $router,
      loginForm,
      handleUserRegister,
      $toast: ctx.$toast,
      handleUserLogin
    };
  }
};
</script>

<style scoped lang="scss">
.login {
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
  }
  .mall-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 32px;
  }
  .login-info {
    padding: 0 34px;
    .info-list {
      position: relative;
      .forget-pwd {
        position: absolute;
        bottom: -30px;
        left: 15px;
        color: #d8182d;
        font-size: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
        .svg-icon {
          padding-right: 4px;
          width: 12px;
          height: 12px;
        }
      }
    }
    ::v-deep .temp-empty {
      display: none;
    }
    ::v-deep .van-cell-group {
      background-color: transparent;
    }
    ::v-deep .van-cell {
      background-color: transparent;
      font-size: 17px;
      padding-top: 60px;
    }
    ::v-deep .van-hairline--top-bottom::after {
      font-size: 17px;
      border-width: 0;
    }
  }
  .other-login {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    .top-login {
      font-size: 13px;
      color: #3a3a3a;
      padding-bottom: 10px;
    }
  }
  .login-register-btns {
    text-align: center;
    position: fixed;
    bottom: 10px;
    left: 0;
    right: 0;
    .login-btn {
      display: inline-block;
      width: 150px;
      height: 44px;
      line-height: 44px;
      color: white;
      font-size: 17px;
      border: 1px solid #d8182d;
      border-radius: 4px;
      background-color: #d8182d;
    }
    .register-btn {
      line-height: 44px;
      display: inline-block;
      color: #949497;
      font-size: 17px;
      border: 1px solid #949497;
      background-color: transparent;
      border-radius: 4px;
      width: 150px;
      height: 44px;
      margin-left: 15px;
    }
  }
}
</style>
