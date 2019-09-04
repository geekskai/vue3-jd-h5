<template>
  <div class="shop-cart">
    <header class="page-header">
      <div class="header-content">购物车</div>
      <div v-if="!clearCart">
        <span v-if="cartMode ===false" class="appeal-record" @click="cartMode = true">完成</span>
        <span v-if="cartMode ===true" class="appeal-record" @click="cartMode = false">编辑</span>
      </div>
    </header>
    <section class="cart-empty" v-if="clearCart">
      <ul class="empty-content">
        <li class="img-cart">
          <svg-icon icon-class="shopping-cart"></svg-icon>
        </li>
        <li class="item-text">
          <p>您的购物车空空的哦~</p>
          <p>去看看心仪的商品吧~</p>
        </li>
        <li class="item-btn">
          <router-link to="/classify" class="hairline-btn" tag="span">立即去购物</router-link>
        </li>
      </ul>
    </section>
    <div v-else>
      <section class="order-card" v-for="(shopCart,index) in shopCartArray" :key="index">
        <van-checkbox
          v-model="shopCart.merchantChecked"
          @click="handleSelectAllGoods(shopCart,true)"
          checked-color="#91C95B"
        >
          <li class="checkbox-all">
            <div class="store-info">
              <img v-lazy="shopCart.merchantLogo" class="header-img" />
              <span>{{shopCart.merchantName}}</span>
            </div>
          </li>
        </van-checkbox>

        <van-checkbox-group
          class="order-list"
          @change="handleMerchantCheckboxGroup(shopCart)"
          v-model="shopCart.merchantCheckboxGroup"
        >
          <ul v-for="(item, i) in shopCart.merchantItemList" :key="i">
            <div class="order-info">
              <li class="check-item">
                <van-checkbox :key="i" checked-color="#91C95B" :name="item"></van-checkbox>
              </li>
              <img v-lazy="item.productImg" />
              <li class="order-detail">
                <ul>
                  <li class="info-one">
                    <span>{{item.productName}}</span>
                  </li>
                  <li class="info-two">
                    <span>{{item.fullName}}</span>
                  </li>
                </ul>
                <div class="info-count">
                  <span>￥{{item.productPrice}}</span>
                  <van-stepper
                    v-model="item.quantity"
                    integer
                    :max="item.stock"
                    @change="handleGoodsCountChange(item)"
                  />
                </div>
              </li>
            </div>
            <div class="order-total">
              <label>合计：</label>
              <span>{{item.productTotalPrice}}</span>
            </div>
          </ul>
        </van-checkbox-group>
      </section>
    </div>
    <div v-if="clearCart === false">
      <section v-if="cartMode" class="options-edit">
        <van-submit-bar :price="productTotalPrice" button-text="结算" @submit="submitSettlement">
          <van-checkbox v-model="allChecked" @change="handleSelectedAll" checked-color="#91C95B">全选</van-checkbox>
        </van-submit-bar>
      </section>
      <section v-else class="options-delete">
        <van-submit-bar button-text="删除" @submit="submitDeleteCartGoods">
          <van-checkbox v-model="allChecked" @change="handleSelectedAll" checked-color="#91C95B">全选</van-checkbox>
        </van-submit-bar>
      </section>
    </div>

    <!-- <vue-pickers
      :show="show"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="close"
      @confirm="confirmFn"
    ></vue-pickers> -->
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "shopCart",
  data() {
    return {
      merchantChecked: false,
      allChecked: false,
      idList: [],
      selectedGoodsId: [],
      clearCart: false,
      productTotalPrice: 0,
      shopCartArray: [],
      columns: 1,
      cartMode: true, // 购物车的模式，true 是显示出编辑按钮 false 是显示完成按钮,默认是false;
      defaultData: [
        {
          text: "Top-Pay",
          value: "Top-Pay"
        }
      ],
      pickData: {
        data1: [
          {
            text: "Top-Pay",
            value: "Top-Pay"
          },
          {
            text: "支付宝",
            value: "支付宝"
          },
          {
            text: "微信",
            value: "微信"
          },
          {
            text: "银行卡",
            value: "银行卡"
          }
        ]
      },
      show: false,
      list: ["a"],
      stepperValue: "",
      result: ["a", "b"]
    };
  },
  created() {
    this.initData();
  },
  watch: {},
  mounted() {
    this.$eventBus.$emit("changeTag", 2);
  },
  methods: {
    submitDeleteCartGoods() {
      // type: 1 全部清空，可以不传idList ， 默认type 0
      this.shopCartArray.forEach(it => {
        console.log("=====it==>", it);
        it.merchantCheckboxGroup.forEach(item => {
          this.idList.push(item.id);
        });
      });
      console.log("=====idList==>", this.idList);
      if (this.idList.length == 0) {
        this.$toast({
          mask: false,
          message: "请选择你要删除的商品！"
        });
        return;
      }
      this.$http
        .post(`/api/cart/remove`, { idList: this.idList, type: 0 })
        .then(response => {
          if (response.data.code === 0) {
            this.initData();
          }
        });
    },
    handleSelectedAll(allChecked) {
      if (allChecked) {
        let tempTotalPrice = 0;
        this.shopCartArray.forEach(item => {
          item.merchantItemList.forEach(it => {
            tempTotalPrice += it.productTotalPrice;
          });
        });
        this.productTotalPrice = tempTotalPrice * 100;

        this.shopCartArray.forEach(it => {
          this.$set(it, "merchantChecked", true);
          this.$set(it, "merchantCheckboxGroup", it.merchantItemList);
        });
      } else {
        this.shopCartArray.forEach(it => {
          this.$set(it, "merchantChecked", false);
          this.$set(it, "merchantCheckboxGroup", []);
        });
        this.productTotalPrice = 0;
      }
    },
    handleSelectAllGoods(shopCart, flag) {
      if (!shopCart.merchantChecked && flag) {
        this.$set(shopCart, "merchantCheckboxGroup", shopCart.merchantItemList);
      } else if (shopCart.merchantChecked && flag) {
        this.$set(shopCart, "merchantCheckboxGroup", []);
      }
      if (!flag) {
        this.$set(shopCart, "merchantChecked", false);
      }
    },
    handleMerchantCheckboxGroup(shopCart) {
      if (shopCart.merchantCheckboxGroup.length === 1) {
        this.productTotalPrice =
          shopCart.merchantCheckboxGroup[0].productTotalPrice * 100;
      } else {
        let tempProductTotalPrice = 0;
        shopCart.merchantCheckboxGroup.forEach(it => {
          tempProductTotalPrice += it.productTotalPrice;
        });
        this.productTotalPrice = tempProductTotalPrice * 100;
      }
      if (
        shopCart.merchantCheckboxGroup.length ===
        shopCart.merchantItemList.length
      ) {
        this.$set(shopCart, "merchantChecked", true);
      } else {
        this.handleSelectAllGoods(shopCart, false);
      }
    },
    handleGoodsCountChange(item) {
      this.$http
        .post(`/api/cart/update`, {
          quantity: item.quantity,
          skuId: item.skuId
        })
        .then(response => {
          if (response.data.code === 0) {
            this.initData();
          }
        });
    },

    initData() {
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
    close() {
      this.show = false;
    },
    confirmFn() {
      this.show = false;
      this.$toast.loading({
        mask: true,
        duration: 1000, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        loadingType: "spinner",
        message: "支付中..."
      });

      setTimeout(() => {
        // this.$toast({
        //   mask: false,
        //   message: "支付成功~"
        // });
        this.$router.push("/order/transactionDetails");
      }, 1300);
    },
    submitDelete() {
      this.$dialog
        .confirm({
          message: "确认删除这些商品？",
          confirmButtonColor: "#EC3924",
          cancelButtonColor: "#EC3924"
        })
        .then(() => {
          this.clearCart = true;
        });
    },
    submitSettlement() {
      if (this.productTotalPrice) {
        // this.show = true;
        this.shopCartArray.forEach(it => {
          it.merchantCheckboxGroup.forEach(item => {
            this.selectedGoodsId.push(item.id);
          });
        });
        this.$router.push({
          path: "/order/confirmOrder",
          query: {
            selectedGoodsId: this.selectedGoodsId
          }
        });
      } else {
        this.$toast({
          mask: false,
          message: "请选择你要结算的商品！"
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.shop-cart {
  padding: 0 16px;
  margin-bottom: 100px;
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
      color: #ec3924;
      font-size: 13px;
    }
  }
  .cart-empty {
    .empty-content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 40px;
      padding-bottom: 50px;
      .img-cart {
        margin-bottom: 50px;
        .svg-icon {
          width: 156px;
          height: 161px;
        }
      }
      .item-text {
        color: #3a3a3a;
        font-size: 17px;
      }
      .item-btn {
        margin-top: 18px;
        .hairline-btn {
          width: 150px;
          height: 44px;
          font-size: 17px;
          color: #ec3924;
          border: 1px solid #ec3924;
          padding: 10px 32px;
          border-radius: 4px;
        }
      }
    }
  }
  .options-edit {
    /deep/ .van-checkbox {
      padding-left: 24px;
      .van-checkbox__label {
        font-size: 13px;
        color: #949497;
      }
    }
    /deep/ .van-submit-bar {
      .van-submit-bar__bar {
        height: 44px;
        line-height: 44px;
      }
      bottom: 50px;
      .van-submit-bar__text {
        font-size: 17px;
        color: #333333;
      }
    }
    /deep/ .van-submit-bar__price {
      color: #ec3924;
      font-size: 17px;
      font-weight: 600;
      padding-left: 5px;
    }
  }
  .options-delete {
    /deep/ .van-checkbox {
      padding-left: 24px;
      float: left;
      .van-checkbox__label {
        font-size: 13px;
        color: #949497;
      }
    }
    /deep/ .van-submit-bar {
      .van-submit-bar__bar {
        display: flex;
        justify-content: space-between;
        height: 44px;
        line-height: 44px;
      }
      bottom: 50px;
      .van-submit-bar__text {
        font-size: 17px;
        color: #333333;
      }
    }
  }
  /deep/ .van-button--danger {
    background-color: #ec3924;
    height: 44px;
    line-height: 44px;
    .van-button__text {
      font-size: 18px;
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
          justify-content: space-between;
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
}
</style>
