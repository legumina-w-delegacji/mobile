import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import themeStyles from "../themes/themes";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../api/Queries";
import LightButton from "../components/buttons/LightButton";
import * as Notifications from 'expo-notifications';
import { calculateDistance, calculateTime } from "../utils/PointCalculator";
import * as Location from "expo-location";


const HomePage = ({ navigation }: any) => {
  const {loading, error, data } = useQuery<EventResponse>(GET_EVENTS);
  const [currentLocation, setCurrentLocation]: any = useState({ latitude: 0, longitude: 0 });

  if (loading) return <ActivityIndicator />;
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


  return <View>
    <ScrollView style={{ padding: 20}}>
      {data!.events.map((item, index) => (
        <View key={index} style={{ ...themeStyles.card, marginVertical: 5 }}>
          <TouchableOpacity key={index} style={{ flex: 1, flexDirection: 'row' }} onPress={() => {

            // navigation.navigate('HelpDetails', { name: item });
            schedulePushNotification();

            navigation.navigate('HelpDetails', { id: item.uuid });

          }}>
            <View style={{ ...themeStyles.dot }}></View>
            <View style={{ ...styles.item, width: '84%' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }} key={index}>{item.name}</Text>
              <View style={{ marginTop: 5, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 12 }}>{(calculateDistance(data!.events[0].lat, data!.events[0].lng, currentLocation.latitude, currentLocation.longitude) / 1000).toFixed(2)} km
                 od ciebie</Text>
                <Text style={{ fontSize: 12 }}>{calculateTime(item.createdAt)} godzin temu</Text>
              </View>
            </View>
            <View style={{ marginLeft: 'auto', marginTop: 2 }}>
              <FontAwesome name="angle-right" size={32} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.miniText}>Jeśli jesteś osobą potrzebującą pmocy mozesz zgłosić problem</Text>
      <LightButton title="Potrzebuje pomocy" onPress={() => {
        navigation.navigate('HelpNeeded');
      }} />
          <View style={{height: 30}}/>

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