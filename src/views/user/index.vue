<template>
  <div>
    <img
      class="user-poster"
      src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"
    >
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment"/>
        {{ $tt('orderstatus1') }}
      </van-col>
      <van-col span="6">
        <van-icon name="records"/>
        {{ $tt('orderstatus2') }}
      </van-col>
      <van-col span="6">
        <van-icon name="tosend"/>
        {{ $tt('orderstatus3') }}
      </van-col>
      <van-col span="6">
        <van-icon name="logistics"/>
        {{ $tt('orderstatus4') }}
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" :title="$tt('title')" is-link/>
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" :title="$tt('integral')" is-link/>
      <van-cell icon="gold-coin-o" :title="$tt('coupon')" is-link/>
      <van-cell icon="gift-o" :title="$tt('gift')" is-link/>
    </van-cell-group>

    <van-cell-group class="user-exit">
      <van-button round type="primary" size="large" @click="logout">{{ $t('logout') }}</van-button>
    </van-cell-group>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup, Button } from "vant";
import langMap from "@/lang/views/user/";

export default {
  name: "vant-demo-page-user",
  components: {
    [Button.name]: Button,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  created() {
    this.initLocale(langMap);
  },
  methods: {
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        this.$router.push({ path: "/login" });
      });
    }
  }
};
</script>

<style lang="less">
@import "../../styles/overried.less";

.user {
  &-poster {
    width: 100%;
    display: block;
  }

  &-exit {
    background-color: #fafafa;
    margin-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }

  &-group {
    margin-bottom: 15px;
  }

  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;

    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>
