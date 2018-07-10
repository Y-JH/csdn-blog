/**
 * 功能：登录操作-事件Action处理Reducer
 * Created by YJH on 2018/7/9.
 */


import * as types from '../constants/LoginTypes';

//初始状态
const initialState = {
    status:'点击登录',
    isSuc :false,
    user  :{},
};

export default function loginIn(state = initialState, action) {
    //登录状态
    switch (action.type){
        case types.LOGIN_IN_DOING:
            return Object.assign({}, state, {
                status:'正在登录..',
            });

        case types.LOGIN_IN_DONE:
            return Object.assign({}, state, {
                status:'登录成功',
                isSuc :true,
                user  :action.user
            });

        case types.LOGIN_IN_ERROR:
            return Object.assign({}, state, {
                status:'登录失败',
                isSuc :true,
            });

        default:
            return state;
    }
}