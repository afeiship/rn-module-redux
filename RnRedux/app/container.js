import {View} from 'react-native';
import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <View>
                {this.props.children}
            </View>
        )
    }
}
