<template>
  <div class="page-order">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">我的订单</div>
    </header>
    <list-scroll :scroll-data="tabData" :scrollX="true">
      <section class="order-tag" ref="searchWrap">
        <span :class="{'active' : type==0}" @click="selectTag(0)">全部</span>
        <span :class="{'active' : type==1}" @click="selectTag(1)">待付款</span>
        <span :class="{'active' : type==2}" @click="selectTag(2)">待发货</span>
        <span :class="{'active' : type==3}" @click="selectTag(3)">待收货</span>
        <span :class="{'active' : type==4}" @click="selectTag(4)">已完成</span>
        <span :class="{'active' : type==5}" @click="selectTag(5)">已取消</span>
      </section>
    </list-scroll>

    <div v-if="!orderLists.length" class="empty-box">
      <svg-icon icon-class="order-empty" class="order-empty"></svg-icon>
      <span class="empty-text">
        <i>您还没有相关的订单</i>
        <i>可以多去看看，或许能找到您想要的</i>
      </span>
    </div>
    <section v-else class="order-card" v-for="(orderList,index)  in orderLists" :key="index">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img :src="orderList.logoUrl" class="header-img" />
            <span>{{orderList.shopName}}</span>
          </div>
          <span>{{orderStatus[orderList.status]}}</span>
        </li>

        <li
          @click="handleGoToOrderDetail(orderList.status,orderList.orderNo)"
          class="order-info"
          v-for="(item,i) in orderList.appOrderProductVos"
          :key="i"
        >
          <img v-lazy="item.productMainUrl" />
          <div class="order-detail">
            <p class="info-one">
              <span>{{item.productName}}</span>
              <span>￥：{{item.productAmount}}</span>
            </p>
            <p class="info-two">
              <span>{{item.fullName}}</span>
              <span>×{{item.quantity}}</span>
            </p>
          </div>
        </li>

        <li class="order-count">
          <span>共{{orderList.quantity}}件商品,小计:</span>
          <i>￥{{orderList.amount}}</i>
        </li>
        <li class="order-btn">
          <!-- 待付款, -->
          <div v-if="orderList.status == 0">
            <router-link tag="span" :to="`/order/cancelOrder?orderNo=${orderList.orderNo}`">取消订单</router-link>
            <span @click="handleGoToPay(orderList)">去支付</span>
          </div>
          <!-- 待发货 -->
          <div v-if="orderList.status == 1">
            <router-link to="/order/viewLogistics" tag="span">查看物流</router-link>
          </div>
          <!-- 待收货 -->
          <div v-if="orderList.status == 2">
            <router-link to="/order/viewLogistics" tag="span">查看物流</router-link>
          </div>
          <!-- 3-已完成,4-已取消 -->
        </li>
      </ul>
    </section>

    <vue-pickers
      :show="show"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="close"
      @confirm="confirmFn"
    ></vue-pickers>
  </div>
</template>

<script>
import ListScroll from "../../components/scroll/ListScroll";
export default {
  name: "Order",
  components: {
    ListScroll
  },
  data() {
    return {
      type: this.$route.query.type || 0,
      tabData: [],
      orderStatus: ["待付款", "待发货", "待收货", "已完成", "已取消"],
      orderLists: [],
      orderNo: "",
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
      show: false
    };
  },
  created() {
    this.initData();
  },
  mounted() {
    this.setSearchWrapWidth();
    this.$eventBus.$emit("changeTag", 1);
  },
  methods: {
    initData() {
      this.$http
        .post(`/api/order/list`, {
          pageNum: 1,
          pageSize: 10,
          type: this.type
        })
        .then(response => {
          this.orderLists = response.data.content;
        });
    },
    handleGoToOrderDetail(status, orderNo) {
      switch (status) {
        case 0:
          this.$router.push(`/order/pendingPayment?orderNo=${orderNo}`);
          break;
        case 1:
          this.$router.push(`/order/toBeDelivered?orderNo=${orderNo}`);
          break;
        case 2:
          this.$router.push(`/order/pendingReceipt?orderNo=${orderNo}`);
          break;
        case 3:
          this.$router.push(`/order/completedOrder?orderNo=${orderNo}`);
          break;
        case 4:
          // this.$router.push(`/order/cancelOrder?orderNo=${orderNo}`);
          break;

        default:
          break;
      }
      console.log("=====status==>", status);
    },
    setSearchWrapWidth() {
      let $screenWidth = document.documentElement.clientWidth;
      this.$refs.searchWrap.style.width = $screenWidth + 100 + "px";
    },
    selectTag(type) {
      this.type = type;
      this.initData();
    },
    close() {
      this.show = false;
    },
    handleGoToPay(orderList) {
      // this.show = true;
      // this.orderNo = orderNo;
      this.$router.push({
        name:'orderDetail',
        params:orderList
      })
    },
    confirmFn() {
      this.show = false;
      this.$http
        .get(`/api/coinPay/testPay?orderNo=${this.orderNo}`)
        .then(response => {
          console.log("=====response.data==>", response.data.content);
        });
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
    }
  }
};
</script>

<style scoped lang="scss">
.page-order {
  padding: 0 16px;
  height: 100%;
  .scroll-wrapper {
    height: 40px;
  }
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
  }
  .order-tag {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: nowrap;
    overflow-y: scroll;
    span {
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      width: 100%;
      display: inline-block;
      color: #949497;
      text-align: center;
      &.active {
        color: red;
        border-bottom: 2px solid red;
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
        i {
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
    }
  }
  .may-like {
    padding-bottom: 20px;
    .like-list {
      .like-title {
        color: #ec3924;
        font-size: 18px;
      }
      .like-item {
        background-color: #fff;
        margin-top: 8px;
        border-radius: 4px;
        padding: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .item-picture {
          width: 80px;
          height: 80px;
          display: inline-block;
          background-color: #ec3924;
          border-radius: 4px;
        }
        .item-detail {
          padding-left: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          flex: 1px;
          .store-info {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img {
              width: 24px;
              height: 24px;
            }
            label {
              color: #3a3a3a;
              font-size: 11px;
              padding-left: 4px;
            }
          }
          .item-title {
            color: #3a3a3a;
            font-size: 14px;
            padding-top: 10px;
          }
          .item-count {
            padding-top: 4px;
            display: flex;
            justify-content: space-between;
            width: 100%;
            i {
              color: #ec3924;
              font-size: 14px;
            }
            span {
              font-size: 11px;
              color: #949497;
            }
          }
        }
      }
    }
  }
}
</style>
