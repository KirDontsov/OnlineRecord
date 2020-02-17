import * as React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { activeColor, windowWidth, windowHeight } from "../ui/Vars";

const Loader = props => (
  <View style={[styles.container]}>
    <ActivityIndicator
      style={{
        flex: 1,
        paddingVertical: "50%"
      }}
      animating={true}
      color={activeColor}
      size={"large"}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth,
    height: windowHeight
  }
});

export default Loader;
