import React from "react";
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import themeStyles from "../themes/themes";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../api/Queries";
import LightButton from "../components/buttons/LightButton";
import * as Notifications from 'expo-notifications';

const HomePage = ({ navigation }: any) => {
  const { loading, error, data } = useQuery<EventResponse>(GET_EVENTS);

  if (loading) return <ActivityIndicator />;

  if (error) return <></>

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
                <Text style={{ fontSize: 12 }}>5 km od ciebie</Text>
                <Text style={{ fontSize: 12 }}>5 godzin temu</Text>
              </View>
            </View>
            <View style={{ marginLeft: 'auto', marginTop: 2 }}>
              <FontAwesome name="angle-right" size={32} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
      ))}

      <Text>Jeśli jesteś osobą potrzebabnouwdi8hawdeajw90ującą pmocy mozesz sgloscić problem</Text>
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