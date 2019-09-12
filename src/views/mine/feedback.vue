<template>
  <div class="feedback">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <i>问题反馈</i>
    </cm-header>
    <section class="mine-content">
      <ul class="options-list">
        <li class="item-header">
          <span>选择类型</span>
        </li>
        <van-radio-group v-model="type" class="radio-list">
          <li class="radio-item">
            <van-radio name="1" checked-color="#91C95B">功能异常</van-radio>
          </li>
          <li class="radio-item">
            <van-radio name="2" checked-color="#91C95B">体验问题</van-radio>
          </li>
          <li class="radio-item">
            <van-radio name="3" checked-color="#91C95B">新功能建议</van-radio>
          </li>
          <li class="radio-item">
            <van-radio name="4" checked-color="#91C95B">其他问题</van-radio>
          </li>
        </van-radio-group>
        <van-cell-group class="others-textarea">
          <van-field
            rows="5"
            :autosize="{minHeight:280,maxHeight:280}"
            v-model="detail"
            type="textarea"
            placeholder="请填写问题描述"
            @input="descInput"
            :error="isDisInput"
          >
            <span slot="right-icon">{{remnant}}/200</span>
          </van-field>
        </van-cell-group>
      </ul>
    </section>
    <div class="pay-btn">
      <van-button type="danger" @click="handleSubmit" size="large">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "feedback",
  data() {
    return {
      type: "",
      detail: "",
      isDisInput: false,
      remnant: 0
    };
  },
  created() {},
  methods: {
    handleSubmit() {
      if (!this.type || !this.detail) {
        this.$toast({
          mask: false,
          message: "请选择类型或者填写问题描述！"
        });
        return;
      }
      this.$http
        .post(`/api/help/feedback`, {
          type: this.type,
          detail: this.detail
        })
        .then(response => {
          this.$toast({
            mask: false,
            message: "提交成功！"
          });
          this.$router.go(-1);
        });
    },
    descInput(detail) {
      var txtVal = this.detail.length;
      this.remnant = 200 - txtVal;
      if (this.remnant < 0) {
        this.remnant = 0;
      }
      if (200 - txtVal < 0) {
        this.detail = detail.slice(0, 200);
        this.isDisInput = true;
      } else {
        this.isDisInput = false;
      }
    }
  }
};
</script>
<style scoped lang="scss">
.feedback {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 45px;
  .mine-content {
    background: url("../../assets/image/back-show.png") no-repeat center center;
    background-size: 100% 100%;
    background-color: #fff;
    border-radius: 8px;
    padding: 0 16px;
    margin-top: 18px;
    .options-list {
      padding-top: 20px;
      padding-bottom: 20px;
      .item-header {
        font-size: 20px;
        margin-bottom: 16px;
      }
      .radio-list {
        .radio-item {
          display: inline-block;
          margin-right: 12px;
          margin-bottom: 10px;
          /deep/ .van-radio__icon {
            width: 14px;
          }
          /deep/ .van-radio__label {
            font-size: 15px;
            color: #3a3a3a;
          }
        }
      }
      .others-textarea {
        margin-top: 10px;
        padding-top: 5px;
        height: 303px;
        border-radius: 8px;
        border: 1px solid #949497;
        /deep/ .van-cell {
          padding-bottom: 0;
        }
        /deep/ .van-field__right-icon {
          position: absolute;
          bottom: 0;
          right: 0;
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
    /deep/ .van-button--danger {
      background-color: #ec3924;
      line-height: 44px;
      font-size: 18px;
      border-radius: 4px;
    }
  }
}
</style>
