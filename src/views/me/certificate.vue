<template>
  <div class="container">
    <span class="content">您已经获得了一张CWCA颁发的可信证书。</span>
    <div>
      <img
        class="user-poster"
        src="https://test-img.ciicbj.com/wx/images/certificate.png"
      >
    </div>
  </div>
</template>

<script>
import { Row, Col } from "vant";
export default {
  name: "page-me-cert",
  components: {
    [Row.name]: Row,
    [Col.name]: Col
  },
  methods: {}
};
</script>

<style lang="less">
.container {
  padding: 20px;
  .content {
    margin-bottom: 20px;
    float: left;
  }
}
.user {
  &-poster {
    width: 100%;
    display: block;
  }
  &-content {
    text-align: center;
    float: center;
  }
}
</style>
