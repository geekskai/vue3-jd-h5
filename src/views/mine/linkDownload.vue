<template>
  <div class="link-download">
     <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <i>下载链接</i>
    </cm-header>
    <section class="down-btns">
      <a
        href="itms-services://?action=download-manifest&url=https://chain-mall.oss-cn-shenzhen.aliyuncs.com/download/manifest.plist"
      >
        <div class="down-btn">
          <svg-icon icon-class="apple-icon"></svg-icon>iOS 下载
        </div>
      </a>
      <a href="https://chain-mall.oss-cn-shenzhen.aliyuncs.com/download/cmall-release.apk">
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
  methods: {}
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
