import React, { useState } from "react";
import { Font, StyleSheet, Platform } from "react-native";
import {
  NavigationNativeContainer,
  SafeAreaView
} from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { activeColor, passiveColor } from "./components/ui/Vars";
import { Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { AppLoading } from "expo";

const statusBarHeight = () => getStatusBarHeight();

if (Platform.OS === "android" && statusBarHeight >= 24) {
  SafeAreaView.setStatusBarHeight(0);
}

import {
  HomeScreen,
  MapScreen,
  SettingsScreen,
  ProfileScreen,
  RecordScreen,
  // quiz
  FirstScreen,
  SecondScreen,
  ThirdScreen
} from "./screens";
// rematch
import { Provider } from "react-redux";
import { init } from "@rematch/core";
import Quiz from "./models/Quiz";
import City from "./models/City";
import Map from "./models/Map";

const store = init({
  models: {
    Quiz,
    City,
    Map
  }
});

// config
const config = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  ...TransitionPresets.SlideFromRightIOS
};

async function loadApp() {
  await Font.loadAsync({
    ...Ionicons.font
  });
}

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={config} headerMode="float">
      <HomeStack.Screen
        name="City"
        component={HomeScreen}
        options={{
          title: "Выберите город"
        }}
      />
      <HomeStack.Screen name="Map" component={MapScreen} />
      <HomeStack.Screen
        name="Record"
        component={RecordScreen}
        options={{
          title: "Запись"
        }}
      />
      <HomeStack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{
          title: "Выбор специалиста"
        }}
      />
      <HomeStack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{
          title: "Выбор услуги"
        }}
      />
      <HomeStack.Screen
        name="ThirdScreen"
        component={ThirdScreen}
        options={{
          title: "Выбор времени"
        }}
      />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={config} headerMode="float">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      {/* <ProfileStack.Screen name="Settings" component={SettingsScreen} /> */}
    </ProfileStack.Navigator>
  );
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApp}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationNativeContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = `ios-paper`;
                } else if (route.name === "Profile") {
                  iconName = `ios-person`;
                }
                return (
                  <Ionicons
                    name={iconName}
                    size={size}
                    color={color}
                    focused={focused}
                  />
                );
              }
            })}
            tabBarOptions={{
              activeTintColor: activeColor,
              inactiveTintColor: passiveColor,
              safeAreaInset: { bottom: "never", top: "never" }
            }}
          >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
          </Tab.Navigator>
        </NavigationNativeContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" }
});
