<template>
  <div class="add-address">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <svg-icon icon-class="green-btn"></svg-icon>
      </span>
      <div class="header-content">新增所在地区</div>
      <router-link class="appeal-record" to="/order/appealRecord" tag="span">删除</router-link>
    </header>
    <section class="address-content">
      <ul class="address-list">
        <li class="address-item">
          <van-cell title="联系人" />
          <div class="address-name">
            <van-field v-model="value" placeholder="请输入姓名" />
            <div class="gender-tags">
              <van-tag color="#E96258" plain>女士</van-tag>
              <van-tag color="#3A3A3A" plain>男士</van-tag>
            </div>
          </div>
        </li>
        <li class="address-item">
          <van-cell title="电话" />
          <div class="address-name">
            <van-field v-model="value" placeholder="手机号码" />
          </div>
        </li>
        <li class="address-item">
          <van-cell title="所在地区" />
          <div class="address-name">
            <van-field v-model="value" placeholder="请选择省市区" />
          </div>
        </li>
        <li class="address-item">
          <van-cell title="地址" />
          <div class="address-name">
            <van-field v-model="value" placeholder="如：道路、门牌号、小区、楼栋号、单元室等" />
          </div>
        </li>
        <li class="address-item">
          <van-cell title="标签" />
          <div class="address-tags">
            <van-tag color="#E96258" plain>女士</van-tag>
            <van-tag color="#3A3A3A" plain>男士</van-tag>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "addAddress",
  data() {
    return {
      value: ""
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.add-address {
  height: 100%;
  padding: 0 16px;
  .page-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    .btn-left {
      background-color: white;
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
      font-weight: 600;
      color: #3a3a3a;
      flex: 1;
    }
    .appeal-record {
      color: #fe4f70;
      font-size: 13px;
    }
  }
  .address-content {
    margin-top: 20px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 8px;
    .address-list {
      .address-item {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-direction: column;
        /deep/ .van-cell {
          padding-left: 0;
        }
        /deep/ .van-cell__title span {
          font-size: 14px;
          color: #3a3a3a;
        }
        /deep/ .van-cell:not(:last-child)::after {
          border: none;
        }
        .address-name {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .gender-tags {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            /deep/ .van-tag::after {
              border-radius: 8px;
            }
            /deep/ .van-tag {
              width: 40px;
              text-align: center;
              height: 22px;
              margin-right: 10px;
            }
          }
        }
        .address-tags {
          /deep/ .van-tag {
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>
