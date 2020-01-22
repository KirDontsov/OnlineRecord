import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../components/StatusBar";
import AppText from "../components/ui/AppText";
import Quiz from "../components/quiz/Quiz";

const RecordScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LightStatusBar />
      <AppText style={styles.text}>Запись</AppText>
      <Quiz asd={"1"} navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

export default RecordScreen;
