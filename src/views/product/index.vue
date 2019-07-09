<template>
  <div class="product-layout">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="lazy_img" v-lazy="image.imgUrl" />
      </van-swipe-item>
    </van-swipe>
    <span class="btn-left" @click="$router.go(-1)">
      <svg-icon icon-class="white-btn"></svg-icon>
    </span>
    <ul class="product-content">
      <li class="product-title">娜扎新装LOOK</li>
      <li class="product-info">
        <span class="product-price">$248</span>
        <i>月销:888</i>
      </li>
      <li class="store-info">
        <div class="store-detail" @click="handleStoreName">
          <img src="../../assets/image/product/store-header.png" class="store-header" />
          <span class="store-name">店铺名称</span>
        </div>
        <div class="store-btn">
          <van-button plain size="small" @click="handleConnectStore" type="danger">联系店家</van-button>
        </div>
      </li>
      <li class="product-detail">
        <span>商品详情</span>
      </li>
    </ul>
    <div class="product-footer">
      <van-goods-action>
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      images: [
        {
          imgUrl: require("../../assets/image/product/product1.png"),
          categoryId: 100008
        },
        {
          imgUrl: require("../../assets/image/product/product1.png"),
          categoryId: 100016
        },
        {
          imgUrl: require("../../assets/image/product/product1.png"),
          categoryId: 100035
        }
      ]
    };
  },
  created() {},
  methods: {
      handleStoreName(){
        this.$router.push('/storeDetail')
      },
    handleConnectStore(){
      this.$router.push('/storeDetail')
    }
  }
};
</script>

<style scoped lang="scss">
.product-layout {
  background-color: white;
  min-height: 100vh;
  .lazy_img {
    height: 500px;
  }
  .btn-left{
      position: fixed;
      left: 16px;
      top: 54px;
  }
  .product-content {
    font-size: 14px;
    .product-title {
      color: #3a3a3a;
      padding-left: 16px;
      margin-top: 10px;
    }
    .product-info {
      display: flex;
      justify-content: space-between;
      padding-top: 4px;
      .product-price {
        color: #fe4f70;
        padding-left: 16px;
      }
      i {
        padding-right: 31px;
        color: #949497;
        font-size: 11px;
      }
    }
    .store-info {
      display: flex;
      justify-content: space-between;
      .store-detail {
        padding-left: 16px;
        padding-top: 16px;
        .store-header {
          display: inline-block;
          width: 24px;
          height: 24px;
          vertical-align: middle;
        }
        .store-name {
          vertical-align: middle;
          color: #3a3a3a;
          padding-left: 4px;
        }
      }
      .store-btn {
        padding-right: 16px;
        padding-top: 10px;
      }
    }
    .product-detail {
      padding-left: 16px;
      padding-top: 20px;
      color: #fe4f70;
    }
  }
  .product-footer {
    /deep/ .van-button--warning {
      background-color: #00b6d2;
      border: 1px solid #00b6d2;
    }
    /deep/ .van-button--danger {
      background-color: #fe4f70;
      border: 1px solid #fe4f70;
    }
  }
}
</style>
