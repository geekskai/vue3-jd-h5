<template>
  <div class="emailRegister">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="gray-btn"></svg-icon>
      </span>
      <router-link class="appeal-record" to="/register/phoneRegister" tag="span"
        >手机注册</router-link
      >
    </header>
    <div class="mall-logo">
      <img src="../../assets/image/setting/logo.png" />
    </div>
    <section class="register-info">
      <span class="phone-number">请输入邮箱号</span>
      <p class="number-tips">请输入6位数验证码</p>
      <van-cell-group class="info-list">
        <van-field
          v-model="password"
          type="textarea"
          clearable
          placeholder="请输入邮箱"
        />
        <van-field
          v-model="sms"
          label-width="150"
          clearable
          placeholder="邮箱验证码"
        >
          <van-button slot="button" size="small" type="default"
            >获取验证码</van-button
          >
        </van-field>
        <van-field class="temp-empty" />
      </van-cell-group>
    </section>
    <div class="login-register-btns">
      <router-link class="login-btn" to="/register/emailRegisterTwo" tag="span"
        >下一步</router-link
      >
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "emailRegister",
  data() {
    return {
      sms: "",
      value: "",
      showPicker: false,
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"]
    };
  },
  created() {},
  methods: {
    // /api/user/getVerifyCode
    getVerifyCode() {},
    onConfirm() {}
  }
};
</script>

<style scoped lang="scss">
.emailRegister {
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
      color: #d8182d;
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
      border: 1px solid #d8182d;
      border-radius: 4px;
      background-color: #d8182d;
    }
  }
}
</style>
