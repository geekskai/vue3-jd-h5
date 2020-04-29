<template>
  <div class="my-focus">
    <cm-header>
      <span slot="left" @click="$router.push('/mine')">
        <img src="../../assets/icons/left-green-white.png" />
      </span>
      <div>我的关注</div>
    </cm-header>
    <van-tabs
      color="#000"
      line-width="36"
      v-model="active"
      background="#EFEFF4"
      title-active-color="#3A3A3A"
    >
      <van-tab title="商品" name="product" :to="`/myFocus?tabName=product`">
        <ul class="list-item" v-for="(item,index) in productAttentions" :key="index">
          <van-swipe-cell :right-width="60" :on-close="onClose" :name="item.id">
            <li class="card-item">
              <div class="card-img">
                <img class="item-img" v-lazy="item.mainImage" />
              </div>
              <ul class="card-info">
                <li class="info-top">
                  <div class="item-title">{{item.originalName}}</div>
                  <span class="item-desc">{{item.quantity}}人关注</span>
                </li>
                <li class="info-buttom">
                  <b class="item-focus">￥{{item.price}}</b>
                  <router-link
                    tag="span"
                    :to="`/myFocus/lookSimilar?categoryId=${item.categoryId}`"
                  >
                    <van-tag color="#EC3924" size="large" plain>找相似</van-tag>
                  </router-link>
                </li>
              </ul>
            </li>
            <template slot="right">
              <van-button square type="danger">取消关注</van-button>
            </template>
          </van-swipe-cell>
        </ul>
        <van-divider
          v-if="productAttentions.length>4"
          :style="{ color: '#3A3A3A', borderColor: '#FFF' ,fontSize:'12px', padding: '15px' }"
        >
          <van-loading v-if="loading" color="#EC3924" size="25px" type="spinner" />
          <i v-else>我是有底线的</i>
        </van-divider>
      </van-tab>

      <van-tab title="店铺" name="merchant" :to="`/myFocus?tabName=merchant`">
        <ul class="shop-list" v-for="(item,index) in merchantAttentions" :key="index">
          <van-swipe-cell :right-width="120" :on-close="onCloseMerchant" :name="item.id">
            <li class="card-item">
              <div class="card-img">
                <img class="item-img" v-lazy="item.logoUrl" />
              </div>
              <ul class="card-info">
                <li class="info-top">
                  <div class="item-title">{{item.shopName}}</div>
                  <span class="item-desc">{{item.quantity}}人关注</span>
                </li>
                <li class="info-buttom">
                  <svg-icon icon-class="three-point"></svg-icon>
                </li>
              </ul>
            </li>
            <template slot="right">
              <van-button
                square
                type="danger"
                @click.stop.prevent="handleCancleFocus(item.id)"
                text="取消关注"
              ></van-button>
              <van-button
                square
                type="primary"
                @click.stop.prevent="handleShopTop(item.id)"
                text="置顶店铺"
              ></van-button>
            </template>
          </van-swipe-cell>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'MyFocus', // 我的关注
  inject: ['reload'],
  data () {
    return {
      active: this.$route.query.tabName || 'product',
      isLike: true,
      loading: true,
      productAttentions: [],
      merchantAttentions: [],
      pageNum: 1
    }
  },
  created () {
    this.initProductAttentions()
    this.initMerchantAttentions()
  },
  mounted () {
    let self = this
    window.onscroll = function () {
      // 变量scrollTop是滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop // 变量windowHeight是可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight // 变量scrollHeight是滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight // 滚动条到底部的条件
      if (scrollTop + windowHeight === scrollHeight) {
        self.pageNum++
        self.initProductAttentions()
      }
    }
  },
  methods: {
    handleCancleFocus (merchantId) {
      this.$http
        .post(`/api/user/updateAttention`, {
          id: [merchantId],
          type: 0
        })
        .then(response => {
          this.$toast({
            mask: false,
            duration: 1000,
            message: '取消成功！'
          })
          this.initMerchantAttentions()
        })
    },
    handleShopTop (merchantId) {
      this.$http
        .post(`/api/user/updateAttention`, {
          id: [merchantId],
          type: 1
        })
        .then(response => {
          this.$toast({
            mask: false,
            duration: 1000,
            message: '置顶成功！'
          })
          this.reload()
        })
    },
    onCloseMerchant (clickPosition, instance, detail) {
      instance.close()
    },
    initMerchantAttentions () {
      this.$http
        .post(`/api/user/merchantAttentions`, {
          pageNum: this.pageNum,
          pageSize: 5
        })
        .then(response => {
          this.merchantAttentions = response.data.content
        })
    },
    initProductAttentions (flag) {
      this.$http
        .post(`/api/user/productAttentions`, {
          pageNum: flag ? 1 : this.pageNum,
          pageSize: 5
        })
        .then(response => {
          if (response.data.content.length === 0) {
            this.loading = false
          }
          if (flag) {
            this.loading = true
            this.pageNum = 1
            this.productAttentions = response.data.content
          } else {
            this.productAttentions.push(...response.data.content)
          }
        })
    },

    onClose (clickPosition, instance, detail) {
      this.$http
        .post(`/api/user/updateAttention`, { id: [detail.name], type: 0 })
        .then(response => {
          this.$toast({
            mask: false,
            duration: 1000,
            message: '取消成功！'
          })
          this.initProductAttentions(true)
          instance.close()
        })
    }
  }
}
</script>

