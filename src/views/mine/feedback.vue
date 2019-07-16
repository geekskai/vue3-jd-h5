<template>
  <div class="feedback">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">问题反馈</div>
    </header>
    <section class="mine-content">
      <ul class="options-list">
        <li class="item-header">
          <span>选择类型</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "feedback",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style scoped lang="scss">
// background: url('../../assets/image/back-show.png') no-repeat center center;
// background-size:100% 100%;
.feedback {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 45px;
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
      font-weight: 600;
      color: #3a3a3a;
      flex: 1;
    }
    .appeal-record {
      color: #D8182D;
      font-size: 13px;
    }
  }
  .mine-content {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    padding: 0 16px;
    margin-top: 18px;
    .options-list {
      padding-top: 20px;
      .item-header {
        font-size: 20px;
        margin-bottom: 16px;
      }
    }
  }
}
</style>
