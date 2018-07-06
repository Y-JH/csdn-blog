/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {StackNavigator,NavigationActions} from 'react-navigation';
import FlatlistScreen from './module/src/screens/FlatlistScreen';
import NavigationScreen from './module/src/screens/NavigationScreen';
import HomeScreen from './module/src/screens/HomeScreen';

export const AppNavigator = StackNavigator(
    {
        home:{
            screen:HomeScreen,
        },
        flat_list:{
            screen:FlatlistScreen,
        },
        navigation:{
            screen:NavigationScreen,
        }
    }, {
        initialRouteName: 'home', // 默认显示界面
        headerMode: 'none',//导航栏的显示模式-隐藏导航栏
        mode:'card',//页面切换模式-普通app常用的左右切换
    },
);

