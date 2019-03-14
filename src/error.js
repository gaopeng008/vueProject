import Vue from 'vue';
import store from './store';
import {
  isDebug
} from './config/env';

Vue.config.errorHandler = function (err, vm, info) {
  Vue.nextTick(() => {
    store.commit('ADD_LOGS', {
      type: 'error',
      message: err.message,
      stack: err.stack,
      info
    });

    /**
     * 只要在调试模式下才能输出控制台 测试和生产环境默认必须关闭
     */
    if (isDebug) {
      console.group('>>>>>> 错误信息 >>>>>>')
      console.log(info)
      console.groupEnd();
      console.group('>>>>>> Vue 实例 >>>>>>')
      console.log(vm)
      console.groupEnd();
      console.group('>>>>>> Error >>>>>>')
      console.log(err)
      console.groupEnd();
    }
  })
}