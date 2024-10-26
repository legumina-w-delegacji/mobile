import { Button, ScrollView, StyleSheet, Text, TextInput, View, ActivityIndicator, TouchableOpacity } from "react-native";
import themeStyles from "../themes/themes";
import Map from "../components/map/Map";
import React, { useEffect, useState } from "react";
import { CREATE_EVENT } from "../api/Queries";
import { useMutation } from "@apollo/client";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import DarkButton from "../components/buttons/DarkButton";
import LightButton from "../components/buttons/LightButton";


const HelpNeeded = ({ navigation }: any) => {
    const [createEvent, { data, loading, error }] = useMutation(CREATE_EVENT);
    const [region, setRegion]: any = useState();
    const [initialLocationTrigger, setInitialLocationTrigger] = useState(false);


    useEffect(() => {
        if (data) navigation.navigate('HelpNeededSent')
    }, [data]);

    const handleInitialLocationTrigger = () => {
        setInitialLocationTrigger(!initialLocationTrigger);
    };

    const [description, setDescription] = useState('');

    const handleCreateEvent = () => {
        createEvent({ variables: { lat: region.latitude, lng: region.longitude, description: description } })
    }

    if (loading) return <ActivityIndicator />;

    if (error) return <></>;


    return <ScrollView style={styles.container}>
        <View style={{ ...themeStyles.card, marginHorizontal: 20 }}>
            <Text style={styles.labelArea}>Opis zgłoszenia</Text>
            <View style={styles.inputArea}>
                <TextInput defaultValue={description} onChangeText={val => setDescription(val)} placeholder="Opis zgłoszenia..." multiline={true} />
            </View>
            <View style={{ height: 15 }} />
            <Text style={styles.labelArea}>Miejsce</Text>
            <View style={styles.mapInputArea}>
                <View style={styles.mapSearchContainer}>
                    <TextInput style={styles.searchInput} placeholder="Adres..." textBreakStrategy="highQuality" />
                    <TouchableOpacity onPress={() => handleInitialLocationTrigger()}>
                        <FontAwesome6 name="location-crosshairs" size={20} color="black" />
                    </TouchableOpacity>
                </View>
                <Map interactivityEnabled={true}
                    mapMarkerFollowUp={true}
                    updateLatLng={setRegion}
                    initialLocationTrigger={initialLocationTrigger}
                    postTrigger={handleInitialLocationTrigger} />
            </View>

        </View>
        <View style={{ paddingBottom: 18, marginHorizontal: 20 }}>
            <DarkButton title="Wyślij zgłoszenie" onPress={() => {
                handleCreateEvent()
            }} />
            <View style={{ height: 5 }} />
            <LightButton title="Wróć" onPress={() => {
                navigation.goBack()
            }} />
        </View>
    </ScrollView>
};


const styles = StyleSheet.create({
    container: {
    },
    inputArea: {
        height: 120,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
    },
    mapInputArea: {
        height: 230,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
    },
    labelArea: {
        fontSize: 13,
        marginBottom: 5,
        color: 'grey'
    },
    mapSearchContainer: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flexDirection: 'row',
        display: 'flex',
    },
    searchInput: {
        flex: 1,
    }
});

export { HelpNeeded };