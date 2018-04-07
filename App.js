import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Header, CryptoContainer } from './src/components';
import store from './src/Store';

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <View>
            <Header/>
            <CryptoContainer/>
          </View>
        </Provider>
    );
  }
}