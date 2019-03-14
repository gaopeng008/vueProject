<template>
  <iframe
    v-show="iframeState"
    id="show-iframe"
    frameborder="0"
    name="showHere"
    scrolling="auto"
    :src="src"
  ></iframe>
</template>
<script>
import { mapGetters } from "vuex";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default {
  name: "file-preview",
  data() {
    return {
       iframeState:true,
       src: 'https://www.baidu.com/',
    }
  },
  mounted(){
    const oIframe = document.getElementById('show-iframe');
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight = document.documentElement.clientHeight;
    oIframe.style.width = deviceWidth + 'px';
    oIframe.style.height = deviceHeight + 'px';
  },
  created() {
    NProgress.configure({ showSpinner: false });
  },   
  methods: {
    show() {
      NProgress.start();
    },
    hide() {
      NProgress.done();
    },
  }
};
</script>
<style lang="less" scoped>
.iframe {
  width: 100%;
  height: 100%;
  border: 0;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
