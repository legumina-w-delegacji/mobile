import { StyleSheet } from "react-native";
import { darkWhiteColor } from "./colors";

const themeStyles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 20,
        borderRadius: 10,
        backgroundColor: darkWhiteColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
        elevation: 5,
        flex: 1,
    }
});

export default themeStyles;