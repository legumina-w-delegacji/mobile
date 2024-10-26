import { Button, ScrollView, StyleSheet, Text, TextInput, View, ActivityIndicator } from "react-native";
import themeStyles from "../themes/themes";
import Map from "../components/map/Map";
import { useState } from "react";
import { CREATE_EVENT } from "../api/Queries";
import { useMutation } from "@apollo/client";
import DarkButton from "../components/buttons/DarkButton";
import LightButton from "../components/buttons/LightButton";


const HelpNeeded = ({ navigation }: any) => {
    const [createEvent, { data, loading, error }] = useMutation(CREATE_EVENT);
    const [initialLocationTrigger, setInitialLocationTrigger] = useState(false);

    const handleInitialLocationTrigger = () => {
        setInitialLocationTrigger(!initialLocationTrigger);
    };

    const [description, setDescription] = useState('');

    const handleCreateEvent = () => {
        const lat = 0;
        const lng = 0;
        createEvent({ variables: { lat: lat, lng: lng, description: description } })
    }

    if (loading) return <ActivityIndicator />;

    if (!data || error) console.log(error);

    if (data) navigation.navigate('HelpNeededSent')

    return <ScrollView style={styles.container}>
        <View style={{ ...themeStyles.card, marginHorizontal: 20 }}>
            <Text style={styles.labelArea}>Opis zgłoszenia</Text>
            <View style={styles.inputArea}>
                <TextInput defaultValue={description} onChangeText={val => setDescription(val)} placeholder="Opis zgłoszenia..." />
            </View>
            <View style={{ height: 15 }} />
            <Text style={styles.labelArea}>Opis zgłoszenia</Text>
            <View style={styles.mapInputArea}>
                <View style={styles.mapSearchContainer}>
                    <TextInput style={styles.searchInput} placeholder="Opis zgłoszenia..." />
                    <Button title="N" onPress={() => handleInitialLocationTrigger()} />
                </View>
                <Map interactivityEnabled={true}
                    mapMarkerFollowUp={true}
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
        fontSize: 18,
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