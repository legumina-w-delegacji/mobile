import {StyleSheet, Text, TouchableOpacity, View, TextStyle, ViewStyle } from "react-native";

interface BaseButtonProps {
    title: string;
    onPress: () => void;
    textStyle: TextStyle;
    viewStyle: ViewStyle;
}

const CustomButton = ({onPress, title, textStyle, viewStyle}: BaseButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={viewStyle}>
            <View>
                <Text style={textStyle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default CustomButton;