import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../../pages/HomePage";
import HelpDetails from "../../pages/HelpDetails";
import HelpGiven from "../../pages/HelpGiven";
import HelpSent from "../../pages/HelpSent";
import { darkWhiteColor } from "../../themes/colors";
import { Button, TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { HelpNeeded } from "../../pages/HelpNeeded";
import { HelpNeededSent } from "../../pages/HelpNeededSent";
import { MyHelpRequests } from "../../pages/MyHelpRequests";
import { MyHelpRequestDetails } from "../../pages/MyHelpRequestDetails";

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
                headerTitleAlign: 'center',
                headerShadowVisible: false
            }} />
            <Stack.Screen name="HelpDetails" component={HelpDetails} options={({ navigation, route }) => ({
                title: 'Pomoc Humanitarna',
                headerStyle: headerStyle,
                headerTitleStyle: {
                    padding: 0,
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="angle-left" style={{ marginLeft: 24 }} size={24} color="black" />
                </TouchableOpacity>,
            })} />

            <Stack.Screen name="HelpGiven" component={HelpGiven} options={({ navigation, route }) => ({
                title: 'Pomagam',
                headerStyle: headerStyle,
                headerTitleStyle: {
                    padding: 0,
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="angle-left" style={{ marginLeft: 24 }} size={24} color="black" />
                </TouchableOpacity>,
            })} />
            <Stack.Screen name="HelpSent" component={HelpSent} options={({ navigation, route }) => ({
                title: 'Pomagam',
                headerStyle: headerStyle,
                headerTitleStyle: {
                    padding: 0,
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                headerLeft: () => '',
            })} />
            <Stack.Screen name="HelpNeeded" component={HelpNeeded} options={({ navigation, route }) => ({
                title: 'Potrzebuję Pomocy',
                headerStyle: {
                    backgroundColor: darkWhiteColor,
                },
                headerTitleAlign: 'center',
                headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="angle-left" style={{ marginLeft: 24 }} size={24} color="black" />
                </TouchableOpacity>,
            })} />
            <Stack.Screen name="HelpNeededSent" component={HelpNeededSent} options={({ navigation, route }) => ({
                title: 'Potrzebuję pomocy',
                headerStyle: headerStyle,
                headerTitleStyle: {
                    padding: 0,
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="angle-left" style={{ marginLeft: 24 }} size={24} color="black" />
                </TouchableOpacity>,
            })} />
            <Stack.Screen name="MyHelpRequests" component={MyHelpRequests} options={({ navigation, route }) => ({
                title: 'Moje Zgłoszenia',
                headerStyle: headerStyle,
                headerTitleStyle: {
                    padding: 0,
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="angle-left" style={{ marginLeft: 24 }} size={24} color="black" />
                </TouchableOpacity>,
            })} />
            <Stack.Screen name="MyHelpRequestDetails" component={MyHelpRequestDetails} options={({ navigation, route }) => ({
                title: 'Moje Zgłoszenia',
                headerStyle: headerStyle,
                headerTitleStyle: {
                    padding: 0,
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FontAwesome name="angle-left" style={{ marginLeft: 24 }} size={24} color="black" />
                </TouchableOpacity>,
            })} />
        </Stack.Navigator>
    );
}


export { HomeStackNavigator };