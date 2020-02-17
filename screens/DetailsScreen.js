import React, { Component } from "react";
// import styled from "styled-components/native";
import { Text, Button, StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../components/ui/StatusBar";
// import HorizontalCalendarList from "../components/calendar/HorizontalCalendarList";

export default class DetailsScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={[styles.container]}>
        <LightStatusBar />
        <Text>Это второй экран</Text>
        {/* <HorizontalCalendarList /> */}
        <Button title="Далее" onPress={() => navigation.navigate("Главная")} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
});
