import Vue from 'vue';
import VueI18n from 'vue-i18n'
import vantEN from 'vant/lib/locale/lang/en-US';
import vantCN from 'vant/lib/locale/lang/zh-CN';
import localEN from './en-US';
import localCN from './zh-CN';

// 应用国际化插件
Vue.use(VueI18n);

// 混合vant组件基础国际化和自定义国际化
const messages = {
  'en-US': {
    ...vantEN,
    ...localEN
  },
  'zh-CN': {
    ...vantCN,
    ...localCN
  }
};

/**
 * 获取默认的国际化语言
 * 这里保留了默认有赞实现逻辑
 */
function getDefaultLang() {
  const langs = Object.keys(messages);
  const { hash } = location;

  for (let i = 0; i < langs.length; i++) {
    if (hash.indexOf(langs[i]) !== -1) {
      return langs[i];
    }
  }

  const userLang = localStorage.getItem('VANT_LANGUAGE') || navigator.language || 'en-US';
  return userLang.indexOf('zh-') !== -1 ? 'zh-CN' : 'en-US';
}

/**
 * 实例化国际化插件
 */
const i18n = new VueI18n({
  locale: getDefaultLang() || 'en-US',
  // locale: 'en-US',
  messages
});

export default i18n;