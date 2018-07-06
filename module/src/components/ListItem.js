/**
 * 自封装的ListItem
 * Created by YJH on 2018/7/6.
 */

import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Platform, Dimensions, StyleSheet} from 'react-native';
// import {myDevice} from '../common/DeviceDemensions';
import {Colors} from '../common/Colors';
import {Images} from '../common/Images';
import Toast, {DURATION} from 'react-native-easy-toast';
import {ScreenHeight, ScreenWidth, ScreenScale} from '../common/DeviceDemensions';

export default class ListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list_item: this.props.item,
        }
    }


    componentWillReceiveProps(nextProps) {
        this.refs.toast.show("hell world.", DURATION.LENGTH_SHORT);
        if (this.props.item !== nextProps.item) {
            this.setState({
                list_item: nextProps.item,
            });
        }
    }


    render() {
        return (<TouchableOpacity onPress={this.props.onPress} style={styles.item_container}>
            <View style={{flex: 1}}>
                <Image style={styles.item_img} source={Images.ic_list_item_bg}/>
                <View style={styles.item_in_container}>
                    <Text style={styles.text_normal_title}>{this.state.list_item.title}</Text>
                    <View style={styles.item_in_in_container}>
                        <Text style={styles.text_react}>{this.state.list_item.state}</Text>
                        <Text style={styles.text_normal_date}>{this.state.list_item.date}</Text>
                    </View>
                </View>
                <Toast ref='toast'/>
            </View>

        </TouchableOpacity>);
    }
}

const styles = StyleSheet.create({
    item_container: {
        marginVertical:5,
        width: ScreenWidth - 40,
        height: ScreenHeight / 3+20,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 8,
        alignSelf:'center',
        padding:20,
        elevation:50
    },
    item_img: {
        width: ScreenWidth - 40,
        height: ScreenHeight * 2 / 9,
    },
    item_in_container: {
        height: ScreenHeight / 9,
    },


    item_in_in_container: {
        marginTop:5,
        flexDirection: 'row',
        alignItems:'center'
    },
    text_normal_title: {
        color: Colors.black_232323,
        fontWeight: '600',
        fontSize: 16,
    },
    text_react: {
        textAlign:'center',
        width: 60,
        height: 30,
        borderWidth: 1,
        borderRadius: 6,
        borderColor:Colors.gray_66,
        backgroundColor: Colors.gray_66,
        color: Colors.white,
        fontWeight: '400',
        fontSize: 14,
        paddingTop:5,

    },
    text_normal_date: {
        color: Colors.gray_66,
        fontWeight: '400',
        fontSize: 14,
        marginHorizontal:10,
    },
});