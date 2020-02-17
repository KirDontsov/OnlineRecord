import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import LightStatusBar from "../components/ui/StatusBar";
import { connect } from "react-redux";
import AppTextTitle from "../components/ui/AppTextTitle";
import AppText from "../components/ui/AppText";

import AppButton from "../components/ui/AppButton";

class RecordScreen extends Component {
  nextSpecialist() {
    this.props.navigation.navigate("FirstScreen");
    this.props.setStep(1);
  }
  nextServices() {
    this.props.navigation.navigate("SecondScreen");
    this.props.setStep(2);
  }
  nextTime() {
    this.props.navigation.navigate("ThirdScreen");
    this.props.setStep(3);
  }

  render() {
    const { navigation } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <LightStatusBar />
        <AppText>Бассейн:</AppText>
        <AppTextTitle> {this.props.chosenFilial}</AppTextTitle>

        <AppButton
          title="Выбрать специалиста"
          onPress={() => this.nextSpecialist()}
        />
        <AppButton title="Выбрать услугу" onPress={() => this.nextServices()} />
        <AppButton title="Выбрать время" onPress={() => this.nextTime()} />
        <AppText>Вы выбрали:</AppText>
        <AppText>{this.props.chosenSpecialist}</AppText>
        <AppText>{this.props.date}</AppText>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

const mapState = state => ({
  step: state.Quiz.step,
  item: state.Quiz.item,
  specialists: state.Quiz.specialists,
  chosenSpecialist: state.Quiz.chosenSpecialist,
  service: state.Quiz.service,
  date: state.Quiz.date,
  chosenFilial: state.Map.chosenFilial
});

const mapDispatch = ({ Quiz: { setStep } }) => ({
  setStep
});

export default connect(mapState, mapDispatch)(RecordScreen);
