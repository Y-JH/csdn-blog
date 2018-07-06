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

    render() {
        return (<View style={styles.container}>
            <TitleBar
                {...this.props}
                title = "FlatList功能展示"
                headerBar = {{backgroundColor:Colors.black}}
                statusBar = {{backgroundColor:Colors.black}}
            />
            <MyFlatList
                itemSeparator={() => this.separator()}
                data={[
                    {id: 0, title: '亲子折扣日带娃儿玩3折起', state: '进行中', date: '2018/06/07'},
                    {id: 1, title: '亲子折扣日带娃儿玩3折起', state: '进行中', date: '2018/06/07'},
                    {id: 2, title: '亲子折扣日带娃儿玩3折起', state: '进行中', date: '2018/06/07'},
                    {id: 3, title: '亲子折扣日带娃儿玩3折起', state: '进行中', date: '2018/06/07'},
                    {id: 4, title: '亲子折扣日带娃儿玩3折起', state: '进行中', date: '2018/06/07'},
                    {id: 5, title: '亲子折扣日带娃儿玩3折起', state: '进行中', date: '2018/06/07'},
                ]}
            />
        </View>);
    }
}


