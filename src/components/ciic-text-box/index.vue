<template>
  <div id="cbox">
    <div :id="this.style">{{ this.value }}</div>
  </div>
</template>
<script>
export default {
  name: "ciic-text-box",
  props: {
    // 定义四种不同的类型 用于区分颜色
    value: {
      type: [String],
      default: "无"
    },
    type: {
      type: [String],
      default: "normal"
    }
  },
  computed: {
    style() {
      let fullStyle = "cbox";
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
#cbox {
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  vertical-align: middle;
}
#cbox--danger {
  //red
  border: 1px solid #ff5f5f;
  color: #ff5f5f;
}

#cbox--warning {
  //yellow
  border: 1px solid #ffa72b;
  color: #ffa72b;
}

#cbox--safe {
  //墨绿
  border: 1px solid #01414a;
  color: #01414a;
}

#cbox--normal {
  //蓝色
  border: 1px solid #00abf6;
  color: #00abf6;
}
</style>
