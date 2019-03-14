import Vue from 'vue';
import axios from './router/axios';
import VueAxios from 'vue-axios';
import App from './App';
import router from './router/router';
import './permission'; // 权限
import './error'; // 日志
import store from './store';
import { loadStyle } from './util/util';
import * as urls from '@/config/env';
import {
    iconfontUrl,
    iconfontVersion
} from '@/config/env';
import i18n from './lang/index';
import i18nmixin from './mixins';
import CiicTextBox from '@/components/ciic-text-box';
import CiicTextBoxLong from '@/components/ciic-text-box-long';

// 注册自定义公共组件
Vue.component(CiicTextBox.name, CiicTextBox);
Vue.component(CiicTextBoxLong.name, CiicTextBoxLong);
import basicContainer from './components/basic-container/main';

Vue.use(router);
Vue.use(VueAxios, axios);

Vue.use(window.AVUE, {
    i18n: (key, value) => i18n.t(key, value)
})
// 混入全局$tt函数用于自定义组件内简化国际化调用
Vue.mixin(i18nmixin); 
 
// 注册全局容器
Vue.component('basicContainer', basicContainer)
// 加载相关url地址
Object.keys(urls).forEach(key => {
    Vue.prototype[key] = urls[key];
})

// 动态加载阿里云字体库
iconfontVersion.forEach(ele => {
    loadStyle(iconfontUrl.replace('$key', ele));
})

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')