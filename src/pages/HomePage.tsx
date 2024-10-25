import React from "react";
import { ActivityIndicator, Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,  } from "react-native";
import themeStyles from "../themes/themes";
import DarkButton from "../components/buttons/DarkButton";
import LightButton from "../components/buttons/LightButton";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store/reducer";
import { queryEvents } from "../store/actions";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../api/Queries";

const HomePage = ({navigation}: any) => {
    const { loading, error, data } = useQuery<EventResponse>(GET_EVENTS);

    if(loading) return <ActivityIndicator />;

    if(!error || error) console.log(error); 

    return <View>
            <ScrollView style={styles.container}>
                {data!.events.map((item, index) => (
                    <View key={index} style={{...themeStyles.card, marginVertical: 5}}>
                    <TouchableOpacity key={index} onPress={() => {
                            navigation.navigate('HelpDetails', {id: item.uuid});
                        }}>
                        <Text style={styles.item} key={item.uuid}>{item.name}</Text>
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