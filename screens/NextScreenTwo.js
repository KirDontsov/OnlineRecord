import React, { Component } from "react";
// import styled from "styled-components/native";
import { Text, Button, StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../components/StatusBar";

export default class NextScreenTwo extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={[styles.container]}>
        <LightStatusBar />

        <Text>Это четвертый экран</Text>
        <Button
          title="Подробнее"
          onPress={() => navigation.navigate("Далее2")}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
});
