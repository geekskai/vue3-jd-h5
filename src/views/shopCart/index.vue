<template>
  <div class="container">购物车</div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {
    console.log("======cart=>");
  },
  mounted() {
    this.$eventBus.$emit("changeTag", 2);
  }
};
</script>

<style scoped lang="scss">
</style>
