<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2019-09-20 14:07:34
 * @LastEditors: gankai
 * @LastEditTime: 2020-03-22 20:00:57
 * @FilePath: /vue-jd-h5/src/views/mine/settingMail.vue
 -->
<template>
  <div class="phone-number-setting">
     <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <i>邮箱设置</i>
    </cm-header>
    <section class="address-content">
      <ul class="address-list">
        <li class="address-item">
          <van-field v-model="userInfo.email" clearable placeholder="请输入邮箱" />
        </li>
        <li class="address-item">
          <div class="address-name">
            <van-field v-model="userInfo.verifyCode" placeholder="请输入验证码" />
            <div class="verification-code">
              <van-tag @click="handleGetVerifyCode" color="#3C96FF" plain>获取验证码</van-tag>
            </div>
          </div>
        </li>
        <li class="address-item">
          <van-field type="password" clearable v-model="userInfo.password" placeholder="密码" />
        </li>
        <li class="address-item">
          <van-field type="password" clearable v-model="userInfo.password1" placeholder="再次确认" />
        </li>
      </ul>
    </section>

    <div class="address-btn">
      <van-button type="danger" @click="handleSetEmail" size="large">设置</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'phoneNumberSetting',
  data () {
    return {
      userInfo: this.$route.query
    }
  },
  created () {},
  methods: {
    handleGetVerifyCode () {
      if (this.userInfo.email) {
        this.$http
          .post(`/api/user/getVerifyCode`, { email: this.userInfo.email, type: 3 })
          .then(response => {
            this.$toast({
              mask: false,
              duration: 1000,
              message: '验证码获取成功！'
            })
          })
      } else {
        this.$toast({
          mask: false,
          duration: 1000,
          message: '请输入邮箱号'
        })
      }
    },
    handleSetEmail () {
      if (this.userInfo.password === this.userInfo.password1) {
        this.userInfo.mobile = null
        this.$http
          .post(`/api/user/updateUserInfo`, this.userInfo)
          .then(response => {
            this.$toast({
              mask: false,
              duration: 1000,
              message: response.data.msg
            })
            this.$router.go(-1)
          })
      } else {
        this.$toast({
          mask: false,
          duration: 1000,
          message: '两次输入的密码不一致！'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.phone-number-setting {
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
      background-color: #EC3924;
    }
    /deep/ .van-button__text {
      color: #fff;
    }
  }
}
</style>
