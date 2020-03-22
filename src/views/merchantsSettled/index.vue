<template>
  <div class="merchants-settled">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <i>商家入驻</i>
    </cm-header>
    <ul class="merchants-steps">
      <p class="step-title">
        <span class="title-text">入驻流程</span>
      </p>
      <li class="step-item">
        <img class="step-img" src="../../assets/image/mime/step1.png" />
        <div>
          <img src="../../assets/image/mime/left-yellow.png" />
          <span class="step1-text">&nbsp;&nbsp;&nbsp;step 01</span>
          <p class="commit-apply">提交申请</p>
        </div>
      </li>
      <li class="step-item">
        <div>
          <img src="../../assets/image/mime/right-yellow.png" />
          <span class="step1-text">&nbsp;&nbsp;&nbsp;step 02</span>
          <p class="commit-apply">缴纳保证金</p>
        </div>
        <img src="../../assets/image/mime/step2.png" />
      </li>
      <li class="step-item">
        <img src="../../assets/image/mime/step3.png" />
        <div>
          <img src="../../assets/image/mime/left-yellow.png" />
          <span class="step1-text">&nbsp;&nbsp;&nbsp;step 03</span>
          <p class="commit-apply">审核通过</p>
        </div>
      </li>
      <li class="step-item">
        <div>
          <img src="../../assets/image/mime/right-yellow.png" />
          <span class="step1-text">&nbsp;&nbsp;&nbsp;step 04</span>
          <p class="commit-apply">入驻成功</p>
        </div>
        <img src="../../assets/image/mime/step4.png" />
      </li>
    </ul>
    <div>&nbsp;</div>
    <router-link class="pay-btn" tag="div" to="/merchantsSettled/shopApplyInfo">
      <van-button type="danger" @click="show = true" size="large">申请入驻</van-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'merchantsSettled',
  data () {
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
    }
  },
  created () {
    this.$http.get(`/api/message/messageTypeCount`).then(response => {
      response.data.content.forEach(it => {
        it.type === 1 ? (this.mallMessage = it) : (this.systemMessage = it)
      })
    })
  },
  methods: {
    afterReadA (res) {
      let formData = new FormData()
      formData.append('file', res.file)
      this.$http.post(`/api/shop/upload/image`, formData).then(response => {
        this.shopForm.idCardNoUrlA = response.data.content.imageUrl
      })
    },
    afterReadB (res) {
      let formData = new FormData()
      formData.append('file', res.file)
      this.$http.post(`/api/shop/upload/image`, formData).then(response => {
        this.shopForm.idCardNoUrlB = response.data.content.imageUrl
      })
    },
    afterReadC (res) {
      let formData = new FormData()
      formData.append('file', res.file)
      this.$http.post(`/api/shop/upload/image`, formData).then(response => {
        this.shopForm.idCardNoUrlC = response.data.content.imageUrl
      })
    },
    afterReadBusinessLicenseUrl (res) {
      let formData = new FormData()
      formData.append('file', res.file)
      this.$http.post(`/api/shop/upload/image`, formData).then(response => {
        this.shopForm.businessLicenseUrl = response.data.content.imageUrl
      })
    }
  }
}
</script>

<style scoped lang="scss">
.merchants-settled {
  min-height: 812px;
  padding: 0 16px;
  padding-bottom: 80px;
  .merchants-steps {
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    .step-title {
      font-size: 14px;
      color: #3a3a3a;
      text-align: center;
      .title-text {
        box-shadow: 1px -10px 1px -4px rgba(254, 77, 109, 0.5) inset;
      }
    }
    .step-item {
      padding-top: 23px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .step-img {
        width: 175px;
        height: 135px;
      }
      .step1-text {
        font-size: 13px;
        color: #dbdbdb;
      }
      .commit-apply {
        font-size: 16px;
        color: #422929;
        font-weight: 700;
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
