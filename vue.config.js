// 基础路径 注意发布之前要先修改这里
// let baseUrl = './'
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
    outputDir: 'docs',
    publicPath: process.env.NODE_ENV === 'production' ? '/mobile-demo/' : '/',
    lintOnSave: true,
    productionSourceMap: false,
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         return {
    //             plugins: [
    //                 new BundleAnalyzerPlugin()
    //             ]
    //         }
    //     }
    // },
    chainWebpack: (config) => {
        //忽略的打包文件
        config.externals({
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
        })
        const entry = config.entry('app')
        entry
            .add('babel-polyfill')
            .end()
        entry
            .add('classlist-polyfill')
            .end()
        entry
            .add('@/mock')
            .end()
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    // 重写背景颜色
                    // 'background-color': '#FFF',
                    // 重写 active-color 因为按钮颜色已经被调整为墨绿色 #2198A8
                    'active-color': '#277A86',
                    red: '#01414A',
                    blue: '#3eaf7c',
                    orange: '#f08d49',
                    'text-color': '#111',
                    // 重写NavBar相关变量                    
                    'nav-bar-height': '60px',
                    'nav-bar-background-color': '#01414A',
                    'nav-bar-title-text-color': '#FFF',
                    'nav-bar-icon-color': '#FFF',
                    'nav-bar-text-color': '#FFF',
                    // 重写default按钮边框颜色 背景色保持不变
                    // button-default-background-color;
                    'button-default-color': '#01414A',
                    'button-default-border-color': '#01414A',
                    // 重写primary按钮背景色为墨绿色
                    'button-primary-background-color': '#01414A',
                    'button-primary-border-color': '#01414A',
                }
            }
        }
    }
}