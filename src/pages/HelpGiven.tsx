import { Button, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import themeStyles from "../themes/themes";
import DarkButton from "../components/buttons/DarkButton";
import LightButton from "../components/buttons/LightButton";

const HelpGiven = ({navigation}: any) => {
    return <ScrollView style={styles.container}>
        <View style={themeStyles.card}>            
            <Text>Apel</Text>
            <Text>Uszczelnianie tamy Niedzica</Text>
        </View>

        <DarkButton title="Chcę pomóc" onPress={() => {
            console.log('Chcę pomóc');
            navigation.navigate('HelpSent');
        }} />
        <View style={{height: 5}}/>
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