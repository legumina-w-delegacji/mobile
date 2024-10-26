import React, { useEffect } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { darkWhiteColor } from './src/themes/colors';
import { ApolloProvider } from '@apollo/client';
import { initializeApp } from 'firebase/app';

import { client } from './src/api/ApolloClient';
import auth from '@react-native-firebase/auth';


export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{flex: 1, backgroundColor: darkWhiteColor}}>
        <Navigator />
      </SafeAreaView>
    </ApolloProvider>
  );
}
