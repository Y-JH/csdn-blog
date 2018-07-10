/**
 * 功能：计数器-事件Action处理Reducer
 * Created by YJH on 2018/7/9.
 */


import * as types from '../constants/CounterTypes';

//初始状态
const initialState = {
    count:0,
};

export default function counter(state = initialState, action) {
    //登录状态
    switch (action.type){
        case types.INCREMENT:
            return Object.assign({}, state, {
                count:state.count + 1,
            });

        case types.DECREMENT:
            return Object.assign({}, state, {
                count:state.count - 1,
            });

        default:
            return state;
    }
}