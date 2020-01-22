import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import AppTextTitle from "../ui/AppTextTitle";
import AppButton from "../ui/AppButton";

const Quiz = props => {
  console.log(props);
  return (
    <View>
      <AppTextTitle>{props.count}</AppTextTitle>
      <AppButton title="+" onPress={() => props.setCount(count++)} />
      <AppButton title="-" onPress={() => props.setCount(count--)} />
      <AppButton
        title="Карта"
        onPress={() => props.navigation.navigate("Map")}
      />
    </View>
  );
};

const mapState = state => ({
  count: state.Quiz.count
});

const mapDispatch = ({ Quiz: { setCount } }) => ({
  setCount
});

export default connect(mapState, mapDispatch)(Quiz);
