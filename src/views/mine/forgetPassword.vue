<template>
  <div class="forget-password">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">忘记密码</div>
    </header>
    <section class="address-content">
      <ul class="address-list">
        <li class="address-item">
          <van-field v-model="value" placeholder="手机/邮箱" />
        </li>
        <li class="address-item">
          <div class="address-name">
            <van-field v-model="value" placeholder="验证码" />
            <div class="verification-code">
              <van-tag color="#3C96FF" plain>获取验证码</van-tag>
            </div>
          </div>
        </li>
        <li class="address-item">
          <van-field v-model="value" placeholder="设置登录密码" />
        </li>
        <li class="address-item">
          <van-field v-model="value" placeholder="重复登录密码" />
        </li>
      </ul>
    </section>

    <div class="address-btn">
      <router-link to="/mine/addAddress">
        <van-button type="danger" size="large">保存</van-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "forgetPassword",
  setup() {
    const value = ref();
    return {
      value
    };
  }
};
</script>

<style scoped lang="scss">
.forget-password {
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
      color: #d8182d;
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
      background-color: #d8182d;
    }
    /deep/ .van-button__text {
      color: #fff;
    }
  }
}
</style>
