/**
 * 功能:实现Provider对视图部分的包裹
 * Created by YJH on 2018/7/9.
 */

import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import * as counterAction from '../actions/CounterAction';
import Counter from '../components/Counter';
import TitleBar from "../../../components/TitleBar";
import {Colors} from "../../../common/Colors";
import {styles} from './HomeStyle';


class CounterHomePage extends Component {

    logout() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: 'counterLogin'})
            ]
        });
        // this.props.navigation.dispatch(resetAction)
        this.props.navigation.navigate('counterLogin')
    }

    render() {
        const {user} = this.props.navigation;
        const {count, incrementFn, decrementFn} = this.props;
        return (
            <View style={styles.container}>
                <TitleBar
                    {...this.props}
                    title="Redux-home"
                    headerBar={{backgroundColor: Colors.black}}
                    statusBar={{backgroundColor: Colors.black}}
                />
                <View style={styles.viewContainer}>
                    <Counter incrementFn={incrementFn} decrementFn={decrementFn} counter={count}>
                    </Counter>
                    <TouchableOpacity onPress={this.logout.bind(this)} style={{marginTop: 50}}>
                        <View style={styles.viewText}>
                            <Text >退出登录
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default connect(
    (state) => ({
        count: state.counter.count,
    }),
    (dispatch) => ({
        incrementFn: () => dispatch(counterAction.increment()),
        decrementFn: () => dispatch(counterAction.decrement()),
    })
)
(CounterHomePage)