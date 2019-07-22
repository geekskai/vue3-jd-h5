<template>
  <div class="new-product-launch">
    <header class="page-header">
      <span class="green-btn" @click="$router.go(-1)">
        <svg-icon icon-class="transparent-btn"></svg-icon>
      </span>
      <div class="header-content">新品首发</div>
      <span class="share-btn">
        <svg-icon icon-class="share-btn-black"></svg-icon>
      </span>
    </header>
  </div>
</template>

<script>
export default {
  name: "newProductLaunch", // 新品首发
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.new-product-launch {
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    // background: linear-gradient(#874bfe, #efefef);
    height: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    .return-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      color: #3A3A3A;
      font-weight: 600;
      flex: 1;
    }
    .share-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      .svg-icon {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
