import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import AppTextTitle from "../../components/ui/AppTextTitle";
import AppButton from "../../components/ui/AppButton";
import { passiveColor } from "../../components/ui/Vars";
import Specialists from "../../components/quiz/Specialists";

class FirstScreen extends Component {
  continue() {
    this.props.setStep(1);
  }
  render() {
    const { navigation, route } = this.props;
    // const { itemId } = route.params;
    return (
      <View>
        <AppButton
          title="Пропустить выбор специалиста"
          onPress={() => navigation.navigate("Record")}
        />

        <Specialists navigation={navigation} />
      </View>
    );
  }
}

const mapState = state => ({
  step: state.Quiz.step
});

const mapDispatch = ({ Quiz: { setStep } }) => ({
  setStep
});

export default connect(mapState, mapDispatch)(FirstScreen);
