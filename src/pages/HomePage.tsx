import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View,  } from "react-native";

const HomePage = () => {
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

    return (
        <View style={styles.container}>
            <ScrollView>
                {state.map((item, index) => (
                    <Text style={styles.item} key={index}>{item}</Text>
                ))}
        </ScrollView>
        </View>
    );
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