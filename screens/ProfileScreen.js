import React from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../components/ui/StatusBar";
import AppTextTitle from "../components/ui/AppTextTitle";
import AppButton from "../components/ui/AppButton";
import { passiveColor, darkBlue } from "../components/ui/Vars";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LightStatusBar />
      <AppTextTitle style={styles.text}>Профиль</AppTextTitle>

      <AppButton
        title="Настройки"
        onPress={() => navigation.navigate("Settings")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: darkBlue
  },
  text: { color: passiveColor }
});

export default ProfileScreen;
