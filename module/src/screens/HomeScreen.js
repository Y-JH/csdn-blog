/**
 * flatlist 实现组件
 * Created by YJH on 2018/7/6.
 */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './HomeScreenStyle';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }


    _onFlatListScreen = () => {
        this.props.navigation.navigate("flat_list");
    };

    _onNavigationScreen = () => {
        this.props.navigation.navigate("navigation");
    };

    render() {
        return (<View style={styles.container}>
            <TouchableOpacity style = {styles.button}
                onPress={this._onFlatListScreen}>
                <Text style={styles.text}>
                    FlatListScreen
                </Text>

            </TouchableOpacity>

            <TouchableOpacity style = {styles.button}
                onPress={this._onNavigationScreen}>
                <Text style={styles.text}>
                    NavigationScreen
                </Text>

            </TouchableOpacity>

        </View>);
    }
}


