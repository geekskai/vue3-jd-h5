<template>
  <div class="view-logistics">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <i>查看物流</i>
    </cm-header>

    <!-- 0代表是京东物流 -->
    <!-- <section class="order-card" v-if="logisticsInfo.jdFlag==0">
      <ul class="order-list">
        <li class="order-info">
          <svg-icon icon-class="logistics-jd"></svg-icon>
          <div class="order-detail">
            <div class="info-content">
              <p class="info-two">
                <span>
                  <label>目的地：</label>
                </span>
                <span>
                  <i>{{logisticsInfo.address}}</i>
                </span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>-->
    <section class="order-card">
      <ul class="order-list">
        <li class="order-info">
          <img class="logist-logo" src="@/assets/image/logistics/self-logist-logo.png" />
          <div class="order-detail">
            <!-- 1代表是自己的物流 -->
            <p class="info-one">
              <span>【{{logisticsInfo.logisticsId}}】</span>
            </p>
            <div class="info-content">
              <p class="info-two">
                <span>
                  <label>目的地：</label>
                  <i>深圳南山区</i>
                </span>
                <span>
                  <label>件数：</label>
                  <i>1</i>
                </span>
              </p>
              <p class="info-two">
                <span>
                  <label>状态：</label>
                  <i>正在派送</i>
                </span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="logistics-status">
      <van-steps direction="vertical" active-color="#EC3924" :active="0">
        <van-step v-for="(trace,index) in logisticsInfo.traces" :key="index">
          <i slot="active-icon">
            <span class="logistics-time">
              <!-- {{trace.acceptTime}} -->
              {{formatDate(trace.acceptTime).split('-')[0]}}
              <br />
              {{formatDate(trace.acceptTime).split('-')[1]}}
            </span>
            <svg-icon icon-class="correct"></svg-icon>
          </i>
          <div class="active-text">
            <h3>{{trace.remark}}</h3>
            <p>{{trace.acceptStation}}</p>
          </div>
        </van-step>

        <!-- <van-step>
          <i slot="inactive-icon">
            <span class="logistics-time">
              05/22
              <br />08:28
            </span>
            <svg-icon icon-class="point"></svg-icon>
          </i>
          <p>【深圳市】快件从深圳龙华区二部发出，正在发往江苏 是连云港三部门</p>
        </van-step>
        <van-step>
          <i slot="inactive-icon">
            <span class="logistics-time">
              05/22
              <br />08:28
            </span>
            <svg-icon icon-class="courier"></svg-icon>
          </i>
          <div class="normaol-text">
            <h3>【江苏市】快件到达连云港市</h3>
          </div>
        </van-step>
        <van-step>
          <i slot="inactive-icon">
            <span class="logistics-time">
              05/22
              <br />08:28
            </span>
            <svg-icon icon-class="point"></svg-icon>
          </i>
          <p>【深圳市】快件从深圳龙华区二部发出，正在发往江苏 是连云港三部门</p>
        </van-step>
        <van-step>
          <i slot="inactive-icon">
            <span class="logistics-time">
              <i>05/22</i>
              <i>08:28</i>
            </span>
            <svg-icon icon-class="aircraft"></svg-icon>
          </i>
          <div class="normaol-text">
            <h3>运输中</h3>
            <p>包裹正在等待揽收</p>
          </div>
        </van-step>
        <van-step>
          <i slot="inactive-icon">
            <span class="logistics-time">
              05/22
              <br />08:28
            </span>
            <svg-icon icon-class="point"></svg-icon>
          </i>
          <p>【深圳市】快件从深圳龙华区二部发出，正在发往江苏 是连云港三部门1111</p>
        </van-step>
        <van-step>
          <i slot="inactive-icon">
            <span class="logistics-time">
              05/22
              <br />08:28
            </span>
            <svg-icon icon-class="shipped"></svg-icon>
          </i>
          <div class="normaol-text">
            <h3>快件已发货</h3>
          </div>
        </van-step>
        -->
      </van-steps>
    </section>
  </div>
</template>

<script>
export default {
  name: "ViewLogistics",
  data() {
    return {
      logisticsInfo: {}
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.$http
        .post(`/api/order/expressInquiry?orderNd=${this.$route.query.orderNo}`)
        .then(response => {
          this.logisticsInfo = response.data.content;
        });
    },
    formatDate(inputTime) {
      inputTime = inputTime.replace(/\-/g, "/");
      var date = new Date(inputTime);
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var h = date.getHours();
      h = h < 10 ? "0" + h : h;
      var minute = date.getMinutes();
      minute = minute < 10 ? "0" + minute : minute;
      return m + "/" + d + "-" + h + ":" + minute;
    }
  }
};
</script>

<style scoped lang="scss">
.view-logistics {
  height: 100%;
  padding: 0 16px;

  .order-card {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
    .order-list {
      .order-info {
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        .logist-logo {
          width: 60px;
          height: 60px;
        }
        .svg-icon {
          width: 60px;
          height: 60px;
          display: inline-block;
          background-color: #ec3924;
          border-radius: 50%;
        }
        .order-detail {
          flex: 1;
          padding-left: 11px;
          padding-bottom: 4px;
          .info-one,
          .info-two {
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            font-size: 13px;
          }
          .info-content {
            display: flex;
            justify-content: space-between;
          }
          .info-one {
            color: #3a3a3a;
            padding-bottom: 5px;
            i {
              font-weight: 700;
            }
          }
          .info-two {
            span {
              padding-top: 4px;
              label {
                color: #3a3a3a;
              }
              i {
                color: #949497;
              }
            }
          }
        }
      }
    }
  }
  .logistics-status {
    margin-top: 20px;
    padding: 8px 8px 8px 0;
    border-radius: 5px;
    width: 100%;
    background-color: #fff;

    .svg-icon {
      width: 20px;
      height: 20px;
    }
    .logistics-time {
      position: absolute;
      left: -25px;
      font-size: 8px;
      color: #dbdbdb;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 30px;
    }
    /deep/ .van-steps__items {
      padding-left: 30px;
    }
    /deep/ .van-step__title {
      padding-left: 12px;
      .active-text {
        color: #ec3924;
      }
      h3 {
        font-size: 13px;
      }
      p {
        font-size: 11px;
      }
      .normaol-text {
        h3 {
          color: #000;
        }
        p {
          color: #888;
        }
      }
    }
  }
}
</style>
