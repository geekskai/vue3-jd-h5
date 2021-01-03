<template>
  <div class="special-spike">
    <header class="page-header">
      <span class="return-btn" @click="$router.go(-1)">
        <svg-icon icon-class="transparent-btn"></svg-icon>
      </span>
      <div class="header-content">特价秒杀</div>
      <span class="share-btn">
        <svg-icon icon-class="bell-icon"></svg-icon>
      </span>
    </header>

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
          <section class="header-card">
            <div class="card-top">
              <div class="top-left">
                <span class="special-spike-text">特价秒杀 |</span>
                <i class="low-sale">超低价特卖</i>
              </div>
              <div class="top-right">
                <label class="only-left">仅剩</label>
                <van-count-down :time="timeData" class="time-count-down">
                  <template v-slot="timeData">
                    <span class="time-item" v-if="timeData.hours < 10">{{
                      "0" + timeData.hours
                    }}</span>
                    <span class="time-item" v-else>{{ timeData.hours }}</span>
                    <i class="tow-point">:</i>
                    <span class="time-item" v-if="timeData.minutes < 10">{{
                      "0" + timeData.minutes
                    }}</span>
                    <span class="time-item" v-else>{{ timeData.minutes }}</span>
                    <i class="tow-point">:</i>
                    <span class="time-item" v-if="timeData.seconds < 10">{{
                      "0" + timeData.seconds
                    }}</span>
                    <span class="time-item" v-else>{{ timeData.seconds }}</span>
                  </template>
                </van-count-down>
              </div>
            </div>

            <ul class="card-content">
              <li class="item-content">
                <img
                  class="item-img"
                  src="../../assets/image/premiumRanking/demo0.png"
                />
                <svg-icon icon-class="processbar"></svg-icon>
                <div class="prices-content">
                  <span class="real-price">¥988</span>
                  <del>¥1199</del>
                </div>
              </li>
              <li class="item-content">
                <img
                  class="item-img"
                  src="../../assets/image/premiumRanking/demo0.png"
                />
                <svg-icon icon-class="processbar"></svg-icon>
                <div class="prices-content">
                  <span class="real-price">¥988</span>
                  <del>¥1199</del>
                </div>
              </li>
              <li class="item-content">
                <img
                  class="item-img"
                  src="../../assets/image/premiumRanking/demo0.png"
                />
                <svg-icon icon-class="processbar"></svg-icon>
                <div class="prices-content">
                  <span class="real-price">¥988</span>
                  <del>¥1199</del>
                </div>
              </li>
            </ul>
          </section>

          <ul class="list-item">
            <li class="card-item">
              <div class="card-img">
                <img src="../../assets/image/premiumRanking/demo0.png" />
              </div>
              <ul class="card-info">
                <li class="info-top">
                  <div class="item-title">
                    高解析度无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪
                    头戴耳无线蓝牙降噪 头戴耳无线蓝牙降噪 头戴耳
                  </div>
                  <span class="item-desc">正品大牌 产家直营</span>
                </li>
                <li>
                  <p class="item-price">¥1988</p>
                  <span class="item-hot">
                    <span class="hot-text">热卖指数</span>
                    <span class="hot-index">
                      <i>99</i>
                    </span>
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
                  <span class="item-desc">正品大牌 产家直营</span>
                </li>
                <li>
                  <p class="item-price">¥1988</p>
                  <span class="item-hot">
                    <span class="hot-text">热卖指数</span>
                    <span class="hot-index">
                      <i>99</i>
                    </span>
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
                  <span class="item-desc">正品大牌 产家直营</span>
                </li>
                <li>
                  <p class="item-price">¥1988</p>
                  <span class="item-hot">
                    <span class="hot-text">热卖指数</span>
                    <span class="hot-index">
                      <i>99</i>
                    </span>
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
                  <span class="item-desc">正品大牌 产家直营</span>
                </li>
                <li>
                  <p class="item-price">¥1988</p>
                  <span class="item-hot">
                    <span class="hot-text">热卖指数</span>
                    <span class="hot-index">
                      <i>99</i>
                    </span>
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
                  <span class="item-desc">正品大牌 产家直营</span>
                </li>
                <li>
                  <p class="item-price">¥1988</p>
                  <span class="item-hot">
                    <span class="hot-text">热卖指数</span>
                    <span class="hot-index">
                      <i>99</i>
                    </span>
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
                  <span class="item-desc">正品大牌 产家直营</span>
                </li>
                <li>
                  <p class="item-price">¥1988</p>
                  <span class="item-hot">
                    <span class="hot-text">热卖指数</span>
                    <span class="hot-index">
                      <i>99</i>
                    </span>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SpecialSpike", // 特价秒杀
  data() {
    return {
      active: "1",
      timeData: 36000000,
      tabList: ["秒杀", "疯抢", "生活电器", "家居软饰", "平板电视"]
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.special-spike {
  background-color: #efefef;
  min-height: 812px;
  padding: 0 16px;
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: linear-gradient(#ff9351, #efefef);
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
    .header-card {
      margin-top: 16px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
      .card-top {
        padding: 10px 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #ee2a2a;
        .top-left {
          .special-spike-text {
            font-size: 17px;
          }
          .low-sale {
            font-size: 11px;
          }
        }
        .top-right {
          font-size: 14px; // TODO
          display: flex;
          justify-content: center;
          align-items: center;
          .only-left {
            font-size: 11px;
            padding-right: 5px;
          }
          .time-count-down {
            display: flex;
            justify-content: center;
            align-items: center;
            .time-item {
              display: inline-block;
              text-align: center;
              font-size: 11px;
              width: 17px;
              height: 17px;
              background-color: #3a3a3a;
              border-radius: 2px;
              color: #fff;
            }
            .tow-point {
              display: inline-block;
              width: 10px;
              height: 17px;
              text-align: center;
              line-height: 17px;
            }
          }
        }
      }
      .card-content {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        .item-content {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          padding-left: 5px;
          .item-img {
            width: 100px;
            height: 105px;
            display: inline-block;
          }
          .svg-icon {
            width: 70px;
            height: 6px;
            padding: 10px 0;
          }
          .prices-content {
            font-size: 11px;
            .real-price {
              color: #d8182d;
              font-weight: 600;
              padding-right: 6px;
            }
          }
        }
      }
    }
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
}
</style>
