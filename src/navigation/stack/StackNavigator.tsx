import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../../pages/HomePage";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} options={{
                title: 'Pomoc Humanitarna'
            }}/>
        </Stack.Navigator>
    );
}


export { HomeStackNavigator };