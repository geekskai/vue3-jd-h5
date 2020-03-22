<template>
  <div class="set-info">
     <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <i>新增所在地区</i>
    </cm-header>
  </div>
</template>

<script>
export default {
  name: 'setInfo',
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>

<style scoped lang="scss">
.set-info {
  height: 100%;
  padding: 0 16px;
}
</style>
