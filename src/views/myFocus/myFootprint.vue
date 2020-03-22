<template>
  <div class="my-footprint">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" />
      </span>
      <div>我的足迹</div>
      <span slot="right" @click="showButton = !showButton">
        <i v-if="!showButton">删除</i>
        <i v-else>完成</i>
      </span>
    </cm-header>
    <van-checkbox-group v-model="footprintForm.ids" ref="wrapper">
      <list-scroll :pullup="true" :scroll-data="footPrintArrays" @scrollToEnd="handleScrollToEnd">
        <div>
          <section class="order-card" v-for="(item, i) in footPrintArrays" :key="i">
            <b class="foot-date" v-if="i===0||item.dateFlag">{{item.date}}</b>
            <ul class="order-list">
              <div class="order-info">
                <li class="check-item" v-if="showButton">
                  <van-checkbox :key="i" checked-color="#91C95B" :name="item.id"></van-checkbox>
                </li>
                <img v-lazy="item.image" />
                <li class="order-detail">
                  <b class="product-name">{{item.name}}</b>
                  <div class="info-count">
                    <span>￥{{item.price}}</span>
                    <router-link
                      tag="span"
                      class="slimiar-btn"
                      :to="`/myFocus/lookSimilar?categoryId=${item.categoryId}`"
                    >
                      <van-tag color="#EC3924" size="large" plain>找相似</van-tag>
                    </router-link>
                  </div>
                </li>
              </div>
            </ul>
          </section>
          <van-divider
            :style="{ color: '#3A3A3A', borderColor: '#FFF' ,fontSize:'12px', padding: '15px' }"
          >
            <van-loading v-if="loading" color="#EC3924" size="25px" type="spinner" />
            <i v-else>我是有底线的</i>
          </van-divider>
        </div>
      </list-scroll>
    </van-checkbox-group>
    <div class="pay-btn" v-show="showButton">
      <van-button type="danger" @click="handleDeleteFootprint" size="large">删除</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myFootprint',
  data () {
    return {
      pageNum: 1,
      loading: true,
      footprintForm: {},
      showButton: false,
      footPrintArrays: []
    }
  },
  created () {
    this.initData()
  },
  mounted () {
    this.setHomeWrapperHeight()
  },
  methods: {
    handleScrollToEnd () {
      if (this.loading) {
        this.pageNum++
        this.initData()
      }
    },
    // 动态设置searc-wrap的高
    setHomeWrapperHeight () {
      let $screenHeight = document.documentElement.clientHeight
      this.$refs.wrapper.$el.style.height = $screenHeight - 30 + 'px'
    },
    handleDeleteFootprint () {
      this.$http
        .post(`/api/user/delFootPrint`, { ids: this.footprintForm.ids })
        .then(response => {
          this.$toast({
            mask: false,
            duration: 1000,
            message: '删除成功！'
          })
          this.initData(true)
        })
    },

    initData (flag) {
      this.$http
        .post(`/api/user/footPrint`, {
          pageNum: flag ? 1 : this.pageNum,
          pageSize: 10
        })
        .then(response => {
          if (!response.data.content) {
            this.loading = false
            return
          }
          let responseArrays = response.data.content.userFootPrintInfoVos
          if (responseArrays.length === 1) {
            responseArrays[0].dateFlag = true
          } else {
            for (let index = 1; index < responseArrays.length; index++) {
              if (
                responseArrays[index].date !== responseArrays[index - 1].date
              ) {
                responseArrays[index].dateFlag = true
              }
            }
          }
          if (flag) {
            this.loading = true
            this.pageNum = 1
            this.footPrintArrays = responseArrays
          } else {
            this.footPrintArrays.push(...responseArrays)
          }
        })
    }
  }
}
</script>

<style scoped lang="scss">
.my-footprint {
  padding: 0 16px;
  .order-card {
    margin-bottom: 20px;
    .foot-date {
      font-size: 17px;
      color: #3a3a3a;
      padding-bottom: 10px;
    }
    /deep/ .van-checkbox {
      padding-left: 0;
      .van-checkbox__label {
        font-size: 13px;
        color: #949497;
      }
    }
    .checkbox-all {
      .store-info {
        display: flex;
        justify-content: center;
        align-items: center;
        .header-img {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }
        span {
          color: #3a3a3a;
          font-size: 11px;
          padding-left: 4px;
        }
      }
    }
    .order-list {
      padding: 0 16px 0 5px;
      background-color: #fff;
      margin-bottom: 20px;
      border-radius: 5px;
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
      .order-info {
        width: 100%;
        padding: 16px 0;
        display: flex;
        justify-content: flex-start;
        .check-item {
          display: flex;
          align-items: center;
        }
        img {
          margin-left: 5px;
          width: 100px;
          height: 100px;
          display: inline-block;
          border-radius: 4px;
        }
        .order-detail {
          width: 62%;
          padding-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .product-name {
            font-size: 14px;
            color: #3a3a3a;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .info-count {
            color: #ec3924;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .slimiar-btn {
              font-size: 11px;
            }
          }
        }
      }
    }
  }
  .van-divider {
    margin: 0;
  }
  .pay-btn {
    position: fixed;
    width: 100%;
    bottom: 5px;
    left: 0;
    right: 0;
    padding: 0 16px;
    /deep/ .van-button--danger {
      background-color: #ec3924;
      line-height: 44px;
      font-size: 18px;
      border-radius: 4px;
    }
  }
}
</style>
