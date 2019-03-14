<template>
  <div style="background-color:#fff;">
    <!-- 首页背景图 -->
    <div>
      <img class="head-img" src="https://test-img.ciicbj.com/wx/images/banner@2x.png">
    </div>
    <div v-if="this.isDebug" class="control">
      <van-row>
        <van-col span="6">
          <van-button :text="$tt('w')" type="info" size="small" @click="stateOne"/>
        </van-col>
        <van-col span="6">
          <van-button :text="$tt('r')" type="primary" size="small" @click="stateTwo"/>
        </van-col>
        <van-col span="6">
          <van-button :text="$tt('q')" type="danger" size="small" @click="stateThree"/>
        </van-col>
        <van-col span="6">
          <van-button :text="$tt('l')" type="default" size="small" @click="handleSetLanguage"/>
        </van-col>
      </van-row>
    </div>
    <!-- 首页状态卡片 -->
    <div class="box">
      <div class="card is-always-shadow">
        <div class="card__body">
          <van-row>
            <van-col v-for="(item,index) in cards" :key="index" class="col-height" span="8">
              <van-row>
                <van-col span="23" class="col-height-child">
                  <router-link class="count-color" :to="item.url">{{item.count}}</router-link>
                </van-col>
                <van-col span="23" class="col-height-child">
                  <router-link class="text-color" :to="item.url"> {{ $tt(item.i18n) }}</router-link>
                  </van-col>
              </van-row>
            </van-col>
            <!-- <van-col class="col-height" span="8">
              <van-row>
                <van-col span="23" class="col-height-child">
                  <router-link to="/files/list/1">0</router-link>
                </van-col>
                <van-col span="23" class="col-height-child">{{ $tt('wait') }}</van-col>
              </van-row>
            </van-col>
            <van-col class="col-height" span="8">
              <van-row>
                <van-col span="23" class="col-height-child">
                  <router-link to="/files/list/2">0</router-link>
                </van-col>
                <van-col span="23" class="col-height-child">{{ $tt('finish') }}</van-col>
              </van-row>
            </van-col>-->
          </van-row>
        </div>
      </div>
    </div>

    <!-- 最近文件 -->
    <div class="file-header">
      <p>{{ $tt('tips') }}</p>
    </div>

    <!-- 未认证 -->
    <div v-if="!isAuth" class="unauth">
      <van-row>
        <van-col span="24" class="unauth-height-small">&nbsp;</van-col>
        <van-col span="24" class="unauth-text-align">
          <img src="https://test-img.ciicbj.com/wx/images/unauth.png">
        </van-col>
        <van-col
          span="24"
          class="unauth-text-align unauth-height-large unauth-text-large"
        >{{ $tt('unauth') }}</van-col>
        <van-col span="24" class="unauth-text-align unauth-height-auto unauth-text-middle">
          实名认证后，在中智签署的合同一旦发生纠纷，
          可申请司法鉴定，申请仲裁等法律服务
        </van-col>
        <van-col span="24">
          <van-cell-group class="user-exit">
            <van-button round type="default" size="large" @click="gotoAuth">{{ $tt('toauth') }}</van-button>
          </van-cell-group>
        </van-col>
        <van-col span="24" class="unauth-height-middle">&nbsp;</van-col>
        <van-col span="24" class="unauth-height-middle">&nbsp;</van-col>
      </van-row>
    </div>

    <!-- 已认证 无文件 -->
    <div v-if="fileList.length === 0 && isAuth" class="auth">
      <van-row>
        <van-col span="24" class="auth-height-middle">&nbsp;</van-col>
        <van-col span="24" class="auth-text-align">
          <img src="https://test-img.ciicbj.com/wx/images/wuneirong-.png">
        </van-col>
        <van-col
          span="24"
          class="auth-text-align auth-height-middle auth-text-middle"
        >{{ $tt('nofiles') }}</van-col>
      </van-row>
    </div>

    <!-- 已认证 有文件 -->
    <div v-if="fileList.length > 0 && isAuth" class="files">
      <van-list v-model="loading" :finished="finished" @load="onLoad">
        <van-cell v-for="item in fileList" :key="item.id">
          <van-row>
            <van-col class="files-height-middle files-text-large" span="16">{{ item.title }}</van-col>
            <van-col class="files-height-middle files-text-small" span="8">{{ item.expires }}</van-col>
          </van-row>
          <van-row>
            <van-col class="files-height-middle files-text-middle" span="2">
              <ciic-text-box type="safe" :value="$tt('publisher')"></ciic-text-box>
            </van-col>
            <van-col
              class="files-height-middle files-text-middle"
              span="4"
            >{{ ' ' +item.publisher }}</van-col>
            <van-col class="files-height-middle files-text-middle" span="2">
              <ciic-text-box type="warning" :value="$tt('receiver')"></ciic-text-box>
            </van-col>
            <van-col
              class="files-height-middle files-text-middle"
              span="4"
            >{{ ' ' + item.receiver }}</van-col>
            <van-col class="files-height-middle files-align" span="12">
              <ciic-text-box-long v-if="item.status === 1 " type="danger" :value="$tt('state1')"/>
              <ciic-text-box-long v-if="item.status === 2 " type="normal" :value="$tt('state2')"/>
            </van-col>
          </van-row>
        </van-cell>
      </van-list>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Row, Col, Cell, CellGroup, Button, List } from "vant";
