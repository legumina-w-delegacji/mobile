import { Button, StyleSheet, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { darkBlue } from "../../themes/colors";

const DarkButton = ({onPress, title}: ButtonProps) => {
    return CustomButton({onPress: onPress, title: title, textStyle: styles.text, viewStyle: styles.darkButton});
}

const styles = StyleSheet.create({
    darkButton: {
        backgroundColor: darkBlue,
        color: 'white',
        borderRadius: 20,
        padding: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
    }
});

export default DarkButton;