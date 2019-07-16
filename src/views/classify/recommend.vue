<template>
  <div class="recommend">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <!-- <svg-icon icon-class="green-btn"></svg-icon> -->
        <svg-icon icon-class="white-btn"></svg-icon>
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
      <ul class="like-list">
        <li class="like-item">
          <img class="item-picture" />
          <div class="item-detail">
            <p class="store-info">
              <img src="../../assets/image/product/store-headerM.png" class="header-img" />
              <label>店铺名称</label>
            </p>
            <p class="item-title">娜扎新装LOOK</p>
            <p class="item-count">
              <i>$248</i>
              <span>月销:888</span>
            </p>
          </div>
        </li>
        <li class="like-item">
          <img class="item-picture" />
          <div class="item-detail">
            <p class="store-info">
              <img src="../../assets/image/product/store-headerM.png" class="header-img" />
              <label>店铺名称</label>
            </p>
            <p class="item-title">娜扎新装LOOK</p>
            <p class="item-count">
              <i>$248</i>
              <span>月销:888</span>
            </p>
          </div>
        </li>
        <li class="like-item">
          <img class="item-picture" />
          <div class="item-detail">
            <p class="store-info">
              <img src="../../assets/image/product/store-headerM.png" class="header-img" />
              <label>店铺名称</label>
            </p>
            <p class="item-title">娜扎新装LOOK</p>
            <p class="item-count">
              <i>$248</i>
              <span>月销:888</span>
            </p>
          </div>
        </li>
        <li class="like-item">
          <img class="item-picture" />
          <div class="item-detail">
            <p class="store-info">
              <img src="../../assets/image/product/store-headerM.png" class="header-img" />
              <label>店铺名称</label>
            </p>
            <p class="item-title">娜扎新装LOOK</p>
            <p class="item-count">
              <i>$248</i>
              <span>月销:888</span>
            </p>
          </div>
        </li>
        <li class="like-item">
          <img class="item-picture" />
          <div class="item-detail">
            <p class="store-info">
              <img src="../../assets/image/product/store-headerM.png" class="header-img" />
              <label>店铺名称</label>
            </p>
            <p class="item-title">娜扎新装LOOK</p>
            <p class="item-count">
              <i>$248</i>
              <span>月销:888</span>
            </p>
          </div>
        </li>
        <li class="like-item">
          <img class="item-picture" />
          <div class="item-detail">
            <p class="store-info">
              <img src="../../assets/image/product/store-headerM.png" class="header-img" />
              <label>店铺名称</label>
            </p>
            <p class="item-title">娜扎新装LOOK</p>
            <p class="item-count">
              <i>$248</i>
              <span>月销:888</span>
            </p>
          </div>
        </li>
        <li class="like-item">
          <img class="item-picture" />
          <div class="item-detail">
            <p class="store-info">
              <img src="../../assets/image/product/store-headerM.png" class="header-img" />
              <label>店铺名称</label>
            </p>
            <p class="item-title">娜扎新装LOOK</p>
            <p class="item-count">
              <i>$248</i>
              <span>月销:888</span>
            </p>
          </div>
        </li>
        <li class="like-item">
          <img class="item-picture" />
          <div class="item-detail">
            <p class="store-info">
              <img src="../../assets/image/product/store-headerM.png" class="header-img" />
              <label>店铺名称</label>
            </p>
            <p class="item-title">娜扎新装LOOK</p>
            <p class="item-count">
              <i>$248</i>
              <span>月销:888</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {};
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
      position: absolute;
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
        color: #fe4f70;
        font-size: 18px;
      }
      .like-item {
        background-color: #fff;
        margin-top: 8px;
        border-radius: 4px;
        padding: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        .item-picture {
          width: 80px;
          height: 80px;
          display: inline-block;
          background-color: #fe4f70;
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
              color: #fe4f70;
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
