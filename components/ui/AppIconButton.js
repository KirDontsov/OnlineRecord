import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { blackColor, activeColor, windowWidth } from "./Vars";

const AppButton = ({ props, children }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={{ ...styles.default, ...props.style }}
      onPress={props.onPress}
      activeOpacity={0.5}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    width: windowWidth,
    height: 50
  },
  default: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "90%",
    marginHorizontal: "auto",
    color: blackColor,
    backgroundColor: activeColor,
    borderRadius: 5,
    position: "relative"
  },
  buttonText: {
    color: "#fff",
    textTransform: "uppercase"
  }
});

export default AppButton;
