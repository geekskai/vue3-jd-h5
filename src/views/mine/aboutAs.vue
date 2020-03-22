<template>
  <div class="about-as">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="gray-btn"></svg-icon>
      </span>
      <i>关于我们</i>
    </cm-header>
    <div class="logo-version">
      <img class="logo-img" src="../../assets/image/setting/logo.png" />
      <h6>Chain Mall</h6>
      <span class="version">版本1.0.1</span>
    </div>
    <footer class="setting-content">
      <ul class="setting-list">
        <router-link tag="li" class="setting-item" to="/setting/aboutAs">
          <span class="setting-msg">服务协议</span>
        </router-link>
        <i class="dividing-line">|</i>
        <router-link tag="li" class="setting-item" to="/setting/aboutAs">
          <span class="setting-msg">隐私条款</span>
        </router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'aboutAs',
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.about-as {
  min-height: 100vh;
  background-color: #fff;
  .logo-version {
    min-height: calc(100% - 56px);
    padding-top: 92px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .logo-img {
      width: 70px;
      height: 70px;
    }
    .version {
      font-size: 17px;
      padding-top: 6px;
      color: #3a3a3a;
    }
  }
  .setting-content {
    color: #949497;
    font-size: 17px;
    margin: -100px auto 0 auto;
    .dividing-line {
      padding: 30px;
    }
    .setting-list {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
