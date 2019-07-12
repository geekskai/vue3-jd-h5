<template>
  <div class="add-address">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">新增所在地区</div>
    </header>
    <section>
        
    </section>
  </div>
</template>

<script>
export default {
  name: "addAddress",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.add-address {
  height: 100%;
  padding: 0 16px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .btn-left {
      background-color: white;
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
      color: #3a3a3a;
      flex: 1;
    }
  }
}
</style>
