<template>
  <!--  待收货 -->
  <div class="pending-receipt">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">订单详情</div>
    </header>

    <section class="order-card">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img v-lazy="orderForm.logoUrl" class="header-img" />
            <span>{{orderForm.shopName }}</span>
          </div>
          <span>待收货</span>
        </li>
        <li
          class="order-desc"
          v-for="(appOrderProduct,index) in orderForm.appOrderProductVos"
          :key="index"
        >
          <img v-lazy="appOrderProduct.productMainUrl" />
          <div class="order-detail">
            <p class="info-one">
              <span>{{appOrderProduct.productName}}</span>
              <i>￥：{{appOrderProduct.productAmount}}</i>
            </p>
            <p class="info-two">
              <span>{{appOrderProduct.fullName}}</span>
              <span>×{{appOrderProduct.quantity}}</span>
            </p>
          </div>
        </li>
        <li class="order-total">
          <span>订单总价：</span>
          <i>￥：{{orderForm.amount}}</i>
        </li>
        <li class="order-count">
          <span>实付款：</span>
          <i>￥：{{orderForm.amount}}</i>
        </li>
        <li class="order-btn">
          <router-link to="/order/viewLogistics" tag="span">查看物流</router-link>
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
          <span>{{orderForm.finishDate}}</span>
        </li>
        <li class="info-item">
          <label>发货时间：</label>
          <span>{{orderForm.deliveryDate}}</span>
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
  name: "pendingReceipt",
  data() {
    return {
      orderForm: {}
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
.pending-receipt {
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
      .order-desc {
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
          color: #d8182d;
          padding-left: 5px;
          font-weight: 700;
        }
        span {
          color: #3a3a3a;
        }
      }
      .order-btn {
        display: flex;
        justify-content: flex-end;
        padding-top: 14px;
        span {
          height: 26px;
          line-height: 20px;
          border: 1px solid #949497;
          color: #949497;
          font-size: 11px;
          padding: 2px 15px;
          border-radius: 2px;
          margin-left: 10px;
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
