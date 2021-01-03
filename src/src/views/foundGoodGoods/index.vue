<template>
  <div class="found-good-goods" id="found-good-goods">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" alt />
      </span>
      <div class="header-content">发现好货</div>
      <div class="option-btns">
        <router-link to="/search" class="search-btn" tag="span">
          <svg-icon class="search-icon" icon-class="search"></svg-icon>
        </router-link>
        <span class="therr-point-icon" @click="handleMeun">
          <svg-icon icon-class="therr-point"></svg-icon>
        </span>
      </div>
    </header>
    <drop-list :config="configData" ref="droplist"></drop-list>
    <ul class="page-content">
      <van-tabs
        v-model="active"
        swipeable
        color="#fff"
        animated
        :swipe-threshold="5"
        title-inactive-color="#FEFFFE"
        title-active-color="#FEFFFE"
        background="transparent"
        :border="false"
      >
        <van-tab v-for="index in tabList" :title="index" :key="index">
          <ul class="list-item">
            <li class="card-item">
              <div class="card-img">
                <img src="../../assets/image/premiumRanking/demo1.png" />
              </div>
              <ul class="card-info">
                <li class="info-top">
                  <div class="item-title">
                    高解析度无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪
                    头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳
                  </div>
                  <span class="item-desc"
                    >轻量化设计，重量轻到超乎你的想象，让你行车过程更加…</span
                  >
                </li>
                <li class="info-buttom">
                  <p class="item-price">52人关注</p>
                  <span class="item-attention" @click="isLike = !isLike">
                    <svg-icon v-if="isLike" icon-class="heart-full"></svg-icon>
                    <svg-icon v-else icon-class="heart-null"></svg-icon>
                  </span>
                </li>
              </ul>
            </li>
            <li class="card-item">
              <div class="card-img">
                <img src="../../assets/image/premiumRanking/demo1.png" />
              </div>
              <ul class="card-info">
                <li class="info-top">
                  <div class="item-title">
                    高解析度无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪
                    头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳
                  </div>
                  <span class="item-desc"
                    >轻量化设计，重量轻到超乎你的想象，让你行车过程更加…</span
                  >
                </li>
                <li class="info-buttom">
                  <p class="item-price">922人关注</p>
                  <span class="item-attention" @click="isLike = !isLike">
                    <svg-icon v-if="isLike" icon-class="heart-full"></svg-icon>
                    <svg-icon v-else icon-class="heart-null"></svg-icon>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </ul>
    <van-popup
      v-model="show"
      round
      :overlay="false"
      get-container="#found-good-goods"
      position="bottom"
      :style="{ height: '50%' }"
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
import { useRouter } from "vue-router";
export default {
  name: "FoundGoodGoods", // 发现好货
  setup() {
    const $router = useRouter();
    const active = ref("1");
    const droplist = ref(null);
    const show = ref(false);
    const isLike = ref(false);

    const handleMyFocus = () => {
      $router.push("/myFocus");
    };

    const handleMeun = () => {
      droplist.value.show();
    };

    const handleShare = () => {
      show.value = true;
    };

    const hidden = () => {
      droplist.value.hidden();
    };

    return {
      handleMeun,
      active,
      show,
      $router,
      isLike,
      droplist,
      configData: {
        position: {
          top: "60px",
          right: "8px",
          bottom: "",
          left: ""
        },
        width: "33%",
        list: [
          { text: "分享", icon: "share-btn-black", action: this.handleShare },
          {
            text: "我的关注",
            icon: "heart-null-black",
            action: handleMyFocus
          }
        ]
      },
      tabList: ["推荐", "生活家", "数码控", "手机控", "时髦精", "型男精"]
    };
  }
};
</script>

<style scoped lang="scss">
.found-good-goods {
  background-color: #efefef;
  min-height: 812px;
  padding: 0 16px;
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(#d8182d, #efeff4);
    height: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    .btn-left {
      position: fixed;
      left: 16px;
      top: 15px;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      color: #ffffff;
      font-weight: 600;
      flex: 1;
    }
    .option-btns {
      position: fixed;
      right: 16px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .therr-point-icon {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .search-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 20px;
        .svg-icon {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .page-content {
    margin-top: 60px;
    .list-item {
      .card-item {
        margin: 20px auto;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 14px;
        padding: 14px;
        .card-img {
          width: 110px;
          height: 110px;
        }
        .card-info {
          display: flex;
          height: 110px;
          justify-content: space-between;
          flex-direction: column;
          align-items: flex-start;
          padding-left: 15px;
          .info-top {
            .item-title {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 14px;
              color: #3a3a3a;
              font-weight: 600;
              width: 200px;
            }
            .item-desc {
              font-size: 11px;
              color: #3a3a3a;
              opacity: 0.6;
            }
          }
          .info-buttom {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .item-price {
              font-size: 11px;
              color: #fe4f70;
              font-weight: 600;
              padding-bottom: 2px;
              margin-right: 10px;
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
