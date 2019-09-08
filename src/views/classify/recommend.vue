<template>
  <div class="recommend">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <img src="@/assets/icons/left-green-white.png"/>
      </span>
      <div class="header-content">推荐</div>
    </header>
    <div class="classify-search">
      <div class="header-search" @click="handleSearch">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <router-link tag="span" class="search-title" to="./search">推荐搜索 关键词</router-link>
      </div>
    </div>

    <section class="recommend-classify" ref="wrapper">
      <list-scroll
        :scroll-data="likeList"
        class="likeList"
        :pullup="true"
        @scrollToEnd="handleScrollToEnd"
        :pulldown="true"
        @pulldown="handlePullDown"
      >
        <div>
          <ul class="like-list" v-for="(item,index) in likeList" :key="index">
            <li class="like-item" @click="handleToDetail(item.productId)">
              <img class="item-picture" v-lazy="item.productMainImage" />
              <div class="item-detail">
                <p class="store-info">
                  <img v-lazy="item.logoUrl" class="header-img" />
                  <label>{{item.shopName}}</label>
                </p>
                <p class="item-title">{{item.productName}}</p>
                <p class="item-count">
                  <i>￥{{item.productCnyPrice}}</i>
                  <span>月销量：{{item.monthlySalesQuantity}}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </list-scroll>
    </section>
  </div>
</template>

<script>
import ListScroll from "../../components/scroll/ListScroll";
export default {
  name: "recommend",
  components: {
    ListScroll
  },
  data() {
    return {
      likeList: [],
      page: 1
    };
  },
  mounted() {
    this.setWrapHeight();
  },
  created() {
    this.$http.get("http://test.happymmall.com/home/recommend").then(res => {
      const { data } = res.data;
      this.likeList = data;
      console.log('=====likeList==>',this.likeList);
    });
    // this.initData();
  },
  methods: {
    // 当滑块滑动到底部的时候。
    handleScrollToEnd() {
      console.log("=====滑动到底了==>");
      this.page++;
      this.initData();
    },
    handlePullDown() {
      console.log("=====handlePullDown==>");
    },
    handleToDetail(productId) {
      this.$router.push({
        path: "/product/index",
        query: { productId: productId }
      });
    },
    initData() {
      this.$http
        .get(
          `/api/product/list?categoryId=${this.$route.query.categoryId}&page=${this.page}&size=15&clientType=0`
        )
        .then(response => {
          this.likeList = response.data.content;
          console.log("=====this.likeList==>", response.data.content);
        });
    },
    handleSearch() {
      this.$router.push("/search");
    },
    //动态设置searc-wrap的高
    setWrapHeight() {
      let $screenHeight = document.documentElement.clientHeight;
      this.$refs.wrapper.style.height = $screenHeight - 90 + "px";
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/mixin.scss";
.recommend {
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    padding-bottom: 20px;
    position: relative;
    .btn-left {
      position: fixed;
      left: 16px;
      background-color: #efeff4;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
    }
    .header-content {
      text-align: center;
      font-size: 18px;
      flex: 1;
      font-weight: 600;
    }
  }
  .classify-search {
    width: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: flex-start;
    @include boxSizing;
    font-size: 30px;
    color: #fdc;
    z-index: 10000;
    .header-search {
      border-radius: 3px;
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      color: #232326;
      background: #fff;
      .search-icon {
        line-height: 40px;
        padding: 8px 10px;
      }
      .app-name {
        padding: 0 20px;
        color: $red;
        font-size: 40px;
        font-weight: bold;
      }
      .icon-search {
        padding: 0 20px;
        font-size: 34px;
      }
      .search-title {
        font-size: 16px;
        color: #dbdbdb;
        width: 100%;
        padding-left: 60px;
      }
    }
  }
  .recommend-classify {
    padding: 16px;
    .like-list {
      .like-title {
        color: #EC3924;
        font-size: 18px;
      }
      .like-item {
        background: url("../../assets/image/back-show.png") no-repeat center
          center;
        background-size: 100% 100%;
        margin-top: 8px;
        padding: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .item-picture {
          width: 80px;
          height: 80px;
          display: inline-block;
          border-radius: 4px;
        }
        .item-detail {
          padding-left: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          flex: 1px;
          .store-info {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img {
              width: 24px;
              height: 24px;
            }
            label {
              color: #3a3a3a;
              font-size: 11px;
              padding-left: 4px;
            }
          }
          .item-title {
            color: #3a3a3a;
            font-size: 14px;
            padding-top: 10px;
            width: 223px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .item-count {
            padding-top: 4px;
            padding-right: 5px;
            display: flex;
            justify-content: space-between;
            width: 100%;
            i {
              color: #EC3924;
              font-size: 14px;
            }
            span {
              font-size: 11px;
              color: #949497;
            }
          }
        }
      }
    }
  }
}
</style>
