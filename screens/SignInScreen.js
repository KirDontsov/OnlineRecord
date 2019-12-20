import React, { Component } from "react";
import {
  View,
  Button,
  AsyncStorage,
  Alert,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }

  static navigationOptions = {
    title: "Введите логин и пароль"
  };

  signInAsync = async () => {
    const { name, password } = this.state;
    if (name === "admin" && password === "admin") {
      // login

      // // ------- fetch
      // fetch('http://book-service.tw1.su/api/client/login', {
      //   method: 'POST',
      //   body: JSON.stringify(name, password),
      // })
      //   .then(res => {
      //     return res.text();
      //   })
      //   .then(res => console.log(res));
      // // ------- fetch

      await AsyncStorage.setItem("userToken", "admin");
      this.props.navigation.navigate("App");
    } else {
      // error
      Alert.alert("Ошибка", "Неверный логин или пароль", [{ text: "ОК" }]);
    }
  };

  render() {
    return (
      <View>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={text => this.setState({ name: text })}
        />

        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={text => this.setState({ password: text })}
        />
        <Button title="Sign in!" onPress={this.signInAsync} />
      </View>
    );
  }
}
