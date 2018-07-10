/**
 * 功能:实现Provider对视图部分的包裹
 * Created by YJH on 2018/7/9.
 */

import React, {Component} from 'react';
import {View,  Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation';
import * as loginAction from '../actions/LoginAction';
import TitleBar from "../../../components/TitleBar";
import {Colors} from "../../../common/Colors";
import {styles} from './LoginStyle';


const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'counterHome'})
    ]
});

class CounterLoginPage extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成,切换成功登录
        if (nextProps.status == "登录成功" && nextProps.isSuc) {
            this.props.navigation.dispatch(resetAction);
            return false;
        }

        return true;
    }


    render() {
        const {login} = this.props;
        return (
            <View style={styles.container}>
                <TitleBar
                    {...this.props}
                    title="Redux-login"
                    headerBar={{backgroundColor: Colors.black}}
                    statusBar={{backgroundColor: Colors.black}}
                />
                <View style={styles.viewContainer}>
                    <Text style={styles.reduxStateText}>状态: {this.props.status}
                    </Text>
                    <TouchableOpacity
                        onPress={() => login()}
                        style={{marginTop: 80, }}>
                        <View style={styles.loginBtn}>
                            <Text style={{color: Colors.reduxTextcolor}}>点击登录
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
        status: state.loginIn.status,
        isSuc: state.loginIn.isSuc,
        user: state.loginIn.user,
    }),
    (dispatch) => ({
        login: () => dispatch(loginAction.login()),
    })
)
(CounterLoginPage)