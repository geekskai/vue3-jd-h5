<template>
  <div class="appeal-record">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">申诉记录</div>
    </header>
    <section class="order-card">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img
              src="../../assets/image/product/store-headerM.png"
              class="header-img"
            />
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
        <li class="order-btn">
          <i>申诉时间:2019-06-01 16:45:34</i>
          <router-link to="/order/appealDetail" tag="span"
            >查看详情</router-link
          >
        </li>
      </ul>
    </section>
    <section class="order-card">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img
              src="../../assets/image/product/store-headerM.png"
              class="header-img"
            />
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
        <li class="order-btn">
          <i>申诉时间:2019-06-01 16:45:34</i>
          <router-link to="/order/appealDetail" tag="span"
            >查看详情</router-link
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "AppealRecord",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.appeal-record {
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
    .appeal-record {
      color: #d8182d;
      font-size: 13px;
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
      .order-info {
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
        justify-content: space-between;
        padding-top: 14px;
        i {
          color: #949497;
          font-size: 10px;
          height: 26px;
          line-height: 26px;
        }
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
