import {ReduxAppBase} from 'react-native-redux-boot';
import Main from './main';
import {View} from 'react-native';
import React from 'react';

export default class extends ReduxAppBase {

    static initialState() {
        return {
            memory: {
                test: 100,
                initialData: {
                    tes: 123,
                    age: 100,
                    items: []
                },
                myInitial: 0,
                sum: 0
            }
        }
    }

    render() {
        return (
            <View>
                <Main />
            </View>
        )
    }
}
