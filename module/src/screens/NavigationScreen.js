/**
 * flatlist 实现组件
 * Created by YJH on 2018/7/6.
 */

import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './NavigationScreenStyle';

export default class NavigationScreen extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (<View style={styles.container}>
            <Text style={{fontSize:40, fontWeight:'600', color:'#000', alignSelf:'center',textAlign:'center'}}>hello world</Text>
        </View>);
    }
}


