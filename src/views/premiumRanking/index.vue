<template>
  <div class="premium-ranking" id="premium-ranking">
    <header class="page-header">
      <span class="return-btn" @click="$router.go(-1)">
        <svg-icon icon-class="transparent-btn"></svg-icon>
      </span>
      <div class="header-content">优品排行</div>
      <span class="share-btn" @click="show = true">
        <svg-icon icon-class="share-btn"></svg-icon>
      </span>
    </header>

    <section class="page-content">
      <van-tabs
        v-model="active"
        swipeable
        color="#fff"
        title-inactive-color="#FEFFFE"
        title-active-color="#FEFFFE"
        background="transparent"
        :border="false"
        animated
      >
        <van-tab v-for="index in tabList" :title="index" :key="index">
          <ul class="list-item">
            <li
              class="card-item"
              v-for="(item, index) in listItems"
              :key="index"
            >
              <span class="flag-box">
                <svg-icon icon-class="red-flag"></svg-icon>
                <i class="flag-number">{{ index + 1 }}</i>
              </span>
              <div class="card-img">
                <img :src="item.img" />
              </div>
              <ul class="card-info">
                <li class="info-top">
                  <div class="item-title">{{ item.title }}</div>
                  <span class="item-desc">{{ item.desc }}</span>
                </li>
                <li>
                  <p class="item-price">{{ item.price }}</p>
                  <span class="item-hot">
                    <span class="hot-text">热卖指数</span>
                    <span class="hot-index">
                      <i>{{ item.hotIndex }}</i>
                    </span>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
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
export default {
  name: "PremiumRanking", // 优品排行
  data() {
    return {
      active: "1",
      show: false,
      listItems: [
        {
          img: require("../../assets/image/premiumRanking/demo0.png"),
          title:
            "高解析度无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳",
          desc: "正品大牌 产家直营",
          price: "¥1988",
          hotIndex: "99"
        },
        {
          img: require("../../assets/image/premiumRanking/demo0.png"),
          title:
            "高解析度无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳",
          desc: "正品大牌 产家直营",
          price: "¥1988",
          hotIndex: "99"
        },
        {
          img: require("../../assets/image/premiumRanking/demo0.png"),
          title:
            "高解析度无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳",
          desc: "正品大牌 产家直营",
          price: "¥1988",
          hotIndex: "99"
        },
        {
          img: require("../../assets/image/premiumRanking/demo0.png"),
          title:
            "高解析度无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳",
          desc: "正品大牌 产家直营",
          price: "¥1988",
          hotIndex: "99"
        }
      ],
      tabList: ["3C数码", "进口食品", "生活电器", "家居软饰", "平板电视"]
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.premium-ranking {
  background-color: #efefef;
  min-height: 812px;
  padding: 0 16px;
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(#874bfe, #efefef);
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
    .list-item {
      .card-item {
        margin: 20px auto;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 14px;
        padding: 14px;
        .flag-box {
          margin-top: -14px;
          position: absolute;
          .flag-number {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 8px;
            right: 0;
            margin: 0 auto;
            color: #fff;
            font-size: 11px;
          }
        }
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
              color: #d8182d;
            }
          }
          .item-price {
            font-size: 17px;
            color: #3a3a3a;
            font-weight: 600;
            padding-bottom: 2px;
          }
          .item-hot {
            border: 1px solid #d8182d;
            border-radius: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(to right, #d8182d 64%, #fff 36%);
            .hot-text {
              display: inline-block;
              line-height: 15px;
              width: 54px;
              font-size: 11px;
              text-align: center;
              height: 16px;
              color: #fff;
              border-radius: 2px;
            }

            .hot-index {
              width: 30px;
              font-size: 11px;
              text-align: center;
              display: inline-block;
              color: #d8182d;
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
