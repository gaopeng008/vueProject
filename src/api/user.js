import request from '@/router/axios';
import {
    baseUrl
} from '@/config/env';

export const loginByUsername = (username, password, code, redomStr) => request({
    url: baseUrl + '/user/login',
    method: 'post',
    data: {
        username,
        password,
        code,
        redomStr
    }
})

export const getUserInfo = () => request({
  //  url: baseUrl + '/user/getUserInfo',
  url: baseUrl + "/employee/user_info",
    method: 'get',
    meta: {
        isToken: true
    }
});

export const refeshToken = () => request({
    url: baseUrl + '/user/refesh',
    method: 'post'
});

export const sendLogs = (list) => request({
    url: baseUrl + '/user/logout',
    method: 'post',
    data: list
});

export const logout = () => request({
    url: baseUrl + '/user/logout'
});

export const getProfile = () => request({
    url: baseUrl + '/user/profile'
});
