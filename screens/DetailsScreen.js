import React, { Component } from "react";
// import styled from "styled-components/native";
import { Text, Button, StatusBar, StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import HorizontalCalendarList from "../components/calendar/HorizontalCalendarList";

export default class DetailsScreen extends Component {
  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#6a51ae"
          translucent={true}
        />

        <HorizontalCalendarList />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
});
