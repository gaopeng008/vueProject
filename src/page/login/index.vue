<template>
  <section>
    <van-row class="van-row-inteval-middle"></van-row>
    <van-row>
      <van-col span="1">&nbsp;</van-col>
      <van-col span="22">
        <van-field
          class="van-cell-border"
          v-model="phone"
          label="+86"
          :placeholder="$tt('phonePlaceholder')"
          clearable
        />
      </van-col>
      <van-col span="1">&nbsp;</van-col>
    </van-row>
    <van-row class="van-row-inteval-small"></van-row>

    <van-row>
      <van-col span="1">&nbsp;</van-col>
      <van-col span="15">
        <van-field
          center
          clearable
          v-model="sms"
          class="van-cell-border"
          :placeholder="$tt('smsPlaceholder')"
        ></van-field>
      </van-col>
      <van-col span="7">
        <van-button class="van-btn-small" round size="large" type="primary">{{ $tt('sendSMS') }}</van-button>
      </van-col>
      <van-col span="1">&nbsp;</van-col>
    </van-row>
    <van-row class="van-row-inteval-large"></van-row>

    <van-row>
      <van-col span="1">&nbsp;</van-col>
      <van-col span="22">
        <van-button round type="primary" size="large" @click="handleLogin">{{ $t('route.login') }}</van-button>
      </van-col>
      <van-col span="1">&nbsp;</van-col>
    </van-row>
  </section>
</template>
<script>
import langMap from "@/lang/views/login/";
import { Field, Cell, CellGroup, Button, Row, Col } from "vant";
export default {
  name: "page-login",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Field.name]: Field,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  created() {
    this.initLocale(langMap);
  },
  data() {
    return {
      sms: "",
      phone: ""
    };
  },
  methods: {
    handleLogin() {
      this.$store
        .dispatch("LoginByUsername", {
          username: "test",
          password: "test",
          code: "1234",
          redomStr: "1234"
        })
        .then(() => {
          // this.$router.push({ path: "/" });
          this.$router.push({ path: "/verify" });
        });
    }
  }
};
</script>
<style lang="less">
@import "../../styles/overried.less";
.vant-cell-group-login {
  margin-top: 60px;

  &-exit {
    margin-top: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
.van-row-inteval-large {
  height: 145px;
  line-height: 145px;
}
.van-row-inteval-middle {
  height: 60px;
  line-height: 60px;
}
.van-row-inteval-small {
  height: 20px;
  line-height: 20px;
}
.van-cell-border {
  border: 1px solid #d3d3d3;
  border-radius: 4px;
}
.van-btn-small {
  height: 46px;
  line-height: 46px;
}
</style>