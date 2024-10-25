import React from "react";
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,  } from "react-native";

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

    return <View style={styles.container}>
            <ScrollView>
                {state.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => {
                            navigation.navigate('HelpDetails', {name: item});
                        }}>
                        <Text style={styles.item} key={index}>{item}</Text>
                    </TouchableOpacity>
                ))}
                <Text>Jeśli jesteś osobą potrzebującą pmocy mozesz sgloscić problem</Text>
        <Button title="Potrzebuje pomocy" onPress={() => {
            console.log('Potrzebuje pomocy');
        }} />   
        </ScrollView>
        </View>
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

export default HomePage;