<template>
<div>
  我的
</div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
     
    };
  },
  created() {},
  computed: {
   
  },
  mounted() {
    
    this.$eventBus.$emit("changeTag", 3);
  },
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
