import website from '@/config/website'
const common = {
    state: {
        isDebug: process.env.NODE_ENV !== 'production',
        language: localStorage.getItem('VANT_LANGUAGE') || 'zh—CN',
        website: website,
    },
    mutations: {
        SET_LANGUAGE: (state, language) => {
            state.language = language;
            localStorage.setItem('VANT_LANGUAGE', state.language);
        },
    }
}
export default common