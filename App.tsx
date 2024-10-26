import React, { useEffect, useRef, useState } from 'react';
import { Alert, Platform, SafeAreaView } from 'react-native';
import Navigator from './src/navigation/Navigator';
import { darkWhiteColor } from './src/themes/colors';
import { ApolloProvider } from '@apollo/client';


import { client } from './src/api/ApolloClient';
import { onMessage } from 'firebase/messaging';
import { database } from './src/fb/firebase';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { collection, onSnapshot } from 'firebase/firestore';
import { schedulePushNotification } from './src/api/Firestore';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// @ts-ignore
window.addEventListener = (x: any) => x;

const eventsCollection = collection(database, 'events');
    onSnapshot(eventsCollection, snapshot => {
      schedulePushNotification();
  });
  
export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [channels, setChannels] = useState<Notifications.NotificationChannel[]>([]);
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(
    undefined
  );
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => token && setExpoPushToken(token));

    if (Platform.OS === 'android') {
      Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []));
    }

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(() => {});

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(notificationListener.current);
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{flex: 1, backgroundColor: darkWhiteColor}}>
        <Navigator />
      </SafeAreaView>
    </ApolloProvider>
  );
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      console.log('Failed to get push token for push notification!');
      return;
    }

    try {
      const projectId = '50134c1f-928f-4845-95b2-e57ec06d1e8b';
      if (!projectId) {
        throw new Error('Project ID not found');
      }
      token = (
        await Notifications.getDevicePushTokenAsync()
      ).data;
      console.log(token);
    } catch (e) {
      token = `${e}`;
    }
  } else {
    console.log('Must use physical device for Push Notifications');
  }

  return token;
}