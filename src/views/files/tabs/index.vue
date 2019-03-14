<template>
  <section>
    <van-tabs v-model="active">
      <van-tab sticky v-for="(item,index) in list" :key="index" :title="$t('ftype.'+item.i18n)">
        <!-- {{ $t('ftype.'+item.type) }} -->
        <list-template :i18n="item.i18n" :ftype="item.ftype"></list-template>
      </van-tab>
    </van-tabs>
  </section>
</template>
<script>
import ListTemplate from "../list";
import { mapGetters } from "vuex";
import { Tabs, Tab } from "vant";
export default {
  name: "page-file-tabs",
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [ListTemplate.name]: ListTemplate
  },
  computed: {
    ...mapGetters["language"]
  },
  mounted() {
    let index = this.$route.params.id || 0;
    this.id = index;
    console.log("index is :" + this.$route.params.id);
  },

  created() {
  },
  data() {
    return {
      active: this.$route.params.id || 0,
      list: [
        {
          id: 0,
          i18n: "all",
          ftype: 0
        },
        {
          id: 1,
          i18n: "wait",
          ftype: 1
        },
        {
          id: 2,
          i18n: "finish",
          ftype: 2
        },
        {
          id: 3,
          i18n: "expires",
          ftype: 3
        },
        {
          id: 4,
          i18n: "denied",
          ftype: 4
        }
      ]
    };
  }
};
</script>