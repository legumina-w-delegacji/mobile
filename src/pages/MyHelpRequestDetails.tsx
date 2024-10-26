import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View } from "react-native";
import themeStyles from "../themes/themes";
import Map from "../components/map/Map";
import DarkButton from "../components/buttons/DarkButton";
import { gray } from "../themes/colors";
import { useQuery } from "@apollo/client";
import { GET_EVENT_BY_ID } from "../api/Queries";

const MyHelpRequestDetails = ({ route, navigation }: any) => {
  const { loading, error, data } = useQuery<EventDetailsResponse>(GET_EVENT_BY_ID, {
    variables: { uuid: route.params.id },
  });

  if (loading) return <ActivityIndicator style={{ marginTop: 8 }} />;

  if (!data || error) console.log(error);

  console.log(`fetching${data?.event.name}`);

  return <ScrollView>
    <View style={{ ...themeStyles.card, marginHorizontal: 20 }}>
      <Text style={{ ...themeStyles.detailsItemLabel }}>Apel</Text>
      <Text style={{ ...themeStyles.detailItemValue }}>Uszczelnianie tamy Niedzica</Text>
      <Text style={{ marginTop: 32, ...themeStyles.detailsItemLabel }}>Priorytet</Text>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 5 }}>
        <View style={{ ...themeStyles.dot, width: 16, height: 16, marginTop: 5 }}></View>
        <Text style={{ ...themeStyles.detailItemValue, marginLeft: 5 }}>Najwyzszy</Text>
      </View>
      <Text style={{ ...themeStyles.detailsItemLabel, marginTop: 32 }}>Opis Zgłoszenia</Text>
      <Text style={{ ...themeStyles.detailItemValue }}>Tama w Niedzicy wymaga uszczelnienia oraz zabezpieczenia przed prawdopodobnym przelaniem się przez nią wody.
        Do wsparcia druhów Ochotniczej Straży Pożarnej potrzeni są wszyscy ochotnicy.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      <Text style={{ ...themeStyles.detailsItemLabel, marginTop: 32 }}>Miejsce</Text>
      <Text style={{ ...themeStyles.detailItemValue }}>ul. Programistyczna 32, Toruń</Text>
      <View style={{ width: '100%', height: 200, marginTop: 4, borderRadius: 10, borderWidth: 1, borderColor: 'black', overflow: 'hidden' }}>
        <Map interactivityEnabled={false} />
      </View>
    </View>

    <View style={{ marginHorizontal: 20, paddingBottom: 18 }}>
      <DarkButton title="Otrzymałem Pomoc" onPress={() => {
        console.log('Otrzymałem Pomoc');
      }} />
    </View>
  </ScrollView>
}

export { MyHelpRequestDetails }