<template>
  <div class="feedback">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">问题反馈</div>
    </header>
    <section class="mine-content">
      <ul class="options-list">
        <li class="item-header">
          <span>选择类型</span>
        </li>
        <van-radio-group v-model="radio" class="radio-list">
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
            :autosize="{ minHeight: 280, maxHeight: 280 }"
            v-model="value"
            type="textarea"
            :right-icon="`${remnant}/200`"
            placeholder="请填写问题描述"
            @input="descInput"
            :error="isDisInput"
          >
          </van-field>
        </van-cell-group>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "feedback",
  data() {
    return {
      radio: "1",
      value: "",
      isDisInput: false,
      remnant: 0
    };
  },
  created() {},
  methods: {
    descInput(value) {
      var txtVal = this.value.length;
      this.remnant = 200 - txtVal;
      if (this.remnant < 0) {
        this.remnant = 0;
      }
      if (200 - txtVal < 0) {
        this.value = value.slice(0, 200);
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
  .mine-content {
    background: url("../../assets/image/back-show.png") no-repeat center center;
    background-size: 100% 100%;
    // box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    padding: 0 16px;
    margin-top: 18px;
    .options-list {
      padding-top: 20px;
      padding-bottom: 120px;
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
}
</style>
