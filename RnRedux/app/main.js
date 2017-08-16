import ReduxAppBase from './react-redux/redux-app-base';
import {View,ScrollView,Text,Button,Alert} from 'react-native';
import React from 'react';

export default class extends React.Component {
    _onClick = e => {

        let {test,initialData} = ReduxAppBase.$.memory;
        test++;
        initialData.tes = initialData.tes + 's';
        ReduxAppBase.$.memory = {test: test};
    };

    render() {
        const {test,initialData} = ReduxAppBase.$.memory;
        return (
            <ScrollView style={{ marginTop:40}}>
                <Text>member-list.1212... {test}</Text>
                <Text>{JSON.stringify(initialData,null,4)}</Text>
                <Text>Age:{initialData.age}</Text>
                <Button title="Test button" onPress={this._onClick} />
            </ScrollView>
        );
    }
}
