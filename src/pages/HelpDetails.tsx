import { Button, StyleSheet, Text, View } from "react-native";

const HelpDetails = ({route, navigation}: any) => {

    return <View>
        <View>
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
        </View>
    

        <Button title="Chcę pomóc" onPress={() => {
            console.log('Chcę pomóc');
            navigation.navigate('HelpGiven');
        }} />
    </View>;
};

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
    },
});


export default HelpDetails;