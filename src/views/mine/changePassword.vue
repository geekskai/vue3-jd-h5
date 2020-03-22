<template>
  <div class="change-password">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <i>修改密码</i>
    </cm-header>
    <section class="address-content">
      <ul class="address-list">
        <li class="address-item">
          <van-field v-model="userInfo.mobile" placeholder="135227899006" />
        </li>
        <li class="address-item">
          <div class="address-name">
            <van-field
              type="password"
              clearable
              v-model="userInfo.oldPassword"
              placeholder="输入当前登录密码"
            />
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
      <van-button type="danger" @click="handleSaveChangePassword" size="large">保存</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'changePassword',
  data () {
    return {
      userInfo: this.$route.query
    }
  },
  created () {},
  methods: {
    handleSaveChangePassword () {
      if (this.userInfo.password === this.userInfo.password1) {
        this.$http
          .post(`/api/user/updatePassword`, this.userInfo)
          .then(response => {
            this.$toast({
              mask: false,
              duration: 1000,
              message: response.data.msg || '修改密码成功！'
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
.change-password {
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
