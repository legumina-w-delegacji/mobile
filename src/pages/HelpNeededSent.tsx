import { Button, ScrollView, StyleSheet, Text, TextInput, View, ActivityIndicator } from "react-native";
import themeStyles from "../themes/themes";
import Map from "../components/map/Map";
import { useState } from "react";
import { CREATE_EVENT } from "../api/Queries";
import { useMutation } from "@apollo/client";
import DarkButton from "../components/buttons/DarkButton";
import LightButton from "../components/buttons/LightButton";

const HelpNeededSent = () => {
  return (<ScrollView style={styles.container}>
    <View style={themeStyles.card}>
      <Text>
        Przyjęliśmy Twoje zgłoszenie.
        Nasz system oceni priorytet Twojego problemu i zakwaflifikuje go do odpowiedniej kategorii.
        Po dokonaniu kwalifikacji powiadomimy Cię o jej stanie.
      </Text>
    </View>
    <LightButton title="Wróć" onPress={() => {
      navigation.goBack();
    }} />
  </ScrollView>
  );
}

export { HelpNeededSent }