import {
    camelize
} from '@/util/tools';
import {
    mapGetters
} from 'vuex';
export default {
    methods: {
        initLocale: function (messages) {
            if (messages) {
                for (let key in messages) {
                    this.$i18n.mergeLocaleMessage(key, messages[key]);
                }
            }
        }
    },
    computed: {
        ...mapGetters(['language']),
        // 国际化有时需要按用途、业务类型或者自定义模块来组织自己的国际化包
        // 为了方便调用 需要用类似命令空间的形式来组织
        // 默认约定的规则为 当前组件的国际化 依赖于组件的名称(name)来获取
        // 为了方便在组件中使用国际化 通过mixins解决
        $tt(){
            const {
                name
            } = this.$options;
            const prefix = name ? camelize(name) + '.' : '';
            return (path, ...args) => {
                let localeKey = prefix + path;
                // 只接收第一个参数做为国际化失败后的默认值 其它忽略
                let [a] = [...args];
                let value = this.$t(localeKey);
                return value ? value : (a == undefined ? '' : a);
            };
        },
    }
}