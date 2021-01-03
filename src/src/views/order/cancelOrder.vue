<template>
  <div class="cancel-order">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <div class="header-content">取消原因</div>
      <router-link class="appeal-record" to="/order/appealRecord" tag="span"
        >申诉记录</router-link
      >
    </header>
    <div class="content-box">
      <span class="icon-svg" @click="$router.go(-1)">
        <svg-icon icon-class="sigh"></svg-icon>
      </span>
      <i>订单取消成功</i>
    </div>
    <section class="reason-list">
      <div class="item-content">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell title="想了想，我不想要了" clickable @click="radio = '1'">
              <van-radio slot="right-icon" checked-color="#91C95B" name="1" />
            </van-cell>
            <van-cell title="买多了/买错了" clickable @click="radio = '2'">
              <van-radio slot="right-icon" checked-color="#91C95B" name="2" />
            </van-cell>
            <van-cell title="支付遇到问题" clickable @click="radio = '3'">
              <van-radio slot="right-icon" checked-color="#91C95B" name="3" />
            </van-cell>
            <van-cell title="地址填写错误" clickable @click="radio = '4'">
              <van-radio slot="right-icon" checked-color="#91C95B" name="4" />
            </van-cell>
            <van-cell title="其他原因" clickable @click="radio = '5'">
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <van-field
          v-model="value"
          type="textarea"
          rows="4"
          @input="descInput"
          :autosize="{ maxHeight: 200, minHeight: 120 }"
          placeholder="请输入原因"
        >
          <span slot="right-icon">{{ remnant }}/100</span>
        </van-field>
      </div>
    </section>
    <div class="pay-btn">
      <div class="pay-count">请选择取消订单原因，帮助我们改进，提高服务</div>
      <van-button type="danger" size="large">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CancelOrder",
  data() {
    return {
      columns: [
        "想了想，我不想要了",
        "买多了/买错了",
        "支付遇到问题",
        "地址填写错误",
        "其他原因"
      ],
      value: "",
      remnant: 0,
      radio: "1"
    };
  },
  created() {},
  methods: {
    onChange(picker, value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`);
    },
    descInput(value) {
      var txtVal = this.value.length;
      this.remnant = 100 - txtVal;
      if (this.remnant < 0) {
        this.remnant = 0;
      }
      if (100 - txtVal < 0) {
        this.value = value.slice(0, 100);
        this.isDisInput = true;
      } else {
        this.isDisInput = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.cancel-order {
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 667px;
  max-height: 812px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 0;
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

  .content-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    i {
      color: #3a3a3a;
      font-size: 14px;
      padding-top: 10px;
      padding-bottom: 44px;
    }
    .icon-svg {
      display: inline-block;
      padding-top: 30px;
      .svg-icon {
        width: 33px;
        height: 33px;
      }
    }
  }
  .reason-list {
    max-height: 376px;
    padding: 0 16px;
    margin-bottom: 55px;
    border-radius: 8px;
    background-color: white;
    .item-content {
      /deep/ .van-cell:not(:last-child)::after {
        display: none;
      }
      /deep/ .van-hairline--top-bottom::after {
        display: none;
      }
      /deep/ .van-field__right-icon {
        position: absolute;
        bottom: 5px;
        right: 0;
      }
      /deep/ .van-cell {
        padding: 10px 0;
        // padding-top: 20px;
      }
    }
  }
  .pay-btn {
    padding: 0 16px;
    position: fixed;
    bottom: 10px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    .pay-count {
      display: flex;
      justify-content: center;
      color: #949497;
      font-size: 14px;
      padding-bottom: 10px;
    }
    /deep/ .van-button--danger {
      background-color: #d8182d;
      line-height: 44px;
      font-size: 18px;
    }
  }
}
</style>
