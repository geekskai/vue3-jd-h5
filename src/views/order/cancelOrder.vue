<template>
  <div class="cancel-order">

       <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <i>取消原因</i>
    </cm-header>
    <div class="content-box">
      <span class="icon-svg" @click="$router.go(-1)">
        <svg-icon icon-class="sigh"></svg-icon>
      </span>
      <p class="cancle-reason">
        <i>请选择取消订单原因，</i>
        <i>帮助我们改进，提高服务</i>
      </p>
    </div>
    <section class="reason-list">
      <div class="item-content">
        <van-radio-group v-model="cancelReason">
          <van-cell-group>
            <van-cell title="想了想，我不想要了" clickable @click="cancelReason = '想了想，我不想要了'">
              <van-radio slot="right-icon" checked-color="#91C95B" name="想了想，我不想要了" />
            </van-cell>
            <van-cell title="买多了/买错了" clickable @click="cancelReason = '买多了/买错了'">
              <van-radio slot="right-icon" checked-color="#91C95B" name="买多了/买错了" />
            </van-cell>
            <van-cell title="支付遇到问题" clickable @click="cancelReason = '支付遇到问题'">
              <van-radio slot="right-icon" checked-color="#91C95B" name="支付遇到问题" />
            </van-cell>
            <van-cell title="地址填写错误" clickable @click="cancelReason = '地址填写错误'">
              <van-radio slot="right-icon" checked-color="#91C95B" name="地址填写错误" />
            </van-cell>
            <van-cell title="其他原因" clickable @click="cancelReason = '其他原因'">
              <van-radio slot="right-icon" checked-color="#91C95B" name="其他原因" />
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <van-field
          v-model="otherCancelReason"
          type="textarea"
          rows="4"
          @input="descInput"
          :autosize="{ maxHeight: 200, minHeight: 120 }"
          placeholder="请输入原因"
        >
          <span slot="right-icon">{{remnant}}/100</span>
        </van-field>
      </div>
    </section>
    <div class="pay-btn">
      <van-button type="danger" @click="handleSubmitOrder" size="large">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CancelOrder',
  data () {
    return {
      cancelReason: '',
      otherCancelReason: '',
      remnant: 0
    }
  },
  created () {},
  methods: {
    handleSubmitOrder () {
      if (this.cancelReason === '其他原因') {
        this.cancelReason = this.otherCancelReason
      }
      this.$http
        .post(`/api/order/cancel`, {
          cancelReason: this.cancelReason,
          orderNo: this.$route.query.orderNo
        })
        .then(response => {
          this.$toast({
            mask: false,
            duration: 1000,
            message: '提交成功！'
          })
          this.$router.go(-1)
        })
    },
    descInput (value) {
      var txtVal = value.length
      this.remnant = 100 - txtVal
      if (this.remnant < 0) {
        this.remnant = 0
      }
      if (100 - txtVal < 0) {
        this.otherCancelReason = value.slice(0, 100)
        this.isDisInput = true
      } else {
        this.isDisInput = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
.cancel-order {
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 667px;
  max-height: 812px;

  .content-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .cancle-reason {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #3a3a3a;
      font-size: 14px;
      padding-top: 10px;
      padding-bottom: 24px;
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
    /deep/ .van-button--danger {
      background-color: #ec3924;
      line-height: 44px;
      font-size: 18px;
         border-radius: 4px;
    }
  }
}
</style>
