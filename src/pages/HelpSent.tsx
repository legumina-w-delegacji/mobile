import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import LightButton from "../components/buttons/LightButton";
import themeStyles from "../themes/themes";

const HelpSent = ({ navigation }: any) => {
    return (<ScrollView style={styles.container}>
        <View style={{ marginHorizontal: 20 }}>
            <View style={{ ...themeStyles.card }}>
                <Text>
                    Twoje zgłoszenie chęci pomocy zostało przesłane do zgłaszającego. Czekaj na informację od osoby w celu ustalenia szczegółów. Jeśli zgłoszenie, którego dotyczy Twoja deklaracja ma najwyższy priorytet możesz od razu udać się na miejsce wymienione w zgłoszenie
                </Text>
            </View>
            <LightButton title="Powrót do listy" onPress={() => {
                navigation.navigate('Home');
            }} />
        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 18,
    },
});

export default HelpSent;