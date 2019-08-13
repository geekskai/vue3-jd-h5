<template>
  <!-- 待支付 -->
  <div class="order-detail-page">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">确认订单</div>
    </header>
    <section class="order-info" @click="showPicker">
      <ul class="info-list">
        <li class="receiver-addres">
          <div class="address-content">
            <svg-icon icon-class="shipping-address"></svg-icon>
            <span class="address-fullAddress" v-if="orderForm.fullAddress">{{orderForm.fullAddress}}</span>
            <span class="address-fullAddress" v-else>请选择收货人地址</span>
          </div>
          <svg-icon class="arrow-icon-right" icon-class="arrow-icon-right"></svg-icon>
        </li>
      </ul>
    </section>

    <section
      class="order-card"
      v-for="(oderShopSkuInfo,index) in orderForm.oderShopSkuInfoVos"
      :key="index"
    >
      <ul class="order-list">
        <li class="list-item">
          <div class="store-info">
            <img v-lazy="oderShopSkuInfo.logoUrl" class="header-img" />
            <span>{{oderShopSkuInfo.shopName}}</span>
          </div>
          <span>待支付</span>
        </li>
        <li class="item-info" v-for="(orderSkuInfo,i) in oderShopSkuInfo.orderSkuInfoVos" :key="i">
          <img v-lazy="orderSkuInfo.productMainUrl" />
          <div class="order-detail">
            <p class="info-one">
              <span>{{orderSkuInfo.productName}}</span>
              <i>￥{{orderSkuInfo.productAmount}}</i>
            </p>
            <p class="info-two">
              <span>{{orderSkuInfo.fullName}}</span>
              <span>×{{orderSkuInfo.quantity }}</span>
            </p>
          </div>
        </li>
        <li class="order-count">
          <span>快递：</span>
          <i>￥{{oderShopSkuInfo.freightAmount}}</i>
        </li>
        <li class="real-pay">
          <span>实付款：</span>
          <i>￥{{oderShopSkuInfo.shopAllAmount}}</i>
        </li>
      </ul>
    </section>
    <div class="pay-btn">
      <div class="pay-count">
        <span>
          共{{orderForm.skuCount}}件商品，小计：
          <i>￥{{ orderForm.allAmount}}</i>
        </span>
      </div>
      <van-button type="danger" @click="handleSubmitOrder" size="large">提交订单</van-button>
    </div>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '40%' }"
      @click-overlay="show = false"
     >
      <div class="address">
        <div class="addressbox">
          <p class="text_btn">
            <span style="float:left;color:#3A3A3A" @click="cancel">取消</span>
            <span style="float:right;color:#D8182D;" @click="complete">完成</span>
          </p>
          <div class="addressSelect">
            <div class="selectbox"></div>
            <ul
              @touchstart="touchStart($event,'province')"
              @touchmove="touchMove($event,'province')"
              @touchend="touchEnd($event,'province')"
              :style="provinceStyle"
              :class="[{'selectAni':addSelect}]"
            >
              <li
                v-for="(item,index) in list"
                :class="[{'addSelectActive':index == provinceIndex}]"
                :key="index"
              >{{item.areaName}}</li>
            </ul>
            <ul
              @touchstart="touchStart($event,'city')"
              @touchmove="touchMove($event,'city')"
              @touchend="touchEnd($event,'city')"
              :style="cityStyle"
              :class="[{'selectAni':addSelect}]"
            >
              <li
                v-for="(item,index) in list2"
                :class="[{'addSelectActive':index == cityIndex}]"
                :key="index"
              >{{item.areaName}}</li>
            </ul>
            <ul
              @touchstart="touchStart($event,'district')"
              @touchmove="touchMove($event,'district')"
              @touchend="touchEnd($event,'district')"
              :style="districtStyle"
              :class="[{'selectAni':addSelect}]"
            >
              <li
                v-for="(item,index) in list3"
                :class="[{'addSelectActive':index == districtIndex}]"
                :key="index"
              >{{item.areaName}}</li>
            </ul>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "ConfirmOrder",
  data() {
    return {
      columns: 1,
      orderForm: {},
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
      parentAreaId: 0,
      list: [],
      list2: [],
      list3: [],
      provinceStyle: {
        WebkitTransform: "translate3d(0px,0px,0px)"
      },
      cityStyle: {
        WebkitTransform: "translate3d(0px,0px,0px)"
      },
      districtStyle: {
        WebkitTransform: "translate3d(0px,0px,0px)"
      },
      startTop: 0,
      provinceIndex: 0,
      cityIndex: 0,
      districtIndex: 0,
      translateY: 0,
      maxScroll: 0,
      addHeight: 0,
      addSelect: false,
      provinceVal: "",
      cityVal: "",
      areaVal: "",
      val: {
        provinceVal: "",
        cityVal: "",
        areaVal: ""
      },
      show: false,
      // showPickers: false
    };
  },
  created() {
    this.initData();
    this.getProvinces();
    this.getCitys();
    this.val.areaVal = {
      name: "",
      value: ""
    };
    // 第一条数据为直辖市 so '-' 符号表示为第三列
    this.list3 = [{ name: "-" }];
  },
  watch: {
    // 监听省滑动
    provinceVal(value) {
      console.log("=====监听省滑动==>", value);
      this.$http
        .get(`/api/address/getCnAreaList?parentAreaId=${value}`)
        .then(res => {
          if (res.data.code === 0) {
            this.list2 =
              res.data.content.length > 1
                ? res.data.content
                : [{ areaName: "-" }];
            if (res.data.content.length < 1) {
              this.list3 = [{ areaName: "-" }];
            }
            console.log("=====this.list2[0]==>", this.list2[0]);
            this.cityVal = this.list2[0].areaId;
          }
        });
    },
    // 监听市滑动
    cityVal(value) {
      if (value) {
        this.$http
          .get(`/api/address/getCnAreaList?parentAreaId=${value}`)
          .then(res => {
            if (res.data.code === 0) {
              this.list3 =
                res.data.content.length > 1
                  ? res.data.content
                  : [{ areaName: "-" }];
            }
          });
      }
    }
  },
  methods: {
    initData() {
      this.$http
        .post(`/api/order/checkout`, {
          skuInfoForm: {
            quantity: this.$route.query.quantity,
            skuId: this.$route.query.skuId
          }
        })
        .then(response => {
          this.orderForm = response.data.content;
          console.log("=====content==>", response.data.content);
        });
    },
 
    handleSubmitOrder() {
      this.$http.post(`/api/order/submit`,{
        oderShopSkuInfoVos:[],
        sourceType:1,
        userAddrId:'',
      })
      this.$router.push({
        path:'/order/orderDetail',
        query:{}
      })
    },

    showPicker() {
      this.show = true;
    },
    // 分层获取中国地址信息
    getProvinces() {
      this.$http
        .get(`/api/address/getCnAreaList?parentAreaId=${this.parentAreaId}`)
        .then(response => {
          console.log("=====getProvinces.data==>", response.data);
          this.list = response.data.content;
          this.val.provinceVal = this.list[0];
        });
    },
    getCitys() {
      this.$http
        .get(`/api/address/getCnAreaList?parentAreaId=84`)
        .then(response => {
          console.log("=====getCitys.data==>", response.data);
          this.list2 = response.data.content;
          this.val.cityVal = this.list2[0];
        });
    },

    complete() {
      if (!this.val.areaVal.areaId) {
        this.val.areaVal = {
          areaId: "",
          areaName: ""
        };
      }
      if (!this.val.cityVal.areaId) {
        this.val.cityVal = {
          areaName: "",
          areaId: ""
        };
      }
      this.show = false;
      this.orderForm.province = this.val.provinceVal.areaId;
      this.orderForm.city = this.val.cityVal.areaId;
      this.orderForm.district = this.val.areaVal.areaId;
      this.orderForm.fullAddress =
        this.val.provinceVal.areaName +
        this.val.cityVal.areaName +
        this.val.areaVal.areaName;
    
    },
    cancel() {
      this.show = false;
    },

    // 滑动开始
    touchStart(e, val) {
      console.log("=====滑动开始==>");
      e.preventDefault();
      this.addSelect = false;
      this.addHeight = e.currentTarget.children[0].offsetHeight;
      this.maxScroll = this.addHeight * e.currentTarget.children.length;
      this.startTop = e.targetTouches[0].pageY;
      switch (val) {
        case "province":
          this.translateY = parseInt(
            this.provinceStyle.WebkitTransform.slice(
              this.provinceStyle.WebkitTransform.indexOf(",") + 1,
              this.provinceStyle.WebkitTransform.lastIndexOf(",")
            )
          );
          break;
        case "city":
          this.translateY = parseInt(
            this.cityStyle.WebkitTransform.slice(
              this.cityStyle.WebkitTransform.indexOf(",") + 1,
              this.cityStyle.WebkitTransform.lastIndexOf(",")
            )
          );
          break;
        case "district":
          this.translateY = parseInt(
            this.districtStyle.WebkitTransform.slice(
              this.districtStyle.WebkitTransform.indexOf(",") + 1,
              this.districtStyle.WebkitTransform.lastIndexOf(",")
            )
          );
          break;
        default:
          break;
      }
    },
    // 滑动进行中
    touchMove(e, val) {
      console.log("=====滑动进行中==>");
      e.preventDefault();
      switch (val) {
        case "province":
          if (e.targetTouches[0].pageY - this.startTop + this.translateY > 0) {
            this.provinceStyle.WebkitTransform = "translate3d(0px,0px,0px)";
          } else if (
            e.targetTouches[0].pageY - this.startTop + this.translateY <
            -(this.maxScroll - this.addHeight)
          ) {
            this.provinceStyle.WebkitTransform =
              "translate3d(0px," +
              -(this.maxScroll - this.addHeight) +
              "px,0px)";
          } else {
            this.provinceStyle.WebkitTransform =
              "translate3d(0px," +
              (e.targetTouches[0].pageY - this.startTop + this.translateY) +
              "px,0px)";
          }
          break;
        case "city":
          if (e.targetTouches[0].pageY - this.startTop + this.translateY > 0) {
            this.cityStyle.WebkitTransform = "translate3d(0px,0px,0px)";
          } else if (
            e.targetTouches[0].pageY - this.startTop + this.translateY <
            -(this.maxScroll - this.addHeight)
          ) {
            this.cityStyle.WebkitTransform =
              "translate3d(0px," +
              -(this.maxScroll - this.addHeight) +
              "px,0px)";
          } else {
            this.cityStyle.WebkitTransform =
              "translate3d(0px," +
              (e.targetTouches[0].pageY - this.startTop + this.translateY) +
              "px,0px)";
          }
          break;
        case "district":
          if (e.targetTouches[0].pageY - this.startTop + this.translateY > 0) {
            this.districtStyle.WebkitTransform = "translate3d(0px,0px,0px)";
          } else if (
            e.targetTouches[0].pageY - this.startTop + this.translateY <
            -(this.maxScroll - this.addHeight)
          ) {
            this.districtStyle.WebkitTransform =
              "translate3d(0px," +
              -(this.maxScroll - this.addHeight) +
              "px,0px)";
          } else {
            this.districtStyle.WebkitTransform =
              "translate3d(0px," +
              (e.targetTouches[0].pageY - this.startTop + this.translateY) +
              "px,0px)";
          }
          break;
        default:
          break;
      }
    },
    // 滑动结束
    touchEnd(e, val) {
      e.preventDefault();
      this.addSelect = true;
      switch (val) {
        case "province":
          let provinceTranslateY = parseInt(
            this.provinceStyle.WebkitTransform.slice(
              this.provinceStyle.WebkitTransform.indexOf(",") + 1,
              this.provinceStyle.WebkitTransform.lastIndexOf(",")
            )
          );
          this.provinceIndex = -Math.round(provinceTranslateY / this.addHeight);
          this.provinceStyle.WebkitTransform =
            "translate3d(0px," +
            Math.round(provinceTranslateY / this.addHeight) * this.addHeight +
            "px,0px)";
          this.cityStyle.WebkitTransform = this.districtStyle.WebkitTransform =
            "translate3d(0px,0px,0px)";
          this.cityIndex = this.districtIndex = 0;
          break;
        case "city":
          let cityTranslateY = parseInt(
            this.cityStyle.WebkitTransform.slice(
              this.cityStyle.WebkitTransform.indexOf(",") + 1,
              this.cityStyle.WebkitTransform.lastIndexOf(",")
            )
          );
          this.cityIndex = -Math.round(cityTranslateY / this.addHeight);
          this.cityStyle.WebkitTransform =
            "translate3d(0px," +
            Math.round(cityTranslateY / this.addHeight) * this.addHeight +
            "px,0px)";
          this.districtStyle.WebkitTransform = "translate3d(0px,0px,0px)";
          this.districtIndex = 0;
          break;
        case "district":
          let districtTranslateY = parseInt(
            this.districtStyle.WebkitTransform.slice(
              this.districtStyle.WebkitTransform.indexOf(",") + 1,
              this.districtStyle.WebkitTransform.lastIndexOf(",")
            )
          );
          this.districtIndex = -Math.round(districtTranslateY / this.addHeight);
          this.districtStyle.WebkitTransform =
            "translate3d(0px," +
            Math.round(districtTranslateY / this.addHeight) * this.addHeight +
            "px,0px)";
          break;
        default:
          break;
      }
      console.log("=====滑动结束开始处理数据==>");
      // 滑动结束后 处理数据
      this.dataProcessing();
    },
    // 数据处理
    dataProcessing() {
      // 滑动数据传输 数据处理
      // debugger
      this.val.provinceVal = this.list[this.provinceIndex];
      this.provinceVal = this.list[this.provinceIndex].areaId;
      this.val.cityVal = this.list2[this.cityIndex];
      this.cityVal = this.list2[this.cityIndex].areaId;
      this.val.areaVal = this.list3[this.districtIndex];
      this.areaVal = this.list3[this.districtIndex].areaId;
      // this.val.cityVal = this.addressData[this.provinceIndex].city[this.cityIndex].name
      // this.val.areaVal = this.addressData[this.provinceIndex].city[this.cityIndex].area[this.districtIndex]
      // this.$emit('getAddress', this.val)
      // this.test([this.val.provinceVal, this.cityIndex, this.districtIndex])
      console.log("=====滑动数据传输=处理完毕·····=>");
    }
  }
};
</script>

