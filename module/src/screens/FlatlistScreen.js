/**
 * flatlist 实现组件
 * Created by YJH on 2018/7/6.
 */

import React, {Component} from 'react';
import {View,DeviceEventEmitter} from 'react-native';
import {styles} from './FlatlistScreenStyle';
import MyFlatList from "../components/MyFlatList";
import {Colors} from "../common/Colors";
import TitleBar from "../common/TitleBar";
import Toast, {DURATION} from 'react-native-easy-toast';

export default class FlatlistScreen extends Component {
    constructor(props) {
        super(props);
        this.unmount = false;
        this.state = ({
            dataSource : [],
            isRefresh: true,
        });
    }
    componentDidMount() {
        //组件加载完成之后，注册通之
        this.listener = DeviceEventEmitter.addListener('showToast', (text) => {
            this.refs.toast.show(text, DURATION.LENGTH_SHORT);
        });

        //制造首次进入的刷新效果
        this.loadData();
    }
    componentWillUnmount() {
        this.listener && this.listener.remove();
    }

    /**
     * 功能：使用箭头函数，不使用bind；因为bind函数每调用一次就会创建一个新的函数
     */
    onRefresh() {
        this.setState({
            isRefresh: true,
        });

        //功能：制造刷新效果
        this.interval = setInterval(() => {
            clearInterval(this.interval);
            //功能：制造上拉加载更多的效果
            const data = [];
            for (let i = 0; i < 8; i++) {
                data.push({id: i, title: '亲子旅游日带娃儿玩' + i + '折起', state: '已过期', date: '2018/06/0' + (i - 8)},)
            }
            this.setState({
                dataSource: data,
                isRefresh: false,
            });

        }, 2000)
    }

    async onLoadMore() {
        //功能：制造上拉加载更多的效果
        if(this.unmount){return;}
        let start = this.state.dataSource.length;
        let end = start +3;
        for (let i = start; i < end; i++) {
            this.state.dataSource.push({id: i, title: '五一折扣日带娃儿玩' + i + '折起', state: '已过期', date: '2017/06/0' + (i - 8)},)
        }

        this.setState({
            dataSource: this.state.dataSource,
        });
    }
    separator() {
        return (<View style={styles.line}/>)
    }


    componentWillUnmount(){
        this.unmount = true;
    }
    loadData(){
        const data = [];
        for (let i = 0; i < 8; i ++){
            data.push({id: i, title: '亲子折扣日带娃儿玩'+i+'折起', state: '进行中', date: '2018/06/0'+(8-i)},)
        }


        this.setState({
            dataSource: data,
            isRefresh: false,
        });
    }

    render() {
        return (<View style={styles.container}>
            <TitleBar
                {...this.props}
                title = "FlatList"
                headerBar = {{backgroundColor:Colors.black}}
                statusBar = {{backgroundColor:Colors.black}}
            />
            <Toast ref='toast'/>
            <MyFlatList
                {...this.props}
                itemSeparator={() => this.separator()}
                data={this.state.dataSource}
                onRefresh = {()=>this.onRefresh()}
                refreshing = {this.state.isRefresh}
                onLoadMore = {()=>this.onLoadMore()}
            />
        </View>);
    }
}


