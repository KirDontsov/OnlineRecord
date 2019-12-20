import React, { Component } from "react";
import styled from "styled-components/native";
import { View, TouchableOpacity, AsyncStorage, Button } from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate("Other");
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: "Вы вошли",
  headerTintColor: "#2A86FF",
  headerStyle: {
    elevation: 0.8,
    shadowOpacity: 0.8
  },
  headerRight: _signOutAsync => (
    <TouchableOpacity style={{ marginRight: 20 }}>
      <Button
        title="Подробнее"
        onPress={navigation.navigate.bind(this, "Other")}
      />
    </TouchableOpacity>
  )
});
