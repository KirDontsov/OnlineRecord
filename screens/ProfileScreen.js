import React from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../components/StatusBar";
import Quiz from "../components/quiz/Quiz";
import AppText from "../components/ui/AppText";
import { passiveColor } from "../components/ui/Vars";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LightStatusBar />
      <AppText style={styles.text}>Профиль</AppText>
      <Quiz asd={"1"} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { color: passiveColor }
});

export default ProfileScreen;
