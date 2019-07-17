<template>
  <div class="login">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="close-popup"></svg-icon>
      </span>
    </header>
    <section>
      <van-cell-group>
        <van-field
          v-model="username"
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />

        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
      </van-cell-group>
    </section>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  padding: 0 16px;
  background: linear-gradient(#fdfdfd, #ffecf0);
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 44px;
  }
}
</style>
