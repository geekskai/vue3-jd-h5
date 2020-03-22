<template>
  <div class="refund-after-sale">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" />
      </span>
      <i>退款/售后</i>
    </cm-header>
    <div v-if="!orderLists.length&&!orderRecordLists.length" class="empty-box">
      <svg-icon icon-class="refund-after-sale" class="order-empty"></svg-icon>
      <span class="empty-text">
        <i>未发现退款/售后的订单</i>
      </span>
    </div>
    <van-tabs v-else v-model="active" swipeable background="#EFEFF4">
      <van-tab title="售后申请">
        <div v-if="!orderLists.length" class="empty-box">
          <svg-icon icon-class="refund-after-sale" class="order-empty"></svg-icon>
          <span class="empty-text">
            <i>未发现售后的订单</i>
          </span>
        </div>
        <section v-else class="order-card" v-for="(orderList,index)  in orderLists" :key="index">
          <ul class="order-list">
            <li class="order-item">
              <div class="store-info">
                <img :src="orderList.logoUrl" class="header-img" />
                <span class="store-shopName">{{orderList.shopName}}</span>
                <span class="store-orderNo">订单号：{{orderList.orderNo}}</span>
              </div>
              <span class="store-status">{{orderStatus[orderList.status]}}</span>
            </li>
            <li class="order-info" v-for="(item,i) in orderList.appOrderProductVos" :key="i">
              <img v-lazy="item.productMainUrl" />
              <div class="order-detail">
                <p class="info-one">
                  <span>{{item.productName}}</span>
                  <b>￥{{item.productAmount}}</b>
                </p>
                <p class="info-two">
                  <span>{{item.fullName}}</span>
                  <span>×{{item.quantity}}</span>
                </p>
              </div>
            </li>

            <li class="order-count">
              <span>共{{orderList.quantity}}件商品,小计:</span>
              <b>￥{{orderList.amount}}</b>
            </li>
            <li class="order-btn" @click="handleToAppeal(orderList)">
              <span>商品申诉</span>
            </li>
          </ul>
        </section>
      </van-tab>
      <van-tab title="申请记录">
        <section
          class="order-card-record"
          v-for="(orderList,index)  in orderRecordLists"
          :key="index"
        >
          <ul class="order-list">
            <li class="order-item">
              <div class="store-info">
                <img v-lazy="orderList.logoUrl" class="header-img" />
                <span>{{orderList.shopName}}</span>
              </div>
              <span>{{orderStatus[orderList.status]}}</span>
            </li>
            <li
              @click="handleGoToOrderDetail(orderList)"
              class="order-info"
              v-for="(item,i) in orderList.appealSkuInfoVos"
              :key="i"
            >
              <img v-lazy="item.productMainUrl" />
              <div class="order-detail">
                <p class="info-one">
                  <span>{{item.productName}}</span>
                  <b>￥{{item.productAmount}}</b>
                </p>
                <p class="info-two">
                  <span>{{item.fullName}}</span>
                  <span>×{{item.quantity}}</span>
                </p>
              </div>
            </li>

            <li class="order-count">
              <span>共{{orderRecordLists[index].appealSkuInfoVos[0].quantity}}件商品,小计:</span>
              <b>￥{{orderList.allAmount}}</b>
            </li>
            <li class="order-btn">
              <label class="appeal-time">申诉时间：{{orderList.createTime}}</label>
            </li>
          </ul>
        </section>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'refundAfterSale',
  data () {
    return {
      active: 2,
      orderStatus: ['待付款', '待发货', '待收货', '已完成', '已取消'],
      orderLists: [],
      orderRecordLists: [] // 申请记录
    }
  },
  created () {
    this.$http
      .post(`/api/order/canComplainList`, {
        pageNum: 1,
        pageSize: 10,
        type: 0
      })
      .then(response => {
        this.orderLists = response.data.content
      })
    // 申请记录
    this.$http
      .post(`/api/order/complainList`, {
        pageNum: 1,
        pageSize: 10
      })
      .then(response => {
        this.orderRecordLists = response.data.content
      })
  },
  methods: {
    handleGoToOrderDetail (orderList) {
      //  this.$router.push(`/order/appealDetail?appealNo=${appealNo}`);
      this.$router.push({
        name: `appealDetail`,
        params: orderList
      })
    },
    handleToAppeal (orderList) {
      this.$router.push({
        name: `appeal`,
        params: orderList
      })
    }
  }
}
</script>

<style scoped lang="scss">
.refund-after-sale {
  height: 100%;

  .order-card {
    background-color: #fff;
    border-radius: 5px;
    margin: 10px 16px;
    .order-list {
      padding: 10px 20px;
      .order-item {
        display: flex;
        justify-content: space-between;
        .store-status {
          color: #ec3924;
          font-size: 13px;
          font-weight: 600;
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
          .store-shopName {
            font-weight: 600;
            padding-right: 10px;
          }
          .store-orderNo,
          .store-shopName {
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
          background-color: #ec3924;
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
          }
          .info-two {
            color: #949497;
          }
        }
      }
      .order-count {
        display: flex;
        justify-content: flex-end;
        b {
          color: #ec3924;
          font-size: 14px;
          padding-left: 5px;
        }
        span {
          color: #3a3a3a;
          font-size: 11px;
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
  .order-card-record {
    background-color: #fff;
    border-radius: 5px;
    margin: 10px 16px;
    .order-list {
      padding: 10px 20px;
      .order-item {
        display: flex;
        justify-content: space-between;
        & > span {
          color: #ec3924;
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
      .order-info {
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        img {
          width: 80px;
          height: 80px;
          display: inline-block;
          background-color: #ec3924;
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
          }
          .info-two {
            color: #949497;
          }
        }
      }
      .order-count {
        display: flex;
        justify-content: flex-end;
        b {
          color: #ec3924;
          font-size: 14px;
          padding-left: 5px;
        }
        span {
          color: #3a3a3a;
          font-size: 11px;
        }
      }
      .order-btn {
        display: flex;
        justify-content: flex-end;
        padding-top: 14px;
        .appeal-time {
          font-size: 10px;
          color: #949497;
        }
        .appeal-text {
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
  .empty-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 90px;
    .order-empty {
      width: 155px;
      height: 155px;
    }
    .empty-text {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 17px;
      color: #949497;
      padding-top: 10px;
    }
  }
}
</style>
