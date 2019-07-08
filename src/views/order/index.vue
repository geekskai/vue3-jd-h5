<template>
  <div class="page-order">
    <header class="page-header">
      <van-icon name="arrow-left" />
      <div class="header-content">我的订单</div>
    </header>

    <list-scroll :scroll-data="categoryData" class="nav-side-wrapper" :scrollX="true">
      <section class="order-tag" ref="searchWrap">
        <!-- <span
          :class="{'active' : orderType===1}"
          v-for="(item,index) in categoryData"
          :key="index"
          data-type="1"
          @click="selectTag"
        >{{item}}</span>-->
        <span :class="{'active' : orderType===1}" data-type="1" @click="selectTag">全部(20)</span>
        <span :class="{'active' : orderType===2}" data-type="2" @click="selectTag">已取消(3)</span>
        <span :class="{'active' : orderType===3}" data-type="3" @click="selectTag">待支付(3)</span>
        <span :class="{'active' : orderType===4}" data-type="4" @click="selectTag">待发货(4)</span>
        <span :class="{'active' : orderType===5}" data-type="5" @click="selectTag">已支付(11)</span>
        <span :class="{'active' : orderType===6}" data-type="6" @click="selectTag">已完成(2)</span>
      </section>
    </list-scroll>
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
      categoryData: ["全部", "已取消", "待支付", "待发货", "已支付", "已完成"]
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
    background: #fff;
    overflow-y: scroll;
    span {
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      width: 100%;
      display: inline-block;
      color: #949497;
      text-align: center;
      // margin-right: 30px;
      &.active {
        color: red;
        border-bottom: 3px solid red;
      }
    }
  }
}
</style>
