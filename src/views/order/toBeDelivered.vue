<template>
  <!--  待发货 -->
  <div class="to-be-delivered">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">订单详情</div>
    </header>

    <section class="order-address">
      <ul class="info-list">
        <li class="receiver-addres">
          <svg-icon icon-class="shipping-address"></svg-icon>
          <div class="address-content">
            <!-- <label>收货人：张三</label>
            <span>江西省</span>-->
            <label>收货人：{{orderForm.toName}} {{orderForm.toPhone}}</label>
            <span>{{orderForm.fullAddress}}</span>
          </div>
        </li>
      </ul>
    </section>

    <section class="order-card">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <!-- <img src="assets/image/product/store-headerM.png" class="header-img" />
            <span>店铺名称</span>-->
            <img v-lazy="orderForm.logoUrl" class="header-img" />
            <span>{{orderForm.shopName }}</span>
          </div>
          <span>待发货</span>
        </li>
        <li
          class="order-desc"
          v-for="(appOrderProduct,index) in orderForm.appOrderProductVos"
          :key="index"
        >
          <img v-lazy="appOrderProduct.productMainUrl" />
          <div class="order-detail">
            <p class="info-one">
              <span class="product-name">{{appOrderProduct.productName}}</span>
              <b>￥{{appOrderProduct.productAmount}}</b>
            </p>
            <p class="info-two">
              <span>{{appOrderProduct.fullName}}</span>
              <span>×{{appOrderProduct.quantity}}</span>
            </p>
          </div>
        </li>
        <li class="order-total">
          <span>订单总价：</span>
          <i>￥{{orderForm.amount}}</i>
        </li>
        <li class="order-count">
          <span>实付款：</span>
          <i>￥{{orderForm.amount}}</i>
        </li>
      </ul>
    </section>
    <section class="order-info">
      <ul class="info-list">
        <li class="info-title">
          <svg-icon icon-class="order-info"></svg-icon>
          <span>订单信息</span>
        </li>
        <li class="info-item">
          <label>订单编号：</label>
          <span>{{orderForm.orderNo}}</span>
        </li>
        <li class="info-item">
          <label>支付单号：</label>
          <span>{{orderForm.outerOrderNo}}</span>
        </li>
        <li class="info-item">
          <label>创建时间：</label>
          <span>{{orderForm.createDate}}</span>
        </li>
        <li class="info-item">
          <label>付款时间：</label>
          <span>{{orderForm.payDate}}</span>
        </li>
        <li class="info-title">
          <svg-icon icon-class="message-round"></svg-icon>
          <span>联系卖家</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "toBeDelivered",
  data() {
    return {
      orderForm:{}
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$http
        .post(`/api/order/detail`, {
          pageNum: 1,
          pageSize: 10,
          orderNo: this.$route.query.orderNo
        })
        .then(response => {
          this.orderForm = response.data.content;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.to-be-delivered {
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
      font-weight: 600;
      color: #3a3a3a;
      flex: 1;
    }
  }
  .order-address {
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    padding: 20px;
    .receiver-addres {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .address-content {
        padding-left: 7px;
        color: #3a3a3a;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        label {
          font-size: 13px;
          font-weight: 600;
        }
        span {
          padding-top: 4px;
          font-size: 11px;
        }
      }
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
          color: #EC3924;
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
            border-radius: 50%;
          }
          span {
            color: #3a3a3a;
            padding-left: 3px;
            font-size: 11px;
          }
        }
      }
      .order-desc {
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        img {
          width: 80px;
          height: 80px;
          display: inline-block;
          background-color: #EC3924;
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
            .product-name {
              width: 150px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .info-two {
            color: #949497;
          }
        }
      }
      .order-total {
        color: #949497;
        font-size: 11px;
        padding-bottom: 5px;
        display: flex;
        justify-content: flex-end;
      }
      .order-count {
        display: flex;
        justify-content: flex-end;
        font-size: 13px;
        i {
          color: #EC3924;
          padding-left: 5px;
          font-weight: 700;
        }
        span {
          color: #3a3a3a;
        }
      }
    }
  }
  .order-info {
    background-color: #fff;
    border-radius: 5px;
    margin-top: 20px;
    padding: 20px;
    .info-list {
      color: #3a3a3a;
      .info-title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
          padding-left: 7px;
          font-weight: 700;
          font-size: 13px;
        }
      }
      .info-item {
        font-size: 11px;
        padding-left: 34px;
        padding-bottom: 6px;
      }
      .info-title:last-child {
        padding-top: 14px;
      }
    }
  }
}
</style>
