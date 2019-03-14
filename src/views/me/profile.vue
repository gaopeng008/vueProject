<template>
  <div>
    <van-cell-group>
      <!-- <van-cell
        class="cell-height"
        v-for="(item,key,index) in list"
        :key="index"
        :value="item.text"
        :title="$tt(item.i18n)"
      />-->
      <van-cell title="姓名" >{{name}}</van-cell>
      <van-cell title="帐号" >{{phone}}</van-cell>
      <van-cell title="手机号码" >{{phone}}</van-cell>
      <van-cell title="身份证号" >{{idCard}}</van-cell>
      <van-cell title="实名认证" >{{auth}}</van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup } from "vant";
//import { getProfile } from "@/api/user";
import { getUserInfo } from "@/api/user";

export default {
  name: "page-me-profile",
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      name: "",
      account: "",
      phone: "",
      idCard: "",
      auth: ""
      //  list: []
    };
  },
  mounted() {
    // getProfile().then(res => {
    //   this.list = res.data.data || [];
    // });
    getUserInfo().then(res => {
      // this.list = res.data.data || [];
      const info = res.data;
      this.name = info.name;
      this.account = info.code;
      this.phone = info.mobile;
      this.idCard = info.idcard;
    });
  },
  created() {
    this.initLocale({
      "zh-CN": {
        pageMeProfile: {
          name: "姓名",
          account: "账号",
          phone: "手机号码",
          idcardno: "身份证号",
          auth: "实名认证"
        }
      },
      "en-US": {
        pageMeProfile: {
          name: "Username",
          account: "Account",
          phone: "Phone",
          idcardno: "IdCardNO",
          auth: "Authentication status"
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
.cell-height {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
