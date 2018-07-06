/**
 * flatlist StyleSheet统一管理
 * Created by YJH on 2018/7/6.
 */
import {StyleSheet} from 'react-native';
import {Colors} from '../common/Colors';
import {ScreenWidth, ScreenHeight, ScreenScale} from '../common/DeviceDemensions';
export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:50,
        backgroundColor:Colors.bg,
        alignItems:'center',
    },
    button:{
        marginVertical:5,
        width:ScreenWidth*2/3,
        height:ScreenHeight/12,
        borderColor:Colors.gray_66,
        borderWidth:1,
        borderRadius:6,
        backgroundColor:Colors.gray_66},
    text:{
        textAlign:'center',
        textAlignVertical:'center',
        marginHorizontal:20,
        padding:20,
        fontSize:16,
        fontWeight:'400',
        color:Colors.black},
});