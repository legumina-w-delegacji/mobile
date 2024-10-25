import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/root';
import Navigator from './src/navigation/Navigator';
import { darkWhiteColor } from './src/themes/colors';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: darkWhiteColor}}>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}
