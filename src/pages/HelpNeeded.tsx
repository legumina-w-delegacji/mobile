import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import themeStyles from "../themes/themes";
import Map from "../components/map/Map";
import { useState } from "react";

const HelpNeeded = () => {

    const [initialLocationTrigger, setInitialLocationTrigger] = useState(false);

    const handleInitialLocationTrigger = () => {
        setInitialLocationTrigger(!initialLocationTrigger);
    };

    return <ScrollView style={styles.container}>
        <View style={themeStyles.card}>
            <Text style={styles.labelArea}>Opis zgłoszenia</Text>
            <View style={styles.inputArea}>
                <TextInput placeholder="Opis zgłoszenia..." />
            </View>
            <View style={{height: 15}} />
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
    </ScrollView>
};


const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 18,
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

export {HelpNeeded};