<style scoped lang="scss">
.order-detail-page {
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
      .list-item {
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
            font-weight: 600;
            font-size: 13px;
          }
        }
      }
      .item-info {
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
            font-size: 13px;
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
        color: #949497;
      }
      .real-pay {
        display: flex;
        justify-content: flex-end;
        font-size: 13px;
        font-weight: 600;
        padding-top: 4px;
        i {
          color: #d8182d;
          padding-left: 5px;
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
        font-weight: 600;
        justify-content: flex-start;
        align-items: center;
        span {
          font-size: 13px;
          padding-left: 7px;
          font-weight: 700;
        }
      }
      .info-item {
        font-size: 11px;
        padding-left: 34px;
        padding-bottom: 6px;
      }
      .receiver-addres {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .address-content {
          color: #3a3a3a;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .address-fullAddress {
            font-size: 13px;
            font-weight: 700;
            padding-left: 10px;
          }
        }
        .arrow-icon-right {
          width: 20px;
          height: 20px;
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
    .pay-count {
      display: flex;
      justify-content: space-between;
      color: #949497;
      font-size: 11px;
      padding-bottom: 12px;
      i {
        color: #d8182d;
        font-weight: 700;
      }
    }
    /deep/ .van-button--danger {
      background-color: #d8182d;
      line-height: 44px;
      font-size: 18px;
    }
  }

  .address .addressbox {
    height: 100%;
    position: absolute;
    z-index: 101;
    width: 100%;
    max-height: 100%;
    overflow: hidden;
    background: #fff;
    bottom: 0px;
  }
  .address .addressbox .text_btn {
    height: 32px;
    font-size: 14px;
    line-height: 32px;
    padding: 0 8px;
    background: #fff;
  }
  .addressSelect .selectbox {
    width: 100%;
    height: 30px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-top: 58px;
    background: #fff;
  }
  .address .addressboxbg {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
  .addressSelect {
    width: 100%;
    position: relative;
    background: #fff;
    height: 190px;
    overflow: hidden;
    -webkit-mask-box-image: linear-gradient(
      0deg,
      transparent,
      transparent 5%,
      #fff 20%,
      #fff 80%,
      transparent 95%,
      transparent
    );
    font-size: 14px;
  }
  .addressSelect ul {
    width: 33.333333%;
    position: absolute;
    left: 0;
    top: 60px;
    -webkit-transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    text-align: center;
    padding-left: 0;
  }
  .addressSelect ul li {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(0, 0, 0, 0.54);
    padding: 3px 0;
  }
  .addressSelect ul:nth-of-type(2) {
    left: 33.333333%;
  }
  .addressSelect ul:nth-of-type(3) {
    left: 66.666666%;
  }
  .addressSelect ul li.addSelectActive {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 600;
    transform: scale(1.3);
    transition: 0.5s;
  }
  .selectAni {
    transition: 0.8s;
  }
}
</style>
