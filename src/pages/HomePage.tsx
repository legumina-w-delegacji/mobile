import React from "react";
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import themeStyles from "../themes/themes";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../api/Queries";

const HomePage = ({ navigation }: any) => {
  const { loading, error, data } = useQuery<EventResponse>(GET_EVENTS);

  if (loading) return <ActivityIndicator />;

  if (!data || error) console.log(error);

  return <View>
    <ScrollView style={{ padding: 12 }}>
      {data!.events.map((item, index) => (
        <View key={index} style={{ ...themeStyles.card, marginVertical: 5 }}>
          <TouchableOpacity key={index} style={{ flex: 1, flexDirection: 'row' }} onPress={() => {
            navigation.navigate('HelpDetails', { name: item });
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
      <Button title="Potrzebuje pomocy" onPress={() => {
        console.log('Potrzebuje pomocy');
      }} />
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

export default HomePage;