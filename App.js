import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import Loader from "./components/Loader";

import {
  HomeScreen,
  DetailsScreen,
  SettingsScreen,
  ProfileScreen
} from "./screens";

import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      ...Ionicons.font
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <SafeAreaProvider>
        <NavigationNativeContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Первый") {
                  iconName = `ios-home`;
                } else if (route.name === "Второй") {
                  iconName = `ios-settings`;
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              }
            })}
            tabBarOptions={{
              activeTintColor: "#6a51ae",
              inactiveTintColor: "gray"
            }}
          >
            <Tab.Screen name="Первый">
              {() => (
                <HomeStack.Navigator>
                  <HomeStack.Screen name="Главная" component={HomeScreen} />
                  <HomeStack.Screen
                    name="Подробнее"
                    component={DetailsScreen}
                  />
                </HomeStack.Navigator>
              )}
            </Tab.Screen>
            <Tab.Screen name="Второй">
              {() => (
                <SettingsStack.Navigator>
                  <SettingsStack.Screen
                    name="Настройки"
                    component={SettingsScreen}
                  />
                  <SettingsStack.Screen
                    name="Профиль"
                    component={ProfileScreen}
                  />
                </SettingsStack.Navigator>
              )}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationNativeContainer>
      </SafeAreaProvider>
    );
  }
}
