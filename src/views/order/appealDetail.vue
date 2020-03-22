<template>
  <div class="appeal-detail">
    <cm-header>
      <span slot="left" @click="$router.go(-1)">
        <svg-icon icon-class="white-btn"></svg-icon>
      </span>
      <i>申诉详情</i>
    </cm-header>
    <section class="order-card">
      <ul class="order-list">
        <li class="order-item">
          <div class="store-info">
            <img :src="appealDetailForm.logoUrl" class="header-img" />
            <b>{{appealDetailForm.shopName}}</b>
          </div>
        </li>
        <li class="order-info" v-for="(item,i) in appealDetailForm.appealSkuInfoVos" :key="i">
          <img :src="item.productMainUrl" />
          <div class="order-detail">
            <p class="info-one">
              <span class="product-name">{{item.productName}}</span>
              <b>￥{{item.productAmount}}</b>
            </p>
            <p class="info-two">
              <span>{{item.fullName}}</span>
              <span>×{{item.quantity}}</span>
            </p>
          </div>
        </li>
        <li class="order-count">
          <span>共{{appealDetailForm.appealSkuInfoVos[0].quantity}}件商品,小计:</span>
          <b>￥{{appealDetailForm.allAmount}}</b>
        </li>
      </ul>
    </section>
    <section class="info-form">
      <van-cell-group>
        <van-field v-model="appealContent.name" disabled label="用户名" />
        <van-field v-model="appealContent.phone" disabled label="手机号" />
        <div v-for="(appealDetail,index) in appealContent.appealDetailContentVos" :key="index">
          <van-field v-model="appealDetail.createDate" disabled label="申诉时间" />
          <van-field
            v-model="appealDetail.content"
            :autosize="{ minHeight: 100 }"
            type="textarea"
            label="申诉内容"
            disabled
          />
        </div>
      </van-cell-group>
      <ul
        class="imgs-list"
        v-for="(appealDetail,index) in appealContent.appealDetailContentVos"
        :key="index"
      >
        <li class="img-item" v-for="(image,index) in appealDetail.imageUrls" :key="index">
          <img :src="image.imageUrl" class="header-img" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'appealDetail',
  data () {
    return {
      username: '',
      phone: '',
      appealContent: {},
      appealDetailForm: this.$route.params || {}
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http
        .get(
          `/api/order/complainDetail?appealNo=${this.appealDetailForm.appealNo}`
        )
        .then(response => {
          this.appealContent = response.data.content
        })
    }
  }
}
</script>

<style scoped lang="scss">
.appeal-detail {
  padding: 0 16px;

  .order-card {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    margin-top: 20px;
    .order-list {
      .order-item {
        display: flex;
        justify-content: space-between;
        & > span {
          color: #ec3924;
          font-size: 11px;
        }
        .store-info {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: 10px;
          .header-img {
            width: 24px;
            height: 24px;
            border-radius: 50%;
          }
          b {
            color: #3a3a3a;
            padding-left: 3px;
            font-size: 11px;
          }
        }
      }
      .order-info {
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        img {
          width: 80px;
          height: 80px;
          display: inline-block;
          background-color: #ec3924;
          border-radius: 4px;
        }
        .order-detail {
          flex: 1;
          padding-left: 16px;
          padding-bottom: 4px;
          .info-one,
          .info-two {
            display: flex;
            justify-content: space-between;
            font-size: 11px;
          }
          .info-one {
            color: #3a3a3a;
            padding-bottom: 5px;
            .product-name {
              width: 150px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .info-two {
            color: #949497;
          }
        }
      }
      .order-count {
        display: flex;
        justify-content: flex-end;
        font-size: 13px;
        b {
          color: #ec3924;
          padding-left: 5px;
          font-weight: 700;
        }
        span {
          color: #3a3a3a;
        }
      }
    }
  }
  .info-form {
    padding: 20px;
    margin: 20px 0;
    border-radius: 5px;
    background-color: #fff;
    /deep/ .van-cell {
      padding-left: 0;
      padding-right: 0;
    }
    /deep/ .van-field__control:disabled {
      color: #3a3a3a;
      font-size: 13px;
    }
    /deep/ .van-image img {
      border-radius: 8px;
    }
  }
  .imgs-list {
    display: flex;
    flex-wrap: wrap;
    .img-item {
      img {
        display: inline-block;
        width: 94px;
        height: 94px;
        border-radius: 5px;
        padding-right: 5px;
      }
    }
  }
}
</style>
