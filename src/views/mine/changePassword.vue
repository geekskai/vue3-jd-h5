<template>
  <div class="change-password">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">修改密码</div>
    </header>
    <section class="address-content">
      <ul class="address-list">
        <li class="address-item">
          <van-field v-model="value" placeholder="135227899006" />
        </li>
        <li class="address-item">
          <div class="address-name">
            <van-field v-model="value" placeholder="输入当前登录密码" />
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
  name: "changePassword",
  setup() {
    const value = ref("");
    return {
      value
    };
  }
};
</script>

<style scoped lang="scss">
.change-password {
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
