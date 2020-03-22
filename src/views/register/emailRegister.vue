<template>
  <div class="emailRegister">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="gray-btn"></svg-icon>
      </span>
      <span slot="right" @click="$router.push('/register/phoneRegister')">手机注册</span>
    </cm-header>

    <div class="mall-logo">
      <img src="../../assets/image/setting/logo.png" />
    </div>
    <section class="register-info">
      <span class="phone-number">请输入邮箱号</span>
      <p class="number-tips">请输入4位数验证码</p>
      <van-cell-group class="info-list">
        <ValidationObserver ref="observer" tag="form">
          <ValidationProvider name="email" v-slot="{ errors }" rules="required|email">
            <van-field
              v-model="emailRegister.email"
              :error-message="errors[0]"
              type="text"
              clearable
              placeholder="请输入邮箱"
            />
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" :rules="{regex:/^\d{4}$/,required:true}">
            <van-field
              v-model="emailRegister.verifyCode"
              :error-message="errors[0]"
              label-width="150"
              clearable
              placeholder="邮箱验证码"
            >
              <van-button
                slot="button"
                size="small"
                type="default"
                @click="handleGetVerifyCode"
              >获取验证码</van-button>
            </van-field>
          </ValidationProvider>
          <van-field class="temp-empty" />
        </ValidationObserver>
      </van-cell-group>
    </section>
    <div class="login-register-btns">
      <!-- <button :disabled="!invalid"> -->
      <button>
        <span class="login-btn" @click="goToNextStep">下一步</span>
      </button>
      <!-- <router-link class="login-btn" to="/register/emailRegisterTwo" tag="span">下一步</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'emailRegister',
  data () {
    return {
      emailRegister: {}
    }
  },
  created () {},
  methods: {
    async goToNextStep () {
      const isValid = await this.$refs.observer.validate()
      if (isValid) {
        this.$router.push({
          path: '/register/emailRegisterTwo',
          query: this.emailRegister
        })
      }
      // if (!this.emailRegister.email || !this.emailRegister.verifyCode) {
      // if (!isValid) {
      //   this.$toast({
      //     mask: false,
      //     message: "请输入手机号或者验证码！"
      //   });
      // } else {
      //   this.$router.push({
      //     path: "/register/emailRegisterTwo",
      //     query: this.emailRegister
      //   });
      // }
    },
    handleGetVerifyCode () {
      if (!this.emailRegister.email) {
        this.$toast({
          mask: false,
          message: '邮箱不能为空！'
        })
        return
      }
      this.emailRegister.type = 1
      this.$http
        .post(`/api/user/getVerifyCode`, this.emailRegister)
        .then(response => {
          if (response.data.code === 0) {
            this.$toast({
              mask: false,
              message: '发送成功！'
            })
          } else {
            this.$toast({
              mask: false,
              message: response.data.msg
            })
          }
        })
    }
  }
}
</script>

<style scoped lang="scss">
.emailRegister {
  height: 100%;
  padding: 0 16px;
  min-height: 667px;
  max-height: 812px;
  background: linear-gradient(#fdfdfd, #ffecf0);
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
