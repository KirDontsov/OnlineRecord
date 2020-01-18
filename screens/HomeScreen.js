import React, { Component } from "react";
import { StyleSheet, Dimensions, ScrollView, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../components/StatusBar";
import Cities from "../components/Cities";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <LightStatusBar />

      <Cities navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
