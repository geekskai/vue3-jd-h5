<template>
  <div class="shop-cart">
    <header class="page-header">
      <div class="header-content">购物车</div>
      <router-link class="appeal-record" to="/order/appealRecord" tag="span">完成</router-link>
    </header>
    <section class="cart-empty">
      <img class="img-cart" src="../../assets/image/cart/cart-empty.png" alt />
    </section>
    <!-- <van-checkbox-group v-model="result">
            <van-checkbox v-for="(item, index) in list" :key="index" :name="item">{{ item }}</van-checkbox>
    </van-checkbox-group>-->
    <!-- <section class="order-card">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img src="../../assets/image/product/store-headerM.png" class="header-img" />
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
    </section>-->
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list: ["a", "b", "c"],
      result: ["a", "b"]
    };
  },
  created() {
    console.log("======cart=>");
  },
  mounted() {
    this.$eventBus.$emit("changeTag", 2);
  }
};
</script>

<style scoped lang="scss">
.shop-cart {
  height: 100%;
  padding: 0 16px;
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    .header-content {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: #3a3a3a;
    }
    .appeal-record {
      color: #fe4f70;
      font-size: 13px;
    }
  }
  .cart-empty {
    display: flex;
    justify-content: center;
    align-items: center;
    .img-cart {
      flex: 1;
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
          color: #fe4f70;
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
          background-color: #fe4f70;
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
          color: #fe4f70;
          padding-left: 5px;
          font-weight: 700;
        }
        span {
          color: #3a3a3a;
        }
      }
    }
  }
}
</style>
