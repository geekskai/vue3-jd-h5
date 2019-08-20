<template>
  <div class="appeal-page">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">商品申诉</div>
    </header>
    <section class="order-card">
      <li class="radio-all">
        <div class="store-info">
          <img v-lazy="appealObject.logoUrl" class="header-img" />
          <span>{{appealObject.shopName}}</span>
        </div>
      </li>
      <van-radio-group class="order-list" v-model="radios">
        <ul v-for="(item, i) in appealObject.appOrderProductVos" :key="i">
          <div class="order-info">
            <li class="check-item">
              <van-radio :key="i" checked-color="#91C95B" :name="appealObject"></van-radio>
            </li>
            <img v-lazy="item.productMainUrl" />
            <div class="order-detail">
              <p class="info-one">
                <span>{{item.productName}}</span>
                <i>￥{{item.amounts}}</i>
              </p>
              <p class="info-two">
                <span>{{item.fullName}}</span>
                <span>×{{item.quantity}}</span>
              </p>
            </div>
          </div>
        </ul>
        <div class="order-total">
          <label>共{{appealObject.quantity}}件商品，小计：</label>
          <i>￥{{appealObject.amount}}</i>
          <!-- <span>{{item.productTotalPrice}}</span> -->
        </div>
      </van-radio-group>
    </section>
    <section class="info-form">
      <van-cell-group>
        <van-field v-model="appealForms.name" clearable label="用户名" placeholder="请输入姓名" />
        <van-field v-model="appealForms.phone" label="手机号" placeholder="请输入手机号" />
        <van-field
          v-model="appealForms.context"
          :autosize="{ minHeight: 150 }"
          type="textarea"
          label="申诉内容"
          placeholder="请输入申诉内容"
        />
        <van-field label-width="200px" disabled label="图片上传（最多可上传5张）" />
      </van-cell-group>
      <van-uploader multiple :after-read="afterRead" v-model="fileList" :max-count="5" />
    </section>
    <div class="pay-btn">
      <van-button type="danger" @click="handleSubmitAppeal" size="large">提交</van-button>
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
      radios: {},
      appealForms: {
        context: "",
        imagUrls: []
      },
      fileList: [],
      appealObject: {}
    };
  },
  created() {
    // this.appealObject = this.$route.query;
    this.appealObject = this.$route.params;
  },
  methods: {
    afterRead(res) {
      let formData = new FormData();
      formData.append("file", res.file);
      this.$http.post(`/api/order/upload/image`, formData).then(response => {
        if (response.data.code === 0) {
          this.appealForms.imagUrls.push(...response.data.content.imageUrls);
        }
      });
    },
    handleSubmitAppeal() {
      console.log("=====radios==>", this.radios.orderNo);
      this.appealForms.orderNo = this.radios.orderNo;
      if (!this.radios.orderNo) {
        this.$toast({
          mask: false,
          duration: 1000,
          message: "请选中你要申诉的商品！"
        });
        return;
      }
      this.appealForms.id = this.radios.appOrderProductVos[0].id;
      console.log("=====appealForms==>", this.appealForms);
      this.$http
        .post(`/api/order/complainOrder`, this.appealForms)
        .then(response => {
          this.$toast({
            mask: false,
            duration: 1000,
            message: "商品申诉成功！"
          });
          this.$router.go(-1)
          console.log("=====response.data==>", response.data);
        });
    }
  }
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
    // .appeal-record {
    //   color: #ec3924;
    //   font-size: 13px;
    // }
  }
  .order-card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-top: 20px;
    /deep/ .van-radio {
      padding-left: 0;
      .van-radio__label {
        font-size: 13px;
        color: #949497;
      }
    }
    .radio-all {
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
            color: #ec3924;
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
      background-color: #ec3924;
      line-height: 44px;
      font-size: 18px;
    }
  }
}
</style>
