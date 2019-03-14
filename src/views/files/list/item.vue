<template>
  <section>
    <div class="item">
      <van-row>
        <van-col span="1">&nbsp;</van-col>
        <van-col span="22">
          <van-row class="van-row-height">
            <van-col span="16" class="font-large">
              <router-link to="/files/form">{{ this.file.name }}</router-link>
            </van-col>
            <van-col
              span="8"
              :class=" this.file.status === 1 ? 'status-float status-color-r':'status-float status-color'"
            >{{ this.file.status == 1 ? '未签署':'已完成' }}</van-col>
          </van-row>
          <van-row class="van-row-height">
            <van-col span="24" class="font-dark">签署方：{{ this.file.publisher }}</van-col>
          </van-row>
          <van-row class="van-row-height">
            <van-col span="24" class="font-dark">发起方：{{ this.file.receiver }}</van-col>
          </van-row>
          <van-row class="van-row-height">
            <van-col span="24" class="font-dark">发起时间：{{ this.file.date }}</van-col>
          </van-row>

          <div v-show="this.file.isDown || this.file.isReport">
            <div class="line"></div>

            <van-row>
              <van-col span="11">&nbsp;</van-col>
              <van-col span="6">
                <van-button class="btn-height" round type="default" size="large">存证报告</van-button>
              </van-col>
              <van-col span="1">&nbsp;</van-col>
              <van-col span="6">
                <van-button class="btn-height" round type="default" size="large">下载</van-button>
              </van-col>
            </van-row>
          </div>
        </van-col>
        <van-col span="1">&nbsp;</van-col>
      </van-row>
    </div>
  </section>
</template>
<script>
import { Button, Row, Col } from "vant";
export default {
  name: "list-item",
  props: ["file"],
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less">
@import "../../../styles/overried.less";
.item {
  width: 95%;
  padding: 10px;
  border-radius: 4px;
  background-color: #fff;
}
.font-large {
  font-size: 18px;
  color: #333333;
  font-weight: bolder;
}
.font-dark {
  font-size: 16px;
  color: #666666;
}
.van-row-height {
  height: 30px;
  line-height: 30px;
}
.van-row-height a {
  color: #333333;
}
.status-float {
  text-align: right;
  vertical-align: middle;
  font-size: 17px;
}
.status-color-r {
  color: #ff4444;
}
.status-color {
  color: #01414a;
}
.line {
  width: 100%;
  border-bottom: 1px double #e6e6e6;
  margin-bottom: 10px;
}
.btn-height {
  height: 30px;
  line-height: 30px;
}
</style>