<style scoped lang="scss">
.my-focus {
  // background-color: #efefef;
  padding: 0 16px;
  .scroll-content {
    /deep/ .van-divider {
      margin: 0;
      margin-bottom: 40px;
    }
  }
  /deep/ .van-tab--active {
    font-size: 18px;
    font-weight: 600;
  }
  .list-item {
    padding-top: 16px;
    /deep/ .van-button--danger {
      height: 100%;
      width: 60px;
    }
    /deep/ .van-swipe-cell {
      border-radius: 0 8px 8px 0;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
    }
    .card-item {
      border-radius: 8px 0 0 8px;
      background: url("../../assets/image/back-show.png") no-repeat center
        center;
      background-size: 102% 100%;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      font-size: 14px;
      .card-img {
        margin: 14px;
        .item-img {
          width: 110px;
          height: 110px;
          border-radius: 50%;
        }
      }
      .card-info {
        display: flex;
        height: 110px;
        justify-content: space-between;
        flex-direction: column;
        align-items: flex-start;
        .info-top {
          margin-top: 14px;
          .item-title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 14px;
            color: #3a3a3a;
            font-weight: 600;
            width: 200px;
            margin-bottom: 5px;
            padding-right: 15px;
          }
          .item-desc {
            font-size: 11px;
            color: #949497;
          }
        }
        .info-buttom {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 15px;
          .item-focus {
            font-size: 15px;
            color: #ec3924;
            font-weight: 600;
            padding-bottom: 2px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .shop-list {
    padding-top: 16px;
    /deep/ .van-button--danger {
      height: 100%;
      width: 60px;
    }
    /deep/ .van-button--primary {
      height: 100%;
      width: 60px;
      background-color: #e9c146;
      border: 0.026667rem solid #e9c146;
    }
    /deep/ .van-swipe-cell {
      border-radius: 0 8px 8px 0;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
    }
    .card-item {
      border-radius: 8px 0 0 8px;
      background: url("../../assets/image/back-show.png") no-repeat center
        center;
      background-size: 102% 100%;
      background-color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 14px;
      .card-img {
        padding: 16px;
        .item-img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
        }
      }
      .card-info {
        display: flex;
        height: 110px;
        justify-content: space-between;
        align-items: center;
        .info-top {
          .item-title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 17px;
            color: #3a3a3a;
            font-weight: 600;
            width: 200px;
            margin-bottom: 5px;
            padding-right: 15px;
          }
          .item-desc {
            font-size: 11px;
            color: #949497;
          }
        }
        .info-buttom {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 15px;
          .item-focus {
            font-size: 15px;
            color: #ec3924;
            font-weight: 600;
            padding-bottom: 2px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
