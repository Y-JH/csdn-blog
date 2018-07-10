/**
 * Created by YJH on 2018/7/9.
 */
import * as types from '../constants/CounterTypes';

export function decrement() {
    return {
        type: types.DECREMENT,
    }
}

export function increment() {
    return {
        type: types.INCREMENT,
    }
}