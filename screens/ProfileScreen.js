import React, { Component } from "react";
// import styled from "styled-components/native";
import { Text, Button, StatusBar, StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

export default class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: "#6a51ae" }]}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#6a51ae"
          translucent={true}
        />

        <Text style={styles.text}>Профиль</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { color: "#fff" }
});
