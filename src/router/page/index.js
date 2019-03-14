export default [{
        path: '/login',
        name: '登录页',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/page/login/index'),
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false,
            i18n: 'login',
            showNav: true
        }
    }, {
        path: '/verify',
        name: '登录结果页',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/page/login/status'),
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false,
            i18n: 'loginstatus',
            showNav: true
        }
    },
    {
        path: '/404',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/components/error-page/404'),
        name: '404',
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }

    },
    {
        path: '/403',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/components/error-page/403'),
        name: '403',
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }
    },
    {
        path: '/500',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/components/error-page/500'),
        name: '500',
        meta: {
            keepAlive: true,
            isTab: false,
            isAuth: false
        }
    },
    {
        path: '/',
        name: '主页',
        component: () =>
            import( /* webpackChunkName: "page" */ '@/views/index'),
        meta: {
            i18n: 'index',
            showTabbar: true,
            barIndex: 0,
        }
    },
    {
        path: '/myiframe',
        redirect: '/myiframe',
        children: [{
            path: ":routerPath",
            name: 'iframe',
            component: () =>
                import( /* webpackChunkName: "page" */ '@/components/iframe/main'),
            props: true
        }]
    },
    {
        path: '*',
        redirect: '/404'
    }
]