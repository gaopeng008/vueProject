/* eslint-disable import/no-duplicates */
<template>
  <div class="goods">
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb">
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ formatProductName() }}</div>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">{{ $tt('freight') }}：{{ goods.express }}</van-col>
        <van-col span="14">{{ $tt('surplus') }}：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell :value="$tt('enter')" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">{{ $tt('shopname') }}</span>
          <van-tag class="goods-tag" type="danger">{{ $tt('official') }}</van-tag>
        </template>
      </van-cell>
      <van-cell :title="$tt('offline')" icon="location-o" is-link @click="sorry"/>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell :title="$tt('detail')" is-link @click="sorry"/>
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-mini-btn
        icon="chat-o"
        @click="handleNewError"
      >{{ $tt('error') }}</van-goods-action-mini-btn>
      <van-goods-action-mini-btn
        icon="chat-o"
        @click="onClickCustomer"
      >{{ $tt('customerservice') }}</van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickCart">{{ $tt('cart') }}</van-goods-action-mini-btn>
      <van-goods-action-mini-btn icon="cart-o" @click="onClickUser">{{ $tt('user') }}</van-goods-action-mini-btn>
      <!-- <van-goods-action-big-btn @click="sorry">{{ $tt('add') }}</van-goods-action-big-btn> -->
      <van-goods-action-big-btn primary @click="handleSetLanguage">{{ $t('lang') }}</van-goods-action-big-btn>
    </van-goods-action>
  </div>
</template>

<script>
import langMap from "@/lang/views/goods/";

import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from "vant";

export default {
  name: "van-doc-demo-pages",
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },

  data() {
    return {      
      goods: {
        error: "错误",
        title: "美国伽力果（约680g/3个）",
        price: 2680,
        express: "免运费",
        remain: 19,
        thumb: [
          "https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg",
          "https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg"
        ]
      }
    };
  },

  created() {
    this.initLocale(langMap);
  },
  computed: { 
  },
  methods: {
    handleNewError() {
      console.log(aaa);
    },
    formatPrice() {
      return this.$t("moneyunit") + (this.goods.price / 100).toFixed(2);
    },

    formatProductName() {
      return this.$t("vanDocDemoPages.goods.title");
    },

    onClickCart() {
      this.$router.push("/cart");
    },

    onClickUser() {
      this.$router.push("/usercenter");
    },

    sorry() {
      Toast("暂无后续逻辑~");
    },
    onClickCustomer() {
      this.$router.push("/usercenter");
    },

    handleSetLanguage() {
      let setLang = this.language === "zh-CN" ? "en-US" : "zh-CN";
      this.$i18n.locale = setLang;
      this.$store.commit('SET_LANGUAGE',setLang);
    }
  }
};
</script>

<style lang="less">
.goods {
  padding-bottom: 50px;

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
    }
  }

  &-tag {
    margin-left: 5px;
  }
}
</style>
