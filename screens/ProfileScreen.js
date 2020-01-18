import React, { Component } from "react";
import { Text, Button, StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../components/StatusBar";
import Quiz from "../components/quiz/Quiz";
import { passiveColor } from "../components/ui/Vars";

export default class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <LightStatusBar />

        <Text style={styles.text}>Профиль</Text>
        <Quiz asd={"1"} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { color: passiveColor }
});
