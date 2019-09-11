<template>
  <div class="person-info" id="person-info">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <i>个人资料</i>
    </cm-header>
    <section class="setting-content">
      <ul class="setting-list">
        <li class="setting-item set-header-img">
          <van-field label="头像" disabled>
            <van-uploader slot="input" :after-read="afterRead">
              <img :src="userInfo.headImageUrl" class="header-image" />
            </van-uploader>
          </van-field>
        </li>
        <li @click="handlePhone" class="setting-item">
          <van-field label="昵称" disabled :placeholder="userInfo.nickName" />
          <van-icon class="icon" name="arrow" />
        </li>
        <li class="setting-item" @click="handleEditPhoneNumber">
          <van-field label="手机号" disabled :placeholder="userInfo.mobile" />
          <van-icon class="icon" name="arrow" />
        </li>
        <li @click="handleEditEmail" class="setting-item">
          <van-field label="邮箱号" disabled v-if="userInfo.email" :placeholder="userInfo.email" />
          <van-field label="邮箱号" disabled placeholder="未设置" v-else />
          <van-icon class="icon" name="arrow" />
        </li>
        <li class="setting-item" @click="handleEditPassword">
          <!-- <router-link  to="/mine/changePassword" tag="li"> -->
          <van-field label="修改密码" disabled placeholder />
          <van-icon class="icon" name="arrow" />
          <!-- </router-link> -->
        </li>
      </ul>
    </section>

    <van-popup v-model="show" position="bottom" get-container="#person-info">
      <div class="popup-content">
        <div class="popup-title">
          <span>填写昵称</span>
        </div>
        <van-cell-group>
          <van-field clearable v-model="userInfo.nickName" placeholder="请输入" />
        </van-cell-group>
      </div>

      <div class="popup-btns">
        <button @click="show = false" class="popup-btn">
          <span>取消</span>
        </button>
        <button @click="handleConfirmNickName" class="popup-btn right-btn">
          <span>确认</span>
        </button>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "personInfo",
  data() {
    return {
      show: false,
      userInfo: {
        areaCode: "86"
      },
      name: ""
    };
  },
  created() {
    this.initData();
  },
  methods: {
    afterRead(res) {
      let formData = new FormData();
      formData.append("file", res.file);
      this.$http.post(`/api/user/upload/image`, formData).then(response => {
        this.userInfo.headImageUrl = response.data.content.imageUrl;
      });
    },
    handleEditPassword() {
      this.$router.push({
        path: `/mine/changePassword`,
        query: this.userInfo
      });
    },
    handleEditEmail() {
      this.$router.push({
        path: `/mine/settingMail`,
        query: this.userInfo
      });
    },
    handleEditPhoneNumber() {
      this.$router.push({
        path: `/mine/phoneNumberSetting`,
        query: this.userInfo
      });
    },
    initData() {
      this.$http.get(`/api/user/getUserInfo`).then(response => {
        this.userInfo = response.data.content;
      });
    },
    handleConfirmNickName() {
      this.$http
        .post(`/api/user/updateUserNickname`, {
          nickname: this.userInfo.nickName
        })
        .then(response => {
          this.show = false;
          this.$toast({
            mask: false,
            duration: 1000,
            message: response.data.msg
          });
        });
    },
    handlePhone() {
      this.show = true;
    }
  }
};
</script>

<style scoped lang="scss">
.person-info {
  height: 100%;
  padding: 0 16px;
  .setting-content {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
    padding: 20px 20px 0 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 8px;
    .setting-list {
      .setting-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 20px;
        /deep/ .van-field__control {
          text-align: right;
        }
        /deep/ .van-cell {
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        /deep/ .van-cell::after {
          border: none;
        }
        .header-image {
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }
        .icon {
          color: #949497;
          opacity: 0.5;
          font-size: 15px;
        }
        .setting-msg {
          color: #3a3a3a;
          font-size: 15px;
        }
      }
      .set-header-img {
        padding-bottom: 5px;
      }
    }
  }
  .popup-content {
    padding: 16px;
    /deep/ .van-field {
      border: 1px solid #949497;
      border-radius: 2px;
    }
    .popup-title {
      text-align: center;
      color: #3a3a3a;
      font-weight: 600;
      font-size: 14px;
      padding: 20px;
    }
  }
  .popup-btns {
    display: flex;
    border: 0 solid #ebedf0;
    border-top-width: 1px;
    justify-content: space-around;
    position: relative;
    font-size: 15px;
    .popup-btn {
      background-color: #fff;
      width: 50%;
      font-size: 15px;
      color: #3a3a3a;
      line-height: 50px;
    }
    .right-btn {
      border: 0 solid #ebedf0;
      border-left-width: 1px;
      span {
        color: #ec3924;
        font-size: 15px;
      }
    }
  }
}
</style>
