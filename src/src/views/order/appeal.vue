<template>
  <div class="appeal-page">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">商品申诉</div>
      <router-link class="appeal-record" to="/order/appealRecord" tag="span"
        >申诉记录</router-link
      >
    </header>
    <section class="order-card">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img
              src="../../assets/image/product/store-headerM.png"
              class="header-img"
            />
            <span>店铺名称</span>
          </div>
        </li>
        <li class="order-info">
          <img src alt />
          <div class="order-detail">
            <p class="info-one">
              <span>娜扎新装LOOK</span>
              <i>￥222</i>
            </p>
            <p class="info-two">
              <span>型号;规格;颜色;</span>
              <span>×2</span>
            </p>
          </div>
        </li>
        <li class="order-count">
          <span>共2件商品,小计:</span>
          <i>￥444</i>
        </li>
      </ul>
    </section>
    <section class="info-form">
      <van-cell-group>
        <van-field
          v-model="username"
          clearable
          label="用户名"
          placeholder="请输入姓名"
        />
        <van-field v-model="phone" label="手机号" placeholder="请输入手机号" />
        <van-field
          v-model="content"
          :autosize="{ minHeight: 150 }"
          type="textarea"
          label="申诉内容"
          placeholder="请输入申诉内容"
        />
        <van-field
          label-width="200px"
          disabled
          label="图片上传（最多可上传5张）"
        />
      </van-cell-group>
      <van-uploader v-model="fileList" multiple :max-count="5" />
    </section>
    <div class="pay-btn">
      <van-button type="danger" size="large">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Appeal",
  data() {
    return {
      username: "",
      phone: "",
      content: "",
      fileList: []
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.appeal-page {
  height: 100%;
  padding: 0 16px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .header-content {
      text-align: center;
      font-size: 18px;
      color: #3a3a3a;
      font-weight: 600;
      flex: 1;
    }
    .appeal-record {
      color: #d8182d;
      font-size: 13px;
    }
  }
  .order-card {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 20px;
    .order-list {
      .order-item {
        display: flex;
        justify-content: space-between;
        & > span {
          color: #d8182d;
          font-size: 11px;
        }
        .store-info {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 10px;
          .header-img {
            width: 24px;
            height: 24px;
          }
          span {
            color: #3a3a3a;
            padding-left: 3px;
            font-size: 11px;
          }
        }
      }
      .order-info {
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        img {
          width: 80px;
          height: 80px;
          display: inline-block;
          background-color: #d8182d;
          border-radius: 4px;
        }
        .order-detail {
          flex: 1;
          padding-left: 16px;
          padding-bottom: 4px;
          .info-one,
          .info-two {
            display: flex;
            justify-content: space-between;
            font-size: 11px;
          }
          .info-one {
            color: #3a3a3a;
            padding-bottom: 5px;
            i {
              font-weight: 700;
            }
          }
          .info-two {
            color: #949497;
          }
        }
      }
      .order-count {
        display: flex;
        justify-content: flex-end;
        font-size: 13px;
        i {
          color: #d8182d;
          padding-left: 5px;
          font-weight: 700;
        }
        span {
          color: #3a3a3a;
        }
      }
    }
  }
  .info-form {
    padding: 20px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #fff;
    /deep/ .van-cell {
      padding-left: 0;
      padding-right: 0;
    }
    /deep/ .van-image img {
      border-radius: 8px;
    }
  }
  .pay-btn {
    width: 100%;
    padding: 0 16px;
    padding-top: 50px;
    padding-bottom: 10px;
    /deep/ .van-button--danger {
      background-color: #d8182d;
      line-height: 44px;
      font-size: 18px;
    }
  }
}
</style>
