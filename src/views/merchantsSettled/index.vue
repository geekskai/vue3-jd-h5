<template>
  <div class="merchants-settled">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">商家入驻</div>
    </header>
    <svg-icon class="into-process" icon-class="intoProcess"></svg-icon>
    <router-link class="pay-btn" tag="div" to="/merchantsSettled/shopApplyInfo">
      <van-button type="danger" @click="show = true" size="large">申请入驻</van-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "merchantsSettled",
  data() {
    return {
      systemMessage: {},
      checked: false,
      fileList: [],
      idCardNoUrlA: [],
      idCardNoUrlB: [],
      idCardNoUrlC: [],
      businessLicenseUrl: [],
      shopForm: {},
      mallMessage: {}
    };
  },
  created() {
    this.$http.get(`/api/message/messageTypeCount`).then(response => {
      response.data.content.forEach(it => {
        it.type === 1 ? (this.mallMessage = it) : (this.systemMessage = it);
      });
    });
  },
  methods: {
    afterReadA(res) {
      let formData = new FormData();
      formData.append("file", res.file);
      this.$http.post(`/api/shop/upload/image`, formData).then(response => {
        this.shopForm.idCardNoUrlA = response.data.content.imageUrl;
      });
    },
    afterReadB(res) {
      let formData = new FormData();
      formData.append("file", res.file);
      this.$http.post(`/api/shop/upload/image`, formData).then(response => {
        this.shopForm.idCardNoUrlB = response.data.content.imageUrl;
      });
    },
    afterReadC(res) {
      let formData = new FormData();
      formData.append("file", res.file);
      this.$http.post(`/api/shop/upload/image`, formData).then(response => {
        this.shopForm.idCardNoUrlC = response.data.content.imageUrl;
      });
    },
    afterReadBusinessLicenseUrl(res) {
      let formData = new FormData();
      formData.append("file", res.file);
      this.$http.post(`/api/shop/upload/image`, formData).then(response => {
        this.shopForm.businessLicenseUrl = response.data.content.imageUrl;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.merchants-settled {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 45px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;
    .btn-left {
      background-color: #fff;
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
      color: #ec3924;
      font-size: 13px;
    }
  }
  .into-process {
    width: 100%;
    height: 642px;
    margin-bottom: 70px;
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
    }
  }
}
</style>
