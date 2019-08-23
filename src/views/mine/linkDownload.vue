<template>
  <div class="link-download">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">下载链接</div>
    </header>
    <section class="down-btns">
      <div class="down-btn" @click="handleDownIOS">
        <svg-icon icon-class="apple-icon"></svg-icon>iOS 下载
      </div>
      <a href="https://topimg-test.oss-cn-shenzhen.aliyuncs.com/download/app-release.apk">
        <div class="down-btn">
          <svg-icon icon-class="android-icon"></svg-icon>Android 下载
        </div>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: "linkDownload",
  data() {
    return {
      systemMessage: {},
      checked: false,
      mallMessage: {}
    };
  },
  mounted() {},
  created() {},
  methods: {
    handleDownIOS() {
      this.$toast({
        mask: true,
        duration: 1000,
        message: "正在努力建设中,敬请期待····"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.link-download {
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  padding-bottom: 45px;
  background-color: #f66747;
  background: url("../../assets/image/mime/link-download.png") no-repeat center
    center;
  background-size: 100% 100%;
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
      color: #fff;
      flex: 1;
    }
    .appeal-record {
      color: #ec3924;
      font-size: 13px;
    }
  }
  .down-btns {
    margin-top: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .down-btn {
      background: url("../../assets/image/mime/down-btn.png") no-repeat center
        center;
      background-size: 100% 100%;
      font-size: 19px;
      color: #f2e595;
      margin-bottom: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 233px;
      height: 61px;
    }
  }
}
</style>
