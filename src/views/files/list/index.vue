<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-cell class="background-dark" v-for="item in list" :key="item.id">
      <list-item :file="item"></list-item>
    </van-cell>
  </van-list>
</template>
<script>
import { mapGetters } from "vuex";
import { List, Cell } from "vant";
import FileItem from "./item";
import { getDocuments } from "@/api/files";
export default {
  name: "list-template",
  props: ["i18n", "ftype"],
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    [FileItem.name]: FileItem
  },
  computed: {
    ...mapGetters["language"]
  },
  created() {},
  data() {
    return {
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      console.log(this.ftype);
      getDocuments(this.ftype).then(res => {
        const data = res.data.data;
        console.log(data);
        this.list = data || [];
        this.loading = false;
        this.finished = true;
      });
      // // 异步更新数据
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.list.push(this.i18n + this.list.length + 1);
      //   }
      //   // 加载状态结束
      //   this.loading = false;

      //   // 数据全部加载完成
      //   if (this.list.length >= 40) {
      //     this.finished = true;
      //   }
      // }, 500);
    }
  }
};
</script>
<style lang="less">
.background-dark {
  background: #f4f4f4;
}
.van-list__finished-text{
  background:#f4f4f4;
}
</style>
