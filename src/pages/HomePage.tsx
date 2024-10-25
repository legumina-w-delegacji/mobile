import React from "react";
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,  } from "react-native";
import themeStyles from "../themes/themes";
import DarkButton from "../components/buttons/DarkButton";
import LightButton from "../components/buttons/LightButton";

const HomePage = ({navigation}: any) => {
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
            <ScrollView style={styles.container}>
                {state.map((item, index) => (
                    <View key={index} style={{...themeStyles.card, marginVertical: 5}}>
                    <TouchableOpacity key={index} onPress={() => {
                            navigation.navigate('HelpDetails', {name: item});
                        }}>
                        <Text style={styles.item} key={index}>{item}</Text>
                    </TouchableOpacity>
                    </View>
                ))}
                
                <Text>Jeśli jesteś osobą potrzebabnouwdi8hawdeajw90ującą pmocy mozesz sgloscić problem</Text>
                <LightButton title="Potrzebuje pomocy" onPress={() => {
                    console.log('Potrzebuje pomocy');
                }} />   
            </ScrollView>
        </View>
};

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 18,
    },
    item: {
      fontSize: 18,
      height: 44,
    },
  });

export default HomePage;