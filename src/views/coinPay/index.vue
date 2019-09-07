<template>
  <div class="coin-pay">
    <div class="coin-pay-class">
      <svg-icon icon-class="coin-pay-logo" class="coin-pay-logo"></svg-icon>
      <img src="@/assets/image/coinPay/coin-pay-text.png" class="coin-pay-text" />
      <p class="coin-pay-desc">
        Coin Pay 提供高效便捷、安全有保障的数字
        <br />资产相关服务。
      </p>
    </div>
    <section class="down-btns">
      <a
        href="itms-services://?action=download-manifest&url=https://chain-mall.oss-cn-shenzhen.aliyuncs.com/download/manifest.plist"
      >
        <div class="down-btn">
          <svg-icon icon-class="apple-icon-coin-pay"></svg-icon>&nbsp;&nbsp;&nbsp;
          <span>iOS下载</span>
        </div>
      </a>
      <a href="https://chain-mall.oss-cn-shenzhen.aliyuncs.com/download/cmall-release.apk">
        <div class="down-btn">
          <svg-icon icon-class="android-icon-coin-pay"></svg-icon>
          <span>&nbsp;Android下载</span>
        </div>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: "coinPay",
  data() {
    return {
      systemMessage: {},
      checked: false,
      mallMessage: {}
    };
  },
  mounted() {},
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.coin-pay {
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  padding-bottom: 45px;
  background-color: #f66747;
  background: url("../../assets/image/coinPay/coin-pay-back.png") no-repeat
    center center;
  background-size: 100% 100%;
  .coin-pay-class {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 55px;
    .coin-pay-logo {
      width: 90px;
      height: 90px;
    }
    .coin-pay-text {
      padding-top: 20px;
      width: 97px;
      height: 26px;
    }
    .coin-pay-desc {
      color: #fff;
      padding-top: 22px;
      font-size: 14px;
      text-align: center;
    }
  }
  .coin-pay-center {
    position: absolute;
    top: 130px;
    left: 0;
    right: 0;
    margin: auto;
  }

  .down-btns {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 15px;
    width: 348px;
    height: 448px;
    background: url("../../assets/image/coinPay/coin-pay-center.png") no-repeat
      top center;
    background-size: 100% 100%;
    .down-btn {
      font-size: 19px;
      color: #fff;
      margin-bottom: 20px;
      display: flex;
      padding-left: 50px;
      justify-content: flex-start;
      align-items: center;
      border: 1px #fff solid;
      border-radius: 30px;
      width: 233px;
      height: 50px;
    }
  }
}
</style>
