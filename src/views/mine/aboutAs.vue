<template>
  <div class="about-as">
     <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="gray-btn"></svg-icon>
      </span>
      <i>关于我们</i>
    </cm-header>
    <div class="logo-version">
      <img src="../../assets/image/setting/logo.png" />
      <h6>Chain Mall</h6>
      <span class="version">版本1.0.1</span>
    </div>
    <!-- <section class="setting-content">
      <ul class="setting-list">
        <li class="setting-item">
          <span class="setting-msg">服务协议</span>
          <van-icon class="icon" name="arrow" />
        </li>
        <router-link tag="li" class="setting-item" to="/setting/aboutAs">
          <span class="setting-msg">隐私条款</span>
          <van-icon class="icon" name="arrow" />
        </router-link>
      </ul>
    </section>-->
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
