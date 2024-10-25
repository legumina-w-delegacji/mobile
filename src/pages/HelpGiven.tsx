import { Button } from "react-native";
import { Text, View } from "react-native";
import themeStyles from "../themes/themes";

const HelpGiven = ({navigation}: any) => {
    return <View>
        <View style={themeStyles.card}>            
            <Text>Apel</Text>
            <Text>Uszczelnianie tamy Niedzica</Text>
        </View>

        <Button title="Chcę pomóc" onPress={() => {
            console.log('Chcę pomóc');
            navigation.navigate('HelpSent');
        }} />

        <Button title="Wróć" onPress={() => {
            console.log('Wroc');
        }} />

    </View>
};


export default HelpGiven;