<template>
  <div class="phone-number-setting">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">邮箱设置</div>
    </header>
    <section class="address-content">
      <ul class="address-list">
        <li class="address-item">
          <div class="address-name">
            <van-field v-model="value" placeholder="国家/地区" />
            <div>
              <svg-icon icon-class="arrow"></svg-icon>
            </div>
          </div>
        </li>
        <li class="address-item">
          <div class="address-name">
            <van-field v-model="value" placeholder="邮箱验证码" />
            <div class="verification-code">
              <van-tag color="#3C96FF" plain>获取验证码</van-tag>
            </div>
          </div>
        </li>
        <li class="address-item">
          <van-field v-model="value" placeholder="验证码" />
        </li>
        <li class="address-item">
          <van-field v-model="value" placeholder="密码" />
        </li>
        <li class="address-item">
          <van-field v-model="value" placeholder="再次确认" />
        </li>
      </ul>
    </section>

    <div class="address-btn">
      <router-link to="/mine/addAddress">
        <van-button type="danger" size="large">设置</van-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "phoneNumberSetting",
  setup() {
    const value = ref("");
    return {
      value
    };
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
        ::v-deep .van-cell {
          padding-left: 0;
        }
        ::v-deep .van-cell__title span {
          font-size: 14px;
          color: #3a3a3a;
        }
        ::v-deep .van-cell:not(:last-child)::after {
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
            ::v-deep .van-tag::after {
              border-radius: 8px;
            }
            ::v-deep .van-tag {
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

    ::v-deep .van-button--large {
      height: 44px;
      line-height: 44px;
    }
    ::v-deep .van-button--danger {
      background-color: #d8182d;
    }
    ::v-deep .van-button__text {
      color: #fff;
    }
  }
}
</style>
