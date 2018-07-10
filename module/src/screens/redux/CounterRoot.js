/**
 * 功能:实现Provider对视图部分的包裹
 * Created by YJH on 2018/7/9.
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import {AppNavigator} from './container/CounterApp';

const store = configureStore();

export default class CounterRoot extends Component{

    render(){
        return (
            <Provider store={store} >
                <AppNavigator/>
            </Provider>
        );
    }
}