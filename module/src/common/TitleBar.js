/**
 * Created by YJH on 2018/7/3.
 */
import React, {Component} from "react";
import {Text, View, Image, StyleSheet, StatusBar, Platform, TouchableOpacity} from "react-native";
import {Images} from "../common/Images";
import {Colors} from '../common/Colors';
export default class TitleBar extends Component {

    _goBack(){
        console.log("------>>"+this.props);
        console.log("------>>"+this.props.navigation);
        this.props.navigation.goBack();
    }

    render() {
        let status = <View style={[styles.statusBar, this.props.statusBar]}>
            <StatusBar {...this.props.statusBar}/>
        </View>;
        return (
            <View>
                {status}
                <View style={[styles.header, this.props.headerBar]}>
                    <TouchableOpacity onPress={() => this._goBack()}>
                        <Image style={styles.go_back} source={Images.ic_back}/>
                    </TouchableOpacity>

                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {height: 45, flexDirection: 'row', alignItems: 'center'},
    go_back: {width: 40, height: 40},
    title: {color: Colors.white, justifyContent: 'center', alignSelf: 'center', textAlign:'center', fontSize: 20},
    statusBar: {
        // height: Platform.OS === 'android' ? 42 : 40,
    }
});
