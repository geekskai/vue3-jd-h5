<template>
  <div class="my-wallet">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" alt />
      </span>
      <div class="header-content">我的钱包</div>
    </header>
    <section class="wallet-box">
      <ul class="wallet-content">
        <li class="wallet-item-one">
          <div class="left-info">
            <svg-icon class="wallet-one-icon" icon-class="wallet-one"></svg-icon>
            <b class="consumption-mining">消费挖矿</b>
          </div>
          <div class="right-icons">
            <svg-icon class="one-big-icon" icon-class="wallet-one-big"></svg-icon>
            <svg-icon class="right-arrow-icon" icon-class="wallet-right-arrow"></svg-icon>
          </div>
        </li>

        <li class="wallet-item-two">
          <div class="left-info">
            <div>
              <svg-icon class="wallet-two-icon" icon-class="wallet-two"></svg-icon>
              <cite class="cm-name">CM</cite>
              <div class="force-values">
                <label class="left-force">9999.6990</label>
                <span class="right-force">≈999.9CNY</span>
              </div>
            </div>
            <div class="two-big-imgs">
              <img class="big-img" src="../../assets/image/wallet-two-big.png" alt />
              <img src="../../assets/image/wallet-two-img.png" alt />
            </div>
          </div>
        </li>

        <li class="wallet-item-three">
          <div class="left-info">
            <div>
              <svg-icon class="wallet-three-icon" icon-class="wallet-three"></svg-icon>
              <cite class="cm-name">USDT</cite>
              <div class="force-values">
                <label class="left-force">9999.6990</label>
                <span class="right-force">≈999.9CNY</span>
              </div>
            </div>
            <div class="three-big-icons">
              <svg-icon class="three-big-icon" icon-class="wallet-three-big"></svg-icon>
                <img class="right-arrow-icon" src="../../assets/image/wallet-right-white.png" alt="">
            </div>
          </div>
        </li>
        <li class="wallet-item-four">
          <div class="left-info">
            <div>
              <svg-icon class="wallet-four-icon" icon-class="wallet-four"></svg-icon>
              <cite class="cm-name">我的算力值</cite>
              <div class="force-values">
                <label class="left-force">9999.6990</label>
              </div>
            </div>
            <div class="four-big-icons">
              <svg-icon class="four-big-icon" icon-class="wallet-four-big"></svg-icon>
              <img class="right-arrow-icon" src="../../assets/image/wallet-right-white.png" alt="">
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "MyWallet",
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.my-wallet {
  .page-header {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: linear-gradient(to right, #fad961, #f76b1c);
    .btn-left {
      position: absolute;
      left: 16px;
      top: 10px;
      z-index: 999;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      z-index: 11;
      color: #ffffff;
      font-weight: 600;
      flex: 1;
    }
  }
  .wallet-box {
    .wallet-content {
      position: relative;
      .wallet-item-one {
        box-shadow: 0 5px 15px 0 #0000004d;
        width: 100%;
        position: absolute;
        height: 196px;
        background: linear-gradient(to right, #fad961, #f76b1c);
        border-radius: 0 0 0 103px;
        z-index: 10;
        display: flex;
        justify-content: space-between;
        padding: 0 40px;
        align-items: center;
        .left-info {
          .wallet-one-icon {
            width: 26px;
            height: 26px;
          }
          .consumption-mining {
            font-size: 18px;
            font-weight: 600;
            padding-left: 10px;
            color: #fff;
          }
        }
        .right-icons {
          .one-big-icon {
            width: 66px;
            height: 54px;
          }
          .right-arrow-icon {
            width: 35px;
            height: 20px;
            padding-left: 20px;
          }
        }
      }
      .wallet-item-two {
        width: 100%;
        box-shadow: 0 2px 15px 0 #7567fa;
        padding: 0 40px;
        position: absolute;
        z-index: 9;
        height: 348px;
        padding-bottom: 46px;
        background-color: #ffffff;
        border-radius: 0 0 0 103px;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        .left-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .wallet-two-icon {
            width: 26px;
            height: 26px;
          }
          .cm-name {
            border-radius: 33px 33px;
            width: 66px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background-color: #f2f1f8;
            display: inline-block;
            font-size: 18px;
            font-weight: 600;
            margin-left: 10px;
            color: #3a3a3a;
          }
          .force-values {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
            font-size: 18px;
            padding-left: 36px;
            .left-force {
              color: #3a3a3a;
            }
            .right-force {
              font-size: 15px;
              color: #949497;
            }
          }
          .right-arrow-icon {
            display: inline-block;
            .svg-icon {
              widows: 35px;
              height: 20px;
            }
          }
          .two-big-imgs {
            display: flex;
            justify-content: center;
            align-items: center;
            .big-img {
              width: 50px;
              margin-right: 20px;
              height: 50px;
            }
          }
        }
      }
      .wallet-item-three {
        box-shadow: 0 2px 15px 0 #7567fa;
        width: 100%;
        padding: 46px 40px;
        position: absolute;
        z-index: 8;
        height: 500px;
        background: linear-gradient(to right, #2e92e6, #b168fc);
        border-radius: 0 0 0 103px;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        .left-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .wallet-three-icon {
            width: 26px;
            height: 26px;
          }
          .cm-name {
            border-radius: 33px 33px;
            width: 66px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background-color: #6765e9;
            display: inline-block;
            font-size: 18px;
            font-weight: 600;
            margin-left: 10px;
            color: #ffffff;
          }
          .force-values {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
            font-size: 18px;
            padding-left: 36px;
            .left-force {
              color: #fff;
            }
            .right-force {
              font-size: 15px;
              color: #949497;
            }
          }
          .right-arrow-icon {
            display: inline-block;
            .svg-icon {
              widows: 35px;
              height: 20px;
            }
          }
          .three-big-icons {
            display: flex;
            justify-content: center;
            align-items: center;
            .three-big-icon {
              width: 42px;
              height: 46px;
              margin-right: 20px;
            }
            .right-arrow-icon {
              widows: 35px;
              height: 20px;
            }
          }
        }
      }
      .wallet-item-four {
        box-shadow: 0 2px 15px 0 #fe7b5f;
        width: 100%;
        padding: 46px 40px;
        position: absolute;
        z-index: 7;
        height: 650px;
        background: linear-gradient(to right, #fc9863, #fe735d);
        border-radius: 0 0 0 103px;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        .left-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .wallet-four-icon {
            width: 26px;
            height: 26px;
          }
          .cm-name {
            font-size: 18px;
            color: #fff;
            border-radius: 33px 33px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            display: inline-block;
            font-size: 18px;
            font-weight: 600;
            margin-left: 10px;
          }
          .force-values {
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
            font-size: 18px;
            padding-left: 36px;
            .left-force {
              color: #fff;
            }
          }
          .right-arrow-icon {
            display: inline-block;
            .svg-icon {
              widows: 35px;
              height: 20px;
            }
          }
          .four-big-icons {
            display: flex;
            justify-content: center;
            align-items: center;
            .four-big-icon {
              width: 50px;
              height: 46px;
              margin-right: 20px;
            }
            .right-arrow-icon {
              .svg-icon {
                widows: 35px;
                height: 20px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

