<template>
  <div class="index">
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.index {
  background-color: rgba(239, 239, 244, 1);
}
</style>
