<template>
  <div class="my-footprint">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" />
      </span>
      <div>我的足迹</div>
      <span slot="right" @click="showButton = !showButton">
        <i v-if="!showButton">删除</i>
        <i v-else>完成</i>
      </span>
    </cm-header>
    <van-checkbox-group v-model="shopCart.merchantCheckboxGroup">
      <section class="order-card" v-for="(item, i) in shopCartArray" :key="i">
        <ul class="order-list">
          <div class="order-info">
            <li class="check-item">
              <van-checkbox :key="i" checked-color="#91C95B" :name="item"></van-checkbox>
            </li>
            <img v-lazy="item.productImg" />
            <li class="order-detail">
              <b class="product-name">{{item.productName}}</b>
              <div class="info-count">
                <span>￥{{item.productPrice}}</span>
                <span class="slimiar-btn">
                  <van-tag color="#EC3924" size="large" plain>找相似</van-tag>
                </span>
              </div>
            </li>
          </div>
        </ul>
      </section>
    </van-checkbox-group>
    <div class="pay-btn" v-show="showButton">
      <van-button type="danger" size="large">删除</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "myFootprint",
  data() {
    return {
      shopCart: {},
      showButton: false,
      shopCartArray: [
        {
          fullName: "松下（Panasonic）",
          id: 555,
          productId: 271,
          productImg:
            "http://img13.360buyimg.com/n12/jfs/t15079/17/2197602489/215395/30dac426/5a796eb3N142b9d43.jpg",
          productName:
            "松下（Panasonic）LX10 1英寸大底数码相机/卡片机 F1.4-2.8大光圈 触摸屏 Vlog相机 WIFI 4K全家桶",
          productPrice: 4417.4,
          productTotalPrice: 4417.4,
          quantity: 1,
          skuId: 288,
          stock: 100
        },
        {
          fullName: "中号",
          id: 556,
          productId: 271,
          productImg:
            "https://chain-mall.oss-cn-shenzhen.aliyuncs.com/goods/1568079770402.jpg",
          productName: "龙猫玩偶",
          productPrice: 4417.4,
          productTotalPrice: 4417.4,
          quantity: 1,
          skuId: 288,
          stock: 100
        },
        {
          fullName: "中号",
          id: 556,
          productId: 271,
          productImg:
            "https://chain-mall.oss-cn-shenzhen.aliyuncs.com/goods/1568079770402.jpg",
          productName: "龙猫玩偶",
          productPrice: 4417.4,
          productTotalPrice: 4417.4,
          quantity: 1,
          skuId: 288,
          stock: 100
        },
        {
          fullName: "中号",
          id: 556,
          productId: 271,
          productImg:
            "https://chain-mall.oss-cn-shenzhen.aliyuncs.com/goods/1568079770402.jpg",
          productName: "龙猫玩偶",
          productPrice: 4417.4,
          productTotalPrice: 4417.4,
          quantity: 1,
          skuId: 288,
          stock: 100
        }
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.my-footprint {
  padding: 0 16px;
  .order-card {
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
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
        justify-content: center;
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
      padding: 0 16px;
      .order-info {
        width: 100%;
        padding: 16px 0;
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
          width: 62%;
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .product-name {
            font-size: 14px;
            color: #3a3a3a;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .info-count {
            color: #ec3924;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .slimiar-btn {
              font-size: 11px;
            }
          }
        }
      }
    }
  }
  .pay-btn {
    position: fixed;
    width: 100%;
    bottom: 10px;
    left: 0;
    right: 0;
    padding: 0 16px;
    /deep/ .van-button--danger {
      background-color: #ec3924;
      line-height: 44px;
      font-size: 18px;
      border-radius: 4px;
    }
  }
}
</style>
