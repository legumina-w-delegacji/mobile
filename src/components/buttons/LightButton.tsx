import { Button, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import { darkBlue, darkWhiteColor, white } from "../../themes/colors";

const LightButton = ({onPress, title}: ButtonProps) => {
    return CustomButton({onPress: onPress, title: title, textStyle: styles.text, viewStyle: styles.darkButton});
}

const styles = StyleSheet.create({
    darkButton: {
        backgroundColor: darkWhiteColor,
        borderRadius: 20,
        padding: 10,
        borderColor: darkBlue,
        borderWidth: 2,
    },
    text: {
        color: darkBlue,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
    }
});

export default LightButton;