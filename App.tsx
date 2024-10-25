import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './src/navigation/Navigator';
import { darkWhiteColor } from './src/themes/colors';
import store from './src/store/store';
import { ApolloProvider } from '@apollo/client';
import { client } from './src/api/ApolloClient';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{flex: 1, backgroundColor: darkWhiteColor}}>
        <Navigator />
      </SafeAreaView>
    </ApolloProvider>
  );
}
