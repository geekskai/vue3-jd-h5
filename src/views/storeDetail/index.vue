<template>
  <div class="store-detail">
    <span class="btn-left" @click="$router.go(-1)">
      <svg-icon icon-class="gray-btn"></svg-icon>
    </span>
    <section class="store-info">
      <ul class="store-top">
        <li class="store-title">店铺详情</li>
        <img src="../../assets/image/product/store-headerM.png" class="store-header" />
        <li class="store-name">店铺名称</li>
        <li class="store-introd">
          <div>
            店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺
            介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺介绍店铺
            介绍店铺介绍店铺介绍店铺介绍店铺介绍
          </div>
        </li>
      </ul>
      <ul class="store-center">
        <li class="store-tel">
          <label>电话:</label>
          <span>13567890000</span>
        </li>
        <li>
          <label>地址:</label>
          <span>广东省深圳市宝安区科研路9号腾讯大厦10001</span>
        </li>
        <li class="store-btn">
          <van-button size="small" type="danger">联系店家</van-button>
        </li>
      </ul>
    </section>
    <section>
      
    </section>
  </div>
</template>

<script>
export default {
  name: "",

  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
  watch: {}
};
</script>

<style scoped lang="scss">
.store-detail {
  .btn-left {
    position: fixed;
    left: 16px;
    top: 40px;
    color: #efeff4;
  }
  .store-info {
    background-color: #fff;
    min-height: 383px;
    margin-bottom: 10px;
    .store-top {
      margin-top: 44px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .store-title {
        color: #3a3a3a;
        font-size: 18px;
        font-weight: 700;
      }
      .store-header {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        padding-top: 14px;
        padding-bottom: 10px;
      }
      .store-name {
        color: #3a3a3a;
        font-size: 18px;
      }
      .store-introd {
        padding: 16px;
        color: #3a3a3a;
        font-size: 11px;
      }
    }
    .store-center {
      color: #3a3a3a;
      font-size: 11px;
      padding: 16px;
      .store-tel {
        padding-bottom: 10px;
      }
      .store-btn {
        text-align: center;
        padding-top: 20px;
        /deep/ .van-button--danger {
          background-color: #fe4f70;
        }
      }
    }
  }
}
</style>
