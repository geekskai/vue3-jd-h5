<template>
  <div class="register">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="gray-btn"></svg-icon>
      </span>
      <router-link class="appeal-record" to="/order/appealRecord" tag="span">邮箱注册</router-link>
    </header>
    <section>
      <span>请输入手机号</span>
      <van-cell-group>
        <van-field v-model="sms" label-width="150" clearable placeholder="请输入短信验证码">
          <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </section>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      sms: "",
      value: "",
      showPicker: false,
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"]
    };
  },
  created() {},
  methods: {
    onConfirm() {}
  }
};
</script>

<style scoped lang="scss">
.register {
  height: 100%;
  padding: 0 16px;
  background: linear-gradient(#fdfdfd, #ffecf0);
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 44px;
    .appeal-record {
      color: #d8182d;
      font-size: 13px;
    }
  }
}
</style>
