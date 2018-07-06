/**
 * flatlist 实现组件
 * Created by YJH on 2018/7/6.
 */

import React, {Component} from 'react';
import {View,} from 'react-native';
import {styles} from './FlatlistScreenStyle';
import MyFlatList from "../components/MyFlatList";
import {Colors} from "../common/Colors";
import TitleBar from "../common/TitleBar";

export default class FlatlistScreen extends Component {
    constructor(props) {
        super(props);
    }


    separator() {
        return (<View style={styles.line}/>)
    }

    getData(){
        const data = [];
        for (let i = 0; i < 8; i ++){
            data.push({id: i, title: '亲子折扣日带娃儿玩'+i+'折起', state: '进行中', date: '2018/06/0'+(8-i)},)
        }
        return data;
    }

    render() {
        return (<View style={styles.container}>
            <TitleBar
                {...this.props}
                title = "FlatList"
                headerBar = {{backgroundColor:Colors.black}}
                statusBar = {{backgroundColor:Colors.black}}
            />
            <MyFlatList
                itemSeparator={() => this.separator()}
                data={this.getData()}
            />
        </View>);
    }
}


