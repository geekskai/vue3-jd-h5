<template>
  <div class="merchants-settled">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">商家入驻</div>
    </header>
    <ul class="card-images">
      <li>
        <span class="iamges-text">身份证正面</span>
        <div class="images-front"></div>
      </li>
      <li>
        <span class="iamges-text">身份证反面</span>
        <div class="images-side"></div>
      </li>
      <li>
        <span class="iamges-text">手持身份证</span>
        <div class="images-handle"></div>
      </li>
      <li>
        <span class="iamges-text">营业执照</span>
        <div class="images-license"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "merchantsSettled",
  data() {
    return {
      systemMessage: {},
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
  methods: {}
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
    padding: 10px;
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
  .card-images {
    .iamges-text {
      font-size: 15px;
      color: #3a3a3a;
      font-weight: 600;
    }
    .images-front {
      margin-top: 8px;
      height: 187px;
      background: url("../../assets/image/mime/images-front.png") no-repeat
        center center;
      background-size: 100% 100%;
    }
    .images-side {
      margin-top: 8px;
      height: 187px;
      background: url("../../assets/image/mime/images-side.png") no-repeat
        center center;
      background-size: 100% 100%;
    }
    .images-handle {
      margin-top: 8px;
      height: 187px;
      background: url("../../assets/image/mime/images-handle.png") no-repeat
        center center;
      background-size: 100% 100%;
    }
    .images-license {
      margin-top: 8px;
      height: 187px;
      background: url("../../assets/image/mime/images-license.png") no-repeat
        center center;
      background-size: 100% 100%;
    }
  }
}
</style>
