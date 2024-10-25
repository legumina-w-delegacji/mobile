import { Button } from "react-native";
import { Text, View } from "react-native";

const HelpGiven = ({navigation}: any) => {
    return <View>
        <View>            
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