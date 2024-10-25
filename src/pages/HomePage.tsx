import React from "react";
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import themeStyles from "../themes/themes";
import FontAwesome from '@expo/vector-icons/FontAwesome'

const HomePage = ({ navigation }: any) => {
  var state = [
    "Data Structures",
    "STL",
    "C++",
    "Java",
    "Python",
    "ReactJS",
    "Angular",
    "NodeJs",
    "PHP",
    "MongoDb",
    "MySql",
    "Android",
    "iOS",
    "Hadoop",
    "Ajax",
    "Ruby",
    "Rails",
    ".Net",
    "Perl",
  ];

  return <View>
    <ScrollView>
      {state.map((item, index) => (
        <View key={index} style={{ ...themeStyles.card, marginVertical: 5 }}>
          <TouchableOpacity key={index} style={{ flex: 1, flexDirection: 'row' }} onPress={() => {
            navigation.navigate('HelpDetails', { name: item });
          }}>
            <View style={{ ...styles.dot }}></View>
            <View style={{ ...styles.item, width: '84%' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }} key={index}>{item}</Text>
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
  dot: {
    width: 13,
    height: 13,
    backgroundColor: 'red',
    borderRadius: 50,
    marginTop: 3
  },
  itemInfo: {

  }
});

export default HomePage;