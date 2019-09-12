<template>
  <div class="header-box">
    <div class="header-left">
      <slot name="left"></slot>
    </div>
    <div class="header-content">
      <!-- <slot :user="user">{{user.lastName}}</slot> -->
      <slot></slot>
    </div>
    <div class="header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CmHeader",
  data() {
    return {
      user: {
        firstName: "gan",
        lastName: "kai"
      }
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.header-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  .header-left {
    position: fixed;
    top: 10px;
    left: 16px;
    z-index: 100;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .header-content {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    color: #3a3a3a;
    flex: 1;
  }
  .header-right {
    color: #ec3924;
    font-size: 13px;
  }
}
</style>
