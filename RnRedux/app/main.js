import {ReduxAppBase} from 'react-native-redux-boot';
import {View, ScrollView, Text, Button, Alert} from 'react-native';
import React from 'react';

export default class extends React.Component {

    _onClick = e => {
        let {test, initialData} = ReduxAppBase.$.memory;
        test++;
        initialData.tes = initialData.tes + 's';
        ReduxAppBase.$.memory = {test: test};
    };

    render() {
        const {test, initialData} = ReduxAppBase.$.memory;
        return (
            <View style={{marginTop: 40}}>
                <Text>member-list.1212... {test}</Text>
                <Text style={{
                    borderWidth: 1,
                    borderStyle: 'solid',
                    padding: 20,
                    margin:20,
                    backgroundColor: '#eee',
                    color: '#333'
                }}>{
                    JSON.stringify(initialData, null, 4)
                }</Text>
                <Text>Age:{initialData.age}</Text>
                <Button title="Test button" onPress={this._onClick}/>
            </View>
        );
    }
}
