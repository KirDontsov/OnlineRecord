import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import AppTextTitle from "../../components/ui/AppTextTitle";
import AppButton from "../../components/ui/AppButton";
import { passiveColor } from "../../components/ui/Vars";
import Services from "../../components/quiz/Services";

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
          title="Пропустить выбор услуги"
          onPress={() => navigation.navigate("Record")}
        />

        {/* <AppTextTitle style={styles.text}>
          {JSON.stringify(itemId)}
        </AppTextTitle> */}

        <Services navigation={navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: passiveColor
  }
});

const mapState = state => ({
  step: state.Quiz.step
});

const mapDispatch = ({ Quiz: { setStep } }) => ({
  setStep
});

export default connect(mapState, mapDispatch)(FirstScreen);
