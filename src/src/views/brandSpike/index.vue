<template>
  <div class="brand-spike">
    <header class="page-header">
      <span class="return-btn" @click="$router.go(-1)">
        <svg-icon icon-class="transparent-btn"></svg-icon>
      </span>
      <div class="header-content">品牌秒杀</div>
      <span class="share-btn">
        <svg-icon icon-class="bell-icon-blak"></svg-icon>
      </span>
    </header>
    <ul class="page-content">
      <van-tabs
        v-model="active"
        swipeable
        color="#D8182D"
        animated
        :swipe-threshold="5"
        title-inactive-color="#3A3A3A"
        title-active-color="#D8182D"
        background="transparent"
        :border="false"
      >
        <van-tab v-for="index in tabList" :title="index" :key="index">
          <section class="header-card">
            <ul class="card-top">
              <li>
                <b>音乐耳机专场</b>
              </li>
              <li class="item-link">
                <small class="small-text">探索声音的极致</small>
                <svg-icon icon-class="mini-right-btn"></svg-icon>
              </li>
              <li class="only-left">
                <label for="countdown">仅剩</label>
                <div id="countdown">
                  <span>05</span>
                  <span>50</span>
                  <span>45</span>
                </div>
              </li>
            </ul>
            <ul class="card-content">
              <li class="item-content">
                <img
                  class="item-img"
                  src="../../assets/image/product/err0.png"
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
                  src="../../assets/image/product/err1.png"
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
                  src="../../assets/image/product/err1.png"
                />
                <svg-icon icon-class="processbar"></svg-icon>
                <div class="prices-content">
                  <span class="real-price">¥988</span>
                  <del>¥1199</del>
                </div>
              </li>
            </ul>
          </section>
          <section class="header-card-1">
            <ul class="card-top">
              <li>
                <b>机械手表专场</b>
              </li>
              <li class="item-link">
                <small class="small-text">瑞士原装 传统工艺</small>
                <svg-icon icon-class="mini-right-btn"></svg-icon>
              </li>
              <li class="only-left">
                <label for="countdown">仅剩</label>
                <div id="countdown">
                  <span>05</span>
                  <span>50</span>
                  <span>45</span>
                </div>
              </li>
            </ul>
            <ul class="card-content">
              <li class="item-content">
                <img
                  class="item-img"
                  src="../../assets/image/product/watch0.png"
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
                  src="../../assets/image/product/watch1.png"
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
                  src="../../assets/image/product/watch2.png"
                />
                <svg-icon icon-class="processbar"></svg-icon>
                <div class="prices-content">
                  <span class="real-price">¥988</span>
                  <del>¥1199</del>
                </div>
              </li>
            </ul>
          </section>
          <section class="header-card-2">
            <ul class="card-top">
              <li>
                <b>清洁洗剂专场</b>
              </li>
              <li class="item-link">
                <small class="small-text">轻松洁净 持久亮丽</small>
                <svg-icon icon-class="mini-right-btn"></svg-icon>
              </li>
              <li class="only-left">
                <label for="countdown">仅剩</label>
                <div id="countdown">
                  <span>05</span>
                  <span>50</span>
                  <span>45</span>
                </div>
              </li>
            </ul>
            <ul class="card-content">
              <li class="item-content">
                <img
                  class="item-img"
                  src="../../assets/image/product/bule0.png"
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
                  src="../../assets/image/product/bule1.png"
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
                  src="../../assets/image/product/bule2.png"
                />
                <svg-icon icon-class="processbar"></svg-icon>
                <div class="prices-content">
                  <span class="real-price">¥988</span>
                  <del>¥1199</del>
                </div>
              </li>
            </ul>
          </section>
        </van-tab>
      </van-tabs>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BrandSpike", // 品牌秒杀
  setup() {
    return {
      active: "1",
      tabList: ["秒杀", "疯抢", "生活电器", "家居软饰", "平板电视"]
    };
  }
};
</script>

<style scoped lang="scss">
.brand-spike {
  background-color: #ffffff;
  min-height: 812px;
  padding: 0 16px;
  .page-header {
    background-color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
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
      color: #d8182d;
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
    /deep/ .van-tabs--line .van-tabs__wrap {
      height: 35px;
    }

    .header-card {
      margin-top: 16px;
      margin-bottom: 20px;
      background-color: #fff;
      height: 300px;
      background: url("../../assets/image/product/spike0.png") no-repeat center
        center;
      background-size: 100% 100%;
      border-radius: 8px;
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
      .card-top {
        padding-left: 50px;
        padding-top: 56px;
        font-size: 17px;
        color: #fff;
        .item-link {
          .small-text {
            font-size: 11px;
          }
          .svg-icon {
            padding-left: 5px;
            width: 15px;
            height: 15px;
          }
        }
        .only-left {
          font-size: 11px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      }
      .card-content {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        .item-content {
          background-color: #fff;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          padding-bottom: 5px;
          border-radius: 8px;
          margin-left: 5px;
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
    .header-card-1 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 20px;
      background-color: #fff;
      height: 300px;
      //   padding: 29px 50px;
      background: url("../../assets/image/product/spike1.png") no-repeat center
        center;
      background-size: 100% 100%;
      border-radius: 8px;
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
      .card-top {
        padding-left: 50px;
        padding-top: 56px;
        font-size: 17px;
        color: #fff;
        .item-link {
          .small-text {
            font-size: 11px;
          }
          .svg-icon {
            padding-left: 5px;
            width: 15px;
            height: 15px;
          }
        }
        .only-left {
          font-size: 11px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      }
      .card-content {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        .item-content {
          background-color: #fff;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          padding-bottom: 5px;
          border-radius: 8px;
          margin-left: 5px;
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
    .header-card-2 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 20px;
      background-color: #fff;
      height: 300px;
      //   padding: 29px 50px;
      background: url("../../assets/image/product/spike2.png") no-repeat center
        center;
      background-size: 100% 100%;
      border-radius: 8px;
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
      .card-top {
        padding-left: 50px;
        padding-top: 56px;
        font-size: 17px;
        color: #fff;
        .item-link {
          .small-text {
            font-size: 11px;
          }
          .svg-icon {
            padding-left: 5px;
            width: 15px;
            height: 15px;
          }
        }
        .only-left {
          font-size: 11px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
      }
      .card-content {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        .item-content {
          background-color: #fff;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          padding-bottom: 5px;
          border-radius: 8px;
          margin-left: 5px;
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
  }
}
</style>
