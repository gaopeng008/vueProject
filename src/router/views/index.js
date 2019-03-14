export default [{
    path: '/goods',
    name: '商品详情',
    component: () =>
        import( /* webpackChunkName: "page" */ '@/views/goods'),
    meta: {
        i18n: 'goods'
    }
}, {
    path: '/cart',
    name: '购物车',
    meta: {
        i18n: 'cart'
    },
    component: () =>
        import( /* webpackChunkName: "page" */ '@/views/cart'),
}, {
    path: '/usercenter',
    name: '个人中心',
    meta: {
        i18n: 'usercenter'
    },
    component: () =>
        import( /* webpackChunkName: "page" */ '@/views/user'),
}, {
    path: '/me',
    name: '我的',
    meta: {
        i18n: 'me',
        showNav: true,
        isAuth: true,
        showTabbar: true,
        barIndex: 2,
    },
    component: () =>
        import( /* webpackChunkName: "page" */ '@/views/me/'),
}, {
    path: '/profile',
    name: '我的信息',
    meta: {
        i18n: 'profile',
        showNav: true,
        isAuth: true,
    },
    component: () =>
        import( /* webpackChunkName: "page" */ '@/views/me/profile'),
}, {
    path: '/sign',
    name: '我的信息',
    meta: {
        i18n: 'sign',
        showNav: true,
        isAuth: true,
    },
    component: () =>
        import( /* webpackChunkName: "page" */ '@/views/me/sign'),
}, {
    path: '/certificate',
    name: '认证证书',
    meta: {
        i18n: 'certificate',
        showNav: true,
        isAuth: true,
    },
    component: () =>
        import( /* webpackChunkName: "page" */ '@/views/me/certificate'),
}, {
    path: '/files',
    redirect: '/files/list/0',
    meta: {
        i18n: 'files',
        showNav: true,
        isAuth: true,
    },
    component: () =>
        import( /* webpackChunkName: "page" */ '@/views/files'),
    children: [{
        path: 'list/:id',
        name: '合同列表',
        meta: {
            i18n: 'files',
            showNav: true,
            isAuth: true,
        },
        component: () =>
            import( /* webpackChunkName: "page" */ '@/views/files/tabs'),
    }, {
        path: 'form',
        name: '合同信息填写',
        meta: {
            i18n: 'contractinfo',
            showNav: true,
            isAuth: true,
            // barIndex: 1,
            // showTabbar: true,
        },
        component: () =>
            import( /* webpackChunkName: "page" */ '@/views/files/form'),
    }, {
        path: '/preview',
        name: '合同预览',
        meta: {
            i18n: 'preview',
            showNav: true,
            isAuth: true,
            barIndex: 1,
            showTabbar: true,
        },
        component: () =>
            import( /* webpackChunkName: "page" */ '@/views/files/preview'),
    }]
}]