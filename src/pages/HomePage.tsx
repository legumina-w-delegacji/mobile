import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import themeStyles from "../themes/themes";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../api/Queries";
import LightButton from "../components/buttons/LightButton";
import { gray, green, blue, yellow, orange, red } from '../themes/colors';

import * as Notifications from 'expo-notifications';
import { calculateDistance, calculateTime } from "../utils/PointCalculator";
import * as Location from "expo-location";

const HomePage = ({ navigation }: any) => {
  const {loading, error, data } = useQuery<EventResponse>(GET_EVENTS);
  const [currentLocation, setCurrentLocation]: any = useState({ latitude: 0, longitude: 0 });

  if (loading) return <ActivityIndicator style={{ marginTop: 8 }} />;

  if (error) return <></>

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            console.log("Permission to access location was denied");
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);
    };

    if(currentLocation.latitude === 0 && currentLocation.longitude === 0)
        getLocation();


  let dotsColorsArr = [
    green,
    blue,
    yellow,
    orange,
    red,
  ]

  return <View>
    <ScrollView>
      <Text style={{ ...themeStyles.detailsItemLabel, marginTop: 4, marginBottom: 8, marginHorizontal: 20 }}>Wyszukujemy zgłoszenia pojawiające się w promieniu 30 km od Twojego położenia, </Text>
      {data!.events.map((item, index) => (
        <View key={index} style={{ ...themeStyles.card, marginVertical: 5, marginHorizontal: 20 }}>
          <TouchableOpacity key={index} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} onPress={() => {
            navigation.navigate('HelpDetails', { id: item.uuid });
          }}>
            <View style={{ ...themeStyles.dot, backgroundColor: dotsColorsArr[item.severity - 1] }}></View>
            <View style={{ ...styles.item, width: '80%' }}>
              <Text style={{ fontSize: 18, }} key={index}>{item.name}</Text>
              <View style={{ marginTop: 4, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 10, color: gray }}>5 km od ciebie</Text>
                <Text style={{ fontSize: 10, color: gray }}>5 godzin temu</Text>
              </View>
            </View>
            <View style={{ marginLeft: 'auto', }}>
              <FontAwesome name="angle-right" size={32} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
      ))}

      <View>
        <Text style={{ ...themeStyles.detailsItemLabel, marginTop: 32, marginBottom: 8, marginHorizontal: 20 }}>Zarządzanie zgłoszeniami </Text>
        <View style={{ ...themeStyles.card, marginVertical: 5, marginHorizontal: 20 }}>
          <TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} onPress={() => {
            navigation.navigate('MyHelpRequests');
          }}>

            <View style={{ ...themeStyles.dot, backgroundColor: 'transparent' }}></View>
            <View style={{ ...styles.item, width: '80%' }}>
              <Text style={{ fontSize: 18, }}>Moje Zgłoszenia</Text>
            </View>
            <View style={{ marginLeft: 'auto', }}>
              <FontAwesome name="angle-right" size={32} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginHorizontal: 20, paddingBottom: 18 }}>
        <Text style={{ ...themeStyles.detailsItemLabel, marginTop: 37, marginBottom: 13, }}>Jeśli jesteś osobą potrzebabnouwdi8hawdeajw90ującą pmocy mozesz sgloscić problem</Text>
        <LightButton title="Potrzebuje pomocy" onPress={() => {
          navigation.navigate('HelpNeeded');
        }} />
      </View>
    </ScrollView >
  </View >
};

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    marginLeft: 10
  },
  itemInfo: {

  },
  miniText: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginVertical: 10
  }
});

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Ktoś w pobliżu potrzebuje pomocy!',
      body: `Zgłoszenie: Pomoc przy powodzi`,
      badge: 0
    },
    trigger: { seconds: 2 },
  });
}

export default HomePage;