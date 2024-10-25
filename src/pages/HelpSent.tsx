import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import LightButton from "../components/buttons/LightButton";
import themeStyles from "../themes/themes";

const HelpSent = ({navigation}: any) => {
    return (<ScrollView style={styles.container}>
           <View style={themeStyles.card}>
            <Text>
                Twoje zgłoszenie zostało wysłane do koordynatora. Dziękujemy za pomoc! 
                Jesli chcesz wrócić do strony głównej kliknij przycisk poniżej. 
            </Text>
           </View>
           <LightButton title="Wróć" onPress={() => {
               navigation.goBack();
           }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
    },
});

export default HelpSent;