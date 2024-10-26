import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../../pages/HomePage";
import HelpDetails from "../../pages/HelpDetails";
import HelpGiven from "../../pages/HelpGiven";
import HelpSent from "../../pages/HelpSent";
import { darkWhiteColor } from "../../themes/colors";
import { Button, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { HelpNeeded } from "../../pages/HelpNeeded";

const Stack = createStackNavigator();

const headerStyle = {
    backgroundColor: darkWhiteColor,
    height: 91,
}

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} options={{
                title: 'Pomoc Humanitarna',
                headerStyle: headerStyle,
                headerTitleStyle: {
                    padding: 0,
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                // headerBackTitle: '',
            }} />
            <Stack.Screen name="HelpDetails" component={HelpDetails} options={{
                title: 'Pomoc Humanitarna',
                headerStyle: headerStyle,
                headerTitleStyle: {
                    padding: 0,
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                // headerLeft: () => <FontAwesome name="angle-left" style={{ marginLeft: 24 }} size={24} color="black" />,
            }} />
            <Stack.Screen name="HelpGiven" component={HelpGiven} options={{
                title: 'Pomagam',
                headerStyle: headerStyle,
                headerTitleStyle: {
                    padding: 0,
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                // headerLeft: () => <FontAwesome name="angle-left" style={{ marginLeft: 24 }} size={24} color="black" />,
            }} />
            <Stack.Screen name="HelpSent" component={HelpSent} options={{
                title: 'Pomagam',
                headerStyle: headerStyle,
                headerTitleStyle: {
                    padding: 0,
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                // headerLeft: () => <FontAwesome name="angle-left" style={{ marginLeft: 24 }} size={24} color="black" />,
            }} />
            <Stack.Screen name="HelpNeeded" component={HelpNeeded} options={{
                title: 'Potrzebuję Pomocy',
                headerStyle: {
                    backgroundColor: darkWhiteColor,
                },
            }} />
        </Stack.Navigator>
    );
}


export { HomeStackNavigator };