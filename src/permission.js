import router from './router/router';
import {
    validatenull
} from '@/util/validate';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
// import { isDebug } from '@/config/env';
NProgress.configure({
    showSpinner: false
});
router.beforeEach((to, from, next) => {
    //缓冲设置
    if (to.meta.keepAlive === true) {
        to.meta.$keepAlive = true;
    } else {
        NProgress.start();
        to.meta.$keepAlive = (to.meta.keepAlive === true && validatenull(to.meta.$keepAlive));
    }
    // const meta = to.meta || {};
    next();
});

router.afterEach((to, from, ) => {
    // 重新调整了title的处理规则 以vant的国际化为准
    // if (isDebug) {
    //     console.log(to);
    //     console.log(from);
    // }
    NProgress.done();
    
    let {
        i18n
    } = to.meta;
    let title = router.$avueRouter.generateTitle('电子劳动合同', i18n);
    //根据当前的标签也获取label的值动态设置浏览器标题
    router.$avueRouter.setTitle(title);
});