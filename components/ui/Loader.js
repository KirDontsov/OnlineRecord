import * as React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { activeColor } from "../ui/Vars";

const Loader = props => (
  <View style={[styles.container]}>
    <ActivityIndicator animating={true} color={activeColor} size={"large"} />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" }
});

export default Loader;
