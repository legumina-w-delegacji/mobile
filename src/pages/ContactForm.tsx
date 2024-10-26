import { StyleSheet, Text, TextInput, View } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import themeStyles from "../themes/themes"
import { useState } from "react";
import DarkButton from "../components/buttons/DarkButton";
import LightButton from "../components/buttons/LightButton";

const ContactForm = () => {
  const [content, setContent] = useState();

  return <ScrollView>
    <View style={{ marginHorizontal: 20 }}>
      <Text style={{ ...themeStyles.detailsItemLabel, marginTop: 4, marginBottom: 12 }}>Jeśli nie zgadzasz się z priorytetem przydzielonym do Twojego zgłoszenia skontaktuj się  z nami,  </Text>
      <View style={{ ...themeStyles.card }}>
        <Text style={styles.labelArea}>Treść</Text>
        <View style={styles.inputArea}>
          <TextInput defaultValue={content} onChangeText={val => setContent(val)} placeholder="Opis zgłoszenia..." multiline={true} />
        </View>
      </View>
      <View style={{ paddingBottom: 18 }}>
        <Text style={{ ...themeStyles.detailsItemLabel, marginTop: 4, marginBottom: 12 }}>Jeśli nie zgadzasz się z priorytetem przydzielonym do Twojego zgłoszenia skontaktuj się  z nami,  </Text>
        <DarkButton title="Wyślij" onPress={() => {

        }} />
        <View style={{ height: 5 }} />
        <LightButton title="Wróć" onPress={() => {

        }} />
      </View>
    </View>
  </ScrollView>
}

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

export { ContactForm }