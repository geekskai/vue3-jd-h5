<template>
  <div class="recommend">
    <header class="page-header">
       <span class="btn-left" @click="$router.go(-1)">
        <img src="../../assets/icons/left-green-white.png" alt />
      </span>
      <div class="header-content">推荐</div>
    </header>
    <div class="classify-search">
      <div class="header-search" @click="handleSearch">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <router-link tag="span" class="search-title" to="./search">推荐搜索 关键词</router-link>
      </div>
    </div>

    <section class="recommend-classify">
      <ul class="like-list" v-for="(item,index) in likeList" :key="index">
        <router-link tag="li" class="like-item" to="/classify/product">
          <img class="item-picture" />
          <div class="item-detail">
            <p class="store-info">
              <img src="../../assets/image/product/store-headerM.png" class="header-img" />
              <label>{{item.storeName}}</label>
            </p>
            <p class="item-title">{{item.itemTitle}}</p>
            <p class="item-count">
              <i>{{item.itemPrice}}</i>
              <span>{{item.itemCount}}</span>
            </p>
          </div>
        </router-link>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      likeList: [
        {
          id: 0,
          storeName: "店铺名称",
          itemTitle: "娜扎新装LOOK",
          itemPrice: "$248",
          itemCount: "月销:888"
        },
        {
          id: 1,
          storeName: "店铺名称",
          itemTitle: "娜扎新装LOOK",
          itemPrice: "$248",
          itemCount: "月销:888"
        },
        {
          id: 2,
          storeName: "店铺名称",
          itemTitle: "娜扎新装LOOK",
          itemPrice: "$248",
          itemCount: "月销:888"
        },
        {
          id: 3,
          storeName: "店铺名称",
          itemTitle: "娜扎新装LOOK",
          itemPrice: "$248",
          itemCount: "月销:888"
        }
      ]
    };
  },
  created() {},
  methods: {
    handleSearch() {
      this.$router.push("/search");
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
    padding-bottom: 29px;
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
        color: #d8182d;
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
          background-color: #d8182d;
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
          }
          .item-count {
            padding-top: 4px;
            display: flex;
            justify-content: space-between;
            width: 100%;
            i {
              color: #d8182d;
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
