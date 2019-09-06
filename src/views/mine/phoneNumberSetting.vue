<template>
  <div class="phone-number-setting">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">手机号设置</div>
    </header>
    <section class="address-content">
      <ul class="address-list">
        <li class="address-item">
          <router-link tag="div" class="address-name" to="/mine/countryRegion">
            <van-field v-model="userInfo.areaCode" disabled placeholder="国家/地区" />
            <div>
              <svg-icon icon-class="arrow"></svg-icon>
            </div>
          </router-link>
        </li>
        <li class="address-item">
          <div class="address-name">
            <van-field v-model="userInfo.mobile" placeholder="请输入手机号" />
            <div class="verification-code">
              <van-tag color="#3C96FF" @click="handleGetVerifyCode" plain>获取验证码</van-tag>
            </div>
          </div>
        </li>
        <li class="address-item">
          <van-field clearable v-model="userInfo.verifyCode" placeholder="验证码" />
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
      <!-- <router-link to="/mine/addAddress"> -->
      <van-button type="danger" @click="handleSavePhoneNumber" size="large">保存</van-button>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "phoneNumberSetting",
  data() {
    return {
      userInfo: this.$route.query
    };
  },
  created() {},
  methods: {
    handleSavePhoneNumber() {
      if (this.userInfo.password === this.userInfo.password1) {
        this.$http
          .post(`/api/user/updateUserInfo`, this.userInfo)
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
    },
    handleGetVerifyCode() {
      if (this.userInfo.mobile) {
        this.$http
          .post(`/api/user/getVerifyCode`, { mobile: this.userInfo.mobile })
          .then(response => {
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
          message: "请输入手机号"
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.phone-number-setting {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 45px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .btn-left {
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
      color: #EC3924;
      font-size: 13px;
    }
  }
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
