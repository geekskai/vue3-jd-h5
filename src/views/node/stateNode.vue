<template>
  <div class="state-node">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" alt />
      </span>
      <i>州级节点申请</i>
    </cm-header>
    <section class="area-content">
      <ul class="options-list">
        <li class="option-item">
          <div class="item-info">
            <van-field
              v-model="areaNode.country"
              @click="handleShowCountry"
              disabled
              label="国家"
              placeholder="请选择"
            />
          </div>
          <van-icon name="arrow" color="#DBDBDB" />
        </li>
        <li class="option-item">
          <div class="item-info">
            <van-field
              v-model="areaNode.province"
              @click="handleShowProvince"
              disabled
              label="州/省"
              placeholder="请选择"
            />
          </div>
          <van-icon name="arrow" color="#DBDBDB" />
        </li>
        <li class="option-item">
          <div class="item-info">
            <van-field
              v-model="applyNum"
              :disabled="!areaNode.province"
              @click="handleCountsClick"
              label="份数"
              placeholder="请输入"
            />
          </div>
          <span style="color:#3A3A3A">份</span>
        </li>
      </ul>
      <ul class="area-info">
        <li class="info-item">
          <b class="text-weight">{{applyNum*areaNode.price}}</b>
          <small class="text-small">USDT</small>
        </li>
        <li class="total-text">共{{applyNum}}份</li>
        <li class="area-count">
          <small>*该节点共{{areaNode.totalNum}}份，现剩余节点还有{{areaNode.totalNum-applyNum}}份</small>
        </li>
      </ul>
    </section>
    <div class="application-btn">
      <van-button type="danger" @click="handleApplication" size="large">申请</van-button>
    </div>
    <vue-pickers
      :show="show"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="show = false"
      @confirm="confirmFn"
    ></vue-pickers>
    <van-dialog
      class="node-dialog"
      v-model="showDialog"
      title="确认支付"
      close-on-click-overlay
      confirmButtonColor="#3A3A3A"
      confirm-button-color="#FCE14B"
      :show-cancel-button="false"
      :show-confirm-button="false"
    >
      <ul class="dialog-content">
        <li class="content-tips">
          <span>确认支付{{applyNum*areaNode.price}} USDT成为州级节点？</span>
        </li>
        <li class="content-count">
          <span>USDT</span>
          <b class="text-weight">{{applyNum*areaNode.price}}</b>
        </li>
        <li class="coin-pay">
          <div>
            <label>支付</label>
          </div>
          <!-- <div class="icons-box" @click="handleShow" v-click-outside="hidden"> -->
          <div class="icons-box">
            <svg-icon icon-class="arrow-down"></svg-icon>
            <!-- <svg-icon icon-class="arrow-down" :class="{'active-arrow-down':isActive}"></svg-icon> -->
            <div class="select-absolte">
              <!-- <svg-icon v-if="item.icon" :icon-class="item.icon"></svg-icon> -->
              <!-- <span>{{item.text}}</span> -->
              <svg-icon icon-class="coin-pay"></svg-icon>
              <span>CoinPay</span>
            </div>
          </div>
        </li>
        <!-- <drop-list class="drop-list-play" :config="configData" ref="droplist"></drop-list> -->
        <li class="content-btn">
          <span class="know-btn" @click="handleClose">确认</span>
        </li>
      </ul>
    </van-dialog>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  name: "stateNode",
  directives: {
    ClickOutside
  },
  data() {
    return {
      show: false,
      item: {},
      areaData: {},
      pickersType: "country",
      showDialog: false,
      isActive: false,
      columns: 1,
      configData: {
        position: {
          top: "135px",
          right: "8px",
          bottom: "",
          left: ""
        },
        width: "30%", // 设置宽度
        list: [
          // 设置下拉列表数据和对应的点击事件
          {
            text: "CoinPay",
            icon: "coin-pay",
            action: this.handleCoinPay
          },
          {
            text: "支付宝",
            icon: "alipay-icon",
            action: this.handleAlipay
          }
        ]
      },
      defaultData: [
        {
          text: "中国",
          value: "China"
        }
      ],
      pickData: {
        data1: [
          // {
          //   text: "中国",
          //   value: "China"
          // }
        ]
      },
      applyNum: "",
      areaNode: {
        limitNum: 0,
        totalNum: 0,
        city: "",
        price: 0
      }
    };
  },
  watch: {
    applyNum(value) {
      if (value > this.areaNode.limitNum) {
        this.applyNum = this.areaNode.limitNum;
        this.$toast({
          mask: false,
          duration: 1000,
          message: `超过购买限制，限购${this.areaNode.limitNum}份`
        });
      }
    }
  },
  created() {},
  methods: {
    handleCountsClick() {
      if (!this.areaNode.province) {
        this.$toast({
          mask: false,
          duration: 1000,
          message: "请选择州/省级节点！"
        });
        this.applyNum = "";
      }
    },
    handleClose() {
      this.showDialog = false;
      this.$http
        .post(`/api/node/apply`, {
          applyNum: this.applyNum,
          id: this.areaNode.provinceId
        })
        .then(response => {
          this.$toast({
            mask: false,
            duration: 1000,
            message: "申请成功！"
          });
          this.$router.go(-1);
        });
    },
    handleCoinPay(item) {
      this.item = item;
    },
    handleAlipay(item) {
      this.item = item;
    },
    hidden() {
      this.isActive = false;
      this.$refs.droplist.hidden();
    },
    handleShow() {
      this.isActive = true;
      this.$refs.droplist.show();
    },
    handleApplication() {
      if (this.areaNode.province && this.applyNum > 0) {
        this.showDialog = true;
      } else {
        this.$toast({
          mask: false,
          duration: 1000,
          message: "请输入申请份数！"
        });
      }
    },
    handleShowCountry() {
      this.show = true;
      this.pickersType = "country";
      this.$http.get(`/api/node/getSetting?type=1`).then(response => {
        let responseArray = response.data.content;
        this.pickData.data1 = responseArray.map(element => {
          return {
            text: element.name,
            value: element.id
          };
        });
      });
    },
    handleShowProvince() {
      if (this.areaNode.countryId) {
        this.show = true;
        this.pickersType = "province";
        this.$http
          .get(`/api/node/getSetting?parentId=${this.areaNode.countryId}`)
          .then(response => {
            let responseArray = response.data.content;
            this.areaData = responseArray;
            this.pickData.data1 = responseArray.map(element => {
              return {
                text: element.name,
                value: element.id
              };
            });
          });
      } else {
        this.$toast({
          mask: false,
          duration: 1000,
          message: "请选择国家！"
        });
      }
    },

    confirmFn(select) {
      this.show = false;
      switch (this.pickersType) {
        case "country":
          this.areaNode.country = select.select1.text;
          this.areaNode.countryId = select.select1.value;
          break;
        case "province":
          this.areaNode.province = select.select1.text;
          this.areaNode.provinceId = select.select1.value;
          this.areaData.map(it => {
            if (it.id == select.select1.value) {
              this.areaNode.totalNum = it.totalNum;
              this.areaNode.price = it.price;
              this.areaNode.limitNum = it.limitNum;
            }
          });
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.state-node {
 
  .area-content {
    margin: auto 16px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    padding-left: 5px;
    padding-right: 16px;
    margin-top: 18px;
    .options-list {
      padding-top: 20px;
      .option-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        padding-bottom: 22px;
        .item-info {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 15px;
          color: #888;
        }
      }
    }
    .area-info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .info-item {
        display: flex;
        justify-content: center;
        align-items: center;
        .text-weight {
          font-size: 24px;
          color: #d8182d;
        }
        .text-small {
          font-size: 11px;
          color: #3a3a3a;
          padding-left: 5px;
        }
      }
      .total-text {
        font-size: 14px;
        color: #3a3a3a;
        padding-top: 10px;
      }
      .area-count {
        color: #949497;
        font-size: 10px;
        padding-top: 4px;
        padding-bottom: 50px;
      }
    }
  }
  .application-btn {
    position: fixed;
    width: 100%;
    bottom: 10px;
    left: 0;
    right: 0;
    padding: 0 16px;
    /deep/ .van-button--danger {
      background-color: #d8182d;
      line-height: 44px;
      font-size: 18px;
    }
  }
  .node-dialog {
    .dialog-content {
      padding: 0 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 14px;
      color: #3a3a3a;
      .drop-list-play {
        .item {
          margin: 0 10px;
        }
      }
      .content-tips {
        width: 100%;
        padding-top: 20px;
        text-align: center;
      }
      .coin-pay {
        width: 100%;
        .icons-box {
          padding-right: 75px;
          display: flex;
          justify-content: flex-start;
          position: relative;
          .select-absolte {
            position: absolute;
            right: 0;
            top: 0;
          }
        }
        .active-arrow-down {
          transform: rotate(180deg);
        }
      }
      .content-count {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 0;
        .text-weight {
          font-size: 20px;
          font-weight: 700;
          padding-left: 5px;
        }
      }
      .coin-pay {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .content-btn {
        .know-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;
          line-height: 40px;
          font-size: 17px;
          color: #fff;
          width: 140px;
          border-radius: 4px;
          background-color: #d8182d;
          margin: 30px 0;
          margin-top: 50px;
        }
      }
    }
  }
}
</style>
]