<template>
  <div>
    <van-cell-group>
      <van-cell
        is-link
        v-for="(item,index) in navigators"
        :key="index"
        :title="$tt(item.i18n)"
        :to="item.to"
        class="cell-height"
      />
    </van-cell-group>

    <van-cell-group class="profile-exit">
      <van-button round type="primary" size="large" @click="logout">{{ $t('logout') }}</van-button>
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup, Button } from "vant";

export default {
  name: "me",
  components: {
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      navigators: [
        {
          i18n: "sign",
          to: "/sign"
        },
        {
          i18n: "certificate",
          to: "/certificate"
        },
        {
          i18n: "me",
          to: "/profile"
        }
      ]
    };
  },
  created() {
    this.initLocale({
      "zh-CN": {
        me: {
          sign: "我的签名",
          me: "我的信息",
          certificate: "认证证书"
        }
      },
      "en-US": {
        me: {
          sign: "My Sign",
          me: "My Profile",
          certificate: "My Certificate"
        }
      }
    });
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

.vant-cell-group {
  &-margin {
    margin-bottom: 220px;
  }
}
.cell-height {
  padding-top: 20px;
  padding-bottom: 20px;
}
.profile-exit {
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 120px;
  background-color: #f4f4f4;
}
#resetheight {
  height: 40px;
  line-height: 40px;
}
</style>
