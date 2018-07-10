/**
 * Created by YJH on 2018/7/10.
 */
import {StyleSheet} from 'react-native';
import {Colors} from '../../../common/Colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.reduxBg
    },
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.reduxBg
    },
    viewText:{
        width: 100,
        height: 40,
        marginTop: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.gray,
        borderRadius: 8,
    }
});