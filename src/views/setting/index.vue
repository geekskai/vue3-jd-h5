<template>
  <div class="setting-page">
    <header class="page-header">
      <van-icon name="arrow-left" @click="$router.go(-1)" />
      <div class="header-content">设置</div>
    </header>

    <section class="setting-content">
      <ul class="setting-list">
        <li class="setting-item">
          <span class="setting-msg">消息提醒</span>
          <van-switch v-model="checked" active-color="#FE4F70" size="20px" />
        </li>
        <li class="setting-item">
          <span class="setting-msg">清除缓存</span>
          <van-icon class="icon" name="arrow" />
        </li>
        <li class="setting-item">
          <span class="setting-msg">关于我们</span>
           <van-icon class="icon" name="arrow" />
        </li>
      </ul>
    </section>
    <van-button plain size="large" type="danger">退出登录</van-button>
  </div>
</template>

<script>
export default {
  name: "Setting",

  components: {},
  props: {},
  data() {
    return {
      checked: false
    };
  },
  methods: {},
  computed: {},
  created() {},
  mounted() {},
  watch: {}
};
</script>

<style scoped lang="scss">
.setting-page {
  padding: 0 16px;
  height: 100vh;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .header-content {
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      flex: 1;
    }
  }
  .setting-content {
    padding: 20px 20px 0 20px;
    margin-bottom: 20px;
    background-color: #FFF;
    border-radius: 8px;
    .setting-list {
      .setting-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        .icon{
          color: #949497;
          opacity: 0.5;
          font-size: 15px;
        }
        .setting-msg{
          color: #3A3A3A;
          font-size: 15px;
        }
      }
    }
  }
  /deep/ .van-button--large {
    height: 44px;
    line-height: 44px;
  }
}
</style>
