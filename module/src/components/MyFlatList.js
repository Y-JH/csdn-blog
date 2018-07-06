/**
 * 自封装的FlatList
 * Created by YJH on 2018/7/6.
 */

import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import ListItem from './ListItem';
import Toast, {DURATION} from 'react-native-easy-toast';
import {Colors} from '../common/Colors';

export default class MyFlatList extends Component {
    constructor(props) {
        super(props);
    }



    _onItemPress() {
        this.refs.toast.show("hell world.", DURATION.LENGTH_SHORT);
    }

    _renderItem = ({item}) => (
        <ListItem
            item={item}
            onPress={() => this._onItemPress()}
        />);
    _keyExtractor = (item, index) => item.id;

    render() {
        return (<View style={{flex: 1, backgroundColor:Colors.bg}}>
            <FlatList
                renderItem={this._renderItem}
                ItemSeparatorComponent={this.props.itemSeparator}
                data={this.props.data}
                keyExtractor={this._keyExtractor}
            />
            <Toast ref='toast'/>
        </View>);
    }
}

