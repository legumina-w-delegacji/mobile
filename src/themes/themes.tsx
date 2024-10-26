import { StyleSheet } from "react-native";
import { darkWhiteColor, gray } from "./colors";

const themeStyles = StyleSheet.create({
    card: {
        padding: 20,
        marginVertical: 20,
        marginHorizontal: 0,
        borderRadius: 10,
        backgroundColor: darkWhiteColor,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
        elevation: 5,
        flex: 1,
    },
    dot: {
        width: 13,
        height: 13,
        backgroundColor: 'red',
        borderRadius: 50,
        // marginTop: 3
    },
    detailsItemLabel: {
        fontSize: 13,
        color: gray
    },
    detailItemValue: {
        fontSize: 16,
        marginTop: 8
    }
});

export default themeStyles;