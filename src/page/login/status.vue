<template>
  <section>
    <!-- 居中 -->
    <van-row type="flex" justify="center" class="van-row-margin">
      <van-col span="8">&nbsp;</van-col>
      <van-col span="8" class="center">
        <van-icon name="checked" size="6em" color="#01414A"/>
      </van-col>
      <van-col span="8">&nbsp;</van-col>
    </van-row>

    <!-- 居中 -->
    <van-row type="flex" justify="center" class="van-row-margin">
      <van-col span="8">&nbsp;</van-col>
      <van-col span="8" class="center">
        <span>
          {{ loginstatus }}
        </span>

        </van-col>
      <van-col span="8">&nbsp;</van-col>
    </van-row>

    <!-- 居中 -->
    <van-row type="flex" justify="center" class="van-row-margin">
      <van-col span="3">&nbsp;</van-col>
      <van-col span="18">
        <span class="tips">
        实名认证成功后，在中智签署的合同一旦发生纠纷，可申请司法鉴定，申请仲裁等法律服务。
        </span>
        </van-col>
      <van-col span="3">&nbsp;</van-col>
    </van-row>

    <!-- 居中 -->
    <van-row type="flex" justify="center" class="van-row-margin-height">
      <van-col span="2">&nbsp;</van-col>
      <van-col span="9">
        <van-button round type="default" size="large" @click="gotoIndex">{{ $tt('index') }}</van-button>
      </van-col>
      <van-col span="2">&nbsp;</van-col>
      <van-col span="9">
        <van-button round type="primary" size="large" @click="gotoAuth">{{ $tt('auth') }}</van-button>
      </van-col>
      <van-col span="2">&nbsp;</van-col>
    </van-row>
  </section>
</template>
<script>
import langMap from "@/lang/views/login/status";
import { Cell, CellGroup, Button, Icon, Row, Col, Toast } from "vant";
export default {
  name: "page-login-status",
  components: {
    [Toast.name]: Toast,
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  created() {
    this.initLocale(langMap);
  },
  data() {
    return {};
  },
  computed: {
    loginstatus() {
      // 根据登录结果来加载不同的国际化key
      // return true ? this.$tt('success') : this.$tt('faild');
      return this.$tt('success');
    }
  },
  methods: {
    gotoIndex() {
      this.$router.push({ path: "/" });
    },
    gotoAuth() {
      // Toast(this.$tt('auth'));
      this.$router.push({ path: '/me' });
    }
  }
};
</script>
<style lang="less">
@import "../../styles/overried.less";
</style>
<style lang="less">
.van-row-margin {
  margin-top: 25px;
  .center {
    text-align: center;
    color: #333333;
  }
}
.van-row-margin-height {
  margin-top: 100px;
}
.tips{
  color:#999999;
}
</style>