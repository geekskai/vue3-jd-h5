<template>
  <div class="fullAll">我的页面</div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  computed: {},
  mounted() {
    this.$eventBus.$emit("changeTag", 3);
  },
  methods: {}
};
</script>

<style scoped lang="scss">
$red: red;
.fullAlls {
  color: $red;
}
</style>
