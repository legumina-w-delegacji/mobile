import React, { useEffect } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { darkWhiteColor } from './src/themes/colors';
import { ApolloProvider } from '@apollo/client';
import messaging from '@react-native-firebase/messaging';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { client } from './src/api/ApolloClient';
import { firebaseConfig } from './firebaseConfig';
import firebase from 'firebase/compat/app'


export default function App() {
  // const ap = firebase.initializeApp(firebaseConfig, "test-383bc");

  // var a = ap.auth();

  // async function requestUserPermission() {

  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
  //   if (enabled) {
  //     console.log('Authorization status:', authStatus);
  //   }
  // }

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{flex: 1, backgroundColor: darkWhiteColor}}>
        <Navigator />
      </SafeAreaView>
    </ApolloProvider>
  );
}
