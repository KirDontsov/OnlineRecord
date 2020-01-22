import React, { useState } from "react";
import { NavigationNativeContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { activeColor, passiveColor } from "./components/ui/Vars";
import {
  HomeScreen,
  MapScreen,
  RecordScreen,
  SettingsScreen,
  ProfileScreen
} from "./screens";
// rematch
import { Provider } from "react-redux";
import { init } from "@rematch/core";
import Quiz from "./models/Quiz";

const store = init({
  models: {
    Quiz
  }
});
// config
const config = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  ...TransitionPresets.SlideFromRightIOS
};
// icons
async function loadApp() {
  await Font.loadAsync({
    ...Ionicons.font
  });
}

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
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
      <HomeStack.Screen name="Record" component={RecordScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator screenOptions={config} headerMode="float">
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Profile" component={ProfileScreen} />
    </SettingsStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={config} headerMode="float">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}

const App = () => {
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
    <Provider store={store}>
      <NavigationNativeContainer>
        <SafeAreaProvider>
          <Tab.Navigator
            screenOptions={
              ({ ...TransitionPresets.SlideFromRightIOS },
              ({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === "Record") {
                    iconName = `ios-paper`;
                  } else if (route.name === "Profile") {
                    iconName = `ios-person`;
                  } else if (route.name === "About") {
                    iconName = `ios-information-circle`;
                  } else if (route.name === "My Records") {
                    iconName = `ios-list-box`;
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
              }))
            }
            tabBarOptions={{
              activeTintColor: activeColor,
              inactiveTintColor: passiveColor,
              safeAreaInset: { bottom: "never", top: "never" }
            }}
          >
            <Tab.Screen name="Record" component={HomeStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
            <Tab.Screen name="About" component={SettingsStackScreen} />
            <Tab.Screen name="My Records" component={HomeStackScreen} />
          </Tab.Navigator>
        </SafeAreaProvider>
      </NavigationNativeContainer>
    </Provider>
  );
};

export default App;
