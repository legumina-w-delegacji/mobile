import { Button, Text, View } from "react-native";

const HelpSent = ({navigation}: any) => {
    return (<View>
           <View>
            <Text>
                Twoje zgłoszenie zostało wysłane do koordynatora. Dziękujemy za pomoc! 
                Jesli chcesz wrócić do strony głównej kliknij przycisk poniżej. 
            </Text>
           </View>
           <Button title="Wróć" onPress={() => {
               navigation.goBack();
           }} />
        </View>
    );
};

export default HelpSent;