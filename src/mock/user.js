import Mock from 'mockjs'
export default ({
    mock
}) => {
    if (!mock) return;
    // 用户登录
    Mock.mock('/user/login', 'post', {
        data: new Date().getTime() + ''
    });
    // 用户退出
    Mock.mock('/user/logout', 'get', {
        data: true,
    });
    // 刷新token
    Mock.mock('/user/refesh', 'post', {
        data: new Date().getTime() + ''
    });

    // 获取用户基本信息
    Mock.mock('/user/profile', 'get', {
        data: [{
                i18n: "name",
                text: "李斌"
            },
            {
                i18n: "account",
                text: "129384321"
            },
            {
                i18n: "phone",
                text: "15201231217"
            },
            {
                i18n: "idcardno",
                text: "4113381977****9923"
            },
            {
                i18n: "auth",
                text: "已认证"
            }
        ]
    });


}