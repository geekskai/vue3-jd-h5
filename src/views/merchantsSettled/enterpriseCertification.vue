<template>
  <div class="enterprise-certification">
     <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <i>商家入驻</i>
    </cm-header>
    <ul class="card-images">
      <li>
        <span class="iamges-text">身份证正面</span>
        <van-uploader
          class="images-front"
          :after-read="afterReadA"
          v-model="idCardNoUrlA"
          :max-count="1"
        >
          <div slot="default"></div>
        </van-uploader>
      </li>
      <li>
        <span class="iamges-text">身份证反面</span>
        <van-uploader
          class="images-side"
          :after-read="afterReadB"
          v-model="idCardNoUrlB"
          :max-count="1"
        >
          <div slot="default"></div>
        </van-uploader>
      </li>
      <li>
        <span class="iamges-text">手持身份证</span>
        <van-uploader
          class="images-handle"
          :after-read="afterReadC"
          v-model="idCardNoUrlC"
          :max-count="1"
        >
          <div slot="default"></div>
        </van-uploader>
      </li>
      <li>
        <span class="iamges-text">营业执照</span>
        <van-uploader
          class="images-license"
          :after-read="afterReadBusinessLicenseUrl"
          v-model="businessLicenseUrl"
          :max-count="1"
        >
          <div slot="default"></div>
        </van-uploader>
      </li>
    </ul>
    <van-checkbox
      class="merchant-agreement"
      v-model="checked"
      icon-size="14"
      checked-color="#D8182D"
    >
      阅读并同意
      <i class="agreement-text">《CMALL商家协议》</i>
    </van-checkbox>
    <div class="pay-btn">
      <van-button type="danger" :disabled="!checked" @click="handleSubmitShopInfo" size="large">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "enterpriseCertification",
  data() {
    return {
      systemMessage: {},
      checked: false,
      applyInfo: this.$route.query || {},
      fileList: [],
      idCardNoUrlA: [],
      idCardNoUrlB: [],
      idCardNoUrlC: [],
      businessLicenseUrl: [],
      mallMessage: {}
    };
  },
  created() {
    if (this.$route.query.isEdit) {
      this.idCardNoUrlA.push({ url: this.$route.query.idCardNoUrlA });
      this.idCardNoUrlB.push({ url: this.$route.query.idCardNoUrlB });
      this.idCardNoUrlC.push({ url: this.$route.query.idCardNoUrlC });
      this.businessLicenseUrl.push({
        url: this.$route.query.businessLicenseUrl
      });
    }
  },
  methods: {
    //   /api/shop/submit
    handleSubmitShopInfo() {
      //  需要验证
      this.$http
        .post(
          `/api/shop${this.applyInfo.isEdit ? "/again" : ""}/submit`,
          this.applyInfo
        )
        .then(response => {
          this.$toast({
            mask: false,
            duration: 1000,
            message: "店铺信息提交成功"
          });
          this.$router.push("/merchantsSettled/payDeposit");
        });
    },
    afterReadA(res) {
      let formData = new FormData();
      formData.append("file", res.file);
      this.$http.post(`/api/shop/upload/image`, formData).then(response => {
        this.applyInfo.idCardNoUrlA = response.data.content.imageUrl;
      });
    },
    afterReadB(res) {
      let formData = new FormData();
      formData.append("file", res.file);
      this.$http.post(`/api/shop/upload/image`, formData).then(response => {
        this.applyInfo.idCardNoUrlB = response.data.content.imageUrl;
      });
    },
    afterReadC(res) {
      let formData = new FormData();
      formData.append("file", res.file);
      this.$http.post(`/api/shop/upload/image`, formData).then(response => {
        this.applyInfo.idCardNoUrlC = response.data.content.imageUrl;
      });
    },
    afterReadBusinessLicenseUrl(res) {
      let formData = new FormData();
      formData.append("file", res.file);
      this.$http.post(`/api/shop/upload/image`, formData).then(response => {
        this.applyInfo.businessLicenseUrl = response.data.content.imageUrl;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.enterprise-certification {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 45px;
  .card-images {
    margin-top: 10px;
    li {
      display: flex;
      flex-direction: column;
    }
    /deep/ .van-uploader__preview {
      margin: 0;
      .van-uploader__preview-image {
        width: 343px;
        height: 187px;
      }
    }
    .iamges-text {
      font-size: 15px;
      color: #3a3a3a;
      font-weight: 600;
    }
    /deep/ .van-uploader__input-wrapper {
      width: 343px;
      height: 187px;
    }
    .images-front {
      margin: 8px 0;
      background: url("../../assets/image/mime/images-front.png") no-repeat
        center center;
      background-size: 100% 100%;
    }
    .images-side {
      margin: 8px 0;
      height: 187px;
      background: url("../../assets/image/mime/images-side.png") no-repeat
        center center;
      background-size: 100% 100%;
    }
    .images-handle {
      margin: 8px 0;
      height: 187px;
      background: url("../../assets/image/mime/images-handle.png") no-repeat
        center center;
      background-size: 100% 100%;
    }
    .images-license {
      margin: 8px 0;
      height: 187px;
      background: url("../../assets/image/mime/images-license.png") no-repeat
        center center;
      background-size: 100% 100%;
    }
  }
  .merchant-agreement {
    padding-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 10px;
    color: #ec3924;
    padding-bottom: 70px;
    .agreement-text {
      font-size: 10px;
      color: #ec3924;
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
