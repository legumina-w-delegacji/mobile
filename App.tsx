import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/root';
import Navigator from './src/navigation/Navigator';

export default function App() {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </SafeAreaView>
  );
}
