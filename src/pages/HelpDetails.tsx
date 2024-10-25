import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import themeStyles from "../themes/themes";
import Map from "../components/map/Map";
import DarkButton from "../components/buttons/DarkButton";
import { gray } from "../themes/colors";

const HelpDetails = ({ route, navigation }: any) => {

    return <ScrollView style={styles.container}>
        <View style={themeStyles.card}>
            <Text style={{ ...themeStyles.detailsItemLabel }}>Apel</Text>
            <Text style={{ ...themeStyles.detailItemValue }}>Uszczelnianie tamy Niedzica</Text>
            <Text style={{ marginTop: 32, ...themeStyles.detailsItemLabel }}>Priorytet</Text>
            <View style={{ ...styles.row, padding: 5 }}>
                <View style={{ ...themeStyles.dot, width: 16, height: 16 }}></View>
                <Text style={{ ...themeStyles.detailItemValue, marginLeft: 5 }}>Najwyzszy</Text>
            </View>
            <Text style={{ ...themeStyles.detailsItemLabel, marginTop: 32 }}>Opis Zgłoszenia</Text>
            <Text style={{ ...themeStyles.detailItemValue }}>Tama w Niedzicy wymaga uszczelnienia oraz zabezpieczenia przed prawdopodobnym przelaniem się przez nią wody.
                Do wsparcia druhów Ochotniczej Straży Pożarnej potrzeni są wszyscy ochotnicy.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            <Text style={{ ...themeStyles.detailsItemLabel, marginTop: 32 }}>Miejsce</Text>
            <Text style={{ ...themeStyles.detailsItemValue }}>ul. Programistyczna 32, Toruń</Text>
            <View style={{ width: '100%', height: 200, marginTop: 4, borderRadius: 10, borderWidth: 1, borderColor: 'black', overflow: 'hidden' }}>
                <Map />
            </View>
        </View>

        <DarkButton title="Chcę pomóc" onPress={() => {
            console.log('Chcę pomóc');
            navigation.navigate('HelpGiven');
        }} />
    </ScrollView>
};

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        paddingHorizontal: 18,
    },
});


export default HelpDetails;