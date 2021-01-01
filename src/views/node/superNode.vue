<template>
  <div class="super-node">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" alt />
      </span>
      <div class="header-content">超级节点申请</div>
    </header>
    <section class="area-content">
      <ul class="options-list">
        <li class="option-item">
          <router-link tag="div" class="item-info" to="/mine/countryRegion">
            <van-field
              v-model="areaNode.country"
              @click="handleShowCountry"
              disabled
              label="国家"
              placeholder="中国"
            />
          </router-link>
          <van-icon name="arrow" color="#DBDBDB" />
        </li>
        <li class="option-item">
          <div class="item-info">
            <van-field
              v-model="areaNode.country"
              disabled
              label="份数"
              placeholder="20009"
            />
          </div>
          <span style="color:#3A3A3A">份</span>
        </li>
      </ul>
      <ul class="area-info">
        <li class="info-item">
          <b class="text-weight">2000006</b>
          <small class="text-small">USDT</small>
        </li>
        <li class="total-text">共20009份</li>
        <li class="area-count">
          <small>*该节点共666份，现剩余节点还有65份</small>
        </li>
      </ul>
    </section>
    <div class="application-btn">
      <van-button type="danger" @click="handleApplication" size="large"
        >申请</van-button
      >
    </div>
    <vue-pickers
      :show="show"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="close"
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
          <span>确认支付1003 USDT成为分享节点？</span>
        </li>
        <li class="content-count">
          <span>USDT</span>
          <b class="text-weight">100003</b>
        </li>
        <li class="coin-pay">
          <div>
            <label>支付</label>
            <svg-icon v-if="item.icon" :icon-class="item.icon"></svg-icon>
            {{ item.text }}
          </div>
          <span
            @click="handleShow"
            class="arrow-down"
            :class="{ 'active-arrow-down': isActive }"
            v-click-outside="hidden"
          >
            <svg-icon icon-class="arrow-down"></svg-icon>
          </span>
        </li>
        <drop-list
          class="drop-list-play"
          :config="configData"
          ref="droplist"
        ></drop-list>
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
  name: "superNode",
  directives: {
    ClickOutside
  },
  data() {
    return {
      show: false,
      item: {},
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
          {
            text: "中国",
            value: "China"
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
      areaNode: {
        country: ""
      }
    };
  },
  created() {},
  methods: {
    handleClose() {
      this.showDialog = false;
    },
    handleCoinPay(item) {
      this.item = item;
      console.log("=====item==>", item);
      // this.$refs.droplist.hidden();
      // this.isActive = false;
    },
    handleAlipay(item) {
      this.item = item;
      console.log("=====item==>", item);
      // this.$refs.droplist.hidden();
      // this.isActive = false;
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
      this.showDialog = true;
    },
    handleShowCountry() {
      this.show = true;
    },
    confirmFn() {
      this.show = false;
    },
    close() {
      this.show = false;
    }
  }
};
</script>

<style scoped lang="scss">
.super-node {
  .page-header {
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #efeff4;
    .btn-left {
      position: absolute;
      left: 16px;
      top: 10px;
      z-index: 999;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      z-index: 11;
      color: #3a3a3a;
      font-weight: 600;
      flex: 1;
    }
  }
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
      }
      .coin-pay {
        width: 100%;
        .arrow-down {
          // margin-left: auto;
          margin-right: 70px;
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
