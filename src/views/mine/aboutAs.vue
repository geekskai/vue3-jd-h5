<template>
  <div class="about-as">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="gray-btn"></svg-icon>
      </span>
      <div class="header-content">关于我们</div>
    </header>
    <div class="logo-version">
      <img src="../../assets/image/setting/logo.png" />
      <h6>Chain Mall</h6>
      <span class="version">版本1.0.1</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutAs",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.about-as {
  min-height: 100vh;
  background-color: #fff;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .btn-left {
      position: fixed;
      left: 20px;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      color: #3a3a3a;
      font-weight: 600;
      flex: 1;
    }
    .appeal-record {
      color: #d8182d;
      font-size: 13px;
    }
  }
  .logo-version {
    padding-top: 92px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
    }
    .version {
      font-size: 17px;
      padding-top: 6px;
      color: #3a3a3a;
    }
  }
  // .setting-content {
  //   padding: 20px 37px 0 37px;
  //   margin-bottom: 20px;
  //   .setting-list {
  //     .setting-item {
  //       display: flex;
  //       justify-content: space-between;
  //       align-items: center;
  //       padding-bottom: 20px;
  //       .icon {
  //         color: #949497;
  //         opacity: 0.5;
  //         font-size: 15px;
  //       }
  //       .setting-msg {
  //         color: #3a3a3a;
  //         font-size: 15px;
  //       }
  //     }
  //   }
  // }
}
</style>
