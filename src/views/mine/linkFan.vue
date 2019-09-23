<template>
  <div class="link-fan">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" />
      </span>
      <i>链接粉丝</i>
    </cm-header>
    <li class="notice-message">
      <svg-icon class="notice-wallet-icon" icon-class="notice-wallet"></svg-icon>
      <label class="wallet-total">我的链接：{{myFansNum}}</label>
    </li>
    <ul class="card-box">
      <li class="card-item" v-for="(item,index) in funsList" :key="index">
        <img v-if="item.headImageUrl" class="user-img" :src="item.headImageUrl" />
        <img v-else class="user-img" src="../../assets/icons/mall-log.png" />
        <center class="card-center">
          <i class="user-name">{{item.nickName}}</i>
          <small class="funs-type">我的链接</small>
        </center>
        <div class="node-type">
          <i>消费节点</i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "linkFan",
  data() {
    return {
      communityFunsNum: 0,
      myFansNum: 0,
      funsList: []
    };
  },
  created() {
    this.$http.get(`/api/user/getMyFuns`).then(response => {
      console.log("=====content==>", response.data.content);
      this.funsList = response.data.content.funsList;
      this.myFansNum = response.data.content.myFansNum;
      this.communityFunsNum = response.data.content.communityFunsNum;
    });
  },
  methods: {}
};
</script>

<style scoped lang="scss">
.link-fan {
  .notice-message {
    display: flex;
    padding: 0 16px;
    justify-content: flex-start;
    align-items: center;
    color: #3a3a3a;
    font-size: 11px;
    .wallet-total {
      padding-left: 5px;
    }
    .wallet-value {
      padding-left: 10px;
    }
    .notice-wallet-icon {
      width: 20px;
      height: 20px;
    }
  }
  .card-box {
    padding: 16px;
    .card-item {
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      font-size: 11px;
      .user-img {
        width: 37px;
        height: 37px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .card-center {
        display: flex;
        margin-right: auto;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        flex-direction: column;
        .user-name {
          font-size: 14px;
        }
        .funs-type {
          font-size: 11px;
        }
      }
      .node-type {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        width: 70px;
        height: 20px;
        background: url("../../assets/icons/yellow-bac.png") no-repeat center
          center;
        background-size: 100% 100%;
      }
    }
  }
}
</style>
