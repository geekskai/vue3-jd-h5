<!--
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2019-09-20 14:07:34
 * @LastEditors: gankai
 * @LastEditTime: 2020-03-22 19:58:36
 * @FilePath: /vue-jd-h5/src/views/merchantsSettled/waitingReviewResults.vue
 -->
<template>
  <div class="waiting-review-results">
     <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <i>商家入驻</i>
    </cm-header>
    <section class="apply-content">
      <ul class="address-list">
        <li>
          <svg-icon class="green-ok" icon-class="green-ok"></svg-icon>

          <span class="thanks-text">感谢您的配合！</span>
        </li>
        <li class="reault-text">
          <p>3个工作日内审核结果会以短信形式反馈到</p>
          <p>您的账号，请注意查收</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'waitingReviewResults',
  data () {
    return {
      applyInfo: {}
    }
  },
  created () {}
}
</script>

<style scoped lang="scss">
.waiting-review-results {
  height: 100%;
  padding: 0 16px;
  padding-bottom: 80px;
  .apply-content {
    .address-list {
      margin-top: 20px;
      padding: 60px 20px;
      height: 100%;
      background-color: #fff;
      border-radius: 8px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      color: #3a3a3a;
      .green-ok {
        width: 34px;
        height: 34px;
      }
      .thanks-text {
        padding-left: 10px;
        font-size: 17px;
      }
      .reault-text {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 14px;
        padding-top: 20px;
      }
    }
  }
}
</style>
