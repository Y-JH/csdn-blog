/**
 * flatlist 实现组件
 * Created by YJH on 2018/7/6.
 */

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {styles} from './SignInSucScreenStyle';
import TitleBar from "../components/TitleBar";
import {Colors} from "../common/Colors";

export default class SignInSucScreen extends Component {
    constructor(props) {
        super(props);
    }

    _goHome = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'home',
                    // params:{
                    //     theme:theme,
                    //     selectedTab:selectedTab
                    // },
                })
            ]
        });
        this.props.navigation.dispatch(resetAction)
    };

    render() {
        return (<View style={styles.container}>
            <TitleBar
                {...this.props}
                title="navigation-登录"
                headerBar={{backgroundColor: Colors.black}}
                statusBar={{backgroundColor: Colors.black}}
            />
            <View style={{flexDirection: 'row', height: 40, marginTop:80}}>
                <Text style={styles.account}>账户：</Text>
                <Text style={{
                    fontSize: 20,
                    color: '#000',
                }}>{this.props.navigation.state.params.user_account}</Text>

            </View>

            <View style={{flexDirection: 'row', height: 40}}>
                <Text style={styles.password}>密码：</Text>
                <Text style={{
                    fontSize: 20,
                    color: '#000',
                }}>{this.props.navigation.state.params.user_password}</Text>

            </View>


            <TouchableOpacity
                onPress={() => this._goHome()}
                style={styles.button_sign}
            >
                <Text style={styles.text}>返回主页</Text>
            </TouchableOpacity>
        </View>);
    }
}


