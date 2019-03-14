<template>
  <div id="app">
    <div class="roll">
      <van-nav-bar
        v-show="title && showNav"
        :title="title"
        :left-text="$t('back')"
        :right-text="rightText"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <footer v-if="showTabbar">
      <van-tabbar v-model="tabbarIndex" @change="handleChange">
        <van-tabbar-item icon="wap-home" size="6em">{{ $t('route.index') }}</van-tabbar-item>
        <van-tabbar-item icon="friends-o" size="6em">{{ $t('route.files') }}</van-tabbar-item>
        <van-tabbar-item icon="setting-o" size="6em">{{ $t('route.me') }}</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
function getQueryString(name) {
  const arr = location.search.substr(1).split("&");
  for (let i = 0, l = arr.length; i < l; i++) {
    const item = arr[i].split("=");
    if (item.shift() === name) {
      return decodeURIComponent(item.join("="));
    }
  }
  return "";
}

import { NavBar, Icon, Toast, Tabbar, TabbarItem } from "vant";
export default {
  name: "app",
  components: {
    [Toast.name]: Toast,
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0
    };
  },
  watch: {},
  created() {},
  computed: {
    showTabbar() {
      const { showTabbar } = this.$route.meta;
      return showTabbar || false;
    },
    title() {
      const { i18n } = this.$route.meta;
      return i18n ? this.$t("route." + i18n) : "";
    },
    rightText() {
      let open = getQueryString("rightedit") === "1";
      return open ? this.$t("edit") : "";
    },
    showNav() {
      const { showNav } = this.$route.meta;
      return showNav;
    },
    tabbarIndex: {
      get() {
        const { barIndex } = this.$route.meta;
        if (barIndex >= 0) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.active = barIndex;
        }
        return this.active;
      },
      set(value) {
        this.active = value || 0;
      }
    }
  },

  methods: {
    onClickLeft() {
      history.back();
    },
    onClickRight() {
      Toast(this.$t("tips"));
    },
    handleChange(active) {
      Toast(active);
      switch (active) {
        case 0:
          this.$router.push({ path: "/" });
          break;
        case 1:
          this.$router.push({ path: "/files" });
          break;
        case 2:
          this.$router.push({ path: "/me" });
          break;
      }
    }
  }
};
</script>
<style lang="less">
// @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
//   .van-tabbar {
//     &--fixed {
//       bottom: 34px;
//     }
//   }
// }
#app {
  width: 100%;
  height: auto;
  overflow: hidden;
  .roll {
    // padding-bottom: 1rem;
    background-color: #f4f4f4;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}

.van-nav-bar {
  a {
    color: #fff;
  }
  &__right {
    font-size: 14px;
  }
}
</style>