<template>
  <div class="product-layout">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="lazy_img" v-lazy="image.imgUrl" />
      </van-swipe-item>
    </van-swipe>
    <span class="btn-left" @click="$router.go(-1)">
      <svg-icon icon-class="green-btn"></svg-icon>
    </span>
    <ul class="product-content">
      <li class="product-title">多功能料理机</li>
      <li class="product-info">
        <span class="product-price">$248</span>
        <div>
          <i>快递包邮</i>
          <i>月销:888</i>
        </div>
      </li>
      <li class="store-info">
        <div class="store-detail" @click="handleStoreName">
          <img src="../../assets/image/product/store-header.png" class="store-header" />
          <span class="store-name">店铺名称</span>
        </div>
        <div class="store-btn">
          <van-button plain size="small" @click="handleConnectStore" type="danger">联系店家</van-button>
          <van-button size="small" @click="handleConnectStore" type="danger">进店逛逛</van-button>
        </div>
      </li>
      <li class="item-info">
        <van-field label="发货地" disabled placeholder="福建泉州 " />
      </li>
      <li class="item-info">
        <van-field label="品牌" disabled placeholder="CHANEL" />
      </li>
      <li class="item-info" @click="show = true">
        <van-field label="选择" disabled placeholder="选择颜色分类，尺码 "></van-field>
        <van-icon name="arrow" />
      </li>
      <!-- <li class="product-detail">
        <span>商品详情</span>
      </li>-->
    </ul>
    <van-popup
      class="select-popup"
      v-model="show"
      round
      position="bottom"
      :style="{ height: '60%' }"
    >
      <section class="popup-content">
        <span class="close-icon" @click="show = false">
          <svg-icon icon-class="close-popup"></svg-icon>
        </span>
        <ul class="popup-top">
          <img :src="imgSrc" />
          <li class="item-specification">
            <span class="item-price">￥568</span>
            <span class="item-count">库存2279件</span>
            <span class="item-colors">选择颜色；尺码</span>
          </li>
        </ul>
         <ul class="popup-center">
          <li>
            <span>颜色</span>
            <div>
              <van-button plain hairline size="small" icon="https://img.yzcdn.cn/vant/logo.png" type="danger">褐色</van-button>
            </div>
          </li>
        </ul>
      </section>
      <div class="product-footer">
        <van-goods-action>
          <van-goods-action-button @click="handleAddToCart" type="warning" text="加入购物车" />
          <van-goods-action-button type="danger" @click="handleToBuy" text="立即购买" />
        </van-goods-action>
      </div>
    </van-popup>
    <div class="product-footer">
      <van-goods-action>
        <van-goods-action-button @click="handleAddToCart" type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" @click="handleToBuy" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      show: false,
      imgSrc: require("../../assets/image/home/test2.png"),
      images: [
        {
          imgUrl: require("../../assets/image/home/test1.png"),
          categoryId: 100008
        },
        {
          imgUrl: require("../../assets/image/home/test2.png"),
          categoryId: 100016
        },
        {
          imgUrl: require("../../assets/image/home/test3.png"),
          categoryId: 100035
        },
        {
          imgUrl: require("../../assets/image/home/test4.png"),
          categoryId: 100016
        }
      ]
    };
  },
  created() {},
  methods: {
    handleAddToCart() {
      this.$toast.success({
        message: "添加成功~",
        duration: 1500,
        icon: "like-o"
      });
    },
    handleToBuy() {
      this.$router.push("/order/orderDetail");
    },
    handleStoreName() {
      this.$router.push("/storeDetail");
    },
    handleConnectStore() {
      this.$router.push("/storeDetail");
    }
  }
};
</script>

<style scoped lang="scss">
.product-layout {
  background-color: white;
  min-height: 100vh;
  margin-bottom: 45px;
  padding-bottom: 45px;
  /deep/ .van-swipe-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lazy_img {
    height: 355px;
    width: 100%;
  }
  .btn-left {
    position: fixed;
    left: 16px;
    top: 14px;
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
        color: #D8182D;
        font-weight: 600;
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
      margin-top: 10px;
      margin-bottom: 10px;
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
        /deep/ .van-button {
          margin-left: 10px;
        }
      }
    }
    .item-info {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
    }
    .product-detail {
      padding-left: 16px;
      padding-top: 20px;
      color: #D8182D;
    }
  }
  .select-popup {
    padding: 20px;
    .popup-content {
      .close-icon {
        float: right;
      }
      .popup-top {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .item-specification {
          display: flex;
          padding-left: 10px;
          justify-content: flex-end;
          align-items: flex-start;
          flex-direction: column;
          font-size: 14px;
          height: 100px;
          color: #3a3a3a;
          .item-count {
            font-size: 14px;
            padding: 3px 0;
          }
          .item-colors {
            font-size: 11px;
            padding: 3px 0;
          }
          .item-price {
            padding: 3px 0;
            color: #D8182D;
            font-size: 17px;
            font-weight: 600;
          }
        }
        img {
          width: 100px;
          height: 100px;
        }
      }
      .popup-center{
        /deep/ .van-button__icon{
          vertical-align: middle;
        }
      }
    }
  }
  /deep/ .van-popup--bottom {
    border-radius: 16px 16px 0 0;
  }
  .product-footer {
    /deep/ .van-button--warning {
      background-color: #7cd1ff;
      border: 1px solid #7cd1ff;
      height: 44px;
      line-height: 44px;
    }
    /deep/ .van-button--danger {
      height: 44px;
      line-height: 44px;
      background-color: #D8182D;
      border: 1px solid #D8182D;
    }
  }
}
</style>
