/**
 * flatlist StyleSheet统一管理
 * Created by YJH on 2018/7/6.
 */
import {StyleSheet} from 'react-native';
import {Colors} from '../common/Colors';
export const styles = StyleSheet.create({
    container: {flex: 1,},
    text: {
        marginTop:10,
        alignSelf:'center',
        fontSize: 20,
        fontWeight: '400', color: Colors.white},
    line: {
        height: 1,
        backgroundColor: Colors.transparent
    },
    button_sign:{
        marginTop:80,
        borderWidth:1,
        borderColor:"#841584",
        backgroundColor:'#841584',
        borderRadius:8,
        height:50,
        marginHorizontal:30,
    },
    account:{
        fontSize: 20,
        color: '#000',
        fontWeight: '600',
        width: 80,
        textAlign: 'center'
    },
    password:{
        fontSize: 20,
        color: '#000',
        fontWeight: '600',
        width: 80,
        textAlign: 'center'
    }
});