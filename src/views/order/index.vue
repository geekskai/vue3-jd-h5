<template>
  <div class="page-order">
    <header class="page-header">
      <van-icon name="arrow-left" />
      <div class="header-content">我的订单</div>
    </header>

    <list-scroll :scroll-data="categoryData" :scrollX="true">
      <section class="order-tag" ref="searchWrap">
        <span :class="{'active' : orderType===1}" data-type="1" @click="selectTag">全部(20)</span>
        <span :class="{'active' : orderType===2}" data-type="2" @click="selectTag">已取消(3)</span>
        <span :class="{'active' : orderType===3}" data-type="3" @click="selectTag">待支付(3)</span>
        <span :class="{'active' : orderType===4}" data-type="4" @click="selectTag">待发货(4)</span>
        <span :class="{'active' : orderType===5}" data-type="5" @click="selectTag">已支付(11)</span>
        <span :class="{'active' : orderType===6}" data-type="6" @click="selectTag">已完成(2)</span>
      </section>
    </list-scroll>
    <section class="order-card">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img src="../../assets/image/product/store-headerM.png" class="header-img" />
            <span>店铺名称</span>
          </div>
          <span>待支付</span>
        </li>
        <li class="order-info">
          <img src alt />
          <div class="order-detail">
            <p class="info-one">
              <span>娜扎新装LOOK</span>
              <span>$248</span>
            </p>
            <p class="info-two">
              <span>型号;规格;颜色;</span>
              <span>×2</span>
            </p>
          </div>
        </li>
        <li class="order-count">
          <span>共2件商品,小计:</span>
          <span>$496</span>
        </li>
        <li class="order-btn">
          <span>取消订单</span>
          <span>去支付</span>
        </li>
      </ul>
    </section>
    <section class="order-card">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img src="../../assets/image/product/store-headerM.png" class="header-img" />
            <span>店铺名称</span>
            <span>订单号:201905211540350025</span>
          </div>
          <span>待支付</span>
        </li>
        <li class="order-info">
          <img src alt />
          <div class="order-detail">
            <p class="info-one">
              <span>娜扎新装LOOK</span>
              <span>$248</span>
            </p>
            <p class="info-two">
              <span>型号;规格;颜色;</span>
              <span>×2</span>
            </p>
          </div>
        </li>
        <li class="order-count">
          <span>共2件商品,小计:</span>
          <span>$496</span>
        </li>
        <li class="order-btn">
          <span>取消订单</span>
          <span>去支付</span>
        </li>
      </ul>
    </section>
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
      orderType: 1,
      categoryData: []
    };
  },
  created() {},
  mounted() {
    this.setSearchWrapWidth();
    this.$eventBus.$emit("changeTag", 1);
  },
  methods: {
    setSearchWrapWidth() {
      let $screenWidth = document.documentElement.clientWidth;
      this.$refs.searchWrap.style.width = $screenWidth + 100 + "px";
      console.log("=====res==>", this.$refs.searchWrap.style.width);
    },
    selectTag(e) {
      let $type = parseInt(e.currentTarget.getAttribute("data-type"));
      this.orderType = $type;
      // this.$router.replace('./order-list?orderType='+$type)
      // this.orderList = []
      // this.emptyMsg = ''
      // this.getOrderList()
    }
  }
};
</script>

<style scoped lang="scss">
.page-order {
  padding: 0 16px;
  background-color: #EFEFF4;
  height: 100vh;
  .scroll-wrapper{
  
    height: 40px;
  }
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .header-content {
      text-align: center;
      font-size: 24px;
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
        border-bottom: 3px solid red;
      }
    }
  }
  .order-card {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 16px;
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
        }
        .order-detail{
          flex: 1;
          padding-left: 16px;
          padding-bottom: 4px;
          .info-one, .info-two{
            display: flex;
            justify-content: space-between;
            font-size: 11px;
          }
          .info-one{
            color: #3A3A3A;
          }
          .info-two{
            color: #949497;
          }
        }
      }
      .order-count {
        display: flex;
        justify-content: flex-end;
        span{
          color: #3A3A3A;
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
}
</style>
