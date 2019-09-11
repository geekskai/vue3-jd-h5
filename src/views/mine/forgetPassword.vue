<template>
  <div class="forget-password">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <i>忘记密码</i>
    </cm-header>
    <section class="address-content">
      <ul class="address-list">
        <li class="address-item">
          <van-field v-model="userInfo.mobile" clearable placeholder="手机/邮箱" />
        </li>
        <li class="address-item">
          <div class="address-name">
            <van-field v-model="userInfo.verifyCode" clearable placeholder="验证码" />
            <div class="verification-code" @click="handleGetVerifyCode">
              <van-tag color="#3C96FF" plain>获取验证码</van-tag>
            </div>
          </div>
        </li>
        <li class="address-item">
          <van-field type="password" clearable v-model="userInfo.password" placeholder="设置登录密码" />
        </li>
        <li class="address-item">
          <van-field type="password" clearable v-model="userInfo.password1" placeholder="重复登录密码" />
        </li>
      </ul>
    </section>

    <div class="address-btn">
      <van-button type="danger" @click="handleSaveForgetPwd" size="large">保存</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "forgetPassword",
  data() {
    return {
      userInfo: {}
    };
  },
  created() {},
  methods: {
    handleGetVerifyCode() {
      let paramsObj = {};
      if (~this.userInfo.mobile.indexOf("@")) {
        paramsObj = { email: this.userInfo.mobile, type: 2 };
      } else {
        paramsObj = { mobile: this.userInfo.mobile, type: 2 };
      }
      if (this.userInfo.mobile) {
        this.$http.post(`/api/user/getVerifyCode`, paramsObj).then(response => {
          this.$toast({
            mask: false,
            duration: 1000,
            message: "验证码获取成功！"
          });
        });
      } else {
        this.$toast({
          mask: false,
          duration: 1000,
          message: "请输入手机/邮箱号"
        });
      }
    },
    handleSaveForgetPwd() {
      if (this.userInfo.password === this.userInfo.password1) {
        this.$http
          .post(`/api/user/findPassword`, this.userInfo)
          .then(response => {
            this.$toast({
              mask: false,
              duration: 1000,
              message: response.data.msg
            });
            this.$router.go(-1);
          });
      } else {
        this.$toast({
          mask: false,
          duration: 1000,
          message: "两次输入的密码不一致！"
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.forget-password {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 45px;

  .address-content {
    margin-top: 20px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 8px;
    .address-list {
      .address-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        padding: 10px 0;
        /deep/ .van-cell {
          padding-left: 0;
        }
        /deep/ .van-cell__title span {
          font-size: 14px;
          color: #3a3a3a;
        }
        /deep/ .van-cell:not(:last-child)::after {
          border: none;
        }
        .address-name {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .verification-code {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            /deep/ .van-tag::after {
              border-radius: 8px;
            }
            /deep/ .van-tag {
              width: 78px;
              text-align: center;
              height: 22px;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
  .address-btn {
    position: fixed;
    bottom: 10px;
    width: 92%;
    color: #fff;

    /deep/ .van-button--large {
      height: 44px;
      line-height: 44px;
    }
    /deep/ .van-button--danger {
      background-color: #ec3924;
    }
    /deep/ .van-button__text {
      color: #fff;
    }
  }
}
</style>
