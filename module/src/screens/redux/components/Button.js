/**
 * Created by YJH on 2018/7/10.
 */
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from '../../../../../node_modules/prop-types/';
export default class Button extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    render() {
        const { text, onClick } = this.props;
        return (
            <TouchableOpacity style={styles.Button}  onPress={onClick}>
                <Text>{text}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    Button: {
        width: 60,
        height: 30,
        borderWidth: 1,
        borderColor: 'lightgray',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:8,
    }
});