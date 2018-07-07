/**
 * 自封装的FlatList
 * Created by YJH on 2018/7/6.
 */

import React, {Component} from 'react';
import {View, FlatList, Text,DeviceEventEmitter} from 'react-native';
import ListItem from './ListItem';
import {Colors} from '../common/Colors';

export default class MyFlatList extends Component {
    constructor(props) {
        super(props);

    }

    /**
     * 测试：这样不等 属性值传进来了
     * 结合两者的结果，在使用 时候要先测试一下！
     * @param nextProps
     */
    componentWillReceiveProps(nextProps){
        // DeviceEventEmitter.emit('showToast', 'MyFlatList-ReceiveProps=>'+(this.props.data !== nextProps.data));
    }

    /**
     * 功能：实现添加header功能，当然footer功能也是一样的；
     * @returns {XML}
     * @private
     */
    _header = () => {
        return (<View stlye={{flex: 1, justifyContent: 'center', backgroundColor: Colors.bg}}>
            <Text style={{fontSize: 12, fontWeight: '800', color: Colors.blue, alignSelf: 'center'}}>FlatList功能展示</Text>
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
    _renderItem = ({item}) => (
        <ListItem

            item={item}
            onPress={() => this._onItemPress()}
        />);
    _keyExtractor = (item, index) => item.id;

    /**
     * getItemLayout:用于避免动态测量内容尺寸的开销
     * onEndReachedThreshold:取值范围(0,1)
     * @returns {XML}
     */
    render() {
        return (<View style={{flex: 1, backgroundColor: Colors.bg}}>
            <FlatList
                ref={(flatlist) => this.flatlist = flatlist}
                ListHeaderComponent={this._header}
                renderItem={this._renderItem}
                ItemSeparatorComponent={this.props.itemSeparator}
                data={this.props.data}
                keyExtractor={this._keyExtractor}
                onRefresh={this.props.onRefresh}
                refreshing={this.props.refreshing}
                onEndReachedThreshold={0.1}
                onEndReached={this.props.onLoadMore}
                initialNumToRender={3}
                getItemLayout={(data, index) => ({
                    length: 250, offset: (250 + 10) * index, index
                })}
            />
        </View>);
    }
}

