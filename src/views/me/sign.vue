<template>
  <van-row class="row-control">
    <van-col v-for="(img,key) in list" v-bind:key="key" class="cel-control">
      <img class="img-width" :src="img">
    </van-col>
  </van-row>
</template>

<script>
import { Row, Col } from "vant";

export default {
  name: "page-me-sign",
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  },
  data() {
    return {
      list: [
        "https://test-img.ciicbj.com/wx/images/sign1.png",
        "https://test-img.ciicbj.com/wx/images/sign2.png",
        "https://test-img.ciicbj.com/wx/images/sign3.png",
        "https://test-img.ciicbj.com/wx/images/sign4.png"
      ]
    };
  },
  created() {},
  methods: {}
};
</script>

<style lang="less">
.row-control {
  padding-left: 20px;
}
.cel-control {
  width: 50%;
  padding: 20px 20px 20px 0;
}
.img-width {
  width: 100%;
}
</style>
