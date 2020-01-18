import React from "react";
import { Text, StyleSheet } from "react-native";
import { blackColor } from "./Vars";

const AppText = props => (
  <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  default: {
    fontSize: 15,
    lineHeight: 28,
    color: blackColor,
    paddingHorizontal: "5%"
  }
});

export default AppText;
