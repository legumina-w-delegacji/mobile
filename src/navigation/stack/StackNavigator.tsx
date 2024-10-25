import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../../pages/HomePage";
import HelpDetails from "../../pages/HelpDetails";
import HelpGiven from "../../pages/HelpGiven";
import HelpSent from "../../pages/HelpSent";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} options={{
                title: 'Pomoc Humanitarna'
            }}/>
            <Stack.Screen name="HelpDetails" component={HelpDetails} options={{
                title: 'Pomoc Humanitarna'
            }}/>
            <Stack.Screen name="HelpGiven" component={HelpGiven} options={{
                title: 'Pomagam'
            }} />
            <Stack.Screen name="HelpSent" component={HelpSent} options={{
                title: 'Pomagam'
            }} />
        </Stack.Navigator>
    );
}


export { HomeStackNavigator };