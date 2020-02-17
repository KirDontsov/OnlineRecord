import React, { Component } from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../components/ui/StatusBar";
import AppTextTitle from "../components/ui/AppTextTitle";
import AppButton from "../components/ui/AppButton";
import { passiveColor } from "../components/ui/Vars";

export default class SettingsScreen extends Component {
  render() {
    const { navigation, route } = this.props;
    const { itemId } = route.params;
    return (
      <SafeAreaView style={[styles.container]}>
        <LightStatusBar />

        <AppTextTitle style={styles.text}>Настройки</AppTextTitle>
        <AppTextTitle style={styles.text}>
          {JSON.stringify(itemId)}
        </AppTextTitle>
        <AppButton
          title="Перейти в профиль"
          onPress={() => navigation.navigate("Profile")}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { color: passiveColor }
});
