<template>
  <div id="cbox-long">
    <div :id="this.style">{{ this.value }}</div>
  </div>
</template>
<script>
export default {
  name: "ciic-text-box-long",
  props: {
    // 定义四种不同的类型 用于区分颜色
    value: {
      type: [String],
      default: "无"
    },
    type: {
      type: [String],
      default: "normal"
    },
    float: {
      type: [String],
      default: 'left'
    }
  },
  computed: {
    style() {
      let fullStyle = "cbox-long";
      switch (this.type) {
        case "danger":
          fullStyle = fullStyle + "--danger";
          break;
        case "warning":
          fullStyle = fullStyle + "--warning";
          break;
        case "safe":
          fullStyle = fullStyle + "--safe";
          break;
        default:
          fullStyle = fullStyle + "--normal";
          break;
      }
      return fullStyle;
    }
  },
  data() {
    return {
      content: this.value
    };
  }
};
</script>

<style lang="less">
#cbox-long {
  width: auto;
  max-width: 80px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  vertical-align: middle;
  float: right;
}
#cbox-long--danger {
  // red
  border: 1px solid #ff5f5f;
  color: #ff5f5f;
  padding:0 2px 0 2px;
}

#cbox-long--warning {
  // yellow
  border: 1px solid #ffa72b;
  padding:0 2px 0 2px;
  color: #ffa72b;
}

#cbox-long--safe {
  // 墨绿
  border: 1px solid #01414a;
  color: #01414a;
  padding:0 2px 0 2px;
}

#cbox-long--normal {
  // 灰色
  border: 1px solid #999999;
  color: #999999;
  padding:0 2px 0 2px;
}
</style>
