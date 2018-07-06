/**
 * 自封装的FlatList
 * Created by YJH on 2018/7/6.
 */

import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import ListItem from './ListItem';
import Toast, {DURATION} from 'react-native-easy-toast';
import {Colors} from '../common/Colors';

export default class MyFlatList extends Component {
    constructor(props) {
        super(props);

        this.state={
            isRefresh:true,
            dataSource : [],
        }

    }


    componentDidMount(){
        //制造首次进入的刷新效果
        this.interval = setInterval(()=>{
            clearInterval(this.interval);
            this.setState({
                isRefresh:false,
            });

        },1500)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.data !== this.props.data){
            this.setState({
                dataSource:nextProps.data,
            });
        }
    }

    /**
     * 功能：实现添加header功能，当然footer功能也是一样的；
     * @returns {XML}
     * @private
     */
    _header = ()=>{
        return (<View stlye = {{flex:1, justifyContent:'center', backgroundColor:Colors.bg}}>
            <Text style={{fontSize:12, fontWeight:'800', color:Colors.blue, alignSelf:'center'}}>FlatList功能展示</Text>
        </View>)
    };

    /**
     * 功能：item的点击监听效果
     * @private
     */
    _onItemPress() {
        this.refs.toast.show("hell world.", DURATION.LENGTH_SHORT);
    }

    /**
     * 功能：每个item的渲染
     * @param item
     * @param separators
     * @private
     */
    _renderItem = ({item, separators}) => (
        <ListItem
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
            item={item}
            onPress={() => this._onItemPress()}
        />);
    _keyExtractor = (item, index) => item.id;


    /**
     * 功能：使用箭头函数，不使用bind；因为bind函数每调用一次就会创建一个新的函数
     */
    onRefresh(){
     //功能：制造刷新效果
        this.interval = setInterval(()=>{
            clearInterval(this.interval);
            this.setState({
                isRefresh:false,
            });

        },3000)
    }

    onLoadMore(){
        //功能：制造上拉加载更多的效果
        const data = [];
        for(let i = 8; i < 12; i++){
            data.push({id: i, title: '亲子折扣日带娃儿玩'+i+'折起', state: '已过期', date: '2018/06/0'+(i-8)},)
        }
        this.setState({
            dataSource:this.state.dataSource.concat(data)
        });
    }


    render() {
        return (<View style={{flex: 1, backgroundColor: Colors.bg}}>
            <FlatList
                ref = {(flatlist)=>this.flatlist = flatlist}
                ListHeaderComponent={this._header}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this.props.itemSeparator}
                data={this.state.dataSource}
                keyExtractor={this._keyExtractor}
                onRefresh = {()=>this.onRefresh()}
                refreshing = {this.state.isRefresh}
                onEndReachedThreshold={20}
                onEndReached={
                    ()=>this.onLoadMore()
                }
            />
            <Toast ref='toast'/>
        </View>);
    }
}

