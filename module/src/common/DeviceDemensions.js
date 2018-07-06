/**
 * 屏幕尺寸获取工具类
 * Created by YJH on 2018/7/6.
 */
import React from 'react';
import {StyleSheet} from 'react-native';

const device = require('Dimensions'); //必须要写这一行，否则报错，无法找到这个变量
export let ScreenWidth = device.get('window').width;
export let ScreenHeight = device.get('window').height;
export let ScreenScale = device.get('window').scale;



