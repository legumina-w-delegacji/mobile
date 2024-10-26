import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View } from "react-native";
import themeStyles from "../themes/themes";
import Map from "../components/map/Map";
import DarkButton from "../components/buttons/DarkButton";
import { gray } from "../themes/colors";
import { useQuery } from "@apollo/client";
import { GET_EVENT_BY_ID } from "../api/Queries";
import LightButton from "../components/buttons/LightButton";

const HelpGiven = ({ navigation }: any) => {
    return <ScrollView style={styles.container}>
        <View style={themeStyles.card}>
            <Text style={{ ...themeStyles.detailsItemLabel }}>Apel</Text>
            <Text style={{ ...themeStyles.detailItemValue }}>Uszczelnianie tamy Niedzica</Text>
            <Text style={{ marginTop: 32, ...themeStyles.detailsItemLabel }}>Priorytet</Text>
            <View style={{ ...styles.row, padding: 5 }}>
                <View style={{ ...themeStyles.dot, width: 16, height: 16 }}></View>
                <Text style={{ ...themeStyles.detailItemValue, marginLeft: 5 }}>Najwyzszy</Text>
            </View>
            <Text style={{ ...themeStyles.detailsItemLabel, marginTop: 32 }}>Deklaracja</Text>
            <Text style={{ ...themeStyles.detailItemValue }}>
                Zgłaszasz swoją chęć pomocy.
                Przechodząc dalej prześlemy zgłaszającemu Twoje informacje w celu daszego kontaktowania się
            </Text>
            <Text style={{ ...themeStyles.detailsItemLabel, marginTop: 32 }}>Miejsce</Text>
            <Text style={{ ...themeStyles.detailItemValue }}>ul. Programistyczna 32, Toruń</Text>
            <View style={{ width: '100%', height: 200, marginTop: 4, borderRadius: 10, borderWidth: 1, borderColor: 'black', overflow: 'hidden' }}>
                <Map interactivityEnabled={false} />
            </View>
        </View>

        <DarkButton title="Chcę pomóc" onPress={() => {
            console.log('Chcę pomóc');
            navigation.navigate('HelpSent');
        }} />
        <View style={{ height: 5 }} />
        <LightButton title="Wróć" onPress={() => {
            console.log('Wroc');
        }} />

    </ScrollView>
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
    }
});

export default HelpGiven;