import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import themeStyles from "../themes/themes";
import Map from "../components/map/Map";
import DarkButton from "../components/buttons/DarkButton";

const HelpDetails = ({route, navigation}: any) => {

    return <ScrollView style={styles.container}>
            <View style={themeStyles.card}>
                <Text>Apel</Text>
                <Text>Uszczelnianie tamy Niedzica</Text>
                <Text>Priorytet</Text>
                <View style={styles.row}>
                    <Text>O</Text>
                    <Text>Najwyzszy</Text>
                </View>
                <Text>Opis niezgodności wyrobu z wymaganiami</Text>
                <Text>Bardzo dlugi opis.....</Text>
                <Text>Miejsce</Text>
                <Text>Wał jakiśtam w pierdykowie dolnym</Text>
                <Text>Miejsce</Text>
                <View style={{width: '100%', height: 200}}>
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
    },
    container: {
        paddingHorizontal: 18,
    },
});


export default HelpDetails;