<template>
  <div class="recommend">
    <header class="page-header">
      <span class="btn-left" @click="handleGoBack">
        <img src="../../assets/icons/left-green-white.png" />
      </span>
      <div class="header-content">推荐</div>
    </header>
    <div class="classify-search">
      <div class="header-search" @click="handleSearch">
        <svg-icon class="search-icon" icon-class="search"></svg-icon>
        <router-link tag="span" class="search-title" to="./search"
          >推荐搜索 关键词</router-link
        >
      </div>
    </div>

    <section class="recommend-classify" ref="wrapper">
      <list-scroll
        :scroll-data="likeList"
        class="likeList"
        :pullup="true"
        @scrollToEnd="handleScrollToEnd"
        :pulldown="true"
      >
        <div>
          <ul class="like-list" v-for="(item, index) in likeList" :key="index">
            <li class="like-item" @click="handleToDetail(item)">
              <img class="item-picture" v-lazy="item.imagePath" />
              <div class="item-detail">
                <p class="store-info">
                  <img
                    src="../../assets/image/product/jd_logo.jpg"
                    class="header-img"
                  />
                  <label>京东商城</label>
                </p>
                <p class="item-title">{{ item.name }}</p>
                <p class="item-count">
                  <i>￥：{{ item.price }}</i>
                  <span>{{ item.itemCount }}</span>
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
import ListScroll from "@/components/scroll/ListScroll";
import { useRouter } from "vue-router";
import { reactive, ref, onMounted, getCurrentInstance, toRef } from "vue";

export default {
  name: "recommend",
  components: {
    ListScroll
  },
  setup() {
    const { ctx } = getCurrentInstance();
    const state = reactive({
      likeList: [],
      page: 1
    });

    const $router = useRouter();
    const page = ref(1);
    const wrapper = ref(null);

    const handleScrollToEnd = () => {
      state.page++;
      fetchData();
    };

    const handleGoBack = () => {
      $router.go(-1);
    };

    const handleToDetail = ({ sku }) => {
      $router.push({
        path: "/classify/product",
        query: { sku }
      });
    };

    const fetchData = async () => {
      const { data } = await ctx.$http.get(
        `/api/goods/list?page=${page.value}&size=15`
      );
      state.likeList.push(...data);
    };

    const handleSearch = () => {
      $router.push("/search");
    };

    const setWrapHeight = () => {
      const { clientHeight } = document.documentElement.clientHeight;
      wrapper.value.style.height = clientHeight - 90 + "px";
    };

    onMounted(async () => {
      setWrapHeight();
      const { data } = await ctx.$http.get(
        "http://test.happymmall.com/home/recommend"
      );
      const { data: likes } = data;
      state.likeList = likes;
    });

    return {
      wrapper,
      ...toRefs(state),
      handleScrollToEnd,
      handleToDetail,
      handleSearch,
      handleGoBack
    };
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
