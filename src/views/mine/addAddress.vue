<template>
  <div class="add-address">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">新增所在地区</div>
      <!-- <router-link class="appeal-record" to="/order/appealRecord" tag="span">删除</router-link> -->
    </header>
    <section class="address-content">
      <ul class="address-list">
        <li class="address-item">
          <van-cell title="联系人" />
          <div class="address-name">
            <van-field v-model="addressInfo.receiverName" placeholder="请输入姓名" />
            <div class="gender-tags">
              <van-tag
                color="#3A3A3A"
                :class="{'isActive':addressInfo.reveiverGender === 0}"
                @click="handleChooseGender(0)"
                plain
              >女士</van-tag>
              <van-tag
                color="#3A3A3A"
                :class="{'isActive':addressInfo.reveiverGender === 1}"
                @click="handleChooseGender(1)"
                plain
              >男士</van-tag>
            </div>
          </div>
        </li>
        <li class="address-item">
          <van-cell title="电话" />
          <div class="address-name">
            <van-field v-model="addressInfo.receiverPhone" placeholder="手机号码" />
          </div>
        </li>
        <li class="address-item">
          <van-cell title="所在地区" />
          <!-- <div class="address-name" @click="show = true"> -->
          <div class="address-name" @click="showPicker">
            <van-field v-model="addressInfo.area" disabled placeholder="请选择省市区" />
            <div>
              <svg-icon icon-class="arrow"></svg-icon>
            </div>
          </div>
        </li>
        <li class="address-item">
          <van-cell title="地址" />
          <div class="address-name">
            <van-field v-model="addressInfo.address" placeholder="如：道路、门牌号、小区、楼栋号、单元室等" />
          </div>
        </li>
        <li class="address-item">
          <van-cell title="标签" />
          <div class="address-tags">
            <van-tag
              color="#3A3A3A"
              :class="{'isActive':addressInfo.tag === '家'}"
              @click="handleChooseHome('家')"
              plain
            >家</van-tag>
            <van-tag
              color="#3A3A3A"
              :class="{'isActive':addressInfo.tag === '学校'}"
              @click="handleChooseHome('学校')"
              plain
            >学校</van-tag>
            <van-tag
              color="#3A3A3A"
              :class="{'isActive':addressInfo.tag === '公司'}"
              @click="handleChooseHome('公司')"
              plain
            >公司</van-tag>
          </div>
        </li>
        <li class="address-default">
          <span class="address-defaultAddrFlag">设为默认地址</span>
          <van-switch v-model="addressInfo.defaultAddrFlag" active-color="#D8182D" size="20px" />
        </li>
      </ul>
    </section>

    <div class="address-btn">
      <router-link to="/mine/addAddress">
        <van-button type="danger" size="large" @click="handleSeveAddresInfo">保存</van-button>
      </router-link>
    </div>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '40%' }"
      @click-overlay="show = false"
    >
      <!-- <van-area
        :area-list="areaList"
        @cancel="handleCancel"
        @confirm="handleConfirm"
        value="110101"
      />-->

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
// import areaList from "../../mock/area";
export default {
  name: "addAddress",
  data() {
    return {
      show: false,
      parentAreaId: 0,
      addressInfo: {
        tag: "家",
        reveiverGender: 0,
        defaultAddrFlag: 0
      },
      // areaList: areaList,
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
      }
    };
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

  created() {
    this.getProvinces();
    this.getCitys();
    this.val.areaVal = {
      name: "",
      value: ""
    };
    // 第一条数据为直辖市 so '-' 符号表示为第三列
    this.list3 = [{ name: "-" }];
    this.initEditAddrss();
  },
  methods: {
    initEditAddrss(){
      this.$http.get(`/api/address/getUserAddrDetail?addrId=${this.$route.query.userAddrId}`).then(response=>{
       this.addressInfo = response.data.content
      } )
    },
    handleChooseHome(tag) {
      this.addressInfo.tag = tag;
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
    handleChooseGender(gender) {
      this.addressInfo.reveiverGender = gender;
    },
    handleSeveAddresInfo() {
      // if (this.addressInfo.defaultAddrFlag) {
      //   this.addressInfo.defaultAddrFlag = '1'
      // }
      this.$http
        .post(`/api/address/updateUserAddr`, this.addressInfo)
        .then(response => {
          if (response.data.code === 0) {
            this.$router.push("/mine/shippingAddress");
          }
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
      // this.$emit("complete", this.val);
      this.show = false;
      this.addressInfo.province = this.val.provinceVal.areaId;
      this.addressInfo.city = this.val.cityVal.areaId;
      this.addressInfo.district = this.val.areaVal.areaId;

      this.addressInfo.area =
        this.val.provinceVal.areaName +
        this.val.cityVal.areaName +
        this.val.areaVal.areaName;
      this.addressInfo.fullAddress =
        this.addressInfo.area + this.addressInfo.address;
    },
    cancel() {
      this.show = false;
      // this.$emit("cancel", false);
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
    },
    handleCancel() {
      this.show = false;
    },
    handleConfirm() {
      this.show = false;
    }
  }
};
</script>

<style scoped lang="scss">
.add-address {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 45px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .btn-left {
      background-color: white;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
    }
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
  .address-content {
    margin-top: 20px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 8px;
    .address-list {
      .address-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        /deep/ .van-cell {
          padding-left: 0;
        }
        /deep/ .van-cell__title span {
          font-size: 14px;
          color: #3a3a3a;
        }
        /deep/ .van-cell:not(:last-child)::after {
          border: none;
        }
        .address-name {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .gender-tags {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            .isActive {
              color: #e96258 !important;
            }
            /deep/ .van-tag::after {
              border-radius: 8px;
            }
            /deep/ .van-tag {
              width: 40px;
              text-align: center;
              height: 22px;
              margin-right: 10px;
            }
          }
        }
        .address-tags {
          .isActive {
            color: #e96258 !important;
          }
          /deep/ .van-tag {
            margin-right: 20px;
            width: 40px;
            text-align: center;
          }
        }
      }
      .address-default {
        padding-top: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .address-defaultAddrFlag {
          padding-right: 10px;
          font-size: 13px;
          color: #3a3a3a;
        }
      }
    }
  }
  .address-btn {
    position: fixed;
    bottom: 10px;
    width: 92%;
    color: #fff;

    /deep/ .van-button--large {
      height: 44px;
      line-height: 44px;
    }
    /deep/ .van-button--danger {
      background-color: #d8182d;
    }
    /deep/ .van-button__text {
      color: #fff;
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
