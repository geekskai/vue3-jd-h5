<template>
  <div class="love-shop" id="love-shop">
    <header class="page-header">
      <span class="return-btn" @click="$router.go(-1)">
        <svg-icon icon-class="transparent-btn"></svg-icon>
      </span>
      <div class="header-content">爱逛好店</div>
      <span class="share-btn" @click="show = true">
        <svg-icon icon-class="share-btn"></svg-icon>
      </span>
    </header>

    <section class="page-content">
      <van-tabs
        v-model="active"
        swipeable
        color="#fff"
        :swipe-threshold="5"
        title-inactive-color="#FEFFFE"
        title-active-color="#FEFFFE"
        background="transparent"
        :border="false"
        animated
      >
        <van-tab v-for="index in tabList" :title="index" :key="index">
          <section class="recommended-shop">
            <ul class="shop-content">
              <li class="shop-item">
                <div class="item-header">
                  <img
                    class="store-logo"
                    src="../../assets/image/home/store-logo.png"
                  />
                  <div class="item-text">
                    <p>品炫旗舰店</p>
                    <i>正品大牌 产家直营</i>
                  </div>
                  <router-link to="/storeDetail">
                    <span class="into-store">进店</span>
                  </router-link>
                </div>
                <div class="item-iamgs">
                  <div class="left-imags">
                    <img src="../../assets/image/premiumRanking/demo2.png" />
                  </div>
                  <div class="right-imags">
                    <img src="../../assets/image/home/store2.png" />
                    <img src="../../assets/image/home/store3.png" />
                  </div>
                </div>
              </li>
              <li class="shop-item">
                <div class="item-header">
                  <img
                    class="store-logo"
                    src="../../assets/image/home/store-logo2.png"
                  />
                  <div class="item-text">
                    <p>北欧家居旗舰店</p>
                    <i>正品大牌 产家直营</i>
                  </div>
                  <router-link to="/storeDetail">
                    <span class="into-store">进店</span>
                  </router-link>
                </div>
                <div class="item-iamgs">
                  <div class="left-imags">
                    <img src="../../assets/image/premiumRanking/demo3.png" />
                  </div>
                  <div class="right-imags">
                    <img src="../../assets/image/home/store5.png" />
                    <img src="../../assets/image/home/store6.png" />
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </van-tab>
      </van-tabs>
    </section>

    <van-popup
      v-model="show"
      round
      :overlay="false"
      get-container="#premium-ranking"
      position="bottom"
      :style="{ height: '47%' }"
    >
      <article>
        <van-divider
          :style="{
            borderColor: 'rgb(58, 58, 58,.14)',
            color: '#3A3A3A',
            padding: '0 10px',
            margin: '15px 0'
          }"
          >分享到</van-divider
        >
        <ul class="share-list">
          <li class="share-item">
            <svg-icon icon-class="we-char"></svg-icon>
            <span class="share-text">微信好友</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="we-chat-friends"></svg-icon>
            <span class="share-text">朋友圈</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="we-blog"></svg-icon>
            <span class="share-text">新浪微博</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="qq-icon"></svg-icon>
            <span class="share-text">QQ好友</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="qq-space"></svg-icon>
            <span class="share-text">QQ空间</span>
          </li>
          <li class="share-item">
            <svg-icon icon-class="copy-link"></svg-icon>
            <span class="share-text">复制链接</span>
          </li>
        </ul>
        <li class="cancle-btn" @click="show = false">
          <b class="cancle-text">取消</b>
        </li>
      </article>
    </van-popup>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "LoveShop", // 爱逛好店
  setup() {
    const active = ref("1");
    const show = ref(false);
    return {
      active,
      show,
      tabList: ["链猫好店", "有趣好店", "品牌店", "发现好店"]
    };
  }
};
</script>

<style scoped lang="scss">
.love-shop {
  background-color: #efefef;
  min-height: 812px;
  padding: 0 16px;
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(#fe4f70, #efefef);
    height: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    .return-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      color: #fefffe;
      font-weight: 600;
      flex: 1;
    }
    .share-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      .svg-icon {
        width: 20px;
        height: 20px;
      }
    }
  }
  .page-content {
    margin-top: 60px;
    .recommended-shop {
      .shop-content {
        padding-top: 10px;
        .shop-item {
          background-color: #fff;
          box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 10px;
          .item-iamgs {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-bottom: 5px;
            padding-left: 5px;

            .left-imags {
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 8px;
              padding-right: 12px;
              img {
                width: 205px;
                height: 212px;
              }
            }
            .right-imags {
              img {
                display: inline-block;
                width: 100px;
                height: 100px;
                border-radius: 8px;
                // margin-right: 7px;
              }
            }
          }
          .item-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            .into-store {
              width: 60px;
              height: 26px;
              border-radius: 2px;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #d8172c;
              color: #fff;
              font-size: 11px;
            }
            .item-text {
              flex: 1;
              height: 37px;
              padding-left: 5px;
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              flex-direction: column;
              p {
                font-size: 14px;
                color: #3a3a3a;
                font-weight: 600;
              }
              i {
                font-size: 11px;
                color: #949497;
              }
            }
            .store-logo {
              width: 37px;
              height: 37px;
            }
          }
        }
      }
    }
  }
  .share-list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 10px;
    .share-item {
      padding: 10px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
      color: #3a3a3a;
      .svg-icon {
        width: 40px;
        height: 40px;
      }
      .share-text {
        padding-top: 6px;
      }
    }
  }
  .cancle-btn {
    padding-top: 20px;
    text-align: center;
    color: #3a3a3a;
    font-size: 14px;
    .cancle-text {
      display: inline-block;
      width: 290px;
      font-size: 14px;
      font-weight: 600;
      padding-top: 13px;
      border: 0 solid #3a3a3a1a;
      border-top-width: 1px;
    }
  }
}
</style>
