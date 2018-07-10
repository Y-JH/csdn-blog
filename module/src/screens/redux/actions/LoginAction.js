/**
 * 功能：设定事件Action
 * Created by YJH on 2018/7/9.
 */

import * as types from '../constants/LoginTypes';

const user = {
    account: 'ztman@gmail.com',
    name: '唐三',
    sex:1,
    age:22,
};

// loginRequesting = () => {
//     return {
//         type: types.LOGIN_IN_DOING
//     }
// };
//
// loginComplete = (isSuc, user) => {
//     return {
//         type: types.LOGIN_IN_DONE,
//         user:user,
//     }
// };
//
// loginError = (isSuc, user) => {
//     return {
//         type: types.LOGIN_IN_ERROR,
//         user:user,
//     }
//
// };

function loginRequesting() {
    return {
        type: types.LOGIN_IN_DOING
    }
}

function loginComplete(isSuc, user) {
    return {
        type: types.LOGIN_IN_DONE,
        user:user,
    }
}

function loginError(isSuc, user) {
    return {
        type: types.LOGIN_IN_ERROR,
        user:user,
    }
}

let suc = true;
export function login() {
    return dispatch => {
        dispatch(loginRequesting());//执行登录的请求
        //模拟登录过程
        this.interval = setInterval(() => {
            clearInterval(this.interval);
            if (suc) {
                dispatch(loginComplete(true,user));//登录成功
            } else {
                dispatch(loginError(false,user));//登录失败
            }

        }, 1500);
    }
}