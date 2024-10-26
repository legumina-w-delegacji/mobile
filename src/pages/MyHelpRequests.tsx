import { useQuery } from "@apollo/client";
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { GET_EVENTS } from "../api/Queries";
import themeStyles from "../themes/themes";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { gray, green, blue, yellow, orange, red } from '../themes/colors';


const MyHelpRequests = ({ navigation }: any) => {
  const { loading, error, data } = useQuery<EventResponse>(GET_EVENTS);

  if (loading) return <ActivityIndicator style={{ marginTop: 8 }} />;

  if (!data || error) console.log(error);

  let dotsColorsArr = [
    green,
    blue,
    yellow,
    orange,
    red,
  ]

  console.log(data?.events.length);

  return <View style={{ paddingTop: 8 }}>
    <ScrollView>
      <View>
        <Text style={{ ...themeStyles.detailsItemLabel, marginHorizontal: 20 }}>Aktywne zgłoszenia</Text>
        {data!.events.slice(0, 3).map((item, index) => (
          <View key={index} style={{ ...themeStyles.card, marginVertical: 5, marginHorizontal: 20 }}>
            <TouchableOpacity key={index} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} onPress={() => {
              navigation.navigate('MyHelpRequestDetails', { id: item.uuid });
            }}>
              <View style={{ ...themeStyles.dot, backgroundColor: dotsColorsArr[item.severity - 1] }}></View>
              <View style={{ ...styles.item, width: '80%' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }} key={index}>{item.name}</Text>
                <View style={{ marginTop: 4, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 10, color: gray }}>5 km od ciebie</Text>
                  <Text style={{ fontSize: 10, color: gray }}>5 godzin temu</Text>
                </View>
              </View>
              <View style={{ marginLeft: 'auto', }}>
                <FontAwesome name="angle-right" size={32} color="gray" />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={{ marginTop: 32 }}>
        <Text style={{ ...themeStyles.detailsItemLabel, marginHorizontal: 20 }}>Oczekujące</Text>
        {data!.events.slice(0, 3).map((item, index) => (
          <View key={index} style={{ ...themeStyles.card, marginVertical: 5, marginHorizontal: 20 }}>
            <TouchableOpacity key={index} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} onPress={() => {
              navigation.navigate('MyHelpDetailsPending', { id: item.uuid });
            }}>
              <View style={{ ...themeStyles.dot, backgroundColor: gray }}></View>
              <View style={{ ...styles.item, width: '80%' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }} key={index}>{item.name}</Text>
                <View style={{ marginTop: 4, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 10, color: gray }}>5 km od ciebie</Text>
                  <Text style={{ fontSize: 10, color: gray }}>5 godzin temu</Text>
                </View>
              </View>
              <View style={{ marginLeft: 'auto', }}>
                <FontAwesome name="angle-right" size={32} color="gray" />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={{ marginTop: 32 }}>
        <Text style={{ ...themeStyles.detailsItemLabel, marginHorizontal: 20 }}>Odrzucone</Text>
        {data!.events.slice(0, 3).map((item, index) => (
          <View key={index} style={{ ...themeStyles.card, marginVertical: 5, marginHorizontal: 20 }}>
            <TouchableOpacity key={index} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }} onPress={() => {
              navigation.navigate('MyHelpDetailsRejected', { id: item.uuid });
            }}>
              <View style={{ ...themeStyles.dot, backgroundColor: gray }}></View>
              <View style={{ ...styles.item, width: '80%' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }} key={index}>{item.name}</Text>
                <View style={{ marginTop: 4, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ fontSize: 10, color: gray }}>5 km od ciebie</Text>
                  <Text style={{ fontSize: 10, color: gray }}>5 godzin temu</Text>
                </View>
              </View>
              <View style={{ marginLeft: 'auto', }}>
                <FontAwesome name="angle-right" size={32} color="gray" />
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  </View>
}

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    marginLeft: 10
  },
  itemInfo: {

  }
});

export { MyHelpRequests }