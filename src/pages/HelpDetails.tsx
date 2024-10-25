import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View } from "react-native";
import themeStyles from "../themes/themes";
import Map from "../components/map/Map";
import DarkButton from "../components/buttons/DarkButton";
import { useQuery } from "@apollo/client";
import { GET_EVENT_BY_ID } from "../api/Queries";

const HelpDetails = ({route, navigation}: any) => {
    const { loading, error, data } = useQuery<EventDetailsResponse>(GET_EVENT_BY_ID, {
        variables: { uuid: route.params.id },
      });

    if(loading) return <ActivityIndicator />;

    if(!data || error) console.log(error); 

    console.log(`fetching${data?.event.name}`);


    return <ScrollView style={styles.container}>
            <View style={themeStyles.card}>
                <Text>{data?.event.name}</Text>
                <Text>{data?.event.description}</Text>
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