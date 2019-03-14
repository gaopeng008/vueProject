import Mock from 'mockjs'
const top = [];
const first = [];
const second = [];
const third = [];
export default ({ mock }) => {
    if (!mock) return;
    let menu = [first, second, third];
    Mock.mock('/user/getMenu', 'get', (res) => {
        let body = JSON.parse(res.body);
        return {
            data: menu[body.type] || []
        }
    })
    Mock.mock('/user/getTopMenu', 'get', () => {
        return {
            data: top
        }
    })
}