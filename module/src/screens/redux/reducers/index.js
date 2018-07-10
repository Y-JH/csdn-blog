/**
 * 功能：reducer 入口
 * Created by YJH on 2018/7/9.
 */

import {combineReducers} from 'redux';
import loginIn from './loginReducer';
import counter from './CounterReducer';

const rootReducer = combineReducers({
    loginIn:loginIn,
    counter:counter,

});

export default rootReducer;