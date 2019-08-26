<template>
  <div class="shipping-address">
    <header class="page-header">
      <router-link class="btn-left" tag="span" to="/mine">
        <svg-icon icon-class="white-btn"></svg-icon>
      </router-link>
      <div class="header-content">收货地址</div>
    </header>
    <ul v-if="addressArray.length === 0" class="address-no">
      <img src="../../assets/image/mime/no-address.png" />
      <li class="address-text">
        没有您的收货地址
        <br />赶紧添加地址吧
      </li>
    </ul>
    <section
      v-else
      class="address-card"
      v-for="(address, index) in addressArray"
      :key="index"
      @click="handleGoToEditAddrss(address)"
    >
      <ul class="card-content">
        <div class="card-triangle" :class="{'active':address.defaultFlag}"></div>
        <li class="addres-svg">
          <svg-icon
            :class="{'active':address.defaultFlag}"
            icon-class="address-home"
            v-if="address.tag === '家'"
          ></svg-icon>
          <svg-icon :class="{'active':address.defaultFlag}" icon-class="address-company" v-if="address.tag === '公司'"></svg-icon>
          <svg-icon :class="{'active':address.defaultFlag}" icon-class="address-school" v-if="address.tag === '学校'"></svg-icon>
        </li>
        <li class="card-info">
          <div class="info-name">
            <span>{{address.receiverName}}</span>
            <i>{{address.tag}}</i>
          </div>
          <div class="info-address">
            <span>{{handleFullAddress(address)}}</span>
            <van-icon name="arrow" color="#EC3924" />
          </div>
          <span>{{address.receiverPhone}}</span>
        </li>
      </ul>
    </section>
    <div class="address-btn">
      <router-link to="/mine/addAddress">
        <van-button plain type="danger" icon="plus" size="large">新增地址</van-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShippingAddress",
  data() {
    return {
      addressArray: []
    };
  },
  created() {
    this.getUserList();
  },
  methods: {
    handleFullAddress(address) {
      if (~address.fullAddress.indexOf("undefined")) {
        return (
          address.fullAddress.slice(0, address.fullAddress.length - 9) +
          address.address
        );
      }
      return address.fullAddress;
    },
    handleGoToEditAddrss(address) {
      this.$router.push({
        path: "/mine/editAddress",
        query: { address: address }
      });
    },
    getUserList() {
      // 获取用户列表
      this.$http.get(`/api/address/getUserAddrList`).then(response => {
        this.addressArray = response.data.content;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.shipping-address {
  height: 100%;
  padding: 0 16px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .header-content {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      color: #3a3a3a;
      flex: 1;
    }
  }
  .address-no {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 17px;
    color: #949497;
    padding-top: 105px;
    .address-text {
      padding-top: 20px;
    }
  }
  .address-card {
    margin-top: 10px;
    .card-content {
      border-radius: 8px;
      padding: 16px 0;
      background-color: #fff;
      overflow: hidden;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      .card-triangle.active {
        background-color: #ec3924;
      }
      .card-triangle {
        position: absolute;
        top: -10px;
        background-color: #949497;
        right: -125px;
        width: 230px;
        height: 63px;
        transform: rotate(45deg);
        box-shadow: 0 0 5px 2px #ccc;
      }

      .addres-svg {
        padding: 10px 16px;
        border: 0 solid #efeff4;
        border-right-width: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        .active {
          color: #ec3924;
        }
      }
      .card-info {
        font-size: 11px;
        padding-left: 16px;
        color: #3a3a3a;
        display: flex;
        flex-direction: column;
        flex: 1;
        .info-name {
          font-size: 13px;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          i {
            position: absolute;
            top: 6px;
            right: 0px;
            font-size: 11px;
            padding-right: 8px;
            color: #fff;
          }
        }
        .info-address {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 18px;
          padding-top: 6px;
          padding-bottom: 6px;
        }
      }
    }
  }
  .address-btn {
    position: fixed;
    bottom: 10px;
    width: 92%;
    /deep/ .van-button--large {
      height: 44px;
      line-height: 44px;
    }
    /deep/ .van-button--danger {
      color: #ec3924;
    }
  }
}
</style>

