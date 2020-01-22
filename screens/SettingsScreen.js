import React, { Component } from "react";
// import styled from "styled-components/native";
import { Text, Button, StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../components/StatusBar";

export default class SettingsScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={[styles.container]}>
        <LightStatusBar />

        <Text>Это настройки</Text>
        <Button
          title="Мой профиль"
          onPress={() => navigation.navigate("Profile")}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
});
