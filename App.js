/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {StackNavigator, NavigationActions} from 'react-navigation';
import FlatlistScreen from './module/src/screens/FlatlistScreen';
import NavigationScreen from './module/src/screens/NavigationScreen';
import HomeScreen from './module/src/screens/HomeScreen';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

/**
 * 制定切换的动画
 * 假如希望 StackNavigator 内的某个页面
 * 使用forVertical的跳转动画效果，
 * 调用this.props.navigate('xxxScreen', { transition: 'forVertical' });切换页面即可。
 * @constructor
 */
const TransitionConfiguration = () => ({
    screenInterpolator: (sceneProps) => {
        const {scene} = sceneProps;
        const {route} = scene;
        const params = route.params || {};
        const transition = params.transition || 'forHorizontal';
        return CardStackStyleInterpolator[transition](sceneProps);
    },
});

export const AppNavigator = StackNavigator(
    {
        home: {
            screen: HomeScreen,
        },
        flat_list: {
            screen: FlatlistScreen,
        },
        navigation: {
            screen: NavigationScreen,
        }
    },

    {
        initialRouteName: 'home', // 默认显示界面
        headerMode: 'none',//导航栏的显示模式-隐藏导航栏
        transitionConfig: TransitionConfiguration,
        mode: 'card',//页面切换模式-普通app常用的左右切换
    },
);

