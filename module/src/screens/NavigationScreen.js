/**
 * flatlist 实现组件
 * Created by YJH on 2018/7/6.
 */

import React, {Component} from 'react';
import {View, Text, FlatList, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './NavigationScreenStyle';
import TitleBar from "../components/TitleBar";
import {Colors} from "../common/Colors";

export default class NavigationScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            account: '',
            password: '',
            user: {},
        };
    }

    /**
     * 功能：登录
     * @private
     */
    _signIn() {
        this.props.navigation.navigate("signIn", this.state.user);
    }

    render() {
        const limit = 16;
        return (<View style={styles.container}>
            <TitleBar
                {...this.props}
                title="Navigation"
                headerBar={{backgroundColor: Colors.black}}
                statusBar={{backgroundColor: Colors.black}}
            />
            <TextInput
                multiline={false}
                maxLength={limit}
                placeholder={'请输入账号'}
                underlineColorAndroid='transparent'
                placeholderTextColor={Colors.gray_66}
                onChangeText={(acc) => {
                    acc = acc.replace(/ /g, '_');
                    this.setState({
                        account: acc,
                        user: {
                            user_account: acc,
                            user_password: this.state.password}
                    });
                }}
                style={styles.text_input}
                value={this.state.account}
            />
            <TextInput
                multiline={false}
                maxLength={limit}
                password = {true}
                placeholder={'请输入密码'}
                underlineColorAndroid='transparent'
                placeholderTextColor={Colors.gray_66}
                onChangeText={(pw) => {
                    pw = pw.replace(/ /g, '_');
                    this.setState({
                        password: pw,
                        user: {
                            user_password: pw,
                            user_account:this.state.account
                        }

                    });
                }}
                style={styles.text_input}
                value={this.state.password}
            />
            <TouchableOpacity
                onPress={() => this._signIn()}
                style = {styles.button_sign}
            >

                <Text style = {styles.text}>登录</Text>
                    </TouchableOpacity>
        </View>);
    }
}


