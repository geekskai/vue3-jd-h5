<template>
  <div class="emailRegisterTwo">
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
      <span class="phone-number">设置密码</span>
      <p class="number-tips">6-8位数字和字母的组成的字符</p>
      <van-cell-group class="info-list">
        <ValidationObserver ref="observer" tag="form">
          <ValidationProvider
            v-if="pwdEyes1"
            v-slot="{ errors }"
            :rules="{regex:/^[a-zA-Z0-9]{6,8}$/,required:true}"
          >
            <van-field
              v-model="emailRegisterTwo.password"
              :error-message="errors[0]"
              right-icon="eye-o"
              clearable
              @click-right-icon="pwdEyes1=!pwdEyes1"
              placeholder="密码"
            />
          </ValidationProvider>
          <ValidationProvider
            v-else
            v-slot="{ errors }"
            :rules="{regex:/^[a-zA-Z0-9]{6,8}$/,required:true}"
          >
            <van-field
              type="password"
              v-model="emailRegisterTwo.password"
              :error-message="errors[0]"
              right-icon="closed-eye"
              clearable
              @click-right-icon="pwdEyes1=!pwdEyes1"
              placeholder="密码"
            />
          </ValidationProvider>
          <ValidationProvider
            v-if="pwdEyes2"
            v-slot="{ errors }"
            :rules="{regex:/^[a-zA-Z0-9]{6,8}$/,required:true}"
          >
            <van-field
              v-model="emailRegisterTwo.password1"
              :error-message="errors[0]"
              right-icon="eye-o"
              clearable
              @click-right-icon="pwdEyes2=!pwdEyes2"
              placeholder="再次确认密码"
            />
          </ValidationProvider>
          <ValidationProvider
            v-else
            v-slot="{ errors }"
            :rules="{regex:/^[a-zA-Z0-9]{6,8}$/,required:true}"
          >
            <van-field
              type="password"
              v-model="emailRegisterTwo.password1"
              :error-message="errors[0]"
              right-icon="closed-eye"
              clearable
              @click-right-icon="pwdEyes2=!pwdEyes2"
              placeholder="再次确认密码"
            />
          </ValidationProvider>
          <van-field v-model="emailRegisterTwo.recommendCode" clearable placeholder="请输入邀请码（必填）" />
          <van-field class="temp-empty" />
        </ValidationObserver>
      </van-cell-group>
    </section>
    <div class="login-register-btns">
      <span class="login-btn" @click="handleConfirmRegister">确定</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'emailRegisterTwo',
  data () {
    return {
      pwdEyes1: false,
      pwdEyes2: false,
      emailRegisterTwo: {
        password: ''
      }
    }
  },
  created () {},
  methods: {
    async handleConfirmRegister () {
      const isValid = await this.$refs.observer.validate()
      if (
        this.emailRegisterTwo.password === this.emailRegisterTwo.password1 &&
        isValid
      ) {
        this.$http
          .post(
            `/api/user/register`,
            Object.assign(this.emailRegisterTwo, this.$route.query)
          )
          .then(response => {
            if (response.data.code === 0) {
              localStorage.setItem('token', response.data.content.token)
              this.$toast({
                mask: false,
                message: '注册成功！'
              })
              this.$router.push('/index')
            } else {
              this.$toast({
                mask: false,
                message: response.data.msg
              })
            }
          })
      } else {
        this.$toast({
          mask: false,
          message: '两次密码不一致！'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.emailRegisterTwo {
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