import CiicTextBox from "@/components/ciic-text-box/";
import CiicTextBoxLong from "@/components/ciic-text-box-long/";
import langMap from "@/lang/views/index/";

export default {
  name: "page-index",
  components: {
    [CiicTextBoxLong.name]: CiicTextBoxLong,
    [CiicTextBox.name]: CiicTextBox,
    [List.name]: List,
    [Row.name]: Row,
    [Col.name]: Col,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  created() {
    this.initLocale(langMap);
  },
  computed: {
    ...mapGetters[("isDebug", "language")],
    initData() {
      return [
        {
          id: "01",
          title: "劳动合同",
          expires: "2019-02-01",
          publisher: "张三",
          receiver: "李四",
          status: 1
        },
        {
          id: "02",
          title: "外企服务分公司劳动合同",
          expires: "长期有效",
          publisher: "中智",
          receiver: "FS5雇员",
          status: 2
        }
      ];
    }
  },
  data() {
    return {
      cards: [
        {
          id: 0,
          i18n: "all",
          url: "/files/list/0",
          count: 1
        },
        {
          id: 1,
          i18n: "wait",
          url: "/files/list/1",
          count: 1
        },
        {
          id: 2,
          i18n: "finish",
          url: "/files/list/2",
          count: 1
        }
      ],
      isAuth: true,
      fileList: [
        {
          id: "01",
          title: "劳动合同",
          expires: "2019-02-01",
          publisher: "张三",
          receiver: "李四",
          status: 1
        },
        {
          id: "02",
          title: "外企服务分公司劳动合同",
          expires: "长期有效",
          publisher: "中智",
          receiver: "FS5雇员",
          status: 2
        }
      ],
      loading: false,
      finished: true
    };
  },
  methods: {
    handleSetLanguage() {
      let setLang = this.language === "zh-CN" ? "en-US" : "zh-CN";
      this.$i18n.locale = setLang;
      this.$store.commit("SET_LANGUAGE", setLang);
    },
    gotoAuth() {},
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.finished = true;
      }, 3000);
    },
    stateThree() {
      if (this.isDebug) {
        this.isAuth = true;
        this.fileList = this.initData;
      }
    },
    stateTwo() {
      if (this.isDebug) {
        this.isAuth = true;
        this.fileList = [];
      }
    },
    stateOne() {
      if (this.isDebug) {
        this.isAuth = false;
        this.fileList = [];
      }
    },
    changeLanguage() {}
  }
};
</script>

<style lang="less">
@import "../../styles/overried.less";
.head-img {
  width: 100%;
  display: block;
}
.box {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 144px;
}
.control {
  width: 100%;
  text-align: center;
  position: absolute;
  top: 20px;
}
.card {
  margin: 0 20px 0 20px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);

  &__body {
    padding: 10px 0 10px 0;
  }
}
.col-height {
  height: 80px;
}
.col-height-child {
  text-align: center;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
}
.file-header {
  padding-top: 70px;
  padding-left: 10px;
  border-bottom: 1px solid #e6e6e6;
}
.unauth {
  padding-left: 20px;
  padding-right: 20px;

  &-height-large {
    height: 45px;
    line-height: 45px;
  }
  &-height-middle {
    height: 30px;
    line-height: 30px;
  }
  &-height-small {
    height: 20px;
    line-height: 20px;
  }
  &-text-align {
    text-align: center;
    float: left;
  }

  &-text-large {
    font-size: 22px;
    color: #ff4e4e;
  }
  &-text-middle {
    font-size: 16px;
    color: #666666;
  }
}

.auth {
  padding-left: 20px;
  padding-right: 20px;

  &-height-auto {
    height: auto;
    line-height: auto;
  }
  &-height-middle {
    height: 30px;
    line-height: 30px;
  }

  &-text-align {
    text-align: center;
    float: left;
  }

  &-text-middle {
    font-size: 16px;
    color: #999999;
  }
}

.files {
  border-bottom: 1px solid #e6e6e6;
  &-height-middle {
    height: 24px;
    line-height: 24px;
  }
  &-align {
    text-align: right;
  }
  &-text-large {
    font-size: 18px;
    color: #333333;
    text-align: left;
  }
  &-text-middle {
    font-size: 16px;
    color: #999999;
    text-align: left;
  }
  &-text-small {
    font-size: 14px;
    color: #999999;
    text-align: right;
  }
}

.user {
  &-exit {
    // background-color: #fafafa;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  &-exit::after {
    border-width: 0 0;
  }
}
.count-color {
  color:'#01414A';
}
.text-clor{
  color:#333333;
}
</style>