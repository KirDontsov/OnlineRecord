import React, { Component } from "react";
// import styled from "styled-components/native";
import { View, Text, Button } from "react-native";

export default class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Это Главная</Text>
        <Button
          title="Подробнее"
          onPress={() => navigation.navigate("Подробнее")}
        />
      </View>
    );
  }
}
