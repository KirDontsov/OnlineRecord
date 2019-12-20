import React, { Component } from "react";
import styled from "styled-components/native";
import { Button, AsyncStorage, StatusBar } from "react-native";

import { Container, Content } from "native-base";

export default class OtherScreen extends Component {
  static navigationOptions = {
    title: "Назад на главную"
  };

  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <Container>
        <Content>
          <Button title={"Выйти"} onPress={this.signOutAsync}></Button>
          <StatusBar barStyle="default" />
        </Content>
      </Container>
    );
  }
}
