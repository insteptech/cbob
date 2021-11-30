import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import App from './App';
import { name as appName } from './app.json';
import store from './src/store';
import {decode, encode} from 'base-64'

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

const RNApp = () => (
    <Provider store={store}>
        <App />
    </Provider>

);

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(RNApp));
