import React, { Component } from "react";
// import styled from "styled-components/native";
import { Text, Button, StatusBar, StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

export default class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={[styles.container]}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#00BCD4"
          translucent={true}
        />

        <Text>Это Главная</Text>
        <Button
          title="Подробнее"
          onPress={() => navigation.navigate("Подробнее")}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
});
