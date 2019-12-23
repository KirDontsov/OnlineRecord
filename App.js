import React, { Component } from "react";
import { Button, View, Text } from "react-native";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  HomeScreen,
  DetailsScreen,
  SettingsScreen,
  ProfileScreen
} from "./screens";

const Tab = createBottomTabNavigator();

const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationNativeContainer>
        <Tab.Navigator>
          <Tab.Screen name="Первый">
            {() => (
              <HomeStack.Navigator>
                <HomeStack.Screen name="Главная" component={HomeScreen} />
                <HomeStack.Screen name="Подробнее" component={DetailsScreen} />
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
    );
  }
}
