import { Text, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import themeStyles from "../themes/themes"
import DarkButton from "../components/buttons/DarkButton"
import LightButton from "../components/buttons/LightButton"

const MyHelpDetailsRejected = ({ navigation }: any) => {
  return <ScrollView>
    <View style={{ ...themeStyles.card, marginHorizontal: 20 }}>
      <Text>Twoje zgłoszenie o pomoc zostało odrzucone.</Text>
    </View>
    <View style={{ paddingBottom: 18, marginHorizontal: 20 }}>
      <Text style={{ ...themeStyles.detailsItemLabel, marginTop: 4, marginBottom: 12 }}>Jeśli nie zgadzasz się z priorytetem przydzielonym do Twojego zgłoszenia skontaktuj się  z nami,  </Text>
      <LightButton title="Kontakt" onPress={() => {
        navigation.navigate('ContactForm');
      }} />
      <View style={{ height: 5 }} />
      <LightButton title="Wróć" onPress={() => {
        navigation.goBack()
      }} />
    </View>
  </ScrollView>
}

export { MyHelpDetailsRejected }