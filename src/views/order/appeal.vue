<template>
  <div class="appeal-page">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">商品申诉</div>
      <router-link class="appeal-record" to="/order/appealRecord" tag="span">申诉记录</router-link>
    </header>
    <section class="order-card" v-for="(shopCart,index) in shopCartArray" :key="index">
      <!-- <van-checkbox
        v-model="shopCart.merchantChecked"
        @click="handleSelectAllGoods(shopCart,true)"
        checked-color="#91C95B"
      >-->
      <li class="checkbox-all">
        <div class="store-info">
          <img v-lazy="shopCart.merchantLogo" class="header-img" />
          <span>{{shopCart.merchantName}}</span>
        </div>
      </li>
      <!-- </van-checkbox> -->
      <van-checkbox-group class="order-list" v-model="shopCart.merchantCheckboxGroup">
        <ul v-for="(item, i) in shopCart.merchantItemList" :key="i">
          <div class="order-info">
            <li class="check-item">
              <van-checkbox :key="i" checked-color="#91C95B" :name="item"></van-checkbox>
            </li>
            <img v-lazy="item.productImg" />
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
          </div>
        </ul>
        <div class="order-total">
          <label>共2件商品，小计：</label>
          <span>￥444</span>
          <!-- <span>{{item.productTotalPrice}}</span> -->
        </div>
      </van-checkbox-group>
    </section>
    <section class="info-form">
      <van-cell-group>
        <van-field v-model="username" clearable label="用户名" placeholder="请输入姓名" />
        <van-field v-model="phone" label="手机号" placeholder="请输入手机号" />
        <van-field
          v-model="content"
          :autosize="{ minHeight: 150 }"
          type="textarea"
          label="申诉内容"
          placeholder="请输入申诉内容"
        />
        <van-field label-width="200px" disabled label="图片上传（最多可上传5张）" />
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
      fileList: [],
      shopCartArray: []
    };
  },
  created() {
    this.$http.get(`/api/cart/list`).then(response => {
      this.shopCartArray = response.data.content;
      if (this.shopCartArray.length === 0) {
        this.clearCart = true;
      }
      this.shopCartArray.forEach(element => {
        this.$set(element, "merchantChecked", false);
        this.$set(element, "merchantCheckboxGroup", []);
      });
    });
  },
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
      color: #EC3924;
      font-size: 13px;
    }
  }
  .order-card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-top: 20px;
    /deep/ .van-checkbox {
      padding-left: 0;
      .van-checkbox__label {
        font-size: 13px;
        color: #949497;
      }
    }
    .checkbox-all {
      .store-info {
        display: flex;
        // justify-content: center;
        padding-left: 30px;
        justify-content: flex-start;
        align-items: center;
        .header-img {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }
        span {
          color: #3a3a3a;
          font-size: 11px;
          padding-left: 4px;
        }
      }
    }
    .order-list {
      .order-info {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 16px;
        display: flex;
        justify-content: flex-start;
        .check-item {
          display: flex;
          align-items: center;
        }
        img {
          margin-left: 5px;
          width: 100px;
          height: 100px;
          display: inline-block;
          border-radius: 4px;
        }
        .order-detail {
          width: 55%;
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          .info-one,
          .info-two {
            display: flex;
            padding-top: 4px;
            justify-content: space-between;
            font-size: 13px;
          }
          .info-one {
            color: #3a3a3a;
            padding-bottom: 5px;
            span {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
          .info-two {
            color: #949497;
          }
          .info-count {
            color: #EC3924;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
            /deep/ .van-stepper__input {
              width: 31px;
              height: 22px;
              padding: 0;
              color: #949497;
              font-weight: normal;
              background-color: transparent;
              border: 1px solid #dbdbdb;
            }
            /deep/ .van-stepper__plus {
              border: 1px solid #dbdbdb;
              background-color: transparent;
              width: 16px;
              height: 22px;
              border-radius: 0;
            }
            /deep/ .van-stepper__minus {
              border-radius: 0;
              border: 1px solid #dbdbdb;
              background-color: transparent;
              width: 16px;
              height: 22px;
            }
          }
        }
      }
      .order-total {
        color: #949497;
        font-size: 14px;
        text-align: right;
        span {
          font-weight: 600;
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
      background-color: #EC3924;
      line-height: 44px;
      font-size: 18px;
    }
  }
}
</style>
